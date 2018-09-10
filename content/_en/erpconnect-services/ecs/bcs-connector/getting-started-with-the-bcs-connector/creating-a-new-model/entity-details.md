---
layout: page
title: Entity Details
description: Entity Details
product: erpconnect-services
parent: creating-a-new-model
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-entity-details
---

After completing the *New Entity* wizard, you will see the new entity displayed in the BCS Connector window.

![BCS-Table-Entity-New-MAKT](/img/content/BCS-Table-Entity-New-MAKT.png){:class="img-responsive"}

The entity object will be displayed with the following details:

**Entity** -	The default name of the entity is the parameter of the SAP function module that you selected (in this example 'CUSTOMER_T'). To provide a more meaningful name for the entity, change the value to 'Customer (SD_RFC_CUSTOMER_GET)'. Using the ellipsis button next to the field, you can specify a name for the entity in additional languages.<br>

**Namespace** -	The default value is 'BCSConnector.SAP'. The namespace used together with the Entity and Version values to form an ID that uniquely identifies the entity object within the Business Connectivity Services.<br>
**Version** -	The default value is '1.0.0.0'. The version is used together with the Entity and Namespace values to form an ID that uniquely identifies the entity object with the Business Connectivity Services.<br>
**Est. Instances** -	The default value is '1000'. This value helps the BCS to estimate how many records of an entity will be displayed in a list web part and can impact its rendering behavior.<br>
**Object Type** -	The type of the entity object in SAP which can be 'Table' or 'Function'.<br>
**Object** -	Name of the entity object in the SAP system, i.e. the name of the SAP table or the name of the SAP function module.<br>
**Custom Function** - Only used for table objects. Name of the SAP function module if the table is accessed via a function module.

In the *Entity Properties* section of your screen, you will see the data elements of your entity object. The BCS Connector has created the list of properties based on the table definition in the SAP system. The list will show the following information:

**(Selector)** -	When selected, the property will be included in the entity definition. By default all rows will be selected.<br>
**ID** -	When selected, the field (or fields) will be used as the unique identifier for the entity. The BCS Connector will pre-select this field based on the object definition in SAP.<br>
**Field** -	Name of the object property in SAP.<br>
**Type** -	.NET data type of the property.<br>
**Property** -	Name of the property in the BCS model. 

By default it will show the same value as Field. Use the ellipses button next to it to specify localized values.

![BCS-Table-Entity-MAKT-With-Changed-Properties](/img/content/BCS-Table-Entity-MAKT-With-Changed-Properties.png){:class="img-responsive"}