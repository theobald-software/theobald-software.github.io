Um auf die Extraktionseinstellungen zuzugreifen, klicken Sie auf **Extraction Settings** im Hauptfenster der Komponente.
Das Fenster “DeltaQ Settings” wird geöffnet. Das Fenster besteht aus zwei Tabs:

{% if page.product == "xtract-is" %}
- [Base](#base)
- [Misc](#misc) 
- [Hierarchy](#hierarchy)
{% else %}
- [Base](#base)
- [Hierarchy](#hierarchy)
{% endif %}

{% if page.product == "xtract-is" %}
![XU_DeltaQ_Settings_thumb](/img/content/xis/DeltaQ-Settings.png){:class="img-responsive"}
{% else %}
![XU_DeltaQ_Settings_thumb](/img/content/XU_DeltaQ_Settings_thumb.png){:class="img-responsive"}
{% endif %}

## Base

### Transfer Mode

Die Rohdatenpakete können von SAP über einen *tRFC*-Aufruf oder ein *Data-IDoc* gesendet werden. Normalerweise ist der tRFC für die Standardeinstellung optimal. Wenn es notwendig ist, z. B. die Rohdatenpakete zu Debugging-Zwecken zu untersuchen, können Sie den Übertragungsmodus auf *IDoc* ändern. Dann können Sie die Datenpakete in der Transaktion WE02 (IDoc-Monitoring) untersuchen.

{% if page.product == "xtract-is" %}

### Convert Dates

**Replace year 0 with**<br>
Konvertiert das SAP-Datum 00000000 zu dem eingegebenen Wert. NULL wird als Wert unterstützt.

**Replace year 9999 with**<br>
Konvertiert das SAP-Datum 9999XXXX zu dem eingegebenen Wert. NULL wird als Wert unterstützt.

**Replace invalid year with**<br>
Falls keine konvertierbaren Datumswerte vorhanden sind, müssen Sie einen Standard-Datumswert in die Textbox eingeben. Jeder ungültige Wert wird in diesen Wert konvertiert. Das SAP-Datum ‘00000000’ wird unabhängig vom eingegebenen Datum in NULL umgewandelt.

## Misc.
![XU_DeltaQ_Settings_thumb](/img/content/xis/DeltaQ-Settings2.png){:class="img-responsive"}

**Update Mode Variable**<br>
Definiert eine Variable für den Aktualisierungsmodus. 
Geben Sie den Namen einer SSIS Variable im Format `@variable_name` und setzen Sie das Custom Property *UseLegacyVarUpdate* der Komponente auf *true*, um den Aktualisierungsmodus zu überschreiben.
Die SSIS-Variable kann die folgenden Werte verarbeiten: F, C, D, S, I und R, wie sie in den Werten des Aktualisierungsmodus aufgeführt sind.

**Request ID**<br>
Dieses Feld ist optional. Wenn ein Wert (z.B. XtractDatasource) gesetzt ist, wird dieser als Suffix im SAP-Jobnamen verwendet (z.B. BIXtractDatasource), ansonsten wird eine Kombination aus Prozess-ID und Zeitstempel verwendet (z.B. REQU_pppppppppp_yyyMMddHHmmss), wobei die Prozess-ID die ID des Windows-Prozesses ist, unter dem die XtractDeltaQServerPool.exe läuft.

{% else %}
### Misc.
{% endif %}

**Automatic Synchronization**<br>
Option zur Verhinderung manueller Änderungen im Transaktionssystem beim Wechsel von der Testumgebung zur Produktionsumgebung. <br>
Beispiel: Um DeltaQ-Extraktionen in der Produktionsumgebung verwenden zu können, muss die Datenquelle in der Produktionsumgebung aktiviert werden. 
Wenn **Automatic Synchronization** aktiviert ist, erfolgt die Aktivierung automatisch und der Zeitstempel der Datenquelle wird so geändert, dass er mit den Einstellungen des SAP-Systems übereinstimmt. <br>

{: .box-note }
**Hinweis:** Wenn die Datenquelle im SAP-System geändert wird, aktivieren Sie die Datenquelle manuell in der {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract{% endif %} DeltaQ Komponente. Auch dann, wenn die Option **Automatic Synchronization** aktiviert ist. 
Andernfalls wird das Laden der Daten fehlschlagen. Dieses Verhalten gehört zum SAP-Design, siehe [SAP Documentation: Replication of DataSources](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html).

**Add Serialization Info to Output**<br>
Fügt der Ausgabe die Spalten *DataPackageID*und *RowCounter* hinzu.<br>
Beispiel: Die folgenden Spalten, die einen zusammengesetzten Schlüssel der SAP-Datensätze darstellen, sind in der Ausgabe enthalten:
- *RequestID*
- *DataPackageID* 
- *RowCounter*

{: .box-note }
**Hinweis:** Neuere Daten haben eine höhere PackageID. Im gleichen Paket haben neuere Daten einen höheren RowCounter.

{% if page.product != "xtract-is" %}

**Accept Gaps in DataPackage Id**<br>
Am Ende jeder Extraktion führt die DeltaQ Komponente eine Konsistenzprüfung durch. 
Die Extraktion gilt als konsistent, wenn alle Datenpakete korrekt ankommen. 
Beispiel: Bei Verwendung einer Filterfunktion im User-Exit einer OLTP-Quelle werden bestimmte Datenpakete nicht versendet.
In diesem Fall ist die Filterfunktion inkonsistent. <br>
Wenn die Option **Accept Gaps in DataPackage Id** aktiviert ist, gelten die Lücken in der Paketnummerierung nicht als Inkonsistenz. 
Verwenden Sie diese Option nur, wenn im User-Exit eine Filterfunktion vorhanden ist.

**Timeout (sec)**<br>
Geben Sie einen Zeitraum (in Sekunden) ein. Die Zeitüberschreitung gilt, wenn eine Extraktion auf der SAP-Seite abgeschlossen ist, aber nicht alle tRFC-Aufrufe empfangen wurden. 

{% endif %}

## Hierarchy

Die folgenden Einstellungen gelten nur für Hierarchieextraktionen.

{% if page.product == "xtract-is" %}
![XU_DeltaQ_Settings_thumb](/img/content/xis/DeltaQ-Settings3.png){:class="img-responsive"}
{% else %}
![Deltaq-Preferences-Hierarchy](/img/content/Deltaq-Preferences-Hierarchy.png){:class="img-responsive"}
### Extraction
{% endif %}

**Language**<br>
Geben Sie die Sprache der Hierarchie ein, z. B. 'E' oder 'D'.

**Hierarchy Name**<br>
Geben Sie den Namen der Hierarchie ein.

**Hierarchy Class**<br>
Geben Sie die Klasse der Hierarchie ein.

{% if page.product != "xtract-is" %}

**Representation:** 
- *ParentChild*: Die Hierarchie wird im SAP-Parent-Child-Format repräsentiert. Beispiel:<br>
![Hierarchies-Parent-Child](/img/content/extractors.bwhier/Hierarchy-Table-Output-Result.png){:class="img-responsive"}
- *Natural*: Die SAP Parent-Child-Hierarchie wird in eine reguläre Hierarchie transformiert. Beispiel:<br>
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}
- *ParentChildWithNodeNames*: Die Hierarchie ist in einem reduzierten Parent-Child-Format repräsentiert, das nur den Knoten und den Vaterknoten beinhaltet. Beispiel:<br>
![Hierarchy-Parent-Child-With-Node-Names](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

### Natural Representation

{: .box-note}
**Hinweis:** Der Unterabschnitt *Natural Settings* ist nur dann aktiv, wenn das Feld **Representation** den Wert *Natural* hat.

**Level Count** <br>
Definiert die maximale Anzahl von Ebenen. 
Das folgende Beispiel demonstriert die zuvor gezeigte Hierarchie mit fünf Ebenen und in der Darstellung gesetzt auf *Natural*.
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Leaves only**<br>
Liefert nur Leaves als Datensätze.<br>
![Hierarchy-Leaves-Only](/img/content/extractors.bwhier/Hierarchy-leaves-only.png){:class="img-responsive"}

**Fill empty levels**  <br>
Kopiert das unterste Element der Hierarchie bis zur letzten Ebene.
Das folgende Beispiel demonstriert die zuvor gezeigte Hierarchie mit der aktivierten Option *Repeat Leaves*.<br>
![Hierarchy-Parent-Child-Repeat](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
Setzt das Output-Feld *LevelTextN* für jedes Feld *LevelN*, welches den Text beinhaltet, der auf den Einstellungen der Systemsprache basiert.<br>
![Hierarchy-Description-Texts](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}

{% endif %}

## Maintenance

Klicken Sie auf **[Maintenance]**, um eine Liste der Init-Requests der DataSource zu öffnen (SAP-Transaktion RSA7).

![Hierarchy-Description-Texts](/img/content/DeltaQ_Request_Maintenance.png){:class="img-responsive"}

Klicken Sie auf ![bin](/img/content/icons/trashbin.png), um eine Init-Anfrage zu löschen. Dies ist bei der Neuinitialisierung eines Delta-Prozesses erforderlich.


