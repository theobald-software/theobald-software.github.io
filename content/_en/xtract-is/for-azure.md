---
ref: xtract-is-03
layout: page
title: Xtract IS for Azure
description: Xtract IS for Azure
product: xtract-is
parent: xtract-is
childidentifier: for-azure
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=xtract_is_for_azure
progressstate: 3
---
### About Azure SSIS-IR

*Xtract IS for Azure* is a solution that allows running SSIS packages, containing Xtract IS components, on an [Azure-SSIS Integration Runtime (IR), based on Microsoft's Azure Data Factory v2 (ADFv2)](https://docs.microsoft.com/en-us/azure/data-factory/create-azure-ssis-integration-runtime).

With Azure-SSIS IR, SSIS packages are still developed on a local (on-prem) Visual Studio/SSDT environment.
Instead of deploying the developed packages to an on-prem SSIS server, the packages are deployed to an Azure-SSIS IR to be scheduled and run in the Azure cloud.

### Architecture

![XISforAzure_Architecture](/img/content/xis/Xtract_IS_for_Azure.png){:class="img-responsive"}

Xtract IS for Azure assures that Azure-SSIS IR supports SSIS packages, which contain Xtract IS components for connecting to an SAP source and extracting data from SAP.
The SAP system needs to be accessible from the Azure-SSIS IR, for instance through a VPN tunnel or a self-hosted Integration Runtime.

Xtract IS for Azure is based on the existing Xtract IS (on-prem) version.
Hence Xtract IS for Azure offers exactly the same SAP data extraction functionality as Xtract IS.

**Prerequisites and installation on a Visual Studio/SSDT environment** (for development of SSIS packages) don't differ from the existing [Xtract IS Setup](./introduction/installation).

**Prerequisites and installation on an Azure-SSIS IR** (for running SSIS packages) are described in the following sections.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
