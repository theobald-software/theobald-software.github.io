---
layout: page
title: SAP Connection with SSO and SNC
description: SAP Connection with SSO and SNC
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sap-connection-with-sso-and-snc
---


SNC connections can be used starting with version 4.1.59. You can pass the necessary parameters to the object as shown in the code examples below.

The R3 connection object determined on the basis of the setting of SNCMechanism the needed SNC DLL independently. With the SNCLibraryPath property you can specify the path to the SNC DLL manually. In this case the automatic detection of the DLL is disabled and the setting for SNCMechanism will be ignored.

If you specify the SNCMechanism, you can choose between the NTLM and the Kerberos5 mechanism. 

Using the NTLM mechanism the SSO authentication is done via a challenge-response authentication between the client and the server. With Kerberos authentication method the authentication will be done by a Kerberos server. It will be called by the client to create a ticket. With the ticket the client authenticates himself to the server. If the Kerberos authentication is not possible, NTLM is used automatically.

You can make all the appropriate settings in the source code. If you do not want to use the SNC properties to create a connection just set SNCEnabled to false. It disables all settings without changing the other SNC parameter. 

To find more detail information about the requirements to use SNC SSO please check our [Knowledgebase](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).

**With setting the SNC Mechanism (ERP Connect version 4.1.1.0):**

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}


using (R3Connection con = new R3Connection()) 
{
con.Host = "duncan";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCPartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCMechanism = SNCMechanism.NTLM;
con.SNCEnabled = true;
con.Open();
// do something with con
}

{% endhighlight %}
</details>

**With individual SNC DLL path (ERP Connect version 4.1.1.0):**

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}

using (R3Connection con = new R3Connection())
{
con.Host = "duncan";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCPartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCLibraryPath = @"C:\Windows\SysWOW64\sncgss32.dll";
con.SNCEnabled = true;
con.Open();
// do something with con
}


{% endhighlight %}
</details>

**With setting the SNC Mechanism (ERP Connect version 4.2.3):**

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}


using (R3Connection con = new R3Connection())
{
con.Host = "duncan";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCSettings.Enabled = true;
con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCSettings.Mechanism = SNCMechanism.NTLM;
con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;
con.Open();
// do something with con
}

{% endhighlight %}
</details>


**With individual SNC DLL path(ERPConnect Version 4.2.3):**

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}


using (R3Connection con = new R3Connection())
{
con.Host = "duncan";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCSettings.Enabled = true;
con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCSettings.LibraryPath = @"C:\Windows\SysWOW64\sncgss32.dll";
con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;
con.Open();
// do something with con
}

{% endhighlight %}
</details>


With the new property "QualityOfProtection"  you can set your desired security level. For detail information go [here](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm).
