---
ref: ec-sap-connection-01
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

There are two ways to log on to your SAP system with ERPConnect:
- Connect to a single application server.
- Connect to a message server (Load Balancing). 

### Input Parameters

Both connection methods require the following input:

| Single Application Server | Load Balancing |
| :------ |:--- | :--- |
| Name of the user (*UserName* property)| Name of the user (*UserName* property)|
| Password (*Password* property)| Password (*Password* property)|
| Language (*Language* property)| Language (*Language* property)|
| Client (*Client* property)| Client (*Client* property)|
| Name of the application server (*Host* property)| Name of the message server (*MessageServer* property)|
| System number between 0 and 99 (*SystemNumber* property)| System ID (*SID* property e.g., MBS)|
| Name of the group (*LogonGroup* property e.g., PUBLIC)|

### How to Connect
1. Add the ERPConnect.dll class library as a reference to the project.
2. Create a new R3Connection object and define all input parameters.
3. Establish the connection using `Open`. <br>
To connect via Load Balancing, use `Open(true)`. For the single server approach, use `Open(false)`. 

Example for single server login:

```csharp
using (R3Connection con = new R3Connection())
{
    con.UserName = "SAPUser";
    con.Password = "SAPPassword";
    con.Language = "EN";
    con.Client = "800";
    con.Host = "sap-erp-as05.example.com";
    con.SystemNumber = 00;
    con.Protocol = ClientProtocol.NWRFC;

    con.Open();
}
```

Example for Load Balancing:

```csharp
using (R3Connection con = new R3Connection())
{
    con.UserName = "SAPUser";
    con.Password = "SAPPassword";
    con.Language = "DE";
    con.Client = "800";
    con.MessageServer = "sap-erp-as05.example.com";
    con.LogonGroup = "PUBLIC";
    con.SID = "ECC";
    con.Protocol = ClientProtocol.NWRFC;
    con.UsesLoadBalancing = true;

    con.Open();
}
```

Example for RFC over WebSocket:

```csharp
using (R3Connection con = new R3Connection())
{
    con.UsesWebSocket = true;
    con.WebSocketHost = "myinstance-api.s4hana.cloud.sap";
    con.WebSocketPort = 443;
    con.TlsSettings = new TlsSettings
    {
        TrustAll = false,
        CryptoLibrary = @"C:\lib\sapcrypto.dll",
        ClientPse = "CLIENT.PSE"
    };

    con.AliasUser = "TESTUSER",
    con.Password = "Password",

    con.Open();
}
```

The default encoding for an SAP connection is SAP code page 1100 (iso-8859-1). When using the NW RFC protocol you can explicitly set an encoding.
This is necessary if your SAP credentials contain characters that are not part of SAP code page 1100.


```csharp
conn.Protocol = ClientProtocol.NWRFC; 
conn.InitialEncoding = SAPEncodingInfo.UTF16LittleEndian;
```

{: .box-note }
**Note**: For more information on authentication, see [SSO with Log On Tickets](./sso-with-log-on-tickets) and [SSO with SNC](sso-with-snc).

### Router

When accessing an SAP system via a Router, the router string must be set before the host name or the name of the message server.<br>
For more information on route strings, see [SAP Help- Route String Entry for SAProuter](https://help.sap.com/saphelp_erp60_sp/helpdata/en/4f/992df1446d11d189700000e8322d00/frameset.htm).

```csharp
using (R3Connection con = new R3Connection())
{
    con.UserName = "SAPUser";
    con.Password = "SAPPassword";
    con.Language = "DE";
    con.Client = "800";
    con.Host = "SAPServer";
    con.SAProuterString = "/H/SAProuter";
    con.SystemNumber = 00;
    con.Protocol = ClientProtocol.NWRFC;

    con.Open();
}
```

### Connection String

You can use a connection string to open an SAP connection. 

Example for single server login:

```csharp
R3Connection con = new R3Connection();
string ConnectionString = "USER=YourUser LANG=EN CLIENT=800 SYSNR=00 ASHOST=sap-erp-as05.example.com PASSWD=YourPassword";

con.ParseConnectionString(ConnectionString);
con.Open();
```

Example for Load Balancing:

```csharp
R3Connection con = new R3Connection();
string ConnectionString = "R3NAME=con GROUP=ADAPTER MSHOST=MSSERVER CLIENT=800 LANG=EN USER=YourUserName PASSWD=YourPassword";

con.ParseConnectionString(ConnectionString);
con.Open();
```

The default client protocol is the NWRFC Protocol. To use the old RFC Protocol add the following command:<br>
`conn.Protocol = ClientProtocol.RFC;`


{: .box-tip }
**Tip**: If you use the constructor of the R3Connection class to provide the login properties, you can save lines.<br>
Example: `R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");`.


****
#### Related Links
- [SSO with Log On Tickets](./sso-with-log-on-tickets).
- [SSO with SNC](sso-with-snc).
- [How to implement a connection pool](https://kb.theobald-software.com/erpconnect-samples/how-to-implement-a-connection-pool)