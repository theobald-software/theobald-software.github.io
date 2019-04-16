---
ref: xu-pbi_connector-02
layout: page
title: Power Query M-script
description: Power Query M-script 
product: xtract-universal
parent: Power-BI-Connector-(beta)
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url:
---

### Setup

Along with the *Power BI Connector (beta)* destination in Xtract Universal comes a text file named *loading_script* which contains a Power Query M-script. This script can be found in the *powerbi* folder inside the installation directory of Xtract Universal. <br>

**Attention:** The M-script and the custom connector are *not* related. You either use the script or the connector.

### How to use the M-script in Power BI

1. Create a Power BI report using a *Blank Query* as data source.
2. Open the *Advanced Editor* 
3. Open the Xtract Universal *loading_script.pq* in any text editor and copy the complete content into the *Advanced Editor* window.
4. Change the values for *ExtractionName* and the *ServerURL* to match the names of your Xtract Universal server and extraction. *Attention*: Only use extractions that write to the *Power BI Connector* destination.
5. Close the *Advanced Editor* and *Close & Apply* your changes.

![M-Script](/img/content/XU_PowerQueryScript.png){:class="img-responsive"}

<br>

![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}





