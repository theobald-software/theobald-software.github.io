---
ref: ecs-read-write-access-04
layout: page
title: CRUD Operations
description: CRUD Operations
product: erpconnect-services
parent: read-write-access
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-crud-operations
---

In the following steps, you will define the CRUD operations for your entity. For a function module based entity, the *Entity Operations* list will initially be empty. Select the *New* button to define a new entity operation.

**Finder Method**

The first method you will define is the *Finder* method. Select the option Finder for the type of method.

The wizard proposes that the method is based on the SAP function module 'Z_ECS_PRODUCT_GET_DETAIL', i.e. the same function module that you used earlier to define your entity structure. Since this function module returns only a single record of the entity, you need to select function module which can return a result set for the entity.

Uncheck the box next to the function module name and select *Next*.

![BCS-CRUD-New-Finder-01](/img/content/BCS-CRUD-New-Finder-01.png){:class="img-responsive"}

In the *New Method* dialog, enter ' Z_ECS_PRODUCT* ' as your search criteria and select the Search button to see a list of matching function modules in SAP.

![BCS-CRUD-New-Finder-02](/img/content/BCS-CRUD-New-Finder-02.png){:class="img-responsive"}

Choose the function module 'Z_ECS_PRODUCT_GET_LIST' from the list, and then select *Finish*.

In the *Edit Method* dialog you will see that the method has two input parameters (SEARCH_PRODTYPE and SEARCH_PRODUCTNR) and one return parameter (T_PRODUCTS). By default, the method will also have a filter to limit the result set to 1,000 records.

![BCS-CRUD-New-Finder-03](/img/content/BCS-CRUD-New-Finder-03.png){:class="img-responsive"}

Select the *Preview* button to test the method and see a list of products.

![BCS-CRUD-New-Finder-04](/img/content/BCS-CRUD-New-Finder-04.png){:class="img-responsive"}

Select *OK* to close the *Preview* dialog.

Select *OK* to close the *Edit Method* dialog. You should be back in the main BCS Connector window showing the new *Entity Operation* 'Read Data'.

![BCS-CRUD-New-Finder-05](/img/content/BCS-CRUD-New-Finder-05.png){:class="img-responsive"}

**Specific Finder Method**

The next method you will define is the *Specific Finder* method. Select the New button below the *Entity Operations* list.

The wizard will select the *Specific Finder* as the next method to be defined. The wizard proposes that the method is based on the SAP function module 'Z_ECS_PRODUCT_GET_DETAIL', i.e. the same function module that you used earlier to define your entity structure. This function module returns a single record of the entity, as required for the *Specific Finder* method. Accept the proposed selection and choose *Finish*.

![BCS-CRUD-New-Specific-Finder-01](/img/content/BCS-CRUD-New-Specific-Finder-01.png){:class="img-responsive"}

In the *Edit Method* dialog you will see that the method has one input parameter 'I_PRODUCTNR' and one return parameter 'T_PRODUCTS'. Note how the return parameter matches that of the *Finder* method.

A *Specific Finder* method requires the *ID* of the entity to be mapped to one of its input parameters. Map the *ID* field 'PRODUCTNR' to the input parameter 'I_PRODUCTNR'.

![BCS-CRUD-New-Specific-Finder-02](/img/content/BCS-CRUD-New-Specific-Finder-02.png){:class="img-responsive"}

Select *OK* to close the *Edit Method* dialog.

You have now defined the *Read Data* and *Read Data Record* methods for the 'PRODUCTS' entity.

![BCS-CRUD-New-Specific-Finder-03](/img/content/BCS-CRUD-New-Specific-Finder-03.png){:class="img-responsive"}

**Creator Method**

In the next step, you will define the Creator entity operation. Select the New button below the *Entity Operations* list.

The wizard will select the *Creator* as the next method to be defined. The wizard proposes that the Creator method is based on the SAP function module 'Z_ECS_PRODUCT_GET_DETAIL', i.e. the same function module that you used earlier to create your entity. Since this function module can only return a single record of the entity, you need to select a different function module for the *Creator* method.

Uncheck the box next to the function module name and select *Next*.

![BCS-CRUD-New-Creator-01](/img/content/BCS-CRUD-New-Creator-01.png){:class="img-responsive"}

In the *New Method* dialog, enter ' Z_ECS_PRODUCT* ' as your search criteria and select the Search button to see a list of matching function modules in SAP.

