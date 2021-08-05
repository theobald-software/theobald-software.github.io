---
ref: ecs-getting-started-creating-a-new-model-01
layout: page
title: New Entity
description: New Entity
product: erpconnect-services
parent: creating-a-new-model
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-new-entity
---

An entity in your model describes the data structure of a business object. Using the BCS Connector, you can define a new entity based on either a table or a function module in SAP.

After you save a model to the SharePoint BCS, each entity is represented as an external content type (ECT).

To define a new entity, select the New button below the *Entities* field.

![BCS-Generic-New-Entity-01](/img/content/BCS-Generic-New-Entity-01.png){:class="img-responsive"}

In the *New Entity* wizard, select the SAP object type that your new entity will be based on.

**Table** - Choose this object type if your entity is represented by a table or a view in your SAP system.<br>
**Function** -	Choose this object type if your entity is represented by a function module or BAPI in your SAP system.

Select the *Next* button to proceed.

In the following screen of the *New Entity* wizard, you can search for the object in the SAP system that represents your entity. Based on your previous selection, this can be a table or a function.

In the *Type* field, specify the name of the object in the SAP. You can use the wildcard characters percent (%) or asterisk ( * ) as placeholders for zero or more unknown characters or the underscore ( _ ) for a single unknown character in your search criteria.

Select the *Search* button to see a list of the objects that match your search criteria.

![BCS-Generic-New-Entity-02](/img/content/BCS-Generic-New-Entity-02.png){:class="img-responsive"}

Select the wanted object from the list. For table objects, this will complete the *New Entity* wizard and you can select the *Finish* button. 

For function objects, you will select the *Next* button and then choose the function parameter which represents the structure of the entity. Select *Finish* to complete the *New Entity* wizard.