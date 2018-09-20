---
layout: page
title: Zielsystem
description: Zielsystem
product: erpconnect
parent: sap-verbindung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=zielsystem
---

Das SAP-Zielsystem kann ein Application Server oder ein Message Server (Load Balancing) sein.

**Anmeldung am SAP Application Server** 

Im Fall der direkten Anmeldung am Applikationsserver werden darüber hinaus noch folgende Angaben benötigt: 

**Host** - 	Name oder IP-Adresse des SAP Application Servers.<br>
**System** - 	Die SAP Systemnummer (Eine Zahl zwischen 00…99).

**Anmeldung am SAP Message Server (Load Balancing)**

Im Fall von einer Anmeldung an einem Message Server (Load Balancing) sind  

**Message Server** - Name oder IP-Adresse des SAP Message Servers.<br> 
**Group** - Gruppe, i.d.R. ist das PUBLIC <br>
**SID** - dreistelliges Systemkürzel, z.B. MBS<br>

SAP Library: [Load Balancing]()

**Anmeldung über SAP-Router**

Falls Sie auf das SAP-System über einen SAP-Router zugreifen möchten, setzen Sie den Routerstring unmittelbar vor dem Hostnamen bzw. dem Message-Server. 

SAP Library: [SAP-Router]()

**Beispiel mit einem SAP Application Server** 

Nun kann mit der Methode Open die Verbindung aufgebaut werden. An Open ist noch eine boolsche Variable zu übergeben (True=Load Balancing, false=einzelner Server). Für die folgenden Code-Beispiele muss die ERPConnect.dll in das aktuelle Projekt als Referenz eingebunden werden. 

<details>
<summary> [C#] </summary>
{% highlight csharp %}
using(R3Connection con = new R3Connection())  
{   
    con.UserName = "erpconnect";  
    con.Password = "pass";  
    con.Language = "DE";  
    con.Client = "800";  
    con.Host = "hamlet";  
    con.SystemNumber = 11;  
    con.Open(false);
}
{% endhighlight %}
</details>

**Tipp**: Der Konstruktor der R3-Connection-Klasse kann dazu dienen, bereits gleich die Anmeldedaten mitzugeben. Das spart ein paar Code-Zeilen, siehe Kapitel [Kundeninfos abrufen mit SD_RFC_CUSTOMER_GET]().  

**Beispiel mit einem SAP Message Server (Load Balancing)**

<details>
<summary>[C#]</summary>
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
  
    con.Open(true);
}
{% endhighlight %}
</details>

**Beispiel mit einem SAP-Router**

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using(R3Connection con = new R3Connection())
{  
    con.UserName = "erpconnect";  
    con.Password = "pass";  
    con.Language = "DE";  
    con.Client = "800";  
    con.Host = "/H/lear.theobald-software.com/H/" + "hamlet";  
    con.SystemNumber = 11;  
    
    con.Open(false);
}
{% endhighlight %}
</details>