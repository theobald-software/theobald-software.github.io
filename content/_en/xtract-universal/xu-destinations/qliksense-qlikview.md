---
ref: xu-destinations-90
layout: page
title: QlikSense & QlikView
description: QlikSense & QlikView
product: xtract-universal
parent: xu-destinations
childidentifier: qliksense-qlikview
permalink: /:collection/:path
weight: 90
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=einstellungen_in_qlik_sense
progressstate: 5
---

The following sections describe how Xtract Universal connects with QlikSense or QlikView.

For connection purposes Xtract Universal offers a destination of type *Qlik*. Qlik destination generates a data load script, which needs to be inserted into the data load editor of your Qlik application. Depending on whether you run a QlikSense of QlikView application, Xtract Univeral creates a different data load script.

Running the Qlik application triggers the respective Xtract Universal extraction via the data load script. Xtract Universal sends the extracted SAP data through an http-csv stream directly to your Qlik application.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}

