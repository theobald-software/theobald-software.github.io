---
ref: xfa-table-01
layout: page
title: Table Extraction Anlegen
description: Table Extraction Anlegen
product: xtract-for-alteryx
parent: table
permalink: /:collection/:path
weight: 1
lang: de_DE
---

Die Table Komponente dient dazu, Daten aus direkt Tabellen und Views zu extrahieren. <br>
Bei der Extraktion aus einer einzigen Datenquelle könnten Sie dabei Daten auch aus Cluster- und Pool-Tabellen extrahieren. <br>
Klicken Sie auf New Extraction. Klicken Sie dann auf Add. <br>
Im Suchfeld Table geben Sie dann den Namen einer Tabelle oder eines Views.<br> 
Alternativ können Sie im Suchfeld Description in den Beschreibungen der Tabellen und Views suchen.<br> 
Wählen Sie nun das gewünschte Objekt und bestätigen Sie dann mit OK.<br> 


## Auswahl der Felder
Im Hauptdialog sehen Sie auf der linken Seite den Namen des gewählten Objekts.<br>
Klicken Sie drauf, dann sehen Sie im Hauptdialog auf der rechten Seite alle verfügbaren Felder. <br> 
Üben der Button Select All / Deselect All können Sie alle Feler wählen bzw. abwählen. <br>
Um einzelne Felder zu wählen, klicken Sie die entsprechende Checkbox. <br>
Über das Suchfeld können Sie nach dem Namen oder der Beschreibung eines Feldes suchen.<br>

## Joins
Falls Sie mehrere Tabellen joinen wollen, können Sie in diesem Reiter die Join-Bedingungen bearbeiten.<br> 

## Where Clause
In diesem Reiter können Sie die Where-Bedingung definieren.<br> 
Achten Sie drauf, dass Felder in der folgenden Schreibweise [TableName]~[FieldName] definiert werden müssen, z.B. KNA1~LAND1 = 'US'.

## Preview 
Auf der unteren Seite sehen Sie die Ausgabetabelle. Ein Klick auf Load Preview Data füllt die Ausgabetabelle mit Daten vom SAP-System.<br>
