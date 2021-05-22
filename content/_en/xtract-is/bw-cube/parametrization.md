---
ref: xi-bw-cube-05
layout: page
title: Parameterization
description: parametrization
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=bw-cube-settings
---



### About
Some of the values that can be entered or selected in the component's UI can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's fields and custom properties which can be dynamically changed at runtime.


### Parameterization using SSIS Variables
The following fields in the component or the component's custom properties allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
|*Variables*|see [Variables](./variables); Enter an SSIS variable to fill a BEx variable. For BEx variables of type *Multiple Single*: Enter a single SSIS variable, set a delimiter for custom property*DelimiterForMultipleSSISVariableValues*, enter multiple single values in the SSIS variable, separated by the delimiter. |
|*Member Filter*        |Enter an SSIS variable in the field *variable*. The SSIS variable can be filled with multiple single entries, separated by comma.|
|*Extraction Type MDX* |SSIS variables can be used as part of the freehand MDX statement for BEx variables or dimension member filters. |
|*MDXVariable*        |Use with Extraction Type *MDX*. Enter an SSIS variable in the MDX textbox. Fill the SSIS variable with the complete MDX statement.|



****
#### Related Links
[Parameterization](../parameterization/) <br>
[Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).