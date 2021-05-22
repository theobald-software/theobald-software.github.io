---
ref: xi-query-05
layout: page
title: Parametrization
description: parametrization
product: xtract-is
parent: query
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=query-settings
---


### About
Some of the values that can be entered or selected in the component's UI can be dynamically changed at SSIS package runtime. This is explained in section [Parameterization](/../parameterization). <br>
This section lists the component's fields and custom properties which can be dynamically changed at runtime.


### Parameterization using SSIS Variables
The following fields in the component or the component's custom properties allow entry of an SSIS variable (instead of a hard coded value):

|Field Name|Comment|
|:----|:----|
| *Variant* | In the Xtract Query component, go to [settings] and check the check box *Use Variant Variable*. This allows entering an SSIS variable in the *variant* field. |