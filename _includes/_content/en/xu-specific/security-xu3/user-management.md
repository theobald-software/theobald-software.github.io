
### Authentication and encryption procedures <br>
The connection between the Xtract Universal Designer and the Xtract Universal Server can be made using different authentication and encryption methods. 

1. Windows AD user (created outside Xtract Universal)
2. custom user (created within Xtract Universal, called "basic user" in XU 2.x)
3. anonymous (no login data required, no encryption)

![XU3_Designer_Authentication](/img/content/xu/authentication_xu.png){:class="img-responsive"}

XU supports the following combinations of transport encryption + authentication:

**Windows credentials (current user)**<br>
The AD user who runs the XU Designer authenticates himself to the XU server via Kerberos. All data exchanged between Designer + Server is encrypted using Kerberos.

**Windows credentials (different users)**<br> 
The AD user, whose user name and password are entered in the login window, authenticates himself to the XU server via Kerberos. All data exchanged between Designer + Server is encrypted using Kerberos.

**Custom credentials (TLS encryption)**<br>
The custom user, whose user name and password are entered in the login window, authenticates himself to the XU server. All data exchanged between Designer + Server is encrypted via TLS.<br>
To use TLS transport encryption, an X.509 server certificate is required for the XU service (can be stored in the server settings).
In the login window, the DNS hostname of the server for which the certificate was issued must be entered in the Server field.

**Custom credentials (Kerberos encryption)**<br>
The custom user, whose user name and password are entered in the login window, authenticates himself to the XU server. All data exchanged between Designer + Server is encrypted using Kerberos.

**Anonymous (no encryption)**<br>
There is no authentication. The data exchanged between Designer + Server is transferred in plain text without transport encryption.

These different logon options can be activated/deactivated in the Server Settings.

![XU3_ServerSettings_authenticaion_methods](/img/content/xu/authentisierung_xu.png){:class="img-responsive"}


### Target principal<br>
To use Kerberos transport encryption or authenticate an Active Directory user, a Kerberos Target Principal Name (TPN) is required. 

This can be either a User Principal Name (UPN) or a Service Principal Name (SPN). For further information about this topic, please click [here](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).


### User<br>
Creating custom users works in the same way as creating basic users in XU 2.x. At the time of user creation, no rights need to be assigned, see chapter Access Management.<br>
Custom users are created and assigned to custom user groups via *Security - Manage Users*.

![XU3_assign_UserGroups](/img/content/XU3_assign_UserGroups.png){:class="img-responsive"}


### User groups<br>
In XU 2.x, user groups could only be created in Xtract Universal. XU 3.x additionally supports Windows AD user groups, which are created outside Xtract Universal. At the time of user group creation no rights have to be assigned, see chapter Access Management.<br>
Windows AD users are assigned to Windows AD user groups outside of Xtract Universal.

**ATTENTION:**<br>
Custom users can only be assigned to custom user groups.<br>
Windows AD users can only be assigned to Windows AD groups, but not to custom user groups. This is a "Breaking Change" compared to XU 2.x.

As a result, Windows AD users who were assigned to custom user groups under XU 2.x disappear from these groups when migrating to XU 3.x. This means that Windows AD users who were assigned to custom user groups under XU 2.x disappear from these user groups when migrating to XU 3.x.

This does not affect access management. However, access at user level is resolved. If access is to take place at group level, the Windows AD users would have to be assigned to Windows AD groups to be newly created.

In contrast to Windows AD user groups, custom user groups are created in Xtract Universal Designer.

![XU3_new_UserGroup](/img/content/XU3_new_UserGroup.png){:class="img-responsive"}



