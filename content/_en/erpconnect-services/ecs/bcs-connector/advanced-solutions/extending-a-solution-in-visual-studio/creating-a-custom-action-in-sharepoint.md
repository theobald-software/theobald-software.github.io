---
layout: page
title: Creating a Custom Action in SharePoint
description: Creating a Custom Action in SharePoint
product: erpconnect-services
parent: extending-a-solution-in-visual-studio
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-creating-a-custom-action-in-sharepoint
---

With the page and web part in place to release a purchase order, you can now define a custom action for the Purchase Order entity.

Open SharePoint 2010 Central Administration and navigate to *Application Management -> Manage Service Applications*.

Select the *Business Data Connectivity Service* and select *Manage*.

Display the *External Content Type* 'PurchaseOrders' that you previously deployed from Visual Studio.

Scroll down in the list of properties, there should be no *Actions* defined for the external content type.

![BCS-PO-VS-Custom-Action-01](/img/content/BCS-PO-VS-Custom-Action-01.png){:class="img-responsive"}

From the ribbon, select the *Add* button in the *Actions* group.

On the *Add Action* page, specify the following values:

**Action Name** -	 Release<br>
**Navigate to this URL** -	  //SitePages/ReleasePO.aspx?poid={0">http:////SitePages/ReleasePO.aspx?poid={0}<br>
**Parameter Property** -	 0 PurchaseOrder<br>
**Label** -	 lbl_Message

![BCS-PO-VS-Custom-Action-02](/img/content/BCS-PO-VS-Custom-Action-02.png){:class="img-responsive"}

Scroll down and select *OK* to add the action. You should see it listed under *Actions* for the external content type.

**Creating the External List and Verifying the Results**

In this last step, you will create the 'Purchase Orders' external list and verify that the custom action to release a purchase order is enabled and functioning.

Navigate to the site where you want to host the 'Purchase Orders' external list.

From the *Site Actions* menu, select *More Options*.

In the *Create* dialog, filter by *List* and select *External List*. Select the *Create* button.

![BCS-PO-VS-External-List-01](/img/content/BCS-PO-VS-External-List-01.png){:class="img-responsive"}

On the *New External List* screen, specify the following values:

**Name** -	 Purchase Orders.<br>
**Description** -	 Purchase Orders for Release.<br>
**External Content Types** -	 Select the external content type for purchase orders that you previously deployed from Visual Studio.

Select *Create*.

![BCS-PO-VS-External-List-02](/img/content/BCS-PO-VS-External-List-02.png){:class="img-responsive"}

The external list will be displayed in the browser. You should see the 'Release' action in the item menu for a purchase order.

![BCS-PO-VS-External-List-03](/img/content/BCS-PO-VS-External-List-03.png){:class="img-responsive"}

When you select the 'Release' action, you will be redirected to the page that you previously created. The page will display the purchase order details and allow you to release it. 

![BCS-PO-VS-External-List-04](/img/content/BCS-PO-VS-External-List-04.png){:class="img-responsive"}

