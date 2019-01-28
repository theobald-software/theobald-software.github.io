---
ref: ecs-core-webservice-designer-02
layout: page
title: Deployment authentication
description: Deployment authentication
product: ecs-core
parent: webservice_authentication
permalink: /:collection/:path
weight: 1
lang: en_GB
---

The following authentication methods are supported for deploying web services with the WebService Designer: 

- **Deployment with API Key**: A dedicated API key created on the ECS Core Management site is used for authentication. The API key must have been created for deployment to a user of the ECS Core Management Site (can be created under *Administrators*).

- **Deployment with Basic Credentials**: A user created on the ECS Core Management Site under *Administrators* is used for authentication. Windows Credentials are not supported for deployment!    


The connection settings and authentication for deployment must be stored in the *Server Connection dialog* (in the WebService Designer menu under *Connections*). 

**Connection settings with API Key**

*Management Endpoint URL*: http://[ECS Core Server]:[ECS Core Management Site port (default 8085)] <br>
*API Key:* ECS Core API key  

Example:

![ecscore-webservicetest_1](/img/content/ecscore-webservicetest_1.jpg){:class="img-responsive"}

**Connection Settings with Basic Authentication**

*Management Endpoint URL:* http://[ECS Core Server]:[ECS Core Management Site port (default 8085)] <br>
*Username:* Username of a Dashboard User of the ECS Core Management Site<br>
*Password:* Password defined for the dashboard user on the management site. 

Example: 

![ecscore-webservicetest_1](/img/content/ecscore-webservicetest_2.jpg){:class="img-responsive"}

With *Test* you can test the connection settings. 