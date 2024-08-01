---
ref: xi-for-azure-02
layout: page
title: Installation
description: Installation
product: xtract-is
parent: for-azure
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=installation1
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/xtract-is-for-azure/introduction/).

The following section describes how to setup Xtract IS for Azure on an Azure SSIS-IR for running SSIS packages containing Xtract IS components.

### Manual Setup
**1. Create an Azure Storage container** <br>
Follow the [instructions](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#standard-custom-setup) on how to set up 3rd party extensibility for Azure-SSIS IR. Only the part with setting up an Azure storage container and creating a Shared Access Signature is relevant.

Place *XtractISSetup.exe* and [main.cmd](https://cdn-files.theobald-software.com/download/XtractIS/main.cmd) into the Azure storage container created above.

![XISforAzure_StorageContainer](/img/content/XISforAzure_StorageContainer.png){:class="img-responsive" }

When running a trial version of Xtract IS for Azure, place the two mentioned files *XtractISSetup.exe* and *main.cmd* into the storage container.
With the purchase of Xtract IS for Azure a [license file](../introduction/installing-the-license) is provided. Place the license file in the storage container, as well.


**2. Add Azure Storage Container to SSIS-IR** <br>
- When provisioning the Azure-SSIS IR via a [PowerShell](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell#create-an-azure-ssis-integration-runtime) populate the ```-SetupScriptContainerSasUri```parameter with the Azure Storage container's SAS URI.
- When provisioning the Azure-SSIS IR via the Azure Portal UI, enter the Azure Storage container's SAS URI in the *Custom setup container SAS URI* field. 

![XISforAzure_Portal_CustomSetupContainer](/img/content/XISforAzure_Portal_CustomSetupContainer.png){:class="img-responsive" }
Start the Integration Runtime. During the startup of the Intergation Runtime the *main.cmd* is executed, which triggers an unattended installation of Xtract IS for Azure on the SSIS-IR.

{: .box-note }
**Note** The startup process of the Azure SSIS-IR might take up to 20 minutes.

{: .box-tip }
**Recommendation:** A regular update of the software is crucial for stable performance, especially major changes and high ([H]) priority
updates. Check the [Version History](https://kb.theobald-software.com/version-history/xtract-is-version-history) for updates. A newer version
can be installed over the older version. 

### Express Custom Setup
As an alternative to the manual setup, the Express Custom Setup can be used for installing Xtract IS for Azure on an Azure SSIS-IR. See [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#express-custom-setup) for more information.

![XISforAzure_ExpressCustomSetup_1](/img/content/XISforAzure_ExpressCustomSetup_1.png){:class="img-responsive" }

![XISforAzure_ExpressCustomSetup_2](/img/content/XISforAzure_ExpressCustomSetup_2.png){:class="img-responsive" }

For using Xtract IS for Azure via the Express Custom Setup a valid license file is required.
The Express Custom Setup installs a specific version of Xtract IS for Azure. For information on the currently used version, see [Microsoft Documentation - Installing licensed components](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#installing-licensed-components) or contact [Theobald Software](mailto:info@theobald-software.com).

{: .box-note }
**Note** The specific version of Xtract IS for Azure is updated in regular intervals without further notice.


### Azure SSIS Cluster ID
After purchasing Xtract IS for Azure the [Cluster ID of the Azure SSIS-IR](https://docs.microsoft.com/en-us/azure/data-factory/how-to-develop-azure-ssis-ir-licensed-components) is required by Theobald Software for generating a license file. Refer to the knowledge base article [Determining the Azure SSIS-IR Cluster ID](https://kb.theobald-software.com/xtract-is/determining-the-azure-cluster-ID) for details on how to determine the Cluster ID.

### Using a self-hosted Integration Runtime (SHIR)

Xtract IS for Azure supports usage of SHIR for connecting to an on-prem SAP system from Azure SSIS-IR. See [Microsoft documentation - Configure a self-hosted IR as a proxy for an Azure-SSIS IR in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis) to get general information about SHIR setup. 

