---
ref: bc-getting-started-01
layout: page
title: Schritt 1 - Designer mit dem Server verbinden
description: Schritt 1 - Designer mit dem Server verbinden
product: board-connector
parent: erste-schritte
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

### Verbindung zu einem Server
1. Starten Sie den Board Connector Designer.
2. Verbinden Sie den Designer mit dem Board Connector Server und dem Extraktions-Repository.
- Wenn der Board Connector Server ein lokaler Server ist, lautet die Serveradresse *localhost*.<br>
Der Standardport (8096) kann je nach Konfiguration variieren.  
![XU3_Designer_Connect](/img/content/board/bc_connect_screen.png){:class="img-responsive"}
- Wenn der Board Connector Designer und der Board Connector Server nicht auf demselben Rechner laufen, geben Sie den Hostnamen ein, auf dem der Board Connector Server läuft. Stellen Sie sicher, dass der Port nicht durch Ihre Firewall blockiert wird.
3. Wenn der Service nicht auf dem Standard-Port 8096 läuft, geben Sie den Port an, indem Sie nach dem Hostnamen [:[port]](../server/ports) eintragen.
Der Standard-Port kann in den [Servereinstellungen](../server/server-einstellungen) konfiguriert werden.

### Authentifizierung
Board Connector bietet verschiedene Methoden zur Authentifizierung und Sicherung der Verbindung zwischen Designer und Server. Die Standardauthentifizierungsmethoden sind die Authentifizierung über  *Windows credentials (current user) / Windows-Anmeldeinformationen (aktueller Benutzer)* und *Anonym (keine Verschlüsselung) / Anonymous no encryption*.

![XU3_Designer_Authentication](/img/content/board/bc_Designer_Authentication.png){:class="img-responsive"}

#### Änderung der Authentifizierungsmethode
Sobald Sie angemeldet sind, können Sie die Authentifizierungsmethoden aktivieren oder deaktivieren. <br>
1. Navigieren Sie im Hauptfenster des Board Connector Designers in die Menüleiste und wählen Sie den Menüpunkt **Server > Settings** aus.  
![Server Einstellungen](/img/content/Server-Settings.png){:class="img-responsive"}
2. Um die Zugriffsrechte einzuschränken, definieren Sie die Benutzer/Gruppen und markieren Sie die Checkbox "Restrict Designer access to the following users/groups" (Designer-Zugriff auf folgende Benutzer/Gruppen beschränken).

****
#### Weiterführende Links
- [Board Manual](https://www.boardmanual.com/)
- [Board Connector Server](../server)

