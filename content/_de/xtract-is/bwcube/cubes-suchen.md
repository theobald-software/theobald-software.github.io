---
ref: xi-bw-cube-01
layout: page
title: Eine BW Cube Extraktion definieren
description: Eine BW Cube-Quelle suchen
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=cubes-suchen
---
Der folgende Abschnitt beschreibt die Anwendung der BW Cube Komponente.

### Eine BW Cube oder Query finden
1. Im Hauptfenster der Komponente klicken Sie auf **[Suche]** (Fernglassymbol).
![Bw-Cube-Data-Source](/img/content/xis/bw-cube-lookup.png){:class="img-responsive"}
Das Fenster "Look Up Cube or Query" öffnet sich.
![Query-LookUp](/img/content/Query-LookUp.png){:class="img-responsive" }
2. Wählen Sie *InfoCubes* oder *QueryCubes*.
3. Durch Eingabe eines Suchnamens in das Feld **Cube Name**, können Sie die Suche einschränken. Starten Sie die Suche duch klicken auf **[Suche]** (Fernglassymbol). Sie können Platzhalter verwenden(*), wenn gewünscht.
4. Wählen Sie ein Element aus der Liste aus.
5. Klicken Sie auf **[OK]**, um die Auswahl zu bestätigen.
![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive"}

Auf der linken Seite des Editors werden alle Dimensionen, Maße und Dimensionseigenschaften angezeigt. Die Kennzahlen (Ordner Key Figures) und Properties (Eigenschaften) jeder Dimension werden hierarchisch in einer Baumansicht dargestellt.<br>

6. Um einzelne Parameter für die Extraktion zu wählen, ziehen Sie den gewünschten Knoten per Drag & Drop von der Baumanzeige in die Tabelle rechts. Bitte beachten Sie, dass die jeweilige Dimension automatisch mit selektiert wird, auch wenn Sie nur eine einzelne Eigenschaft hinüberziehen. Wenn Sie die Eigenschaft einer Dimension wählen, die noch nicht in der Ergebnismenge enthalten ist, wird die Dimension automatisch mit hinzugefügt.
7. Um alle Eigenschaften einer Dimension oder alle Kennzahlen auszuwählen, klicken Sie mit der rechten Maustaste auf den entsprechenden Knoten und wählen Sie die Option *Select for Output*.
8. Sobald mindestens eine Kennzahl gewählt ist, können Sie mit der Schaltfläche **[Preview}]** die Ergebnis-Tabelle erstellen.
9. Um das MDX-Statement zu sehen, das im Hintergrund generiert wird, klicken Sie auf den Link **[MDX anzeigen]** am oberen Rand des Editors. Dies dient aber nur zur Information.

