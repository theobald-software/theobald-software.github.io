---
ref: xu-introduction-04
layout: page
title: Lizenz
description: Lizenz
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=lizenz
---

Xtract Universal wird standardmäßig mit einer Demo-Lizenz installiert. 

**Lizenz prüfen**

Im Menü des Xtract Designers können Sie unter *Help -> Info* die Lizenz-Details einsehen.   

![Demo_License](/img/content/Demo_License.jpg){:class="img-responsive"}

**Lizenz einspielen** 

Wenn Sie das Produkt erworben haben, bekommen Sie eine Lizenzdatei zugesendet. Ab Xtract Universal Version 2.99.0 werden die Lizenzdateien <br>
im Textformat als json-Dateien ausgeliefert. Davor wurden die Dateien als .dlls ausgeliefert.

- Legen Sie die Lizenzdatei ins Programm-Verzeichnis des Servers ab, auf dem der Xtract Universal Server läuft 
  (standardmäßig C:\Program Files\XtractUniversal). 
- Im Falle von json-Lizenzen werden diese automatisch gezogen.
- Im Falle von dll-Lizenzen stoppen Sie den Xtract Universal Service.
- Starten Sie danach den Xtract Universal Service neu. 
![XU_license](/img/content/xu\json_lizenz_datei.png){:class="img-responsive"}

Falls Sie Server und Designer auf unterschiedlichen Rechnern betreiben, müssen Sie die Lizenz nur ins Programm-Verzeichnis auf dem Server ablegen. Bei gekauften Lizenzen ist der Servername Teil der Lizenzdatei.
![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}
