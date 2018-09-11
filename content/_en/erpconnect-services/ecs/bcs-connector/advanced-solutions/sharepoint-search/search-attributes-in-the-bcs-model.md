---
layout: page
title: Search Attributes in the BCS Model
description: Search Attributes in the BCS Model
product: erpconnect-services
parent: sharepoint-search
permalink: /:collection/:path
weight: 4 
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-search-attributes-in-the-bcs-model
---

| **Attribut**                                              | **Beschreibung**                                                                                                                                                                                                                                                                                                       |
|-----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **IsCrawlable**<br> (Entity)                              | Can be selected by the user in the BCS Connector. Enables the crawling of the entity in the external system.                                                                                                                                                                                                           |
| **ShowInSearchUI**<br>  (LobSystemInstance)               | Is defined by the BCS Connector in the model, if the  *IsCrawlable* checkbox was selected. Enables the selection and crawling of a specific LOB System Instance.                                                                                                                                                       |
| **Title**<br> (Entity)                                    | Can be selected by the user in the BCS Connector. Enables the selection of an entity field which will be shown as a link in the search results.                                                                                                                                                                        |
| **RootFinder**<br> (Finder MethodInstance)                | Is defined by the BCS Connector in the model, if the  *IsCrawlable* checkbox was selected. Enables the use of the  *Finder* methode to crawl the external data (instead of defining an  *IdEnumerator* method).                                                                                                        |
| **UseClientCachingForSearch**<br> (Finder MethodInstance) | Is defined by the BCS Connector in the model, if the  *IsCrawlable* checkbox was selected. Suppresses the call of the  *SpecificFinde*r methoden during crawling, if the  *Finder* method returns all fields of the entity. For larger data volumes, this will significantly reduce the duration of the crawl process. |