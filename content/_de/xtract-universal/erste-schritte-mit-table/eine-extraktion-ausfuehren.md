---
ref: xu-getting-started-table-04
layout: page
title: Schritt 3 - Eine Extraktion ausführen
description: Schritt 3 - Eine Extraktion ausführen
product: xtract-universal
parent: erste-schritte-mit-table
permalink: /:collection/:path
weight: 4
lang: de_DE
---
### Eine Extraktion im Designer testen

Dieser Schritt ist optional und zeigt, wie Sie sich das Ergebnis der Extraktion im Browser anzeigen lässt, um sicher zu stellen, dass die Extraktion erfolgreich läuft und das gewünschte Ergebnis liefert. <br> 
Um eine angelegte Extraktion auszuführen, markieren Sie die entsprechende Zeile in der Hauptmaske und klicken Sie auf *Run*.

![Execute-Table-Extraction](/img/content/run_hauptmaske_xu.png){:class="img-responsive"}

Es öffnet sich das nachfolgende Fenster, in dem Sie Details der Ausführung festlegen können.
![Run-Table-Extraction-Plants](/img/content/run_extraction_xu.png){:class="img-responsive"}

Die eigentliche Anforderung der Daten erfolgt über eine URL, z.B. 
```
http://localhost:8065?name=Plants
```
Es reicht nur die Angabe des Namens, um die Extraktion anzustoßen. Allerdings ist es möglich, über zusätzliche Parameter bestimmte Einstellungen innerhalb der Extraktion zu übersteuern. Wenn Sie beispielsweise den Defaultwert von 0 (=unbegrenzt) für die maximale Anzahl von Zeilen auf 100 setzen möchten, selektieren Sie das Kästchen in der Spalte *Override* und definieren Sie den gewünschten Parameter in der Spalte *Value*. Die URL sieht nun folgendermaßen aus: 
```
http://localhost:8065?name=Plants&rows=100
```


Um die Extraktion letztendlich auszuführen, klicken Sie auf *Run in Browser*. Ihr Standard-Browser öffnet sich und zeigt den Datenextrakt.

![Table-Extraction-Browser-Result](/img/content/run_ausgabe_browser_xu.png){:class="img-responsive"}

Bitte beachten Sie, dass die Übergabeparameter (wie *rows* in unserem Beispiel) nicht zwingend gesetzt sein müssen. Mann kann sie setzen, wenn der in der Extraktion hinterlegte Wert im Nachhinein verändert (bzw. übersteuert) werden soll.

### Eine Extraktion einplanen

Es ist ebenfalls möglich, Extraktionen zu einem späteren Zeitpunkt unter Verwendung einer Aufgabenplannung (Task Scheduler) einzuplanen.
Weiterführende Informationen zu diesem Thema finden Sie [hier](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/aufruf-mit-kommandozeile).
