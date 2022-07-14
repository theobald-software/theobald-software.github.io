
### Use case

BI client tools such as Power BI, Power Pivot, Alteryx, etc. can start extractions in Xtract products (e.g., Xtract Universal or BOARD Connector). Xtract products load the extracted data directly into the listed tools.
In this use case, it is often required that the extraction is executed with the SAP credentials of the (Windows AD) user, whose BI client triggered the extraction. This means that the SAP authorizations of the executing user apply, which is often important, for example, in the extraction of BW/BEx queries.

The Windows credentials of the user must be forwarded to SAP using an Xtract product. On the way to SAP or on the SAP side, a mapping is conducted between the Windows user and its SAP credentials.

Single Sign-On (SSO) with an Xtract product can be represented using two different procedures:

- Secure Network Communication (SNC) with SAP's Kerberos Wrapper Library
- SAP Logon Ticket



### SSO and SNC with Kerberos Wrapper Library

{: .box-note }
**Note:** Only one SNC solution can be set up on an SAP system at a time - for example, SAP's Common Crypto Library **or** gsskrb5, but not both at the same time.

The described procedure only works with the gsskrb5. 

SNC solution must support the Windows credentials being passed on by an Xtract product. 
Since Active Directory is based on Kerberos a "Double Hop" issue may occur. A possible solution to the "Double Hop" issue can be the following:<br>

For security reasons, Kerberos does not allow credentials to be passed on. However, Kerberos extensions from Microsoft (S4U extensions) that allow credentials passing on. These extensions are also known as constrained delegation.
SAP's Common Crypto Library does not explicitly support credentials to be passed on, unlike the Kerberos Wrapper Library (gsskrb5) from SAP (according to SAP). The Kerberos Wrapper Library (gsskrb5) is generally popular by users of Theobald Software products.

When using an SNC solution from a third-party vendor use either the Kerberos Wrapper Library or a corresponding solution of the third-party vendor.

{: .box-note }
**Note:** since the Kerberos Wrapper Library uses the Microsoft extensions for Kerberos to work around the "Double Hop" issue, it is only available for Windows. It therefore only works with SAP application servers under Windows and clients under Windows.


Necessary prerequisites for using SNC with Kerberos Wrapper Library:

1. The SAP ABAP application server runs under a Windows operating system. 
2. The BI client (which calls the extraction in Xtract products) runs under Windows.
3. The SAP Kerberos Wrapper Library (gsskrb5) is used as the SNC solution.


For more information see the following sources:

[Microsoft - Kerberos explained](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10))

[Microsoft - Understanding Kerberos "Double Hop"](https://blogs.technet.microsoft.com/askds/2008/06/13/understanding-kerberos-double-hop/)

[SAP help - Single Sign-On with Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html)




### SSO via SAP Logon Ticket

If one of the above mentioned prerequisites is not met (in particular, Kerberos Library cannot be used or the SAP application server does not run under Windows), you can implement the SAP/AD user mapping using an SAP portal (SAP Web AS) without SNC.

Using SSO is then also possible, but the connection is then not encrypted, unlike with SNC. On the other hand, the SAP application servers must only be configured for SAP logon tickets and not for SNC.



