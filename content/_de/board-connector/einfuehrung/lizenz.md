---
ref: bc-introduction-05
layout: page
title: Lizenz
description: Lizenz
product: board-connector
parent: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
---

Der BOARD Connector wird standardmäßig mit einer Demo-Lizenz installiert. Im Menü des BOARD Connector Designers können Sie unter *Help -> Info* die Lizenz-Details einsehen.  

![BOARDConnector_Demo_License](/img/content/BOARDConnector_Demo_License.png){:class="img-responsive"} 


Wenn Sie das Produkt erworben haben, bekommen Sie eine Lizenzdatei zugesendet. Ab BOARD Connector Version 2.28.0 werden die Lizenzdateien im Textformat als json-Dateien ausgeliefert. Davor wurden die Dateien als .dlls ausgeliefert.

- Legen Sie die Lizenzdatei ins Programm-Verzeichnis des Servers ab, auf dem der BOARD Connector Server läuft 
  (standardmäßig C:\Program Files\BOARDConnector). 
- Im Falle von json-Lizenzen werden diese automatisch gezogen.
- Im Falle von dll-Lizenzen stoppen Sie den BOARD Connector Service.
- Starten Sie danach den BOARD Connector Service neu.

![BOARDConnector_License_Folder](/img/content/BOARDConnector_License_Folder.png){:class="img-responsive"}

Falls Sie Server und Client Komponente auf getrennten Maschinen betreiben, braucht die Lizenz nur auf dem Server ersetzt zu werden. Bei gekauften Lizenzen ist der Servername Teil der Lizenzdatei.