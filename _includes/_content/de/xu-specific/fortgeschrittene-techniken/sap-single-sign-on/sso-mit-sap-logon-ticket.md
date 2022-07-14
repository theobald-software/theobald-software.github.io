Eine SAP-Verbindung ist über Single-Sign-On (SSO) mit SAP Logon Ticket möglich. Das grundlegende Szenario sieht dabei folgendermaßen aus:


### Grundlegender Aufbau
Es gibt eine AS Java Instanz, welche für SPNEGO/Kerberos Authentisierung eingerichtet ist. Auf dieser Instanz besteht ein Mapping von Windows AD-Benutzern auf SAP-Benutzer (== Ticket Issuer).
Die AS ABAP Instanzen (mit denen sich Xtract-Produkte verbinden) vertrauen den SAP Logon Tickets dieser AS Java Instanz.

### Ablauf
1. Beim Ausführen der Extraktion authentisiert sich der Benutzer gegenüber dem XU oder BOARD Connector Server (weiter genannt nur Sever) per Kerberos/SPNEGO.
2. Der Server impersoniert den Aufrufer.
3. Der Server authentisiert sich als der Aufrufer per SPNEGO/Kerberos gegenüber AS Java.
4. AS Java bildet Windows Benutzer auf SAP Benutzer ab und stellt ein SAP Logon Ticket für diesen SAP Benutzer aus. Liefert das Logon Ticket im MYSAPSSO2 cookie.
5. Der Server holt SAP Logon Ticket aus Cookie, meldet sich damit am AS ABAP an und führt die Extraktion aus.

Für detailiertere Informationen über den Abluaf, wenn eine Extraktion über SSO mit SAP Logon Ticket aufgerufen wird, siehe [SSO with Logon-Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).


#### Weiterführende Informationen (SAP Online-Help):
* [Kerberos und SAP NetWeaver AS für Java](https://help.sap.com/viewer/8d084639453b41579938aefc0bda7068/2021.001/de-DE/4c8a4d292e2849a8b7cbd229be5c94a5.html)
* [Anmeldetickets mit AS ABAP verwenden](https://help.sap.com/viewer/8d084639453b41579938aefc0bda7068/2021.001/de-DE/4a446f50dc3d2baee10000000a421937.html)
* [AS Java für das Ausstellen von Anmeldetickets konfigurieren](https://help.sap.com/viewer/8d084639453b41579938aefc0bda7068/2021.001/de-DE/4a412251343f2ab1e10000000a42189c.html)
