---
layout: page
title: Logging on to SAP
description: Logging on to SAP
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=logging-on-to-sap
---

There are two different ways to log on to the SAP system when using ERPConnect. 
A connection to a single application server can be established, or a connection can be made via Load Balancing. 
Either way, the following parameter must be provided:

* Name of the user (UserName property)
* Password (Password property)
* Language (Language property)
* Client (Client property)

If you want to use the direct login to an application server, two further properties must be set:

* Name of the application server (Host property)
* System number between 0 and 99 (SystemNumber property)

If you have all properties filled in correctly, you can use the Open method to establish the connection. 
Please call Open(true) for Load Balancing, or Open(false) for a single server login. 
For the following code samples the ERPConnect.dll class library must be added as a reference to the project.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using(R3Connection con = new R3Connection())
{
    con.UserName = "erpconnect"; 
    con.Password = "pass"; 
    con.Language = "DE"; 
    con.Client = "800"; 
    con.Host = "hamlet"; 
    con.SystemNumber = 11;  
      con.Protocol = ClientProtocol.NWRFC;   // Optional: If the NW RFC libraries are used.
    
    con.Open(false);
}
{% endhighlight %}
</details>

Load Balancing

**If you want to log on via Load Balancing, three properties are necessary:**

* Name of the message server (MessageServer property)
* Name of the group (LogonGroup property, e.g. PUBLIC)
* System ID (SID property, e.g. MBS)


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using(R3Connection con = new R3Connection())
{
    con.UserName = "erpconnect"; 
    con.Password = "pass"; con.Language = "DE"; 
    con.Client = "800"; 
      con.Language = "DE";
       
    con.MessageServer = "hamlet"; 
    con.LogonGroup = "PUBLIC"; 
    con.SID = "EC5";
      con.Protocol = ClientProtocol.NWRFC;   // Optional: If the NW RFC libraries are used.  
    con.Open(true);
}
{% endhighlight %}
</details>


**Router**

If you access your SAP system via Router, you should set the router string just 
before the host name or the message server.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using(R3Connection con = new R3Connection())
{
    con.UserName = "erpconnect"; 
    con.Password = "pass"; 
    con.Language = "DE"; 
    con.Client = "800"; 
    con.Host = "/H/lear.theobald-software.com/H/" + "hamlet"; 
    con.SystemNumber = 11;  
      con.Protocol = ClientProtocol.NWRFC;   // Optional: If the NW RFC libraries are used.

    con.Open(false);
}
{% endhighlight %}
</details>


**ConnectionString**

You can call the method R3Connection.Open(string connectionString) using a connection string.
For the connection with a single application server use the following format:
"USER=YourUser LANG=EN CLIENT=800 SYSNR=00 ASHOST=ecc.theobald-software.com PASSWD=YourPassword"

The default Client Protocol is the RFC Protocol. If you want to use the new NW RFC Protocol set the following line:

 **con.Protocol = ClientProtocol.NWRFC;**

**Tipp:** If you use the constructor of the R3Connection class to provide the login properties, 
you can save some lines of code (see Retrieving Customer Information by calling SD_RFC_CUSTOMER_GET ).





