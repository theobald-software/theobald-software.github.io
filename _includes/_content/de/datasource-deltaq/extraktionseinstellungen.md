Um auf die Extraktionseinstellungen zuzugreifen, klicken Sie auf {% if page.product == "xtract-is" %}**Settings** {% else %} **[Extraction Settings]**{% endif %} im Hauptfenster der Komponente.
Das Fenster “DeltaQ Settings” wird geöffnet. Das Fenster besteht aus zwei Tabs:
- [Base](#base)
- [Hierarchy](#hierarchy)

![XU_DeltaQ_Settings_thumb](/img/content/XU_DeltaQ_Settings_thumb.png){:class="img-responsive"}

## Base

### Transfer Mode

Die Rohdatenpakete können von SAP über einen *tRFC*-Aufruf oder ein *Data-IDoc* gesendet werden. Normalerweise ist der tRFC für die Standardeinstellung optimal. Wenn es notwendig ist, z. B. die Rohdatenpakete zu Debugging-Zwecken zu untersuchen, können Sie den Übertragungsmodus auf *IDoc* ändern. Dann können Sie die Datenpakete in der Transaktion WE02 (IDoc-Monitoring) untersuchen.

### Misc.
<!-- ab hier wieder übersetzen--->
**Automatic Synchronisation**<br>
Je nach Systemlandschaft kann es vorkommen, dass Entwicklungen nur in einem Testsystem durchgeführt werden. Sollen DeltaQ-Extraktionen später in der Produktionsumgebung eingesetzt werden, muss die Datenquelle dort freigeschaltet werden. Um manuelle Änderungen im transaktionalen System zu vermeiden, können Sie diese Option aktivieren. In diesem Fall wird die Aktivierung automatisch durchgeführt und der Zeitstempel der Datenquelle wird so geändert, dass er mit der Einstellung des SAP-Systems übereinstimmt. <br>
Wenn die DataSource im SAP-System modifiziert wurde, z.B. der Name, der Datentyp, die Länge eines Feldes geändert wurde oder ein Feld von der Datenübertragung ausgeschlossen wurde, müssen Sie die DataSource in der DeltaQ-Extraktion manuell aktivieren, auch wenn die automatische Synchronisation eingeschaltet ist. Andernfalls wird das Laden der Daten fehlschlagen. Dieses Verhalten ist von SAP so vorgesehen und wird in der [SAP-Help](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html) beschrieben (in Englisch).

**Add Serialization Info to Output**<br>
Fügt der Ausgabe die beiden Spalten *DataPackageID* und *RowCounter* hinzu.<br>
In diesem Fall werden die folgenden drei Spalten, die ein zusammengesetzter Schlüssel der von SAP gelieferten Datensätze sind, in der Ausgabe vorhanden sein:
- *RequestID*
- *DataPackageID* 
- *RowCounter*

{: .box-note }
**Hinweis** Neuere Daten haben eine höhere PackageID. Im gleichen Paket haben neuere Daten einen höheren RowCounter.

**Accept Gaps in DataPackage Id**<br>
Die DeltaQ-Extraktionstyp führt am Ende jeder Extraktion eine Konsistenzprüfung durch. Nur wenn alle Datenpakete korrekt angekommen sind, wird die Extraktion als konsistent angesehen. Für den Fall, dass der Kunde im User-Exit einer OLTP-Quelle eine Filterfunktion eingebaut hat, die bewirkt, dass bestimmte Datenpakete nicht gesendet werden, muss die Konsistenzprüfung entschärft werden. 
Ansonsten würde die Filterfunktion des Kunden als Inkonsistenz gewertet werden. Wenn diese Option aktiviert ist, werden Lücken in der Paketnummerierung vom DeltaQ nicht als Inkonsistenz, sondern als absichtlich zurückgehaltene Information gewertet. Die Option sollte nur verwendet werden, wenn eine entsprechende Filterfunktion im User-Exit vorhanden ist.

**Timeout (sec)**<br>
Definiert eine Zeitspanne (in Sekunden), wie lange das Xtract-Produkt wartet, nachdem der Extraktionsauftrag auf SAP-Seite beendet ist, aber noch nicht alle tRFC-Aufrufe empfangen wurden.

#### Request Maintenance

Zum Anzeigen und Löschen der Init-Requests dieser DataSource (Requests in RSA7).

![DeltaQ_Request_Maintenance](/img/content/DeltaQ_Request_Maintenance.png){:class="img-responsive"}

- **Delete Request**<br>
    Löscht die Init-Requests (Requests in RSA7).
- **Allow BW requests deletion**<br>
  	Erlauben Sie das Löschen der Initialisierungsrequests der Exportdatenquellen im BW. 

### Registerkarte Hierarchy

Die Registerkarte Hierarchie besteht aus zwei Unterabschnitten:
- Extraction
- Natural Representation

![Deltaq-Präferenzen-Hierarchie](/img/content/Deltaq-Preferences-Hierarchy.png){:class="img-responsive"}

#### Extraction

**Language**<br>
Definiert die Sprache, wenn eine Hierarchie extrahiert wird.

**Hierarchy Name**<br>
Definiert den Hierarchienamen.

**Hierarchy Class**<br>
Legt die Hierarchieklasse fest.

**Representation**<br>
- **ParentChild**: Die Hierarchie hat das SAP-Parent-Child-Format.
![Deltaq-Hierarchies-Parent-Child](/img/content/Deltaq-Hierarchies-Parent-Child.png){:class="img-responsive"}
- **Natural**: Aktivierung des **Natural Representation** Abschnitts. Die Parent-Child-Hierarchie wird dann in eine reguläre Hierarchie umgewandelt.

#### Natural Representation

**Level Count**
Legt die maximale Anzahl der Ebenen fest, wenn die natürliche Darstellung ausgewählt ist. Im folgenden Screenshot sehen Sie die im vorherigen Screenshot gezeigte Hierarchie mit fünf Ebenen in der Darstellung *Natural*.

![Deltaq-Hierarchies-Parent-Child-Natural](/img/content/Deltaq-Hierarchies-Parent-Child-Natural.png){:class="img-responsive"}

**Fill empty levels** <br>
Wenn die Darstellung *Natural* ausgewählt ist, wird das unterste Element der Hierarchie bis zur letzten Ebene kopiert. Im folgenden Screenshot sehen Sie die Hierarchie von oben mit aktivierter Option *Repeat Leaves*.

![Deltaq-Hierarchies-Parent-Child-Repeat](/img/content/Deltaq-Hierarchies-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
Bedeutet, dass die Ausgabe für jedes Feld *LevelN* ein Feld *LevelTextN* hat, das den Text basierend auf den System-Spracheinstellungen enthält.

**Leaves only**<br>
Liefert nur die Leaves als Datensätze. 
