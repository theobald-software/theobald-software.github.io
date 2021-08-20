---
ref: ec-rfc-server-03
layout: page
title: SSO und SNC
description: SAP-Verbindung mit SSO und SNC
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-server-verbindung-mit-sso-und-snc
---

Die RFCServer-Klasse unterstützt eine SAP-Verbindung über SSO und SNC.<br>
Die RFCServer-Klasse bietet die Eigenschaft SNCSettings, ähnlich zur Klasse R3Connection, siehe [SAP-Verbindung mit SSO und SNC]().<br>
Die Eigenschaft OwnName muss gesetzt werden. Zusätzlich eine der Eigenschaften SNCMechanism und LibraryPath must auch gesetzt werden. 

<details>
<summary>[C#]</summary>
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

Es ist wichtig, dass der Partner Name in der SAP-Transaction SM59 (z.B. p:RFCServerSNC@THEOBALD) der gleiche ist wie RFCServer.SNCSettings.OwnName. 

![RFCServer-Destination](/img/content/RFCServer-Destination.png){:class="img-responsive"}

Wenn SNC mit Kerberos und Active Directory verwendet wird, muss das für den RFC server verwendete Active Directory Konto den richtigen Service Principal Name haben.


![RFCServer-AD](/img/content/RFCServer-AD.png){:class="img-responsive"}
