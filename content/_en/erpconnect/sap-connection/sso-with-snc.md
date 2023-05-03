---
ref: ec-sap-connection-05
layout: page
title: SSO with SNC
description: SSO with SNC
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sso-with-snc
progressstate: 5
---

You can create a SAP connection using Single-Sign-On (SSO) and Secure Network Communication (SNC) as of ERPConnect version 4.1.59.  
If you use SNC in your project, you can choose between the [NTLM](#ntlm) or the [Kerberos5](#Kerberos) mechanism. 

### Prerequisites

For information on the requirements to use SNC/SSO, refer to the Theobald Software Knowledge Base article [SNC/SSO](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

The following DLLs from SAP need to be present in the `%SYSTEMROOT%\System32` directory of your system:

For 32-bit:
- NTLM: gssntlm.dll
- Kerberos: gsskrb5.dll

For 64-bit x86:
- NTLM:  gx64ntlm.dll
- Kerberos: gx64krb5.dll

The DLLs are available via the [SNOTE 2115486](http://service.sap.com/sap/support/notes/2115486). 

When using Kerberos authentication, apply the Kerberos SNC settings as described in the [SAP Help - Single Sign-On with Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/EN-US/440ebf6c9b2b0d1ae10000000a114a6b.html) to your SAP system. <br>

{: .box-note }
**Note**: Before continuing, we recommend testing the connection between SAP and the client.

### About SNC in ERPConnect

The ParseConnectionString object automatically determines the needed SNC DLL based on the settings of *SNCMechanism*. 
With the *SNCLibraryPath* property you can specify the path to the SNC DLL manually. 
In this case the automatic detection of the DLL is disabled and the setting for *SNCMechanism* are ignored.

If you specify the *SNCMechanism*, you can choose between the [NTLM](#ntlm) and the [Kerberos5](#Kerberos) mechanism.<br>
If the Kerberos authentication is not possible, NTLM is used automatically.
 
If you do not want to use the SNC properties to create a connection, set *SNCEnabled* to false. 
It disables all settings without changing the other SNC parameter. 


### Samples
The following example codes show how to pass the necessary parameters for an SNC connection to an ParseConnectionString object.

****

**Using the SNC Mechanism (ERP Connect version 4.1.1.0):**

```csharp
using (ParseConnectionString con = new ParseConnectionString()) 
{
con.Host = "sap-erp-as05.example.com";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCPartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCMechanism = SNCMechanism.NTLM;
con.SNCEnabled = true;
con.Open();
// define your application
}
```

**Using individual SNC DLL path (ERP Connect version 4.1.1.0):**
```csharp
using (ParseConnectionString con = new ParseConnectionString())
{
con.Host = "sap-erp-as05.example.com";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCPartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCLibraryPath = @"C:\Windows\SysWOW64\sncgss32.dll";
con.SNCEnabled = true;
con.Open();
// define your application
}
```

**Using the SNC Mechanism (ERP Connect version 4.2.3):**
```csharp
using (ParseConnectionString con = new ParseConnectionString())
{
con.Host = "sap-erp-as05.example.com";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCSettings.Enabled = true;
con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCSettings.Mechanism = SNCMechanism.NTLM;
con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;
con.Open();
// define your application
}
```


**Using individual SNC DLL path(ERPConnect Version 4.2.3):**
```csharp
using (ParseConnectionString con = new ParseConnectionString())
{
con.Host = "sap-erp-as05.example.com";
con.SystemNumber = 7;
con.Client = "800";
con.Language = "DE";
con.SNCSettings.Enabled = true;
con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
con.SNCSettings.LibraryPath = @"C:\Windows\SysWOW64\sncgss32.dll";
con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;
con.Open();
// define your application
}
```

{: .box-note }
**Note**: You can set a security level with the new property *QualityOfProtection*. 

### NTLM 

NTLM (abbreviation for NT LAN Manager) is an authentication procedure for computer networks. <br>
NTLM performs the SSO authentication via a challenge-response authentication between the client and the server. 

For more information on NTLM, see [Microsoft Documentation - NTLM](https://docs.microsoft.com/en-us/windows-server/security/kerberos/ntlm-overview).

### Kerberos

The Kerberos method uses a Kerberos server to authenticate the client. <br>
The server creates so-called tickets and sends them to the client. 
The client authenticates itself with this ticket to the server.

For more information on Kerberos, see [Microsoft Documentation - Kerberos Authentication](https://docs.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).

### Double Hop Problem

Double hop describes the passing of authentication information across two or more computers (hops).<br>
For technical reasons NTLM only works with one hop. 
For security reasons Kerberos transmits authentication data only in one hop by default, but it can be configured to send data over two or more hops.<br>

Example 1: If you use Xtract PPV as the consumer of the SAP data, it has to run on the same computer that Xtract PPV Server and PowerPivot run on. 
The domain controller and the SAP system can run on different computer. In this case you can also use NTML and Kerberos.

Example 2: If you use Xtract PPV as the comsumer for the SAP data and the Xtract PPV Server and PowerPivot run on different computers, you have 
to use Kerberos which can be configured to handle the Double Hop Problem. <br>
For more information on the Kerberos configuration, see [Microsoft Techcommunity - Understanding Kerberos Double Hop](https://techcommunity.microsoft.com/t5/ask-the-directory-services-team/understanding-kerberos-double-hop/ba-p/395463).

For more information on the SSO configuration, see [SAP Help - Single Sign-On Configuration](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/48/ca0fe42fbb5c97e10000000a42189d/content.htm?no_cache=true)

****
#### Related Links
- [Knowledge Base Article - SNC/SSO User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).
- [SAP Help - Secure Network Communications (SNC)](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm).
- [SAP Help - Single Sign-On](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/en-US/89d115110d444d85a94dff7ffd0e2b7f.html)
