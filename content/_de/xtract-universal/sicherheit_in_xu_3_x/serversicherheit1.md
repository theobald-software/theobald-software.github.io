---
ref: xu-security-xu3-03
layout: page
title: Serversicherheit
description: Serversicherheit
product: xtract-universal
parent: sicherheit_in_xu_3_x
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=serversicherheit1
---

Dieses Kapitel beschreibt, wie das Ausführen von Extraktionen beschränkt bzw. gesichert werden kann.

Die hierfür notwendigen Einstellungen werden über die Menüleiste - *Server - Settings* vorgenommen.

Das Ausführen von Extraktionen kann auf bestimmte Rechner beschränkt werden. Hierfür muss die Checkbox *Restrict HTTP(S) access to the following machines* angehakt werden.

![XU3_ServerSettings_web_tab](/img/content/XU3_ServerSettings_web_tab.jpg){:class="img-responsive"}

Klicken Sie auf die Add Schaltläche, um einen einzelnen Rechner via IP (*Single machine*), ein Netzwerk (*Network*) oder einen/mehrere Rechner via Namen (*Hostname*) zu definieren, von denen aus Extraktionen angestartet werden dürfen.<br>
Bei der Definition kann mit Subnetzen oder Namensmustern gearbeitet werden.  Für Namensmuster können *regular expressions* verwendet werden.

![XU3_ServerSecurity](/img/content/XU3_ServerSecurity.jpg){:class="img-responsive"}
