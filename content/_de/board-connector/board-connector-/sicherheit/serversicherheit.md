---
layout: page
title: Serversicherheit
description: Serversicherheit
product: board-connector
parent: sicherheit
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=serversicherheit
---

**Security Reiter**

Zum Security-Reiter gelangen Sie über Server -> Server Settings. 

![Security-Tab-01](/img/content/Security-Tab-01.jpg){:class="img-responsive"}

**Allow HTTP access to everybody**  

Alle Rechner haben die Berechtigung, die Extraktionen auszuführen.

**Restrict HTTP access specific machines**

Extraktionen können nur von Rechnern, die in der unten dargestellten schwarzen Box aufgeführt sind, ausgeführt werden.

Um eine Restriktion zu definieren, Wählen Sie *Restrict HTTP access to specific machines*  und klicken Sie auf *Add* 

![Security-Tab-02](/img/content/Security-Tab-02.png){:class="img-responsive"}

Nun können Sie wählen, ob Sie die Restriktion definieren:
- für eine IP-Adresse eines Rechners,  
- für ein Netzwerk (Subnet / Netmask) oder 
- für Hostnamen, wobei Sie hier reguläre Ausdrücke verwenden können, wenn Sie die entsprechende Option selektieren. 