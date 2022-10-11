---
ref: yunio-table-01
layout: page
title: SAP Tabelle oder View
description: Table
product: yunio
parent: yunio
childidentifier: table-and-views
permalink: /:collection/:path
weight: 15
lang: de_DE
progressstate: 5
---


Der folgende Abschnitt beschreibt die Anwendung des Integrationstyps *SAP Table and Views*.

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Table Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).

### Eine SAP Tabelle oder View finden

1. Legen Sie einen neuen *Service* vom Typ *SAP Table and Views* an.
2. Klicken Sie auf **[Save and edit]**. Das *Search SAP Table or View* Menü öffnet sich.
3. Geben Sie den Namen einer Tabelle oder View in das Feld **Search by name** (1) ein oder suchen Sie nach einer Tabellenbeschreibung. Verwenden Sie Wildcards ( * ), falls notwendig. <br>
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Klicken Sie auf **[Search]** (2), um alle Suchergebnisse anzuzeigen.
5. Wählen Sie einen Eintrag aus der Liste der Suchergebnisse aus (3). 
Die Extraktionseinstellungen für *SAP Tabelle und Ansichten* öffnen sich automatisch.<br>

### Einstellungen
Das *SAP Table and Views* Menü ist in folgende Unterabschnitte unterteilt:

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive"}

- [Table or View](#table-or-view) (4) zeigt den Namen und die Beschreibung der gewählten SAP Tabelle oder View an.
- [Advanced Settings](#advanced-settings) (5) definieren, wie Daten aus SAP extrahiert werden.
- [Output Columns](#output-columns) (6) definieren, welche Spalten extrahiert werden.
- [WHERE Clause](#where-clause) (7) ermöglicht das Filtern von Daten.
- [WHERE Clause Editor](#where-clause-editor) (8) bietet ein Toolkit zum Erstellen von WHERE-Bedingungen.


### Table or View

Der Name und die Beschreibung der gewählten Tabelle oder View werden im Abschnitt **Table or View** angezeigt.<br>
Um eine neue Tabelle oder View auszuwählen, klicken Sie auf **Select** in der oberen rechten Ecke des Abschnitts.

### Advanced Settings

#### Function Name
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Dieses Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System vorhanden sind.
Folgende Funktionsbausteine können zur Extraktion von Tabellen verwendet werden:

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
Wir empfehlen daher die Verwendung des Funktionsbausteins [Z_THEO_READ_TABLE](#installation-von-z_theo_read_table) von Theobald Software. 

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

#### Run in background job
Durch das Ankreuzen der Checkbox wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für zeitintensive Extraktionen mit großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen können. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (**SM37**) unter dem JobName *theo_read_table*.

### Output Columns

Sie können entweder alle oder nur einzelne Spalten für die Extraktion auswählen. <br>
Standardmäßig sind alle Spalten für die Tabellenextraktion ausgewählt. 
Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.

### WHERE Clause
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

### WHERE Clause Editor

The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause.<br>
There are 2 options for adding criteria to the WHERE clause:
- **[Add Criteria]** adds single criteria. <br>
The default structure for a single criteria with static values is `[Column][Operator][Value]` e.g., *MARC~WERKS = 1000*.
- **[Add Criteria Group]** adds a group of criteria.<br>
The default structure for a criteria group is `([Column1][Operator1][Value1][Boolean][Column2][Operator2][Value2])` e.g., *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

{: .box-tip }
**Tip:** Combine multiple criteria and criteria groups to create complex filters e.g., 
*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extracts only data where the column WERKS equals 1000 and the column PSTAT equals either 'L' or 'LB'.

#### Components of the WHERE Clause Editor

![WHERE-Clause-Builder-Example](/img/content/yunio/where-clause-editor.png){:class="img-responsive"}

The following components are available in the editor:

| Icon  | Component   | Function    | 
| ------|-------------|-------------| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/delete.png) | Delete row | deletes a criteria.|
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-up.png) | Move row up | changes the sequence of the criteria. The selected criteria moves up. <br>The sequence of criteria can also be changed with drag&drop. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-down.png) | Move row down | changes the sequence of the criteria. The selected criteria moves down. <br>The sequence of criteria can also be changed with drag&drop.| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-column.png) | Column    | adds a column. Click on the component to select a column from the available tables. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-sql.png)| SQL       |  adds an SQL statement.      |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-operator.png)| Operator  | adds an operator e.g., =, <, >, etc. |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-literal.png) | Value | adds a static value of type *String*, *Number*, *Flag* or *List*. *List* offers a separate editor to create lists of type *String*, *Number* or *Select*. *Select* enables usage of SELECT statements. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add.png) | Criteria | adds a new criteria after the selected criteria. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-group.png) | Group | adds a new group of criteria the selected criteria. | 


{: .box-note }
**Note:** When adding or editing a criteria only the relevant components are displayed e.g., **Add Operator** is only available if there is a column or SQL statement to use an operator on.

- Click on a component to edit it. All areas that are marked green can be edited.<br>
- To delete a component, click the ![WHERE-Clause-Builder-Example](/img/content/icons/delete.png) icon that appears when hovering over the component.<br>


{% include _content/de/sap-customizing/funktionsbaustein-fuer-table-extraktion.md  %}

*****
#### Weiterführende Links
- [Knowledge Base Artikel: Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector)
- [Knowledge Base Artikel: Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)
