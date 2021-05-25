---
ref: xu-odp-introduction
layout: page
title: Xtract ODP Functions Overview
description: ODP Introduction
product: xtract-universal
parent: Operational Data Provisioning (ODP)
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---
The following section describes the settings of the Xtract ODP component that can be accessed through the main component window “Define Data Source for SAP ODP”.
![ODP Component](/img/content/odp/odp_overview.png){:class="img-responsive"}



The following example depicts the available provider context with BW /4 HANA connected as SAP source system.
A BW or ECC system contains less options in the provider context list.

![ODP Provider Context from an BW/4 HANA System](/img/content/odp/odp-component-context-bw.png){:class="img-responsive"}


### SAP Source Objects and Suitable ODP Contexts
 
ODP context | SAP Source objects |
------------ |------------ |
ABAP Core Data Services [[ABAP_CDS](./odp/odp-abap-cds-views)]|- CDS Views |
SAP NetWeaver Business Warehouse [[BW](./odp/odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query as InfoProvider<br> **BW systems:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
SAP HANA Information Views [[HANA](./odp/odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
DataSources/Extractos [[SAPI](./odp/odp-extractors)] | - DataSources and Extractors |

Suitable ODP contexts can be selected within the [ODP Lookup window](./odp/odp-extractors#extractor-search).

###  Xtract ODP - Functions Overview
The window “Define Data Source for SAP ODP” contains several subsections:

- [Operational Data Provider](./odp/odp-functions-ov#operational-data-provider) - displays the name of the source object
- [Additional info](./odp/odp-functions-ov#additional-info) - displays the ODP provider context and the data type of the source object
- [Update mode](./odp/odp-functions-ov#update-mode) - defines the update mode, full or delta update
- [Fields](./odp/odp-functions-ov#filtering---dynamic-setting-of-the-selection-filters) - allows selection and setting of the filter options for [extractors](./odp/odp-extractors)
- Preview - Section with a real-time preview of the extraction data

#### Buttons
- **[[Show active subscriptions ](./odp/odp-functions-ov#subscriptions)]** - Button to display details on subscriber process
- **[[Edit parameters](./odp/odp-functions-ov#edit-parameters-)]** - Button to define run-time parameters that can be used as placeholders for data selections
- **[Load Live Preview]** - Button to display a real-time preview of the extraction data without executing the extraction 




{% include _content/en/odp/odp-settings-update_mode.md %} 
{% include _content/en/odp/odp-hierarchy.md %} 
{% include _content/en/odp/odp-settings-filtering.md %}
{% include _content/en/odp/odp-settings-subscriptions.md %}

### General Settings
The [General Settings](../getting-started/general-settings) include security, encryption and keys.

{% include _content/en/odp/odp-settings-parameters.md %}
{% include _content/en/odp/odp-settings-advanced.md %}
