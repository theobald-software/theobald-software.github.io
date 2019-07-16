This page describes the required steps for setting up SSO with SNC and Kerberos to be used in Xtract Universal.
**The steps described hereafter require the SAP ABAP application server to run on a Windows OS and to have SNC with Kerberos correctly set up on SAP.**


1. Activation of HTTPS in Xtract Universal 
2. Creation and configuration of a Windows AD service account under which the Xtract Universal service is running .
3. Required settings on the machine on which the Xtradt Universal service is running.
4. Required settings in Xtract Universal.
5. Required settings on the SAP system.


### 1. Activation of HTTPS in Xtract Universal

This setting is not directly related to using SSO, however it's a prerequisite as SSO will only function if the extraction is invoked via HTTPS. For this you need to reference an X.509 certificate in Xtract Universal. See chapter [Installing an X.509 certificate](../../security-xu3/install-x.509-Certificate) 

![XU_WebServerSettings_https](/img/content/XU_Server_Settings_Webserver_HTTPS.png){:class="img-responsive"}


*HTTPS Port*: Go to Server Settings - *Web Server* tab and change the HTTPS Port to 443 (the default value is 8165).
![XU_SSO_httpsPort](/img/content/XU_SSO_HTTPS_Port.png){:class="img-responsive"}


### 2. Creation and configuration of a Windows AD service account

Create a Windows AD service account. That's the account the XU service will be running under (XU service account).

Go to the *Attribute editor* tab and define two *Service Principal Names (SPN)* using this notation *HTTP/[XU FQDN host name]* and *HTTP/[XU host name]*. In the following screenshot *theosoftw2012r2* is the host on which the XU service is running.
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_SPN.png){:class="img-responsive"}

Configure the XU service account for *Constrained Delegation*. Enter the SPN of the service account under which the SAP ABAP application server is running (SAP Service Account).
![XU_SSO_WinAD_SPN](/img/content/XU_SSO_WinAD_Delegation.png){:class="img-responsive"}


In the following screenshot [*SAPServiceERP/do_not_care*](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebb40b9920d1be10000000a114a6b.html) is the SPN of the SAP Service Account.
![XU_SSO_SPN_SAPService](/img/content/XU_SSO_SPN_SAPService.png){:class="img-responsive"}



Have the Xtract Universal service run under the XU service account.
![XU_ServiceAccount](/img/content/XU_Service_Account.png){:class="img-responsive"}


### 3. Required settings on the Xtract Universal server

* copy the Kerberos Wrapper Library to the file system
* add the XU service account to the local admin group (*compmgmt.msc*)
* local security policy settings for the XU service account  (*secpol.msc*)
* add an entry to the registry


*Kerberos Wrapper Library*: The required dll files are attached to [SAP note 2115486](https://launchpad.support.sap.com/#/notes/2115486). The Xtract Universal service runs on a 64 bit OS only. Hence you need to download *gx64krb5.dll*.

Copy that file to the file system, e.g. to *C:\SNC\gx64krb5.dll*, of the machine where the Xtract Universal service is running.
Also, place that file on each machine, where the Xtract Universal Designer is running.  

*Registry settings*: Please add the following registry entries to your XU server machine.


SubKey:  HKEY_LOCAL_MACHINE\SOFTWARE\SAP\gsskrb5

Entry:   ForceIniCredOK

Type:    REG_DWORD

Value:   1


*XU service account as local admin*: Add the XU service acount to the local admin group.

*Local security policy for the XU service account*: Go to *Local Policies* - *User Rights Assignment*. Add the service account at *Act as part of the operating system* and *Impersonate a client after authentication*. 
![XU_SSO_LocSecPol](/img/content/XU_SSO_LocSecPol.png){:class="img-responsive"}


### 4. Settings in Xtract Universal

Open the *SAP Source* settings.
* Select *SNC* and check *Impersonate authenticated caller (SSO)*.
* Enter the path to above gx64krb5.dll (step 3) in the field  *SNC library*.
* Enter the SPN of the SAP service account as *Partner name* (see screenshot at step 2 abov). Please use the following notation. *p:[SPN]@[Domain-FQDN-Uppercase]*.  

*Attention:* 
* The SAP Logon Pad SNC settings for  partnername differ from the ones we need to use in Xtract Universal. SAP Logon Pad uses the UPN of the SAP service accounts (*p:[SAP Service Account]@[domain]*).  As opposed to that, Xtract Universal *must* use the service account's SPN in above mentioned notation.
* SPNs are case sensitive, be aware to use the correct capital and small letters in the SNC partner name.


![XU_SSO_SAPSource](/img/content/XU_SSO_SAP_Source.png){:class="img-responsive"}


### 5. Settings on SAP

Please apply the Kerberos SNC settings as described in the [SAP help](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/EN-US/440ebf6c9b2b0d1ae10000000a114a6b.html). If you can log on via SSO from SAP GUI to your SAP system, that's already a good sign.
