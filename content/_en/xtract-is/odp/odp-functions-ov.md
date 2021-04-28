---
ref: xis-odp-introduction
layout: page
title: Xtract ODP Functions Overview
description: ODP Introduction
product: xtract-is
parent: odp
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---
The following section gives an overview over the settings that can be changed for the ODP component.
The settings can be changed in the window "Define data source for SAP ODP". 
![ODP Component](/img/content/odp/odp_overview.png){:class="img-responsive"}

{% include _content/en/odp/odp-settings-update_mode.md %} 
{% include _content/en/odp/odp-settings-subscriptions.md %}
{% include _content/en/odp/odp-settings-filtering.md %} 

### General Settings
The [General Settings](../getting-started/general-settings) include security, encryption and keys.

{% include _content/en/odp/odp-settings-parameters.md %}
{% include _content/en/odp/odp-settings-advanced.md %}

### To display parameters within SSIS
Parameters appear as properties of the Xtract ODP object as well as the SSIS Data Flow. The parameters and properties be populated at SSIS package runtime using standard SSIS functionality, such as expressions, variables, etc. 

![ODP properties](/img/content/xis/odp_parameter.png){:class="img-responsive"}

