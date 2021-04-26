---
ref: xu-pbi_connector-08
layout: page
title: XU Custom Parameters in Power BI
description: XU Custom Parameters in PBI
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url:
progressstate: 5
---

The Power BI Custom Connector exposes Xtract Universal custom parameters in Power BI Desktop.
Using the Power BI Custom Connector Xtract Universal custom parameters can be populated with values when executing an extraction from Power BI Desktop.

### Power BI Custom Connector 
When using the Power BI Custom Connector, XU custom parameters can be populated when setting up the connection in Power BI.

You created an extraction containing XU custom parameters. The list of custom parameters of the selected extraction is displayed under the *Custom* tab in the *Run Extraction* window. 
In the depicted example the list contains one entry *BUKRS_low*. <br>

![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_1.png){:class="img-responsive"}

The list of XU custom parameters is exposed in Power BI Desktop when creating a report based on the selected extraction. The exposed XU parameters can be filled with values from within Power BI Desktop. 
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_2.png){:class="img-responsive"}

### Power Query M-script

1. Open the Power Query M-script.
2. Navigate to "Parameters" and replace the values with actual values or with parameters defined in Power BI.

```
    // Record containing run parameters with corresponding values, can be empty
    // Usage: <XU parameter name>= <value or Power BI parameter>
    // MUST NOT use "name" as a record field here
    Parameters = [ /*rows= "300", myparameter= SomePowerBIParameter*/ ],
```

Replacement with actual values:
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_3.png){:class="img-responsive"}


Replacement with Power BI parameters:
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_4.png){:class="img-responsive"}

![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_5.png){:class="img-responsive"}

****
#### Related Links
- [Parameters in Power BI Desktop](https://docs.microsoft.com/en-us/power-query/power-query-query-parameters)