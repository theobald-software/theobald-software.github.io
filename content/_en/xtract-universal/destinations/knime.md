---
ref: destinations-55
layout: page
title: KNIME
description: KNIME
product: xtract-universal
parent: destinations
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 55
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-flat-file
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

The following section shows how to load extracted SAP data to [KNIME](https://www.knime.com/). 

## Connection

### Adding a Destination

1. In the main window of the Designer, navigate to **Server > [Manage Destinations](./managing-destinations)**. The window “Manage Destinations” opens.
2. Click **[Add]** to create a new destination. The window "Destination Details" opens.
3. Enter a **Name** for the destination.
4. Select the destination **Type** from the drop-down menu.

### Destination Details
No configuration is required for the KNIME destination.

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_KNIME_Destination](/img/content/XU_KNIME_Destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}	  
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}	  

## KNIME Integration via SAP Reader

### Requirements
The following software applications must be installed for integration into KNIME:
- Latest version of Xtract Universal, see [Download Trial Version](https://theobald-software.com/en/download-trial)
- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads)

### Step by Step Guide

1. Create an extraction in Xtract Universal. Select KNIME as the destination for the extraction (1).
![XU Extraction](/img/content/knime/xu_extraction.png){:class="img-responsive"}
2. Start the *KNIME Analytics Platform*. 
3. Install the extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory).
![Install KNIME Extension](/img/content/knime/install_sap_reader.png){:class="img-responsive"}
4. Drag & Drop the Node / Source 'SAP Reader (Theobald Software)' (2) onto the KNIME Canvas.
![KNIME Extension](/img/content/knime/sap_reader_knime_extension.png){:class="img-responsive"}
5. Open the SAP Reader Task 'Settings' and enter the URL address of the Xtract Universal Server, e.g. `http://localhost:8065/` (3).
![SAP Reader Settings](/img/content/knime/sap_reader_settings.png){:class="img-responsive"}
6. Click **[Fetch Queries]** (4) and select an extraction.
7. Confirm your input with **[OK]** (5).
8. Start the extraction via **[Execute]**. 
![Execute SAP Reader](/img/content/knime/execute_sap_reader.png){:class="img-responsive"}
9. Check the extracted SAP data via **[SAP Query Result]**.
![SAP Reader Results](/img/content/knime/sap_query_results.png){:class="img-responsive"}


****
## Related Links
- [KNIME SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory)
- [Youtube-Video: Webinar "SAP Data to Insights with KNIME"](https://www.youtube.com/watch?v=KQLLoDUoOEg)
- [Dynamic Runtime Parameter within KNIME Workflow](https://kb.theobald-software.com/xtract-universal/dynamic-runtime-paramater%20within-KNIME-workflow)

