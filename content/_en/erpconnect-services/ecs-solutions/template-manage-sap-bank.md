---
ref: ecs-solutions-01
layout: page
title: Template- Manage SAP Bank
description: Template- Manage SAP Bank
product: erpconnect-services
parent: ecs-solutions
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-template-manage-sap-bank
---

This sample is a Visual Studio 2012 solution that creates a BDC / BCS model (external content type) in SharePoint connected to SAP using ERPConnect Services Runtime (ECS).

The BCS model provides read and write access to the SAP object Bank, so viewing and editing bank information in the SAP system is possible in the external list in SharePoint.

![ECS-Bank-VS-BCS-Sample](/img/content/ECS-Bank-VS-BCS-Sample.png){:class="img-responsive"}

To use this template, at first make sure that you created an ECS application service in SharePoint. This BCS model uses the default ECS application service. 

![ECS-Bank-Application-Service](/img/content/ECS-Bank-Application-Service.png){:class="img-responsive"}

Deploy the BCS model to SharePoint. The external content type SAPBank is now available in SharePoint. 

![ECS-Bank-External-Bank-Entity](/img/content/ECS-Bank-External-Bank-Entity.png){:class="img-responsive"}

Create an external list based on the SAPBank external content type.

![ECS-Bank-SP-External-List-List](/img/content/ECS-Bank-SP-External-List-List.png){:class="img-responsive"}

Now you can view Bank items  ...

![ECS-Bank-SP-External-List-View](/img/content/ECS-Bank-SP-External-List-View.png){:class="img-responsive"}

... and edit Bank items. 

![ECS-Bank-SP-External-List-Edit](/img/content/ECS-Bank-SP-External-List-Edit.png){:class="img-responsive"}

You can download the sample [here](https://cdn-files.theobald-software.com/help/ECS/SAPBDCSample.zip) (Visual Studio 2012).