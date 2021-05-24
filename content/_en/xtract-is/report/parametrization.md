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

{% include _content/en/parametrization/parametrization-about.md  %}

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Variant*|see [Variants and Selections](./variants-and-selections).|
| *Edit*|see [Variants and Selections](./variants-and-selections); Enter an SSIS variable as selection criteria.|
|*Spool Destination / BatchJobDestination* | see [Settings](./settings).|
|*BatchJobName*        |see [Settings](./settings).|
|*BatchJobTimeout*     |see [Settings](./settings).|
|*ReportName*        |         Should not be used as the structure of the result is varies depending on the reports.    |

****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)