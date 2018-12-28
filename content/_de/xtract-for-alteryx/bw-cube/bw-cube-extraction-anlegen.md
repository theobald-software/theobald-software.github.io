---
ref: xfa-bw-cube-01
layout: page
title: BW Cube Extraction Anlegen
description: BW Cube Extraction Anlegen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: de_DE
---

Die BW Cube Komponente dient dazu, Daten aus direkt aus BW Cubes oder aus BW Queries zu extrahieren, die wiederum auf alle möglichen Infoprovider basieren können. Eine übliche Vorgehensweise wäre, die Query schon so zu bauen, dass sie gut in die Architektur passt.
Klicken Sie auf New Extraction, um im entsprechenden Suchfeld entweder eine Query, oder direkt einen BW Cube zu suchen. Bestätigen Sie dann mit OK.

![Designer](/img/content/xfa/bwcube01.png){:class="img-responsive"}

## Auswahl der gewünschten Spalten

Im Hauptdialog sehen Sie auf der linken Seite einen Baum, der die Query (oder den Cube) repräsentiert. Im ersten Ordner sind alle Kennzahlen enthalten. Alle darunter liegen Ordner entsprechen jeweils einer Dimension, die die zusätzlichen Dimensionseigenschaften enthalten. Wählen Sie die Kennzahlen, Dimensionen und Eigenschaften, die Sie extrahieren möchten. Auf der rechten Seite sehen die Ausgabetabelle. Ein Klick auf Preview füllt die Ausgabetabelle mit Daten vom BW.

![Designer](/img/content/xfa/bwcube02.png){:class="img-responsive"}

## Auswahl der Einheiten bei den Kennzahlen 
Über die Rechtmaustaste bei einer Kennzahl können Sie wählen, ob die Einheit angezeigt (show column unit / hide column unit) werden soll. 
Wird die Einheit angezeigt, wird bei der Kennzahl ein entsprechendes Icon angezeigt.

## Filtern von Dimensionen
Über die Rechtmaustaste bei einer Dimension (Edit Filter) können Sie einen Filter definieren. 
Wird ein Filter definiert, wird bei der Dimension ein entsprechendes Icon angezeigt.

- Single Values
Hier wählen Sie aus der Liste, welche Werte im Filter inkludiert werden sollen. 
Über die Option **Exclue values from result set** können diese Werte exkludiert werden. 
 
- Value Ranges 
Hier definieren Sie mehrere Interevalle, welche im Filter inkludiert werden sollen. 
Über die Option **Exclue values from result set** können diese Werte exkludiert werden. 
