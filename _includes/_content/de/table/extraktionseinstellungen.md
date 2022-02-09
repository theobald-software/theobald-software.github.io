
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Wenn ein technischer SAP-Benutzer keine Berechtigungen für den Zugriff auf die Tabelle *ENLFDIR* hat, erscheint die folgende Warnung:<br>
*Could not load list of available function modules because permission for table ENLFDIR is missing*. <br>
Nachdem Bestätigen der Warnung, kann der Benutzer die Extraktionseinstellungen **trotzdem** anpassen.


### Extraction Settings

#### Package Size 

Die extrahierten Daten werden in Pakete mit der angegebenen Größe aufgeteilt. Der Standardwert ist 50000 Zeilen.
Eine Paketgröße (Package Size) zwischen 20000 und 50000 ist sinnvoll für große Datenmengen.
0 bedeutet, es findet keine Parkettierung statt. Keine Parkettierung kann bei Extraktionen großer Datenmengen zu einem RFC-Timeout führen.

{: .box-warning }
**Warnung! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:** <br>  
Um einen Speicherüberlauf auf dem SAP-Quellsystem und einen großen Overhead zu vermeiden, wählen Sie eine für Ihre Speichergröße angemessene Paketgröße.

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

Berücksichtigen Sie die notwendige [Berechtigung der SAP-Tabelle](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```

#### Extract data in background job
Durch Ankreuzen der Checkbox "Extract data in background" wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für langlaufende Extraktionen mit sehr großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen könnten. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (SM37) unter dem JobName *THEO_READ_TABLE*.

### Advanced Settings

Bearbeiten Sie sie *Advanced Settings* nur nach Absprache mit [Theobald Support](https://support.theobald-software.com/helpdesk/User/Login). 

#### Background job timeout (seconds)

Diese Einstellung bezieht sich i.d.R. auf Destinationen, bei denen das Schreiben in die Destination zeitintensiv ist, z.B. bei Deaktivierung des Bulk-Inserts bei Datenbank-Destinationen.
**Background job timeout (seconds)** legt den Timeout für Extraktionen fest, die als Hintergrund-Job ausgeführt werden. <br>
Der Standardwert ist 180 Sekunden. Verändern Sie diesen Wert nur nach Absprache mit [Theobald Support](https://support.theobald-software.com/helpdesk/User/Login). 

{: .box-note }
**Hinweis:** Diese Einstellung ist nur dann effektiv, webb Ihre Extraktion als Hintergrund-Job aufgeführt wird und wenn Sie [Z_THEO_READ_TABLE](../sap-customizing/funktionsbaustein-fuer-table-extraktion) Version 2.11 oder höher verwenden.


#### Adjust currency decimals

Aktivieren Sie diese Option, wenn Sie mit Währungen/Mengen ohne Nachkommastellen arbeiten (z.B. JPY, KRW, etc.). 
Damit wird sichergestellt, dass alle vorhandenen und nicht vorhandenen Dezimalstellungen bei der Datenkonvertierung erhalten bleiben.

Verwenden Sie bei dieser Option immer ein Währungsfeld als Referenz.