---
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: alteryx-connect
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=ac-settings
---

You can define the following extraction-specific settings:

![xu-ac-destination-settings](/img/content/xu-ac-destination-settings.png){:class="img-responsive"}

The settings in the left part of the window correspond to the ones of the flatfile csv-destination.

**Settings** 

**Delete existing table** <br>
If a table exists for the extraction, the extraction process will delete it before writing the data.

**Execute job / Job Name** <br>
If this option is set, then a job will be executed when the export process has been successfully completed, the Job Name must be set in this case.

For a successful extraction you would find the correspondent record under Administration -> Stage.

![Alteryx-Connect-Server-Stage](/img/content/Alteryx-Connect-Server-Stage.png){:class="img-responsive"}