---
ref: xu-parameters-01
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 5
lang: de_DE
---

# Extraktionsparameter

{% include _content/de/xu-specific/fortgeschrittene-techniken/extraktionsparameter.md %}

### Verbindungsparameter
Analog zu den System- und benutzerdefinierten Parametern können auch die Verbindungseinstellungen zum SAP dynamisch über die URL geändert werden. Das geschieht über den dritten Tabreiter im Run-Dialog.

![Run-Extraction-Connection-Parameters](/img/content/Run-Extraction-Connection-Parameters.png){:class="img-responsive"}

Das Beispiel zeigt die Überschreibung der Verbindungssprache mit folgender URL:

```
http://localhost:8085/?name=plants&lang=DE
```

### Benutzerdefinierte Variablen 

{% include _content/de/xu-specific/fortgeschrittene-techniken/benutzerdefinierte-variablen.md %}
