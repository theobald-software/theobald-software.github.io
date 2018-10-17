---
ref: ecs-wd-odata-web-services-03
layout: page
title: Testing the webservice in a REST client
description: Testing the webservice in a REST client
product: erpconnect-services
parent: odata-web-services
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=testing_the_webservice_in_a_rest_client
---

To be able to continue working with the web service and add it to a SharePoint workflow for example we recommend that you check if the web service is callable and fully functional. Therefore we can use any open source REST-Client which can process HTTP methods and allows to set specific header values.  

Enter the web service URL in the REST-Client command line and replace the ending $metadata with the term Items. This is the command to get data access with the POST method.

Basic information about the CRUD-operations for lists and list elements within SharePoint 2013 REST API can be found e.g. under:
[https://msdn.microsoft.com/de-de/library/office/dn292552.aspx](https://msdn.microsoft.com/de-de/library/office/dn292552.aspx)

![WSD-OData-Example26](/img/content/WSD-OData-Example26.png){:class="img-responsive"}

![WSD-OData-Example27](/img/content/WSD-OData-Example27.png){:class="img-responsive"}

Choose HTTP-method POST in the REST-Client and add the following headers:

**Content-Type:** application/json

**Accept:** application/json

**Authorization:** Basic > Header created via the Basic *Auth* ribbon. Note that basic authorization has to be activated for your central administration site in the Internet Information Services (IIS).

![WSD-OData-Example28](/img/content/WSD-OData-Example28.png){:class="img-responsive"}

In the request body you have to define the parameter values you want to post with the web service. For testing purposes choose a few input values for every parameter (e.g. “MATERIAL”: “100-100”;...) and execute the web service. Note that all the values have to be in SAP compatible format. This means that e.g. any date has to be in format yyyymmdd and for some values like cost center leading zeros are required.  

Furthermore please note the OData regulations otherwise you might get a error message when executing the web service: [http://www.odata.org/documentation/odata-version-2-0/overview/](http://www.odata.org/documentation/odata-version-2-0/overview/)

![WSD-OData-Example29](/img/content/WSD-OData-Example29.png){:class="img-responsive"}

After successful execution of the service the posted values are shown in the response message.


![WSD-OData-Example31](/img/content/WSD-OData-Example31.png){:class="img-responsive"}

You can check then on your SAP system if the purchase requisition has been created (SAP table EBAN).

![WSD-OData-Example32_1](/img/content/WSD-OData-Example32_1.png){:class="img-responsive"}

