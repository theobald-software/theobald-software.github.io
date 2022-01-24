---
ref: xfa-introduction-01
layout: page
title: Requirements
description: Requirements
product: xtract-for-alteryx
parent: introduction
permalink: /:collection/:path
weight: 1
lang: en_GB
---
### Alteryx

- Alteryx Designer and Server version 2018 or higher. 

{% include _content/en/requirements/sap-systems.md %}

### Installation and Configuration on SAP

|Component             | SAP Release           | Requirements on the SAP system                                                |
|----------------------|-----------------------|-------------------------------------------------------------------------------|
|Xtract BAPI| Rel. above 4.6C       | No special requirements. **Note:** Only remote-enabled functions are supported.          |
|Xtract Cube| Rel. above BW 3.1     | No special requirements.                                                                 |
|Xtract Hierarchy             | Rel. above BW 3.1     | No special requirements.                                               |
|Xtract ODP                   | SAP_BASIS >= 730, BW >= 7,3X   | No special requirements.                                      |
|Xtract Report                   | Rel. above 4.6C   | Installation of a Z-module is required.                    |
|Xtract Table                 | Rel. above 4.6C       | Installation of a Z-module is advisable.                   |

For Information about the installation of the custom function modules and the SAP customizing, see section [SAP customizing](../sap-customizing).

{% include _content/en/requirements/sap-authentication-xtract.md %}
{% include _content/en/requirements/sap-misc.md %}
{% include _content/en/requirements/operating-systems.md %}
{% include _content/en/requirements/xu-req-misc.md %}
