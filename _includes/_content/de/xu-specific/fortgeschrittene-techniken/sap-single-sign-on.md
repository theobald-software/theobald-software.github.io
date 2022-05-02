
### Anwendungsfall

BI Client Tools wie z.B. Power BI, Power Pivot, Alteryx, etc. können Extraktionen in Xtract-Produkten (z.B. Xtract Universal oder BOARD Connector) starten. Die extrahierten Daten werden von Xtract-Produkten direkt in genannten Tools geladen.
Bei diesem Anwendungsfall besteht häufig die Anforderung, dass die Extraktion mit den SAP-Anmeldeinformationen desjenigen (Windows AD) Benutzers ausgeführt wird, von dessen BI Client die Extraktion angestoßen wurde. Dadurch greifen die SAP-Berechtigungen des ausführenden Benutzers, was z.B. häufig bei der Extraktion von BW/BEx Queries wichtig ist.

Die Windows-Anmeldeinformationen des Benutzers müssen über das Xtract-Produkt an SAP weitergeleitet werden. 
Auf dem Weg zu SAP oder auf SAP-Seite wird ein Mapping zwischen Windows-Benutzer und dessen SAP-Anmeldeinformationen durchgeführt.

Single Sign-On (SSO) mit Xtract-Produkten lässt sich über drei unterschiedliche Verfahren darstellen:

- Secure Network Communication (SNC) mit Client-Zertifikaten
- Secure Network Communication (SNC) mit SAPs Kerberos Wrapper Library
- SAP Logon Ticket

### SSO und SNC mit Client-Zertifikaten

Die folgende Grafik zeigt den Prozess der Authentifizierung über Xtract Universal's *SSO Certificate* Option:

![SSO-Certificate](/img/content/sso-certificate.png){:class="img-responsive"}

1. Der Benutzer des BI-Tools startet eine Extraktion, indem er den XU Webservice aufruft.
Der Benutzer authentifiziert sich mit seiner Active Directory Identität gegen den XU Webservice über HTTPS und SPNEGO.
2. a) Der XU Server fordert über die Windows API das Client-Zertifikat des BI-Tool Benutzers vom Winows Certificate Store an. <br>
b) Der XU Server fordert über die Windows API ein Agent-Zertifikat vom Winows Certificate Store an. 
Falls das Client-Zertifikat des BI-Tool Benutzers im Windows Store nicht vorhanden ist, wird das Agent-Zertifikat verwendet, um ein entsprechendes Zertifikat auszustellen, siehe 2d.<br>
c) Der XU Server erhält vom Windows Certificate Store ein Agent-Zertifikat, das den Server ermächtigt, Client-Zertifikate auszustellen. <br>
d) <br>
e) Der Windows Certificate Store erhält über MSRPC vom Active Directory Store ein Client-Zertifikat für den BI-Tool Benutzer. 
3. Der XU Server erhält vom Windows Certificate Store das Client-Zertifikat des BI-Tool Benutzers.
4. Der XU Server konfiguriert über die Windows Registry den SAP Secure Login Client.
5. Der Secure Login Client erhält das vom XU Server angegebene Client-Zertifikat aus dem Windows Certificate Store.
6. Der Secure Login Client authentifiziert sich mit dem Client Zertifikat des BI-Tool Benutzers über SNC gegen SAP.
7. Der XU Server extrahiert mit der Identität und den Zugriffsrechten des Aufrufers (BI-Tool Benutzer) die Daten via RFC aus SAP.
8. Der XU Server sendet die extrahierten Daten aus 7. an den Aufrufer.


### SSO und SNC mit Kerberos Wrapper Library

{: .box-warning }
**Warnung! Die Kerberos Wrapper Library (gx64krb5.dll) wir offiziel nicht mehr von SAP unterstützt.**

{: .box-note }
**Hinweis:** Es kann auf einem SAP-System immer nur genau eine SNC-Lösung eingerichtet werden - z.B. SAPs Common Crypto Library **oder** gsskrb5, aber nicht beides gleichzeitig.

Das hier beschriebene Verfahren funktioniert ausschließlich mit der gsskrb5. 

Die SNC-Lösung muss das Weiterreichen der Windows-Anmeldeinformationen durch Xtract-Produkte unterstützen. 
Da Active Directory auf Kerberos basiert, kann es zu einem "Double Hop"-Problem kommen. Eine mögliche Lösung dafür ist die folgende: <br>

Aus Sicherheitsgründen erlaubt Kerberos das Weitergeben von Anmeldeinformationen nicht. Es gibt jedoch Kerberos-Erweiterungen von Microsoft (S4U-Extensions), die das Weitergeben von Anmeldeinformationen ermöglichen. Diese Erweiterungen sind auch als "Constrained Delegation" bekannt.

Im Gegensatz zu der Kerberos Wrapper Library (gsskrb5), unterstützt die Common Crypto Library von SAP das Weitergeben von Anmeldeinformationen explizit nicht (Aussage von SAP). Die Kerberos Wrapper Library (gsskrb5) von SAP unterstützt das Weitergeben von Anmeldeinformationen und ist bei mehreren Kunden von Theobald Software im Einsatz. 

Bei Verwendung von SNC-Lösungen geliefert von Third-Party-Anbietern, benutzen Sie entweder die Kerberos Wrapper Library oder eine entsprechende Third-Party-Lösung.

{: .box-note }
**Hinweis:** da die Kerberos Wrapper Library die Microsoft-Extensions für Kerberos verwendet, um das Double-Hop-Problem zu umgehen, gibt es die Library nur für Windows. Sie funktioniert also nur mit SAP-Applikationsservern unter Windows und Clients unter Windows.


Voraussetzungen für das Nutzen von SNC mit Kerberos Wrapper Library:

1. Der SAP ABAP Applikationsserver läuft unter einem Windows Betriebssystem. 
2. Der BI Client (der die Extraktion in  Xtract Universal aufruft) läuft unter Windows.
3. Als SNC-Lösung wird die SAP Kerberos Wrapper Library (gsskrb5) verwendet.

Weitere Informationen finden Sie in den folgenden Quellen:
- [Microsoft - Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))
- [Microsoft - Understanding Kerberos Double Hop](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)
- [SAP Help - Single Sign-On mit Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)





### SSO in Xtract Universal via SAP Logon Ticket

Falls eine der oben genannten Voraussetzungen nicht erfüllt sein sollten (insbesondere Einsatz der Kerberos Library nicht möglich oder der SAP Applikationsserver läuft nicht unter Windows), gibt es die Möglichkeit, das SAP/AD-Benutzermapping über ein SAP Portal (SAP Web AS) ohne SNC umzusetzen.

Damit wäre SSO auch möglich, allerdings ist die Verbindung dann nicht verschlüsselt, was bei SNC der Fall wäre. Andererseits müssen die SAP Applikationsserver auch nur für SAP Logon Tickets konfiguriert werden und nicht für SNC.
 