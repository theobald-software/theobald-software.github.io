---
ref: xtract-for-alteryx-05
layout: page
title: ODP
description: Operational Data Provisioning (ODP)
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: odp
permalink: /:collection/:path
weight: 5
lang: en_GB
---

{% include _content/en/odp/odp-introduction.md %} 

### To Use Xtract ODP 
Basic knowledge of Xtract for Alteryx is required to understand the following sections, see [Extraction with Xtract Table - Use case](../getting-started-table).
1. Drag & drop Xtract ODP the component to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the component “Xtract ODP” opens.
The majority of the functions of the component can be accessed using the main window.
All settings that can be accessed using the main window are described in section [Xtract ODP Functions Overview](./odp-functions-ov).


###  Xtract ODP - Functions Overview
The window “Xtract ODP” contains several subsections:

- [Operational Data Provider](./odp-functions-ov#operational-data-provider) - displays the name of the source object
- [Additional info](./odp-functions-ov#additional-info) - displays the ODP provider context and the data type of the source object
- [Update mode](./odp-functions-ov#update-mode) - defines the update mode, full or delta update
- [Fields](./odp-functions-ov#filtering---dynamic-setting-of-the-selection-filters) - allows selection and setting of the filter options for [extractors](./odp-extractors)
- Preview - Section with a real-time preview of the extraction data
![ODP Component](/img/content/xfa/xfa_odp_overview.png){:class="img-responsive"}

#### Buttons
- **[[Show subscriptions / Show ](./odp-functions-ov#subscriptions)]** - Button to display details on subscriber process
- **[[Edit parameters](./odp-functions-ov#edit-parameters-)]** - Button to define run-time parameters that can be used as placeholders for data selections
- **[Load Live Preview]** - Button to display a real-time preview of the extraction data without executing the extraction 

