
### Eine Tabelle finden

1. Im Hauptfenster der Komponente klicken Sie auf **[Add]**, um eine neue Tabelle hinzuzufügen. 
Das Fenster "Table Lookup" öffnet sich.<br>
![Table-Lookup](/img/content/table/table_main-window_add.png){:class="img-responsive" }
2. Im Fenster "Table lookup" geben Sie den Namen der zu extrahierenden Tabelle ein (1). Die Verwendung von Wildcards (*) wird unterstützt.<br>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"} 
3. Klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (2).
Die Suchergebnisse werden im Vorschaufenster angezeigt.<br>
4. Wählen Sie eine Tabelle (3) aus und klicken Sie auf **[OK]** (4). <br>

Alle relevanten Metadaten der Tabelle werden aus SAP abgerufen.
Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

<!---
| Nummer | Element / Beschreibung | 
|:------------|:-----|
| 1  | Feldselektion, Filterung |  
| 2  | Filterfelder   |  
| 3  | Conversion Routine - Im Data Dictionary gespeicherten Konvertierungsroutinen für die jeweiligen Felder der Tabelle. |
| 4  | Vorschaufenster, Ergebnis der Umwandlung (Conversion)   |   
-->

### Set Up a Table Extraction

Richten Sie die Table Komponente ein, um SAP Tabellen zu extrahieren:

1. Optional: Fügen Sie mehrere SAP Tabellen zusammen, siehe [Table Joins](./table-joins).
2. Wählen Sie die Spalten aus, die Sie extrahieren möchten. Standardmäßg sind alle Spalten ausgewählt. Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.<br>
![Table-Form](/img/content/table/table_fields_filter2.png){:class="img-responsive"}
3. Definieren Sie eine [WHERE Bedingung](./where-clause) oder eine [HAVING Bedingung](./having-clause), um Tabelleneinträge zu filtern. Standardmäßg werden alle Daten extrahiert.
4. Klicken Sie auf **[Load live preview]**, um eine echtzeit-Vorschau der ersten 100 Datensätze anzuzeigen.
<!--- {% if page.product == "xtract-universal" or page.product == "board-connector" %}5. Check the [General Settings](./general-settings). The *General Settings* include keywords, definition of primary keys, column level encryption and access restrictions.{% endif %}-->
5. Prüfen Sie die {% if page.product == "xtract-is" %}[Einstellungen](./extraction-settings){% else%}[Extraktionseinstellungen](./extraction-settings){% endif %}, bevor Sie die Extraktion ausführen.
6. Klicken Sie auf **[OK]**, um die Extraktion zu speichern.

{% if page.product == "xtract-universal" %}Die Extraktion kann nun ausgeführt werden, siehe [Extraktionen ausführen und einplanen](../extraktionen-ausfuehren-und-einplanen). {% endif %}

<!---

### Tabellen filtern

Sie können entweder alle oder nur einzelne Spalten für die Extraktion auswählen. Die Spalten werden automatisch für die Tabellenextraktion ausgewählt. Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.<br>
Durch Anklicken der Kopfzeilen können Sie die Spalten nach Namen oder Beschreibung sortieren. <br>
Um nach einem bestimmten Spaltennamen oder Beschreibung zu suchen, beginnen Sie mit der Eingabe eines Wortes in einem der Filterfelder.<br>

![Table-Main](/img/content/table/fields_filter-search.png){:class="img-responsive"}


### Live-Vorschau anzeigen

1. Klicken Sie auf **[Load live preview]**, um 100 Datensätze zur Vorschau zu laden.
2. Klicken Sie auf **[OK]**, um die Extraktion zu bestätigen und im Repository, d.h. auf dem Server, zu speichern.

-->