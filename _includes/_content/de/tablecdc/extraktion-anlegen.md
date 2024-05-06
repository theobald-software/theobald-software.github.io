Der folgende Abschnitt beschreibt die Anwendung der {% if page.product == "xtract-is"%}Xtract {% endif %}Table CDC Komponente. <br>

### Eine Tabelle Finden

Wählen die SAP Tabelle, die Sie mit Table CDC aufzeichnen möchten.

1. Innerhalb des Hauptfensters der Komponente klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png). Das Fenster “Table Lookup” öffnet sich.<br>
{% if page.product == "xtract-universal" or page.product == "board-connector" %}![Table-CDC](/img/content/tablecdc/table-cdc.png){:class="img-responsive"}{% else %}![Table-CDC](/img/content/tablecdc/xis-table-cdc.png){:class="img-responsive"}{% endif %}
2. Geben Sie in das Feld **Table name** (1) den Namen der zu extrahierenden SAP Tabelle ein. Verwenden Sie Wildcards (*), falls nötig.<br>
![Look-Up-Report](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) (2). Die Suchergebnisse werden angezeigt.
4. Wählen Sie die gewünschte Tabelle (3) aus und klicken Sie auf **[OK]** (4).

Alle relevanten Metadaten der Tabelle werden aus SAP abgerufen.
Die Anwendung kehrt zum Hauptfenster der Komponente zurück.


### Eine Table CDC Extraktion Einrichten

Richten Sie die Table CDC Komponente ein, um Daten zu extrahieren:

1. Wählen Sie die Spalten aus, die Sie extrahieren möchten.<br> 
{% if page.product == "xtract-universal" or page.product == "board-connector" %}![Table-CDC-Setup](/img/content/tablecdc/table-cdc-kna1.png){:class="img-responsive"}{% else %}![Table-CDC-Setup](/img/content/tablecdc/xis-table-cdc-kna1.png){:class="img-responsive"}{% endif %}
2. Optional: Wenn Sie bei der ersten Ausführung der Extraktion nicht die komplette SAP-Tabelle extrahieren möchten, deaktivieren Sie die Option **[Extract table on first run]**.
3. In dem Feld **Log table row limit** geben Sie eine maximale Anzahl von Zeilen an, die aufgezeichnet werden. Der Standartwert sind 10000 Zeilen.<br>
Wenn die Zeilenanzahl erreicht ist, schlägt die Extraktion mit einem Ausnahmefehler fehl. Die maximale Zeilenanzahl in einer Log-Tabelle beträgt 500000.
Beachten Sie, dass die Zeilenanzahl nicht mehr geändert werden kann, sobald die Log-Tabelle initialisiert ist. 
4. Optional: Definieren Sie eine [WHERE-Bedingung](./where-clause), um Tabelleneinträge zu filtern.
5. Klicken Sie auf **[Load Preview]**, um die ersten 1000 Datensätze der SAP Tabelle anzuzeigen.<br>
Die Spalte TS_OPERATION zeigt an, ob die Daten eingefügt (I), aktualisiert (U) oder gelöscht (D) wurden.
6. Klicken Sie auf **[OK]**, um Ihre Eingaben zu bestätigen.
7. Führen Sie die Extraktion aus, um eine Log-Tabelle in SAP zu erzeugen, die Änderungen an der ausgewählten SAP Tabelle nachverfolgt, siehe [Die Extraktion zum ersten Mal Ausführen](#die-extraktion-zum-ersten-mal-ausführen).

