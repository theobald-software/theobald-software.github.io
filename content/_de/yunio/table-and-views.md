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

## Eine SAP Tabelle oder View finden

1. Legen Sie einen neuen *Service* vom Typ *SAP Table and Views* an.
2. Klicken Sie auf **[Save and edit]**. Das *Search SAP Table or View* Menü öffnet sich.
3. Geben Sie den Namen einer Tabelle oder View in das Feld **Search by name** (1) ein oder suchen Sie nach einer Tabellenbeschreibung. Verwenden Sie Wildcards ( * ), falls notwendig. <br>
![SAP-Table-or-Views](/img/content/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Klicken Sie auf **[Search]** (2), um alle Suchergebnisse anzuzeigen.
5. Wählen Sie einen Eintrag aus der Liste der Suchergebnisse aus (3). 
Die Extraktionseinstellungen für *SAP Tabelle und Ansichten* öffnen sich automatisch.<br>

## Einstellungen
Das *SAP Table and Views* Menü ist in folgende Unterabschnitte unterteilt:
- [Table or View](#table-or-view) (4) zeigt den Namen und die Beschreibung der gewählten SAP Tabelle oder View an.
- [Advanced Settings](#advanced-settings) (5) definieren, wie Daten aus SAP extrahiert werden.
- [Output Columns](#output-columns) (6) definieren, welche Spalten extrahiert werden.
- [WHERE Clause](#where-clause) und [WHERE Clause Editor](#where-clause-editor) (7) definieren, welche Zeilen extrahiert werden.

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive"}


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
- THEO/READ_TABLE

{: .box-warning }
**Warnung! Duplikate in der Zielumgebung!** <br>
Die SAP-Standardbausteine für Tabellenextraktion besitzen keine Pointer-Logik in Tabellenfeldern. 
Das führt bei großen Tabellen zu schlechter Performance und ggf. zu Duplikaten.
Wir empfehlen daher die Verwendung des Funktionsbausteins [THEO/READ_TABLE](#installation-von-theoread_table) von Theobald Software. 

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
Diese Einstellung ist optional und wird in Kombination mit dem Baustein THEO/READ_TABLE oder Z_THEO_READ_TABLE Version 2.0 unterstützt.
Aktivieren Sie diese Einstellung für zeitintensive Extraktionen mit großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler ("Time limit exceeded") laufen können. <br>

{: .box-tip }
**Tipp:** Die Extraktionsjobs befinden sich im SAP JobLog (**SM37**) unter dem JobName *theo_read_table*.

### Output Columns

Sie können entweder alle oder nur einzelne Spalten für die Extraktion auswählen. <br>
Standardmäßig sind alle Spalten für die Tabellenextraktion ausgewählt. 
Deaktivieren Sie die Felder, die Sie nicht extrahieren möchten.

### WHERE Clause
Mit einer WHERE-Bedingung können Tabelleneinträge gefiltert werden, siehe [SAP ABAP Dokumentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-de/abapwhere.htm).
Geben Sie die WHERE-Bedingung entweder über die manuelle Texteingabe oder über den [WHERE Clause Editor](#where-clause-editor) ein.<br>

{% include _content/de/table/where-bedingung-syntax.md%}

#### Die WHERE Clause im SwaggerHub verwenden

Die WHERE-Clause kann im Request Body des Services parametrisiert werden. Beispiel:<br>
![WHERE-Clause in SwaggerHub](/img/content/yunio/swagger-inspector.png){:class="img-responsive"}

Für mehr Informationen über die Parametrisierung von Services, siehe folgende Knowledge Base Artikel: 
- [Running a yunIO Service in SwaggerHub](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-hub) 
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman).

{% include _content/de/table/where-bedingung-editor.md%}

{: .box-note }
**Hinweis:** Die WHERE-Bedingung wird überschrieben, wenn eine WHERE-Bedingung manuell in das dafür vorgesehene Textfeld eingetragen wird, bzw. wenn beim Aufruf des Service’ eine WHERE-Bedingung in dem Body der Service-Definition übergeben wird.

## SAP Customizing

{: .box-note }
**Hinweis:** Anpassungen im SAP-System sind optional. Die Installation des Funktionsbausteins `/THEO/READ_TABLE` ist empfohlen.

{% include _content/de/sap-customizing/funktionsbaustein-fuer-table-extraktion.md  %}

*****
#### Weiterführende Links
- [Integration Scenarios](./integration)
- [Knowledge Base Artikel: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)