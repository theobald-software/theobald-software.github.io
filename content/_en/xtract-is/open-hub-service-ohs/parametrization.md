---
ref: xi-open-hub-service-ohs-05
layout: page
title: Parametrization
description: Parametrization
product: xtract-is
parent: open-hub-service-ohs
permalink: /:collection/:path
weight: 5
lang: en_GB

---


### About
Some of the values that can be entered or selected in the component's UI can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's properties which can be dynamically changed at runtime.


### Parameterization using Properties
The following properties can be parameterized:

|Property Name|Description|
|:----|:----|
| `[Xtract OHS].[ConvertsDates]`| |
| `[Xtract OHS].[ConvertsTimes]`||
| `[Xtract OHS].[InvalidDateReplacement]`| |
| `[Xtract OHS].[MaxDateReplacement]`|  |
| `[Xtract OHS].[MinDateReplacement]`|  |



### Parameterization using SSIS Variables
The following fields in the OHS component allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
| *Gateway host* |  |
| *Gateway service* |  |
| *Program ID* |  |



****
#### Related Links
[Parameterization](../parameterization/) <br>
[Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).

