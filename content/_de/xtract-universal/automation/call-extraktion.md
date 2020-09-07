---
ref: xu-run-dialog-01
layout: page
title: Extraktion ausführen
description: Extraktion manuell mit dem Run Dialog ausführen
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 1
lang: de_DE
---

Xtract Universal bietet zwei Möglichkeiten, um eine angelegte Extraktion auszuführen:
- [Aufruf der mitgelieferten Kommandozeile](./call-via-commandline) , welche in einer Windows- und einer Linux-Version angeboten wird oder 
- [Aufruf via Webservice-Call](./call-via-webservice). Diese Option eignet sich insbesondere für eine webbasierte Umgebung. 

### Extraktion im Designer manuell ausführen 
Um eine Extraktion im Designer manuell und direkt auszufüren, klicken Sie auf die entsprechende Extraktion und wählen Sie mit der rechten Maustaste eine der folgenden Optionen wählen:
- **Run in xu.exe**: Um die Extraktion mit der Kommadozeile direkt ausführen
- **Run in browser**: Um die Extraktion über einen Webservice-Aufruf direkt im Browser ausführen

![Run](/img/content/xu/automation/xu-extraction-right-click-run.png){:class="img-responsive"}

### Run Dialog 

Um eine Extraktion im Designer mit weiteren Optionen auszuführen, nutzen Sie das Run-Dialog. Dazu selektieren Sie die entsprechende Extraktion und:
- wählen Sie mit der rechten Maustaste die Option **Run** oder
- klicken Sie die Schaltfläche **Run** im Designer.

**URL**<br>
Das URL-Feld zeigt die URL der Extraktion. Diese enthält den Host bzw. IP und die Portnummber des XU-Servers sowie den Namen der Extraktion. Diese URL kann dann für den Aufruf der Extraktion verwendet.
```
http://localhost:8065/?name=Plants
```

Mit dem Knopf oben rechts können Sie die URL in den Zwischenspeicher kopieren. 

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

Die [Parameter](./xu-parameter) werden separat ausführlich beschrieben.
