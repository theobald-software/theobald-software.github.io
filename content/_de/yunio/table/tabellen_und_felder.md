---
ref: yunio-table-01
layout: page
title: Tables and Fields
description: Tabellen und Felder
product: yunio
parent: table
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=where-bedingung
progressstate: 5
---
Dieser Abschnitt zeigt, wie Sie die *SAP Table and Views* Komponente verwenden.

### Eine Tabelle finden

1. Wenn Sie einen neuen *Service* anlegen, wählen Sie *SAP Table and Views* als Extraktionstyp aus und klciken Sie **[Next]**, um das *Search SAP Table or View* Menü zu öffnen.
2. Geben Sie den Namen einer Tabelle oder Ansicht im Feld **Search by name** (1) ein oder suchen Sie nach einer Tabellenbeschreibung. Verwenden Sie Wildcards ( * ), falls notwenid. <br>
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
3. Klicken Sie auf **[Search]** (2), um alle Suchergebnisse anzuzeigen.
4. Wählen Sie eine Quelle aus (3). Das Hauptmenü *SAP Table and Views* öffnet sich automatisch.<br>
![SAP-Table-or-Views](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px" }

Das *SAP Table and Views* Menü ist in folgende Abschnitte unterteilt:
- [Table or View](#tabelle-oder-ansicht) (4)
- [Advanced Settings](#fortgeschrittene-einstellungen) (5)
- [Output Columns](#ausgabespalten) (6)
- [WHERE-Clause](#where-bedingung) (7)

### Tabelle oder Ansicht
Der Name und die Beschreibung der gewählten Tabelle oder Ansicht wird im Abschnitt **Table or View** angezeigt.<br>
Um eine andere Quelldatei auszuwählen, klicken Sie auf **Select** (4) in der oberen rechten Ecke des Abschnitts.

### Fortgeschrittene Einstellungen

### Function Module
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Dieses Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System vorhanden sind.
Folgende Funktionsbausteine können zur Extraktion von Tabellen verwendet werden: <br>

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE  (TAB2048)
- /SAPDS/RFC_READ_TABLE  (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE

{: .box-warning }
**Warnung! Duplikate in der Zielumgebung!** <br>
Die SAP-Standardbausteine für Tabellenextraktion besitzen keine Pointer-Logik in Tabellenfeldern. 
Das führt bei großen Tabellen zu schlechter Performance und ggf. zu Dublikaten.
Wir empfehlen daher die Verwendung des Funktionsbausteins [Z_THEO_READ_TABLE](../sap-customizing) von Theobald Software. 

Berücksichtigen Sie die notwendige [Berechtigung der SAP-Tabelle](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```
#### Row limit
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.

#### Rows per Package
Gibt die Anzahl der Datensätze an, die pro Datenpaket extrahiert werden.
Optimale Werte können durch Ausprobieren gefunden werden. Der Standardwert ist 20000 Zeilen. 
Die Paketgröße (Package Size) zwischen 15000 und 50000 ist sinnvoll für große Datenmengen.
0 bedeutet, es findet keine Parkettierung statt. Keine Parkettierung kann bei Extraktionen großer Datenmengen zu einem RFC-Timeout führen.

{: .box-warning }
**Warnung! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:**
Um einen Speicherüberlauf auf dem SAP-Quellsystem und einen großen Overhead zu vermeiden, wählen Sie eine für Ihre Speichergröße angemessene Paketgröße.

#### Run in background
Durch das Ankreuzen der Checkbox "Extract data in background" wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für langlaufende Extraktionen mit sehr großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen könnten. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (SM37) unter dem JobName *theo_read_table*.

### Ausgabespalten

Sie können entweder alle oder nur einzelne Spalten für die Extraktion auswählen. 
Die Spalten werden automatisch für die Tabellenextraktion ausgewählt. 
Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.

### WHERE-Bedingung
Bald verfügbar...