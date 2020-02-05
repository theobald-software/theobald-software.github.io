---
ref: ecs-sin-nis-using-web-services-02
layout: page
title: Nintex Workflow and Web Service
description: Nintex Workflow and Web Service
product: erpconnect-services
parent: using-web-services
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=nintex-workflow-and-web-service
---

In the following steps, you will modify the workflow to use the Call Web Service action instead of the Create item action to create the material record in SAP.
Navigate to the Material Maintenance Requests list and from the workflow Settings select Manage Workflows with Nintex Workflow.

![Nintex-Material-WS-WF-Manage](/img/content/Nintex-Material-WS-WF-Manage.png){:class="img-responsive"}

Select the workflow for editing.

![Nintex-Material-WS-WF-List](/img/content/Nintex-Material-WS-WF-List.png){:class="img-responsive"}

Disable (or Delete) the Create item activity. 

![Nintex-Material-WS-WF-Disable](/img/content/Nintex-Material-WS-WF-Disable.png){:class="img-responsive"}

Add a Call web service activity as shown below.

![Nintex-Material-WS-WF-WSAction-1](/img/content/Nintex-Material-WS-WF-WSAction-1.png){:class="img-responsive"}

Configure the Call web service activity:

URL = http://sp2013/_vti_ bin/SAPMaterialWebService.svc/mex<br>
Username / Password = (specify credentials of user with sufficient privileges to invoke the service)<br>
Web method = CreateSAPMaterial<br>
Web service input:  The SOAP message will contain the references to the Item Properties of the Material Maintenance Request list.

![Nintex-Material-WS-WF-WSAction-2](/img/content/Nintex-Material-WS-WF-WSAction-2.png){:class="img-responsive"}

Save and then Publish the workflow.
Repeat the other steps described in the first scenario to verify the functionality of the updated workflow.

Create a new Material and approve the Material request.


![Nintex-Material-WS-Request-Completed](/img/content/Nintex-Material-WS-Request-Completed.png){:class="img-responsive"}

Verify the result in SAP.

![Nintex-Material-WS-SAP](/img/content/Nintex-Material-WS-SAP.png){:class="img-responsive"}
