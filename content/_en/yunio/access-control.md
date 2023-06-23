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

### Restrict Designer and Server Access

Follow the steps below to restrict the access to the Designer and the server. 
The access restrictions also apply to services.
To define custom access restrictions for services, see [Restrict Access to Services](#restrict-access-to-services).

1. Assign user rights to existing users, see [Privileges](#privileges).
2. Navigate to *Settings* and activate Transport Layer Security, see [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).<br>
3. Restart the yunIO service and connect to the Designer using an HTTPS connection.
4. Activate **Authenticated**, see [Server Access](#server-access). 
5. Click **[Save]** and restart the yunIO service again.
6. When connecting to the Designer, you are now prompted to enter user credentials:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }

{: .box-note }
**Note:** If you lock yourself out and cannot log in to the Designer, delete the `permission.json` file in the installation directory of yunIO e.g., `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Restart the yunIO server.

{: .box-tip }
**Tip:** You can also use SAP credentials for basic authentication, see [SAP Connection: Authentication](./sap-connection#authentication).
Using SAP credentials and custom user credentials for basic authentication in parallel is not supported.

### Restrict Access to Services

By default services inherit access restrictions from the server-level, see [Restrict Designer and Service Access](#restrict-designer-and-service-access).
Follow the steps below to set up custom access restrictions for single services:

1. Open the *Services* menu.
2. Click the icon of the service you want to restrict access to. The access control menu of the service opens.
![service-access-control](/img/content/yunio/service-access-control.png){:class="img-responsive"}
3. Activate **Custom** to define custom access control for the service.<br>
![service-access-control-settings](/img/content/yunio/service-access-control-settings.png){:class="img-responsive"}
4. In the subsection assign user rights to existing users.
5. Click **[Save]**.
6. Navigate to *Services* and copy or download the service definition.<br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive"}
7. Call the service using basic authentication. Enter the credentials of a user that is allowed to run services.

{: .box-note }
**Note:** When access rights from the server-level and the service level clash, the more restrictive access right prevails, e.g., a user with *Read/Execute* privilege on the server level cannot be upgraded to *Modify* on the service level.
The *Administrator* privilege is the only privilege on the server level that cannot be downgraded on the service level.

{: .box-note }
**Note:** Services are only displayed to users who have the access rights *Read/Execute* and *Modify*.
