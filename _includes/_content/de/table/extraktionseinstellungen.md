
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

**Package Size** <br>
Gibt die Anzahl der Datensätze an, die pro Datenpaket extrahiert werden.
Optimale Werte können durch Ausprobieren gefunden werden. Der Standardwert ist 20000 Zeilen. 
Die Paketgröße (Package Size) zwischen 15000 und 50000 ist sinnvoll für große Datenmengen.
0 bedeutet, es findet keine Parkettierung statt. Keine Parkettierung kann bei Extraktionen großer Datenmengen zu einem RFC-Timeout führen.

{: .box-tip }
**Empfehlung:** Insbesondere bei der Ausführung einer Tabellenextraktion als Hintergrund-Job (siehe *Extract data in background job*) spielt die Paketgröße eine wichtige Rolle und sollte sinnvoll in Bezug auf die Gesamtdatenmenge gewählt werden. 

**Row limit** <br>
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.


### Function Module
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Das Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System vorhanden sind.


{: .box-tip }
**Empfehlung:** Für bessere Performance und um Einschränkungen umzugehen, verwenden Sie den Funktionsbaustein von Theobald Software 
Z_THEO_READ_TABLE. Siehe auch [SAP Customizing](../sap-customizing/funktionsbaustein-fuer-table-extraktion). 

**Extract data in background job** <br>
Durch Ankreuzen der Checkbox "Extract data in background" wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für langlaufende Extraktionen mit sehr großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen könnten. <br>


{: .box-tip }
**Tipp:** Die Extraktionsjobs finden sich im SAP JobLog (SM37) unter dem JobName *theo_read_table*.
