---
layout: page
title: Configuring Single Sign-On
description: Configuring Single Sign-On
product: erpconnect-services
parent: sharepoint-configuration
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-configuring-single-sign-on
---

When a user connects to a SharePoint site, the user is authenticated with one of the supported methods in SharePoint, for example NTLM, Kerberos, Basic or Forms-Based Authentication.

It is very common that the account and credentials for a user in SharePoint are different from the account and credentials for that same user in the external SAP system. For example, user 'Bob Smith' might be able to seamlessly connect to a SharePoint site after logging on to Windows with his user account 'Contoso\BobS' and password. To connect to his SAP system however, Bob has to use his SAP user account 'BSMITH' and a different password.

In such cases, you can configure the BCS Connector to work with the SharePoint Secure Store Service to store and map user credentials that are required by the external SAP system. 

At design time, in the BCS Connector Designer, you will specify a *Secure Store ID* as part of your *SAP Connection Settings*. The *Secure Store ID* is the name of a *Secure Store Target Application* which stores the credential mappings for your SAP system. When you save your BCS Model to SharePoint, the model will contain the required authentication settings for use with the Secure Store at runtime.

At runtime, the SharePoint BCS will perform a lookup in the *Secure Store Target Application* to acquire the SAP credentials for the current user. The BCS will connect to the external SAP system using the credentials from the *Secure Store Target Application*.
