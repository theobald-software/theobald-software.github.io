---
layout: page
title: Creating a new OData web service
description: Creating a new OData web service
product: erpconnect-services
parent: odata-web-services
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=creating_a_new_odata_web_service
---

To create a new OData web service you first have click *New* on the overview screen and select the option *Creates OData specific web service* in the dialog window. 

![WSD-OData-Example1](/img/content/WSD-OData-Example1.png){:class="img-responsive"}

As an example scenario we want to design a web service that enables the user to create purchase requisitions in the SAP system. Name the webservice *PurchaseRequisiton*. 


![WSD-OData-Example2](/img/content/WSD-OData-Example2.png){:class="img-responsive"}


After configuring the SAP and SharePoint connection create a new Custom Data Type. For creating purchase requisitions in SAP we use the standard BAPI BAPI_REQUISITION_CREATE. Use the import button to import the following parameters in the *New Custom Data Type Dialog*. These parameters are the minimum required fields for creating purchase requisitions in SAP. 

From table REQUISITION_ITEMS import the following fields:

**DOC_TYPE**      (Document Type)<br>
**MATERIAL**        (Material)<br>
**PLANT**              (Plant)<br>
**QUANTITY**       (Quantity)<br>
**DELIV_DATE**    (Delivery Date)<br>
**ACCTASSCAT**  (Account Assignment Category)<br>


![WSD-OData-Example3](/img/content/WSD-OData-Example3.png){:class="img-responsive"}


![WSD-OData-Example4](/img/content/WSD-OData-Example4.png){:class="img-responsive"}

![WSD-OData-Example5](/img/content/WSD-OData-Example5.png){:class="img-responsive"}

![WSD-OData-Example6](/img/content/WSD-OData-Example6.png){:class="img-responsive"}

![WSD-OData-Example7](/img/content/WSD-OData-Example7.png){:class="img-responsive"}


Save the entries and manually add the item COST_CTR (Cost Center). We need this item for the account assignment. 


![WSD-OData-Example8](/img/content/WSD-OData-Example8.png){:class="img-responsive"}


Name the data type *ReqItems* and save your entries with *OK*.

![WSD-OData-Example9](/img/content/WSD-OData-Example9.png){:class="img-responsive"}


After that create a new entity in the overview screen.

![WSD-OData-Example10](/img/content/WSD-OData-Example10.png){:class="img-responsive"}

As Custom Data Type use the above created data type *ReqItems*. Because we only create and don’t read data it is not necessary to use a specific primary key. Just select one of the items in the list. For *Entity Set Name* choose the name *Items*. For creating purchase requisitions we only need the CRUD operation *Create*.  Double-click *Create* and you will come to the WebService Designer construction screen. 


![WSD-OData-Example11](/img/content/WSD-OData-Example11.png){:class="img-responsive"}


![WSD-OData-Example12](/img/content/WSD-OData-Example12.png){:class="img-responsive"}



Search for and select BAPI_REQUISITION_CREATE in the *Search Function Dialog* and close the dialog window with *OK*. We will take a closer look on the parameter mapping in the next chapter. 

![WSD-OData-Example13](/img/content/WSD-OData-Example13.png){:class="img-responsive"}

![WSD-OData-Example14](/img/content/WSD-OData-Example14.png){:class="img-responsive"}
