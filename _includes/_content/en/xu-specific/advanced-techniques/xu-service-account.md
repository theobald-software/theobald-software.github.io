### About

After installation of Xtract Universal, the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} service runs under the *Local System* account.

In the following scenarios the service must run under a dedicated Windows domain user account instead of the *Local System* account:

- Enabling [Kerberos authentication](../security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication) for the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} web server.
- Enabling Windows authentication for a{% if page.product == "xtract-universal" %}n Xtract Universal{% else %} Board Connector{% endif %} destination that allows Windows credentials for log on (e.g., SQL Server destination, PostgreSQL destination).
- [Enabling SSO with Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc).
- [Enabling SSO with SAP Logon Tickets](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket).

This section describes how to run the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} service under a service account.

{: .box-note }
**Note:** As of {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} version 5.0 SAP passwords are encrypted with a key that is derived from the Windows account that runs the {% if page.product == "xtract-universal" %}XU{% else %}BC{% endif %} service.
The passwords can only be accessed from the same service account, when restoring a backup or moving the files to a different machine. 
If the service account changes, passwords need to be re-entered manually.

### Basic settings

1. Create a Windows AD service account and assign an SPN (Service Principle Name) to the service account in the following format: ```HTTP/[FQDN of {% if page.product == "xtract-universal" %}XU{% else %}BC{% endif %} Server]```.
Using the ```setspn``` command the SPNs of a user account can be checked.
![xu service account](/img/content/xu/xu-service-account-SPN.png){:class="img-responsive"}

2. Grant access rights on {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %}'s installation folder and all sub folders to the service account as shown in the following screenshot:
![xu service account permissions](/img/content/xu/xu-service-account-permissions.png){:class="img-responsive"}

3. If applicable, make sure the service account has *Read* access to the private key of the [X.509 certificate](../security/install-x.509-Certificate) used by {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %}.
![xu service account private key 1](/img/content/xu/xu-service-account-privatekey_1.png){:class="img-responsive"}
![xu service account private key 2](/img/content/xu/xu-service-account-privatekey_2.png){:class="img-responsive"}

4. Let the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} service run under the service account. Make sure the correct domain is used (e.g., *.company.local* instead of *.company.com*).
![xu service account services](/img/content/xu/xu-service-account-services.png){:class="img-responsive"}

5. In the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Designer startup window "Connect to {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} Server", set *Windows credentials* or *Custom Credentials (Kerberos authentication)* as *Authentication*. Enter the User Principal Name (UPN) of the service account in the *Target Principal* field as described in the knowledge base article ["How to use target principal field"](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).<br>
{% if page.product == "xtract-universal" %}![xu service account login](/img/content/xu/xu-service-account-login.png){:class="img-responsive"}{% else %}![bc service account login](/img/content/bc-service-account-login.png){:class="img-responsive"}{% endif %}

### Settings for SSO with Kerberos SNC

When using [SSO with Kerberos SNC](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc) additional steps are necessary:<br>

1. Set *constrained delegation* for the Windows domain account under which the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} service runs.
![xu_service_account_constr_deleg](/img/content/XU_SSO_WinAD_Delegation.png){:class="img-responsive"}
2. Enter the SPN of the service account under which the SAP ABAP application server is running (SAP Service Account), e.g., SAPServiceERP/do_not_care.
For more information about the partner name notation in SAP, see the [SAP Help portal](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/en-US/440ebb40b9920d1be10000000a114a6b.html).


*********
#### Related Links
- [About Service Logon Accounts](https://docs.microsoft.com/en-us/windows/win32/ad/about-service-logon-accounts)
- [Service Principal Names](https://docs.microsoft.com/en-us/windows/win32/ad/service-principal-names)

