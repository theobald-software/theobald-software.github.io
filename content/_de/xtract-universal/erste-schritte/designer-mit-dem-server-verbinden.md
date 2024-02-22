---
ref: xu-getting-started-01
layout: page
title: Schritt 1 - Designer mit dem Server verbinden
description: 1 - Designer mit dem Server verbinden
product: xtract-universal
parent: erste-schritte
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---

### Verbindung zu einem Server
1. Starten Sie den Xtract Universal Designer.
2. Verbinden Sie den Designer mit dem Xtract Universal Server und dem Extraktions-Repository.
- Wenn der Xtract Universal Server ein lokaler Server ist, lautet die Serveradresse *localhost*.<br>
Der Standardport (8064) kann je nach Konfiguration variieren.  
![XU3_Designer_Verbinden](/img/content/xu/xu_connect_screen _neu.png){:class="img-responsive"}
- Wenn der Xtract Universal Designer und der Xtract Universal Server nicht auf demselben Rechner laufen, geben Sie den Hostnamen ein, auf dem der Xtract Universal Server läuft. Stellen Sie sicher, dass der Port nicht durch Ihre Firewall blockiert wird.
3. Wenn der Service nicht auf dem Standard-Port 8064 läuft, geben Sie den Port an, indem Sie nach dem Hostnamen [:[port]](../server/ports) eintragen.
Der Standard-Port kann in den [Servereinstellungen](../server/server-einstellungen) konfiguriert werden.

### Authentifizierung
Xtract Universal bietet verschiedene Methoden zur Authentifizierung und Sicherung der Verbindung zwischen Designer und Server. Die Standardauthentifizierungsmethoden sind die Authentifizierung über  *Windows credentials (current user) / Windows-Anmeldeinformationen (aktueller Benutzer)* und *Anonym (keine Verschlüsselung) / Anonymous no encryption*.

![XU3_Designer_Authentifizierung](/img/content/XU3_Designer_Authentication.png){:class="img-responsive"}

#### Änderung der Authentifizierungsmethode
Sobald Sie angemeldet sind, können Sie die Authentifizierungsmethoden aktivieren oder deaktivieren. <br>
1. Navigieren Sie im Hauptfenster des Xtract Universal Designers in die Menüleiste und wählen Sie den Menüpunkt **Server > Einstellungen** aus.  
![Server Einstellungen](/img/content/Server-Settings.png){:class="img-responsive"}
2. Um die Zugriffsrechte einzuschränken, definieren Sie die Benutzer/Gruppen und markieren Sie die Checkbox "Designer-Zugriff auf folgende Benutzer/Gruppen beschränken".
