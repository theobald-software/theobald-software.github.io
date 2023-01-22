---
ref: xis-odp-param
layout: page
title: Parametrisierung
description: ODP Parametrisierung
product: xtract-is
parent: odp
permalink: /:collection/:path
weight: 88
lang: de_DE
progressstate: 3
---

### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen oder *Expression Properties* werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *ConvertsDates* | Wenn diese Eigenschaft auf *True* (Standard) gesetzt wird, nehmen SAP-Datumsfelder (YYYYMMDD) den SSIS-Pipeline-Typ DT_DBDATE an (anstelle von DT_WSTR). Die folgenden Datumskonvertierungen werden bei ungültigen Datumsformaten in SAP-Datumsfeldern angewendet:<br>*InvalidDateReplacement*, *MaxDateReplacement*, *MinDateReplacement*. |
| *ExtractDataOnDeltaInit* | Führt eine Delta-Initialisierung mit oder ohne Datenextraktion aus, siehe [Update Mode](./odp-define#load-verfahren-update-mode).| 
| *HierarchyName* | Applies to Hierarchy DataSources only, see [Select Hierarchy](./odp-extractors#hierarchies).|
| *InvalidDateReplacement* | Erlaubt das Ersetzen eines ungültigen Datumsformats. Der Standard-Wert ist *1970-01-02*. <br>Um diese Eigenschaft zu verwenden, geben Sie einen Ersatzwert für das ungültige Datum ein, z.B. '20190132' (32. Januar  2019) im Format yyyy-mm-dd. Der Wert NULL wird unterstützt.|
| *MaxDateReplacement* | Erlaubt das Ersetzen eines ungültigen SAP-Datums mit dem Jahr 9999. Der Standard-Wert ist *2099-12-31*. <br>Um diese Eigenschaft zu verwenden, geben Sie einen Ersatzwert mit dem Jahr ‘9999’ im Format yyyy-mm-dd ein. Beispiel: ‘99990101’ (1. Januar 9999). Der Wert NULL wird unterstützt.|
| *MinDateReplacement* | Erlaubt das Ersetzen eines ungültigen SAP-Datums mit dem Jahr *0000*. Der Standard-Wert ist *1970-01-01*. <br>Um diese Eigenschaft zu verwenden, geben Sie einen Ersatzwert mit dem Jahr ‘0000’ im Format yyyy-mm-dd ein. Beispiel: '00000000'. Der Wert NULL wird unterstützt.|
| *PackageSize* | Stellt die Paketgröße in Bytes ein, siehe [Advanced Settings](./odp-settings#fortgeschrittene-einstellungen).|
| *SubscriptionSuffix* | Fügt dem ODP Abonnement ein Suffix hinzu. |
| *UpdateMode* | Wählt den Update-Modus der Extraktion aus. Erlaubte Werte sind: (F)ull, (D)elta und (R)ecovery, siehe [Update Mode](./odp-define#load-verfahren-update-mode).|


{: .box-note }
**Hinweis:** [Laufzeitparameter](./odp-settings#parameter-bearbeiten), die in der Xtract ODP Komponente definiert sind, sind auch als Eigenschaften aufgelistet.


{% include _content/de/xis-specific/parametrisierung/parametrisierung-properties.md  %}

#### Verfügbare Data Flow Properties
Liste der *Data Flow Properties*, die parametrisiert werden können:

|Property|Beschreibung|
|:----|:----|
| *[Xtract ODP].[SubscriptionSuffix]*| Fügt dem von der ODP Komponente erstellten ODP Abonnement ein Suffix hinzu. Das erlaubt die Verwendung von SSIS Paketen in zwei unterschiedlichen SSIS Umgebungen, z.B. greifen QA und PROD. auf dasselbe SAP-System zu. Das Suffix erlaubt auch die Erstellung von Abonnenten für jede SSIS Umgebung.|
| *[Xtract ODP].[UpdateMode]*| Stellt den Update Mode einer Extraktion ein. Erlaubt Werte sind: (F)ull, (D)elta and (R)ecovery, siehe [Update Mode](./odp-define#load-verfahren-update-mode).|
| *[Xtract.ODP].[ExtractDataOnDeltaInit]*| Führt eine Delta-Initialisierung mit oder ohne Datenextraktion aus, siehe [Update Mode](./odp-define#load-verfahren-update-mode).|
| *[Xtract.ODP].[HierarchyName]*| Nur für Datenquellen vom Typ Hierarchy. Geben Sie den Namen der zu extrahierenden Hierarchie ein, siehe [Select Hierarchy](./odp-extractors#select-hierarchy). |
| *[Xtract.ODP].[PackageSize]*| Wählt die Paketgröße in Bytes, siehe [Advanced Settings](./odp-settings#fortgeschrittene-einstellungen). |
| *[Xtract.ODP].[ &lt;Selection Parameter &gt;]*| Auswahlparameter, die in der Komponente definiert sind, sind in den *Properties* der Komponente verfügbar, siehe [Edit Parameters](./odp-settings#parameter-bearbeiten). |


### Parametrierung mit SSIS Variablen

Um SSIS-Variablen für die Parametrisierung von *Custom Properties* verwenden zu können, fügen Sie in den *Custom Properties* ein @-Symbol vor dem Namen der Variable hinzu.
Beispiel: die Variable *vDate* wird in den *Custom Properties* als *@vDate* hinterlegt.

#### Verfügbare Parameter für SSIS Variablen

Liste der Eingabefelder / *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *Edit*|Geben Sie eine SSIS-Variable als Auswahlkriterium ein, siehe [Selektion und Filter](./odp-define#selektion-und-filter).|
| *Package Size* | Entspricht dem Feld *Package Size* in der OHS Komponente, siehe [Fortgeschrittene Einstellungen](./odp-settings#fortgeschrittene-einstellungen).|

****
#### Related Links
- [Use Property Expressions in Packages](https://docs.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver15)
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)