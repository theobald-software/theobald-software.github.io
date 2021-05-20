---
ref: xi-report-06
layout: page
title: Parameterization
description: Parameterization
product: xtract-is
parent: report
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=report-settings
---


### About
Some of the values that can be entered or selected in the component's UI or that can be entered in the component's Property grid can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's fields whose values can be dynamically changed.


### Parameterization using SSIS Variables
The following fields in the Report component allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
| *Variant*|see [Variants and Selections](./variants-and-selections)|
| *Edit*|see [Variants and Selections](./variants-and-selections); Enter an SSIS variable as selection criteria.|
|*Spool Destination / BatchJobDestination* | see [Settings](./settings)|
|*BatchJobName*        |see [Settings](./settings)|
|*BatchJobTimeout*     |see [Settings](./settings)|
|*ReportName*        |         Should not be used as the result structure is different between different reports.    |



****
#### Related Links
[Parameterization](../parameterization/) <br>
[Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).