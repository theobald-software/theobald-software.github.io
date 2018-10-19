---
ref: ecs-sharepoint-search-02
layout: page
title: Enitity for Search in SAP
description: Enitity for Search in SAP
product: erpconnect-services
parent: sharepoint-search
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-enitity-for-search-in-sap
---

In the example, we want to enable the SharePoint user to search for SAP customer data. You will define a new entity which is based on SAP function module SD_RFC_CUSTOMER_GET.

In order for the entity to be searchable, you have to select the *Crawlable* checkbox.

![BCS-Search-Entity](/img/content/BCS-Search-Entity.png){:class="img-responsive"}

In the next step, you will select the fields for the entity. Only select the fields that you want to be able to search for or that you want to see in the search results. The number of selected fields has an impact on the duration of the crawl process.

Specify one of the entity fields as the title field. The title field will later be displayed as a link in the search results. When the link is selected, the profile page of the external data record will be shown.

Select the button (…) next to the field that you want to specify as the title field, in our example we will use the field *KUNNR*.

In the following dialog, select the *Options* tab, then select the *Set as Title* checkbox.

![BCS-Search-Set-Title](/img/content/BCS-Search-Set-Title.png){:class="img-responsive"}