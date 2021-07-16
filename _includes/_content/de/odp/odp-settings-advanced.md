### Fortgeschrittene Einstellungen

**Package Size**<br>
Die extrahierten Daten werden in Pakete mit der angegebenen Größe aufgeteilt.
Wenn der hier angegebene Wert 0 ist, wird die ODP-Standardgröße von SAP verwendet.

Importieren Sie folgende Hinweise in Ihr SAP-System bzw. stellen Sie sicher, dass Ihr SAP-System einen entsprechenden Release-Stand hat, der diese Hinweise beinhaltet: <br>
- 2196500 - ODP Paketgröße kann nicht auf einen Wert unter 50 MB reduziert<br>
- 2191995 - ODQ Paketgröße kann nicht unter 50 MByte reduziert werden <br>

{: .box-warning }
**Warnung! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:** <br> Die Standardgröße für **Package Size** wurde von 14MB auf 50MB (standardgemäß) erhöht. 
Um einen Speicherüberlauf auf dem SAP-Quellsystem und einen großen Overhead zu vermeiden, wählen Sie eine für Ihre Speichergröße angemessene Paketgröße.

![ODP Advanced Settings](/img/content/odp/advanced-settings.png){:class="img-responsive"}

