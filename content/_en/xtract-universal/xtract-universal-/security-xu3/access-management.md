---
layout: page
title: Access Management
description: Access Management
product: xtract-universal
parent: security-xu3
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=access_management
---

Access Management will be activated once you check the checkbox *Restrict Designer access to the following users/groups*. <br>
Once activated, only the listed users or user groups will be able to log on.

![Server-Settings_](/img/content/Server-Settings_.jpg){:class="img-responsive"}

**Read, Modify, Create, Admin**<br>
A user group can have one of the following rights:

- Admin rights: Users of this group have all privileges. They can do anything that “Create”
users can do. Additionally, they can perform admin tasks, such as changing server settings, access server logs or manage users and connections (SAP sources and target destinations). Access limitations on extractions or sources will be ignored.

- Create new extractions: Members of this group can do anything that “Modify” users can do. Additionally they can create or clone extractions. Group members may not perform any admin tasks.

- Modify extractions: Members of this group can do anything that “Read” users can do.
Additionally, they can modify existing extractions, however they may not create or clone extractions.

- Read extractions: Group members may not edit extractions but may read their definition.

These rights only concern actions (view, create, change) that can be performed within the Xtract Universal designer.
Execution of extractions is not concerned here.


