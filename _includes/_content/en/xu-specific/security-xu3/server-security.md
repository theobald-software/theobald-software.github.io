### About

This chapter describes how running an extraction (technically: accessing Xtract Universal's built in web server) can be restricted to predefined users or user groups. <br>
Only users who are entitled to execute an extraction can do so. All others get an "Access denied" message when calling the URL of the Xtract Universal web server, for example when trying to execute an extraction.

There are two types of users access can be restricted to. 
1. Windows AD users (Kerberos authentication)
2. [XU custom users]() (Basic authentication) 


![webserver settings](/img/content/xu/server-settings-security.png){:class="img-responsive"}

If one of above options is set, an extraction can only be executed if:
1. Windows AD credentials or credentials of an XU custom user are passed on when running an extraction.
2. The Windows AD user or XU custom user have at least [Read access](./access-management#server-settings) to the Xtract Universal Designer. 



### Prerequisite: Activating TLS encryption
Both types of access restriction require installation of an X.509 certificate. This way, user credentials are encrypted when sent to the Xtract Universal web server. <br>
It is assumed that an X.509 certificate is already installed in the Windows certificate store. If not, follow the steps as outlined [here](./install-x.509-Certificate).

1. Go to [menu] - Server - Settings - *Web Server* tab
2. Select *HTTPS - Restricted to AD users with Designer read access* or *HTTPS - Restricted to custom users with Designer read access.*
3. Click the **[Select X.509 certificate]** button. The "Edit certificate location" dialog opens.
4. Select the X.509 certificate created for your machine under **Local Machine > Personal**.
5. Optional: Change the *HTTPS port*. Default value: 8165
6. Confirm with **[OK]**. The dialog closes.



### Restrict access to Windows AD users (Kerberos authentication) 

The following describes the steps that are required for restricting access to the Xtract Universal web server to Windows AD users.


0. Assign a Windows service account under which the XU service runs. See [Running the XU service under a Windows AD service account]().
1. Activate TLS encryption as outlined in the section [Prerequisite: Activating TLS encryption]().
2. Go to [menu] - Server - Settings -  *Web Server* tab. Select *HTTPS - Restricted to AD users with Designer read access*
2. Switch to the *Configuration Server* tab
3. Follow the steps for restricting Designer access as documented [here](./access-management#server-settings).  Add the Windows AD users which are allowed to execute an extraction. 
4. Assign at least Read permission to the Windows AD users.
5. Close all windows with **[OK]**
6. Restart the server when prompted.

**Result:** An extraction can only be executed, if the Windows AD credentials of the caller are passed on to the XU web server and the caller has at least Designer Read access.



{: .box-warning}
**Warning! The server is diconnected!**<br>
If the option "HTTPS - Restricted to AD users with Designer read access" is activated and no users are defined, the connection to the XU server is terminated.
Create users and/or user groups and assign the required rights. See also [User Management](./user-management).


### Restrict access to XU custom users (Basic authentication)

1. Activate TLS encryption as outlined in the section [Prerequisite: Activating TLS encryption]().
2. Go to [menu] - Server - Settings -  *Web Server* tab. Select *HTTPS - Restricted to custom users with Designer read access.*
2. Switch to the *Configuration Server* tab
3. Follow the steps for restricting Designer access as documented [here](./access-management#server-settings).  Add the XU custom users which are allowed to execute an extraction. 
4. Assign at least Read permission to the XU custom users.
5. Close all Windows with **[OK]**
6. Restart the server when prompted.


{: .box-note}
**Note**: Basic authentication is only supported when calling an extraction through the extraction's URL. Calling an extraction through *xu.exe* is currently not supported when Basic authentication is active.



### Running the XU service under a Windows AD service account

### Granting access on extraction level

*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)



