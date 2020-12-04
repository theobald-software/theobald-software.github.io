---
ref: xi-open-hub-service-ohs-02
layout: page
title: Look Up an OHS Extraction
description: Look up an OHS Extraction
product: xtract-is
parent: open-hub-service-ohs
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=look-up-an-ohs-extraction
progressstate: 5
---

### Look Up
Within the main window of the component, click **Look Up** (binocular symbol) to look up an OHS extraction.
![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
You can search either according to InfoSpoke, Destination or Process Chain. You can also use wildcards ( * ) in your search.
![OHS-Search-001](/img/content/xis/OHS-Search-001.png){:class="img-responsive" }
After making your selections, all meta data are retrieved from the BW and displayed in the main window of the component.
![OHS-Search-002](/img/content/xis/OHS-Search-002.png){:class="img-responsive" }

### Extraction Types

The type of extraction is defined by three cases: <br>
- **P - Trigger Process Chain**<br>
The specified process chain is started, the extraction is executed and finished. After the finish of the extraction, data is extracted in packages.<br>
- **W – Wait for Notify**<br>
No process chain is started. The tool waits for the extraction completion notification. Another instance is responsible for starting of the extraction (e.g., SAP's own scheduler).<br>
- **E – Extract Only**<br>
Neither a process chain is started, nor a notification of an extraction completion is awaited. The request ID entered in the field *Request ID* and is used to retrieve data hidden behind the respective request. Only data of the last request for the particular OHS destination can be extracted. Data of previous requests can not be extracted.

