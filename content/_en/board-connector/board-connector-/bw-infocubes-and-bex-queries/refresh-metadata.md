---
layout: page
title: Refresh Metadata
description: Refresh Metadata
product: board-connector
parent: bw-infocubes-and-bex-queries
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=refresh-metadata
---

For very complex cubes and queries it may be necessary that the cube or query is changed after the definition of the extraction with the Xtract Designer (e.g. because someone adds a new key figure). In this case, it is not necessary to redefine the entire extraction, just click on the link *Refresh Metadata*. 

![BWCube-MetaData-Refresh](/img/content/BWCube-MetaData-Refresh.png){:class="img-responsive"}

Then the existing metadata will be updated with the new dimensions and key figures.

**ATTENTION**: For extractions that were created with an Xtract Universal version from February 2015 or earlier, please check the flag *Legacy metadata retrieval* in the *Extraction Settings*. Please see chapter Extraction Settings.