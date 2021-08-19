---
ref: ec-sap-connection-03
layout: page
title: Log On Ticket
description: Log On Ticket
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

### Beispiel
Um ein SSO-Ticket zu erzeugen bietet die *R3Connection*-Klasse die Methode *GetSSOTicket*. 
Die Anmeldedaten müssen einmalig eingegeben werden, um ein Ticket bei SAP zu beantragen, siehe folgenden Beispielcode:

<details>
<summary>[Klicken Sie hier, um das C# Beispiel zu öffnen]</summary>
{% highlight csharp %}
using(ERPConnect.R3Connection cont = new ERPConnect.R3Connection())
{
    cont.Host = "duncan";  
    cont.SystemNumber = 7;  
    cont.Client = "800";  
    cont.Language = "DE";  
    cont.UserName = "Theobald";  
    cont.Password = "pw";  
  
    string ssoticket = cont.GetSSOTicket();
}
{% endhighlight %}
</details>

Wenn ein Ticket vorhanden ist, kann der Logon über die Funktion *OpenSSO* erfolgen.
Benutzername und Passwort müssen nciht übergeben werden, da der Account implizit durch das Ticket vorgegeben wird:

<details>
<summary>[Klicken Sie hier, um das C# Beispiel zu öffnen]</summary>
{% highlight csharp %}
using(ERPConnect.R3Connection conts = new ERPConnect.R3Connection())
{
    conts.Host = "duncan";  
    conts.SystemNumber = 7;  
    conts.Client = "800";  
    conts.Language = "DE";  
    
    conts.OpenSSO(ssoticket);
}
{% endhighlight %}
</details>