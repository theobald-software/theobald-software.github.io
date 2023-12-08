---
ref: xi-report-06
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: report
permalink: /:collection/:path
weight: 6
lang: de_DE

---

### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen oder *Expression Properties* werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *BatchJobDestination* | Entspricht dem Feld *Spool Destination* in der Report Komponente, siehe [Settings - Spool Destination / BatchJobDestination](./report-settings). |
| *BatchJobName* | Entspricht dem Feld *Batch Job Name* in der Report Komponente, siehe [Settings - BatchJobName](./report-settings). |
| *BatchJobTimeout* | Entspricht dem Feld *Batch Timeout* in der Report Komponente, siehe [Settings - BatchJobTimeout](./report-settings).|
| *DynamicColumnWidthsAndOffsets* | Entspricht dem Feld *Dynamic Column Widths and Offsets* in der Report Komponente. Wenn Ihr Report variierende Spaltenbreiten hat, aktivieren Sie die Option *Dynamic column widths and offsets*. Die Spaltenbreite und der Offset der Spalten werden dann zur Laufzeit dynamisch angepasst.|
| *ReportRowsPerDataRow* | Entspricht dem Feld *Report Rows Per Data Row* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *ReportWidth* | Entspricht dem Feld *Report Width* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *SkipBottomRows* | Entspricht dem Feld *Skip Rows Bottom* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *SkipTopRows* | Entspricht dem Feld *Skip Rows Top* in der Report Komponente, siehe [Report-Spalten definieren](./report-columns-define). |
| *UseBatch* | Entspricht dem Feld *Use Batch* in der Report Komponente, siehe [Settings - Use Batch](./report-settings). |
| *Variant* | Siehe [Varianten und Selektionen](./variants-and-selections). |


{% include _content/de/xis-specific/parametrisierung/parametrisierung-properties.md  %}

#### Verfügbare Data Flow Properties
Liste der *Data Flow Properties*, die parametrisiert werden können:

|Property|Beschreibung|
|:----|:----|
| *[Xtract Report].[Variant]*| Siehe [Varianten und Selektionen](./variants-and-selections).|
| *[Xtract Report].[BatchJobDestination]* | Entspricht dem Feld *Spool Destination* in der Report Komponente, siehe [Settings - Spool Destination / BatchJobDestination](./report-settings).|
| *[Xtract Report].[BatchJobName]*        |Entspricht dem Feld *Batch Job Name* in der Report Komponente, siehe [Settings - BatchJobName](./report-settings).|
| *[Xtract Report].[BatchJobTimeout]*     |Entspricht dem Feld *Batch Timeout* in der Report Komponente, siehe [Settings - BatchJobTimeout](./report-settings).|

### Parametrisierung mit SSIS Variablen

SSIS Variablen können verwendet werden, um Selektionen zu dynamisieren.<br>
Verfügbare SSIS Variablen werden direkt in den Einstellungen für Selektionen angezeigt, wenn die Parametereingabe aktiv ist (1), siehe [Selektionen bearbeiten](./variants-and-selections#selektionen-bearbeiten).<br>
![Selection-via-Variables](/img/content/xis/report_selection_via_variables.png){:class="img-responsive"}

{: .box-note }
**Hinweis**: Die Xtract Report Komponente unterstützt bei der Parametrisierung durch Variablen alle Datentypen, bis auf *DateTime* und *DBNull*.
Für mehr Informationen über Datentypen von Systemvariablen, siehe [Microsoft-Hilfe: Systemvariablen](https://docs.microsoft.com/de-de/sql/integration-services/system-variables?view=sql-server-ver15).


****
#### Weiterführende Links
- [Microsoft Dokumentation: Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
- [Microsoft Dokumentation: Verwenden von Eigenschaftsausdrücken in Paketen](https://learn.microsoft.com/de-de/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver16)