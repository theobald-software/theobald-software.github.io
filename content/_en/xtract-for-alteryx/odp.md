---
ref: xtract-for-alteryx-08
layout: page
title: ODP (Operational Data Provisioning)
description: Operational Data Provisioning (ODP)
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: odp
permalink: /:collection/:path
weight: 8
lang: en_GB
progressstate: 5
---


{% include _content/en/odp/odp-introduction.md %} 

### To Use Xtract ODP 
Basic knowledge of Xtract for Alteryx is required to understand the following sections, see [Extraction with Xtract Table - Use case](./getting-started).
1. Drag & drop Xtract ODP the component to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the component “Xtract ODP” opens.

The majority of the functions of the component can be accessed using the main window.

###  Functions Overview
The window “ODP” contains the following subsections:<br>
![ODP Component](/img/content/xfa/xfa_odp_overview.png){:class="img-responsive"}

- [Operational Data Provider](./odp/odp-define#to-search-for-a-data-object) (1) - Search and display the name of the source object.
- Additional info (2) - Displays the ODP provider context and the data type of the source object.
- [Update mode](./odp/odp-define#update-mode) (3) - Defines the update mode, full or delta update.
- [Fields](./odp/odp-define#selections-and-filters) (4) - Allows selection and setting of the filter options for [extractors](./odp/odp-extractors).
- Preview (5) - Click **[Load Live Preview]** to display real-time preview of the extraction data.

#### Buttons
- **[[Show active subscriptions](./odp/odp-settings#subscriptions)]** - Displays details of the subscriber process.
- **[[Edit parameters](./odp/odp-settings#edit-parameters)]** - Defines runtime parameters that can be used as placeholders for data selections.
- **[[Advanced Settings](./odp/odp-settings#advanced-settings)]** - Includes the **package size** for the extraction.
- **[Load Live Preview]** - Button to display a real-time preview of the extraction data without executing the extraction.

****
#### Related Links
- [SAP community Wiki](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646)



