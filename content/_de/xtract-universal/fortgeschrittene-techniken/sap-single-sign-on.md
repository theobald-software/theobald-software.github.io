---
ref: xu-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: xtract-universal
parent: fortgeschrittene-techniken
childidentifier: sap-single-sign-on
permalink: /:collection/:path
weight: 6
lang: de_DE
---


## Anwendungsfall

BI Client Tools wie z.B. Power BI, Power Pivot, Alteryx, etc. können Extraktionen in Xtract-Produkten (z.B. Xtract Universal oder BOARD Connector) starten. 
Die extrahierten Daten werden von Xtract-Produkten direkt in die genannten Tools geladen.
Bei diesem Anwendungsfall besteht häufig die Anforderung, dass die Extraktion mit den SAP-Anmeldeinformationen desjenigen (Windows AD) Benutzers ausgeführt wird, von dessen BI Client die Extraktion angestoßen wurde. 
Dadurch greifen die SAP-Berechtigungen des ausführenden Benutzers, was z.B. bei der Extraktion von BW/BEx Queries wichtig ist.

Die Windows-Anmeldeinformationen des Benutzers müssen über das Xtract-Produkt an SAP weitergeleitet werden. 
Auf dem Weg zu SAP oder auf SAP-Seite wird ein Mapping zwischen Windows-Benutzer und dessen SAP-Anmeldeinformationen durchgeführt.

Single Sign-On (SSO) mit Xtract-Produkten lässt sich über drei unterschiedliche Verfahren realisieren:

- [Secure Network Communication (SNC) mit Client-Zertifikaten](#sso-und-snc-mit-client-zertifikaten)
- [Secure Network Communication (SNC) mit SAPs Kerberos Wrapper Library](#sso-und-snc-mit-kerberos-wrapper-library)
- [SAP Logon Ticket](#sso-via-logon-ticket)


### Was ist SNC?
Secure Network Connection (SNC) ermöglicht die Authentisierung und Transportverschlüsselung zwischen SAP Systemen untereinander, sowie zwischen SAP und Third-Party-Systemen wie Xtract Universal und BOARD Connector.
Für mehr Informationen zu SNC, siehe [SAP Dokumentation: Secure Network Communications](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/LATEST/de-DE/e656f466e99a11d1a5b00000e835363f.html).


## SSO und SNC mit Client-Zertifikaten

### Voraussetzungen

Voraussetzung für die Verwendung der *SSO Certificate* Funktion ist die konkrete Ausprägung der Architektur für SSO: 
- SAP SSO mit X.509 Zertifikaten ohne Secure Login Server muss implementiert sein, siehe [SAP-Dokumentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Microsoft Certificate Store und Active Directory Certificate Templates für SAPGUI/RFC müssen implementiert sein, siehe [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Im AD muss ein Enrollment Agent für Xtract Universal eingerichtet sein, siehe [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents).
- Der SAP Secure Login Client muss auf dem Server installiert sein, auf dem Xtract Universal läuft, siehe [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).
Der Secure Login Client stellt sicher, dass die korrekte SNC Bibliothek für das Szenario verfügbar ist. 
Die Bibliothek wird mit dem Secure Login Client geliefert und wird beim Öffnen der SAP-Verbindung verwendet.
- Der XU-Service muss unter einem Windows AD Service Account ausgeführt werden, siehe [Xtract Universal Dienst unter einem Windows Dienstkonto ausführen](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/service-account).
- Richten Sie für Ihre AD Benutzer eine Zugriffsbeschränkung auf den Xtract Universal Designer und den Server ein, siehe [Zugriffsbeschränkung auf Windows AD Benutzer (Kerberos Authentifizierung)](../../sicherheit/serversicherheit#zugriffsbeschränkung-auf-windows-ad-benutzer-kerberos-authentifizierung).<br>

### Ablauf 

Die folgende Grafik zeigt den Prozess der Authentifizierung über *SSO Certificate*:

![SSO-Certificate](/img/content/sso-certificate.png){:class="img-responsive"}

1. Der Benutzer des BI-Tools (Caller) startet eine Extraktion, indem er den XU-Webservice aufruft.
Der Benutzer authentifiziert sich mit seiner Active Directory Identität gegen den XU-Webservice über HTTPS und SPNEGO.
2. Der XU Server prüft, ob im Certificate Store bereits ein Zertifikat, für den Caller vorhanden ist.
Falls kein Client-Zertifikat für den Caller vorhanden ist, wird über den Windos Enrollment Agent ein Zertifikat ausgestellt. <br>
a) Der XU Server fordert über die Windows API das Client-Zertifikat des Callers vom Winows Certificate Store an. <br>
b) Der XU Server fordert über die Windows API ein Enrollment Agent Zertifikat vom Windows Certificate Store an. 
Das Enrollment Agent Zertifikat kann verwendet werden, um Client-Zertifikate auszustellen.<br>
c) Der XU Server erhält vom Windows Certificate Store das Enrollment Agent Zertifikat. <br>
d) Falls in 2a) im Windows Certificate Store kein Zertifikat für den Caller gefunden wurde, enrollt der XU Server anhand des Enrollment Agent Zertifikats ein neues Client-Zertifikat bei den Active Directory Certificate Services.<br>
e) Der Windows Certificate Store erhält über MSRPC von den Active Directory Services das Client-Zertifikat für den Caller. 
3. Der XU Server erhält vom Windows Certificate Store das Client-Zertifikat des Callers aus Schritt 2.
4. Der XU Server konfiguriert über die Windows Registry den SAP Secure Login Client.
5. Der Secure Login Client erhält das vom XU Server angegebene Client-Zertifikat des Callers aus dem Windows Certificate Store.
6. Der Secure Login Client authentifiziert sich mit dem Client-Zertifikat des Callers via SNC gegen SAP.
7. Der XU Server extrahiert mit der Identität und den Zugriffsrechten des Callers die Daten via RFC aus SAP.
8. Der XU Server sendet die extrahierten Daten aus 7. an den Aufrufer.

