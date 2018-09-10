---
layout: page
title: Get Customer Information
description: Get Customer Information
product: erpconnect-services
parent: application-desktop
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-desktop-get-customer-information
---

The function module *SD_RFC_CUSTOMER_GET* is available in a standard SAP system and can be used to demonstrate and test RFC applications. As *Import* parameters, the function module accepts a customer number (KUNNR), a customer name (NAME1), or a combination of both. The function module returns the customer's address data in form of a Tables parameter. The function module can accept wild cards as *Import* parameters and returns zero or more customer address records. The following code example illustrates how you can call the *RFC_CUSTOMER_GET* function module using ERPConnect Services:

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using ERPConnectServices; 
//... 
ERPConnectServiceClient client = new ERPConnectServiceClient("http://SERVERNAME"); 
ERPFunction function = client.CreateFunction("SD_RFC_CUSTOMER_GET"); 
function.Exports["NAME1"].ParamValue = "T*"; 
function.Execute(); 
    
DataTable dt1 = function.Tables["CUSTOMER_T"].ToADOTable(); 
DataTable dt2 = function.Tables["CUSTOMER_T"].ToADOTable("ORT01 = 'CHICAGO'"); 
    
foreach(ERPStructure row in function.Tables["CUSTOMER_T"]) 
 Console.WriteLine(row["NAME1"] + ", " + row["ORT01"]);
{% endhighlight %}
</details>

The code will use the *ERPConnectServices* namespace. The *CreateFunction* method is used on an instance of a *ERPConnectServiceClient* to create an *ERPFunction* object.

The *ERPFunction* class defines collections for all types of function parameters, i.e. *Export, Import, Changing* and *Tables* parameters. The *Execute* method will send the execution request to ERPConnect Services. 
After successful execution, the results will be sent back to the client and the parameter collections are available for further processing. For SharePoint and Desktop applications, the *ToADOTable* helper function can be used to convert table data from type ERPTable to type DataTable. A method overload provides additional filtering capabilities on the data.

In the example, all customer address records are returned where the customer name begins with the letter T. The *Import* parameter *NAME1* was set to T* before the execution. The customer records are returned in structure *CUSTOMER_T* of the *Tables* parameter and will be shown in the console window.

The following screen shows the contents of DataTable dt1:

![ECS-VS-Function-Preview](/img/content/ECS-VS-Function-Preview.png){:class="img-responsive" }