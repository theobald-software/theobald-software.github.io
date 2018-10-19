---
ref: ec-sap-connection-02
layout: page
title: Log On Ticket
description: Log On Ticket
product: erpconnect
parent: authentifizierung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sso-mit-logon-ticket
---

Ab der Version 1.6 unterstützt ERPConnect auch Single-Sign-On-Szenarien mit SSO-Tickets. Für SSO muss das jeweilige SAP-System entsprechend konfiguriert sein. Werfen Sie dazu bitte einen Blick in die jeweiligen SAP-Dokumentationen.

Um ein SSO-Ticket zu erzeugen bietet die *R3Connection*-Klasse die Methode GetSSOTicket(…). Es müssen die Anmeldedaten vorhanden sein, um ein Ticket beim SAP zu beantragen wie im folgenden Code gezeigt.

<details>
<summary>[C#]</summary>
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

Falls ein Ticket vorhanden ist (entweder weil es einmal erzeugt wurde, oder von einer anderen Applikation kommt), kann der Logon mit Hilfe der Funktion *OpenSSO*(…) erfolgen, ohne Benutzername und Passwort übergeben zu müssen, da der Account implizit durch das Ticket vorgegeben wurde.

<details>
<summary>[C#]</summary>
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