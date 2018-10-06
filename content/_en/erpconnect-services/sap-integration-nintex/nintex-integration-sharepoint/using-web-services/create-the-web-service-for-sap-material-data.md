---
layout: page
title: Create the web service for SAP material data
description: Create the web service for SAP material data
product: erpconnect-services
parent: using-web-services
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create_the_web_service_for_sap_material_data
---

Using the WebService Designer we will create the web service.

![Nintex-Material-WS-Designer](/img/content/Nintex-Material-WS-Designer.jpg){:class="img-responsive"}

The following custom data type is defined.

![Nintex-Material-WS-Custom-Data-Type](/img/content/Nintex-Material-WS-Custom-Data-Type.jpg){:class="img-responsive"}

The web service operation consists of one Execute Function activity to call the SAP function module (Z_ECS_MATERIAL_MAINTAIN). 

![Nintex-Material-WS-Activity](/img/content/Nintex-Material-WS-Activity.jpg){:class="img-responsive"}

The web service operation has the following input parameter.

![Nintex-Material-WS-Parameters](/img/content/Nintex-Material-WS-Parameters.jpg){:class="img-responsive"}

In the function activity the input parameter is mapped.

![Nintex-Material-WS-Function-Activity](/img/content/Nintex-Material-WS-Function-Activity.jpg){:class="img-responsive"}

In the following you see the mapping of the fields of the input parameter.

![Nintex-Material-WS-Mapping-Structure](/img/content/Nintex-Material-WS-Mapping-Structure.jpg){:class="img-responsive"}

Now deploy the web service to SharePoint. 

![Nintex-Material-WS-Deployed](/img/content/Nintex-Material-WS-Deployed.jpg){:class="img-responsive"}

[Here](/img/SAPMaterialWebService.zip) you can dowload the WebService Model file (zip).

