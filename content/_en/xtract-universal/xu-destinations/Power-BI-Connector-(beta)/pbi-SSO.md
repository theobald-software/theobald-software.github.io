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

When setting up the Xtract Universal data source in Power BI, you will be prompted for one of the following auhtorisation methods. Please select one according to your landscape.

* *Anonymous*: Select if your Xtract Universal server settings don't require any authentication for running an extraction
* *Basic*: Select if the settings in your Xtract Universal SAP source or extraction require SAP credentials for extraction execution. Enter your SAP credentials here.
* *Windows*: Select if you want to use [Single Sign On](../../advanced-techniques/sap-single-sign-on) or if you have restricted access to extractions in the Xtract Universal server settings. Enter \<domain>\\\<Windows AD user> in the *user* field and your Windows password in the *Password* field.

Xtract Universal and the *Power BI Connector* destination support single sign on (SSO) to SAP. If SSO has been set up correctly, the Windows credentials of the executing Power BI user will be mapped to his SAP credentials. This way the user's SAP authorizations will be leveraged and he will only see SAP data that he's authorized to see.
