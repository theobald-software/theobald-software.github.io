
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


{% if page.parent == "getting-started" or page.childidentifier == "getting-started" %}
### Set Up a Table Extraction

Richten Sie die Table Komponente ein, um SAP Tabellen zu extrahieren:

1. Wählen Sie die Spalten aus, die Sie extrahieren möchten. Standardmäßg sind alle Spalten ausgewählt. Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.<br>
![Table-Form](/img/content/table/table_fields_filter2.png){:class="img-responsive"}
2. Optional: Definieren Sie eine WHERE Bedingung oder eine HAVING Bedingung, um Tabelleneinträge zu filtern. Standardmäßg werden alle Daten extrahiert.
3. Klicken Sie auf **[Load live preview]**, um eine echtzeit-Vorschau der ersten 100 Datensätze anzuzeigen.
4. Klicken Sie auf **[OK]**, um die Extraktion zu speichern.

Die Extraktion kann jetzt ausgeführt werden.
{% else %}
### Set Up a Table Extraction

Richten Sie die Table Komponente ein, um SAP Tabellen zu extrahieren:

1. Optional: Fügen Sie mehrere SAP Tabellen zusammen, siehe [Table Joins](./table-joins).
2. Wählen Sie die Spalten aus, die Sie extrahieren möchten. Standardmäßg sind alle Spalten ausgewählt. Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.<br>
![Table-Form](/img/content/table/table_fields_filter2.png){:class="img-responsive"}
3. Definieren Sie eine [WHERE Bedingung](./where-clause) oder eine [HAVING Bedingung](./having-clause), um Tabelleneinträge zu filtern. Standardmäßg werden alle Daten extrahiert.
4. Klicken Sie auf **[Load live preview]**, um eine echtzeit-Vorschau der ersten 100 Datensätze anzuzeigen.
5. Prüfen Sie die {% if page.product == "xtract-is" %}[Einstellungen](./extraction-settings){% else%}[Extraktionseinstellungen](./extraction-settings){% endif %}, bevor Sie die Extraktion ausführen.
6. Klicken Sie auf **[OK]**, um die Extraktion zu speichern.

{% if page.product == "xtract-universal" %}Die Extraktion kann nun ausgeführt werden, siehe [Extraktionen ausführen und einplanen](../extraktionen-ausfuehren-und-einplanen). {% endif %}
{% endif %}
