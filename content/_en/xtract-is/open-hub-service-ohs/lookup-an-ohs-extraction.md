---
ref: xi-open-hub-service-ohs-02
layout: page
title: Look Up an OHS Extraction
description: Set up an OHS Extraction
product: xtract-is
parent: open-hub-service-ohs
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=look-up-an-ohs-extraction
progressstate: 5
---

### Look Up an OHS Extraction

1. Double-click the OHS component to open the component's main window.
![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
2. In the main window, select an **Extraction type**. 
- If you use BW4Hana2.0, select **Table** as your extraction type and make sure that the open hub destination type in SAP is set to *database table*. 
- If you use BW7.x or below, select **Third party tool (legacy)** as you extraction style and make sure that the open hub destination type in SAP is set to *third party tool*.
![OHS-Look-Up](/img/content/xis/ohs-sap-destinationtype.png){:class="img-responsive" }
3. In the main window of the OHS component, click **[Look Up]** (binocular symbol) to look up an OHS extraction.
4. Search and select your extraction. You can use wildcards ( * ) for the search.
![OHS-Search-001](/img/content/xis/OHS-Search-001.png){:class="img-responsive" }
5. Click **[OK]** to confirm the selection. All meta data are retrieved from the BW and displayed in the main window of the component.
![OHS-Search-002](/img/content/xis/OHS-Search-002.png){:class="img-responsive" }
6. Make sure that **Process Chain** is not empty. If an OHS has multiple process chains, the **Process Chain** field needs to be filled manually.
7. Check/edit the [settings](./settings) of the extraction.

{: .box-note }
**Note:** If an OHS has multiple process chains, the **Process Chain** field needs to be filled manually.

#### Timeout
Set a maximum time period to wait for a notification from BW. If the time limit is reached, the task fails.

#### Process Chain
Enter an SAP [process chain](http://saphelp.ucc.ovgu.de/NW750/EN/4a/2cf30c6ed91c62e10000000a42189c/frameset.htm) assigned to your OHS extraction. 
If there are multiple process chains assigned to an extraction, the process chain data needs to be entered manually.
If **Process CHain** is left empty, the extraction fails.