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
### DeltaQ Output 

A DeltaQ source has two outputs:

- **DeltaQDataOutput:**<br>
The data output correlates with the marked columns including the RequestID.
- **DeltaQRequestLog:**<br>
The protocol output has the following columns:
	- DataSource
	- RequestID
	- UpdateType
	- TimeStamp
	- MessageType
	- Message

{: .box-tip }
**Tip:** For Delta mechanisms in particular, a detailed protocol may be helpful when troubleshooting.

![DeltaQ-DataOutput-01](/img/content/DeltaQ-DataOutput-01.png){:class="img-responsive"}
