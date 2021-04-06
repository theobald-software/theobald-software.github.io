## About
After installation of Xtract Universal, the Xtract Universal service runs under the *Local System* account. In general this setting can be left as is.

![xu service account](/img/content/xu/xu-service-account.png){:class="img-responsive"}


In some scenarios the Xtract Universal service must run under a dedicated Windows domain user account as a service account instead of the *Local System* account. These scenarios are:

1. Enabling [Kerberos authentication](../security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication) for the Xtract Universal web server.
2. Enabling Windows authentication for an Xtract Universal destination that allows Windows credentials for log on. Examples: SQL Server destination, PostgreSQL destination.
3. [Enabling SSO with Kerberos SNC](./sap-single-sign-on/sso-with-kerberos-snc).

This section describes the steps that need to be taken to run the Xtract Universal service under a service account.


## Basic settings

Perform the following steps: 

- Create a Windows AD service account and assign an SPN (Service Principle Name) to the service account in the following format: ```HTTP/[FQDN of XU Server]```

Using the ```setspn``` command the SPNs of a user account can be checked.
![xu service account SPN](/img/content/xu/xu-service-account-SPN.png){:class="img-responsive"}

- Grant access rights on Xtract Universal's installation folder and all sub folders to the service account as in the following screenshot:
![xu service account permissions](/img/content/xu/xu-service-account-permissions.png){:class="img-responsive"}

- If applicable, make sure the service account has Read access to the private key of the [X.509 certificate](../security/install-x.509-Certificate) used by Xtract Universal.

![xu service account private key 1](/img/content/xu/xu-service-account-privatekey_1.png){:class="img-responsive"}
![xu service account private key 2](/img/content/xu/xu-service-account-privatekey_2.png){:class="img-responsive"}

- Let the Xtract Universal service run under the service account. Make sure the correct domain is used, e.g. *.company.local* instead of *.company.com*.
![xu service account services](/img/content/xu/xu-service-account-services.png){:class="img-responsive"}

- At Xtract Universal Designer startup change the *Target Principal* in the "Connect to Xtract Universal Server" window when using *Windows credentials* or *Custom Credentials (Kerberos authentication)*. Enter the User Principal Name (UPN) of the service account in the *Target Principal* field, as described [here](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).


## Settings for SSO with Kerberos SNC

This section applies to the scenario described in the section [SSO with Kerberos SNC](./sap-single-sign-on/sso-with-kerberos-snc).<br>
In addition to the [Basic settings](#basic-settings) described above, *contrained delegation* needs to be set for the Windows domain account under which the Xtract Universal service runs.

![xu_service_account_constr_deleg](/img/content/XU_SSO_WinAD_Delegation.png){:class="img-responsive"}


Enter the SPN of the service account under which the SAP ABAP application server is running (SAP Service Account), e.g., SAPServiceERP/do_not_care. <br>
For more detailed information about the partner name notation in SAP, see the [SAP Help portal](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/en-US/440ebb40b9920d1be10000000a114a6b.html).


*********
#### Related Links
- [About Service Logon Accounts](https://docs.microsoft.com/en-us/windows/win32/ad/about-service-logon-accounts)
- [Service Principal Names](https://docs.microsoft.com/en-us/windows/win32/ad/service-principal-names)

