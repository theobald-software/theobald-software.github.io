Eine SAP-Verbindung ist über Single-Sign-On (SSO) mit SAP Logon Ticket möglich. Das grundlegende Szenario sieht dabei folgendermaßen aus:


### Grundlegender Aufbau
Es gibt eine AS Java Instanz, welche für SPNEGO/Kerberos Authentisierung eingerichtet ist. Auf dieser Instanz besteht ein Mapping von Windows AD-Benutzern auf SAP-Benutzer (== Ticket Issuer).
Die AS ABAP Instanzen (mit denen sich Xtract-Produkte verbinden) vertrauen den SAP Logon Tickets dieser AS Java Instanz.

{: .box-note }
**Hinweis:** Ab Xtract Universal Version 5.0 werden SAP Passwörter anhand eines Schlüssels verschlüsselt, der von dem Windows Dienstkonto abgeleitet wird, unter dem der Xtract Universal Dienst läuft.
Auf die Passwörter kann man nur von diesem Dienstkonto aus zugreifen. Achten Sie darauf, wenn Sie Backups aufspielen oder Dateien auf eine andere Maschine verschieben.
Wenn Sie das Dienstkonto wechseln, müssen Sie Passwörter manuell neu eingeben.

### Ablauf
1. Beim Ausführen der Extraktion authentisiert sich der Benutzer gegenüber dem XU oder BOARD Connector Server (weiter genannt nur Sever) per Kerberos/SPNEGO.
2. Der Server impersoniert den Aufrufer.
3. Der Server authentisiert sich als der Aufrufer per SPNEGO/Kerberos gegenüber AS Java.
4. AS Java bildet Windows Benutzer auf SAP Benutzer ab und stellt ein SAP Logon Ticket für diesen SAP Benutzer aus. Liefert das Logon Ticket im MYSAPSSO2 cookie.
5. Der Server holt SAP Logon Ticket aus Cookie, meldet sich damit am AS ABAP an und führt die Extraktion aus.


#### Weiterführende Informationen (SAP Online-Help):
* [Kerberos und SAP NetWeaver AS für Java](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/4c/8a4d292e2849a8b7cbd229be5c94a5/frameset.htm)
* [Anmeldetickets mit AS ABAP verwenden](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/d0/dc33c460a243929b7ec120f55af101/frameset.htm)
* [AS Java für das Ausstellen von Anmeldetickets konfigurieren](https://help.sap.com/doc/saphelp_nw75/7.5.5/DE-DE/4a/412251343f2ab1e10000000a42189c/frameset.htm)
