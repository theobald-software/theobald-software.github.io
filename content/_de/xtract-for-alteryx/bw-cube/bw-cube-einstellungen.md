---
ref: xfa-bw-cube-04
layout: page
title: Extraktionseinstellungen
description: Einstellungen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 4
lang: de_DE
---


### Extraction Settings öffnen

![XU_BWCube_Settings](/img/content/XU_BWCube_Settings1.png){:class="img-responsive"}

### Extraktionseinstellungen

{: .box-note }
**Hinweis:**  Die folgenden Einstellungen sind nur im MDX-Modus verfügbar.

**Package Size**<br>
Definiert, wie viele Datensätze in einem Datenpaket von SAP geholt werden. <br>
Werte zwischen 10.000 und 100.000 sind bei großen Datenmengen sinnvoll. <br>
Wenn der Wert auf 0 gesetzt wird, wird die gesamte Ergebnismenge auf einmal abgerufen.

{: .box-tip }
**Empfehlung**: Definieren Sie immer eine Paketgröße.

**Row Limit**<br>
Definiert die maximale Anzahl von Zeilen in der Ergebnismenge. <br>
Wenn der Wert auf 0 gesetzt wird, wird die komplette Ergebnismenge abgerufen.<br>
Um Tests mit kleinen Datenmengen durchzuführen, können Sie die Zeilengrenze z.B. auf 1000 festlegen.<br>

**Formatted Values** <br>
Wenn diese Checkbox aktiv ist, werden die Werte von Kennzahlen so ausgegeben, wie sie im Query-Designer definiert wurden, z.B. Skalierungsfaktor und Dezimalstellen.

#### Automatic Slicing Dimension

Diese Option definiert eine Dimension für ein automatisches Slicing. 

Bei einem automatischen Slicing werden mehrere kleine Teilmengen extrahiert.
Die Auswahl der Teilmengen basiert auf der gewählten Dimension für das Slicing.

Im ersten Schritt werden unter Berücksichtigung aller Filter und BEx-Variablen alle Merkmale der gewählten Slicing-Dimension bestimmt.
Im zweiten Schritt iteriert die Xtract Cube Komponente durch die Liste der bestimmten Merkmale und 
fügt das jeweils aktuelle Merkmal als Filter für die zu extrahierende Auswahl hinzu.

Auf diese Weise können Pufferüberläufe auf SAP-Seite vermieden werden.

{: .box-note }
**Hinweis:** Setzen Sie **Automatic Slicing Dimension** nur bei Extraktionen ein, die sonst zu Puffferüberläufen auf SAP-Seite führen.
Eine geeignete Slicing-Dimension enthält eine durchschnittliche Anzahl an Merkmalen, z.B. 0COMP_CODE oder 0CALMONTH.

