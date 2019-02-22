---
ref: ecs-core-administration-06
layout: page
title: Secure Stores
description: Secure Stores
product: erpconnect-services
parent: administration
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=secure_store
---

In the *Secure Stores* ribbon you can add a Secure Store to connect specific Windows credentials with SAP User. Doing this the windows user gets seamless access to the SAP System with individual User and password.


First go to the *Secure Stores* menu:


Click the *Add Secure Store* button and select an appropriate name for a new Secure Store (e. g. *ts_store*).


The newly created Secure Store will be shown on the left side of the screen. Click the *Credentials* tab where you can define the user credentials. 


*Add Credentials* to enter new user credentials.

In this example Windows User *hans.mueller* will be mapped to SAP User *hmueller* when current ts_store Secure Store is selected.



The user is then shown in the Credentials tab below Name.


If a user new tries to authenticate against ECSCore with Windows user *hans.mueller* he will access the SAP system with logon user *hmueller*.   
A Secure Store can consist of many user connections. A SAP user must have at least five characters.

Now you can select select the above created Secure Store in the [Services](./services) Section as authentication method:


