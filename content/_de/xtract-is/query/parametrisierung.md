---
ref: xi-query-05
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: query
permalink: /:collection/:path
weight: 5
lang: de_DE

---
### Custom Properties
Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.

Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *MaxRows* | Entspricht dem Feld *MaxRows* in den [Settings](./query-settings) der Query Komponente.|
| *Variant* | Entspricht dem Feld *Use Variant Variable* in den [Settings](./query-settings) der Query Komponente. |

{% include _content/de/xis-specific/parametrisierung/parametrisierung-properties.md  %}

#### Verfügbare Data Flow Properties
Liste der *Data Flow Properties*, die parametrisiert werden können:

|Property|Beschreibung|
|:----|:----|
| *[Xtract Report].[Variant]*| Siehe [Varianten und Selektionen](./variants-and-selections).|

### Parametrisierung mit SSIS Variablen

SSIS Variablen können verwendet werden, um Selektionen zu dynamisieren.<br>
Verfügbare SSIS Variablen werden direkt in den Einstellungen für Selektionen angezeigt, wenn die Parametereingabe aktiv ist (1), siehe [Selektionen bearbeiten](./variants-and-selections#selektionen-bearbeiten).<br>
![Selection-via-Variables](/img/content/xis/report_selection_via_variables.png){:class="img-responsive"}

{: .box-note }
**Hinweis**: Die Xtract Report Komponente unterstützt bei der Parametrisierung durch Variablen alle Datentypen, bis auf *DateTime* und *DBNull*.
Für mehr Informationen über Datentypen von Systemvariablen, siehe [Microsoft-Hilfe: Systemvariablen](https://docs.microsoft.com/de-de/sql/integration-services/system-variables?view=sql-server-ver15).



****
#### Weiterführende Links
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)