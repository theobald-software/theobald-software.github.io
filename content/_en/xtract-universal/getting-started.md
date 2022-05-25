---
ref: xtract-universal-04
layout: page
title: Getting Started with Xtract Universal
description: Getting Started with Xtract Universal
product: xtract-universal
parent: xtract-universal
childidentifier: getting-started
permalink: /:collection/:path
weight: 10
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=getting-started
---

This section contains a general introduction to Xtract Universal.
This section is therefore a prerequisite for all subsequent sections.<br>
For a short introduction on how to use Xtract Universal, refer to our tutorial video [Get started with Xtract Universal](https://www.youtube.com/watch?v=pdlsfm0dLMA).

### Prerequisites

![XU-getting-started](/img/content/xu/getting-started-with-xu.png){:class="img-responsive" width="450px"}

1. Installation of Xtract Universal on a Windows Server / VM. Download the latest trial version from our website, see [Download Trial Version](https://theobald-software.com/en/download-trial).
2. Network access to the SAP NetWeaver component must be granted, see [SAP TCP/IP Ports](https://kb.theobald-software.com/sap/sap-tcpip-ports).
3. Access to the RFC interface of the SAP instance must be granted, see [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).
4. The following components require customization in SAP: [Table](./sap-customizing/custom-function-module-for-table-extraction) (optional), [Report](./sap-customizing/install-report-custom-function-module), [OHS](./sap-customizing/preparation-for-ohs-in-bw), [DeltaQ](./sap-customizing/customizing-for-deltaq). <br>
SAP transport requests for the installation of custom function modules for the Table and Report components are provided in the installation directory of Theobald Software products. 
The OHS and DeltaQ components require manual SAP customizations.

{: .box-tip }
**Tip:** We recommend using an SAP system user for the production environment and an SAP dialog user with further administration rights (SE37, SE16, RSA3, ...) for the evaluation phase.
During evaluation a consultant might need to check data in the SAP system using the SAP GUI. SAP system users cannot be used to access SAP via the SAP GUI.

******

Find more information on how to get started in the following subsections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}

