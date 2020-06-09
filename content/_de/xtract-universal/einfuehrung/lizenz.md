---
ref: xu-introduction-05
layout: page
title: Lizenzierung
description: Lizenzierung von Xtract Universal
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=lizenz
---

### Über das Lizenzierungskonzept von Xtract Universal
Die folgende Grafik zeigt, auf welchen Arbeitsplätzen die Installation von Xtract Universal mit einer gültigen Lizenz erforderlich ist.
<br>
![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}<br>

Xtract Universal wird pro Windows Server lizenziert, d.h. die Lizenz ist für den Server notwendig, auf dem die Extraktionen ausgeführt werden. Eine Demo-Lizenz wird automatisch mit der Installation von Xtract Universal installiert. <br>
Eine reguläre Lizenz wird nach dem Kauf des Produkts zur Verfügung gestellt. Die Produktlizenz ist an Ihr Unternehmen und einen bestimmten Servernamen gebunden.<br>
Wenn Sie den Xtract Universal Designer und den Xtract Universal Server auf verschiedenen Rechnern betreiben, muss nur die Demo-Serverlizenz, durch eine reguläre Lizenz ersetzt werden.
 
### Installieren von Xtract Universal Lizenz - XtractUniversalLicense.json
Um die reguläre Lizenz zu installieren, legen Sie die XtractUniversalLicense.json-Datei in das folgende Programm-Verzeichnis des Servers ab:
`C:\Program Files\XtractUniversal` <br>
 ![XU_license](/img/content/xu/xu_json_license.png ){:class="img-responsive"}

Ein Neustart des Xtract Universal Service ist nicht notwendig.

{: .box-tip }
**Tipp:** Um Ihre aktuellen Lizenzdaten einzusehen, wählen Sie in der Hauptmenüleiste vom Xtract Universal Designer  **[Help] > [Info]** oder drücken Sie F12.<br>

![Demo_License](/img/content/xu/xu_demo_license.png){:class="img-responsive"}

Vor der Xtract Universal Version 2.99.0 wurden die Lizenzdateien als .dll Dateien ausgeliefert. Die Prozedur zum Ersetzen einer .dll-Datei-Lizenz ähnelt der Prozedur der .json-Datei. Der Neustart des Xtract Universal Serivce ist bei .dll-Datei unabdingbar.
