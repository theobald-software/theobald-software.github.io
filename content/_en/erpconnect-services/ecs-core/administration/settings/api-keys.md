---
ref: ecs-core-administration-settings-03
layout: page
title: API Keys
description: API Keys
product: erpconnect-services
parent: settings
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=api_keys
---

ECS Core supports authentication via **API Key** (**A**pplication **P**rogramming**I**nterface Key). 

API keys can be used as an authorization method when access should not use private user data. An API key acts therefore as an unique identifier so that not every single user has to athenticate indivdually. API Key is the typical authentication method, when flexible, user agnostic authentication is required (Keys could be added, regenerated, or removed easily).

Detailed information on all supported authentication methods can be found here. 

To add a new API key click on *Add API Key* in the *API Keys* folder. You have to assign a new API Key to a user. Only valid Windows users with valid Windows password are allowed.  



After creating the key it will be shown in the *API Keys* section. You can use it now from a source Application for authentication (note, that it might be needed to clear the caches as it is described in Services Site). 



Click on the API Key to see the options *Update, Remove* and *Show BASE64 encoded API Key*.

You need the *Update* option if the Windows user credentials have changed. BASE64 encoded API Keys are required in some applications (i.e. REST client authorization header). 

![ecscore-managementsite36](/img/content/ecscore-managementsite36.png.png){:class="img-responsive"}