---
layout: page
title: Eine BW Cube-Quelle definieren
description: Eine BW Cube-Quelle definieren
product: xtract-universal
parent: bw-infocubes-und-bex-queries
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-bw-cube-quelle-definieren
---

Die Cube Datenquelle wurde entwickelt, um Daten aus SAP BW InfoCubes oder Queries (auch bekannt als BEx-Queries) abzuziehen.<br>
Nach der Anlage einer BW Cube-Datenquelle erscheint der Dialog leer.

![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.jpg){:class="img-responsive"}

Um ihn mit Leben zu füllen, klicken Sie bitte auf den Fernglas-Knopf, um einen Cube oder eine Query zu suchen.

Sie können mit Wildcards (also * ) entweder in den verfügbaren InfoCubes oder in den verfügbaren QueryCubes suchen. Sobald Sie den richtigen Cube gefunden haben, markieren Sie ihn und bestätigen Sie mit *OK*.

**Achtung!** Beachten Sie, dass für jede Query, die in dieser Liste erscheinen soll, das Feld *Externen Zugriff  auf diese Query zulassen*  im BEx Query Designer oder im BW Modeling Tool angehakt sein muss. Siehe Eintrag in unserer knowledgebase.

![Look-Up-Cube](/img/content/Look-Up-Cube.png){:class="img-responsive"}

Nachdem ein Cube gewählt wurde, finden Sie auf der linken Seite hierarchisch angeordnet die Kennzahlen (Ordner Key Figures), die Dimensionen und deren Eigenschaften (jeweils im Unterordner Properties jeder Dimension). Um einzelne Parameter für die Extraktion zu wählen, ziehen Sie den gewünschten Knoten per Drag & Drop von der Baumanzeige in die Tabelle rechts. 

Bitte beachten Sie, dass die jeweilige Dimension automatisch mit selektiert wird, auch wenn Sie nur eine einzelne Eigenschaft hinüberziehen.

![Cube-Details](/img/content/Cube-Details.jpg){:class="img-responsive"}

Sobald sie die Definition der gewünschten Ergebnismenge abgeschlossen haben, können Sie die Ausgabe der Extraktion mit Hilfe des Run-Buttons im Browser testen.

Um alle Eigenschaften einer Dimension oder alle Kennzahlen zu selektieren, klicken Sie mit der rechten Maustaste auf den entsprechenden Knoten und wählen Sie die Option *Select for Output*.

Ein Preview im Browser liefert das folgende Ergebnis.

![Cube-Browser-Output](/img/content/Cube-Browser-Output.png){:class="img-responsive"}

Der interessierte Nutzer kann auch den Show MDX-Link im oberen Bereich anklicken. Dann wird das jeweilige, automatisch generierte MDX-Statement angezeigt. Dies dient aber nur zur Information.


![Cube-Extraction-Mdx-Statement](/img/content/Cube-Extraction-Mdx-Statement.png){:class="img-responsive"}


