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

Follow the [instructions](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup) on how to set up 3rd party extensibility for Azure-SSIS IR. Only the part with setting up an Azure storage container and creating a Shared Access Signature is relevant.

Download, unzip and place *Xtract IS for Azure* setup in the storage container created previously.
The setup consists of 2 files: XtractISSetup.exe (downloadable from our website or customer portal) and [main.cmd](https://files.theobald-software.com/download/XtractIS/main.cmd). 

![XISforAzure_StorageContainer](/img/content/XISforAzure_StorageContainer.jpg){:class="img-responsive" }

Before starting up the IR, make sure you reference the Custom Container SAS URI created above:

“When you provision or reconfigure your Azure-SSIS IR with PowerShell, before you start your Azure-SSIS IR, run the 
Set-AzureRmDataFactoryV2IntegrationRuntime cmdlet with the SAS URI of your container as the value for new SetupScriptContainerSasUri parameter” as outlined [here](https://docs.microsoft.com/en-us/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell).

![XISforAzure_PS_CustomSetupContainer](/img/content/XISforAzure_PS_CustomSetupContainer.jpg){:class="img-responsive" }

When you provision your Azure-SSIS IR via the Azure Portal UI, enter te Custom Container SAS URI in the respective field, as outlined here.

![XISforAzure_Poral_CustomSetupContainer](/img/content/XISforAzure_Poral_CustomSetupContainer.jpg){:class="img-responsive" }
Finally, start the Integration Runtime. ATTENTION: The startup process of the IR might take 20 to 30 minutes.