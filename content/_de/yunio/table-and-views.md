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
Das führt bei großen Tabellen zu schlechter Performance und ggf. zu Duplikaten.
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

#### Die WHERE Clause im Swagger Inspector verwenden

Die WHERE-Clause kann im Request Body des Services parametrisiert werden. Beispiel:<br>
![WHERE-Clause in Swagger Inspector](/img/content/yunio/swagger-inspector.png){:class="img-responsive"}

Für mehr Informationen über die Parametrisierung von Services, siehe folgende Knowledge Base Artikel: 
- [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) 
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman).

### WHERE Clause Editor

Der WHERE Clause Editor stellt ein Toolkit zur Verfügung, mit dem WHERE-Bedingungen auch ohne nähere Kenntnisse über die Syntax erstellt werden können.
Es gibt 2 Optionen, um der WHERE-Bedingung neue Kriterien hinzuzufügen:
- **[Add Criteria]** fügt ein einzelnes Kriterium hinzu. <br>
Der Standardaufbau für ein Kriterium mit statischen Werten ist `[Spalte][Operator][Wert]`, z.B. *MARC~WERKS = 1000*.
- **[Add Criteria Group]** fügt eine Gruppe hinzu, die mehrere Kriterien beinhaltet.<br>
Der Standardaufbau für eine Kriteriengruppe ist `([Spalte1][Operator1][Wert1][Logik][Spalte2][Operator2][Wert2])`, z.B. *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

{: .box-tip }
**Tipp:** Kombinieren Sie einzelne Kriterien mit Kriteriengruppen, um komplexe Filter zu erstellen. <br>
Beispiel:
*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extrahiert nur Daten, bei denen die Spalte WERKS einen Wert von 1000 hat und die Spalte PSTAT entweder den Wert 'L' oder 'LB' hat.


#### Komponenten des WHERE Clause Editors

![WHERE-Clause-Builder-Example](/img/content/yunio/where-clause-editor.png){:class="img-responsive"}

Folgende Komponenten stehen im Editor zur Verfügung:

| Symbol | Komponente    | Funktion          | 
|-----|-------------- |-------------| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/delete.png)| Delete row   | löscht ein Kriterium. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-up.png)| Move row up       | ändert die Reihenfolge der Kriterien. Das ausgewählte Kriterium wird um 1 nach oben verschoben. <br>Die Reihenfolge der Kriterien kann auch per Drag&Drop bearbeitet werden.   |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-down.png)| Move row down  | ändert die Reihenfolge der Kriterien. Das ausgewählte Kriterium wird um 1 nach unten verschoben. <br>Die Reihenfolge der Kriterien kann auch per Drag&Drop bearbeitet werden.|  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-column.png)| Column    | fügt die Spalte einer Tabelle hinzu. Klicken Sie auf die Komponente, um eine Spalte aus den verfügbaren Tabellen auszuwählen. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-sql.png)| SQL       | fügt eine SQL-Anweisung hinzu.      |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-operator.png)| Operator  | fügt einen Operator hinzu, z.B. =, <, >, etc. |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-literal.png)| Value | fügt einen statischen Wert vom Typ *String*, *Number*, *Flag* oder *List* hinzu. *List* bietet einen separaten Editor, um Listen vom Typ *String*, *Number* oder *Select* zu erstellen. *Select* ermöglicht die Eingabe einer SELECT-Anweisung.|
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add.png) | Criteria | fügt der WHERE-Bedingung ein neues Kriterium hinzu. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-group.png) | Group | fügt der WHERE-Bedingung eine neue Gruppe hinzu.| 

Wenn neue Kriterien hinzugefügt oder bearbeitet werden, werden nur relevante Komponenten angezeigt.<br>
Beispiel: **Operator** ist nur verfügbar, wenn eine Spalte oder eine SQL-Anweisung existiert, auf die ein Operator angewendet werden kann.

#### Komponenten Bearbeiten und Löschen

- Klicken Sie auf eine vorhandene Komponente, um sie zu bearbeiten.
Alle grün markierten Flächen können bearbeitet werden.<br>
- Klicken Sie auf das ![WHERE-Clause-Builder-Example](/img/content/icons/delete.png) Icon, das eingeblendet wird, wenn Sie über die Komponente hovern, um die Komponente zu löschen.

{: .box-note }
**Hinweis:** Die WHERE-Bedingung wird überschrieben, wenn eine WHERE-Bedingung manuell in das dafür vorgesehene Textfeld eingetragen wird, bzw. wenn beim Aufruf des Service' eine WHERE-Bedingung in dem Body der Service-Definition übergeben wird.


{% include _content/de/sap-customizing/funktionsbaustein-fuer-table-extraktion.md  %}

*****
#### Weiterführende Links
- [Knowledge Base Artikel: Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector)
- [Knowledge Base Artikel: Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)
