
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

- Z_THEO_READ_TABLE
- /BODS/RFC_STREAM_READ_TABLE
- /SAPDS/RFC_READ_TABLE2
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE (TAB2048)
- /BODS/RFC_READ_TABLE (TAB2048)
- Z_AW_RFC_READ_TABLE
- RFC_READ_TABLE (TAB512)


{: .box-warning }
**Warnung! Duplikate in der Zielumgebung!** <br>
Die SAP-Standardbausteine für Tabellenextraktion besitzen keine Pointer-Logik in Tabellenfeldern. 
Das führt bei großen Tabellen zu schlechter Performance und ggf. zu Dublikaten.
Wir empfehlen daher die Verwendung des Funktionsbausteins [Z_THEO_READ_TABLE](../sap-customizing) von Theobald Software. 

Berücksichtigen Sie die notwendige [Berechtigung der SAP-Tabelle](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```

### Extract data in background job
Durch Ankreuzen der Checkbox "Extract data in background" wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für langlaufende Extraktionen mit sehr großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen könnten. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (SM37) unter dem JobName *THEO_READ_TABLE*.

{: .box-warning }
**Warning! Shared Memory ran out of memory!** <br>
Wenn eine Extraktion im Hintergrund ausgeführt wird und diese Fehlermeldung erscheint, muss die Größe des Shared Memory angepasst werden.
SAP empfiehlt eine Größe von 800MB~1.5GB für ein Produktiv/Testsystem oder 2GB~4GB für ein S/4 System, siehe [SAP: How to solve SYSTEM_NO_SHM_MEMORY runtime error.](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).


### Advanced Settings

#### Background job timeout (seconds)

Diese Einstellung bezieht sich i.d.R. auf Destinationen, bei denen das Schreiben in die Destination zeitintensiv ist, z.B. bei Deaktivierung des Bulk-Inserts bei Datenbank-Destinationen.
**Background job timeout (seconds)** legt den Timeout für Extraktionen fest, die als Hintergrund-Job ausgeführt werden. <br>
Der Standardwert ist 180 Sekunden. Verändern Sie diesen Wert nur nach Absprache mit [Theobald Support](https://support.theobald-software.com/helpdesk/User/Login). 

{: .box-note }
**Hinweis:** Diese Einstellung ist nur dann effektiv, wenn die Extraktion als Hintergrund-Job aufgeführt wird und wenn Sie [Z_THEO_READ_TABLE](../sap-customizing/funktionsbaustein-fuer-table-extraktion) Version 2.11 oder höher verwenden.


#### Adjust Currency Decimals

Standardmäßig haben Währungen in der SAP-Datenbank 2 Nachkommastellen.
Währungen ohne Nachkommastellen werden ebenfalls in diesem Format gespeichert, z.B. JPY, VND, KRW, etc.

Beispiel:

| Währung       | Tatsächlicher Betrag          | Betrag in der SAP-Datenbank |
| ------------- |:-------------:| -----:|
| JPY | 100	|1.00|
| KRW | 10000	|100.00|


Wenn Sie Währungen ohne Nachkommastellen extrahieren, wird der Wert in der SAP-Datenbank zurückgegeben, z.B. werden 100 JPY als 1.00 extrahiert.
Aktivieren Sie *Adjust Currency Decimals*, um die Kommastellen zu korrigieren.
Wenn *Adjust Currency Decimals* aktiv ist, werden Währungen ohne Nachkommastellen mit einem entsprechenden Faktor multipliziert, um die die Nachkommastellen auszugleichen.

*Adjust Currency Decimals* erfordert, dass das zugehörige Währungsfeld des Betrags-Feldes ebenfalls extrahiert wird.
Verwenden Sie die **[Preview]**-Funktion, um das korrekte Währungsfeld zu finden.
- Wenn das Währungsfeld Teil der Tabelle ist, fügen Sie das Feld der Ausgabe hinzu.
- Wenn sich das Währungsfeld in einer anderen Tabelle befindet, fügen Sie die Tabellen zusammen.
- Wenn die Währung nicht Teil einer Tabelle ist, können Sie *Adjust Currency Decimals* nicht verwenden.

{: .box-note }
**Hinweis:** Der Multiplikationsfaktor, der in *Adjust Currency Decimals*  verwendet wird, wird über die SAP Währungstabelle TCURX bestimmt.
Um auf die Tabelle zuzugreifen, muss folgendes Berechtigungsobjekt in SAP verfügbar sein: *S_TABU_NAM	ACTVT=03; TABLE=TCURX*.
