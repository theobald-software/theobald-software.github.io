Access to the web server can be restricted by using the following options:

- HTTPS - Unrestricted
- HTTPS - Restricted to AD users with Designer read access

![webserver settings](/img/content/xu/server-settings-security.png){:class="img-responsive"}

### HTTPS - Unrestricted
1. Select the option "HTTPS - Unrestricted".
2. Click the **[Select X.509 certificate]** button. The "Edit certificate location" dialog opens.
3. Select the [X.509 certificate](./install-x.509-Certificate) created for your machine under **Local Machine > Personal**.
4. Confirm with **[OK]**. The dialog closes.

### HTTPS - Restricted to AD users with Designer read access 

{: .box-warning}
**Warning! The server is diconnected!**<br>
If the option "HTTPS - Restricted to AD users with Designer read access" is activated and no users are defined, the connection to the XU server is terminated.
Create users and/or user groups and assign the required rights. See also [User Management](./user-management).


1. Switch to the *Configuration Server* tab and mark the checkbox ["Restrict Designer access to the following users / groups"](./access-management).
![configuration server tab](/img/content/xu/server-settings-configuration-tab.png){:class="img-responsive"}
2. Click **[Add]** to search for [created users or user groups](./user-management). The search dialog opens.
3. Search for the desired users or user groups. The use of wildcards (*) is supported.
![Add Window](/img/content/xu/add-user.png){:class="img-responsive"}
4. Switch back to the tab *Web Server* and select the option "HTTPS - Restricted to AD users with Designer read access".
![webserver settings https](/img/content/xu/server-settings-security-https.png){:class="img-responsive"}
5. Click the **[Select X.509 certificate]** button. The "Edit certificate location" dialog opens.
6. Select the [X.509 certificate](./install-x.509-Certificate) created for your machine under **Local Machine > Personal**.
7. Confirm with **[OK]**. The dialog closes. <br> The performed changes are activated by restarting the XU server.
![Question Bild](/img/content/xu/restart-server.png){:class="img-responsive"}
8. Click **[OK]** to restart the server.

*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)



