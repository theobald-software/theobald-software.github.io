---
layout: page
title: Creating the Model and Entity
description: Creating the Model and Entity
product: erpconnect-services
parent: read-write-access
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-crud-creating-the-model-and-entity
---

In the following steps, you will create a new BCS model for the CRUD scenario. You can also work with an existing BCS model by loading it from your SharePoint system or a file location.

To create a new model, change the value next to the Model field, for example 'SAP CRUD Model'. Similarly, change the values for *LOB System* and *LOB System Instance*. You can specify additional language values using the ellipsis buttons next to the field.

![BCS-CRUD-New-Model](/img/content/BCS-CRUD-New-Model.png){:class="img-responsive"}

To add a new entity to your model, select the *New* button below the *Entities* field.

In the *New Entity* wizard, select *Function* as the SAP object type that the new entity will be based on.

![BCS-CRUD-New-Function-Entity-01](/img/content/BCS-CRUD-New-Function-Entity-01.png){:class="img-responsive"}

Select the *Next* button.

On the next page of the *New Entity* wizard, you will specify the function module that will provide the data structure of the entity. Typically, you will select a function module that can return the complete structure of the entity, in this example it is function module 'Z_ECS_PRODUCT_GET_DETAIL'.

To search for the function module, enter 'Z_ECS_PRODUCT*' in the *Type* field and then select the *Search* button to see a list of matching function modules in SAP.

![BCS-CRUD-New-Function-Entity-02](/img/content/BCS-CRUD-New-Function-Entity-02.png){:class="img-responsive"}

Choose the function module 'Z_ECS_PRODUCT_GET_DETAIL' from the list, and then select Next.

In the next screen, the wizard will show a list of possible function parameters that can define the data structure of the entity. For function module 'Z_ECS_PRODUCT_GET_DETAIL', this is parameter 'T_PRODUCTS' which represents a table structure for the product entity.

![BCS-CRUD-New-Function-Entity-03](/img/content/BCS-CRUD-New-Function-Entity-03.png){:class="img-responsive"}

Select the parameter 'T_PRODUCTS', and then *Finish*.

You will see the new entity 'T_PRODUCTS' displayed in the main BCS Connector window.

![BCS-CRUD-New-Function-Entity-04](/img/content/BCS-CRUD-New-Function-Entity-04.png){:class="img-responsive"}

Change the name of your entity in the field *Entity* to 'PRODUCTS':

In the *Entity* Properties table, deselect the field 'MANDT' which is not needed.

Mark the field 'PRODUCTNR' as the *ID* field.

To provide a more user-friendly or meaningful name for an entity property, change the value in the *Property* field. In addition, using the ellipsis button next to a property field, you can specify a name for the property in additional languages.

![BCS-CRUD-New-Function-Entity-05](/img/content/BCS-CRUD-New-Function-Entity-05.png){:class="img-responsive"}


