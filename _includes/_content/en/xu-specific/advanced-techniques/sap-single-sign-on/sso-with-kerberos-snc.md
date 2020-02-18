The following section describes the required steps for setting up Single Sign-On (SSO) with Secure Network Communication (SNC) and Kerberos encryption in Xtract Universal.

{: .box-warning }
**Warning!  Single Sign-On availability** <br> 
ABAP application server has to run on a Windows OS and SNC with Kerberos encryption set up on SAP. <br>

### Activation of HTTPS in Xtract Universal

1. Enable access control protocol HTTPS (1) within the tab *Web Server* settings.
2. Reference an existing [X.509 certificate](../../security/install-x.509-Certificate) (2).<br>
HTTPS port *8165* is set up by default
4. Click **[OK]** to confirm (3)<br>
![XU_WebServerSettings_https](/img/content/XU_Server_Settings_Webserver_HTTPS.png){:class="img-responsive"}

### Configuration of Windows AD service account

1. Create a Windows AD service account for Xtract Universal (XU) Server. This is the account the XU service is running under (XU service account).
![XU_ServiceAccount](/img/content/XU-server-service-account.png){:class="img-responsive"}
2. In the *Attribute editor* tab define two *Service Principal Names* (SPN). Use the following notation *&lt;service class&lt;/&lt;host&lt;*, e.g., *HTTP/FQDN.domain.local:8165*.
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_SPN.png){:class="img-responsive"}
3. In the *Delegation* tab define the XU service account for *Constrained Delegation* - *Use Kerberos Only*.
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_Delegation.png){:class="img-responsive"}
4. Enter the SPN of the service account under which the SAP ABAP application server is running (SAP Service Account), e.g., *SAPServiceERP/do_not_care*
For more detailed information about the partner name notation in SAP, see the [SAP Help portal](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/en-US/440ebb40b9920d1be10000000a114a6b.html).
5. In the tab *Log On*, change the account to XU service account, e.g., *svc_xusrv@theobald.local*.
![XU_SSO_WinAD_SPN](/img/content/XU_Service_Account.png)

### Xtract Universal Server Settings

{: .box-warning}
**Warning! Incompatible library**  <br>
Xtract Universal runs on 64bit OS only. Kerberos Wrapper Library gx64krb5.dll is required. <br>
Download `gx64krb5.dll` from [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).

1. Copy the Kerberos Wrapper Library to the file system, e.g., to `C:\SNC\gx64krb5.dll` of the machine, where the Xtract Universal service is running.
2. Place the downloaded .dll file on each machine, where the Xtract Universal Designer is running.
2. Open "Computer Management" by entering the following command: `compmgmt.msc`.
3. Under **Local Users and Groups** select **Groups > Administrators**.
4. Click **[Add]** (4) to add the XU service account to the local admin group (5).
![XU_SSO_WinAD_SPN](/img/content/admin_groups_xu_service_account.png)
5. Open "Local Security policy" by entering the following command: `secpol.msc`. 
![XU_SSO_LocSecPol](/img/content/XU_SSO_LocSecPol.png){:class="img-responsive"}
6. Select **[Local Policies > User Rights Assignment]**
    - Act as part of the operating system 
    - Impersonate a client after authentication
6. Change the registry settings of the XU server machine:

**Field** | **Registry Entry**
------------ | -------------
SubKey | HKEY_LOCAL_MACHINE\SOFTWARE\SAP\gsskrb5
Entry | ForceIniCredOK
Type | REG_DWORD
Value | 1

### SAP Source Settings in Xtract Universal

{: .box-note }
An existing [SAP connection](../../advanced-techniques/sap-connection) to a Single Application Server or Message Server is the prerequisite for using SSO with SNC.

1. In the main menu of the Designer, navigate to **[Server > Manage Source]**. The window "Source Details" opens.
![XU_SSO_SAPSource](/img/content/XU_SSO_SAP_Source.png){:class="img-responsive"}
2. Select an existing SAP source and click **[Edit]** (pencil symbol).
![Edit-SAP-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Enable the **SNC** option (1) in the subsection *Authentication*.
4. Enable the checkbox *Impersonate authenticated caller (SSO)* (2).
5. Enter the complete path of the Kerberos library in the field *SNC library*
e.g., `C:\SNC\gx64krb5.dll` (3).
6. Enter the SPN of the SAP service account in the field *Partner name*. Use the following notation: *p:[SPN]@[Domain-FQDN-Uppercase]* (4). 
7. Click **[Test Connection]** to verify your connection settings.
8. Click **[OK]** to confirm.

{: .box-note}
**Note:** The SAP Logon Pad SNC settings for partner name differ from the ones used in Xtract Universal. SAP Logon Pad uses the UPN of the SAP service accounts and Xtract Universal uses the Service Principal Name (SPN). Use the following notation:<br>
*p:[SAP Service Account]@[domain]*. SPN's are case sensitive in the SNC partner name.

### SNC Activation in SAP

In SAP, apply the Kerberos SNC settings as described in the [SAP Help](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/EN-US/440ebf6c9b2b0d1ae10000000a114a6b.html).

