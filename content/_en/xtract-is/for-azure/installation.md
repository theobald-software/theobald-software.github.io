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

This section describes how to setup Xtract IS for Azure on an Azure SSIS-IR for running SSIS packages containing Xtract IS components.


### Manual setup
**Create an Azure Storage container** <br>
Follow the [instructions](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#standard-custom-setup) on how to set up 3rd party extensibility for Azure-SSIS IR. Only the part with setting up an Azure storage container and creating a Shared Access Signature is relevant.

Place *XtractISSetup.exe* and [main.cmd](https://cdn-files.theobald-software.com/download/XtractIS/main.cmd) in the Azure storage container created above.

![XISforAzure_StorageContainer](/img/content/XISforAzure_StorageContainer.png){:class="img-responsive" }

When running a trial version of Xtract IS for Azure only those two files need to be placed in the storage container.
With the purchase of Xtract IS for Azure a license file is provided. Place the license file in the storage container, as well.

<br>
**Add Azure Storage container to SSIS-IR** <br>
- When provistioning the Azure-SSIS IR via a [PowerShell](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell#create-an-azure-ssis-integration-runtime) populate the ```-SetupScriptContainerSasUri```parameter with the Azure Storage container's SAS URI.
- When provisioning the Azure-SSIS IR via the Azure Portal UI, enter the Azure Storage container's SAS URI in the *Custom setup container SAS URI* field . 

![XISforAzure_Portal_CustomSetupContainer](/img/content/XISforAzure_Portal_CustomSetupContainer.png){:class="img-responsive" }
Start the Integration Runtime. On startup the *main.cmd* is executed which triggers a silent installation of Xtract IS for Azure on the SSIS-IR.

{: .box-note }
**Note** The startup process of the Azure SSIS-IR might take up to 20 minutes.


### Express Custom Setup
As an alternative to the manual setup, the Express Custom Setup can be used for installing Xtract IS for Azure on an Azure SSIS-IR.

Refer to the Microsoft documentation [here](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#express-custom-setup).

![XISforAzure_ExpressCustomSetup_1](/img/content/XISforAzure_ExpressCustomSetup_1.png){:class="img-responsive" }

![XISforAzure_ExpressCustomSetup_2](/img/content/XISforAzure_ExpressCustomSetup_2.png){:class="img-responsive" }

For using Xtract IS for Azure via the Express Custom Setup a valid license file is required (contact Theobald Software if you don't know where to get this license file).
The Express Custom Setup installs a specific version of Xtract IS for Azure. For currently used version see [here](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#installing-licensed-components) or contact Theobald Sofware.

{: .box-note }
**Note** This version is being updated in regular intervals w/o further notice.


### Azure SSIS Cluster ID
After purchasing Xtract IS for Azure the [Cluster ID of the Azure SSIS-IR](https://docs.microsoft.com/en-us/azure/data-factory/how-to-develop-azure-ssis-ir-licensed-components) is required by Theobald Software for generating a license file. Please refer to the following [kb article](https://kb.theobald-software.com/xtract-is/determining-the-azure-cluster-ID) on how to determine the Cluster ID.

### Using a self-hosted Integration Runtime (SHIR)

Xtract IS for Azure supports usage of SHIR for connecting to an on-prem SAP system from Azure SSIS-IR. General information about this setup can be found in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis). 

We have documented the setup for Xtract IS for Azure in the following [kb article](https://kb.theobald-software.com/xtract-is/XIS-for-Azure-SHIR).