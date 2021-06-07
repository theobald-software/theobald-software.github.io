
### Varianten und Selektionen

Die meisten Queries erlauben die Eingabe von Selektionen vor Ausführung der Query.
Selektionen limitieren die Ausgabe der Query, sodass nur Daten die der Selektion entsprechen ausgegeben werden.

Eine Variante mit Selektionen kann in SAP im Selektionsbildschirm einer Query erstellt werden.
Der Zweck einer Variante ist es, Selektionen zu speichern.
Das minimiert die Eingabe von Selektionen, wenn Sie Queries ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}

#### Eine Variante wählen

1. Klicken Sie auf das kleine **[Fernglassymbol]** (1). Das Fenster "Look Up Variant" öffnet sich.
![Query-Variant-02](/img/content/Query-Variant-02.png){:class="img-responsive"}
2. Wählen Sie eine Variante aus der Liste der verfügbaren Varianten aus.
3. Bestätigen Sie Ihre Eingabe mit **[OK]**.

Um eine Variante zu entfernen, klicken Sie **[X]** (2).

{: .box-tip }
**Tipp:** Sie können eine Variante über einen Parameter in der Extraktions-URL dynamisieren. 

#### Selektionen bearbeiten

Dieser Abschnitt bezieht sich auf den Selektionsbildschirm von Queries in SAP.
Einige Selektionsfelder haben nur technische Bezeichnungen und keine Beschreibungen.
Um zu verstehen, welche Felder welchen Feldern in SAP entsprechen, prüfen Sie den Selektionsbildschirm in SAP. <br>
Klicken Sie auf ein Selektionsfeld und drücken Sie die F1-Taste. Dadurch wird die technische Bezeichnung des Selektionsfelds angezeigt.

1. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]** (3). Das Fenster "Edit Range" öffnet sich.
![Query-Selection-Parameters-02](/img/content/Selection-Options-Fill-02.png){:class="img-responsive"}
2. Wählen Sie, ob die Selektion in der Extraktion inkludiert oder exkludiert werden soll (4).
3. Wählen Sie einen Operator (*Equal*, *GreaterThan*, etc.) von der Dropdown-Liste *Option* (5). 
4. Geben Sie die Selektion in den *Low* und *High* Feldern ein. Das *High* Feld ist nur aktiv, wenn *between* oder *not between* als Operator ausgewählt wurde.
5. Klicken Sie auf **[OK]** (6), um die Selektion zu bestätigen.

Um eine Selektion zu löschen, klicken Sie auf den Button in der linken unteren Ecke (7).

{: .box-note }
**Hinweis:** Um Variablen als Selektionsparameter zu verwenden, stellen Sie vor den Namen der Variable ein @-Symbol, z.B. `@lowthres`.

