---
layout: page
title: Purchase Order Release in SAP
description: Purchase Order Release in SAP
product: erpconnect-services
parent: extending-a-solution-in-visual-studio
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-purchase-order-release-in-sap
---

This example assumes that a purchase order release procedure has been configured in your SAP system. A release procedure in SAP can be used to define the conditions (for example total value exceeds USD 10,000) for the approval (release) of a purchase order before it can be processed further. For the SAP user, this is visible on the 'Release strategy' tab of the Purchase Order display screen.

![BCS-PO-VS-SAP](/img/content/BCS-PO-VS-SAP.png){:class="img-responsive"}

SAP provides a set of standard interfaces in the form of BAPIs (Business APIs) to access purchase order data remotely. The BAPI function modules you will use in this example are:

**BAPI_PO_GETITEMSREL** -	Returns a list of purchase orders that are subject to release. You will use this function module for the *Finder* method.<br>
**BAPI_PO_GETITEMS** -	Returns one or more purchase orders, based on selection criteria. You will use this function module for the *Specific Finder* method.<br>
**BAPI_PO_RELEASE** -	Releases a purchase order in SAP. You will use this function module for the custom *Release* method.