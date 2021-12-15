---
ref: yunio-18
layout: page
title: SAP Tabelle oder Ansicht
description: Table
product: yunio
parent: yunio
childidentifier: table
permalink: /:collection/:path
weight: 15
lang: de_DE
progressstate: 5
---


Der folgende Abschnitt beschreibt die Anwendung der *SAP Table and Views* Komponente.

### Eine SAP Tabelle oder Ansicht finden

1. Wenn Sie einen neuen *Service* anlegen, wählen Sie *SAP Table and Views* als Extraktionstyp aus.
2. Klicken Sie auf **[Save and edit]**. Das *Search SAP Table or View* Menü öffnet sich.
3. Geben Sie den Namen einer Tabelle oder Ansicht in das Feld **Search by name** (1) ein oder suchen Sie nach einer Tabellenbeschreibung. Verwenden Sie Wildcards ( * ), falls notwendig. <br>
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Klicken Sie auf **[Search]** (2), um alle Suchergebnisse anzuzeigen.
5. Wählen Sie eine Quelldatei aus der Liste verfügbarer Suchergebnisse aus (3). 
Die Extraktionseinstellungen für *SAP Tabelle und Ansichten* öffnen sich automatisch.<br>

Das *SAP Table and Views* Menü ist in folgende Unterabschnitte unterteilt:

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}

- [Table or View](#tabelle-oder-ansicht) (4) zeigt den Namen und die Beschreibung der gewählten SAP Tabelle oder Ansicht an.
- [Advanced Settings](#fortgeschrittene-einstellungen) (5) definieren, wie Daten aus SAP extrahiert werden.
- [Output Columns](#ausgabespalten) (6) definieren, welche Spalten extrahiert werden.
- [WHERE-Clause](#where-bedingung) (7) ermöglicht das Filtern von Daten.

### Table or View

Der Name und die Beschreibung der gewählten Tabelle oder Ansicht werden im Abschnitt **Table or View** angezeigt.<br>
Um eine neue Quelldatei auszuwählen, klicken Sie auf **Select** in der oberen rechten Ecke des Abschnitts.

### Advanced Settings

### Function Name
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Dieses Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System vorhanden sind.
F
olgende Funktionsbausteine können zur Extraktion von Tabellen verwendet werden:

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
Wir empfehlen daher die Verwendung des Funktionsbausteins [Z_THEO_READ_TABLE](./table/funktionsbaustein-fuer-table-extraktion) von Theobald Software. 

Berücksichtigen Sie die notwendige [Berechtigung der SAP-Tabelle](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```
#### Row limit
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.

#### Rows per Package
Gibt die Anzahl der Datensätze an, die pro Datenpaket extrahiert werden.
Optimale Werte können durch Ausprobieren gefunden werden. Der Standardwert ist 50000 Zeilen. <br>
Eine Paketgröße (Package Size) zwischen 20000 und 50000 ist sinnvoll für große Datenmengen.
0 bedeutet, es findet keine Pakettierung statt. Keine Pakettierung kann bei Extraktionen großer Datenmengen zu einem RFC-Timeout führen.

{: .box-warning }
**Warnung! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:**
Um einen Speicherüberlauf auf dem SAP-Quellsystem und einen großen Overhead zu vermeiden, wählen Sie eine für Ihre Speichergröße angemessene Paketgröße.

#### Run in background
Durch das Ankreuzen der Checkbox wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für zeitintensive Extraktionen mit großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen können. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (**SM37**) unter dem JobName *theo_read_table*.

### Output Columns

Sie können entweder alle oder nur einzelne Spalten für die Extraktion auswählen. <br>
Standardmäßig sind alle Spalten für die Tabellenextraktion ausgewählt. 
Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.

### WHERE-Clause
Verwenden Sie eine WHERE-Bedingung, um Ihre Daten zu filtern.

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
| (NOT) LIKE | Wahr, wenn der Wert des Operanden operand1 mit dem Muster im Operanden operand2 übereinstimmt (nicht übereinstimmt). |
| (NOT) BETWEEN | Wahr, wenn der Inhalt des Operanden operand (nicht) zwischen den Werten der Operanden operand1 und operand2 liegt. |

Weitere Informationen über die OpenSQL-Syntax erhalten Sie auf der [SAP Helpseite - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-DE/abapwhere.htm?file=abapwhere.htm). 
