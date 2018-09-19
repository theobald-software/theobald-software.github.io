---
layout: page
title: Security
description: Security
product: board-connector
parent: board-connector-
childidentifier: security
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=security
---

The BOARD designer offers the opportunity to manage user and user groups. 

**User Groups**

Click on the menu *Security -> Manage Groups* to create, change or delete user groups. The user group *administrators* can not be deleted. To create a new user group, enter a name and click on *Add*.

![User-Management-01](/img/content/User-Management-01.png){:class="img-responsive"}

An user group can have one of the following rights:

- **Admin rights**: Users of this group have all privileges. Access limitations on extractions will be ignored.
- **Create new extractions**: Members of this group can create or clone extractions. Group members may not perform any admin tasks such as to change server settings, access server logs or manage users and connections.
- **Modify extractions**: Group members may not create or clone extractions but may execute or edit them. Otherwise, this group has the same rights as the group *Create new extractions*.
- **Read extractions**: Group members may not edit extractions but may read their definition. Otherwise, this group has the same rights as the group *Modify extractions*.

![User-Management-02](/img/content/User-Management-02.png){:class="img-responsive"}

Access restricted extractions will be displayed in the Designer only for authorized users and user groups.
The default user group access right is *Read extractions*.


**Users**

Via the menu item *Security ->Set User Password* the user can set or change his password.

To create, change or delete users, click on the menu item *Security -> Manage Users*. The user *admin* can not be deleted.

![User-Management-03](/img/content/User-Management-03.png){:class="img-responsive"}

To create a new user, click on *Add*. Enter a name or select an existing Active Directory user.

![User-Management-04](/img/content/User-Management-04.png){:class="img-responsive"}

Click on *Edit* to edit a user. You can lock a user or assign him to one or more user groups. Via *Set Password* you can set or change the password of an user.

![User-Management-05](/img/content/User-Management-05.png){:class="img-responsive"}

The default user access right is *Read extractions*.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}