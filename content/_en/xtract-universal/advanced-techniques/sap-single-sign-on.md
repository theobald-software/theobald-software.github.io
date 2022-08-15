---
ref: xu-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: xtract-universal
parent: advanced-techniques
childidentifier: sap-single-sign-on
permalink: /:collection/:path
weight: 6
lang: en_GB
progressstate: 5
---


## Use case

BI client tools such as Power BI, Power Pivot, Alteryx, etc. can start extractions in Xtract products, e.g., Xtract Universal or BOARD Connector). 
Xtract products load the extracted data directly into the tools.
In this use case, it is often required that the extraction is executed with the SAP credentials of the (Windows AD) user, whose BI client triggered the extraction. 
This means that the SAP authorizations of the executing user apply, which is especially important when extracting BW/BEx queries.

The Windows credentials of the user must be forwarded to SAP using the Xtract product. 
On the way to SAP or on the SAP side, the Windows user and its SAP credentials are mapped.

Single Sign-On (SSO) with an Xtract product can be realized via three different procedures:

- [Secure Network Communication (SNC) with Client Certificates](#sso-and-snc-with-client-certificate)
- [Secure Network Communication (SNC) with SAP's Kerberos Wrapper Library](#sso-and-snc-with-kerberos-wrapper-library)
- [SAP Logon Ticket](#sso-via-sap-logon-ticket)

### What is SNC?

Secure Network Connection (SNC) enables authentication and transport encryption between SAP systems and between SAP systems and third-party tools like Xtract Universal and BOARD Connector.
For more information on SNC, see [SAP Help: SNC](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).

## SSO and SNC with Client Certificates

### Requirements

The usage of *SSO Certificate* requires the correct characteristics of the architecture:
- Implement SAP SSO  with X.509 certificates without Secure Login Server, see [SAP-Documentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Implement Microsoft Certificate Store and Active Directory Certificate Templates for SAPGUI/RFC, see [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Set up an enrollment agent for Xtract Universal in AD, see [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents).
- Install the SAP Secure Login Client on the server that runs Xtract Universal, see [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).
The Secure Login Client ensures that the correct SNC library is available for *SSO Certificate*.
This library is used to open the SAP connection.
- The XU service must run under a Windows AD Service account, see [Run an Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account).
- Set up access restrictions for the Xtract Universal Designer and the XU server, see [Zugriffsbeschränkung auf Windows AD Benutzer (Kerberos Authentication)](../../security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication).<br>

### Process

The following graphic illustrates the process of authentication via *SSO Certificate*:

![SSO-Certificate](/img/content/sso-certificate.png){:class="img-responsive"}

1. The user of the BI tool (caller) triggers an extraction by calling the XU webservice of your Xtract product.
The caller uses their Active Directory identity to authenticate against the XU webservice via HTTPS and SPNEGO.
2. The XU server checks if a certificate for the caller is available in the Windows Certificate Store.
If no certificate is available for the caller, a new certificate is issued by the Windows enrollment agent.
a) The XU server requests the Client certificate from the Windows Certificate Store via the Windows API.
If a certificate is available, the process continues with step 3.
If no certificate is available steps 2b) to 2e) are executed.<br>
b) The XU server requests an enrollment agent certificate from the Windows Certificate Store via the Windows API.
The enrollment agent certificate can be used to issue client certificates.
c) The XU server receives the enrollment agent certificate from the Windows Certificate Store.
d) If the requested certificate from 2a) is not found in the Windows Certificate Store, the XU server enrolls a new client certificate for the caller using the enrollment agent certificate.
e) The Windows Certificate Store receives the new client certificate from the Active Directory Services via MSRPC.
3. The XU server receives the client certificate of the caller from the Windows Certificate Store.
4. The XU server configures the SAP Secure Login Client via the Windows Registry.
5. The Secure Login Client receives the caller's client certificate as specified by the XU server in step 4 from the Windows Certificate Store.
6. The Secure Login Client uses the client certificate of the caller to authenticate the caller's identity via SNC against SAP.
7. The XU server extracts data with the identity and privileges of the caller.
8. The XU server loads the extracted data from 7 to the tool that triggered the extraction.

### Setting up SSO and SNC with Client Certificates

Create a new SAP source system in your Xtract product to set up SSO with client certificates:
1. Navigate to **[Server > Manage Sources]** in the main menu of the Designer. The window "Manage Sources" opens.
2. Click **[Add]** to create a new SAP source.
3. Open the tab *General* and enter the connection details of your SAP system. <br>
![SAP-Source-Details](/img/content/xu/sap_source-details.png){:class="img-responsive"}
4. Open the tab *Authentication* and activate the option **SNC**.<br>
![sso-certificate-auth](/img/content/sso-certificate-auth.png){:class="img-responsive"}
5. Enter the path to the 64bit version of the SAP Crypto Library in the field *SNC library*, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
The SAP Crypto Library is installed as part of the SAP Secure Login Client.
6. Enter the SNC partner name of the SAP system in the field **SNC partner name**. 
This is the same partner name as the SNC name used to set up the SAP GUI.
7. Activate the option **Enroll certificate on behalf of caller (Certificate SSO)**.
8. Enter the technical name of the Active Directory Certificate Template used to authenticate SAP users.
9. Enter the thumbprint of the certificate of the enrollment agent.
If you don't know the name or thumbprint, consult the IT department that manages the Active Directory Certificate Services.
10. Click **[Test Designer Connection]** to test your connection settings.
11. Click **[OK]** to confirm your input.

