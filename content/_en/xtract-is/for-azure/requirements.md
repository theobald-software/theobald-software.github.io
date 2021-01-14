---
ref: xi-for-azure-01
layout: page
title: Requirements
description: Requirements
product: xtract-is
parent: for-azure
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=requirements1
---

### Necessary Components
- ADFv2
- Azure-SSIS Integration Runtime (IR)

### Setting up the Environment

Setting up the necessary environment is documented in the Microsoft documentation below:

- [Provision the Azure-SSIS Integration Runtime in Azure Data Factory with Azure portal UI ](https://docs.microsoft.com/en-us/azure/data-factory/tutorial-deploy-ssis-packages-azure) 
- [Provision the Azure-SSIS Integration Runtime in Azure Data Factory with PowerShell](https://docs.microsoft.com/en-us/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell)

Once the environment is running, develop a simple SSIS package (NOT containing any Xtract IS components) and deploy and run the package on the Azure-SSIS IR.

If running the SSIS package is successful, proceed to setting up Xtract IS for Azure on the Azure-SSIS IR. 