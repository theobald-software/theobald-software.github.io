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

{:.box-note}
**Hinweis:** die Option *Cache results* ist nur Verfügbar in [Pull-Destinationen](../xu-destinationen#pull--und-push-destinationen) (z.B. PBI, Qlik etc.).

Pull-Destinationen ziehen die Daten oft mehrfach aus SAP. Um die Belastung des SAP-Servers zu verringern, können Sie die Option **Cache results** auswählen,
 so dass die Pull-Destination die Daten aus dem Cache und nicht aus dem SAP zieht.
Dies erhöht die Performance und begrenzt die Auswirkungen auf das SAP-System.
 Wenn dieses Verhalten nicht erwünscht ist (z.B. weil die Daten immer zu 100% aktuell sein müssen), muss die Cache-Option explizit ausgeschaltet werden.

**Preview Mode** (2)

Wenn der Preview-Modus aktiviert ist, wird nur ein kleiner Teil der Daten aus SAP extrahiert oder, falls eine Extraktion nicht möglich ist, werden stattdessen Beispieldaten erzeugt.


#### Keywords (Schlüsselwörter)

Ein oder mehrere Schlüsselwörter (Tags) können auf eine Extraktion gesetzt werden. 
Schlüsselwörter können direkt in das Schlüsselwortfeld (3) eingegeben werden.
Innerhalb des Designers können Sie diese Schlüsselwörter zum Filtern von Extraktionen verwenden. 

{:.box-tip}
**Tipp:** zum Anzeigen der Filteroptionen, navigieren Sie zu **[Extractions] > [Filter]** oder drücken Sie **[CTRL]+[F]**.



### Primary Key Tab
Tabellenextraktionen erben die Primärschlüssel von SAP. Andere Objekte wie z.B. SAP Query, BW Cube etc. erfordern eine manuelle Einstellung von Primärschlüsseln. 
![General-Settings-Primary-Key](/img/content/XU_table_Primary_key.png){:class="img-responsive"}

Das abgebildete Beispiel zeigt das SAP-Objekt *KNA1* und *KNVV* mit deren Primärschlüssel. Der Primärschlüssel wurde SAP geerbt wurde und wird in den allgemeinen Einstellungen des Designers angezeigt.
In diesem Beispiel besteht der Primärschlüssel aus *KUNNR*, *VKORG*, *VTWEG* und *SPART*. Der gezeigte Primärschlüssel wird auch in der Destination übernommen. 

{:.box-note}
*Hinweis:** ein definiertes Primärschlüsselfeld in einer Tabelle ist die Voraussetzung für das Zusammenführen (Merge) von Daten. 

### Encryption

Bald verfügbar.

![General-Settings-Encryption](/img/content/XU-General_Settings-Encryption.png){:class="img-responsive"}


### Security Tab

Das Security Tab ist im Abschnitt [Zugriffsverwaltung](../sicherheit/zugriffsverwaltung#zugriffssteuerung-auf-extrakionsebene---extraction-settingsg) beschrieben. 
![Extraction-Settings_](/img/content/XU_Extraction_Security3.png){:class="img-responsive"}
