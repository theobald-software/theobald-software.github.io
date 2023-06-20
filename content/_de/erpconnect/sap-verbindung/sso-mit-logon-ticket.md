---
ref: ec-sap-connection-03
layout: page
title: Log On Ticket
description: SSO mit Log On Tickets
product: erpconnect
parent: sap-verbindung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sso-mit-logon-ticket
---

Ab Version 1.6 unterstützt ERPConnect Single-Sign-On-Szenarien mit SSO-Tickets. 

{: .box-note }
**Hinweis**: Um SSO zu verwenden, muss das SAP-System entsprechend [SAP-Dokumentation - Single Sign-On Configuration](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/48/ca0fe42fbb5c97e10000000a42189d/content.htm?no_cache=true) konfiguriert sein.

### Anmeldung mit SSO-Tickets

#### SSO-Ticket erzeugen
Um ein SSO-Ticket zu erzeugen bietet die *ParseConnectionString*-Klasse die Methode *GetSSOTicket*. <br>
Die Anmeldedaten müssen einmalig eingegeben werden, um ein Ticket bei SAP zu beantragen, siehe folgenden Beispielcode:

```csharp
using var conn = new R3Connection
{
    Host = "sap-erp-as05.example.com",
    SystemNumber = 7,
    Client = "800",
    Language = "DE",
    UserName = "alice",
    Password = "pw",
};
​
string ticket = conn.GetSSOTicket();
```

#### Logon
Wenn ein Ticket vorhanden ist, kann der Logon über die Funktion *OpenSSO* erfolgen.<br>
Benutzername und Passwort müssen nicht übergeben werden, da der Account implizit durch das Ticket vorgegeben wird:

```csharp
using var conn = new R3Connection
{
    Host = "sap-erp-as05.example.com",
    SystemNumber = 7,
    Client = "800",
    Language = "EN",
    LogonTicket = ticket,
};
​
conn.Open();
```