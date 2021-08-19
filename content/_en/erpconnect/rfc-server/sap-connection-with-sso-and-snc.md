---
ref: ec-rfc-server-02
layout: page
title: SSO and SNC
description: SAP connection with SSO and SNC
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=rfc-server-connection-with-sso-and-snc
---

The RFCServer class supports SAP Connection with SSO and SNC.
The RFCServer class provides the property SNCSettings, similar to the R3Connection class, refer to [ERPConnect with SSO with SNC](../sap-connection/sap-connection-with-sso-and-snc).
The property OwnName must be set. Additionally one of the properties SNCMechanism and LibraryPath must be set.  
  
<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
RFCServer rfcServer = new RFCServer();
rfcServer.GatewayHost = "reutlingen";
rfcServer.GatewayService = "sapgw00";
rfcServer.ProgramID = "SNCTEST";
rfcServer.SNCSettings.Enabled = true;
rfcServer.SNCSettings.Mechanism = SNCMechanism.Kerberos5;
rfcServer.SNCSettings.OwnName = "p:RFCServerSNC@THEOBALD";
 
rfcServer.Protocol = ClientProtocol.RFC;
rfcServer.CanReceiveIdocs = true;
rfcServer.IsUnicode = true;
{% endhighlight %}
</details>  
  
It's important that the partner name in the SAP transaction SM59 (e.g. p:RFCServerSNC@THEOBALD) is the same as the RFCServer.SNCSettings.OwnName.  
  
![RFCServer-Destination](/img/content/RFCServer-Destination.png){:class="img-responsive" height="500px" width="550px"}
  
If SNC is used with Kerberos and Active Directory, the Active Directory account used for the RFC server must have the right Service Principal Name.  
  
![RFCServer-AD](/img/content/RFCServer-AD.png){:class="img-responsive" height="200px" width="350px"}  
      