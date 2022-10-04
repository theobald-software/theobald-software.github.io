---
ref: bc-security-05
layout: page
title: Migration nach Board Connector Version 4.x
description: Migration von BC 2.x und BC 3.x nach BC 4.x
product: board-connector
parent: sicherheit
permalink: /:collection/:path
weight: 5
lang: de_DE
progressstate: 5
---

Es gibt zwei Möglichkeiten, die Produktversion von Board Connector Version 2.x und 3.x auf Version 4.x zu upgraden:
- Upgrade während der Installation
- Manuelles Upgrade

### Upgrade während der Installation
1. Starten Sie das [Setup](../einfuehrung/installation-und-update).
2. Markieren Sie die Checkbox **Convert config files**.<br>
Die Option *Convert config files* ruft den *ConfigConverter* auf, der gewährleistet, dass alle Extraktionen, Quellsysteme, Server- und Benutzersettings aus BC 2.x und BC 3.x in der neuen Version bereitstehen. <br>
Mehr Informationen über die Dateien im Installationsordner finden Sie im Abschnitt [Installation und Update](../einfuehrung/installation-und-update).
![BC4_Migration_1](/img/content/BC4_Migration_1.png){:class="img-responsive"}
3. Confirm the conversion process in the command line pop-up window.  
![BC4_Migration_2](/img/content/BC4_Migration_2.png){:class="img-responsive"}

### Manuelles Upgrade
Wird der *ConfigConverter* nicht automatisch bei der Installation ausgeführt, kann dieser auch nachträglich manuell aus dem Installationsverzeichnis ``C:\Program Files\BOARDConnector`` gestartet werden. <br>

![BC4_Migration_3](/img/content/BC4_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Hinweis:** Alle Probleme, die während des Konvertierungsprozesses auftreten können, werden im Befehlszeilenfenster angezeigt. Kopieren Sie den Befehlszeilenkontext und senden Sie ihn bei Bedarf an das Support-Team.  


