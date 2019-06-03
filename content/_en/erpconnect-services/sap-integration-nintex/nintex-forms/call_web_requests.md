---
ref: ecs-sin-nintex-forms-05
layout: page
title: Call Web Requests in Nintex Forms
description: Call Web Requests in Nintex Forms
product: erpconnect-services
parent: nintex-forms
permalink: /:collection/:path
weight: 5
lang: en_GB
---

A possibility to access SAP in Nintex Forms without any JavaScript code is via web requests. With the standard Nintex Forms *Web Request* control SOAP web service for SAP read and write access can be called.
In the following example a web service to read SAP customer data is called and the return values are displayed in a dropdown-list.

**Step 1: Create a web service**

The first step would be the creation of a SOAP web service with the WebService Designer provided with ERPConnect Services. For detailed information on how the WebService Designer works and application examples, see the [following](https://help.theobald-software.com/en/erpconnect-services/ecs/webservice-designer) section in the OnlineHelp.
In this example one single web service operation shall be created where function module SD_RFC_CUSTOMER_GET is called. This remote enabled standard function module extracts customer data vom customer master data table KNA1 and allows to search for names or customer numbers.    
We use field NAME1 as input filter value and create a corresponding input parameter. 
As output parameter we use the table CUSTOMER_T from which we return only three fields: Customer Number (KUNNR), Customer Name (NAME1), City (ORT01)    

You can use the following web service template for implementing this scenario.

Please deploy the web service to the SharePoint server after the successful configuration.


Step 2: Define the forms controls

In our Nintex Form we require two controls:

The first field named Material Number is of type Single Line Textbox. It is the input field for entering the SAP material number.
The second field named Suggested Materials is of type Choice. All possible matches for the given material number should be displayed and be selectable here in a dropdown list.
The third field named Material is of type Single Line Textbox. The material long text for the selected material should be displayed here.
  









