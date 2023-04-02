
### Eine Tabelle finden

1. Im Hauptfenster der Komponente klicken Sie auf **[Add]**, um eine neue Tabelle hinzuzufügen. 
Das Fenster "Table Lookup" öffnet sich.<br>
![Table-Lookup](/img/content/table/table_main-window_add.png){:class="img-responsive" }
2. Im Fenster "Table lookup" geben Sie den Namen der zu extrahierenden Tabelle ein (1). Die Verwendung von Wildcards (*) wird unterstützt.<br>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"} 
3. Klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (2).
Die Suchergebnisse werden im Vorschaufenster angezeigt.<br>
4. Wählen Sie eine Tabelle (3) aus und klicken Sie auf **[OK]** (4). <br>

Die Anwendung kehrt zum Hauptfenster "Extract Single and Joint SAP Tables or Views" zurück.
Spalten der Tabelle werden aus SAP abgerufen und im Unterabschnitt **Fields** angezeigt.  

![Table-Form](/img/content/table/table_fields_filter.png){:class="img-responsive"}

<!---
| Nummer | Element / Beschreibung | 
|:------------|:-----|
| 1  | Feldselektion, Filterung |  
| 2  | Filterfelder   |  
| 3  | Conversion Routine - Im Data Dictionary gespeicherten Konvertierungsroutinen für die jeweiligen Felder der Tabelle. |
| 4  | Vorschaufenster, Ergebnis der Umwandlung (Conversion)   |   
-->

### Eine Table Extraktion Einrichten

Die Table-Komponente bietet die folgenden Optionen und Einstellungen:

- Spalten filtern: Wählen Sie entweder alle oder nur einzelne Spalten für die Extraktion aus. 
Standardmäßg sind alle Spalten ausgewählt. Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.
- Zeilen filtern: Verwenden Sie eine [WHERE Bedingung](./where-clause) oder eine [HAVING Bedingung](./having-clause), um Tabelleneinträge zu filtern.
- Mehrere Tabelle zusammenfügen, siehe [Table Joins](./table-joins).
{% if page.product == "xtract-universal" or page.product == "board-connector" %}- Prüfen Sie die einstellungen in den [allgemeinen Einstellungen](./general-settings). 
Die allgemeinen Einstellungen beinhalten Schlüßelwörter, die Definition von Primärschlüßel, Verschlüßelung von Spalten und Zugriffsrechte.{% endif %}
- Prüfen Sie die [Extraktionseinstellungen](./extraction-settings), bevor Sie die Extraktion ausführen.
- Falls nötig, wenden Sie Konversionsroutinen und / oder Aggregatfunktionen auf die Tabellendaten an, siehe [Functions Overview - Fields](./tabellen_und_felder#fields).

Klicken Sie auf **[Load live preview]**, um eine echtzeit-Vorschau der ersten 100 Datensätze zanzuzeigen.

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