Um auf die Extraktionseinstellungen zuzugreifen, klicken Sie im Hauptfenster der **Xtract Report** Komponente auf **[Extraction Settings]**
Das Fenster "Extraction Settings" öffnet sich.

![Report-Extraction-Settings](/img/content/Report-Extraction-Settings.png){:class="img-responsive"}

### Batch Processing - Stapelverarbeitung

**Use Background Mode**<br>
Wenn Sie diese Option aktivieren, wird der ABAB Report in SAP als Batch-Job ausgeführt.
In SAP wird ein Spool-Auftrag generiert, der dann von der Report-Komponente abgerufen wird.
Verwenden Sie diese Option bei langen Reports, die in einen RFC-Timeout laufen wenn sie im Dialogbetrieb ausgeführt werden.
Einige Reports, die im Dialogbetrieb Fehlermeldungen ausgeben, können im Hintergrund-Modus erfolgreich ausgeführt werden.


**Background Job Timeout**<br>
definiert die Zeitspanne in Sekunden, wie lange der Report im Hintergrund maximal laufen darf, bevor der Task abbricht.


**Background Job Name**<br>
Geben Sie einen Zeitraum in Sekunden ein.
Die Xtract Report Komponente fragt den Status des Batch-Jobs in SAP für die angegebene Zeitspanne ab.
Wenn der SAP Batch-Job nicht innerhalb der angegebenen Zeitspanne beendet ist, wird die Extraktion abgebrochen.

**Spool Destination**<br>
Geben Sie den Namen des Ausgabegeräts (Drucker) für den Spool-Auftrag ein.

### Automatic Detection - Automatische Spaltendetektion

**Header pattern**<br>
Geben Sie ein Suchmuster ein (z.B. *Created on*), um den Tabellen-Kopf zu erkennen. 
Die Report Komponente scannt die Ausgabe des Reports nach dem Suchmuster ab und verwendet die Zeile, in der das Suchmuster vorkommt als Report-Kopf.

Diese Einstellung ist i.d.R. nicht notwendig, wenn die Spalten des Reports automatisch detektiert werden können und *Dynamic column widths and offsets* im Report Fenster angewählt ist.

**Row skip pattern**<br>
Das *Row skip pattern* fungiert als "umgekehrte" WHERE-Bedingung:
Alle Zeilen des Reports, die das angegebene Muster enthalten, werden aus der Ausgabe entfernt.
Die Zeilen werden entfernt *nachdem* die Daten aus SAP extrahiert wurden.<br>

Die Eingabe regulärer Ausdrücke wird unterstützt.
Mehrere Muster können durch das Trennzeichen '|' eingegeben werden, z.B. `2020|2021|-|Sum`.
Dieser Eintrag entfernt alle Zeilen, die das Muster '2020', '2021', '-' und 'Sum' enthalten.
*Row skip pattern* kann verwendet werden, um einen Tabellen-Kopf zu entfernen, der mehrmals im Report wiederholt wird.

Diese Einstellung ist i.d.R. nicht notwendig, wenn die Spalten des Reports automatisch detektiert werden können und *Dynamic column widths and offsets* im Report Fenster angewählt ist.

### Function Module - Funktionsbaustein

**Custom Function**<br>
Die Verwendung der Report-Komponente setzt die Installation des Funktionbausteins `Z_XTRACT_IS_REMOTE_REPORT` in Ihrem SAP-System voraus, siehe [Install Report Custom Fuction Module](.././sap-customizing/report-funktionsbaustein-installieren).
Wenn Sie den Funktionsbaustein manuell in Ihrem SAP-System erstellt und einen anderen Namen vergeben haben, geben Sie hier den Namen des Bausteins ein.
Der Standardeintrag ist `Z_XTRACT_IS_REMOTE_REPORT`.
