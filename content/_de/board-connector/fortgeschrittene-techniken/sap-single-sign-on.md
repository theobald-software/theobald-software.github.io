---
ref: bc-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: board-connector
parent: fortgeschrittene-techniken
childidentifier: sap-single-sign-on
permalink: /:collection/:path
weight: 6
lang: de_DE
---

### Anwendungsfall

BI Client Tools wie z.B. Power BI, Power Pivot, Alteryx, etc. können Extraktionen in Xtract-Produkten (z.B. Xtract Universal oder Board Connector) starten. 
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
Secure Network Connection (SNC) ermöglicht die Authentisierung und Transportverschlüsselung zwischen SAP Systemen untereinander, sowie zwischen SAP und Third-Party-Systemen wie Xtract Universal und Board Connector.
Für mehr Informationen zu SNC, siehe [SAP Dokumentation: Secure Network Communications](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/LATEST/de-DE/e656f466e99a11d1a5b00000e835363f.html).


### SSO und SNC mit Client-Zertifikaten

#### Voraussetzungen

Voraussetzung für die Verwendung der *SSO Certificate* Funktion ist die konkrete Ausprägung der Architektur für SSO: 
- SAP SSO mit X.509 Zertifikaten ohne Secure Login Server muss implementiert sein, siehe [SAP-Dokumentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Microsoft Certificate Store und Active Directory Certificate Templates für SAPGUI/RFC müssen implementiert sein, siehe [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Im AD muss ein Enrollment Agent für Board Connector eingerichtet sein, siehe [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents).
- Der SAP Secure Login Client muss auf dem Server installiert sein, auf dem Board Connector läuft, siehe [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).<br>
Der Secure Login Client stellt sicher, dass die korrekte SNC Bibliothek für das Szenario verfügbar ist. 
Die Bibliothek wird mit dem Secure Login Client geliefert und wird beim Öffnen der SAP-Verbindung verwendet.
- Der BC-Service muss unter einem Windows AD Service Account ausgeführt werden, siehe auch [Xtract Universal Service unter einem Windows Dienstkonto ausführen](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/service-account).
- Richten Sie für Ihre AD Benutzer eine Zugriffsbeschränkung auf den Board Connector Designer und den Server ein, siehe [Zugriffsbeschränkung auf Windows AD Benutzer (Kerberos Authentifizierung)](../sicherheit/serversicherheit#zugriffsbeschränkung-auf-windows-ad-benutzer-kerberos-authentifizierung).<br>

Für detailiertere Informationen über den Ablauf und die Einrichtung zum Aufrufen einer Extraktion über SSO mit Client-Zertifikaten, siehe [Knowledge Base Artikel: SSO with Client Certificates](https://kb.theobald-software.com/xtract-universal/sso-with-client-certificates).


### SSO und SNC mit Kerberos Wrapper Library

{: .box-warning }
**Warnung! Die Kerberos Wrapper Library (gx64krb5.dll) wird offiziell nicht mehr von SAP unterstützt.**

{: .box-warning }
**Warnung! Single Sign-On Verfügbarkeit** <br> 
Der ABAP-Applikationsserver muss auf einem Windows-Betriebssystem laufen. SNC mit Kerberos-Verschlüsselung muss auf SAP-Seite eingestellt sein. <br>

#### Voraussetzungen

- Der SAP ABAP Applikationsserver läuft unter einem Windows Betriebssystem. 
- Der BI Client (der die Extraktion aufruft) läuft unter Windows.
- Als SNC-Lösung wird die SAP Kerberos Wrapper Library (gsskrb5) verwendet.

{: .box-note }
**Hinweis:** Es kann auf einem SAP-System immer nur genau eine SNC-Lösung eingerichtet werden - z.B. SAPs Common Crypto Library **oder** gsskrb5, aber nicht beides gleichzeitig.
SSO und SNC mit Kerberos Wrapper Library funktioniert ausschließlich mit der gsskrb5 Bibliothek. 

Für Informationen über die Einrichtung von SSO und SNC mit Kerberos Wrapper Library, siehe [Knowledge Base Artikel: SSO with Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc).

### SSO via SAP Logon Ticket

Falls SNC mit Client-Zertifikaten oder SNC mit SAPs Kerberos Wrapper Library nicht umgesetzt werden können, gibt es die Möglichkeit das SAP/AD-Benutzermapping über ein SAP Portal (SAP Web AS) ohne SNC umzusetzen.

Damit wäre SSO auch möglich, allerdings ist die Verbindung dann nicht verschlüsselt, was bei SNC der Fall wäre. 
Die SAP Applikationsserver müssen dementsprechend nur für SAP Logon Tickets konfiguriert werden und nicht für SNC.

#### Voraussetzungen
Eine SAP-Verbindung ist über Single-Sign-On (SSO) mit SAP Logon Ticket möglich. Das grundlegende Szenario sieht dabei folgendermaßen aus:<br>
- Es gibt eine AS Java Instanz, welche für SPNEGO/Kerberos Authentisierung eingerichtet ist. 
- Auf der AS Java Instanz besteht ein Mapping von Windows AD-Benutzern auf SAP-Benutzer (== Ticket Issuer).
- Die AS ABAP Instanzen (mit denen sich Xtract-Produkte verbinden) vertrauen den SAP Logon Tickets dieser AS Java Instanz.

Für detailiertere Informationen über den Ablauf und die Einrichtung zum Aufrufen einer Extraktion über SSO mit SAP Logon Ticket, siehe [Knowledge Base Artikel: SSO with Logon-Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).
