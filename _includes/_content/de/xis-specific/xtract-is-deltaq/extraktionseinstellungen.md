Klicken Sie im Hauptfenster "Extract SAP DataSources and Extractors" auf **[Settings]**.
Das Fenster **Xtract IS DeltaQPrefernces** öffnet sich. Das Fenster besteht aus vier Hauptbereichen und Schaltflächen.

![XIS_DeltaQ_Settings](/img/content/XIS_DeltaQ_Settings.png){:class="img-responsive"}

### String Conversion

**Automatic String Conversion**<br>
Alle Strings werden in VarChar-Strings konvertiert, wenn das Quellsystem nicht Unicode ist, und alle Strings werden in NVarChar konvertiert, wenn das Quellsystem Unicode ist.

**Convert Strings to VarChar**<br>
Alle Zeichenketten werden in VarChar konvertiert, unabhängig davon, ob das Quellsystem Unicode ist oder nicht.

**Convert Strings to NVarChar**<br>
Alle Strings werden in NVarChar konvertiert, unabhängig davon, ob das Quellsystem Unicode ist oder nicht.

### Transfer Mode

Die Rohdatenpakete können von SAP durch einen *tRFC*-Aufruf oder ein Data-*IDoc* gesendet werden. Normalerweise ist der tRFC für die Standardeinstellung optimal. 
Wenn es notwendig ist, z. B. die Rohdatenpakete zu Debugging-Zwecken zu untersuchen, können Sie den Übertragungsmodus auf IDoc ändern. Dann können Sie die Datenpakete in der Transaktion WE02 (IDoc-Monitoring) untersuchen.

### Hierarchie Settings

**Language**<br>
Definiert die Sprache, wenn eine Hierarchie extrahiert wird.

**Hierarchy Name**<br>
Legt den Namen der Hierarchie fest.

**Hierarchy Class**<br>
Definiert die Hierarchieklasse.

**Hierarchy Version**<br>
Legt die Version der Hierarchie fest.

### Misc. 

**Update Mode Variable**<br>
Definiert eine Variable für den Aktualisierungsmodus.
Setzen Sie den Wert von **Update Mode** auf **V - SSIS Variable** und definieren Sie die SSIS Variable für den Update Mode. Die SSIS-Variable kann die folgenden Werte verarbeiten: F, C, D, S, I und R, wie sie in den Werten des Aktualisierungsmodus aufgeführt sind.

**Request ID**<br>
Dieses Feld ist optional. 
Wenn ein Wert (z.B. XtractDatasource) gesetzt ist, wird dieser als Suffix im SAP-Jobnamen verwendet (z.B. BIXtractDatasource), ansonsten wird eine Kombination aus Prozess-ID und Zeitstempel verwendet (z.B. REQU_pppppppppp_yyyMMddHHmmss), wobei die Prozess-ID die ID des Windows-Prozesses ist, unter dem die XtractDeltaQServerPool.exe läuft.

**Automatic Synchronisation**<br>
Je nach Systemlandschaft kann es vorkommen, dass Entwicklungen nur in einem Testsystem durchgeführt werden. Sollen SSIS-Pakete später in der Produktionsumgebung verwendet werden, muss die Datenquelle dort aktiviert werden. Um manuelle Änderungen im transaktionalen System zu vermeiden, können Sie diese Option aktivieren. In diesem Fall erfolgt die Aktivierung automatisch und der Zeitstempel der Datenquelle wird so geändert, dass er mit der Einstellung im SAP-System übereinstimmt. 
Wenn die DataSource im SAP-System geändert wurde: Z. B. wurde der Name eines Feldes, der Datentyp oder die Länge geändert oder ein Feld von der Datenübertragung ausgeschlossen, dann müssen Sie die DataSource in der DeltaQ-Komponente manuell aktivieren, auch wenn die automatische Synchronisation eingeschaltet ist. Andernfalls wird das Laden der Daten fehlschlagen. Dieses Verhalten ist von SAP so vorgesehen und wird in der [SAP-Hilfe](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html) beschrieben.

**Add Serialization Info to Output**<br>
Fügt der Ausgabe die beiden Spalten *DataPackageID* und *RowCounter* hinzu. In diesem Fall werden die folgenden drei Spalten in der Ausgabe verfügbar sein: *RequestID*, *DataPackageID* und *RowCounter*, die einen zusammengesetzten Schlüssel der von SAP gelieferten Datensätze darstellen.  
Neuere Daten haben eine höhere PackageID. Im gleichen Paket haben neuere Daten einen höheren RowCounter. 

**Automatic Data Type conversion**<br>
SAP-Datentypen (wie Datum) werden in einen passenden SQL-Datentyp konvertiert.  

**Value for invalid date [YYYYMMDD]**<br>
Falls keine konvertierbaren Datumswerte vorhanden sind, müssen Sie einen Standard-Datumswert in die Textbox eingeben. Jeder ungültige Wert wird in diesen Wert konvertiert. Das SAP-Datum '00000000' wird unabhängig vom eingegebenen Datum in NULL umgewandelt.

**Replace date 00000000 with [YYYYMMDD]**<br>
SAP-Datum '00000000' wird in NULL oder das eingegebene Datum [YYYYMMDD] umgewandelt. 

**Replace invalid date  with[YYYYMMDD]**<br>
Falls keine konvertierbaren Datumswerte vorhanden sind, müssen Sie einen Standard-Datumswert in die Textbox eingeben. Jeder ungültige Wert wird in diesen Wert umgewandelt.<br>

**[Request Maintenance]**<br>
Zeigt den Inhalt der SAP-Tabelle ROOSPRMSC an.
Erlaubt das Löschen von Init-Requests (Requests in RSA7).
Im Allgemeinen sollte hier nur ein Eintrag sichtbar sein, der einem Init Request entspricht.
Nur wenn Sie Init Requests mit sich nicht überschneidenden Auswahlkriterien ausgeführt haben, können Sie mehr als einen Eintrag in dieser Ansicht haben.

**[Generate Documentation]**<br>
Erzeugt eine Excel-Datei über die Datenquelle und ihre Felder.
