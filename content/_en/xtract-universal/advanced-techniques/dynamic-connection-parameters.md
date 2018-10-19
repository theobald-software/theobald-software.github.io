---
ref: xu-advanced-techniques-03
layout: page
title: Dynamic Connection Parameters
description: Dynamic Connection Parameters
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=dynamic-connection-parameters
---

Like the system parameters and user-defined parameters the connection settings to SAP can also be changed dynamically via the URL. You can change the setting on the third Tab in the *Run* dialog.

![Run-Extraction-Connection-Parameters](/img/content/Run-Extraction-Connection-Parameters.jpg){:class="img-responsive"}

The example shows how to override the connection language to DE with the following URL:

    http://localhost:8085/?name=plants&**lang=DE**