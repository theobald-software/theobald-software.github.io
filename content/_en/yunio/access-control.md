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

### How to Restrict Designer Access and Set Up Basic Authentication for Services

Follow the steps below to restrict the designer access to defined users set up basic authentication for yunIO services:

1. Assign user rights to existing users, see [Privileges](#privileges).
2. Navigate to *Settings* and activate Transport Layer Security, see [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).<br>
If you connect to yunIO via your localhost, we recommend using a [custom hostname](./server-settings#openapi) for the HTTPS connection.
3. Restart the yunIO service and connect to the Designer using an HTTPS connection.
4. Activate *Authenticated*, see [Server Access](.#server-access) and restart the yunIO service again.
5. When connecting to the Designer, you are now prompted to enter user credentials:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }
6. Navigate to *Services* and copy or download a service definition.<br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive" }
7. Call the service using basic authentication. Enter the credentials of a user that has the user rights to run a service.

{: .box-note }
**Note:** If you get shut out and can't log in, delete the `permission.json` file in the installation directory of yunIO e.g., `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Restart the yunIO server.

{: .box-tip }
**Tip:** You can also use SAP credentials for basic authentication, see [SAP Connection: Authentication](./sap-connection#authentication).
Using SAP credentials and custom user credentials for basic authentication in parallel is not supported.

