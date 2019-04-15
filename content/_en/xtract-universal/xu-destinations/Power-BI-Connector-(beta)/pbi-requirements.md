---
ref: xu-pbi_connector-02
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: Power-BI-Connector-(beta)
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url:
---

### When using Power BI custom connector

Along with the *Power BI Connector (beta)* destination in Xtract Universal comes a custom extension for Power BI *XtractUniversalExtension.mez*. This extension can be found in a folder named *powerbi* inside the installation directory of Xtract Universal. 

When using *Power BI Desktop* the .mez file needs to be copied to *[Documents]\Power BI Desktop\Custom Connectors*. After copying the file you may need to restart Power BI. <br>

Also, you may need to change the security level for [Data Extensions](https://docs.microsoft.com/en-us/power-bi/desktop-connector-extensibility#data-extension-security) within Power BI for this connector to be selectable as a data source within Power BI.

### When using Power Query M-script

Not further reuquirements. The M-script delivered with Xtract Universal can be used like any other M-script.



