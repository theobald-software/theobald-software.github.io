---
ref: xu-odp-define
layout: page
title: Defining an ODP Extraction
description: ODP Extraction
product: xtract-universal
parent: Operational Data Provisioning (ODP)
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---
The following section shows how to use the ODP component.

{% include _content/en/odp/odp-define.md %}
{% include _content/en/odp/odp-settings-update_mode.md %} 

{: .box-note }
**Note:** TS_SEQUENCE_NUMBER is a technical primary key that can be added to the output.
When working with identical data sets, the data set with the highest sequence number is the most current data set.

{% include _content/en/odp/odp-settings-filtering.md %}

****
#### Related Links
- [Youtube Tutorial: SAP ODP incremental load to SQL server](https://www.youtube.com/watch?v=-7pEm2VVPRg)