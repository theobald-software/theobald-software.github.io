---
ref: ecs-sharepoint-search-03
layout: page
title: Operations for Search in SAP
description: Operations for Search in SAP
product: erpconnect-services
parent: sharepoint-search
permalink: /:collection/:path
weight: 3 
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-operations-for-search-in-sap
---

In the following steps you will create the *Read Data* and *Read Data Record* operations. 

The *Read Data* operation (Finder method) is called by the crawler to read and index the external data. Since the *Read Data* operation returns the same fields of the entity as the *Read Data Record* operation (SpecificFinder method) it is not necessary to call the *Read Data Record* operation for every searchable item during the crawl process. For larger amounts of dataa, this will significantly reduce the duration of the crawl process.

The *Read Data Record* operation will be used to display a search result in the profile page.

The BCS Connector by default creates a *Limit Filter* of 1,000 records. This filter needs to be removed for search entities. 
In the *Edit Operation* dialog, select the *Limit Filter* and then select Delete.

![BCS-Search-Limit-Filter](/img/content/BCS-Search-Limit-Filter.png){:class="img-responsive"} 