{: .box-tip }
**Tip:** Create new extractions in the test environment with an SAP connection that uses **Plain Authentication**.
Change the SAP source when moving the extraction to the productive environment.


### Related Links
- [SAP Documentation: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [SAP-Documentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html)
- [SAP Documentation: Logging on with Secure Login Client Using SNC](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/68a6caca798e4adbba5608fb69ea6398.html)

## SSO and SNC with Kerberos Wrapper Library

{: .box-warning }
**Warning!  SAP officially does not support the Kerberos Wrapper Library (gx64krb5.dll) anymore.** 

{: .box-warning }
**Warning!  Single Sign-On availability** <br> 
The ABAP application server has to run on a Windows OS and SNC with Kerberos encryption setup on SAP. <br>

### Requirements
- The SAP ABAP application server runs under a Windows operating system. 
- The BI client (which calls the extraction) runs under Windows.
- The SAP Kerberos Wrapper Library (gsskrb5) is used as the SNC solution.


{: .box-note }
**Note:** Only one SNC solution can be set up on an SAP system at a time - for example, SAP's Common Crypto Library **or** gsskrb5, but not both at the same time.
The described procedure only works with the gsskrb5. 

### "Double Hop" Issue

SNC solution must support the Windows credentials being passed on by an Xtract product. 
Since Active Directory is based on Kerberos, a "Double Hop" issue may occur. 
Here is a possible solution to the "Double Hop" issue:<br>

For security reasons, Kerberos does not allow credentials to be passed on. 
But there are Kerberos extensions from Microsoft (S4U extensions) that allow credentials passing on. 
These extensions are also known as "constrained delegation".
Because the Kerberos Wrapper Library uses the Microsoft extensions for Kerberos to work around the "Double Hop" issue, it is only available for Windows. 
It therefore only works with SAP application servers under Windows and clients under Windows.

Unlike the Kerberos Wrapper Library (gsskrb5) from SAP (according to SAP), SAP's Common Crypto Library does not explicitly support credentials to be passed on. 
The Kerberos Wrapper Library (gsskrb5) used by multiple customers of Theobald Software products.

When using an SNC solution from a third-party vendor, use either the Kerberos Wrapper Library or a corresponding solution of the third-party vendor.

### Setting up SSO and SNC with Kerberos Wrapper Library

For information on how to set up SSO and SNC with Kerberos Wrapper Library, see [Knowledge Base Artile: SSO with Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc).

### Related Links
- [Microsoft - Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))
- [Microsoft - Understanding Kerberos "Double Hop"](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)
- [SAP Help - Single Sign-On with Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)
- [Knowledge Base Article: SSO with Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc)

## SSO via SAP Logon Ticket

If one of the above mentioned prerequisites is not met (in particular, Kerberos Library cannot be used or the SAP application server does not run under Windows), you can implement the SAP/AD user mapping using an SAP portal (SAP Web AS) without SNC.

Using SSO is then also possible, but the connection is then not encrypted, unlike with SNC. 
On the other hand, the SAP application servers must only be configured for SAP logon tickets and not for SNC.

### Requirements
The following scenario enables an SAP connection via Single-Sign-On:
- You have an AS Java instance set up that is configured for SPNEGO/Kerberos authentication. 
- Within this AS Java instance there is a mapping between Windows AD users and SAP users (== ticket issuer).
- Your AS ABAP instance (the SAP the system Xtract products extract data from) trusts the SAP logon tickets issued by the AS Java instance.

### Process
1. When running an extraction, the user authenticates to the XU or BOARD Connector server (further referred as only server) via SPNEGO/Kerberos.
2. The server impersonates the caller.
3. The server authenticates itself using the callers credentials toward the AS Java via SPNEGO/Kerberos.
4. AS Java looks up the mapping between Windows user and the corresponding SAP user and issues an SAP logon ticket for this SAP user. The logon ticket is delivered as part of the MYSAPSSO2 cookie.
5. The server fetches the SAP logon ticket from the cookie, uses the ticket for logging onto AS ABAP and executes the extraction.

{: .box-note }
**Note:** For more detailed information on the process of calling extraction using SSO with SAP Logon Tickets, refer to the knowledge base article [SSO with Logon-Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

### Related Links
* [SAP Help - Kerberos and SAP NetWeaver AS for Java](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4c/8a4d292e2849a8b7cbd229be5c94a5/frameset.htm)
* [SAP Help - Using Logon Tickets with AS ABAP](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/d0/dc33c460a243929b7ec120f55af101/frameset.htm)
* [SAP Help - Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm)



