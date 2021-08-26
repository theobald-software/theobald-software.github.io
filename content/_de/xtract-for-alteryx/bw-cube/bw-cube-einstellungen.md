---
ref: xfa-bw-cube-04
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 4
lang: de_DE
---

### Extraction Settings öffnen

1. Im Hauptfenster des Designers klicken Sie auf **[Extraction Settings]**. Das Fenster “Cube Settings” wird geöffnet.
![Cube Extraction Settings](/img/content/xfa/xfa_cube_settings.png){:class="img-responsive"}
2. Ändern Sie die Einstellungen, falls erforderlich.
3. Klicken Sie auf **[OK]** zum Bestätigen.

### Cube Einstellungen
Das Fenster “Cube Settings” besteht aus zwei Unterabschnitten:
- Extraction Settings
- Automatic Slicing Dimension

#### Extraction Settings
**Package Size**<br>
definiert, wie viele Datensätze in einem Datenpaket von SAP geholt werden. <br>
Werte zwischen 10.000 und 100.000 sind bei großen Datenmengen sinnvoll. <br>
Wenn der Wert auf 0 gesetzt wird, wird die gesamte Ergebnismenge auf einmal abgerufen.

{: .box-tip }
**Empfehlung**: Definieren Sie immer eine Paketgröße.

**Row Limit**<br>
definiert die maximale Anzahl von Zeilen in der Ergebnismenge. <br>
Wenn der Wert auf 0 gesetzt wird, wird die komplette Ergebnismenge abgerufen.<br>
Beim Testen kann es sinnvoll sein, eine Zeilengrenze von z.B. 1000 (**nicht** 0) zu setzen,um einen Test mit einer kleinen Datenmenge durchzuführen.<br>

{: .box-note }
**Hinweis:** wenn Sie den Zeilengrenzwert ändern, denken Sie daran, ihn wieder auf 0 zu setzen, um die vollständige Ergebnismenge zu erhalten.<br>

#### Automatic Slicing Dimension

Diese Option legt eine Dimension für ein automatisches Slicing fest. Unter Slicing versteht man das Auswählen einer Teilmenge eines Würfels durch Auswahl eines einzelnen Wertes für eine seiner Dimensionen. Automatisches Slicing bedeutet, dass für jeden Einzelwert der gewählten Slicing-Dimension (Merkmal) eine Schleife ausgeführt wird, um das Ergebnis aus dem BW zu extrahieren.
Automatic Slicing Dimension ermöglicht die Extraktion einer großen Datenmenge (Millionen von Sätzen) aus dem BW, was bisher aufgrund von Fehlern auf BW-Seite (wie z.B. Pufferüberlauf und Timeout) nicht möglich war.

{: .box-note }
**Hinweis:** Stellen Sie sicher, dass Sie die geeignete Dimension für Automatic Slicing wählen. In einigen Fällen ist es ratsam, eine Dimension mit granulareren Werten zu wählen (z.B. einen bestimmten Zeitabschnitt oder Woche).