### SSO und SNC mit Client-Zertifikaten einrichten

Erstellen Sie für den SSO mit Client-Zertifikaten eine neue SAP-Quelle in Ihrem Xtract-Produkt:

1. Navigieren Sie im Hauptmenü des Designers zu **[Server > Manage Sources]**. Das Fenster "Manage Sources" öffnet sich.<br>
2. Klicken Sie auf **[Add]**, um ein neues SAP-Quellsystem anzulegen.<br>
3. Öffnen Sie den Tab *General* und geben Sie die Verbindungsdetails Ihres SAP-Systems ein.<br>
![SAP-Source-Details](/img/content/xu/sap_source-details.png){:class="img-responsive"}
4. Öffnen Sie den Tab *Authentication* und aktivieren Sie die Option **SNC**.<br>
![sso-certificate-auth](/img/content/sso-certificate-auth.png){:class="img-responsive"}
5. Geben Sie den vollständigen Pfad der 64-bit-Version der SAP-Cryptographic-Library in das Feld *SNC library* ein, z.B. `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
Die SAP Crypto Library wird bei der Installation des SAP Secure Login Clients mitinstalliert.
6. Geben Sie den SNC Partnernamen des SAP Systems in das Feld **SNC partner name** ein. 
Dies ist derselbe Partnername, der auch bei der Einrichtung von SAP GUI als SNC-Name benötigt wird.
7. Aktivieren Sie die Option **Enroll certificate on behalf of caller (Certificate SSO)**.
8. Geben Sie den technischen Namen des Active Directory Certificate Templates an, das für die Authentisierung von SAP Benutzern verwendet wird.
9. Geben Sie den Thumbprint des Zertifikats des Enrollment Agents an. 
Wenn Sie den Namen oder den Thumbprint nicht kennen, wenden Sie sich an die IT-Abteilung, welche die Active Directory Certificate Services betreut.
10. Klicken Sie auf **[Test Client Connection]**, um Ihre Verbindungseinstellungen zu überprüfen.
11. Klicken Sie auf **[OK]**, um Ihre Eingaben zu bestätigen.

{: .box-tip }
**Tipp:** Legen Sie neue Extraktionen in der Testumgebung mit einer SAP-Verbindung an, die **Plain Authentication** verwendet.
Wechseln Sie die SAP-Quelle beim Übergang zur Produktivumgebung.


### Weiterführende Links
- [SAP Dokumentation: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/de-DE/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html)
- [SAP Dokumentation: Logging on with Secure Login Client Using SNC](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/68a6caca798e4adbba5608fb69ea6398.html)


## SSO und SNC mit Kerberos Wrapper Library

{: .box-warning }
**Warnung! Die Kerberos Wrapper Library (gx64krb5.dll) wird offiziell nicht mehr von SAP unterstützt.**

{: .box-warning }
**Warnung! Single Sign-On Verfügbarkeit** <br> 
Der ABAP-Applikationsserver muss auf einem Windows-Betriebssystem laufen. SNC mit Kerberos-Verschlüsselung muss auf SAP-Seite eingestellt sein. <br>

### Voraussetzungen

- Der SAP ABAP Applikationsserver läuft unter einem Windows Betriebssystem. 
- Der BI Client (der die Extraktion aufruft) läuft unter Windows.
- Als SNC-Lösung wird die SAP Kerberos Wrapper Library (gsskrb5) verwendet.

Für detailierte Informationen über die Einrichtung von SSO und SNC mit Kerberos Wrapper Library, siehe [Knowledge Base Artikel: SSO with Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

{: .box-note }
**Hinweis:** Es kann auf einem SAP-System immer nur genau eine SNC-Lösung eingerichtet werden - z.B. SAPs Common Crypto Library **oder** gsskrb5, aber nicht beides gleichzeitig.
SSO und SNC mit Kerberos Wrapper Library funktioniert ausschließlich mit der gsskrb5 Bibliothek. 

### "Double Hop"-Problem

Die SNC-Lösung muss das Weiterreichen der Windows-Anmeldeinformationen durch Xtract-Produkte unterstützen. 
Da Active Directory auf Kerberos basiert, kann es zu einem "Double Hop"-Problem kommen. Hier eine mögliche Lösung dafür: <br>

Aus Sicherheitsgründen erlaubt Kerberos das Weitergeben von Anmeldeinformationen nicht. 
Es gibt jedoch Kerberos-Erweiterungen von Microsoft (S4U-Extensions), die das Weitergeben von Anmeldeinformationen ermöglichen. 
Diese Erweiterungen sind auch als "Constrained Delegation" bekannt. 
Da die Kerberos Wrapper Library die Microsoft-Extensions für Kerberos verwendet, um das Double-Hop-Problem zu umgehen, gibt es die Library nur für Windows. 
Sie funktioniert also nur mit SAP-Applikationsservern unter Windows und Clients unter Windows.

Im Gegensatz zu der Kerberos Wrapper Library (gsskrb5), unterstützt die Common Crypto Library von SAP das Weitergeben von Anmeldeinformationen explizit nicht (Aussage von SAP). 
Die Kerberos Wrapper Library (gsskrb5) von SAP unterstützt das Weitergeben von Anmeldeinformationen und ist bei mehreren Kunden von Theobald Software im Einsatz. 

Bei Verwendung von SNC-Lösungen geliefert von Third-Party-Anbietern, benutzen Sie entweder die Kerberos Wrapper Library oder eine entsprechende Third-Party-Lösung.

### Weiterführende Links
- [Microsoft - Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))
- [Microsoft - Understanding Kerberos Double Hop](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)
- [SAP Dokumentation - Single Sign-On mit Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)


## SSO via SAP Logon Ticket

Falls SNC mit Client-Zertifikaten oder SNC mit SAPs Kerberos Wrapper Library nicht umgesetzt werden können, gibt es die Möglichkeit das SAP/AD-Benutzermapping über ein SAP Portal (SAP Web AS) ohne SNC umzusetzen.

Damit wäre SSO auch möglich, allerdings ist die Verbindung dann nicht verschlüsselt, was bei SNC der Fall wäre. 
Die SAP Applikationsserver müssen dementsprechend nur für SAP Logon Tickets konfiguriert werden und nicht für SNC.

### Voraussetzungen
Eine SAP-Verbindung ist über Single-Sign-On (SSO) mit SAP Logon Ticket möglich. Das grundlegende Szenario sieht dabei folgendermaßen aus:<br>
- Es gibt eine AS Java Instanz, welche für SPNEGO/Kerberos Authentisierung eingerichtet ist. 
- Auf der AS Java Instanz besteht ein Mapping von Windows AD-Benutzern auf SAP-Benutzer (== Ticket Issuer).
- Die AS ABAP Instanzen (mit denen sich Xtract-Produkte verbinden) vertrauen den SAP Logon Tickets dieser AS Java Instanz.

### Ablauf
1. Beim Ausführen der Extraktion authentisiert sich der Benutzer gegenüber dem XU oder BOARD Connector Server (weiter genannt nur Sever) per Kerberos/SPNEGO.
2. Der Server impersoniert den Aufrufer.
3. Der Server authentisiert sich als der Aufrufer per SPNEGO/Kerberos gegenüber AS Java.
4. AS Java bildet Windows Benutzer auf SAP Benutzer ab und stellt ein SAP Logon Ticket für diesen SAP Benutzer aus. Liefert das Logon Ticket im MYSAPSSO2 cookie.
5. Der Server holt SAP Logon Ticket aus Cookie, meldet sich damit am AS ABAP an und führt die Extraktion aus.

Für detailiertere Informationen über den Ablauf und die Einrichtung zum Aufrufen einer Extraktion über SSO mit SAP Logon Ticket, siehe [Knowledge Base Artikel: SSO with Logon-Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

### Weiterführende Links
* [SAP Dokumentation - Kerberos und SAP NetWeaver AS für Java](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/4c/8a4d292e2849a8b7cbd229be5c94a5/frameset.htm)
* [SAP Dokumentation - Anmeldetickets mit AS ABAP verwenden](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/d0/dc33c460a243929b7ec120f55af101/frameset.htm)
* [SAP Dokumentation - AS Java für das Ausstellen von Anmeldetickets konfigurieren](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/4a/412251343f2ab1e10000000a42189c/frameset.htm)
