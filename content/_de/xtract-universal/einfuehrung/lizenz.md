---
ref: xu-introduction-06
layout: page
title: Lizenzierung
description: Lizenzierung von Xtract Universal
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=lizenz
progressstate: 5
---

### Über das Lizenzierungskonzept von Xtract Universal

Eine Demo-Lizenz wird automatisch mit der Installation von Xtract Universal installiert. <br>
Eine reguläre Lizenz wird nach dem Kauf des Produkts im [Kundenportal - My Theobald Software](https://my.theobald-software.com/) zur Verfügung gestellt. 

Die Lizenz ist an Ihre Entität und einen bestimmten Servernamen gebunden.
Die folgende Grafik zeigt, auf welchen Arbeitsplätzen die Installation von Xtract Universal mit einer gültigen Lizenz erforderlich ist.
 
![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}

Die Lizenz definiert folgende Eigenschaften:
- Den Namen des Servers, auf dem der Xtract Universal Server läuft.
- Die [Destinationen](../destinationen), in die Daten extrahiert werden können.
- Die Anzahl der [Extraktionen](../erste-schritte/eine-neue-extraktion-anlegen), die Sie definieren können.

Diese Lizenzeigenschaften werden überprüft, sobald der Xtract Universal Server eine Extraktion ausführt.

{: .box-note }
**Hinweis:** Die Anzahl der definierten Extraktionen und andere Lizenzeigenschaften werden in der [Statusleiste](../designer-overview#statusleiste) des Designers angezeigt.

{: .box-tip }
**Empfehlung:** Erfahrungsgemäß benötigen mittelständige Unternehmen weniger als 100 Extraktionen.

### Installieren von Xtract Universal Lizenz - XtractUniversalLicense.json
Um die reguläre Lizenz zu installieren, legen Sie die XtractUniversalLicense.json-Datei in das folgende Programm-Verzeichnis des Servers ab:
`C:\Program Files\XtractUniversal` <br>
 ![XU_license](/img/content/xu/xu_json_license.png ){:class="img-responsive"}

Ein Neustart des Xtract Universal Service ist nicht notwendig.


### Lizenzen auf einen neuen Server übertragen
Da Lizenzen servergebunden sind, brauchen Sie bei einem Umzug auf einen neuen Server auch eine neue Lizenz.
Kontaktieren Sie unseren Vertrieb unter [sales@theobald-software.com](mailto:sales@theobald-software.com) und teilen Sie uns den Namen des neuen Servers mit. 

Für weitere Informationen zum Thema Migration, siehe [Migration auf eine andere Maschine](../fortgeschrittene-techniken/backup-und-migration#migration-auf-eine-andere-maschine).


### About Xtract Universal - Info-Fenster

{: .box-tip }
**Tipp:** Um Ihre aktuellen Lizenzdaten einzusehen, wählen Sie in der Hauptmenüleiste vom Xtract Universal Designer  **[Help] > [Info]** oder drücken Sie F12.<br>

![Demo_License](/img/content/xu/xu_demo_license.png){:class="img-responsive"}

Der *About* Tab des Infofensters enthält nützliche Links zum Kundenportal, der Knowledge Base, Online Hilfe und zum Support. <br>
![Abot](/img/content/about-xu.png){:class="img-responsive"}

### Wartung
Allgemeine Informationen zu Wartungspreisen finden Sie auf der [offiziellen Website](https://theobald-software.com/xtract-universal/preise-und-bestellungen/) von Theobald Software und auf [My Theobald Software - Portal für Kunden und Partner](https://my.theobald-software.com/). Kontaktieren Sie die [Sales Abteilung](mailto:sales@theobald-software.com) für weitere Informationen über verfügbare Wartungsoptionen.<br>
Bei technischen Problemen wenden Sie sich an das [Support-Team](https://support.theobald-software.com).


****
#### Weiterführende Links
- [My Theobald Software - Portal für Kunden und Partner](https://my.theobald-software.com/)
