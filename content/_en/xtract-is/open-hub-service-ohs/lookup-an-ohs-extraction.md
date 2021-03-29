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

1. Drag and drop the Xtract OHS component into your Dataflow and [connect your SAP source](../sap-connection/the-connection-manager#connecting-to-sap).
2. Double-click the OHS component to open the component's main window.
![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
3. In the main window of the component, select an **Extraction type**. 
- If you use BW4Hana2.0, select **Table** as your extraction type and make sure that the open hub destination type in SAP is set to *database table*. 
- If you use BW7.x or below, select **Third party tool (legacy)** as you extraction style and make sure that the open hub destination type in SAP is set to *third party tool*.
![OHS-Look-Up](/img/content/xis/ohs-sap-destinationtype.png){:class="img-responsive" }
4. In the main window of the OHS component, click **[Look Up]** (binocular symbol) to look up an OHS extraction.
5. Search and select your extraction. You can use wildcards ( * ) for the search.
![OHS-Search-001](/img/content/xis/OHS-Search-001.png){:class="img-responsive" }
6. Click **[OK]** to confirm the selection. All meta data are retrieved from the BW and displayed in the main window of the component.
![OHS-Search-002](/img/content/xis/OHS-Search-002.png){:class="img-responsive" }

{: .box-note }
**Note:** Instead of searching for OHS extractions, you can enter the ??. 

#### Timeout
Set a maximum time period to wait for a notification from BW. If the time limit is reached, the task fails.

#### Process Chain
