---
ref: xu-security-xu3-02
layout: page
title: Zugriffsverwaltung
description: Zugriffsverwaltung
product: xtract-universal
parent: sicherheit_in_xu_3_x
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=zugriffsverwaltung1
---

Die Zugriffsverwaltung wird aktiviert, wenn die Checkbox *Restrict Designer access to the following users/groups angehakt wird*.<br>
Danach können sich nur noch die aufgelisteten Benutzer bzw. Benutzergruppen am Designer anmelden.

![Server-Settings_](/img/content/Server-Settings_.jpg){:class="img-responsive"}

**Read, Modify, Create, Admin**<br>
Einem Benutzer/Benutzergruppe können folgende Rechte zugeordnet werden:

**Admin**: Mitglieder dieser Gruppe haben alle Rechte. Sie können alles, was Benutzer mit “Create”-Rechten können.<br>
Darüberhinaus haben sie Admin-Rechte wie das Ändern von Server Settings, Zugriff auf Server Logs oder das Bearbeiten von Benutzern und Verbindungen (SAP und Zielumgebungen). <br>Zugriffseinschränkungen auf Extraktionen oder Quellsystem werden ignoriert.

**Create**: Mitglieder dieser Gruppe können all das, was Benutzer mit “Modify”-Rechten können. 
Darüberhinaus können sie Extraktionen anlegen und klonen. Gruppenmitglieder können keine Admin-Tätigkeiten ausführen.

**Modify**: Mitglieder dieser Gruppe können all das, was Benutzer mit “Read”-Rechten können.<br>
Darüberhinaus können sie bestehende Extraktionen editieren, jedoch keine Extraktionen anlegen oder klonen. 

**Read**: Mitglieder dieser Gruppe können keine Extraktionen editieren, können sie jedoch lesend öffnen.

Diese Rechte beziehen sich auf Aktionen (view, create, change), die im Xtract Universal Designer durchgeführt werden. Sie beziehen sich nicht auf das Asuführen von Extraktionen.