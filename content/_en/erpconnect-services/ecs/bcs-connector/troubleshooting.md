---
layout: page
title: Troubleshooting
description: Troubleshooting
product: erpconnect-services
parent: bcs-connector
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=troubleshooting
---

**Error when setting up the SharePoint connection**

If error messages are displayed when setting up the SharePoint connection it has often something to do with permission settings. In case off error messages first check, whether the executing user has full permission rights to SharePoint Central Administration Site and Business Connectivity Services. A detailed description of configuring BCS permissions you find [here](./sharepoint-configuration/setting-bcs-permissions).  
 
Other possible causes:

- Trying to access with HTTPS: HTTPS access is not supported by SharePoint BCS and will trigger a error message.
- Trying to connect with a SharePoint site other than Central Administration: We recommend to set up the SharePoint connection only to the Central Administration Site because thats where the BCS are located and the external content types are deployed. Connecting to a SharePoint Site/Site Collection other than Central Administration is in general possible but because of differentiated permissions error messages may be produced. 

**Errors when executing preview or deploying a BCS model**

During preview and deployment of a BCS model to SharePoint there might be error messages displayed that are caused by limitations of Business Connectivity Services.

- SharePoint BCS restricts the display of columns to a maximum of 300: If for a entity (no matter if table- or function entity) 
more than 300 columns are selected an error message is triggered. In this case reduce the overall amount of selected columns/fields.  
- In SharePoint BCS the using of filters (Filter descriptors in BCS language) is limited to 20 per entity. When trying to use more than 20 filters an error message is triggered. In this case reduce the amount of filters in your BCS model. 

![BCS_ErrorMessage2](/img/content/BCS_ErrorMessage2.png){:class="img-responsive"}

![BCS_ErrorMessage](/img/content/BCS_ErrorMessage.png){:class="img-responsive"}