{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties
The *Custom Properties* define the properties unique to the Xtract DeltaQ component. <br>
When parameterizing the DeltaQ component using SSIS variables or Data Flow Properties, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties* of the DeltaQ component:

|Property|Comment|
|:----|:----|
| *GatewayHost* | Corresponds to the field *Gateway Host* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *GatewayService* | Corresponds to the field *Gateway Service* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *HierClass* | Corresponds to the field *Hierarchy Class* in the DeltaQ component, see [Settings- Hierarchy Settings](./settings#hierarchy-settings).|
| *HierName* | Corresponds to the field *Hierarchy Name* in the DeltaQ component, see [Settings- Hierarchy Settings](./settings#hierarchy-settings).. |
| *Language* | Corresponds to the field *Language* in the DeltaQ component, see [Settings- Hierarchy Settings](./settings#hierarchy-settings).|
| *NewTimeStampFormatInRequestLog* | If this value is set to *true* (X) the format of the timestamp in the request log is changed.|
| *OLTPSourceName* | Name of the OLTP source to be extracted.|
| *OLTPSourceType* | Type of the OLTP source to be extracted.|
| *ProgramID* | Corresponds to the field *Program ID* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *RequestID* | Corresponds to the field *RequestID* in the DeltaQ component's [Settings](./settings).|
| *StringConversion* | See [Settings - String Conversion](./settings#string-conversion).|
| *TargetSystem* | Corresponds to the field *Log. Destination* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *Timeout* | Set a timeout for the extraction.|
| *TransferMethod* | Choose transfer via tRTF (T) or IDoc (I).|
| *TransferStructure* | The transfer structure of the source.|
| *UpdateType* | Corresponds to the drop-down menu *Update Mode* in the DeltaQ component. Permitted values are: (F)ull, (D)elta, (C) Init, (S) Init w/o data, (R)epeat, (I) non cumulative Init, (A)ctivate.|

### Parameterization using Data Flow Properties
The following custom properties can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract DeltaQ].[GatewayHost]*|Corresponds to the field *Gateway Host* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[GatewayService]*|Corresponds to the field *Gateway Service* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[ProgramID]*|Corresponds to the field *Program ID* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[TargetSystem]*|Corresponds to the field *Log. Destination* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[RequestID]*|Corresponds to the field *RequestID* in the DeltaQ component's [Settings](./settings).|
| *[Xtract DeltaQ].[UpdateType]*|Corresponds to the drop-down menu *Update Mode* in the DeltaQ component. Permitted values are: (F)ull, (D)elta, (C) Init, (S) Init w/o data, (R)epeat, (I) non cumulative Init, (A)ctivate.  |


### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Log. Destination*|Corresponds to the field *Log. Destination* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *Gateway Host*| Corresponds to the field *Gateway Host* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *Gateway Service*|Corresponds to the field *Gateway Service* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *Program ID*|Corresponds to the field *Program ID* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *Update Mode Variable*| Use this field in combination with the Update Mode set to 'V'.|
| *RequestID*|Corresponds to the field *RequestID* in the DeltaQ component's [Settings](./settings).|
| *Edit*| Enter an SSIS variable as selection criteria.|


****
#### Related Links
- [Parameterization](../parameterization) <br>
- [DeltaQ Datasource Parameters](./datasource-parameters) <br>
- [Customizing Check](./customizing-check) <br>
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)