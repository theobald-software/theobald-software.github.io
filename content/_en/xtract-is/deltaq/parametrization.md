---
ref: xi-q-delta-12
layout: page
title: Parameterization
description: Parametrization
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 12
lang: en_GB
progressstate: 5
---

### Custom Properties

The *Custom Properties* define the properties unique to the component.
When parameterizing the component using SSIS variables or Expression Properties, the *Custom Properties* are overwritten.

List of relevant *Custom Properties*:

|Property|Comment|
|:----|:----|
| *GatewayHost* | Corresponds to the field *Gateway Host* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *GatewayService* | Corresponds to the field *Gateway Service* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *HierClass* | Corresponds to the field *Hierarchy Class* in the DeltaQ component, see [Settings- Hierarchy Settings](./extraction-settings#hierarchy-settings).|
| *HierName* | Corresponds to the field *Hierarchy Name* in the DeltaQ component, see [Settings- Hierarchy Settings](./extraction-settings#hierarchy). |
| *Language* | Corresponds to the field *Language* in the DeltaQ component, see [Settings- Hierarchy Settings](./extraction-settings#hierarchy).|
| *NewTimeStampFormatInRequestLog* | If this value is set to *true* (X) the format of the timestamp in the request log is changed.|
| *OLTPSourceName* | Name of the OLTP source to be extracted.|
| *OLTPSourceType* | Type of the OLTP source to be extracted.|
| *ProgramID* | Corresponds to the field *Program ID* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *RequestID* | Corresponds to the field *RequestID* in the DeltaQ component's [Settings](./extraction-settings).|
| *TargetSystem* | Corresponds to the field *Log. Destination* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *Timeout* | Set a timeout for the extraction.|
| *TransferMethod* | Choose transfer via tRTF (T) or IDoc (I).|
| *TransferStructure* | The transfer structure of the source.|
| *UpdateType* | Corresponds to the drop-down menu *Update Mode* in the DeltaQ component. Permitted values are: Full (70), Delta (68), Init (67), InitNoData (83), Repeat (82), InitNonCumulative (73), Activate (65).|
| *UseLegacyVarUpdate* | Set to *True* for backward compatibility with extractions that use the deprecated update mode (V)Variable, see [Settings](./extraction-settings#misc).|
| *UseWideString* | Defines whether DT_WSTR / DT_NTEXT (true) or DT_STR / DT_TEXT (false) is used as the data type for string columns.|


{% include _content/en/xis-specific/parameterization/parameterization-prop.md  %}

#### Available Data Flow Properties
List of *Data Flow Properties* that can be parameterized:

|Property |Description|
|:----|:----|
| *[Xtract DeltaQ].[GatewayHost]*|Corresponds to the field *Gateway Host* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[GatewayService]*|Corresponds to the field *Gateway Service* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[ProgramID]*|Corresponds to the field *Program ID* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[RequestID]*|Corresponds to the field *RequestID* in the DeltaQ component's [Settings](./extraction-settings).|
| *[Xtract DeltaQ].[TargetSystem]*|Corresponds to the field *Log. Destination* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *[Xtract DeltaQ].[UpdateType]*|Corresponds to the drop-down menu *Update Mode* in the DeltaQ component. Permitted values are: (F)ull, (D)elta, (C) Init, (S) Init w/o data, (R)epeat, (I) non cumulative Init, (A)ctivate.  |

{% include _content/en/xis-specific/parameterization/parametrization-via-variables.md  %}

#### Available Parameters for SSIS Variables
List of input fields that allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Log. Destination*|Corresponds to the field *Log. Destination* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *Gateway Host*| Corresponds to the field *Gateway Host* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *Gateway Service*|Corresponds to the field *Gateway Service* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *Program ID*|Corresponds to the field *Program ID* in the DeltaQ component, see [Customizing Check](./deltaq-customizing).|
| *Update Mode Variable*| Use this field in combination with the Update Mode set to 'V'.|
| *RequestID*|Corresponds to the field *RequestID* in the DeltaQ component's [Settings](./extraction-settings).|
| *Edit*| Enter an SSIS variable as selection criteria.|


****
#### Related Links
- [Use Property Expressions in Packages](https://docs.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver15)
- [DeltaQ Selections](./datasource-parameters) <br>
- [DeltaQ Customizing](./deltaq-customizing) 
