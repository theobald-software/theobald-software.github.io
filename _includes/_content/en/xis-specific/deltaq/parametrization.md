{% include _content/en/parametrization/parametrization-about.md  %}

### Parameterization using Properties
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
- [Parameterization](../parameterization/) <br>
- [DeltaQ Datasource Parameters](./datasource-parameters) <br>
- [Customizing Check](./customizing-check) <br>
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)