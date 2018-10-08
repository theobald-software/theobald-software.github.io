---
layout: page
title: Define an OHS Extraction
description: Define an OHS Extraction
product: xtract-universal
parent: bw-open-hub-services
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-an-ohs-extraction
---

We define a new OHS extraction. Within the editor, you can look up an OHS extraction by clicking the binocular button. You can search either according to InfoSpoke, destination or process chain. You can also use wildcards ( * ) in your search.

Caution! You can only select a process chain that contains an InfoSpoke.

![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}

After making your selections, all metadata are retrieved from the BW and displayed in the editor.

![Open-Hub-Service-Data-Source](/img/content/Open-Hub-Service-Data-Source.jpg){:class="img-responsive"}

The Execution Mode can have one of the following values: 

**P - Trigger Process Chain**<br>
The specified process chain will be started, the extraction is made and after ending the extraction, data is extracted in packages.

**E – Extract Only**<br>
A process chain will not be started. The Request ID entered in the field Request ID is used to retrieve data of the respective request.
Only data of the last DTP request of that OHS Destination can be extracted. Data of previous requests can not be extracted.

