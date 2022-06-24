
### Eine Tabelle finden

1. Innerhalb des Hauptfensters "Extract Single and Joint SAP Tables or Views" klicken Sie auf **[Add]**. Das Fenster "Table lookup" wird geöffnet.
![Table-Lookup](/img/content/table/table_main-window_add.png){:class="img-responsive" }
2. Geben Sie in das Feld **Table name** (1) den Namen der zu extrahierenden Tabelle ein.
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"} <br/>
3. Klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (2).
Die Suchergebnisse werden im Vorschaufenster angezeigt.<br>
4. Wählen Sie die gewünschte Tabelle (3) aus und klicken Sie auf **OK** (4). <br>

{: .box-tip }
**Tipp:** Wildcards wie * werden unterstützt. Beachten Sie, dass die Wildcard nach dem Suchnamen gestellt werden soll.

Die Anwendung kehrt zum Hauptfenster "Extract Single and Joint SAP Tables or Views" zurück. <br>

Spalten der aus SAP abgerufenen Tabelle werden im Unterabschnitt **Fields** angezeigt.  
![Table-Form](/img/content/table/table_fields_filter.png){:class="img-responsive"}

| Nummer | Element / Beschreibung | 
|:------------|:-----|
| 1  | Feldselektion, Filterung |  
| 2  | Filterfelder   |  
| 3  | Conversion Routine - Im Data Dictionary gespeicherten Konvertierungsroutinen für die jeweiligen Felder der Tabelle. |
| 4  | Vorschaufenster, Ergebnis der Umwandlung (Conversion)   |   



### Tabellen filtern

Sie können entweder alle oder nur einzelne Spalten für die Extraktion auswählen. Die Spalten werden automatisch für die Tabellenextraktion ausgewählt. Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.<br>
Durch Anklicken der Kopfzeilen können Sie die Spalten nach Namen oder Beschreibung sortieren. <br>
Um nach einem bestimmten Spaltennamen oder Beschreibung zu suchen, beginnen Sie mit der Eingabe eines Wortes in einem der Filterfelder.<br>

![Table-Main](/img/content/table/fields_filter-search.png){:class="img-responsive"}


### Live-Vorschau anzeigen

1. Klicken Sie auf **[Load live preview]**, um 100 Datensätze zur Vorschau zu laden.
2. Klicken Sie auf **[OK]**, um die Extraktion zu bestätigen und im Repository, d.h. auf dem Server, zu speichern.
