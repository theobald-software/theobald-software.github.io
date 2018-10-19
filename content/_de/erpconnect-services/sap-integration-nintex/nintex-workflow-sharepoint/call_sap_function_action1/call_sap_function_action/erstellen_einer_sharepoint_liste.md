---
ref: ecs-sin-nis-creating-purchase-requisitions-01
layout: page
title: Erstellen einer SharePoint Liste
description: Erstellen einer SharePoint Liste
product: erpconnect-services
parent: mit_call_sap_function_action
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=erstellen_einer_sharepoint_liste
---

Erstellen Sie eine SharePoint-Liste mit den folgenden Eigenschaften:
 

Typ = **Custom List**

Name = **Purchasing Requests**


Fügen Sie die folgenden Spalten zur Liste hinzu:

**Material**: Single line of text (benennen Sie die Titel-Zeile in Material um), required

**Plant**: Single line of text, required

**Material Group**: Single line of text, required

**Qty**: Number, required

**Delivery Date**: Date only

**Cost Center**: Single line of text, required

**Purchase Requisition**: Single line of text

**Priority**: Choice: High (1), Normal (2), Low (2)

**Due Date**: Date only

**Notes**: Multiple lines (3) of text

![ECS-Nintex-Scenario-SAPFunction-1](/img/content/ECS-Nintex-Scenario-SAPFunction-1.png){:class="img-responsive"}