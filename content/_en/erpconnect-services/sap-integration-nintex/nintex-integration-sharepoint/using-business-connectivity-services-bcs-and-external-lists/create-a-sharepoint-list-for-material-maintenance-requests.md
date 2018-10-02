---
layout: page
title: Create a SharePoint list for Material Maintenance Requests
description: Create a SharePoint list for Material Maintenance Requests
product: erpconnect-services
parent: using-business-connectivity-services-bcs-and-external-lists
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create-a-sharepoint-list-for-material-maintenance-requests
---

In our scenario, the Material Maintenance Request list will be used to capture a request to create a new material record in SAP.
Create the list with the following properties:

- Type = Custom List
- Name = Material Maintenance Requests

Add the following columns to the list:

**Priority Choice**: High (1), Normal (2), Low (2)<br>
**Material Number**: Single line of text<br>
**Material Name**: Single line of text<br>
**Material Type**: Single line of text<br>
**Industry**: Single line of text<br>
**Unit**: Single line of text<br>
**Old Material Number**: Single line of text<br>
**Due Date**: Date only<br>
**Notes**: Multiple lines (3) of text<br>

![Nintex-SP-List-Definition](/img/content/Nintex-SP-List-Definition.jpg){:class="img-responsive"}