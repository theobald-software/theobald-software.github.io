---
ref: xfa-odp-settings
layout: page
title: Settings
description: ODP Settings
product: xtract-for-alteryx
parent: odp
permalink: /:collection/:path
weight: 3
lang: en_GB
progressstate: 5
---

The following section describes the settings of the Xtract ODP component that can be accessed through the main component window “ODP”.
![ODP Component](/img/content/odp/Xfa-ODP-Settings.png){:class="img-responsive"}

{% include _content/en/odp/odp-settings-subscriptions.md %}

### Edit Parameters
Use runtime parameters for dynamic [Selections and Filters](./odp-define#selections-and-filters).
{% include _content/en/edit-runtime-parameters.md %}

{% include _content/en/odp/odp-settings-advanced.md %}

### Load Live Preview
Clicking **[Load Live Preview]** displays a real-time preview of the extraction data without executing the extraction.

### Refresh Metadata

Clicking **[Refresh Metadata]** performs a new lookup on the selected extractor. 
Existing selections are retained, which is not the case when the extractor is added again.
It may be necessary to renew the metadata, for example, if an extractor has been adjusted in SAP, another source system has been connected, or the source system has been updated. 
In such cases, data inconsistencies can occur that are resolved by this function.
