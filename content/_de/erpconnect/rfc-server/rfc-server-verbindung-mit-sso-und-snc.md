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
Die RFCServer-Klasse funktioniert ähnlich wie die Klasse R3Connection, siehe [SAP-Verbindung mit SSO und SNC](../sap-verbindung/sso-mit-snc).

{: .box-note }
**Hinweis**: Beachten Sie die Voraussetzungen, wie in [SSO mit SNC - Voraussetzungen](../sap-verbindung/sso-mit-snc#voraussetzungen) beschrieben.

### SAP-Verbindung mit SSO und SNC
Die RFCServer-Klasse stellt die Eigenschaft *SNCSettings* zur Verfügung. 
Weisen Sie den Partnernamen in der SAP-Transaktion **SM59** (z.B. p:RFCServerSNC@THEOBALD) der Eigenschaft *OwnName* von *SNCSettings* zu. 

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
**Hinweis**: Wenn SNC mit Kerberos und Active Directory verwendet wird, muss das für den RFC-Server verwendete Active Directory Konto den korrekten Service Principal Name haben.

![RFCServer-AD](/img/content/RFCServer-AD.png){:class="img-responsive"}
