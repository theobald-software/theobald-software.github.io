
A Single-Sign-On (SSO) connection to SAP can be set up using SAP Logon Ticket. In the following you can see a possible scenario.


### Architecture
You have an AS Java instance set up that is configured for SPNEGO/Kerberos authentication. Within this AS Java instance there is a mapping between Windows AD users and SAP users (== ticket issuer).
You have trust set up between your AS ABAP instance (the SAP system Xtract product is extracting data from) and above AS Java instance so that AS ABAP trusts SAP logon tickets issued by AS Java.


### Process
1. When running an extraction, the user authenticates to the XU or BOARD Connector server (further referred as only server) via SPNEGO/Kerberos.
2. The server impersonates the caller.
3. The server authenticates itself using the callers credentials toward the AS Java via SPNEGO/Kerberos.
4. AS Java looks up the mapping between Windows user and the corresponding SAP user and issues an SAP logon ticket for this SAP user. The logon ticket is delivered as part of the MYSAPSSO2 cookie.
5. The server fetches the SAP logon ticket from the cookie, uses the ticket for logging onto AS ABAP and executes the extraction.

For more detailed information on the process of calling extraction using SSO with SAP Logon Tickets, refer to the knowledge base article [SSO with Logon-Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

#### Related Links
* [Kerberos and SAP NetWeaver AS for Java](https://help.sap.com/viewer/8d084639453b41579938aefc0bda7068/2021.001/en-US/4c8a4d292e2849a8b7cbd229be5c94a5.html)
* [Using Logon Tickets with AS ABAP](https://help.sap.com/viewer/8d084639453b41579938aefc0bda7068/2021.001/en-US/4a446f50dc3d2baee10000000a421937.html)
* [Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/viewer/8d084639453b41579938aefc0bda7068/2021.001/en-US/4a412251343f2ab1e10000000a42189c.html)
