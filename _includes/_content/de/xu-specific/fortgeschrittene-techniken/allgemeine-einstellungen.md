Die allgemeinen Einstellungen sind unabhängig vom Extraktionstyp.


### Allgemeine Einstellungen öffnen
1. Im Hauptfenster des Designers doppelklicken Sie auf eine Extraktion.<br>
Das Fenster "Define data source for [...]" wird geöffnet.<br>
Beispiel:
![General-Settings](/img/content/General-Settings_designer.png){:class="img-responsive"}
2. Klicken Sie in dem geöffneten Fenster auf **[General Settings]**.<br>
Das Fenster "General Settings" wird geöffnet.


### Misc. Tab

Der Tab "Misc." besteht aus zwei Unterabschnitten:
- Optionen
- Schlüsselwörter

![General-Settings](/img/content/General-Settings.png){:class="img-responsive"}


#### Options

**Cache results** (1)

{% if page.product == "xtract-universal" %} 

{:.box-note}
**Hinweis:** die Option *Cache results* ist nur Verfügbar in [Pull-Destinationen](../destinationen#pull--und-push-destinationen) (z.B. PBI, Qlik etc.).

Pull-Destinationen ziehen die Daten oft mehrfach aus SAP. Um die Belastung des SAP-Servers zu verringern, können Sie die Option **Cache results** auswählen,
so dass die Pull-Destination die Daten aus dem Cache und nicht aus dem SAP zieht.
{% endif %}

{% if page.product == "board-connector" %} 
Daten oft mehrfach aus SAP gezogen. Um die Belastung des SAP-Servers zu verringern, können Sie die Option **Cache results** auswählen,
so dass die Daten aus dem Cache und nicht aus dem SAP gezogen werden.
{% endif %}


Dies erhöht die Performance und begrenzt die Auswirkungen auf das SAP-System.
Wenn dieses Verhalten nicht erwünscht ist (z.B. weil die Daten immer zu 100% aktuell sein müssen), muss die Cache-Option explizit ausgeschaltet werden.

 
**Enable column level encryption** (2)<br>
Die Checkbox muss angehakt werden, wenn Sie eine "Column Encryption" (Spalten-Verschlüsselung) verwenden, siehe [Encryption](#encryption).

#### Keywords (Schlüsselwörter)

Ein oder mehrere Schlüsselwörter (Tags) können auf eine Extraktion gesetzt werden. 
Schlüsselwörter können direkt in das Schlüsselwortfeld eingegeben werden.
Innerhalb des Designers können Sie diese Schlüsselwörter zum Filtern von Extraktionen verwenden. 

{:.box-tip}
**Tipp:** Um mehreren Extraktionen Schlüsselwörter hinzuzufügen, markieren Sie die Extraktionen im Hauptfenster des Designers.
Über Rechtklick + **Add/Remove keywords** öffnen Sie das Fenster "Add/Remove Keywords To/From Multiple Extractions".

### Primary Key Tab
Tabellenextraktionen erben die Primärschlüssel von SAP. Andere Objekte wie z.B. SAP Query, BW Cube etc. erfordern eine manuelle Einstellung von Primärschlüsseln. 
![General-Settings-Primary-Key](/img/content/XU_table_Primary_key.png){:class="img-responsive"}

Das abgebildete Beispiel zeigt das SAP-Objekt *MAKT* mit seinem Primärschlüssel. Der Primärschlüssel ist von SAP geerbt und wird in den allgemeinen Einstellungen des Designers angezeigt.
In dem Beispiel besteht der Primärschlüssel aus *MANDT*, *MATNR*, und *SPRAS*. Der gezeigte Primärschlüssel wird auch in der Destination übernommen. 

{:.box-note}
*Hinweis:** ein definiertes Primärschlüsselfeld in einer Tabelle ist die Voraussetzung für das Zusammenführen (Merge) von Daten. 

**Generate Surrogate Key Column:**<br>
Wenn diese Option aktiv ist, wird eine Spalte THEO_SURR_KEY zu den extrahierten Daten hinzugefügt.
Die Spalte THEO_SURR_KEY enthält Ersatzschlüssel, die als IDs für Zeilen verwendet werden können. 
Die Ersatzschlüssel sind Hash-Werte des Typs *Signed 8 Byte Integer*, z.B. #-3008591679982390000.
Sie werden auf Basis der gewählten Primärschlüssel-Spalten und des Namens der verwendeten SAP-Quelle generiert.

<!---
{:.box-warning}
**Warnung! Duplikate bei großen Datenmengen!**
Bei der Extraktion von mehr als 200 Millionen Zeilen, können Duplikate vorkommen.
-->

### Encryption Tab

Sie können Daten sowohl verschlüsselt als auch unverschlüsselt speichern. 
Die “Column Encryption” (Spalten-Verschlüsselung) ermöglicht Ihnen eine Verschlüsselung der Spalten bevor die extrahierten Daten in die Destination hochgeladen werden. 
Dadurch kann sichergestellt werden, dass sensible Informationen geschützt sind.

Diese Funktion unterstützt außerdem wahlfreien Zugriff, d.h. dass Daten von jedem beliebigen Startpunkt aus entschlüsselt werden können. 
Da wahlfreier Zugriff einen erheblichen Overhead verursacht, wird empfohlen die Spalten-Verschlüsselung nicht auf den gesamten Datensatz anzuwenden.

Spalten-Verschlüsselung wird nicht von allen Destinationen unterstützt.
Wenn die Spalten-Verschlüsselung verfügbar ist, können Sie die zu verschlüsselnden Spalten in der Liste verfügbarer Spalten auswählen. <br>
![Column-Encryption](/img/content/xu/xu-column-encryption-01.png){:class="img-responsive"}

### Security Tab

Das Security Tab ist im Abschnitt [Zugriffsverwaltung](../sicherheit/zugriffsverwaltung#zugriffssteuerung-auf-extrakionsebene---extraction-settingsg) beschrieben. 
![Extraction-Settings_](/img/content/XU_Extraction_Security3.png){:class="img-responsive"}

### Columns Order Tab

Mit der Funktion "Columns Order - Spaltenreihenfolge" können Benutzer die Reihenfolge der Ergebnisspalten beim Ausführen einer Extraktion neu anordnen.<br>
Um die Ergebnisreihenfolge neu zu ordnen, weisen Sie den verfügbaren Ergebnisspalten Indizes zu.
Index 0 definiert die erste Spalte in der Ergebnismenge, Index 1 die zweiten Spalten usw.

![Extraction-Settings_](/img/content/xu/general-settings-column-order.png){:class="img-responsive"}

**Enabled:**<br>
Wenn diese Option aktiv ist, wird beim Ausführen der Extraktion eine neue Spaltenreihenfolge angewendet.

**Swap:**<br>
Vertauscht den Index von 2 Spalten. Alle anderen Spalten behalten ihre Indizes.

**Insert:**<br>
Fügt die ausgewählte Spalte in den ausgewählten Index ein. Alle anderen Indizes werden neu berechnet.

**[Reset default]:**<br>
Stellt die ursprüngliche Spaltenreihenfolge wieder her.
