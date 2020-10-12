### Authentication and encryption procedures
The connection between the Designer and the Server can be established using different authentication and encryption methods. 
![XU3_Designer_Authentication](/img/content/xu/authentication_xu.png){:class="img-responsive"}

The following combinations of transport encryption and authentication are available:

{: .box-note }
**Note:** To use Kerberos transport encryption or authenticate an Active Directory user, a Kerberos Target Principal Name (TPN) is required. 

TPN can either be a User Principal Name (UPN) or a Service Principal Name (SPN). 
Further information on TPN can be found in the Knowledge Base Article [How to use target principal field (TPN)](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).

| Authentication Method | Description | TPN required |
| :------ |:--- | :---: |
| Windows credentials (current user) | The AD user who runs the Designer authenticates himself to the Server via Kerberos. All data exchanged between Designer & Server is encrypted using Kerberos. | x |
| Windows credentials (different users) | The AD user, whose user name and password are entered in the login window, authenticates himself to the XU server via Kerberos. All data exchanged between Designer & Server is encrypted using Kerberos.| x |
| Custom credentials (TLS encryption) | The custom user, whose user name and password are entered in the login window, authenticates himself to the Server. All data exchanged between Designer & Server is encrypted via TLS. To use TLS transport encryption, an [X.509 server certificate](./install-x.509-Certificate) is required for the Service (can be stored in the [server settings](../server/server-settings). In the login window, the DNS hostname of the server for which the certificate is issued needs to be entered into the *Server* field. | - |
| Custom credentials (Kerberos encryption) | The custom user, whose user name and password are entered in the login window, authenticates himself to the Server. All data exchanged between Designer & Server is encrypted using Kerberos. | x |  
| Anonymous (no encryption) | There is no authentication. The data exchanged between Designer & Server is transferred in plain text without transport encryption. | - |  


### Activating Authentication Methods 
The different logon options can be activated/deactivated in the [Server Settings](../server/server-settings).
![XU_security-manage-users](/img/content/server-settings_manage.png){:class="img-responsive"}
Select the tab *Configuration Server*.
![XU3_ServerSettings_authenticaion_methods](/img/content/xu/authentisierung_xu.png){:class="img-responsive"}


### Users and User Groups

{: .box-note }
**Note:** Windows AD Users and Groups are created outside the Designer.

To create custom users and assign the created users to user groups navigate to **Security > Manage Users > Add**.
![XU_security-manage-users](/img/content/security-manage-users.png){:class="img-responsive"}
At the time of user creation, no rights need to be assigned. See also [Access Management](./access-management).
Custom user groups can be created under **Server > Server Settings > Add**. 
![XU_security-manage-users](/img/content/server-settings_manage.png){:class="img-responsive"}
Select the tab *Configuration Server*.
![XU_server-settings-add](/img/content/server-settings-add-group.png){:class="img-responsive"}
Make sure to select the option "Restrict Designer access to the following users/groups".
![XU_server-settings-add-groups](/img/content/server-seetings-create-user-group.png){:class="img-responsive"}
After creating a group, you can assign user to the created groups under **Security > Manage Users > Edit**.
![XU_server-settings-add](/img/content/user-management-groups.png){:class="img-responsive"}
Use the arrows **[<]** and **[>]** to assign and remove users to and from groups.

Custom users can only be assigned to custom user groups. Windows AD users can only be assigned to Windows AD groups, but not to custom user groups. 

{: .box-tip }
**Recommendation:** It is advisable to assign users to groups and grant access to particular actions instead of adding single users and granting them access one by one.

### Migration and Update

As custom users can only be assigned to custom user groups and Windows AD users can only be assigned to Windows AD groups, the created custom user groups may disappear when migrating to a product newer version.
This does not affect access management, but the access at user level is resolved. 

To grant access at group level, the Windows AD users need to be assigned to newly created Windows AD groups.




