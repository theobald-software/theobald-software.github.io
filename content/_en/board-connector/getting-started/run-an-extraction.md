---
ref: bc-getting-started-03
layout: page
title: Step 4 - Run an Extraction
description: Step 4 - Run an Extraction
product: board-connector
parent: getting-started
permalink: /:collection/:path
weight: 4
lang: en_GB
progressstate: 5
---

This step is optional and shows how to display the extraction result in a web browser to make sure that the extraction runs properly and delivers the appropriate result.

### Defining the extraction properties 

1. To open the extraction settings, click **[Run]**.
![Extraction-Run](/img/content/BC-Run-Table-Extraction-Plants.png){:class="img-responsive"}
The window "Run Extraction" opens.
2.  Specify details of the execution with parameters, if needed.

### To set the extraction parameters
1. In the window "Run Extraction", select the checkbox of the parameter you want to override.
2. Enter the value. The actual request of the data occurs via URL:
- Before changing a parameter:
`http://localhost:8097/?name=random_table`
- After choosing the parameter **rows**:
`http://localhost:8097/?name=random_table&rows=100`

3. To run the extraction in a browser, click **[Run in Browser]**. The settings change during runtime, no new start is necessary. 

{: .box-note }
**Note:** Additional parameters such as *Package size* or *Row limit* etc. are described in section [Extraction settings](../table/extraction-settings). 


![Table-Extraction-Browser-Result](/img/content/run_ausgabe_browser_bc.png){:class="img-responsive"}
