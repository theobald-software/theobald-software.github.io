---
ref: xu-advanced-techniques-01
layout: page
title: Benutzerdefinierte Variablen
description: Benutzerdefinierte Variablen
product: xtract-universal
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=benutzerdefinierte-variablen
---

Grundsätzlich lässt sich jede Extraktion unter Angabe ihres Namens starten. 

Darüber hinaus gibt es auch die Möglichkeit, benutzerdefinierte Parameter in die Extraktion einzubringen.

Das folgende Bild zeigt eine Where-Klausel mit zwei veränderlichen Variablen @PlantLow und @PlantHigh

![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}

Klicken Sie nun auf den Run-Knopf und bestätigen Sie eine eventuelle Anfrage, ob die Änderungen übernommen werden sollen.<br>
Wenn Sie auf Basis dieser Where-Klausel den Run-Dialog öffnen, finden Sie die Variablen im zweiten Reiter wieder, um sie mit einem Wert zu bestücken. Xtract Universal erkennt anhand des @-Zeichens, dass es sich um eine Variable handelt.

![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.jpg){:class="img-responsive"}

Dies ergibt folgende URL, um die Werte zu setzen:

<center>http://localhost:8085/?name=plants&**PlantLow=1000&PlantHigh=9999**<center>

Das Austauschen der Variablen mit den Echtwerten wird auch entsprechend im Protokoll wiedergegeben. Dazu klicken Sie auf den Button Log im Designer:

![User-Variables-In-Log](/img/content/User-Variables-In-Log.png){:class="img-responsive"}

**Variablen als SQL-Parameter**

In Xtract Universal stehen benutzerdefinierte Variablen (Custom Parameters),  welche man per Query-String übergeben kann, z. B. um eine WHERE-Clause zu dynamisieren, nun auch als SQL Parameter in den SQL Statements für Datenbank Destinations zur Verfügung.
 
Folgende Table-Extraktion hat einen Custom Parameter *WNAME* in der WHERE-Clause

![xu-customerparam-where](/img/content/xu-customerparam-where.png){:class="img-responsive"}

Die Extraktion benutzt eine Oracle-Destination, im Preparation Statement wird der Custom Parameter verwendet:

![xu-customerparam-destination](/img/content/xu-customerparam-destination.png){:class="img-responsive"}

Wie sonst auch bei Custom Parameters, müssen Sie darauf achten, keine Namenskonflikte zu erzeugen.<br> 
Der Custom Parameter im Beispiel darf nicht NAME1 heißen, weil im Row Processing Statement bereits der SQL Parameter, der den Wert der Spalte *NAME1* enthält, so heißt.