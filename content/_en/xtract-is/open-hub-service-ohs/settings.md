---
ref: xi-open-hub-service-ohs-04
layout: page
title: Settings
description: Settings
product: xtract-is
parent: open-hub-service-ohs
permalink: /:collection/:path
weight: 4
progressstate: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=OHS-settings
---

### Settings

In the main window of the OHS component, click **Settings**. The window "Table Settings" opens.

{: .box-note }
**Note:** The settings correspond to the selected extraction type. Set either the **Table** or **Third party tool (legacy)** settings depending on your extraction type.<br>

{% include _content/en/tables/extraction-settings.md  %}


### Third party tool Settings

![OHS-Search-002](/img/content/xis/ohs-tpt-settings.png){:class="img-responsive" }

#### Gateway host
Enter the data of your gateway host. It is often the same host as the SAP application server.

#### Gateway service
Enter the data of your gateway service. *sapgwXX*, where XX is the system number.

#### Program ID 
Enter the program ID from the [RFC destination](https://kb.theobald-software.com/general/maintaining-rfc-destinations).

