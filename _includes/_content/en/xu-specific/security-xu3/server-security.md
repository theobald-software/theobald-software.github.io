

### Prerequisite: Activating TLS encryption

Both types of access restrictions require accessing the web server through an https connection. This requires installation of an X.509 certificate.
If the certificate is not listed in the Windows certificate store, [install the X.509 certificate](./install-x.509-Certificate#create-x509-certificate).

1. Navigate to the menu bar and select **Server > Settings**. Switch to the *Web Server* tab.
2. Depending on what type of user you want to restrict access to, select *HTTPS - Restricted to AD users with Designer read access* or *HTTPS - Restricted to custom users with Designer read access.*
![webserver settings](/img/content/xu/server-settings-security.png){:class="img-responsive"}
3. Click the **[Select X.509 certificate]** button. The "Edit certificate location" window opens.
4. Select the X.509 certificate created for your machine under **Local Machine > Personal**.
5. Confirm with **[OK]**. The window closes.
6. Optional: Change the port number of the *HTTPS port*.


### Restrict access to Windows AD users (Kerberos authentication) 

1. Assign a Windows service account under which the Xtract Universal/BOARD Connector service runs. See [Running a service under a Windows service account](./server-security#running-a-service-under-a-windows-service-account).
2. Activate TLS encryption as outlined in [Prerequisite: Activating TLS encryption](./server-security#prerequisite-activating-tls-encryption).
3. Navigate to the menu bar and select **Server > Settings**. In the *Web Server* tab select *HTTPS - Restricted to AD users with Designer read access*.
4. Switch to the *Configuration Server* tab.
5. Add the custom users or groups that are allowed to execute an extraction to [*Access Management*](./access-management#server-settings). 
6. Assign at least *Read* permission to the Windows AD users.
7. Close all windows with **[OK]**
8. Restart the server when prompted.

Result: An extraction can only be executed, if the Windows AD credentials of the caller are passed on to the web server and the caller has at least *Read access* to the Designer.

{: .box-note}
**Note**: This type of authentication uses Kerberos authentication via SPNEGO. NTLM is not supported.



### Restrict access to custom users (Basic authentication)

1. Activate TLS encryption as outlined in the section [Prerequisite: Activating TLS encryption](./server-security#prerequisite-activating-tls-encryption).
2. Navigate to the menu bar and select **Server > Settings**. In the *Web Server* tab select *HTTPS - Restricted to custom users with Designer read access*
2. Switch to the *Configuration Server* tab.
3. Add the Windows AD users or groups that are allowed to execute an extraction to [*Access Management*](./access-management#server-settings).  
4. Assign at least *Read* permission to the custom users.
5. Close all Windows with **[OK]**
6. Restart the server when prompted.

Result: An extraction can only be executed, if the custom credentials of the caller are passed on to the web server and the caller has at least *Read access* to the Designer.
