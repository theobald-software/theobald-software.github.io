---
ref: xi-q-delta-07
layout: page
title: Data and Protocol Output
description: Data and Protocol Output
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=data-and-protocol-output
---


A DeltaQ source has two outputs:
* **DeltaQDataOutput** for the data,
* **DeltaQLogOutput** for the protocol.

### Best practice
Write off the protocol in the data target as well. For Delta mechanisms in particular, a detailed protocol is very helpful when troubleshooting. The data output correlates with the checkmarked columns (and the RequestID). The protocol output always has the same columns.

The protocol in the Data Viewer looks like:

![DeltaQ-DataOutput-01](/img/content/DeltaQ-DataOutput-01.png){:class="img-responsive"}
