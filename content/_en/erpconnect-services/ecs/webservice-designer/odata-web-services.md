---
layout: page
title: OData web services
description: OData web services
product: erpconnect-services
parent: webservice-designer
childidentifier: odata-web-services
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=odata_web_services
---

Besides creating SOAP web services it is possible with WebService Designer to create web services in **OData** format and to deploy them to SharePoint. OData is a common communication protocol that is used as an open standard for data communication with RESTful web services. Web services based on REST (**R**epresentational **S**tate **T**ransfer) follow specific design principles e.g. explicitly use the specific HTTP methods POST, GET, PUT and DELETE and provide data in XML or JSON format.     
Whereas in SOAP web services WSDL documents are processed, OData web services expose EDMX documents containing all metadata. OData format is particularly suited for web service applications that require a uniform, flexible, general purpose interface for exposing CRUD (Create Retrieve Update Delete) operations on a tabular data model to clients.   

On the other hand due to its clearly defined structure OData is subject to some restrictions which is also reflected in the designing of OData web services. 
If you should use a web service in SOAP or OData format will depend on your individual project requirements. For SharePoint workflows e.g. only RESTful web services can be used (for this, see the following knowledge base article: [Building an OData web service in ECS WebService Designer and using it in a SharePoint 2013 workflow](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/139/53/building-an-odata-web-service-in-ecs-webservice-designer-and-using-it-in-a-sharepoint-2013-workflow)). 

In the following chapters we show you how to build OData web services in WebService Designer. 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}