---
ref: bc-bw-hierarchies-01
layout: page
title: Defining a Hierarchy Extraction
description: Define a Hierarchy Extraction
product: board-connector
parent: bw-hierarchies
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=define-a-hierarchy-extraction
---
The following section shows how to use the Hierarchy component.

{% include _content/en/bw-hierarchies/hierarchy-extraction-define.md %}


### Format and Preview Output

1. Open the **Extraction Settings** to define the output format of the extraction, see [Extraction Settings](./hierarchies-extraction-settings).<br>
![Settings Hierarchy](/img/content/xu/hierarchy-settings.png){:class="img-responsive"}
2. Click **[Load Live Preview]** to display a live preview of the data without running an extraction.
3. Optional: Open the **General Settings** to set primary keys, encryption and other settings. For more information, see [General Settings](../getting-started/general-settings). 
4. Optional: The default value for **Date To** is *99991231*. To change the value, click **[Run]** and override the value for the **dateTo** runtime parameter.
