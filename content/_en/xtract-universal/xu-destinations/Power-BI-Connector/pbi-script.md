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


Instead of using the Power BI Custom Connector you can use a custom Power Query M-script for connecting to Xtract Universal. This Power Query M-script is delivered in a text file named *loading script*. This file is located in the *powerbi* folder inside the installation directory of Xtract Universal.
<br>

### Setup


**Attention:** The Power Query M-script and the Power BI Custom Connector are not related. Use Power Query M-script **or** the Power BI Custom Connector.

### How to use the Power Query M-script in Power BI

1. Create a new Power BI report using a *Blank Query* as data source.
2. Open the *Advanced Editor*.
3. Open the Xtract Universal *loading_script* in any text editor.
4. Copy the complete content into the *Advanced Editor* window in Power BI.
4. Change the values for *ExtractionName* and the *ServerURL* to match the names of your Xtract Universal extraction and web server.<br>
 **Attention:** Only use extractions that are set to *Power BI Connector* destination in Xtract Universal.
5. Close the *Advanced Editor*.
6. Click on *Close & Apply*.
7. When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](./pbi-SSO) 

![M-Script](/img/content/XU_PowerQueryScript.png){:class="img-responsive"}

---


![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}





