---
ref: ec-sap-connection-02
layout: page
title: SNC
description: SNC
product: erpconnect
parent: authentifizierung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sso-und-snc
---

Ab der Version 4.1.59 können auch SNC Verbindungen genutzt werden. Die benötigten Parameter können Sie wie in den beiden unten aufgeführten Codebeispielen an das R3Connection-Objekt übergeben.


Das R3-Connection Objekt ermittelt auf Basis der Einstellung *SNCMechanism*  selbständig die benötigte SNC DLL. Mit der Eigenschaft *SNCLibraryPath* können Sie den Pfad zur SNC DLL selbst angeben. In diesem Fall wird die automatische Ermittlung der DLL deaktiviert und die Einstellung für *SNCMechanism* ignoriert. 

Bei der Angabe des *SNCMechanism*  können Sie zwischen dem NTLM und dem Kerberos5 Mechanismus wählen. 

Sie können im Quellcode alle entsprechenden Einstellungen vornehmen. Wenn Sie die voreingestellten Eigenschaften und die SNC Verbindung nicht nutzen wollen, so können Sie diese über die Eigenschaft *SNCEnabled* = false deaktivieren, ohne die übrigen SNC Parameter ändern zu müssen.

Zu den Installationsvoraussetzungen lesen Sie bitte unseren Artikel SNC Installation in der Kowledge Base.

**Mit Angabe des SNC Mechanismus (ERPConnect Version 4.1.1.0):**

<details>
<summary>[C#]</summary>
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

**Mit individuellem Pfad zur SNC DLL (ERPConnect Version 4.1.1.0):**

<details>
<summary>[C#]</summary>
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

**Mit Angabe des SNC Mechanismus (ERPConnect Version 4.2.3):**

<details>
<summary>[C#]</summary>
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

**Mit individuellem Pfad zur SNC DLL (ERPConnect Version 4.2.3):**

<details>
<summary>[C#]</summary>
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

Mit der neuen Eigenschaft "QualityOfProtection" lässt sich die bevorzugte Sicherheitsstufe setzen. Genaueres dazu findet sich hier: [http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm)