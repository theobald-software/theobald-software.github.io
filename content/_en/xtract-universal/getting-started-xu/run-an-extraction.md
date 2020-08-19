---
ref: xu-getting-started-xu-03
layout: page
title:  3. Running an Extraction
description: Step 3 - Run an Extraction
product: xtract-universal
parent: getting-started-xu
permalink: /:collection/:path
weight: 3
lang: en_GB
progressstate: 5
---

This step is optional and shows how to display the extraction result in a web browser to make sure the extraction runs properly and delivers the appropriate result.

### Defining the extraction properties 

 
1. To open the extraction settings, click **[Run]**. 
![Run-Table-Extraction](/img/content/BC-Run-Table-Extraction-Plants.png){:class="img-responsive"}
The window "Run Extraction" opens.
2. Specify details of the execution with parameters, if needed. 

### To set the extraction parameters
1. In the window "Run Extraction", select the checkbox of the parameter you want to override.
2. Enter the value. The actual request of the data occurs via URL:
- Before changing a parameter:
`http://localhost:8065?name=Plants`
- After choosing the parameter **rows**:
`http://localhost:8097/?name=random_table&rows=100`

![Run-Table-Extraction-param](/img/content/xu/xu_run_extraction_param.png){:class="img-responsive"}
3. Run an extraction using xu.exe. The settings change during runtime, no new start is necessary. 

{: .box-note }
**Note:** Additional parameters such as *Package size* or *Row limit* etc. are described in section [Extraction settings](https://help.theobald-software.com/en/xtract-universal/table/extraction-settings). 


### Running an extraction in a browser
To run the extraction in a browser, click **[Run in Browser]**. Your default browser opens and displays the data in accordance with the criteria and format. <br>

![Table-Extraction-Browser-Result](/img/content/run_ausgabe_browser_xu.png){:class="img-responsive"}

### Scheduling an extraction

Scheduling extractions at a later time is possible with the Windows task scheduler. To use the task scheduler functionality, run Xtract Universal from a [command line](../advanced-techniques/scheduling_extraction).
