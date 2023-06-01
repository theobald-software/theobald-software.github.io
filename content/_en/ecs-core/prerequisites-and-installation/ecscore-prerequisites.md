---
ref: ecs-core-prerequisites-and-installation-01
layout: page
title: Prerequisites
description: Prerequisites
product: ecs-core
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
---

**Windows operating system** 

- Windows 10
- Windows Server 2012 R2 or higher
- IIS web server version 10 or higher
- `.NET Framework 4.7.2` or higher

**User rights on Windows** 

- The rights of an administrator are required to install the applications.

**Azure Relay**

If you want to use the Azure Relay functionality of Microsoft Azure, you need at least the standard tier.

**SAP system(s)**

- SAP R/3 Version 4.0B and higher versions or SAP ECC.
- SAP S/4 HANA
- SAP BW Version 3.1 and higher.
- SAP BW/4 HANA

**SAP user**

- An SAP system or dialog user with the corresponding [authorization objects](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights) is required.

**SAP GUI**

If you want to use the [transaction recorder feature](../webservices/transaction_recorder_feature), a SAP GUI installation is needed on the server. All common SAP GUI versions are supported.

**Network Settings**

The following ports have to be opened depending on the SAP system, where nn is the instance number of the SAP system (e.g. 00 or 99).
- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Network Communications (SNC): Port 48nn
- SAP Router: Port 3299

It is recommended to install ECS Core on a computer without any other Theobald Software components. 
Although this is possible, it makes error analysis and troubleshooting more difficult.
