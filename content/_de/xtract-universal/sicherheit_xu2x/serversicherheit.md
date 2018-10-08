---
layout: page
title: Serversicherheit
description: Serversicherheit
product: xtract-universal
parent: sicherheit_xu2x
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=serversicherheit
---

**Security Reiter**

Zum Security-Reiter gelangen Sie über Server -> Server Settings.

![Server-Settings-Security](/img/content/Server-Settings-Security.jpg){:class="img-responsive"}

**Allow HTTP access to everybody**  

Alle Rechner haben die Berechtigung, die Extraktionen auszuführen.

**Restrict HTTP access specific machines**

Extraktionen können nur von Rechnern, die in der unten dargestellten schwarzen Box aufgeführt sind, ausgeführt werden.

Um eine Restriktion zu definieren, Wählen Sie *Restrict HTTP access to specific machines*  und klicken Sie auf *Add*

![Server-Settings-Machine-Network](/img/content/Server-Settings-Machine-Network.png){:class="img-responsive"}

Nun können Sie wählen, ob Sie die Restriktion definieren:
- für eine IP-Adresse eines Rechners,  
- für ein Netzwerk (Subnet / Netmask) oder 
- für Hostnamen, wobei Sie hier reguläre Ausdrücke verwenden können, wenn Sie die entsprechende Option selektieren. 


**Zugriff nur lokal zulassen**

Falls Sie die Ausführung der Extraktionen nur lokal zulassen wollen, dann können Sie die IP auf ::1 setzten.<br>
Die Ausführung der Extraktionen kann dann nur direkt auf dem Rechner ausgeführt werden, auf dem der Xtract Universal Server läuft. <br>
Anfragen von anderen Servern werden also nicht durchgestellt.  

![XU-server-security-local](/img/content/XU-server-security-local.jpg){:class="img-responsive"}
