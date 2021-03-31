### About

This section is about restricting access to the software's built in web server to predefined users or user groups. <br>
By setting access restrictions on the web server you ensure that only dedicated users can execute extractions. 

There are two types of [users and user groups](user-management#users-and-user-groups), access can be restricted to. 
- Windows AD users (Kerberos authentication)
- XU custom users (Basic authentication) 

When there are restrictions, Windows AD credentials or credentials of a custom user are submitted when running an extraction.

[//]: # (How is it submitted? If there is a window where you have to enter your credential maybe post a screenshot of that instead of the webserver settings window - maybe put that below to prerequisites)

![webserver settings](/img/content/xu/server-settings-security.png){:class="img-responsive"}

{: .box-note}
**Note**: Users allowed to run an extraction must have at least [Read access](./access-management#server-settings) to the software.

### Prerequisite: Activating TLS encryption
Both types of access restriction require installation of an X.509 certificate.
If it is not listed in the Windows certificate store, [install the X.509 certificate](./install-x.509-Certificate#create-x509-certificate).

1. Navigate to the menu bar and select **Server > Settings** - *Web Server* tab.
2. Depending on what type of user you want to restrict access to, select *HTTPS - Restricted to AD users with Designer read access* or *HTTPS - Restricted to custom users with Designer read access.*
3. Click the **[Select X.509 certificate]** button. The "Edit certificate location" window opens.
4. Select the X.509 certificate created for your machine under **Local Machine > Personal**.
5. Confirm with **[OK]**. The window closes.
6. Optional: Change the port number of the *HTTPS port*.


### Restrict access to Windows AD users (Kerberos authentication) 

1. Assign a Windows service account under which the software service runs. See [Running a service under a Windows AD service account](./server-security#running-the-xu-service-under-a-windows-ad-service-account).
2. Activate TLS encryption as outlined in the [Prerequisite: Activating TLS encryption](./server-security#prerequisite-activating-tls-encryption).
3. Navigate to the menu bar and select **Server > Settings** - *Web Server* tab. Select *HTTPS - Restricted to AD users with Designer read access*.
4. Switch to the *Configuration Server* tab.
5. Add the Windows AD users or groups that are allowed to execute an extraction to [*Access Management*](./access-management#server-settings). 
6. Assign at least *Read* permission to the Windows AD users.
7. Close all windows with **[OK]**
8. Restart the server when prompted.

Result: An extraction can only be executed, if the Windows AD credentials of the caller are passed on to the web server and the caller has at least Read access to the software.



### Restrict access to custom users (Basic authentication)


1. Activate TLS encryption as outlined in the section [Prerequisite: Activating TLS encryption](./server-security#prerequisite-activating-tls-encryption).
2. Navigate to the menu bar and select **Server > Settings** - *Web Server* tab. Select *HTTPS - Restricted to custom users with Designer read access.*
2. Switch to the *Configuration Server* tab
3. Add the Windows AD users or groups that are allowed to execute an extraction to [*Access Management*](./access-management#server-settings).  
4. Assign at least Read permission to the custom users.
5. Close all Windows with **[OK]**
6. Restart the server when prompted.


{: .box-note}
**Note**: Basic authentication is currently only supported when calling an extraction through the extraction's URL. Calling an extraction through *xu.exe* is currently not supported when Basic authentication is active.


### Running a service under a Windows AD service account

{% include _content/en/xu-specific/security-xu3/xu-service-account.md %}




*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)



