---
ref: xu-pbi_connector-08
layout: page
title: XU Custom Parameters in PBI
description: XU Custom Parameters in PBI
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url:
---

The Power BI Custom Connector exposes Xtract Universal custom parameters in Power BI Desktop. This way Xtract Universal custom parameters can be populated with values when executing an extraction from Power BI Desktop. See below.

### Power BI Custom Connector 
When using the Power BI Custom Connector, XU custom parameters can be populated when setting up the 

![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_1.png){:class="img-responsive"}

![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_2.png){:class="img-responsive"}

### Power Query M-script

Replace below part of the Power Query M-script with actual values or with parameters defined in Power BI.

```
    // Record containing run parameters with corresponding values, can be empty
    // Usage: <XU parameter name>= <value or Power BI parameter>
    // MUST NOT use "name" as a record field here
    Parameters = [ /*rows= "300", myparameter= SomePowerBIParameter*/ ],
```

Replacement with actual values.
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_3.png){:class="img-responsive"}


Replacement with Power BI parameters.
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_4.png){:class="img-responsive"}

![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_5.png){:class="img-responsive"}

