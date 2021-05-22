---
ref: xi-hierarchy-04
layout: page
title: Parameterization
description: Parameterization
product: xtract-is
parent: hierarchy
permalink: /:collection/:path
weight: 4
lang: en_GB
---

### About
Some of the values that can be entered or selected in the component's UI can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's fields and custom properties which can be dynamically changed at runtime.


### Parameterization using SSIS Variables
The following fields in the component or the component's custom properties allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
| *HierarchyName* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchies of the same InfoObject. |
| *HierarchyVersion* | An SSIS variable can be entered in the component's custom properties. In combination with a for-each-loop container, this allows extracting multiple hierarchy versions of the same hierarchy. |




****
#### Related Links
[Parameterization](../parameterization/) <br>
[Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).



