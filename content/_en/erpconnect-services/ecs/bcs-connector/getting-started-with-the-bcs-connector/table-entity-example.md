---
ref: ecs-getting-started-with-the-bcs-connector-03
layout: page
title: Table Entity Example
description: Table Entity Example
product: erpconnect-services
parent: getting-started-with-the-bcs-connector
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-table-entity-example
---

This example will walk you through the steps for creating a new entity based on a table in SAP.

In the BCS Connector Designer, create a new model or open an existing one.

To define a new entity, select the *New* button below the *Entities* field.

![BCS-Table-Entity-New](/img/content/BCS-Table-Entity-New.png){:class="img-responsive"}

In the *New Entity* wizard, select Table as the object type for your new entity.

Select the *Next* button to proceed.

In the following screen of the *New Entity* wizard, you can search for a table in the SAP system that represents your entity. In the *Type* field, enter ' MAK* ' to search for tables starting with those letters.

Select the *Search* button.

![BCS-Table-Entity-Search](/img/content/BCS-Table-Entity-Search.png){:class="img-responsive"}

Select table 'MAKT', and then select the *Finish* button.

You will see the new entity displayed in the BCS Connector window. The *Entity* field will show the name of the entity, by default the name of the table object in SAP.

![BCS-Table-Entity-New-MAKT](/img/content/BCS-Table-Entity-New-MAKT.png){:class="img-responsive"}

In the *Entity Properties* section of your screen, you will see the data elements of your entity object. The BCS Connector has created the list of properties based on the table definition in the SAP system. By default, all fields of the table in SAP will be selected for the entity. To exclude a field from your BCS entity, simply deselect the field in the first column of the properties list. In this example for SAP table 'MAKT', you will deselect the field 'MAKTG' because this field in SAP stores the same values as the field 'MAKTX' (MaterialDescription), only in uppercase characters.

The values shown in the *Field* and *Type* columns are based on the SAP table definition and cannot be changed. Also note how the *ID* indicators are pre-selected, based on the SAP table definition.

Change the values of the entity properties as shown in the example below. This allows you to specify a more user-friendly or meaningful name for the property which will later be displayed in the SharePoint UI. 

For additional information see [Entity Details](./creating-a-new-model/entity-details) and [Localization](./creating-a-new-model/localization).

![BCS-Table-Entity-MAKT-With-Changed-Properties](/img/content/BCS-Table-Entity-MAKT-With-Changed-Properties.png){:class="img-responsive"}

In the *Entity Operations* section of your screen, you will see the list of operations that are defined for your entity. The default operations for an SAP table are 'Read Table' and 'Read Table Record'.

The ‘Read Table’ operation maps to the standard stereotyped 'Finder' operation in the BCS and returns all data records of a table. The 'Read Table Record' operation maps to the standard stereotyped 'Specific Finder' operation and returns the details of a specified, individual table record.

You can modify an existing operation using the Edit button. In this example using SAP table 'MAKT', you will modify the 'Read Table' operation by adding a filter so the operation will only return records with a description in the selected language.

For additional information, see [Entity Operations](./creating-a-new-model/entity-operations).

Select the 'Read Table' operation, and then select the Edit button. The *Edit Method* dialog will appear.

![BCS-Table-Entity-Edit-Method-01](/img/content/BCS-Table-Entity-Edit-Method-01.png){:class="img-responsive"}

The 'Read Table' operation has no input parameters and one return parameter 'MAKT'.

Under *Filter Parameters*, you should see a default 'Limit Filter' which limits the number of records that are returned by the 'Read Table' operation to 1,000.

To create a new filter for the operation, select the *New*button. In the *Edit Filter* dialog, specify the following values:


**Name** -	 LanguageFilter<br>
**Type** -	 Wildcard<br>
**Default Value** -	 E<br>
**Mapping** -	 select option 'Field' and item 'SPRAS'.<br>
**Parameter Name** -	 Language (will automatically be set after selection of the mapping field).

![BCS-Table-Entity-Edit-Method-02](/img/content/BCS-Table-Entity-Edit-Method-02.png){:class="img-responsive"}

Select *OK* to create the new filter. You will see the new Wildcard filter in the list of filters for your entity method.

![BCS-Table-Entity-Edit-Method-03](/img/content/BCS-Table-Entity-Edit-Method-03.png){:class="img-responsive"}

Using the *Preview* function, you can invoke the 'Read Table' method with the two filters that you have defined.

Select the *Preview* button. 

The *Preview* dialog will show a list of records returned by the 'Read Table' method with the default values for the two filters 'Limit Filter' and 'LanguageFilter' applied.

![BCS-Table-Entity-Edit-Method-04](/img/content/BCS-Table-Entity-Edit-Method-04.png){:class="img-responsive"}

Change the value in the *LanguageFilter* field from 'E' (for English) to 'D' (for Deutsch or German).
Select the *Execute* button to invoke the 'Read Table' operation with the new filter value.

![BCS-Table-Entity-Edit-Method-05](/img/content/BCS-Table-Entity-Edit-Method-05.png){:class="img-responsive"}

Select *OK* to close the *Preview* dialog.

Select *OK* to close the *Edit Method* dialog. You should be back in the main *BCS Connector* window.

![BCS-Table-Entity-MAKT](/img/content/BCS-Table-Entity-MAKT.png){:class="img-responsive"}




