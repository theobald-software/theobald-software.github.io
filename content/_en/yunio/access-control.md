---
ref: yunio-08
layout: page
title: Access Control
description: Access Control
product: yunio
parent: yunio
childidentifier: integration
permalink: /:collection/:path
weight: 25
lang: en_GB
progressstate: 5
---

The yunIO access control allows you to define user authorizations regarding server and yunIO Designer access.

![Access_Control](/img/content/yunio/access-control.png){:class="img-responsive"}

### Server Access

Activate or deactivate access control for the Designer and the server. 

- If **Anonymous Access** is active, anyone can access the Designer and execute services. 
This is the default setting.
- If **Authenticated** is active, only defined users with a designated restriction level have access to the Designer and the server.<br>
This option is only available if at least one user is defined and [Transport Layer Security](#transport-layer-security) is enabled.

### Privileges

Assign restriction levels for Designer and server access to users.

All users defined in [User management](./users) are listed in **Privileges**.
Select a restriction level from the dropdown list next to the user name to assign a restriction level.
The following restriction levels are available:
- **Server Admin**: No restrictions. 
- **Create / Modify**: The user can log in to the designer, can create new connections and services, and can modify existing ones.
The user cannot make changes to users, access control, or server settings.
- **Read / Execute**: The user can log in to the Designer, but cannot make any changes. The user can run services.
- **No access**: The user can neither login to the Designer, nor run any services.
This option can be used to temporarily disable users from using yunIO.