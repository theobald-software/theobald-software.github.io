---
ref: yunio-06
layout: page
title: User Management
description: User Management
product: yunio
parent: yunio
childidentifier: integration
permalink: /:collection/:path
weight: 22
lang: en_GB
progressstate: 5
---

The yunIO user management allows you to create custom users with credentials to restrict access to the yunIO Designer and to yunIO services.

### Creating Users

The user management settings are located in the *Users* section of the yunIO Designer.

1. Click **[Add User]** (1) to add a new user.
To edit an existing user, click the edit icon (![Edit](/img/content/yunio/edit.png)) of the user (2).<br>
![Users](/img/content/yunio/yunio-users.png){:class="img-responsive" }
2. Fill in user credentials.
If the checkbox **Allowed to log in** is checked, the user has access to the designer and is allowed to call services.
![New-User](/img/content/yunio/yunio-new-user.png){:class="img-responsive" }
3. Click **[Save]** to save the credentials.

### Restricting Designer Access

Follow the steps below to restrict the designer access to defined users:

1. Create users that are allowed access to the designer, see [Creating Users](#creating-users).
Make sure the checkbox **Allowed to log in** is checked.
2. Navigate to *Settings* and activate Transport Layer Security, see [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).
3. Restart the yunIO service and connect to the designer using an HTTPS connection.
4. Deactivate *Anonymous Access*, see [Server Settings: Anonymous Access](./server-settings#anonymous-access) and restart the yunIO service again.

When connecting to the designer, you are now prompted to enter user credentials:<br>
![Login](/img/content/yunio/yunio-login.png){:class="img-responsive" }

{: .box-note }
**Note:** If you get shut out and can't log in, delete the `permission.json` file in the installation directory of yunIO e.g., `C:\Program Files\Theobald Software\yunIO\config\servers\permission.json`.
Restart the yunIO server.

### Basic Authentication with Defined Users

Follow the steps below to set up basic authentication for yunIO services:

1. Create users, see [Creating Users](#creating-users).
2. Navigate to *Settings* and activate TLS, see [Server Settings: Transport Layer Security](./server-settings#transport-layer-security).
3. Restart the yunIO service and log into the Designer using an HTTPS connection.
4. Navigate to *Services* and copy or download a service definition.<br>
![Run-Service](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive" }
5. Call the service using basic authentication. You can enter the credentials of any user.

{: .box-tip }
**Tip:** You can also use SAP credentials for basic authentication, see [SAP Connection: Authentication](./sap-connection#authentication).
Using SAP credentials and custom user credentials for basic authentication in parallel is not supported.
