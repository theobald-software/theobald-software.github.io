
### Anwendungsfall

BI Client Tools wie z.B. Power BI, Power Pivot, Alteryx, etc. können Extraktionen in Xtract-Produkten (z.B. Xtract Universal oder BOARD Connector) starten. Die extrahierten Daten werden von Xtract-Produkten direkt in genannten Tools geladen.
Bei diesem Anwendungsfall besteht häufig die Anforderung, dass die Extraktion mit den SAP-Anmeldeinformationen desjenigen (Windows AD) Benutzers ausgeführt wird, von dessen BI Client die Extraktion angestoßen wurde. Dadurch greifen die SAP-Berechtigungen des ausführenden Benutzers, was z.B. häufig bei der Extraktion von BW/BEx Queries wichtig ist.

Die Windows-Anmeldeinformationen des Benutzers müssen über das Xtract-Produkt an SAP weitergeleitet werden. Auf dem Weg zu SAP oder auf SAP-Seite wird ein Mapping zwischen Windows-Benutzer und dessen SAP-Anmeldeinformationen durchgeführt.

Single Sign-On (SSO) mit Xtract-Produkten lässt sich über zwei unterschiedliche Verfahren darstellen:

- Secure Network Communication (SNC) mit SAPs Kerberos Wrapper Library
- SAP Logon Ticket



### SSO und SNC mit Kerberos Wrapper Library

{: .box-note }
**Hinweis:** Es kann auf einem SAP-System immer nur genau eine SNC-Lösung eingerichtet werden - also z.B. SAPs Common Crypto Library **oder** gsskrb5, aber nicht beides gleichzeitig.

Das hier beschriebene Verfahren funktioniert ausschließlich mit der gsskrb5. 

SNC-Lösung muss das Weiterreichen der Windows-Anmeldeinformationen durch Xtract-Produkte unterstützen. 
Da Active Directory auf Kerberos basiert, kann es zu einem "Double Hop"-Problem kommen. Eine mögliche Lösung dafür ist die folgende: <br>

Aus Sicherheitsgründen erlaubt Kerberos das Weitergeben von Anmeldeinformationen nicht. Es gibt jedoch Kerberos-Erweiterungen von Microsoft (S4U-Extensions), die das Weitergeben von Anmeldeinformationen ermöglichen. Diese Erweiterungen sind auch als "Constrained Delegation" bekannt.

Im Gegensatz zu der Kerberos Wrapper Library (gsskrb5), unterstützt die Common Crypto Library von SAP das Weitergeben von Anmeldeinformationen explizit nicht (Aussage von SAP). Die Kerberos Wrapper Library (gsskrb5) von SAP unterstützt das Weitergeben von Anmeldeinformationen und ist bei mehreren Kunden von Theobald Software im Einsatz. 

Bei Verwendung von SNC-Lösungen geliefert von Third-Party-Anbietern, benutzen Sie entweder die Kerberos Wrapper Library oder eine entsprechende Third-Party-Lösung.

{: .box-note }
**Hinweis:** da die Kerberos Wrapper Library die Microsoft-Extensions für Kerberos verwendet, um das Double-Hop-Problem zu umgehen, gibt es die Library nur für Windows. Sie funktioniert also nur mit SAP-Applikationsservern unter Windows und Clients unter Windows.


Unabdingbare Voraussetzungen für das Nutzen von SNC mit Kerberos Wrapper Library:

1. Der SAP ABAP Applikationsserver läuft unter einem Windows Betriebssystem. 
2. Der BI Client (der die Extraktion in  Xtract Universal aufruft) läuft unter Windows.
3. Als SNC-Lösung wird die SAP Kerberos Wrapper Library (gsskrb5) verwendet.

Weitere Informationen finden Sie in den folgenden Quellen:

[Microsoft - Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))

[Microsoft - Understanding Kerberos Double Hop](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)

[SAP help - Single Sign-On mit Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)





### SSO in Xtract Universal via SAP Logon Ticket

Falls eine der oben genannten Voraussetzungen nicht erfüllt sein sollten (insbesondere Einsatz der Kerberos Library nicht möglich oder der SAP Applikationsserver läuft nicht unter Windows), gibt es die Möglichkeit, das SAP/AD-Benutzermapping über ein SAP Portal (SAP Web AS) ohne SNC umzusetzen.

Damit wäre SSO auch möglich, allerdings ist die Verbindung dann nicht verschlüsselt, was bei SNC der Fall wäre. Andererseits müssen die SAP Applikationsserver auch nur für SAP Logon Tickets konfiguriert werden und nicht für SNC.
 