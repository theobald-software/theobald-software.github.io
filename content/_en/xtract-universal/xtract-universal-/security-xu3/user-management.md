---
layout: page
title: User Management
description: User Management
product: xtract-universal
parent: security-xu3
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=user_management
---

From Xtract Universal Designer you can log on to Xtract Universal Server using different types of users/authentication and encrpytion methods:

1. Windows AD user (created outside of Xtract Universal)
2. Custom user (created in Xtract Universal and formerly called basic user in XU 2.x)
3. anonymous (no credentials required, anyone can log on)

![XU3_Designer_Authentication](/img/content/XU3_Designer_Authentication.jpg){:class="img-responsive"}

Xtract Universal supports the following combinations of authentication + encrpytion:

**Windows credentials (current user)** <br>
The Windows AD user executing the XU Designer (usually the logged on Windows user) authenticates against the XU Server via Kerberos. All data exchanged between XU Designer and Server is encrypted via Kerberos.

**Windows credentials (different user)** <br>
The Windows AD user whose credentials were entered in the input fields authenticates against the XU Server via Kerberos. All data exchanged between XU Designer and Server is encrypted via Kerberos.

**Custom credentials (TLS encryption)** <br>
The Custom User whose credentials were entered in the input fields authenticates against the XU Server. All data exchanged between XU Designer and Server is encrypted via TLS.

**Custom credentials (Kerberos encryption)** <br>
The Custom User user whose credentials were entered in the input fields authenticates against the XU Server via Kerberos. All data exchanged between XU Designer and Server is encrypted via Kerberos.

**Anonymous (no encryption)** <br>
No authentication, no transport encryption.

You can enable or disable any of those authentication methods in the Xtract Universal Server settings.

![XU3_ServerSettings_authenticaion_methods](/img/content/XU3_ServerSettings_authenticaion_methods.jpg){:class="img-responsive"}

**Target principal**<br>
Authentication via Windows credentials and *Custom credentials (Kerberos encryption)* is using the Kerberos protocol for authentication and data encryption.
In Windows environments this requires the definition of a *Kerberos Target Principal Name (TPN)*. This TPN can either be a *User Principal Name* (UPN) or a *Service Principal Name* (SPN).

UPN: https://msdn.microsoft.com/en-us/library/windows/desktop/aa380525(v=vs.85).aspx<br>
SPN: https://msdn.microsoft.com/en-us/library/ms677949(VS.85).aspx

The TPN is either equivalent to the UPN (user name with @-notation) of the user which the XU Windows Service is running under. Or it's equivalent to the SPN, which has been assigned to that user.<br>
Per default, it's the Local System Account user which executes the XU Windows Service. This user represents the computer account in Windows AD.<br>
Per default the folowing SPN is assigned to the computer account:*HOST/[hostname]@[domain]*.

Hence the TPN in the XU Connect window only needs to be changed, if the Service Account of the XU Windows Service is n o t running under the Local System Account.
If the Xtract Universal service is running under the Local System account, you can leave the default settings in the Target principal field.

This [blog post]() gives quite a good understanding of the matter.

![XU_Service](/img/content/XU_Service.jpg){:class="img-responsive"}

**Users**<br>
Creating custom users works the same as creating basic users in XU 2.x. At the time of user creation you don't have to specify the authorisation rights, yet. See chapter Access Management.
Custom users can be created and assigend to custom user groups via *Security - Manage Users*.

![XU3_assign_UserGroups](/img/content/XU3_assign_UserGroups.png){:class="img-responsive"}

**User Groups**<br>
In XU 2.x user groups could be created in Xtract Universal only. In addition to this XU 3.x now supports Windows AD user groups which you create outside of Xtract Universal. 
At the time of user group creation you don't have to specify the authorisation rights, yet. See chapter Access Management.
Windows AD users are assigned to Windows AD user groups outside of Xtract Universal.

**ATTENTION:**<br>
Custom users can only be assigned to custom user groups. 
Windows AD users can only be assigned to Windows AD groups, not to custom user groups. This is a breaking change as opposed to XU 2.x.
As a consequence, Windows AD users, that had been assigned to custom user groups in XU2.x will no longer be assigned to these groups when migrating to XU 3.x. Security will not be affected but will be broken down to user level, as custom group level security for Windows AD will be resolved during the migration process.

As opposed to Windows AD user groups, custom user groups can be created in Xtract Universal designer.

![XU3_new_UserGroup](/img/content/XU3_new_UserGroup.jpg){:class="img-responsive"}

