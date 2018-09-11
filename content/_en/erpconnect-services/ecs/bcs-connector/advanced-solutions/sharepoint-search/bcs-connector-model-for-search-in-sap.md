---
layout: page
title: BCS Connector Model for Search in SAP
description: BCS Connector Model for Search in SAP
product: erpconnect-services
parent: sharepoint-search
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-connector-model-for-search-in-sap
---

External content types that are used for search require specific attributes within the BCS Model that are relevant for the search configuration and crawling process. It is recommended to create separate external content types for search.


In the following example, you will start by creating a new model ´SAP Search Model´ in the BCS Connector with its unique *LOB System* and *LOB System Instance*.

![BCS-Search-New-Model](/img/content/BCS-Search-New-Model.png){:class="img-responsive"}

When you specify the SharePoint connection, make sure that the Web application for the specified *SharePoint URL* is connected to the required SharePoint service applications listed here. 

- Business Data Connectivity Service
- Search Service Application
- ERPConnect Services
- Secure Store Service (if utilized with ERPConnect Services)

You can verify the service connections in the Web applications area of SharePoint Central Administration.

![BCS-Search-Web-Application-Connections](/img/content/BCS-Search-Web-Application-Connections.png){:class="img-responsive"}