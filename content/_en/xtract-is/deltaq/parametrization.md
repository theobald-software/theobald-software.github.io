---
ref: xi-q-delta-11
layout: page
title: Parameterization
description: Parametrization
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 12
lang: en_GB
progressstate: 3
---

### About
Some of the values that can be entered or selected in the component's UI can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's fields and custom properties which can be dynamically changed at runtime.



### Parameterization using Properties
The following custom properties can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract DeltaQ].[GatewayHost]*|Corresponds to the field *Gateway Host* in the DeltaQ component, see [Customizing Check](./customizing-check)|
| *[Xtract DeltaQ].[GatewayService]*|Corresponds to the field *Gateway Service* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[ProgramID]*|Corresponds to the field *Program ID* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[TargetSystem]*|Corresponds to the field *Log. Destination* in the DeltaQ component, see [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[RequestID]*|Corresponds to the field *RequestID* in the DeltaQ component's Settings.|
| *[Xtract DeltaQ].[UpdateType]*|Corresponds to the drop-down menu *Update Mode* in the DeltaQ component. Permitted values are: (F)ull, (D)elta, (C) Init, (S) Init w/o data, (R)epeat, (I) non cumulative Init, (A)ctivate  |



### Parameterization using SSIS Variables
The following fields in the component or the component's custom properties allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
| *Log. Destination*||
| *Gateway Host*||
| *Gateway Service*||
| *Program ID*||
| *Update Mode Variable*| Use this field in combination with setting the Update Mode to 'V'.|
| *RequestID*||
| *Edit*| Enter an SSIS variable as selection criteria.|





****
#### Related Links
[Parameterization](../parameterization/) <br>
[DeltaQ Datasource Parameters](./datasource-parameters) <br>
[Customizing Check](./customizing-check) <br>
[Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).