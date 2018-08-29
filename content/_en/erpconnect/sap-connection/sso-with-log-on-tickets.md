---
layout: page
title: SSO with Log On Tickets
description: Description about SSO with Log On Tickets
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 2
lang: en_GB
---

From version 1.6 on ERPConnect also supports SSO scenarios. The SAP system must be configured for the use of SSO, please refer to the SAP documentation for further details.

To create an SSO ticket the R3Connection class provides the method GetSSOTicket(…). All logon data must be provided once to create the ticket as shown in the code below.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}

using(ERPConnect.R3Connection cont = new ERPConnect.R3Connection())
{
    cont.Host = "duncan"; 
    cont.SystemNumber = 7; 
    cont.Client = "800"; cont.Language = "EN"; 
    cont.UserName = "Theobald"; 
    cont.Password = "pw"; 
       
    string ssoticket = cont.GetSSOTicket();
}


{% endhighlight %}
</details>


If there is a ticket available (created by ERPConnect or another application) use OpenSSO(…) to establish the connection without user credentials:

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}

using(ERPConnect.R3Connection conts = new ERPConnect.R3Connection())
{
    conts.Host = "duncan"; 
    conts.SystemNumber = 7; 
    conts.Client = "800"; conts.Language = "EN"; 
       
    conts.OpenSSO(ssoticket);
}


{% endhighlight %}
</details>
