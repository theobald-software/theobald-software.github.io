---
ref: xu-odp-introduction
layout: page
title: Functions Overview
description: ODP Functions Overview
product: xtract-universal
parent: odp
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

The following section gives an overview of the functions accessible from the main window of the Xtract ODP component.
![ODP Component](/img/content/odp/odp_overview.png){:class="img-responsive"}

###  Functions Overview
The window “ODP” contains the following subsections:

- [Operational Data Provider](./odp-define#to-search-for-a-data-object) (1) - Search and display the name of the source object.
- Additional info (2) - Displays the ODP provider context and the data type of the source object.
- [Update mode](./odp-define#update-mode) (3) - Defines the update mode, full or delta update.
- [Fields](./odp-define#selections-and-filters) (4) - Allows selection and setting of the filter options for [extractors](./odp-extractors).
- Preview (5) - Click **[Load Live Preview]** to display real-time preview of the extraction data.

#### Buttons
- **[General Settings](../getting-started/general-settings)** - The General Settings include security, encryption and keys.
- **[Show active subscriptions](./odp-settings#subscriptions)** - Displays details of the subscriber process.
- **[Edit runtime parameters](./odp-settings#edit-parameters)** - Defines [runtime parameters](../execute-and-automate-extractions/extraction-parameters) that can be used as placeholders for data selections.
- **[Advanced Settings](odp-settings#advanced-settings)** - Includes the **package size** for the extraction.
- **[Load Live Preview]** - Button to display a real-time preview of the extraction data without executing the extraction.
- **[Refresh Metadata]** - Performs a new lookup. Existing extraction settings are retained, which is not the case when performing new lookups manually.


{: .box-note }
**Note:** Use **[Refresh Metadata]** to renew metadata. This is necessary if a data provider has been adjusted in SAP, another source system has been connected, or the source system has been updated. 