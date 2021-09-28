### Einen Extraktor finden

1. Klicken Sie auf den **[Suchen]** Button (Vergrößerungsglas) im Hauptfenster der DeltaQ-Komponente. Das Fenster “Look Up OLTP Source” öffnet sich.<br>
![search-ds-mat-attr](/img/content/search-ds-mat-attr2.png){:class="img-responsive"}
2. Geben Sie den Namen oder die Beschreibung einer Datenquelle ein (1). Verwenden Sie Wildcards (*), falls nötig.
3. Klicken Sie auf **[Suchen]** (2) und wählen Sie den Report Ihrer Wahl aus der angezeigten Liste aus (3).<br>
Das folgende Beispiel zeigt den Download von Materialstammdaten aus der DataSource *0MATERIAL_ATTR*.
4. Bestätigen Sie die Auswahl mit **[OK]** (4).

### Eine DeltaQ-Extraktion definieren
Nachdem Sie einen Extraktor gefunden haben, führen Sie die folgenden Schritte aus:

1. Wählen Sie einen *Update Mode* aus (5). <br>
Das **Full** Update fordert alle Daten an, die den von Ihnen eingestellten Auswahlkriterien entsprechen. 
Um eine echte **Delta**-Prozedur zum Laufen zu bringen, muss das Delta zunächst initialisiert werden, siehe unter [Delta](./datasource-delta).<br>
Für mehr Informationen zu den verfügbaren Aktualisierungsmodi, siehe [Update Mode](./update-modus).
2. Setzen Sie die Häkchen neben den Spalten, die Sie extrahieren möchten (6).<br>
![Deltaq-Define-Data-Source-Filled](/img/content/Deltaq-Define-Data-Source-Filled.png){:class="img-responsive"}
3. Optional: Fügen Sie falls nötig unter **Selection** Auswahlfilter hinzu (7), um Ihre Daten zu filtern. Für mehr Informationen zu Filtern, siehe [Datasource Parameters](./datasource-parameter).<br>
4. Validieren Sie Ihre Einstellungen, indem Sie eine Testextraktion ausführen.
5. Wenn die Validierung ohne Fehler abgeschlossen wurde, klicken Sie auf **[Activate]**, um die Extraktion in SAP zu aktivieren.<br> 
Nach erfolgreicher Aktivierung erscheinen im Laufe einiger Sekunden die entsprechenden Statusmeldungen:<br>
![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}<br>
![Deltaq-Generation-Successfull-Info](/img/content/Deltaq-Generation-Successfull-Info.png){:class="img-responsive"}

{: .box-note } 
**Hinweis:** Die Aktivierung muss nur für die Modi **Delta**, **Full** oder **Init** durchgeführt werden. Nehmen Sie keine Aktivierung für den Modus **Delta Update** vor. 
Bevor Sie eine neue Aktivierung starten, löschen Sie die alte Aktivierung.


### Variablen

**Variablen** können für die folgenden Einstellungen verwendet werden:
* **Log. Destination**, 
* **Gateway Host**,
* **Gateway Service**,
* **Program ID**.  

Der **Update Mode** und **Selection**-Filter können ebenfalls über Variablen gesteuert werden, siehe [Update Mode](./update-modus) und [Datasource Parameters](./datasource-parameter).


******
#### Weiterführende Links
- [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide).