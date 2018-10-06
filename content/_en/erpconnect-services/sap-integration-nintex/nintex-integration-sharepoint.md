---
layout: page
title: Nintex Workflow for SharePoint
description: Nintex Workflow for SharePoint
product: erpconnect-services
parent: sap-integration-nintex
childidentifier: nintex-integration-sharepoint
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=nintex-integration-for-sharepoint
---

This section provides different scenarios of how Nintex Workflow can work together with ERPConnect Services for an SAP-SharePoint integration.

**BCS Connector / Business Connectivity Services**

For SharePoint solutions that utilize the Business Connectivity Services and external lists to access SAP data, the list actions (**Query List, Create Item, Update Item, Delete Item**) that are provided with Nintex Workflow can be used to integrate SAP data into your workflow scenario. The advantage of this integration option is that the list actions in Nintex Workflow are easy to configure and utilizing external lists in SharePoint can be useful in other scenarios. Using the **BCS Connector** which is delivered with ERPConnect Services, you can easily create an external content type for an SAP table or function module with just a few steps and deploy it directly to SharePoint. 

**Custom Actions provided by ERPConnect Services for Nintex Workflow**

With ERPConnect Services, your SharePoint solution can also access SAP data directly, without the use of the Business Connectivity Services layer or external lists. Within a Nintex Workflow, you can use any of the following custom actions that are delivered with ERPConnect Services:


- **Call SAP Function Action**: This custom action enables read/write access to your SAP data. The custom action can be used to call any remote-enabled SAP function module or BAPI to enable a business process integration scenario between SharePoint and SAP. The action can be configured easily without any programming or complex syntax.
- **Read SAP Table Action**: You can use this custom action to read data from any SAP table and use it in your workflow solution.
- **Query XQL Action**: This custom action provides the combined functionality of the other two custom actions that are outlined above, based on the query language XQL. The Query XQL action offers a very flexible way of interacting with SAP, and you can use the XQL Explorer tool which is provided with ERPConnect Services to construct and verify your XQL statement. Further, the result of the Query XQL action is formatted as XML data and can be parsed using the standard Query XML action in Nintex Workflow.

**WebService Designer / Web Services**

Finally, with the standard Nintex Workflow action **Call Web Service** you can invoke a web service (WCF or OData) for direct access to SAP data and processes. The **WebService Designer** which is delivered with ERPConnect Services allows you to create and deploy such a web service in SharePoint.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}