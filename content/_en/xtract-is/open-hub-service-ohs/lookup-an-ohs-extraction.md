---
layout: page
title: Look up an OHS Extraction
description: Look up an OHS Extraction
product: xtract-is
parent: open-hub-service-ohs
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=look-up-an-ohs-extraction
---

Within the editor, you can look up an OHS extraction by clicking the binocular button. You can search either according to InfoSpoke, destination or process chain. You can also use wildcards ( * ) in your search.

![OHS-Search-001](/img/content/OHS-Search-001.png){:class="img-responsive" }

After making your selections, all meta data are retrieved from the BW and displayed in the editor.

The type of extraction is defined by three cases:

**P - Trigger Process Chain**<br>
The specified process chain is started, the extraction is made and after ending the extraction, data is extracted in packets.

**W – Wait for Notify**<br>
No process chain is started up; instead the tool only waits until it is notified of completion of extraction. Someone else is responsible for starting up the extraction (e.g. SAP's own scheduler).

**E – Extract Only**<br>
Neither a process chain is started up, nor is a notification of extraction waited for. The Request ID entered in the field Request ID is used to retrieve data that is hidden behind the respective request. Only data of the last request for that OHS Destination can be extracted. Data of previous requests can not be extracted.

![OHS-Search-002](/img/content/OHS-Search-002.png){:class="img-responsive" }