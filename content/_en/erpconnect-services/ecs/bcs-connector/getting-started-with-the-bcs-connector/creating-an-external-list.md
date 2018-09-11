---
layout: page
title: Creating an External List
description: Creating an External List
product: erpconnect-services
parent: getting-started-with-the-bcs-connector
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=creating-an-external-list
---

You can create an external list in SharePoint directly from within the BCS Connector Designer. An external list in SharePoint enables the user to work with external data in a list format, providing the same familiar experience as working with other list data in SharePoint.

To create an external list using the BCS Connector Designer, switch to the *External Lists* tab on the ribbon.

Select the *New External List* button.

![BCS-External-List-New](/img/content/BCS-External-List-New.png){:class="img-responsive"}

In the *New External List* dialog, select the *Entity* (or external content type) that you want to show in your list and specify a *Name* for the external list.

Select the *Create* button to create the list. You should see a confirmation message that the external list was created successfully.

![BCS-External-List-New-Success](/img/content/BCS-External-List-New-Success.png){:class="img-responsive"}

To display the new list in the browser, select the Yes button in the confirmation message dialog.

![BCS-External-List-SharePoint](/img/content/BCS-External-List-SharePoint.png){:class="img-responsive"}

The entity properties show up as columns in the list. The entity operation 'Read Table' enables the display of the list items.

Open the menu next to one of the list items and select *View Item*. Alternatively, you can select the *List Tools – Items* tab on the ribbon, and then select the *View Item* button.

![BCS-External-List-View-Item-01](/img/content/BCS-External-List-View-Item-01.png){:class="img-responsive"}

The Read Table Record operation of the entity is invoked when the item details are displayed.

![BCS-External-List-View-Item-02](/img/content/BCS-External-List-View-Item-02.png){:class="img-responsive"}