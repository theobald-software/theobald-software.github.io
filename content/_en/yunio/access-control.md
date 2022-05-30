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
- **Authenticated** is only available if at least one user is defined and [Transport Layer Security](#transport-layer-security) is enabled.<br>
If this option is active, only defined users with a designated restriction level have access to the Designer and the server.

### Privileges

Assign restriction levels for Designer and server access to users.

All users defined in [User management](./users) are listed in **Privileges**.
Select a restriction level from the dropdown list next to the user name to assign a restriction level.
The following restriction levels are available:
- **Server Admin**: allows users access to all functions and settings. 
- **Create / Modify**: allows users to create, edit and execute services and connections.
- **Read / Execute**: allows users to open the Designer to download and execute services.
- **No access**: denies users access to the Designer. Execution of services is not authorized.
This option can be used to temporarily disable users from using yunIO.