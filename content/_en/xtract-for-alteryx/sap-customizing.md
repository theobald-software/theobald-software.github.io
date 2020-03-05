---
ref: xtract-for-alteryx-99
layout: page
title: SAP Customizing - Custom Function Module
description: SAP Customizing
product: xtract-for-alteryx
parent: xtract-for-alteryx
permalink: /:collection/:path
weight: 99
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=SAPCustomizing-EN:sap-customizing-en
---

The following section gives an overview over the installation of a custom function module/ABAP framework and customizing of the SAP System.

### Custom Function Modules / ABAP Framework on SAP System

The Custom function modules/ABAP framework are delivered as a part of Theobald Software products. The custom function modules /ABAP Framework can be installed using the transport requests (see below).
For the following components an installation of a custom function module/ABAP framework in SAP is required:

- **Table** - For most tasks, the installation of an ABAP framework is recommended or required. Refer to [Custom function module for table extraction](./sap-customizing/custom-function-module-for-table-extraction). 
- Comming soon: **Report** - The installation of a custom function module is required, refer to [Install Report Custom Function Module](./sap-customizing/install-report-custom-function-module).

### Transport Requests

The Theobald Software transport requests need to be imported into SAP by your SAP Basis team.

The following transport requests can be found in the ABAP subfolder of the installation folder (e.g., `C:\Program Files\XtractProduct\ABAP`):

- Comming soon: thtrans.zip - contains custom function module for the *Report component*
- Z_THEO_READ_TABLE.zip - contains custom function module, ABAP classes and different DDIC objects for the *Table component*; <br>
for SAP_ABA version >= 740SP05
- Z_THEO_READ_TABLE-before_740SP05.zip - contains a custom function module, ABAP classes and different DDIC objects for the *Table component*; <br>
for SAP_ABA version 640 - 740 SP05

For more detailed information about installing the transport request, see the knowledge base article [How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true) or check the SAP help.

{% include _content/en/sap-customizing/custom-function-module-for-table-extraction.md  %}


