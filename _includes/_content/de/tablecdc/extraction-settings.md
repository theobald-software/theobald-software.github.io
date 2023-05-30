
![table-cdc-extraction-settings](/img/content/tablecdc/table-cdc-extraction-settings.png){:class="img-responsive"}

### Initial Load

#### Extract data in background job
Durch Ankreuzen der Checkbox "Extract data in background" wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Aktivieren Sie diese Einstellung für langlaufende Extraktionen mit großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (SM37) unter dem JobName *THEO_READ_TABLE*.

{: .box-warning }
**Warning! Shared Memory ran out of memory!** <br>
Wenn eine Extraktion im Hintergrund ausgeführt wird und diese Fehlermeldung erscheint, muss die Größe des Shared Memory angepasst werden.
SAP empfiehlt eine Größe von 800MB~1.5GB für ein Produktiv/Testsystem oder 2GB~4GB für ein S/4 System, siehe [SAP: How to solve SYSTEM_NO_SHM_MEMORY runtime error](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).

#### Background job timeout (seconds)

Diese Einstellung bezieht sich i.d.R. auf Destinationen, bei denen das Schreiben in die Destination zeitintensiv ist, z.B. bei Deaktivierung des Bulk-Inserts bei Datenbank-Destinationen.
**Background job timeout (seconds)** legt den Timeout für Extraktionen fest, die als Hintergrund-Job ausgeführt werden. <br>
Der Standardwert ist 180 Sekunden. Der maximale Wert für den Timeout liegt bei 3600 Sekunden. 
