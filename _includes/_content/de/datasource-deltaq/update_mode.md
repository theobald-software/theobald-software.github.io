Der Update-Modus erlaubt Delta-Update, d.h. es werden nur neu hinzugefügte oder geänderte Daten extrahiert, anstatt eines Full-Updates.
Der Update-Modus kann dynamisch im "Run"-Dialog unter dem Parameter "updatemode"gesetzt werden.

Alternativ können Sie den Update-Modus im Hauptfenster der Komponente wählen:
![Update-Mode](/img/content/deltaq-extraction-seetings.png ){:class="img-responsive"}

| Buchstabe | Bezeichnung | Beschreibung |
| :------: |:--- | :--- |
| F | Full | Extrahiert alle Daten, die den festgelegten Auswahlkriterien entsprechen. |
| D | Delta Update | Extrahiert nur Daten, die seit der letzten Delta-Anfrage im SAP-System hinzugefügt oder geändert wurden. Initialisieren Sie das Delta-Verfahren, bevor Sie ein Delta-Update durchführen. Um Fehler, Abbrüche und Lücken in Ihren Daten während eines Delta-Updates zu vermeiden, führen Sie die nächste Extraktion im Update-Modus "Repeat" durch. |
| C | Delta Initialisation | Initiliert das Delta-Verfahren und extrahiert gleichzeitig alle Daten im Vollmodus. Das Ergebnis einer Delta-Initialisierung wird auf der SAP-Seite "Request Maintenance" genannt. Wenn Sie einen Re-initilizing-Delta-Process starten, löschen Sie alle austretenden Inits durch Klicken auf **[Request Maintenance]** in den DeltaQ Extraktionseinstellungen.|
| R | Repeat | Wiederholt den letzten Delta-Lauf und die letzten Delta-Updates sowie alle seit dem letzten Lauf aufgelaufenen Delta-Daten. Löschen Sie alle Daten aus dem letzten (nicht erfolgreichen) Delta-Update, bevor Sie einen Wiederholungslauf durchführen. Sie können eine Wiederholung mehrmals ausführen.|
| S | Delta Init (without data)  | Initiliert das Delta-Verfahren, ohne Daten aus der SAP-Datenquelle zu extrahieren. Das Ergebnis einer Delta-Initialisierung wird auf der SAP-Seite "Request Maintenance" genannt. Wenn Sie einen Re-initilizing-Delta-Process starten, löschen Sie alle austretenden Inits durch Klicken auf **[Request Maintenance]** in den DeltaQ Extraktionseinstellungen.|
| I |  Non-cumulative Init   | Relevant für DataSources wie z.B. *2LIS_03_BX*.  |
| A | Activate (don't extract) | Aktiviert eine DataSource ähnlich wie das Klicken auf **[Activate]**, ist aber praktischer, wenn alle DataSources im Batch aktiviert werden. Die Option "Activate" ist eine Alternative zu "Automatic Synchronization" (Automatische Synchronisierung).  Es werden keine Daten extrahiert.|
| V | **[nur Xtract IS:]** SSIS-Variable; <br> Abgekündigt, siehe [Variablen](https://help.theobald-software.com/de/xtract-is/bw-cube/variablen) |  Wenn Sie "V" auswählen, muss die Variable in den [DeltaQ Einstellungen](https://help.theobald-software.com/en/xtract-is/deltaq/settings) gesetzt werden. Eine gleichnamige SSIS-Variable muss in SSIS definiert werden und einen Wert bekommen. Die folgenden Werte sind möglich: F, D, C, R, S, I und A. |
