---
ref: xu-pbi_connector-06
layout: page
title: Single Sign On and SAP authentication
description: Single Sign On
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url:
---

When setting up the Xtract Universal data source in Power BI for the first time, you are prompted for one of the following auhtorization methods. Please select an auhtorization method according to your landscape.

* *Anonymous*: Select this option if the Xtract Universal server settings don't require any authentication for running an extraction.
* *Basic*: Select this option if the *Require SAP Credentials to be explicitly supplied for execution* checkbox has been flagged in the [SAP source](../../introduction/sap-connection#authentication) in Xtract Universal. Enter your SAP credentials in the respective input fields.
* *Windows*: Select this option if you want to use [SSO](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on) or if you have restricted access to extractions in the Xtract Universal server settings. Enter \<domain>\\\<Windows AD user> in the *user* field and your Windows password in the *Password* field.

Xtract Universal and the *Power BI Connector* destination support single sign on (SSO) to SAP. If SSO is set up correctly, the Windows credentials of the executing Power BI user are mapped to this user's SAP credentials. This leverages the user's SAP authorizations and Power BI will only show data that matches the user's SAP authorizations.


![XU_PBI_EN_SSO](/img/content/XU_PBI_EN_SSO.png){:class="img-responsive"}