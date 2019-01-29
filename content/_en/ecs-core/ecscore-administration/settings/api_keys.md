---
ref: ecs-core-administration-settings-03
layout: page
title: API Keys
description: API Keys
product: ecs-core
parent: settings
permalink: /:collection/:path
weight: 3
lang: en_GB
---

ECSCore supports authentication with a **API Key** (**A**pplication **P**rogramming**I**interface **K**ey).

API keys can be used as an authentication method if access is not to be made via user-specific access data. 
An API key acts as a unique identifier and can easily be added, regenerated or removed. 
For many cloud scenarios, this is a viable and typical authentication mechanism.

To add a new API Key, click *Add API Key* in the API Keys section. You can add an API key for two types of users: <br>.
1. Valid **Windows user** with Windows password: Such an API key generated for a Windows user can only be used for authentication within a cloud application that consumes web services created with ECS Core or REST API provided by ECS Core. <br>
2. **Dashboard user** created on the Management Site: Such an API key, created on a user independent from Windows, can only be used for deployment of web services in the WebService Designer.   

![ecscore-apikeys](/img/content/ecscore_apikeys.png){:class="img-responsive"}

For details about deploying and consuming services, see the [Web Service Authentication](.../webservices/webservice_authentication) section.
 
After the key is created, it is displayed under API Keys. You may need to clean up the cache first (described in *System Operations*). 

Click on the API key to display the following options: 

- Update
- remove

You will need the *Update* option if the user's credentials have changed.
