---
ref: xfa-abap-reports-02
layout: page
title: Varianten und Selektionen
description: Varianten und Selektionen
product: xtract-for-alteryx
parent: reports
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-report-extraktion-definieren
---

Die meisten Reports erlauben die Eingabe von Selektionen vor Ausführung der Reports.
Selektionen limitieren die Ausgabe des Reports, sodass nur Daten die der Selektion entsprechen ausgegeben werden.

Eine Variante mit Selektionen kann in SAP im Eingabebildschirm eines ABAP-Reports erstellt werden.
Der Zweck einer Variante ist es, Selektionen in Ihrem Eingabebildschirm zu speichern.
Das minimiert die Eingabe von Selektionen, wenn Sie Reports ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.


### Eine Variante wählen
Wählen Sie eine Variante aus der Dropdown-Liste *Variant* (1).
Wenn Sie eine neue Variante in SAP erstellen, nachdem die Report Extraktion in XU erstellt wurde, klicken Sie auf den **[Refresh]** Button neben der Dropdown-Liste, um die neue Variante abzurufen.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Die Selektionen der Variante werden **nicht** im Abschnitt *Selection Screen* angezeigt. 
Um die Definition der Variante einzusehen, öffnen Sie die Variante in SAP.

### Selektionen bearbeiten

Dieser Abschnitt bezieht sich auf den Eingabebildschirm von Reports in SAP.
Einige Selektionsfelder haben nur technische Bezeichnungen und keine Beschreibungen.
Um zu verstehen, welche Felder welchen Feldern in SAP entsprechen, prüfen Sie den Eingabebildschirm in SAP. <br>
Klicken Sie auf ein Selektionsfeld und drücken Sie die F1-Taste. Dadurch wird die technische Bezeichnung des Selektionsfelds angezeigt.


1. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]** (2). Das Fenster "Edit Selections" öffnet sich.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Wählen Sie, ob die Selektion in der Extraktion inkludiert oder exkludiert werden soll (3).
3. Wählen Sie einen Operator (*Equal*, *GreaterThan*, etc.) von der Dropdown-Liste *Option* (4). 
4. Geben Sie die Selektion in den *Low* und *High* Feldern ein. Das *High* Feld ist nur aktiv, wenn *between* oder *not between* als Operator ausgewählt wurde.
5. Optional: Klicken Sie auf **[Add Selection]** (5), um weitere Bedingungen hinzuzufügen.
6. Klicken Sie auf **[OK]** (6), um die Selektion zu bestätigen.

{: .box-tip }
**Tipp:** Wenn Sie mehrere Selektionsparameter verwenden, erstellen Sie dafür eine Variante in SAP. Mit der Variante müssen Sie die Parameter nicht mehrmals manuell eingeben. 

### Datenformat

{% include _content/de/sap-data-format.md  %}
