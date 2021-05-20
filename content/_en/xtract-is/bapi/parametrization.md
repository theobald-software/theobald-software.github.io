---
ref: xi-bapi-08
layout: page
title: Parametrization
description: Parametrization
product: xtract-is
parent: bapi
permalink: /:collection/:path
weight: 8
lang: en_GB

---


### About
Some of the values that can be entered or selected in the component's UI can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's fields whose values can be dynamically changed.



### Parameterization using SSIS Variables
The following fields in the BAPI component allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
| Imports - *Edit*|see [Scalar Parameters](./scalar-parameters) and [Structures](./structures); Enter an SSIS variable as selection criteria. In case of structures, enter an SSIS variable for each member of a structure.|
| Exports - *Edit*|A BAPI's Export parameters can be written to an SSIS variable (or alternatively to the SSIS pipeline, see [Settings](./settings)) . Enter an SSIS variable in the respective field of the Export parameter. In case of structures, enter an SSIS variable for each member of a structure|



****
#### Related Links
[Parameterization](../parameterization/) <br>
[Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).
