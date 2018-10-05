---
layout: page
title: Eine BW Cube-Quelle suchen
description: Eine BW Cube-Quelle suchen
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=cubes-suchen
---

Zunächst einmal wird mindestens ein gültiger Verbindungsmanager benötigt, der mit einem SAP BW System verbunden ist (siehe Kapitel [Verbindungsmanager](../sap-verbindung/verbindungsmanager) ).<br>
Um einen Cube für die Extraktion zu suchen, öffnen Sie mit einem Doppelklick die Datenquelle, so dass der Editor erscheint und klicken Sie auf den Button mit dem Fernglas.

![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.jpg){:class="img-responsive"}

Sie können mit Wildcards (also * ) entweder in den verfügbaren InfoCubes oder in den verfügbaren BEx Queries suchen. Sobald Sie den richtigen Cube gefunden haben, markieren Sie ihn und bestätigen Sie mit *OK*.

![Query-LookUp](/img/content/Query-LookUp.png){:class="img-responsive"}

Nachdem ein Cube gewählt wurde, finden Sie auf der linken Seite hierarchisch angeordnet die Kennzahlen (Ordner Key Figures), die Dimensionen und deren Eigenschaften (jeweils im Unterordner Properties jeder Dimension). Um einzelne Parameter für die Extraktion zu wählen, ziehen Sie den gewünschten Knoten per Drag & Drop von der Baumanzeige in die Tabelle rechts.<br>
Bitte beachten Sie, dass die jeweilige Dimension automatisch mit selektiert wird, auch wenn Sie nur eine einzelne Eigenschaft hinüberziehen.

![Cube-Details](/img/content/Cube-Details.jpg){:class="img-responsive"}


Sobald mindestens eine Kennzahl gewählt ist, können Sie mit dem *Preview*-Button die Ergebnis-Tabelle erstellen lassen. Der interessierte Nutzer kann auch den Show MDX-Link im oberen Bereich anklicken. Dann wird das jeweilige, automatisch generierte MDX-Statement angezeigt.

Um alle Eigenschaften einer Dimension oder alle Kennzahlen zu selektieren, klicken Sie mit der rechten Maustaste auf den entsprechenden Knoten und wählen Sie die Option *Select for Output*.

Der interessierte Nutzer kann auch den Show MDX-Link im oberen Bereich anklicken. Dann wird das jeweilige, automatisch generierte MDX-Statement angezeigt. Dies dient aber nur zur Information.
