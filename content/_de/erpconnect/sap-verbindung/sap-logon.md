---
layout: page
title: SAP Logon
description: SAP Logon
product: erpconnect
parent: sap-verbindung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-logon
---

Die Anmeldung an Ihr SAP-System kann in ERPConnect über 2 Wege erfolgen:
- Anmeldung an einen Application Server.
- Anmeldung an einen Message Server (Load Balancing).

### Eingabeparameter

Beide Verbindungsmethoden benötigen folgende Angaben:

* Name des Benutzers (*UserName* Eigenschaft)
* Passwort (*Password* Eigenschaft)
* Sprache (*Language* Eigenschaft)
* Client (*Client* Eigenschaft)

Zusätzlich werden für die Anmeldung an einen Application Server folgende Eigenschaften benötigt:

* Name des Application Servers (*Host* Eigenschaft)
* Systemnummer zwischen 0 und 99 (*SystemNumber* Eigenschaft)

Zusätzlich werden für die Anmeldung über Load Balancing folgende Eigenschaften benötigt:

* Name des Message Servers (*MessageServer* Eigenschaft)
* Name der Logon-Gruppe (*LogonGroup* Eigenschaft, z.B. PUBLIC)
* System ID (*SID* Eigenschaft, z.B. MBS)

### Verbindung aufbauen

1. Binden Sie die ERPConnect.dll als Referenz in das aktuelle Projekt ein. 
2. Erstellen Sie ein neues R3Connection-Object und definieren Sie alle Eingabeparameter.
3. Verwenden Sie die Methode *Open*, um eine Verbindung herzustellen. <br>
Um sich über Load Balancing zu verbinden, verwenden Sie *Open(true)*. Um sich über einen Application Server zu verbinden, verwenden Sie *Open(false)*.

Beispiel für einen Login mit einem SAP Application Serve:

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


Beispiel für einen Login via Load Balancing:

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

### Router
Wenn Sie auf das SAP-System über einen SAP-Router zugreifen möchten, setzen Sie den Routerstring vor den Hostnamen bzw. den Namen des Message-Servers. <br>
Für mehr Informationen zu Route String, siehe [SAP-Dokumentation - Eingabe von Route Strings für SAProuter](https://help.sap.com/saphelp_erp60_sp/helpdata/de/4f/992df1446d11d189700000e8322d00/frameset.htm).

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

### Connection String

Sie können einen Connection String verwenden, um die Methode *R3Connection.Open(string connectionString)* aufzurufen.

Für die Verbindung zu einem Single Application Server nutzen Sie das folgende Format:<br> 
`"USER=YourUser LANG=EN CLIENT=800 SYSNR=00 ASHOST=ecc.theobald-software.com PASSWD=YourPassword"`

Das Standard Client-Protokoll is das RFC-Protokoll.
Um das neue NW RFC Protokoll zu verwenden, geben Sie folgende Codezeile ein: <br>
`con.Protocol = ClientProtocol.NWRFC;`

{: .box-tip }
**Tipp**:  Wenn Sie den Konstruktor der R3Connection-Klasse verwenden, um die Eigenschaften für die Anmeldung zu übergeben, spraren Sie Codezeilen. Beispiel: `R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");`. 


****
#### Weiterführende Links
- [SSO mit Log On Tickets](./sso-mit-logon-ticket).
- [SSO mit SNC](sso-mit-snc).

