---
layout: page
title: Nintex Workflow and Query XQL Action
description: Nintex Workflow and Query XQL Action
product: erpconnect-services
parent: using-query-xql-action
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=nintex-workflow-and-query-xql-action
---

In the following steps, you will modify the workflow to use the custom action Query XQL instead of the Call web service action to create the material record in SAP.
Navigate to the Material Maintenance Requests list and from the workflow Settings select Manage Workflows with Nintex Workflow.

![Nintex-Material-XQL-WF1](/img/content/Nintex-Material-XQL-WF1.jpg){:class="img-responsive"}

Select the Product Approval Workflow for editing.

![Nintex-Material-XQL-WF2](/img/content/Nintex-Material-XQL-WF2.jpg){:class="img-responsive"}

Delete (or Disable) the Call web service activity.<br>
Add a Query XQL action as shown below.

![Nintex-Material-XQL-WF3](/img/content/Nintex-Material-XQL-WF3.jpg){:class="img-responsive"}

Configure the Query XQL activity:<br>
**Application Name** = (ERPConnect Services Application that is configured in your SharePoint system)<br>
**XQL Query** = (XQL Query to create the material record in SAP)<br>

In this example: EXECUTE FUNCTION 'Z_ECS_MATERIAL_MAINTAIN'
EXPORTING MATERIALBASE-MATNR='{ItemProperty:Material_x0020_Number}', MATERIALBASE-MATDESC1='{ItemProperty:Material_x0020_Name}', MATERIALBASE-MATL_TYPE='{ItemProperty:MaterialType}', MATERIALBASE-IND_SECTOR='{ItemProperty:Industry}', MATERIALBASE-BASE_UOM='{ItemProperty:UnitofMeasure}', MATERIALBASE-OLD_MAT_NO='{ItemProperty:Old_x0020_Material_x0020_Number}'

![Nintex-Material-XQL-WF4](/img/content/Nintex-Material-XQL-WF4.jpg){:class="img-responsive"}

Save and then Publish the workflow.<br>
Repeat the other steps described in the first scenario to verify the functionality of the updated workflow.

Create a new Material and approve the Material request.

![Nintex-Material-XQL-WF-Completed](/img/content/Nintex-Material-XQL-WF-Completed.jpg){:class="img-responsive"}

Verify the result in SAP.

![Nintex-Material-XQL-SAP](/img/content/Nintex-Material-XQL-SAP.jpg){:class="img-responsive"}

