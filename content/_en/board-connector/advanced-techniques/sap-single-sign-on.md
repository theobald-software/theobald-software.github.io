---
ref: bc-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: board-connector
parent: advanced-techniques
childidentifier: sap-single-sign-on
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sso-with-snc
---


### Use case

BI client tools such as Power BI, Power Pivot, Alteryx, etc. can start extractions in Xtract products, e.g., Xtract Universal or Board Connector). 
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

Secure Network Connection (SNC) enables authentication and transport encryption between SAP systems and between SAP systems and third-party tools like Xtract Universal and Board Connector.
For more information on SNC, see [SAP Help: SNC](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).

### SSO and SNC with Client Certificates

#### Requirements

The usage of *SSO Certificate* requires the correct characteristics of the architecture:
- Implement SAP SSO  with X.509 certificates without Secure Login Server, see [SAP-Documentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Implement Microsoft Certificate Store and Active Directory Certificate Templates for SAPGUI/RFC, see [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Set up an enrollment agent for Board Connector in AD, see [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents).
- Install the SAP Secure Login Client on the server that runs Board Connector, see [SAP-Documentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).
The Secure Login Client ensures that the correct SNC library is available for *SSO Certificate*.
This library is used to open the SAP connection.
- The BC service must run under a Windows AD Service account, see [Run an Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account) for reference.
- Set up access restrictions for the Board Connector Designer and the BC server, see [Restrict Access to Windows AD Users (Kerberos Authentication)](../security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication).<br>

For more information on how to set up SSO and SNC with client certificates, see [Knowledge Base Article: SSO with Client Certificates](https://kb.theobald-software.com/sap-connection/sso-with-client-certificates).


### SSO and SNC with Kerberos Wrapper Library

{: .box-warning }
**Warning!  SAP officially does not support the Kerberos Wrapper Library (gx64krb5.dll) anymore.** 

{: .box-warning }
**Warning!  Single Sign-On availability** <br> 
The ABAP application server has to run on a Windows OS and SNC with Kerberos encryption setup on SAP. <br>

#### Requirements
- The SAP ABAP application server runs under a Windows operating system. 
- The BI client (which calls the extraction) runs under Windows.
- The SAP Kerberos Wrapper Library (gsskrb5) is used as the SNC solution.

{: .box-note }
**Note:** Only one SNC solution can be set up on an SAP system at a time - for example, SAP's Common Crypto Library **or** gsskrb5, but not both at the same time.
The described procedure only works with the gsskrb5. 

For more information on how to set up SSO and SNC with Kerberos Wrapper Library, see [Knowledge Base Artile: SSO with Kerberos SNC](https://kb.theobald-software.com/sap-connection/sso-with-kerberos-snc).

### SSO via SAP Logon Ticket

If one of the above mentioned prerequisites is not met (in particular, Kerberos Library cannot be used or the SAP application server does not run under Windows), you can implement the SAP/AD user mapping using an SAP portal (SAP Web AS) without SNC.

Using SSO is then also possible, but the connection is then not encrypted, unlike with SNC. 
On the other hand, the SAP application servers must only be configured for SAP logon tickets and not for SNC.

#### Requirements
The following scenario enables an SAP connection via Single-Sign-On:
- You have an AS Java instance set up that is configured for SPNEGO/Kerberos authentication. 
- Within this AS Java instance there is a mapping between Windows AD users and SAP users (== ticket issuer).
- Your AS ABAP instance (the SAP the system Xtract products extract data from) trusts the SAP logon tickets issued by the AS Java instance.

{: .box-note }
**Note:** For more detailed information on the process of calling extraction using SSO with SAP Logon Tickets, refer to the knowledge base article [SSO with Logon-Ticket](https://kb.theobald-software.com/sap-connection/sso-with-logon-ticket).
