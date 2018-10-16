---
ref: bc-advanced-techniques-01
layout: page
title: Benutzerdefinierte Variablen
description: Benutzerdefinierte Variablen
product: board-connector
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=benutzerdefinierte-variablen
---

Grundsätzlich lässt sich jede Extraktion über HTTP (also z.B. einen Webbrowser) nur unter Angabe ihres Namens starten. Wir haben im letzten Abschnitt bereits eine Möglichkeit kennen gelernt, bestimmte Systemparameter (z.B. die maximale Anzahl der Zeilen) unter Angabe des jeweiligen Parameter-Namens (Rows) zu übersteuern.

Darüber hinaus gibt es auch die Möglichkeit, benutzerdefinierte Parameter in die Extraktion einzubringen.

Das folgende Bild zeigt eine Where-Klausel mit zwei veränderlichen Variablen @PlantLow und @PlantHigh

![User-Variables-01](/img/content/User-Variables-01.png){:class="img-responsive"}

Klicken Sie nun auf den Run-Knopf und bestätigen Sie eine eventuelle Anfrage, ob die Änderungen übernommen werden sollen.<br>
Wenn Sie auf Basis dieser Where-Klausel den Run-Dialog öffnen, finden Sie die Variablen im zweiten Reiter wieder, um sie mit einem Wert zu bestücken. BOARD erkennt anhand des @-Zeichens, dass es sich um eine Variable handelt.

![User-Variables-02](/img/content/User-Variables-02.png){:class="img-responsive"}

Dies ergibt folgende URL, um die Werte zu setzen:

<center>http://localhost:8085/?name=plants&PlantLow=1000&PlantHigh=9999</center>

Das Austauschen der Variablen mit den Echtwerten wird auch entsprechend im Protokoll wiedergegeben. Dazu klicken Sie auf den Button *Log* im Designer:

![User-Variables-03](/img/content/User-Variables-03.png){:class="img-responsive"}
