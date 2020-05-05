---
ref: xu-amzon-redshift-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: amzon-redshift
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=redshift-requirements
---

For using this destination you need a running Redshift instance and valid credentials.
Furthermore your client computer has to be authorized to access the cluster.

For establishing a connection to Redshift a suitable database driver is required.
Download and install the 64 bit Amazon Redshift ODBC driver from the official [website](https://docs.aws.amazon.com/redshift/latest/mgmt/install-odbc-driver-windows.html).

If the driver is missing the connection test will fail:

![XU-fehlender-redshift-treiber](/img/content/XU-fehlender-redshift-treiber.png){:class="img-responsive"}

Prior to Xtract Universal version 2.102.0 you have to install the Mono.Security.dll assembly instead of above mentioned ODBC driver.
You can download the complete Mono package from [the official project site](http://download.mono-project.com/archive/2.0/download/) or from any source of your choice. Please make sure to install the Mono.Security assembly, compiled on .NET 2.0. Other versions could cause problems with the assemblies used for accessing the Redshift Database.

There are two ways for installing the assembly: 

1. Register the Mono.Security assembly in your global assembly cache (gac):
- Open the command-line and browse to your Xtract Universal installation directory<br> 
	cd "C:\Program Files\XtractUniversal"
- Install the Mono.Security.dll file to your global assembly cache using gacutil<br>
	gacutil -i "C:\Program Files (x86)\Mono-2.0\lib\mono\2.0\Mono.Security.dll"<br>
	For more information, see the article abot [installing an assembly into the global assembly cache](https://docs.microsoft.com/en-us/dotnet/framework/app-domains/how-to-install-an-assembly-into-the-gac)
2. Copy the Mono.Security.dll file into your Xtract Universal directory.
