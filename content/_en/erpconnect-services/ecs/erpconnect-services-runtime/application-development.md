---
layout: page
title: Application Development
description: Application Development
product: erpconnect-services
parent: erpconnect-services-runtime
childidentifier: application-development
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-application-development
---

The following sections provide an overview of typical use cases and development options for ERPConnect Services. The main purpose of ERPConnect Services is to provide a secure, load-balanced ERP services layer which isolates the developer from the complexities of accessing an SAP system.

**Development Environment**

ERPConnect Services can be integrated in a multitude of development projects. One of the primary use cases is the development of SharePoint solutions, such as web parts or application pages. These solutions can easily be developed with Visual Studio and the SharePoint Developer Tools. SAP integration is provided with the ERPConnect Services object model (ECOM). 

Aside from the standard SharePoint solutions, you can also develop desktop applications that utilize the ERPConnect Services object model. The necessary client libraries are provided .


**Client Assemblies**

During the installation of ERPConnect Services all the necessary assemblies are copied to the folder Program *Files\ERPConnect Services* of your development system. In addition, certain assemblies will be installed in the Global Assembly Cache (GAC).

In your Visual Studio development project, you will need to reference the required client library as shown below.

| Client Library                        | Used for                                                      |
|---------------------------------------|---------------------------------------------------------------|
| ERPConnectServices.Server.Common.dll  | SharePoint solutions, such as web parts or application  pages |
| ERPConnectServices.Client.dll         | Desktop applications (e.g. Windows forms or WPF applications) |
| ERPConnectServices.Client.WinRT45.dll | WinRT applications                                            |

In your Visual Studio project you will need to add a reference to the required client library. Right-click the References  node, and then select Add Reference ... to browse to the location of the client library file.



![ECS-VS-Add-Reference](/img/content/ECS-VS-Add-Reference.png){:class="img-responsive" }

Each of the client libraries defines the class ERPConnectServiceClient, in the ERPConnectServices namespace.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using ERPConnectServices;
// ...
ERPConnectServiceClient client = new ERPConnectServiceClient();
DataTable dt1 = client.ExecuteTableQuery("T001W");
DataTable dt2 = client.ExecuteTableQuery("T001W", new ExecuteTableQuerySettings { RowCount = 10 });
{% endhighlight %}
</details>


This example shows that you first have to reference the *ERPConnectServices* namesapce. 
Then the *ERPConnectServiceClient* class is instantiated which will provide access to all the ERPConnect Services functionality.

In the example, SAP table *T001W*is accessed twice using the *ExecuteTableQuery* method. This method reads records from the SAP table using a query statement and returns the records in a *DataTable structure*.
In the first table access, all records are returned and in the second table access, only the first ten records are returned.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}