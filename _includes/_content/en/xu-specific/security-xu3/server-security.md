### About

This chapter describes how accessing Xtract Universal's built in web server can be restricted to predefined users or user groups. <br>
By setting access restrictions on the Xtract Universal web server only dedicated users are allowed to execute an extraction.


There are two types of users and user groups, access can be restricted to. 
1. Windows AD users (Kerberos authentication)
2. XU custom users (Basic authentication) 

These are the same [users and user groups](user-management#users-and-user-groups) that are used for restricting access to the Xtract Universal Designer.

![webserver settings](/img/content/xu/server-settings-security.png){:class="img-responsive"}

If one of the above options is set, an extraction can only be executed if:
1. Windows AD credentials or credentials of an XU custom user are submitted when running an extraction.
2. The Windows AD user or XU custom user has at least [Read access](./access-management#server-settings) to the Xtract Universal Designer. 

{: .box-note}
**Note**: We assume that users that are allowed to run an extraction are also allowed to access the Xtract Universal Designer with at least Read access. Running an extraction is therefore bound to having at least Read access in the Xtract Universal Designer.

### Prerequisite: Activating TLS encryption
Both types of access restriction require installation of an X.509 certificate. <br>
It is assumed that an X.509 certificate is already installed in the Windows certificate store. If not, follow the steps as outlined in the section [Create X.509 Certificate](./install-x.509-Certificate#create-x509-certificate).

1. Go to [menu] - Server - Settings - *Web Server* tab
2. Depending on what type of user you want to restrict access to, select *HTTPS - Restricted to AD users with Designer read access* or *HTTPS - Restricted to custom users with Designer read access.*
3. Click the **[Select X.509 certificate]** button. The "Edit certificate location" dialog opens.
4. Select the X.509 certificate created for your machine under **Local Machine > Personal**.
5. Confirm with **[OK]**. The dialog closes.
6. Optional: Change the port number of the *HTTPS port*.



### Restrict access to Windows AD users (Kerberos authentication) 

The following describes the steps that are required for restricting access to Xtract Universal's web server to Windows AD users.


1. Assign a Windows service account under which the XU service runs. See [Running the XU service under a Windows AD service account](./server-security#running-the-xu-service-under-a-windows-ad-service-account).
2. Activate TLS encryption as outlined in the section [Prerequisite: Activating TLS encryption](./server-security#prerequisite-activating-tls-encryption).
3. Go to [menu] - Server - Settings -  *Web Server* tab. Select *HTTPS - Restricted to AD users with Designer read access*.
4. Switch to the *Configuration Server* tab.
5. Follow the steps for restricting Xtract Universal Designer access as documented [here](./access-management#server-settings).  Add the Windows AD users or groups that are allowed to execute an extraction. 
6. Assign at least Read permission to the Windows AD users.
7. Close all windows with **[OK]**
8. Restart the server when prompted.

**Result:** An extraction can only be executed, if the Windows AD credentials of the caller are passed on to the Xtract Universal web server and the caller has at least Designer Read access.



### Restrict access to Xtract Universal custom users (Basic authentication)

The following describes the steps that are required for restricting access to Xtract Universal's web server to XU custom users.

1. Activate TLS encryption as outlined in the section [Prerequisite: Activating TLS encryption](./server-security#prerequisite-activating-tls-encryption).
2. Go to [menu] - Server - Settings -  *Web Server* tab. Select *HTTPS - Restricted to custom users with Designer read access.*
2. Switch to the *Configuration Server* tab
3. Follow the steps for restricting Xtract Universal Designer access as documented [here](./access-management#server-settings).  Add the Xtract Universal custom users or groups that are allowed to execute an extraction. 
4. Assign at least Read permission to the Xtract Universal custom users.
5. Close all Windows with **[OK]**
6. Restart the server when prompted.


{: .box-note}
**Note**: Basic authentication is currently only supported when calling an extraction through the extraction's URL. Calling an extraction through *xu.exe* is currently not supported when Basic authentication is active.



### Running the XU service under a Windows AD service account

{% include _content/en/xu-specific/security-xu3/xu-service-account.md %}




*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)



