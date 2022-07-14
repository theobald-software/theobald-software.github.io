---
ref: bc-getting-started-05
layout: page
title: Allgemeine Einstellungen
description: Allgemeine Einstellungen
product: board-connector
parent: erste-schritte
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Board-Connector-DE/default.aspx?pageid=allgemeine-einstellungen
progressstate: 5
---

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
- Options
- Keywords

![General-Settings](/img/content/General-SettingsBC.png){:class="img-responsive"}

#### Options

**Cache results** (1)

Board zieht die Daten oft mehrfach aus SAP. Um die Belastung des SAP-Servers zu verringern, können Sie die Option **Cache results** auswählen,
 so dass Board die Daten aus dem Cache und nicht aus dem SAP zieht.
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


### Security Tab

Das Security Tab ist im Abschnitt [Zugriffsverwaltung](https://help.theobald-software.com/de/board-connector/sicherheit/zugriffsverwaltung) beschrieben. 

### CSV Tab

#### Column Name Style

Definiert den Spaltennamen. Folgende Optionen sind verfügbar: 

- **Code**: Der technische Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX<br>
- **PrefixedCode**: Der technische Name der Tabelle wird mit dem Tilde-Zeichen und dem entsprechenden Spaltennamen verbunden, z. B. MAKT~MAKTX
- **CodeAndText**: Der technische Name und die Beschreibung der Spalte aus SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text)<br>
- **TextAndCode**: Die Beschreibung und der technische Name der Spalte SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX

#### Date conversion

**Convert date strings**<br>
Konvertiert die Zeichenabfolge des SAP-Datums (YYYYMMDD, z.B. 19900101) zu einem formatierten Datum (YYYY-MM-DD, z.B. 1990-01-01). Im Datenziel hat das SAP-Datum keinen String-Datentyp sondern einen echten Datumstyp.

**Convert invalid dates to**<br>
Falls ein SAP-Datum nicht in ein gültiges Datum konvertiert werden kann, wird dieser Standard-Datumswert verwendet.<br>
ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

Bei der Konvertierung eines ungültigen SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft.

**Convert 00000000 to**<br>
Konvertiert das SAP-Datum 00000000 zu diesem Wert.

**Convert 9999XXXX to**<br>
Konvertiert das SAP-Datum 9999XXXX zu diesem Wert.
