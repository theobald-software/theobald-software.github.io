### Use case

BI client tools such as Power BI, Power Pivot, alteryx, etc. can start extractions in Xtract Universal. Xtract Universal loads the extracted data directly into these tools.
In this use case, it is often required that the extraction is executed with the SAP credentials of the (Windows AD) user whose BI client triggered the extraction. This means that the SAP authorizations of the executing user apply, which often plays a role, for example, in the extraction of BW/BEx queries.

This means that the Windows credentials of this user must be forwarded to SAP using Xtract Universal. On the way there or on the SAP side, there is a mapping between the Windows user and its SAP credentials.

In principle, this *Single Sign On (SSO)* with Xtract Universal can be represented using two different procedures:

1. with Secure Network Communication (SNC) and SAP's Kerberos Wrapper Library
2. via SAP Logon Ticket


### SSO in Xtract Universal and SNC with Kerberos Wrapper Library

In order to use this procedure, the following prerequisites *must* be fulfilled:

1. The SAP ABAP application server runs under a Windows operating system. 
2. The BI client (which calls the extraction in Xtract Universal) runs under Windows.
3. The SAP Kerberos Wrapper Library (gsskrb5) is used as the SNC solution.


*Background information:*

Only one SNC solution can be set up on an SAP system at a time - for example, SAP's Common Crypto Library **or** gsskrb5, but not both at the same time.
The procedure described here only works with the gsskrb5. 

For the Windows credentials to be passed on by Xtract Universal, the SNC solution must support this. Since Active Directory is based on Kerberos, the "Double Hop" problem must be solved: For security reasons, Kerberos does not allow credentials to be passed on. However, there are Kerberos extensions from Microsoft (S4U extensions) that allow this. These extensions are also known as constrained delegation.

SAP's Common Crypto Library does not explicitly support the SAP Support statement. The Kerberos Wrapper Library (gsskrb5) from SAP supports this, and is used by several of our customers. 
There may also be third-party vendors of SNC solutions who can do this, but we haven't had any experience with that yet. This means that for this scenario the Kerberos Wrapper Library or a corresponding third-party solution must be used.

Since the Kerberos Wrapper Library uses the Microsoft extensions for Kerberos to work around the double-hop problem, it is only available for Windows. It therefore only works with SAP application servers under Windows and clients under Windows.

*More information

[Microsoft - Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))

[Microsoft - Understanding Kerberos Double Hop](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)

[SAP help - Single Sign-On with Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)




### SSO in Xtract Universal via SAP Logon Ticket

If one of the above prerequisites is not met (in particular, Kerberos Library cannot be used or the SAP application server does not run under Windows), you can implement the SAP/AD user mapping using an SAP portal (SAP Web AS) without SNC.

SSO would then also be possible, but the connection would then not be encrypted (which would be the case with SNC). On the other hand, the SAP application servers must only be configured for SAP logon tickets and not for SNC.



