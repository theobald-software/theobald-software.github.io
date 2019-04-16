---
ref: xu-pbi_connector-02
layout: page
title: Single Sign On and SAP authentication
description: Single Sign On
product: xtract-universal
parent: Power-BI-Connector-(beta)
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url:
---

Xtract Universal and the *Power BI Connector* destination support single sign on (SSO) to SAP. If SSO is set up correctly, the Windows credentials

* *Anonymous*: Select if your Xtract Universal server settings don't require any authentication for running an extraction
* *Basic*: Select if your Xtract Universal server or extraction settings require SAP credentials for extraction execution. Enter your SAP credentials here.
* *Windows*: Select if you want to use [Single Sign On](../advanced-techniques/SAP-Single-Sign-On). Enter \<domain>\\\<Windows AD user> in the *user* field and your Windows password in the *Password* field.