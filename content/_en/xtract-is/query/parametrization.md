---
ref: xi-query-05
layout: page
title: Parameterization
description: parametrization
product: xtract-is
parent: query
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=query-settings
---
{% include _content/en/parametrization/parametrization-about.md  %}

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant* | In the Xtract Query component, go to [Settings](./settings) and activate the check box *Use Variant Variable*. <br>This allows using an SSIS variable for the field *Variant*. |

****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)