
A Single-Sign-On (SSO) connection to SAP can be set up using SAP Logon Ticket. In the following you can see a possible scenario.


### Architecture
You have an AS Java instance set up that is configured for SPNEGO/Kerberos authentication. Within this AS Java instance there is a mapping between Windows AD users and SAP users (== ticket issuer).
You have trust set up between your AS ABAP instance (the SAP system Xtract product is extracting data from) and above AS Java instance so that AS ABAP trusts SAP logon tickets issued by AS Java.


### Process
1. When running an extraction, the user authenticates to the XU or BOARD Connector server (further referred as only server) via SPNEGO/Kerberos.
2. The server impersonates the caller.
3. The server authenticates itself using the callers credentials towared the AS Java via SPNEGO/Kerberos.
4. AS Java looks up the mapping between Windows user and the corresponding SAP user and issues an SAP logon ticket for this SAP user. The logon ticket is delivered as part of the MYSAPSSO2 cookie.
5. The server fetches the SAP logon ticket from the cookie, uses the ticket for logging onto AS ABAP and executes the extraction.

#### Further information (SAP Online Help):
* [Kerberos and SAP NetWeaver AS for Java](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4c/8a4d292e2849a8b7cbd229be5c94a5/frameset.htm)
* [Using Logon Tickets with AS ABAP](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/d0/dc33c460a243929b7ec120f55af101/frameset.htm)
* [Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm)