![BCS-CRUD-New-Creator-02](/img/content/BCS-CRUD-New-Creator-02.png){:class="img-responsive"}

Choose the function module 'Z_ECS_PRODUCT_CREATE' from the list, and then select *Finish*.

In the *Edit Method* dialog you will see that the method has one input parameter 'I_PRODUCT' which represents the structure of an entity. The *Creator* method requires the structure of the entity mapped to this input parameter, as indicated by the value '<>' in the *Mapping* field.

![BCS-CRUD-New-Creator-03](/img/content/BCS-CRUD-New-Creator-03.png){:class="img-responsive"}

Select *OK* to close the *Edit Method* dialog.

You have now defined the *Read Data, Read Data Record* and *Create Data Record* methods for the 'PRODUCTS' entity.

![BCS-CRUD-New-Creator-04](/img/content/BCS-CRUD-New-Creator-04.png){:class="img-responsive"}

**Updater Method**

The next method you will define is the *Updater*. Select the *New* button below the *Entity Operations* list.

The wizard will select the *Updater* as the next method to be defined. The wizard proposes that the *Updater* method is based on the SAP function module 'Z_ECS_PRODUCT_GET_DETAIL', i.e. the same function module that you used earlier to create your entity. Since this function module can only return a single record of the entity, you need to select a different function module for the *Updater* method.

Uncheck the box next to the function module name and select *Next*.

![BCS-CRUD-New-Updater-01](/img/content/BCS-CRUD-New-Updater-01.png){:class="img-responsive"}

In the *New Method* dialog, enter ' Z_ECS_PRODUCT* ' as your search criteria and select the *Search* button to see a list of matching function modules in SAP.

![BCS-CRUD-New-Updater-02](/img/content/BCS-CRUD-New-Updater-02.png){:class="img-responsive"}

Choose the function module 'Z_ECS_PRODUCT_CHANGE' from the list, and then select *Finish*.

In the *Edit Method* dialog you will see that the method has two input parameters: 'I_PRODUCT' which represents the entity structure and 'I_PRODUCTNR' which represents the entity *ID*. Map the parameter 'I_PRODUCT' of the method to '<>' and the parameter 'I_PRODUCTNR' of the method to 'PRODUCTNR'

![BCS-CRUD-New-Updater-03](/img/content/BCS-CRUD-New-Updater-03.png){:class="img-responsive"}

Select *OK* to close the *Edit Method* dialog.

You have now defined the *Read Data, Read Data Record, Create Data Record* and *Update Data Record* methods for the 'PRODUCTS' entity.

![BCS-CRUD-New-Updater-04](/img/content/BCS-CRUD-New-Updater-04.png){:class="img-responsive"}

**Deleter Method**

Finally, you will define the *Deleter* entity operation. Select the New button below the *Entity Operations* list.

The wizard will select the *Deleter* type as the only remaining method to be defined. The wizard proposes that the *Deleter* method is based on the SAP function module 'Z_ECS_PRODUCT_GET_DETAIL', i.e. the same function module that you used earlier to create your entity. Since this function module can only return a single record of the entity, you need to select a different function module for the *Deleter* method.

Uncheck the box next to the function module name and select *Next*.

![BCS-CRUD-New-Deleter-01](/img/content/BCS-CRUD-New-Deleter-01.png){:class="img-responsive"}

In the *New Method* dialog, enter ' Z_ECS_PRODUCT* ' as your search criteria and select the *Search* button to see a list of matching function modules in SAP.

![BCS-CRUD-New-Deleter-02](/img/content/BCS-CRUD-New-Deleter-02.png){:class="img-responsive"}

Choose the function module 'Z_ECS_PRODUCT_DELETE' from the list, and then select *Finish*.

In the *Edit Method* dialog you will see that the method has one input parameter 'I_PRODUCTNR' which represents the ID of the entity to be deleted. Map the parameter 'I_PRODUCTNR' of the method to 'PRODUCTNR'.

![BCS-CRUD-New-Deleter-03](/img/content/BCS-CRUD-New-Deleter-03.png){:class="img-responsive"}

Select *OK* to close the *Edit Method* dialog.

You have now defined all CRUD operations for the 'PRODUCTS' entity: *Read Data, Read Data Record, Create Data Record, Update Data Record* and *Delete Data Record*.

![BCS-CRUD-New-Deleter-04](/img/content/BCS-CRUD-New-Deleter-04.png){:class="img-responsive"}

