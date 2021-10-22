
### Varianten und Selektionen

Die meisten Queries erlauben die Eingabe von Selektionen vor Ausführung der Query.
Selektionen limitieren die Ausgabe der Query, sodass nur Daten die der Selektion entsprechen ausgegeben werden.

Eine Variante mit Selektionen kann in SAP im Selektionsbildschirm einer Query erstellt werden.
Der Zweck einer Variante ist es, Selektionen zu speichern.
Das minimiert die Eingabe von Selektionen, wenn Sie Queries ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.


### Eine Variante wählen

1. Klicken Sie auf das kleine **[Fernglassymbol]** (1). Das Fenster "Look Up Variant" öffnet sich.
![Query-Variants-Section](/img/content/Query-Variants-Selections.png){:class="img-responsive"}
2. Wählen Sie eine Variante aus der Liste der verfügbaren Varianten aus.<br>
![Query-Variant-02](/img/content/Query-Variant-02.png){:class="img-responsive"}
3. Bestätigen Sie Ihre Eingabe mit **[OK]**.

Um eine Variante zu entfernen, klicken Sie **[X]** (2).

{: .box-tip }
**Tipp:** Sie können eine Variante über einen Parameter in der Extraktions-URL dynamisieren. 

### Selektionen bearbeiten

Dieser Abschnitt bezieht sich auf den Selektionsbildschirm von Queries in SAP.
Einige Selektionsfelder haben nur technische Bezeichnungen und keine Beschreibungen.
Um zu verstehen, welche Felder welchen Feldern in SAP entsprechen, prüfen Sie den Selektionsbildschirm in SAP. <br>
Klicken Sie auf ein Selektionsfeld und drücken Sie die F1-Taste. Dadurch wird die technische Bezeichnung des Selektionsfelds angezeigt.

Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.

{% include _content/de/sap-data-format.md  %}

1. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]** (3). Das Fenster "Edit Range" öffnet sich.
![Query-Selection-Parameters-02](/img/content/Selection-Options-Fill-02.png){:class="img-responsive"}
2. Wählen Sie unter *Sign*, ob die Selektion in der Extraktion inkludiert oder exkludiert werden soll (4).
3. Wählen Sie einen Operator (*Equal*, *GreaterThan*, etc.) von der Dropdown-Liste unter *Option* (5). 
4. Geben Sie die Selektion in den *Low* und *High* Feldern ein. Das *High* Feld ist nur aktiv, wenn *zwischen* ([]) oder *nicht zwischen* (][) als Operator ausgewählt wurde.
5. Klicken Sie auf **[OK]**, um die Selektion zu bestätigen.

Um eine Selektion zu löschen, klicken Sie auf den Button in der linken unteren Ecke (6).

| logischer Operator   | Beschreibung   |
|---------------|------------------------------|
| "="     | ist gleich        |
| "!=" | ist ungleich     |
| "<"     | kleiner als   | 
| "<="      | kleiner oder gleich   | 
| ">"    | größer als   | 
| ">="   | größer oder gleich | 
| "[]" | zwischen (Intervall) | 
| "]["       | nicht zwischen (Intervall) | 
| " * "    | enthält | 

