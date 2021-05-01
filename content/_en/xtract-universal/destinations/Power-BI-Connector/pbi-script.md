---
ref: xu-pbi_connector-04
layout: page
title: Power Query M-script
description: Power Query M-script 
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url:
---
Instead of the Power BI Custom Connector, you can also use the Custom Power Query M-script to connect Power BI to Xtract Universal. 

The Power BI Query M-script is located inside the Xtract Universal installation directory: `C:\Program Files\XtractUniversal\powerbi\loading_script.txt`.

{: .box-warning }
**Warning! Use of the Custom Connector & Query M-script**<br>
Power Query M-script and Power BI Custom Connector do not belong together.<br>
Use either the Power Query M-script **or** the Power BI Custom Connector.

### Set up the Power Query M-script in Power BI

{: .box-note }
**Note:** Only use the extractions with the [Power BI Connector destination](./pbi-connection).

1. Create a new Power BI report using **Home > Get Data > Blank Query** as data source.
2. Open the **[Advanced Editor]**.
![Advanced Editor](/img/content/pbi_advanced_editor.png){:class="img-responsive"}
3. Open the Xtract Universal *loading_script* in any text editor.
4. Copy the complete content into the *Advanced Editor* window in Power BI.
5. Change the values for **ExtractionName** and the **ServerURL** to match the names of your Xtract Universal extraction and web server (1).
![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}
6. Confirm the script by clicking **[Done]** (2) within *Advanced Editor*.}
7. Click on **{Close & Apply]**.
8. When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](./pbi-SSO) 










