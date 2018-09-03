---
layout: page
title: Requirements
description: Requirements
product: xtract-is
parent: xtract-is-for-azure
permalink: /:collection/:path
weight: 1
lang: en_GB
---

Irrespective of Xtract IS for Azure, you need to have an ADFv2 and an Azure-SSIS Integration Runtime (IR) in place.

Please take a look at the Microsoft documentation on how to set up this environment.

[Provision the Azure-SSIS Integration Runtime in Azure Data Factory ]()or
[Provision the Azure-SSIS Integration Runtime in Azure Data Factory with PowerShell]()

Once this is done, develop a simple SSIS package (NOT containing any Xtract IS components) and deploy and run this package on the Azure-SSIS IR.

If this step is succesful, we can proceed to setting up Xtract IS for Azure on that IR. 