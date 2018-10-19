---
ref: ecs-getting-started-with-the-bcs-connector-04
layout: page
title: Function Entity Example
description: Function Entity Example
product: erpconnect-services
parent: getting-started-with-the-bcs-connector
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-function-entity-example
---

In the *New Entity* wizard, after selecting *Function* as the SAP object type, you can search for a Remote Function Module or a BAPI method in the SAP system that represents your entity.

In the *Type* field, specify the name of the function module in SAP. You can use the wildcard characters percent (%) or asterisk ( * ) as placeholders for zero or more unknown characters or the underscore ( _ ) for a single unknown character in your search criteria.

For this example, you will use a simple function module in SAP that returns customer information. In the *Type* field, specify the function module name 'SD*CUSTOMER*' ('SD' for the 'Sales and Distribution' module in SAP ERP) and then select the *Search* button to see a list of function modules that match your search criteria.

![BCS-Function-Entity-Search](/img/content/BCS-Function-Entity-Search.png){:class="img-responsive"}

Select the function module 'SD_RFC_CUSTOMER_GET' from the list, and then select the *Next* button.

In the next screen, the wizard will show a list of possible function parameters which can be used to define the data structure of your entity, i.e. all the fields and their data types. The function module 'SD_RFC_CUSTOMER' has a return parameter called 'CUSTOMER_T' which represents the structure of a customer record.

Select the parameter 'CUSTOMER_T', and then select the *Finish* button.

![BCS-Function-Entity-Parameter-Selection](/img/content/BCS-Function-Entity-Parameter-Selection.png){:class="img-responsive"}

You will see the new entity 'CUSTOMER_T' displayed in the main BCS Connector window, in addition to any other entities that exist in your model.


![BCS-Function-Entity-New-CUSTOMERT](/img/content/BCS-Function-Entity-New-CUSTOMERT.png){:class="img-responsive"}

The entity object will be displayed. For additional information see [Entity Details](./creating-a-new-model/entity-details).

For this example, change the following value:

**Entity**	 Customer (SD_RFC_CUSTOMER_GET)

In the *Entity Properties* section of your screen, scroll down the field list and deselect the field 'TELFX' which is used in SAP to store a FAX number and not needed.

Select the *ID* field next to the field 'KUNNR' which represents a unique customer number in this SAP function module.

Change the *Property* fields to a more descriptive name as shown below.

![BCS-Function-Entity-Changed-Properties](/img/content/BCS-Function-Entity-Changed-Properties.png){:class="img-responsive"}

In the *Entity Operations* section of the BCS Connector screen, you will see the list of operations that are defined for your entity. For a function module based entity, the list will initially be empty. At a minimum, the SharePoint BCS requires the definition of a Read Data (or Finder) and Read Data Record (or Specific Finder) operation for each entity.

In the following steps, you will define the operations for your entity.
For additional information, see [Entity Operations](./creating-a-new-model/entity-operations).


**Finder Method**

Select the New button below the *Entity Operations* section of your screen.

In the first step, you will define the *Finder* method. Select the option Finder for the type of method.

Notice how further below in the dialog, the wizard proposes that the *Finder* method is based on the SAP function module 'SD_RFC_CUSTOMER_GET', i.e. the same function module that you used earlier to create your entity. This function module returns a list of customer records as required for a *Finder* method, so you can accept the proposed selection by selecting the *Finish* button.

![BCS-Function-Entity-Parameter-Selection](/img/content/BCS-Function-Entity-Parameter-Selection.png){:class="img-responsive"}

The *Edit Method* dialog will be displayed which allows you to change the properties of your *Finder* method. The default *Name* of the entity method in the BCS is 'Read Data'. You can change the name or specify additional localized values using the ellipsis button next to the name.

The *Input Parameter* section of the dialog shows you the possible input parameters for the method. In our example for function module 'SD_RFC_CUSTOMER_GET' there are two possible input parameters: 'KUNNR' (Customer Number) and 'NAME1' (Name).

