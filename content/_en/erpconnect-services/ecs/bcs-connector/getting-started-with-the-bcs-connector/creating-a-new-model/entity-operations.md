---
layout: page
title: Entity Operations
description: Entity Operations
product: erpconnect-services
parent: creating-a-new-model
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-entity-operations
---

n the *Entity Operations* section of the BCS Connector screen, you will see the list of operations that are defined for your entity. The default operations for an entity based on an SAP table are ‘Read Table' and 'Read Table Record'. For an entity based on an SAP function module, the operations list will initially be empty. At a minimum, the SharePoint BCS requires the definition of a Read (or Finder) and Read Record (or Specific Finder) operation for each entity.

Select the New button to define a new entity operation.

n the *New Method* dialog, specify the type of method that you want to create:

**Finder** -	 Required method. This method returns a list of zero or more records (instances) of the entity.<br>
**Specific Finder** -	 Required method. This method returns a single record (instance) of an entity for the specified ID.<br>
**Creator** -	 This method creates a new record (instance) of an entity.<br>
**Updater** -	 This method updates an existing record (instance) of an entity.<br>
**Deleter** -	 This method deletes an existing record (instance) of an entity.

**Caution:** the SAP function modules used for the different entity operations must have the same entity in their signature.

![BCS-Generic-New-Method](/img/content/BCS-Generic-New-Method.png){:class="img-responsive"}

For further information on creating entity operations, refer to the following examples:

[Function Entity Example](../function-entity-example)
[Creating a CRUD Solution](../../advanced-solutions/read-write-access/)

Select the Edit button to make changes to an existing entity operation.

The *Edit Method* dialog will show the type and the SAP object for the method. You can change the name of the method and specify localized values for it.

The dialog will show the *Input Parameters* for the method with the mappings to the entity properties.

The dialog will show the *Return Parameters* for the method as well as any *Filters* that are defined for the method. For further information see [Filters](./filters).

![BCS-Generic-Edit-Method](/img/content/BCS-Generic-Edit-Method.png){:class="img-responsive"}



