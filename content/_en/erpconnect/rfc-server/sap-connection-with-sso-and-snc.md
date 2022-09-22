---
ref: ec-rfc-server-03
layout: page
title: SSO and SNC
description: SAP connection with SSO and SNC
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=rfc-server-connection-with-sso-and-snc
---

The RFCServer class supports SAP connection with SSO and SNC.<br>
The RFCServer class works similarly to the R3Connection class, see [ERPConnect with SSO with SNC](../sap-connection/sso-with-snc).

{: .box-note }
**Note**: Note the prerequisites described in [SSO with SNC - Prerequisites](../sap-connection/sso-with-snc#prerequisites) beschrieben.


### SAP Connection with SSO and SNC
The RFCServer class provides the property *SNCSettings*. 
Assign the partner name in the SAP transaction **SM59** (e.g. p:RFCServerSNC@THEOBALD) to the property *OwnName* of *SNCSettings*.
  
```csharp
RFCServer rfcServer = new RFCServer();
rfcServer.GatewayHost = "sap-erp-as05.example.com";
rfcServer.GatewayService = "sapgw00";
rfcServer.ProgramID = "SNCTEST";
rfcServer.SNCSettings.Enabled = true;
rfcServer.SNCSettings.Mechanism = SNCMechanism.Kerberos5;
rfcServer.SNCSettings.OwnName = "p:RFCServerSNC@THEOBALD";
 
rfcServer.Protocol = ClientProtocol.RFC;
rfcServer.CanReceiveIdocs = true;
rfcServer.IsUnicode = true;
```
  
![RFCServer-Destination](/img/content/RFCServer-Destination.png){:class="img-responsive"}

{: .box-note }
**Note**: If SNC is used with Kerberos and Active Directory, the Active Directory account used for the RFC server must have a Service Principal Name corresponding to the partner name in SAP.  
  
![RFCServer-AD](/img/content/RFCServer-AD.png){:class="img-responsive" height="200px" width="350px"}  
      