The *Return Parameter* section of the dialog shows you the possible return parameters for the method, in this example for function module 'SD_RFC_CUSTOMER_GET' there is only one return structure 'CUSTOMER_T'.

The *Filter Parameter* section of the dialog shows you the filters for the method. By default, there are no filters defined for a function module based method.


![BCS-Function-Entity-Edit-Finder-Method](/img/content/BCS-Function-Entity-Edit-Finder-Method.png){:class="img-responsive"}

To create a new limit filter for your method, select the New button. Specify the following filter values. For additional information see [Filters](./creating-a-new-model/filters).


**Name** -	 LimitFilter
**Type** -	 Limit
**Default Value** -	 1000
 **Mapping** -	 select option 'Field' and item 'KUNNR'
 **Parameter Name** -	 CustomerNumber (will automatically be set after selection of the mapping field).



![BCS-Function-Entity-Edit-Limit-Filter](/img/content/BCS-Function-Entity-Edit-Limit-Filter.png){:class="img-responsive"}

Select the *OK* button to create the new filter. You will see the new limit filter in the list of filters for your entity method.

Using the Preview function, you can invoke the 'Read Data' method. Because of the way the function module 'SD_RFC_CUSTOMER_GET' is implemented in SAP, you also have to enter a value in one of the input parameter fields. Enter an asterisk ( * ) placeholder as the Value for field 'KUNNR'.


![BCS-Function-Entity-Edit-Input-Parameter](/img/content/BCS-Function-Entity-Edit-Input-Parameter.png){:class="img-responsive"}

Select the *Preview* button. You should see a list of customers, limited to 1,000 records.

![BCS-Function-Entity-Method-Preview](/img/content/BCS-Function-Entity-Method-Preview.png){:class="img-responsive"}

Select *OK* to close the *Preview* dialog.

Select *OK* to close the *Edit Method* dialog. You should be back in the main BCS Connector window.



![BCS-Function-Entity-Read-Data-Operation](/img/content/BCS-Function-Entity-Read-Data-Operation.png){:class="img-responsive"}

**Specific Finder**

In the next step, you will define the *Specific Finder* entity operation. Select the New button below the Entity Operations list.

The wizard will by default select the *Specific Finder* type. Notice how further below in the dialog, the wizard proposes that the method is based on the SAP function module 'SD_RFC_CUSTOMER_GET', i.e. the same function module that you used earlier to create your entity. This function module can return a single customer record for a provided ID as required for a *Specific Finder* method, so you can accept the proposed selection by selecting the *Finish* button.

![BCS-Function-Entity-New-Specific-Finder-Method](/img/content/BCS-Function-Entity-New-Specific-Finder-Method.png){:class="img-responsive"}

The *Edit Method* dialog will be displayed which allows you to change the properties of your *Specific Finder* method. The default *Name* of the entity method in the BCS is 'Read Data Record'. You can change the name or specify additional localized values using the ellipsis button next to the name.

The *Input Parameter* section of the dialog shows you the possible input parameters for the method. In this example for function module 'SD_RFC_CUSTOMER_GET' there are two possible input parameters: 'KUNNR' (Customer Number) and 'NAME1' (Name). Notice how the input parameter 'KUNNR' is mapped to the parameter 'KUNNR' which represents the *ID* field of the entity. This allows for a unique identifier ('KUNNR') to be passed to the Specific Finder method as input parameter. 

The *Specific Finder* method will return a single record of parameter structure 'CUSTOMER_T' as shown in the *Return Parameter* section of the dialog.

![BCS-Function-Entity-Edit-Specific-Finder-Method](/img/content/BCS-Function-Entity-Edit-Specific-Finder-Method.png){:class="img-responsive"}

Select *OK* to close the *Edit Method* dialog.

You have now defined the two required methods *Read Data* and *Read Data Record* for the entity 'Customer (SD_RFC_CUSTOMER_GET)'.

![BCS-Function-Entity-Read-Data-Record](/img/content/BCS-Function-Entity-Read-Data-Record.png){:class="img-responsive"}
