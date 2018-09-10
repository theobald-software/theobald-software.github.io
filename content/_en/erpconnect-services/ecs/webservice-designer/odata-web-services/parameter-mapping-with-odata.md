---
layout: page
title: Parameter mapping with OData
description: Parameter mapping with OData
product: erpconnect-services
parent: odata-web-services
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=parameter_mapping_with_odata
---

Compared to SOAP web services the creation of mapping parameters with OData web services is somewhat restricted due to OData standards. 
For example the creation of new parameters using the standard operations *GetAll, Create, Update* and *Delete* is not supported. It is nevertheless possible to map the above created Custom Data Type *ReqItems* to the corresponding fields of function module BAPI_REQUISITION_CREATE as we will demonstrate in the next few steps.

![WSD-OData-Example15](/img/content/WSD-OData-Example15.png){:class="img-responsive"}

The input parameter is an entity. The SAP Function module expects a table or a list of this entity respectivley. 
Therefore we use the *Custom Code activity* to add the entity to a list to subsequently map this list to different tables of the function module.    

First create a workflow variable and name this variable *varItems*. As data type select List of *ReqItems*.  

![WSD-OData-Example16](/img/content/WSD-OData-Example16.png){:class="img-responsive"}

After that add the *Custom Code* activity above the *Execute Function* activity to the flow chart. Insert the following two lines of code in the configuration screen. This has the effect that the list is initialized and the entity is added to the list. 

varItems = new List();
varItems.Add(${Parameter:entity}); 

![WSD-OData-Example17](/img/content/WSD-OData-Example17.png){:class="img-responsive"}

Confirm your entries with *OK*. Variable varItems is now available for mapping as a list-based parameter.

![WSD-OData-Example18](/img/content/WSD-OData-Example18.png){:class="img-responsive"}

Now you can map the parameters in the *Execute Function Dialog box*. Scroll down to the input tables section and select table REQUSITION_ITEMS first. Select the previously created list-based parameter *varItems* in the Mapping column and open the mapping dialog window to map the parameters DOC_TYPE, MATERIAL, PLANT, QUANTITY, DELIV_DATE, ACCTASSCAT. You can use the *Automap* function for this.  


![WSD-OData-Example19](/img/content/WSD-OData-Example19.png){:class="img-responsive"}

![WSD-OData-Example20](/img/content/WSD-OData-Example20.png){:class="img-responsive"}

Confirm your entries with OK and select table REQUISITION_ACCOUNT_ASSIGNMENT to map the remaining parameter COST_CTR.


![WSD-OData-Example21](/img/content/WSD-OData-Example21.png){:class="img-responsive"}

![WSD-OData-Example22](/img/content/WSD-OData-Example22.png){:class="img-responsive"}

Confirm your entries with *OK*. Doing this we have successfully finished our OData web service for purchase requisition creation and can deploy it to the SharePoint server.

![WSD-OData-Example23](/img/content/WSD-OData-Example23.png){:class="img-responsive"}

![WSD-OData-Example24](/img/content/WSD-OData-Example24.png){:class="img-responsive"}

You can open the service url and display the EDMX document in your web browser afterwards.

![WSD-OData-Example25](/img/content/WSD-OData-Example25.png){:class="img-responsive"}

