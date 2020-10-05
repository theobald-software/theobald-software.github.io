---
ref: bc-introduction-05
layout: page
title: Lizenzierung
description: Lizenzierung
product: board-connector
parent: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
progressstate: 5
---

### Über das Lizenzierungskonzept von BOARD Connector

BOARD Connector wird pro Windows Server lizenziert, d.h. die Lizenz ist für den Server notwendig, auf dem die Extraktionen ausgeführt werden. Eine Demo-Lizenz wird automatisch mit der Installation von BOARD Connector installiert. <br>
Eine reguläre Lizenz wird nach dem Kauf des Produkts zur Verfügung gestellt. Die Lizenz ist an Ihre Entität und einen bestimmten Servernamen gebunden.<br>
Wenn Sie den BOARD Connector Designer und den  BOARD Connector Server auf verschiedenen Rechnern betreiben, muss nur die Demo-Serverlizenz, durch eine reguläre Lizenz ersetzt werden.
 

### Installieren von BOARD Connector Lizenz - BoardConnectorLicense.json
Um die reguläre Lizenz zu installieren, legen Sie die BoardConnectorLicense.json-Datei in das folgende Programm-Verzeichnis des Servers ab:<br>
`C:\Program Files\BoardConnector`
 <br>
 ![BC_license](/img/content/BOARDConnector_License_Folder.png ){:class="img-responsive"}
 
Ein Neustart des BOARD Connector Service ist nicht notwendig.

{: .box-tip }
**Tipp:** Um Ihre aktuellen Lizenzdaten einzusehen, wählen Sie in der Hauptmenüleiste vom BOARD Connector Designer  **[Help] > [Info]** oder drücken Sie F12.

![Demo_License](/img/content/BOARDConnector_Demo_License.png){:class="img-responsive"}

In früheren Versionen von BOARD Connector wurde die Lizenz in Form einer .dll-Datei ausgeliefert. Die Prozedur zum Ersetzen einer .dll-Datei-Lizenz ähnelt der Prozedur der .json-Datei. Der Neustart des BOARD Connector Service ist bei einer .dll-Datei unabdingbar.

### Wartung
Allgemeine Informationen zu Wartungspreisen finden Sie auf der [offiziellen Website] (https://www.theobald-software.com/en/xtract-for-alteryx/xtract-for-alteryx-pricing-order/) von Theobald Software. Kontaktieren Sie die [Sales Abteilung](mailto:sales@theobald-software.com) für weitere Informationen über verfügbare Wartungsoptionen.<br>
Bei technischen Problemen wenden Sie sich  per E-Mail an das Support-Team: [support@theobald-software.com](mailto:support@theobald-software.com).


****
##### Verwandte Links
- [Kundenportal - My Theobald Software](https://my.theobald-software.com/)
