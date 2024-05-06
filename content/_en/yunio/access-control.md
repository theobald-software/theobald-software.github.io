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

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for yunIO.<br>
Make sure to use the documentation within the new [HelpCenter for yunIO](https://helpcenter.theobald-software.com/yunio/).

The yunIO access control allows you to define the following user authorizations:
- Authorization for server and yunIO Designer access, see [Global Access Control](#global-access-control)
- Authorization for specific services, see [Service Access Control](#service-access-control)


## Global Access Control

Global access control allows you to define user authorizations for server and yunIO Designer access.<br>
To open the global access control settings, open the *Access Control* menu:<br>
![Access_Control](/img/content/yunio/access-control.png){:class="img-responsive"}

### Server Access

Activate or deactivate access control for the Designer and the server. 

- If **Anonymous Access** is active, anyone can access the Designer and execute services. 
**Anonymous** is the default setting.
- If **Authenticated** is active, only defined users with a designated restriction level have access to the Designer and the server.<br>
This option is available, if at least one user is defined and [Transport Layer Security](./server-settings) is enabled.

### Privileges (Global)

Assign restriction levels for Designer and server access to users.

All users defined in [User management](./users) are listed in the subsection *Privileges*. <br>
Select a restriction level from the dropdown list next to the user name to assign a restriction level.
The following restriction levels are available:
- **Server Admin**: No restrictions. 
- **Create / Modify**: The user can login to the designer; create new connections and services; modify existing ones.
The user cannot make changes to users, access control, or server settings.
- **Read / Execute**: The user can login to the Designer, but cannot make any changes. The user can run services.
- **No access**: The user can not login to the Designer or run any services.
This option can be used to temporarily disable users from using yunIO.

### Restrict Designer and Server Access

Follow the steps below to restrict the access to the Designer and the server. 
The access restrictions also apply to services.
To define custom access restrictions for services, see [Restrict Access to Services](#restrict-access-to-services).

1. Open the *Settings* menu and activate *Transport Layer Security*, see [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).<br>
2. Restart the yunIO service and connect to the Designer using an HTTPS connection.
3. Open the *Access Control* menu.
4. Activate **Authenticated**, see [Server Access](#server-access). <br>
![Access_Control](/img/content/yunio/access-control2.png){:class="img-responsive"}
5. Assign user rights to existing users, see [Privileges (Global)](#privileges-global).
6. Click **[Save]** and restart the yunIO service again.
7. When connecting to the Designer, you are now prompted to enter user credentials:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }

{: .box-note }
**Note:** If you lock yourself out and cannot login to the Designer, delete the `permission.json` file in the installation directory of yunIO e.g., `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Restart the yunIO server afterwards.

{: .box-tip }
**Tip:** You can also use SAP credentials for basic authentication, see [SAP Connection: Authentication](./sap-connection#authentication).
Using SAP credentials and custom user credentials for basic authentication in parallel is not supported.

## Service Access Control

Service access control allows you to define user authorizations for specific services.<br>
To open the service access control settings, click the ![Login](/img/content/yunio/key.png) icon of the service you want to restrict access to. <br>
![service-access-control](/img/content/yunio/service-access-control-settings0.png){:class="img-responsive"}

### Service Access

Activate or deactivate further restrictions of existing global access rights for the selected service. 

- If **Inherit** is active, the global access rights apply to the service, see [Global Access Control](#global-access-control). 
**Inherit** is the default setting.
- If **Custom** is active, the access rights defined in the subsection [*Privileges*](#privileges-services) apply to the service.<br>
Custom service restrictions do not affect users with global *Administrator* rights.

### Privileges (Services)

Assign restriction levels for the service access to users.

All users defined in [User management](./users) are listed in the subsection *Privileges*.
Select a restriction level from the dropdown list next to the user name to assign a restriction level.
The following restriction levels are available:
- **Modify**: The user can read, run and modify the service.
- **Read / Execute**: The user can read and run the service.
- **No access**: The user can not access, modify, read or run the service.

### Restrict Access to Services

By default services inherit access restrictions from the server-level, see [Global Access Control](#global-access-control).
Follow the steps below to set up custom access restrictions for specific services:

1. Open the *Services* menu.
2. Click (![Login](/img/content/yunio/key.png)) at the service you want to restrict access to. 
The access control menu of the service opens.<br>
![service-access-control](/img/content/yunio/service-access-control.png){:class="img-responsive"}
3. Activate **Custom**, see [Service Access](#service-access)<br>
![service-access-control-settings](/img/content/yunio/service-access-control-settings.png){:class="img-responsive"}
4. Assign user rights to existing users, see [Privileges (Services)](#privileges-services).
5. Click **[Save]**.
6. Open the *Services* menu and copy or download the service definition.<br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive"}
7. Call the service using basic authentication. Enter the credentials of a user that is allowed to run services.


{: .box-note }
**Note:** When access rights from the server and service levels differ, the more restrictive access right applies, e.g., a user with *Read/Execute* privilege on the server level cannot be upgraded to *Modify* on the service level.
The *Administrator* privilege is the only privilege on the server level that cannot be downgraded on the service level.

{: .box-tip }
**Tip:** Click **[Reset permissions]** to set all user rights to *No Access*.

