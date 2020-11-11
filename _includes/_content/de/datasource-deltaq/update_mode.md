Der Update-Modus erlaubt Delta-Update, d.h. es werden nur neu hinzugefügte oder geänderte Daten extrahiert, anstatt eines Full-Updates.
Der Update-Modus kann dynamisch im "Run"-Dialog unter dem Parameter "updatemode"gesetzt werden.

Alternativ können Sie den Update-Modus im Hauptfenster der Komponente wählen:
![Update-Mode](/img/content/deltaq-extraction-seetings.png ){:class="img-responsive"}

| Buchstabe | Bezeichnung | Beschreibung |
| :------: |:--- | :--- |
| F | Full | Extrahiert alle Daten, die den festgelegten Auswahlkriterien entsprechen. |
| D | Delta Update | Extrahiert nur Daten, die seit der letzten Delta-Anfrage im SAP-System hinzugefügt oder geändert wurden. Initialisieren Sie das Delta-Verfahren, bevor Sie ein Delta-Update durchführen. Um Fehler, Abbrüche und Lücken in Ihren Daten während eines Delta-Updates zu vermeiden, führen Sie die nächste Extraktion im Update-Modus "Repeat" durch. |
| C | Delta Initialisation | Initiliazies the delta process and extracts all data in full mode simultaneously. When re-initilizing a delta process, delete any exsiting Inits by clicking **[Request Maintenance]** in the DeltaQ extraction settings.|
| R | Repeat | Repeats the last delta run and updates and any delta data accumulated since the last run. Delete any data from the last (unsuccesful) delta update before running a repeat. You can run a repeate multiple times.|
| S | Delta Init (without data)  | Initiliazies the delta process without extracting any data from the SAP Datasource. The result of the Delta inits is a so called "Request Maintenance" on the SAP side. When re-initilizeing a delta process, delete any exsiting Inits by clicking **[Request Maintenance]** in the DeltaQ extraction settings.|
| I |  Non-cumulative Init   |  Relevant for DataSources such as *2LIS_03_BX*.  |
| A | Activate (don't extract) | Activates a DataSource similar to clicking **[Activate]**, but is more practical when activating all DataSources in batch. Activate option is an alternative to "Automatic Synchronization".  No data is extracted. |
| V | **[Nur Xtract IS:]** SSIS-Variable <br> Abgekündigt, siehe [Variablen](https://help.theobald-software.com/de/xtract-is/bw-cube/variablen) |  If "V" is selected, a variable name needs to be entered in the [DeltaQ settings](https://help.theobald-software.com/en/xtract-is/deltaq/settings). The same SSIS variable needs to be created in SSIS and assigned a value. The following values are possible: F, D, C, R, S, I and A. |

