---
ref: yunio-table-01
layout: page
title: Eine Table Extraktion definieren
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

Das *SAP Table and Views* Menü ist in folgende Unterabschnitte unterteilt:
- [Table or View](#tabelle-oder-ansicht) (4)
- [Advanced Settings](#fortgeschrittene-einstellungen) (5)
- [Output Columns](#ausgabespalten) (6)
- [WHERE-Clause](#where-bedingung) (7)

![SAP-Table-or-Views](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px" }

### Table or View
Der Name und die Beschreibung der gewählten Tabelle oder Ansicht wird im Abschnitt **Table or View** angezeigt.<br>
Um eine andere Quelldatei auszuwählen, klicken Sie auf **Select** (4) in der oberen rechten Ecke des Abschnitts.

### Advanced Settings

### Function Name
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
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (**SM37**) unter dem JobName *theo_read_table*.

### Output Columns

Sie können entweder alle oder nur einzelne Spalten für die Extraktion auswählen. <br>
Standardmäßig sind alle Spalten für die Tabellenextraktion ausgewählt. 
Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.

### WHERE-Clause
Sie können eine WHERE-Bedingung verwenden, um Ihre Daten zu filtern.

#### Syntaxregeln

- Geben Sie ein Leerzeichen vor und nach dem Gleichheitszeichen ein:<br>
 **Korrekt:** *JAHR = '1999'* <br>
 **Falsch:** *JAHR= '1999 '*, *JAHR ='1999'* oder *JAHR='1999'*

- Setzten Sie die Fließkommazahlen in einfache Anführungszeichen: <br>
**Korrekt:** *KMENG > '10.3'* <br>
**Falsch** *KMENG > 10.3*


{: .box-note }
**Hinweis:** Die WHERE-Bedingung benötigt keinen Zeilenumbruch (Return-Taste).

- Die Werte müssen der internen SAP-Darstellung entsprechen:<br>
  - Das Datum 01.01.1999 hat die interne Darstellung 19990101 (JJJJMMTT) 
  - Die Jahresperiode 001.1999 hat die interne Darstellung 1999001 (YYYYYPPP)
  - Zahlen müssen führende Nullen enthalten, z.B. hat die Kundennummer 1000 die interne Darstellung 0000001000.

| Operator   |      Bedeutung      |  
|:---------|:------------- |
|=, EQ |  Wahr, wenn der Inhalt von operand1 gleich dem Inhalt von operand2 ist|
|<>, NE |Wahr, wenn der Inhalt von operand1 ungleich dem Inhalt von operand2 ist|
|<, LT | Wahr, wenn der Inhalt von operand1 kleiner als der Inhalt von operand2 ist|
|>, GT |  Wahr, wenn der Inhalt von operand1 größer als der Inhalt von operand2 ist|
|<=, LE | Wahr, wenn der Inhalt von operand1 kleiner oder gleich dem Inhalt von operand2 ist|
|>=, GE |  Wahr, wenn der Inhalt von operand1 größer oder gleich dem Inhalt von operand2 ist|
| LIKE | Wahr, wenn der Wert des Operanden operand1 mit dem Muster im Operanden operand2 übereinstimmt (nicht übereinstimmt). |
| BETWEEN | Wahr, wenn der Inhalt des Operanden operand (nicht) zwischen den Werten der Operanden operand1 und operand2 liegt. |

Weitere Informationen über die OpenSQL-Syntax erhalten Sie auf der [SAP Helpseite - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-DE/abapwhere.htm?file=abapwhere.htm). 
