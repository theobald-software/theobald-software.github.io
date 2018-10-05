---
layout: page
title: Schritt II- Eine Extraktion ausführen
description: Schritt II- Eine Extraktion ausführen
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-extraktion-ausfuehren
---

Dieser Schritt ist optional und zeigt, wie Sie sich das Ergebnis der Extraktion im Browser anzeigen lässt, um sicher zu stellen, dass die Extraktion erfolgreich läuft und das gewünschte Ergebnis liefert. <br> 
Um eine angelegte Extraktion auszuführen, markieren Sie die entsprechende Zeile in der Hauptmaske und klicken Sie auf [Run]().

![Execute-Table-Extraction](/img/content/Execute-Table-Extraction.png){:class="img-responsive"}

Es öffnet sich das nachfolgende Fenster, in dem Sie Details der Ausführung festlegen können.

Die eigentliche Anforderung der Daten erfolgt über eine URL, z.B. [http://localhost:8095?name=plants](). Es reicht nur die Angabe des Namens, um die Extraktion anzustoßen. Allerdings ist es möglich, über zusätzliche Parameter bestimmte Dinge innerhalb der Extraktion zu übersteuern. Wenn Sie beispielsweise den Defaultwert von 0 (=unbegrenzt) für die maximale Anzahl von Zeilen auf 100 setzen möchten, stellen Sie die *Operation* von Default auf Override und definieren Sie den gewünschten Parameter in der Value-Spalte. Die URL sieht nun folgendermaßen aus: [http://localhost:8095?name=plants&rows=100]().

![Run-Table-Extraction-Plants](/img/content/Run-Table-Extraction-Plants.jpg){:class="img-responsive"}

Die Parameter *format, bg* und *packagesize* werden im Abschnitt [Settings](./extraktionseinstellungen) beschrieben. Um die Extraktion letztendlich auszuführen, klicken Sie auf *Run in Browser*. Ihr Standard-Browser öffnet sich und zeigt das Datenextrakt gemäß den gewünschten Kriterien mit dem gewünschten Format.

![Table-Extraction-Browser-Result](/img/content/Table-Extraction-Browser-Result.png){:class="img-responsive"}

Bitte beachten Sie, dass die Übergabeparameter (wie *rows* in unserem Beispiel) nicht zwingend gesetzt sein müssen. Es ist nur dann nötig, sie zu setzen, wenn der in der Extraktion hinterlegte Wert im Nachhinein verändert (bzw. übersteuert) werden soll.