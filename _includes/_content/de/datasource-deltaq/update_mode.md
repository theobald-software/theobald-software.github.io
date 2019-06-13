**Update Mode**<br>
Die DeltaQ bietet folgende Update Modi:

**F - Full**<br>
Der Full Modus extrahiert alle Daten, welche den Selektionskriterien entsprechen.

**D - Delta Update**<br>
Der Delta Update Modus fordert nur Daten an, welche seit dem letzten Delta in SAP hinzugekommen sind bzw. verändert wurden.<br>
Bevor Sie ein Delta Update ausführen, müssen Sie den Delta-Prozess initialisieren.<br>
Sollte ein Fehler während des Delta-Requests auftreten, nutzen Sie für die nächste Ausführung bitte den Repeat-Modus.

**C - Delta Initialisation**<br>
Um Deltas zu extrahieren, müssen Sie den Delta-Prozess initialisieren. Der Delta Initialisation Modus extrahiert alle Daten und initialisiert den Delta-Prozess.<br>
Möchten Sie einen Delta-Prozess erneut initialisieren, sollten Sie vorher über die Schaltfläche "Request Maintenance" in den DeltaQ Extraction Settings vorhandene Inits löschen.

**C - Delta Init (ohne Daten)**<br>
Um Deltas zu extrahieren, müssen Sie den Delta-Prozess initialisieren. Das Delta Init (ohne Daten) Modus initialisiert den Delta-Prozess, ohne Daten zu extrahieren.<br>
Möchten Sie einen Delta-Prozess erneut initialisieren, sollten Sie vorher über die Schaltfläche "Request Maintenance" in den DeltaQ Extraction Settings vorhandene Inits löschen.

**I - Anfangsbestand aufbauen**<br>
Relevant für DataSources wie 2LIS_03_BX

**R - Repeat**<br>
Sollte ein Fehler während eines Delta-Prozesses auftreten, müssen Sie den Repeat-Modus bei der nächsten Ausführung verwenden.<br>
Dieser Modus extrahiert alle falsch und unvollständig geladene Daten aus dem fehlerhaften Delta-Lauf seit dem letzen Aufruf.<br>
Daten aus einem fehlerhaften Delta-Lauf, die eventuell bereits in die Datenziele gespeichert wurden, sollten zunächst aus dem Ziel gelöscht werden, bevor ein Repeat angestartet wird.<br>
Sie können einen Repeat mehrmals durchführen.

**A - Activate (don't extract)**<br>
Dieser Modus führt lediglich eine Aktivierung der DataSource durch, so wie ein manueller Klick auf die Schaltfläche "Activate". Es werden keine Daten extrahiert.<br>
Der Modus kann z.B. verwendet werden, um zunächst alle DataSources im Batch zu aktivieren und ist damit eine Alternative zum DeltaQ Setting "Automatic Synchronization".