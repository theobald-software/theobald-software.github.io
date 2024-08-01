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

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

This section contains a general introduction to Xtract Universal.
This section is therefore a prerequisite for all subsequent sections.<br>
For a short introduction on how to use Xtract Universal, refer to our video tutorials [Get started with Xtract Universal - Creating an SAP source connection](https://www.youtube.com/watch?v=Qe8tRYNnYkc) and [Get started with Xtract Universal - Set up your first extraction](https://www.youtube.com/watch?v=pdlsfm0dLMA).

### Prerequisites

![XU-getting-started](/img/content/xu/getting-started-with-xu.png){:class="img-responsive" width="450px"}

1. Download the latest trial version of Xtract Universal from our website, see [Download Trial Version](https://theobald-software.com/en/download-trial).
Install Xtract Universal on a Windows Server / VM. 
2. Check if the network access to your SAP system is open, see [SAP TCP/IP Ports](https://kb.theobald-software.com/sap/sap-tcpip-ports).
3. Grant SAP user rights to access to the SAP instance, see [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).
4. The following components in Xtract Universal require customization in SAP: [Table](./sap-customizing/custom-function-module-for-table-extraction) (optional), [Table CDC](./sap-customizing/custom-function-module-for-tablecdc), [Report](./sap-customizing/install-report-custom-function-module), [OHS](./sap-customizing/preparation-for-ohs-in-bw), [DeltaQ](./sap-customizing/customizing-for-deltaq).
All other components in Xtract Universal do not require any customization.
5. Start Xtract Universal and follow the steps described in the following subsections.

{: .box-tip }
**Tip:** We recommend using an SAP system user for the production environment and an SAP dialog user with further administration rights (SE37, SE16, RSA3, ...) for the evaluation phase.
During evaluation a consultant might need to check data in the SAP system using the SAP GUI. An SAP system user cannot be used to access SAP via the SAP GUI.

******

Find more information on how to get started in the following subsections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}

