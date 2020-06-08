---
ref: bc-security-05
layout: page
title: Migration nach BOARD Connector Version 4.x
description: Migration von BC 2.x und BC 3.x nach BC 4.x
product: board-connector
parent: security
permalink: /:collection/:path
weight: 5
lang: de_DE

progressstate: 5
---

Es gibt zwei Möglichkeiten, die Produktversion von BOARD Connector Version 2.x und 3.x auf Version 4.x zu upgraden:
- Upgrade während der Installation
- Manuelles Upgrade

### Upgrade während der Installation
1. Starten Sie die [Installationsroutine](../einfuehrung/installation).
2. Markieren Sie das Kästchen **Convert config files**.<br>
Die Option *Convert config files* ruft den *ConfigConverter* auf, der gewährleistet, dass alle Extraktionen, Quellsysteme, Destinationen, Server- und Benutzersettings aus BC 2.x und BC 3.x in der neuen Version bereitstehen. <br>
Mehr Informationen über die Dateien im Installationsordner finden Sie im Abschnitt [Installation und Backup](../einfuehrung/installation).
![BC4_Migration_1](/img/content/BC4_Migration_1.png){:class="img-responsive"} <br>
3. Confirm the conversion process in the command line pop-up window. <br>
![BC4_Migration_2](/img/content/BC4_Migration_2.png){:class="img-responsive"} <br>

### Manuelles Upgrade
Wird der *ConfigConverter* nicht automatisch bei der Installation ausgeführt, kann dieser auch nachträglich manuell aus dem Installationsverzeichnis ``C:\Program Files\XtractUniversal gestartet werden.C:\Program Files\BoardConnector``. <br>

![BC4_Migration_3](/img/content/BC4_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Hinweis:** Alle Probleme, die während des Konvertierungsprozesses auftreten können, werden im Befehlszeilenfenster angezeigt. Kopieren Sie den Befehlszeilenkontext und senden Sie ihn bei Bedarf an das Support-Team.  

*******
#### Weiterführende Links
- [Installation eines Updates](../einfuehrung/update)
