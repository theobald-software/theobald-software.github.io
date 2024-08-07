---
ref: xi-q-delta-12
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 12
lang: de_DE

---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen oder *Expression Properties* werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *GatewayHost* | Entspricht dem Feld *Gateway Host* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *GatewayService* | Entspricht dem Feld *Gateway Service* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *HierClass* | Entspricht dem Feld *Hierarchy Class* der DeltaQ Komponente, siehe [Settings - Hierarchie Settings](./extraktionseinstellungen#hierarchie-settings).|
| *HierName* | Entspricht dem Feld *Hierarchy Name* der DeltaQ Komponente, siehe [Settings - Hierarchie Settings](./extraktionseinstellungen#hierarchy). |
| *Language* | Entspricht dem Feld *Language* der DeltaQ Komponente, siehe [Settings - Hierarchie Settings](./extraktionseinstellungen#hierarchy).|
| *NewTimeStampFormatInRequestLog* | Wenn dieser Wert auf *true* (X) gesetzt wird, wird das Format des Zeitstempels im Request Protokoll geändert.|
| *OLTPSourceName* | Name der zu extrahierenden OLTP-Quelle.|
| *OLTPSourceType* | Typ der zu extrahierenden OLTP-Quelle.|
| *ProgramID* | Entspricht dem Feld *Program ID* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *RequestID* | Entspricht dem Feld *RequestID* in den [Settings](./extraktionseinstellungen) der DeltaQ Komponente.|
| *TargetSystem* | Entspricht dem Feld *Log. Destination* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *Timeout* | Setzen Sie einen Timeout für die Extraktion.|
| *TransferMethod* | Sie können zwischen Transfer via tRTF (T) oder IDoc (I) wählen.|
| *TransferStructure* | Transferstruktur der zu extrahierenden Quelle.|
| *UpdateType* | Entspricht dem Drop-down-Menü *Update Mode* in der DeltaQ Komponente. Erlaubte Werte sind: Full (70), Delta (68), Init (67), InitNoData (83), Repeat (82), InitNonCumulative (73), Activate (65).|
| *UseLegacyVarUpdate* | Wenn dieser Wert auf *True* gesetzt wird, wird der veralteten Update-Modus (V)Variable unterstützt, siehe [Settings](./extraktionseinstellungen#misc).|
| *UseWideString* | Definiert, ob DT_WSTR / DT_NTEXT (true) oder DT_STR / DT_TEXT (false) als Datentyp für String-Spalten verwendet wird. |

{% include _content/de/xis-specific/parametrisierung/parametrisierung-properties.md  %}

#### Verfügbare Data Flow Properties
Liste der *Data Flow Properties*, die parametrisiert werden können:

|Property|Beschreibung|
|:----|:----|
| *[Xtract DeltaQ].[GatewayHost]*|Entspricht dem Feld *Gateway Host* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[GatewayService]*|Entspricht dem Feld *Gateway Service* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[ProgramID]*|Entspricht dem Feld *Program ID* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[RequestID]*|Entspricht dem Feld *RequestID* in den [Settings](./extraktionseinstellungen) der DeltaQ Komponente.|
| *[Xtract DeltaQ].[TargetSystem]*|Entspricht dem Feld *Log. Destination* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[UpdateType]*|Entspricht dem Drop-down-Menü *Update Mode* in der DeltaQ Komponente. Erlaubte Werte sind: (F)ull, (D)elta, (C) Init, (S) Init w/o data, (R)epeat, (I) non cumulative Init, (A)ctivate.  |


{% include _content/de/xis-specific/parametrisierung/parametrization-via-variables.md  %}

#### Verfügbare Parameter für SSIS Variablen

Liste der Eingabefelder / *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *Log. Destination*| Entspricht dem Feld *Log. Destination* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *Gateway Host*| Entspricht dem Feld *Gateway Host* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *Gateway Service*|Entspricht dem Feld *Gateway Service* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *Program ID*|Entspricht dem Feld *Program ID* der DeltaQ Komponente, siehe [Customizing Check](./deltaq-customizing).|
| *Update Mode Variable*| Verwende dieses Feld in Kombination mit dem Update Mode 'V'.|
| *RequestID*|Entspricht dem Feld *RequestID* in den [Settings](./extraktionseinstellungen) der DeltaQ Komponente.|
| *Edit*| Geben Sie eine SSIS-Variable als Auswahlkriterium ein.|


****
#### Weiterführende Links
- [Use Property Expressions in Packages](https://docs.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver15)
- [DeltaQ Selektionen](./datasource-parameter) 
- [DeltaQ Customizing](./deltaq-customizing) 
