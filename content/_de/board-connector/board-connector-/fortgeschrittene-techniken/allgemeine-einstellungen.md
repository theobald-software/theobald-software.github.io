---
layout: page
title: Allgemeine Einstellungen
description: Allgemeine Einstellungen
product: board-connector
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=allgemeine-einstellungen
---

Jeder Extraktionsdialog hat den Link General Settings, der allgemeine Einstellungen beinhaltet, die vom jeweiligen Extraktionstyp unabhängig sind.

**Misc. Reiter** 

![General-Settings](/img/content/General-Settings.jpg){:class="img-responsive"}

**Disable Buffer**<br>
Schaltet die Pufferung der Extraktion aus. Diese Einstellung überschreibt die Einstellungen des Servers *BufferExtractionCount undBufferLifespanMinutes*.<br>
Wenn in sehr kurzen Zeitabständen (siehe Server-Einstellung BufferLifespanMinutes) die Daten abgerufen werden, werden die Daten aus dem Puffer geliefert. Das steigert die Performance und limitiert den Impact auf das SAP-System. Wenn dieses Verhalten nicht gewünscht ist (z.B. weil die Daten immer 100% aktuell sein müssen), muss die Pufferung explizit ausgeschaltet werden

**Preview Mode**<br>

Wenn diese Option aktiviert ist, dann wird entweder eine kleine Datenmenge (wenn möglich) aus SAP extrahiert oder Testdaten generiert.

**Keywords**

Sie können einer Extraktion ein oder mehrere Keywords (Tags) zuweisen. Im Designer könnten Sie dann die Extraktionen nach diesen Keywords filtern. 

Der Security Reiter ist im Kapitel [Extraktionssicherheit]()  beschrieben.