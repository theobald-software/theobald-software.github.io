---
ref: xtract-for-alteryx-04
layout: page
title: Erste Schritte mit Xtract for Alteryx
description: Erste Schritte mit Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: erste-schritte
permalink: /:collection/:path
weight: 4
lang: de_DE
---

Der folgende Abschnitt gibt eine allgemeine Einführung in Xtract for Alteryx am Beispiel der Xtract Table-Komponente.
Die im folgenden Abschnitt beschriebenen Informationen sind eine Voraussetzung für alle nachfolgenden Abschnitte.

{: .box-note }
**Hinweis:** Eine [SAP-Verbindung](./einfuehrung/sap-verbindung) ist eine Voraussetzung für die Verwendung der Komponenten von Xtract for Alteryx.

### Eine Extraktion anlegen

1. Ziehen Sie die **Xtract Table** (1) Komponente auf den Canvas um eine neue Tabellenextraktion anzulegen. Das Konfigurationsfenster wird geöffnet. 
![Create-New-Table-Extraction](/img/content/xfa/xfa_create_table_extraction_01.png){:class="img-responsive"}
2. Unter **Connection**, wählen Sie eine vorhandene  SAP-Verbindung (2) oder erstellen Sie eine neue SAP-Verbindung (3). (Mehr Details dazu finden Sie auch unter [SAP-Verbindung](./einfuehrung/sap-verbindung)).
3. Unter **Selected Extraction** klicken Sie auf **[Edit]**  um eine neue Tabellenextraktion zu konfigurieren.
![Create-New-Table-Extraction2](/img/content/xfa_create_table_extraction_02.png){:class="img-responsive"}
4. Das Hauptfenster der Komponente wird geöffnet. In diesem Fenster können Sie einfache Tabellenextraktionen oder Tabellen-Joins für Extraktionen definieren. Im folgenden Beispiel wird eine einzelne Tabelle extrahiert.

### Eine SAP-Tabelle hinzufügen

{: .box-tip }
**Tipp:** Wildcard-Zeichen wie * werden unterstützt. 

1. Innerhalb des Hauptfensters klicken Sie auf **[Add]**, um eine Tabelle hinzuzufügen.<br>
![Add-New-Table](/img/content/table/table_main-window_add.png){:class="img-responsive"} <br/>
Das Fenster "Table Lookup" wird geöffnet. <br/>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"} <br/>
2. Geben Sie den Namen der zu extrahierenden Tablelle ins Feld **Table name** (1) ein.<br>
3. Klicken Sie auf**[Search]** (Lupensymbol) (2).
Suchergebnisse erscheinen im Vorschaufenster.
4. Wählen Sie die gewünschte Tabelle (3) und klicken Sie auf **[OK]** (4). <br>

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.<br>

Spalten der aus SAP abgerufenen Tabelle werden im Unterabschnitt **Fields** angezeigt.<br>
![Table-Form](/img/content/table/table_fields_filter.png){:class="img-responsive"}<br>

| Nummer | Element / Beschreibung | 
|:------------|:-----|
| 1  | Feldselektion, Filterung |  
| 2  | Filterfelder   |  
| 3  | Conversion Routine  |
| 4  | Vorschaufenster, Ergebnis der Umwandlung (Conversion)   |   

### Filtern von Tabellen

Sie können entweder alle oder nur einzelne Spalten zur Extraktion auswählen. 
Standardmäßig werden alle Spalten automatisch für die Tabellenextraktion ausgewählt. Wählen Sie diejenigen ab, die Sie nicht extrahieren möchten.<br>
Klicken Sie auf die Kopffelder, um die Spalten nach Name oder Beschreibung zu sortieren.<br>
Um nach bestimmten Namen oder Beschreibungen einer Tabelle zu suchen, fangen Sie an das gesuchte Wort in die Filterfelder einzutippen.<br>

![Table-Main](/img/content/table/fields_filter-search.png){:class="img-responsive"}

### Verwenden der Echtzeitvorschau

1. Klicken Sie auf **[Load live preview]**, um 100 Einträge anzuzeigen.
2. Klicken Sie auf **[OK]** zum Bestätigen und um die Extraktion im Repository (auf dem Server) zu speichern.

![Table-Main](/img/content/xfa/xfa-table-preview.png){:class="img-responsive"}


*****
#### Weiterführende Links
- [BAPI](./bapis-und-funktionsbausteine)
- [BW Cube](./bw-cube)
- [BW Hierarchy](./bw-hierarchien)
- [ODP](./odp)
- [Table](./table) - weitere Details zur Table-Komponente


