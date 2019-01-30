---
ref: ecscore-wd-web-services-03
layout: page
title: Create a new web service
description: Create a new web service
product: ecs-core
parent: webservices
childidentifier: create_a_new_webservice
permalink: /:collection/:path
weight: 3
lang: en_GB
---

To create a new REST web service, open the WebService Designer and first define the SAP connection for retrieving the metadata and the server connection for deploying the Webservice (described in [Connection Settings](../webservices/first_steps_with_the_webservicedesigner/connection_settings)].  

Give the web service a name, and optionally a title and description. The assignment of an SAP connection from the ECS Core Server is also optional. If you do not assign an SAP connection, the default connection is used. <br>

![WSD-Description](/img/content/ecscore-wsd_26.png){:class="img-responsive"}

In this example, we create a web service that delivers customer data from the SAP system. <br>  
             
Important: Make sure that there are no spaces or special characters in the web service name.  

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}

