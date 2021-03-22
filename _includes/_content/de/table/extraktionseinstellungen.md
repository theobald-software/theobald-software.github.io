
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Wenn ein technischer SAP-Benutzer keine Berechtigungen für den Zugriff auf die Tabelle *ENLFDIR* hat, erscheint die folgende Warnung:<br>
*Could not load list of available function modules because permission for table ENLFDIR is missing*. <br>
Nachdem Bestätigen der Warnung, kann der Benutzer die Extraktionseinstellungen **trotzdem** anpassen.

### Table Settings
Das Fenster "Table Settings" besteht aus zwei Unterabschnitten:
- Extraction Settings
- Function Module 


### Extraction Settings

#### Package Size 
Gibt die Anzahl der Datensätze an, die pro Datenpaket extrahiert werden.
Optimale Werte können durch Ausprobieren gefunden werden. Der Standardwert ist 20000 Zeilen. 
Die Paketgröße (Package Size) zwischen 15000 und 50000 ist sinnvoll für große Datenmengen.
0 bedeutet, es findet keine Parkettierung statt. Keine Parkettierung kann bei Extraktionen großer Datenmengen zu einem RFC-Timeout führen.

{: .box-tip }
**Empfehlung:** Insbesondere bei der Ausführung einer Tabellenextraktion als Hintergrund-Job (siehe *Extract data in background job*) spielt die Paketgröße eine wichtige Rolle und sollte sinnvoll in Bezug auf die Gesamtdatenmenge gewählt werden. 

#### Row limit
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.


### Function Module
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Dieses Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System vorhanden sind.
Folgende Funktionsbausteine können zur Extraktion von Tabellen verwendet werden: <br>

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE  (TAB2048)
- /SAPDS/RFC_READ_TABLE  (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE

{: .box-warning }
**Warnung! Duplikate in der Zielumgebung!** <br>
Die SAP-Standardbausteine für Tabellenextraktion besitzen keine Pointer-Logik in Tabellenfeldern. 
Das führt bei großen Tabellen zu schlechter Performance und ggf. zu Dublikaten.
Wir empfehlen daher die Verwendung des Funktionsbausteins [Z_THEO_READ_TABLE](../sap-customizing) von Theobald Software. 

Berücksichtigen Sie die notwendige Berechtigung der SAP-Tabelle:
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```
Weitere Informationen hierzu finden Sie in der Theobald [Knowledge Base](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).

#### Extract data in background job
Durch Ankreuzen der Checkbox "Extract data in background" wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für langlaufende Extraktionen mit sehr großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen könnten. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (SM37) unter dem JobName *theo_read_table*.

