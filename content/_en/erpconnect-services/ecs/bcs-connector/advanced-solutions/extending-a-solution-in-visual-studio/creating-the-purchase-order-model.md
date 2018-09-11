---
layout: page
title: Creating the Purchase Order Model
description: Creating the Purchase Order Model
product: erpconnect-services
parent: extending-a-solution-in-visual-studio
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-creating-the-purchase-order-model
---

In the following steps, you will use the BCS Connector Designer to create the basic model for the purchase order release scenario. You will define the 'PurchaseOrders' entity, with its *Finder* and *Specific Finder* operations.

**Connection Settings and New Model Definition**

Launch the BCS Connector Designer and start by defining the connections to your SharePoint system and your SAP system.

To configure the SharePoint connection, select the *Edit SharePoint* button from the ribbon.

To configure your SAP connection, select the ellipsis button next to *SAP R/3* Connection. 

The status bar at the bottom of your BCS Connector Designer window should indicate that both connections have been configured. For additional information see [Connection Settings](../../getting-started-with-the-bcs-connector/connection-setting).

To create a new BCS model, change the default name in the Model field. Similarly, change the default names for *LOB System* and *LOB System Instance* to new values, for example:

**Model** -	 SAP PO Model
**LOB System** - 	 SAP PO LOB System
**LOB System Instance** -	 SAP PO LOB System Instance

![BCS-PO-VS-New-Model](/img/content/BCS-PO-VS-New-Model.png){:class="img-responsive"}

**New Entity Definition**

To add a new entity to your model, select the *New* button below the *Entities* field.

In the *New Entity* wizard, select *Function* as the SAP object type and then select the *Next* button.

On the next page of the *New Entity* wizard, you will specify the function module that will provide the data structure for the purchase order entity. To see a list of all purchase order (PO) related BAPIs, enter ' BAPI_PO* ' as a search criteria.

![BCS-PO-VS-New-Entity-01](/img/content/BCS-PO-VS-New-Entity-01.png){:class="img-responsive"}

Choose the function module 'BAPI_PO_GETITEMS' from the list, and then select Next.

The next screen of the wizard will show a list of possible data structures for the entity. For function module 'BAPI_PO_GETITEMS' you will use parameter 'PO_HEADERS' which represents a table structure for purchase order header data.

![BCS-PO-VS-New-Entity-02](/img/content/BCS-PO-VS-New-Entity-02.png){:class="img-responsive"}

Select the parameter 'PO_HEADERS', and then select *Finish*.

You will see the new entity 'PO_HEADERS' displayed in the main BCS Connector window.

Change the name of your entity in the field *Entity* to 'PurchaseOrders':

In the *Entity Properties* table, you will first deselect all fields and then only select the fields that you need in SharePoint. Select the fields listed below and change their names in the *Property* field: 

**PO_NUMBER** -  PONumber
**VENDOR** -	 Vendor
**PURCH_ORG** -	 PurchasingOrg
**PUR_GROUP** -	 PurchasingGrp
**CURRENCY** -	 POCurrency
**DOC_DATE** -	 PODate
**TARGET_VAL** -	 POValue
**SUBJ_TO_REL** -	 PORelease
**VEND_NAME** -	 VendorName

Mark the field 'PO_NUMBER' as the *ID* field.

![BCS-PO-VS-New-Entity-03](/img/content/BCS-PO-VS-New-Entity-03.png){:class="img-responsive"}

**Finder Method**


To create the *Finder* method for the entity, select the *New*button below the *Entity Operations* list.

Select the option *Finder* for the type of method.

The wizard proposes that the method is based on the SAP function module 'BAPI_PO_GETITEMS', i.e. the same function module that you used earlier to define your entity structure. For this example, you will use the function module 'BAPI_PO_GETITEMSREL' which returns purchase orders that are subject to release. The function module returns purchase order data in the required structure of the entity, i.e. based on SAP table parameter PO_HEADERS.

Uncheck the box next to 'BAPI_PO_GETITEMS' and select *Next*.

In the *New Method* screen, search on ' BAPI_PO* ' and select the method 'BAPI_PO_GETITEMSREL'.

![BCS-PO-VS-Finder-01](/img/content/BCS-PO-VS-Finder-01.png){:class="img-responsive"}

In the Edit Method dialog, specify the following input parameters:


**REL_CODE**	- Z1	- Custom release code configured in SAP and used for this example.<br>
**REL_GROUP**	- 02	- 02 = Purchase Orders

![BCS-PO-VS-Finder-02](/img/content/BCS-PO-VS-Finder-02.png){:class="img-responsive"}

Select the *Preview* button to test the *Finder* method and see a list of purchase orders with the specified release code.

Select *OK* to close the *Edit Method* dialog. You should be back in the main BCS Connector window showing the new *Entity Operation* 'Read Data'.

**Specific Finder Method**


To create the S*pecific Finder* method, select the New button below the *Entity Operations* list.

The wizard proposes that the method is based on the SAP function module 'BAPI_PO_GETITEMS', i.e. the same function module that you used earlier to define your entity structure. This function module can take the *ID* of a purchase order as input parameter and return a single record in the required structure (i.e. based on 'PO_HEADERS'). Accept the proposed selection and choose *Finish*.

![BCS-PO-VS-Specific-Finder-01](/img/content/BCS-PO-VS-Specific-Finder-01.png){:class="img-responsive"}

In the *Edit Method* dialog scroll down the list of input parameters and map the parameter 'PO_NUMBER' to 'PO_NUMBER', i.e. the *ID* of the entity.

![BCS-PO-VS-Specific-Finder-02](/img/content/BCS-PO-VS-Specific-Finder-02.png){:class="img-responsive"}

Scroll down in the list of parameters and enter the value 'X' for parameter 'WITH_PO_HEADERS'. This indicator will populate the 'PO_HEADER' return structure with data.

![BCS-PO-VS-Specific-Finder-03](/img/content/BCS-PO-VS-Specific-Finder-03.png){:class="img-responsive"}

Select *OK* to close the *Edit Method* dialog.

You have now defined the *Read Data* and *Read Data Record* methods for the 'PurchaseOrders' entity.

Save the model to SharePoint using the *Save Model* button from the ribbon.

![BCS-PO-VS-Model-Save](/img/content/BCS-PO-VS-Model-Save.png){:class="img-responsive"}

You should see a success message indicating that the model was transferred to SharePoint.