---
layout: page
title: User Management
description: User Management
product: xtract-universal
parent: security-xu2
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=user-management
---

The Xtract Universal designer offers the opportunity to manage user and user groups. 

**User Groups**

Click on the menu *Security -> Manage Groups* to create, change or delete user groups. The user group administrators can not be deleted. To create a new user group, enter a name and click on Add.

![User-Management-Groups](/img/content/User-Management-Groups.png){:class="img-responsive"}

An user group can have one of the following rights:

- **Admin rights**: Users of this group have all privileges. Access limitations on extractions will be ignored.
- **Create new extractions**: Members of this group can create or clone extractions. Group members may not perform any admin tasks such as to change server settings, access server logs or manage users and connections.
- **Modify extractions**: Group members may not create or clone extractions but may execute or edit them. Otherwise, this group has the same rights as the group Create new extractions.
- **Read extractions**: Group members may not edit extractions but may read their definition. Otherwise, this group has the same rights as the group Modify extractions.

![User-Management-Group-Details](/img/content/User-Management-Group-Details.png){:class="img-responsive"}

Access restricted extractions will be displayed in the Designer only for authorized users and user groups.<br>
The default user group access right is *Read extractions*.


**Users**

Via the menu item *Security ->Set User Password* the user can set or change his password.

To create, change or delete users, click on the menu item *Security -> Manage Users*. The user admin can not be deleted.

![User-Management-View-Users](/img/content/User-Management-View-Users.png){:class="img-responsive"}

To create a new user, click on *Add*. Enter a name or select an existing Active Directory user.

![User-Management-Add-User](/img/content/User-Management-Add-User.png){:class="img-responsive"}

Click on *Edit* to edit a user. You can lock a user or assign him to one or more user groups. Via *Set Password* you can set or change the password of an user.

![User-Management-User-Details](/img/content/User-Management-User-Details.png){:class="img-responsive"}

The default user access right is *Read extractions*.

