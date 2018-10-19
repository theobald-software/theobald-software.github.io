---
ref: bc-bw-open-hub-services-02
layout: page
title: Define an OHS Extraction
description: Define an OHS Extraction
product: board-connector
parent: bw-open-hub-services
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=define-an-ohs-extraction
---

We define a new OHS extraction. Within the editor, you can look up an OHS extraction by clicking the binocular button. You can search either according to InfoSpoke, destination or process chain. You can also use wildcards ( * ) in your search.

Caution! You can only select a process chain that contains an InfoSpoke.

![OHS-Extraction-01](/img/content/OHS-Extraction-01.png){:class="img-responsive"}

After making your selections, all metadata are retrieved from the BW and displayed in the editor.

![OHS-Extraction-02](/img/content/OHS-Extraction-02.png){:class="img-responsive"}

The Execution Mode can have one of the following values: 

**P - Trigger Process Chain**<br>
The specified process chain will be started, the extraction is made and after ending the extraction, data is extracted in packages.

**E – Extract Only**<br>
A process chain will not be started. The Request ID entered in the field *Request ID* is used to retrieve data of the respective request.