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
In this example one single web service operation is created where function module SD_RFC_CUSTOMER_GET is called. This remote enabled standard function module extracts customer data vom customer master data table KNA1 and allows to search for customer names or numbers.    
We use field NAME1 as input filter value and create a corresponding input parameter. 
As output parameter we use the table CUSTOMER_T from which we return only three fields: Customer Number (KUNNR), Customer Name (NAME1), City (ORT01)    

You can use the following web service template for implementing this scenario.

Please deploy the web service to the SharePoint server after the successful configuration.

**Step 2: Create a SharePoint custom list**

The second step is to create a SharePoint custom list, with the following two fields of type *Single line of text*.  
1. Customer name
2. Customer

**Step 3: Define the forms controls**

In our Nintex Form we require two controls:

1. The first control named *Customer Name* is of type **Single Line Textbox**. It is the input field for entering a customer name. Connect the control to the *Customer Name* SharePoint list field. 
2. The second field named *Suggested Materials* is of type **Web Request**. All possible matches for the given customer name (wildcards accepted) should be displayed and be selectable in the dropdown list. 

**Step 4: Configure the Web Request control**

1. Connect the text to the *Customer* SharePoint list field.
2. Select *Drop down list* as display format. 
3. Enter the web service URL without the */mex* part in the *Service URL* box.
4. Select *POST* as request method. 

![nintex-forms-webrequest-03](/img/content/nintex-forms-webrequest-03.jpg){:class="img-responsive"}

5. Define the request body:

For SOAP web service calls a so called SOAP envelop has to be created. The request body must be in the following format for this example:

```
<details>
<summary>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.theobald-software.com/ERPConnectServices/WebServices">

<soapenv:Header/>

<soapenv:Body>

<web:GetSAPCustomers>

<web:CustomerName> 

</web:CustomerName>

</web:GetSAPCustomers>

</soapenv:Body>

</soapenv:Envelope> 
<summary>
</details>
```

![nintex-forms-webrequest-04](/img/content/nintex-forms-webrequest-04.jpg){:class="img-responsive"}


For a more detailed explanation of how the SOAP envelop is composed look at the following screenshot, taken in a REST client:
![nintex-forms-webrequest-01](/img/content/nintex-forms-webrequest-01.jpg){:class="img-responsive"}

6. Use *text/xml; charset=UTF-8* as content type
7. Select the authentication type. In this example we use *Windows Authentication*.
8. Enter the target application ID of the Secure Store where the Windows credentials are stored. 
9. Enter the XPath expression for the value to be retrieved and to be displayed. In our example it is *//*[local-name()='NAME1']* for both fields.
10. Enter a custom header for SOAPAction in the *Advanced* section:

Name: SOAPAction
Value: http://www.theobald-software.com/ERPConnectServices/WebServices/ISAPCustomerWebservice/GetSAPCustomers 

![nintex-forms-webrequest-05](/img/content/nintex-forms-webrequest-05.jpg){:class="img-responsive"}

For a more detailed explanation of how the SOAPAction header is composed look at the following screenshot, taken in a REST client:
![nintex-forms-webrequest-02](/img/content/nintex-forms-webrequest-02.jpg){:class="img-responsive"}

**Step 5: Test the Web Request**

You can test the web request at first with the *Run now* button. Take care that the request body is typed correctly, there might be harmful line breaks, blanks, etc.
When it works correctly there save the entries and the form and open the form by creating a new item in the list. 

![nintex-forms-js-dropdown-09](/img/content/nintex-forms-webrequest-gif.gif){:class="img-responsive"} 






