---
layout: page
title: Filters
description: Filters
product: erpconnect-services
parent: creating-a-new-model
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-filters
---

With the SharePoint BCS, you can use filters to capture user input and pass it to the method when it executes in the external system.

The following types of filters are supported in the BCS Connector:

**Limit Filter** -	Used to limit the number of records (entity instances) that are returned by the method.<br>
**Wildcard Filter** -	Used to specify a search pattern of characters and wildcards for a property of the entity. Only matching records (entity instances) will be returned by the method.<br>
**Comparison Filter** -	Used to specify a value for a property of the entity. Only matching records (entity instances) will be returned by the method. The comparison test can be:
   - Equal
   - Less than
   - Less than or equal
   - Greater than
   - Greater than or equal

You can define comparison filters in Finder operations for tables and function modules. 

A comparison filter consists of two components: an operator (>, <, =, etc.) and the filter value. To match this filter with the input parameters, the function module must handle an input parameter in the form of "> 45" or "ABC =" to produce correct results. Or you would have to split a filter on two parameters, which is also not supported by standard function modules. Only custom function modules could be prepared for such a parameter passing.

The wildcard filter is an exception among the filters and also a compromise. Without specifying the wildcard character ( * ) the wildcard filter corresponds to a comparison (equal) filter. This filter can be used for example with the input parameter LASTNAME_M of the function module BAPI_EMPLOYEE_GETDATA, because this filter can handle expressions such as " Theo* ".

**Filtering tables**

In order to deploy table data already filtered to SharePoint you can define filters on table fields. Every filter is part of the final WHERE Clause and is executed on your SAP system. In principle table objects support every filter types. The optional, additional WHERE Clause expression was created in order to enable users to define a fixed WHERE statement which is not defined by a filter. Input parameters do not exist in table objects but refer to function modules only.     

**Filtering function modules**

You can associate a comparison filter for function modules only with entity fields, but not with input parameters.
That makes no sense with standard function modules, since this filter is not understood and can not be processed.
Generally the definition of filters on input parameters only makes sense if the function module can process  these filters.
Input filters which are processed by the function module have the property of filtering data already on SAP side. 
Entity filters have the property of filtering data in SharePoint (BCS) after recieving the data from SAP.  

**Filter processing in SharePoint**

In principle filters which are defined in the BCS Connector are standard filters and are used if no other filters are processed while calling your data in the external system. This is the case if a External List in SharePoint is diplayed or in preview mode of the finder operation in the BCS Connector designer.  

In certain circumstances it can happen that SharePoint automatically converts filter specifications. These filter specifications may then possibly not be processed any more by your SAP system. You cannot influence this. The call of the BCS Connector is triggered by SharePoint and SharePoint decides which operators (Contains, StartWith,..) are used by calling external data on it user interface. We recommend that you refrain from using filters in these constellations or - if it is a customer-specific function module- to modify your implementation in a way that SAP can process the converted values. 

*External Data Columns*<br>
The conversion of filter specifications applies on the one hand to the inclusion of External Content Types created by the BCS Connector in SharePoint lists as External Data Columns. If a filter is selected here in the dialog window SharePoint always converts the text string as a filter with the operator contains (and not equals to) and adds a * at the beginning and the end of the filter expression. A a limit value 201 is predefined. If the text string additionaly contains a * , the expression is converted and does not return any results.       

One example for a filter on import parameter NAME1 in function module SD_RFC_CUSTOMER_GET:
If the text string is Be*, SharePoint converts it to *Be\**, which in turn is converted to %Be\*% on SAP side. If only Be is entered you get a result. 


*Webparts*<br>
With webparts the programm behaviour regarding filters is slightly different from External Data Columns. In the webpart Business Data List within SharePoint site pages the text string is not encoded. Furthermore the webpart allows selecting different operators. But here too Sharepoint adds a * at the beginning and the end of the text string.    


One example for a filter on import parameter NAME1 in function module SD_RFC_CUSTOMER_GET:
If the text string is Be* for operator contains *Be** is returned which is converted to %Be%% on SAP side. With this entry all data containing Be in field NAME1 is returned. 
