---
ref: ec-sap-connection-01
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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Die Anmeldung an Ihr SAP-System kann in ERPConnect über mehrere Wege erfolgen:
- Anmeldung an einen Application Server.
- Anmeldung an einen Message Server (Load Balancing).
- Anmeldung an einen Application Server oder eine öffentliche oder private Cloud-Instanz via RFC über WebSocket.

### Eingabeparameter

Beide Verbindungsmethoden benötigen folgende Angaben:

| Single Application Server | Load Balancing | RFC über WebSocket |
| :------ |:--- | :--- |
| Name des Benutzers (*UserName* Eigenschaft)| Name des Benutzers (*UserName* Eigenschaft)| Name des Benutzers (*UserName* Eigenschaft) |
| Passwort (*Password* Eigenschaft)| Passwort (*Password* Eigenschaft)| Passwort (*Password* Eigenschaft) |
| Sprache (*Language* Eigenschaft)| Sprache (*Language* Eigenschaft)| Sprache (*Language* Eigenschaft) |
| Client (*Client* Eigenschaft)| Client (*Client* Eigenschaft)| Client (*Client* Eigenschaft) |
| Name des Application Servers (*Host* Eigenschaft)| Name des Message Servers (*MessageServer* Eigenschaft)| WebSockets Host (*WebSocketHost* Eigenschaft)|
| Systemnummer zwischen 0 und 99 (*SystemNumber* Eigenschaft)| System ID (*SID* Eigenschaft, z.B. MBS)| Port des WebSockets (*WebSocketPort* Eigenschaft)|
| | Name der Logon-Gruppe (*LogonGroup* Eigenschaft, z.B. PUBLIC)| *AliasUser* Eigenschaft anstelle von *UserName* für Cloud-Systeme |
||| Verschiedene TLS Einstellungen (*TlsSettings* Eigenschaft)|


### Verbindung aufbauen

1. Binden Sie die ERPConnect.dll als Referenz in das aktuelle Projekt ein. 
2. Erstellen Sie ein neues R3Connection-Object und definieren Sie alle Eingabeparameter.
3. Verwenden Sie die Methode `Open`, um eine Verbindung herzustellen. <br>
Um sich über Load Balancing zu verbinden, verwenden Sie `Open(true)`. Um sich über einen Application Server zu verbinden, verwenden Sie `Open(false)`.

Beispiel für einen Login mit einem SAP Application Server:

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

Beispiel für einen Login via Load Balancing:

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

Beispiel für einen Login via RFC über WebSocket:

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

Das Standard-Encoding für den Verbindungsaufbau zu SAP-Systemen ist SAP-Codepage 1100 (iso-8859-1).
Wenn Sie das NW RFC Protokoll verwenden, können Sie explizit ein Encoding angeben. Das ist dann notwendig, wenn SAP Benutzerdaten Zeichen enthalten, die nicht Teil der SAP-Codepage 1100 sind. Beispiel:<br>

```csharp
conn.Protocol = ClientProtocol.NWRFC; 
conn.InitialEncoding = SAPEncodingInfo.UTF16LittleEndian;
```

Das Standard Client-Protokoll is das NWRFC-Protokoll.
Um das alte RFC-Protokoll zu verwenden, geben Sie folgende Codezeile ein: <br>
`conn.Protocol = ClientProtocol.RFC;`

{: .box-tip }
**Tipp**: Wenn Sie den Konstruktor der R3Connection-Klasse verwenden, um die Eigenschaften für die Anmeldung zu übergeben, sparen Sie Codezeilen. <br>
Beispiel: `R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");`.


{: .box-note }
**Hinweis:** Für mehr Informationen zu Authentifizierung, siehe [SSO mit Log On Tickets](./sso-mit-logon-ticket) und [SSO mit SNC](sso-mit-snc).

### Router
Wenn Sie auf das SAP-System über einen SAP-Router zugreifen, muss der Routerstring vor den Hostnamen bzw. den Namen des Message-Servers angegeben werden. <br>
Für mehr Informationen zu *Route Strings*, siehe [SAP-Dokumentation - Eingabe von Route Strings für SAProuter](https://help.sap.com/saphelp_erp60_sp/helpdata/de/4f/992df1446d11d189700000e8322d00/frameset.htm).

```csharp
using (R3Connection con = new R3Connection())
{
    con.UserName = "SAPUser";
    con.Password = "SAPPassword";
    con.Language = "DE";
    con.Client = "800";
    con.Host = "/H/SAPRouter/H/SAPServer";
    con.SystemNumber = 00;
    con.Protocol = ClientProtocol.NWRFC;

    con.Open();
}
```




****
#### Weiterführende Links
- [SSO mit Log On Tickets](./sso-mit-logon-ticket).
- [SSO mit SNC](sso-mit-snc).
- [Implement a connection pool](https://kb.theobald-software.com/erpconnect-samples/implement-a-connection-pool)
