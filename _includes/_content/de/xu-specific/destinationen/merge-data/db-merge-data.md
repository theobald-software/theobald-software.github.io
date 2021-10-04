Das folgende Beispiel zeigt die Aktualisierung der vorhandenen Datensätze in einer 
Datenbank durch Ausführen einer Extraktion. Dabei geht es um Zusammenzuführen (Merge) der Daten, d.h. z.B. den Wert eines Feldes zu ändern oder eine neue Datenzeile einzufügen oder eine vorhandene zu aktualisieren. 

Alternativ zum Zusammenführen (Merge) können die Datensätze durch einen "Full Load" aktualisiert werden. Das Full-Load-Verfahren ist weniger effizient und performant.

Voraussetzung für das Zusammenführen (Merge) ist eine Tabelle mit vorhandenen Daten, in welche neue Daten zusammengeführt werden sollen.

Im Idealfall wird die Tabelle mit den vorhandenen Daten im initialen Lauf mit der dazugehörigen Option **Preparation** erstellt und durch die Option *Insert* in **Row Processing** befüllt.


{:.box-warning}
**Warnung! Fehlerhaftes Zusammenführen** <br>
Ein Primärschlüssel ist eine Voraussetzung für einen Merge-Befehl. Wenn kein Primärschlüssel gesetzt ist, läuft der Zusammenführungsbefehl in einen Fehler.
Erstellen Sie einen entsprechenden Primärschlüssel in [General Settings](../erste-schritte/allgemeine-einstellungen#primary-key-tab), um den Merge-Befehl ausführen zu können.


### Aktualisierter Datensatz in SAP
Ein Feldwert innerhalb einer SAP-Tabelle wird aktualisiert. Mit einem Merge-Befehl wird der aktualisierte Wert in die Zieldatenbanktabelle geschrieben. 
![Update-Merge-Example-Data](/img/content/xu/merge_db_scheme.png){:class="img-responsive"}

Der Merge-Befehl gewährleistet eine Deltaverarbeitung: neue Datensätze werden in die Datenbank eingefügt und/oder bestehende Datensätze aktualisiert. <br>


### Merge-Befehl in Xtract Universal
Der Merge-Prozess wird mit Hilfe einer Staging-Tabelle durchgeführt und erfolgt in drei Schritten.
Im ersten Schritt wird eine temporäre Tabelle angelegt, in die die Daten im zweiten Schritt eingefügt werden.
Im dritten Schritt wird die temporäre Tabelle mit der Zieltabelle zusammengeführt und anschließend wird die temporäre Tabelle gelöscht.

1. Wählen Sie im Hauptfenster des Designers die entsprechende Extraktion aus und klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
2. Stellen Sie sicher, dass Sie die passende Destination wählen: eine Datenbankdestination.
3. Navigieren Sie zum rechten Teil des Fensters "Destination Settings" und wenden Sie die folgenden Einstellungen an:
- **Preparation**: *Prepare Merge*, um eine temporäre Staging-Tabelle zu erstellen
- **Row Processing**: *Fill merge staging table*, um die Staging-Tabelle mit Dateien zu befüllen 
- **Finalization**: *Finalize Merge*, um die Staging-Tabelle mit der Zieldatenbanktabelle zusammenzuführen und anschließend die Staging-Tabelle zu löschen.
![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge.png){:class="img-responsive"}

Weitere Informationen über die aktualisierten Felder finden Sie in der SQL-Anweisung ([nur Custom SQL](#custom-sql)).<br>
Es ist möglich, die SQL-Anweisung bei Bedarf zu bearbeiten, z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, die nicht in der SQL-Anweisung erscheinen, sind von den Änderungen nicht betroffen.
