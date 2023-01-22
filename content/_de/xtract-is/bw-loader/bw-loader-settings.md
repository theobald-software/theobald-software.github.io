---
ref: xi-bw-loader-04
layout: page
title: Settings
description: Settings
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=bw-loader-settings
---
Über den *Settings*-Link im Editor öffnet sich das Einstellungsfenster.

![XIS_BWL_Settings](/img/content/XIS_BWL_Settings.png){:class="img-responsive"}

### General
**Package Size**<br>
definiert, wieviel Datensätze auf einen Rutsch in das BW geladen werden sollen. Je nachdem, welche Folgeaktivitäten im BW für dieses InfoPackage hinterlegt sind, können Werte zwischen 2000 und 20000 sinnvoll sein.

**Wait data transfer to be finished**<br>
Wenn diese Option angehakt ist, wartet die Komponente auf die vollständige Verbuchung der Daten im BW und gibt eventuelle Fehler zurück. Ist die Option nicht gewählt, ist für die Komponente der Datentransfer mit dem Abliefern der Daten im BW erledigt (unabhängig von deren Verbuchung).

**Trigger Process Chain after Upload**<br>
Ist in dieses Textfeld der Name einer BW-Prozesskette eingetragen, wird diese nach dem Ladevorgang automatisch gestartet.

### SAP BI 3rd party notification
**No InfoPackage Start (Only Wait)**<br>
Standardmäßig wird das InfoPackage beim Starten des SSIS-Packete ebenfalls mit gestartet. Wenn diese Option gesetzt ist, passiert das nicht. Die Komponente wartet dann, bis das Infopackage im BW von Hand gestartet wurde.

**Use external Notifier**<br>
Siehe Abschnitt [Externe Benachrichtigung](./externe-benachrichtigung) 

**Request ID variable**<br>
Siehe Abschnitt [Externe Benachrichtigung](./externe-benachrichtigung)

### Performance Improvement
**Debug Details**<br>
Erzeugt mehr und detailliertere Protokolleinträge, die für die Fehlersuche genutzt werden können.

**Enable Parallel Processing**<br>
Erlaubt mehrere gleichzeitge Ladevorgänge ins BW.

**Allow multiple SAP connections**<br>
Erlaubt mehrere gleichzeitige Verbindungen ins SAP, um die Upload-Performance zu steigern.

**Max. Number of Threads**<br>
Die maximale Anzahl an Programm-Threads die Pakete für den Upload vorbereiten und ins BW laden.