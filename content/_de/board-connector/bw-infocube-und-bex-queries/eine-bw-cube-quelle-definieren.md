---
ref: bc-bw-infocubes-and-bex-queries-01
layout: page
title: Eine BW Cube-Quelle definieren
description: Eine BW Cube-Quelle definieren
product: board-connector
parent: bw-infocube-und-bex-queries
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=eine-bw-cube-quelle-definieren
---

Die Cube Datenquelle wurde entwickelt, um Daten aus SAP BW InfoCubes oder Queries (auch bekannt als BEx-Queries) abzuziehen.<br>
Nach der Anlage einer BW Cube-Datenquelle erscheint der Dialog leer.

![BWCube-Extraction-01](/img/content/BWCube-Extraction-01.png){:class="img-responsive"}

Um ihn mit Leben zu füllen, klicken Sie bitte auf den Fernglas-Knopf, um einen Cube oder eine Query zu suchen.

Sie können mit Wildcards (also * ) entweder in den verfügbaren InfoCubes oder in den verfügbaren QueryCubes suchen. Sobald Sie den richtigen Cube gefunden haben, markieren Sie ihn und bestätigen Sie mit *OK*.

Achtung! Beachten Sie, dass jede Query, die in dieser Liste erscheinen soll, mit dem Attribut *Externen Zugriff* erlauben versehen sein muss. Bitte werfen Sie einen Blick in die SAP-Query-Designer-Dokumentation, falls Sie nicht wissen, wie das geht.

![BWCube-LookUp](/img/content/BWCube-LookUp.png){:class="img-responsive"}

Nachdem ein Cube gewählt wurde, finden Sie auf der linken Seite hierarchisch angeordnet die Kennzahlen (Ordner Key Figures), die Dimensionen und deren Eigenschaften (jeweils im Unterordner Properties jeder Dimension). Um einzelne Parameter für die Extraktion zu wählen, ziehen Sie den gewünschten Knoten per Drag & Drop von der Baumanzeige in die Tabelle rechts. 

Bitte beachten Sie, dass die jeweilige Dimension automatisch mit selektiert wird, auch wenn Sie nur eine einzelne Eigenschaft hinüberziehen.

![BWCube-Dimensions](/img/content/BWCube-Dimensions.jpg){:class="img-responsive"}

Sobald sie die Definition der gewünschten Ergebnismenge abgeschlossen haben, können Sie die Ausgabe der Extraktion mit Hilfe des Run-Buttons im Browser testen.

Um alle Eigenschaften einer Dimension oder alle Kennzahlen zu selektieren, klicken Sie mit der rechten Maustaste auf den entsprechenden Knoten und wählen Sie die Option *Select for Output*.

![BWCube-Source-01](/img/content/BWCube-Source-01.png){:class="img-responsive"}

Der interessierte Nutzer kann auch den Show MDX-Link im oberen Bereich anklicken. Dann wird das jeweilige, automatisch generierte MDX-Statement angezeigt. Dies dient aber nur zur Information.

![BWCube-Extraction-04](/img/content/BWCube-Extraction-04.png){:class="img-responsive"}