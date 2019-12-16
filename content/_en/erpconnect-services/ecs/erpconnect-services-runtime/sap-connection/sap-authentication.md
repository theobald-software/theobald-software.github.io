---
ref: ecs-runtime-sap-connection-02
layout: page
title: SAP Authentication
description: SAP Authentication
product: erpconnect-services
parent: sap-connection
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-sap-authentication
---

ERPConnect Services Runtime (ECSR) offers the following authentication options for the SAP connection, that are available while creating the ECS Service Application: 

![ECS-SAP-Authentication](/img/content/ECS-SAP-Authentication.jpg){:class="img-responsive" }

**Secure Store Services**<br>
ECSR will use the SharePoint Secure Store Services  to get the SAP credentials of the logged SharePoint user.
In this case use the option **Secure Store Application ID** to select an existing Secure Store Application.

**Technical Access (SAP Username and Password)**<br>
Use this option and set the the fields **Username** and **Password**.

**SNC / Partner Name**<br>
When your SAP system is configured to be accessed via SSO with SNC, select SNC and set Partner Name.
Partner Name has the form: **p:sapservicensp@theobald-software.com**. 

Be sure that the c2WTS service is activated in SharePoint under "services on server" and as windows service.
C2WTS must be configured to define which Active Directory users and groups have access to the service. 

**SSO Ticket**
ECSR can use an SAP SSO Ticket. Either use the option SSO Ticket and set the field Ticket Issuer URL or check the option SSO ticket (**pass-through**). For the last case refer to the following C# code sample that shows how to get an SSO ticket using ERPConnect. After that the SSO ticket is used to create an ERPConnectServicesClient:

```
R3Connection con = new R3Connection("sbi.theobald-software.com", 0, "Elzein", "Password", "EN", "800");
string ssoTicket = con.GetSSOTicket();
ERPConnectServiceClient client = new ERPConnectServiceClient("ECS SAP SOO Ticket", ssoTicket);
```