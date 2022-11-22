---
ref: destinations-23
layout: page
title: Amazon Redshift
description: Amazon Redshift
product: xtract-universal
parent: destinations
childidentifier: amazon-redshift
permalink: /:collection/:path
weight: 23
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=redshift
progressstate: 5
---

The following section describes the loading of the SAP extraction data to the [Redshift Database](https://aws.amazon.com/redshift/) destination.<br>
For more information on Amazon Redshift, see [Getting Started with Amazon Redshift](hhttps://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html).

## Requirements

- Run a running instance and valid credentials.
- Your client computer has to be authorized to access the cluster.
- For establishing a connection to Redshift a suitable database driver is required.
- Download and install the 64 bit Amazon Redshift ODBC driver from the official [website](https://docs.aws.amazon.com/redshift/latest/mgmt/install-odbc-driver-windows.html).

{: .box-note }
**Note:** If the driver is missing the connection test will fail.

![XU-fehlender-redshift-treiber](/img/content/XU-fehlender-redshift-treiber.png){:class="img-responsive"}

Prior to Xtract Universal version 2.102.0 you have to install the Mono.Security.dll assembly instead of above mentioned ODBC driver.
You can download the complete Mono package from [the official project site](http://download.mono-project.com/archive/2.0/download/) or from any source of your choice. Please make sure to install the Mono.Security assembly, compiled on .NET 2.0. Other versions could cause problems with the assemblies used for accessing the Redshift Database.

### Installation
There are two ways to install the assembly: 

1. Register the Mono.Security assembly in your global assembly cache (gac):
- Open the command-line and browse to your Xtract Universal installation directory<br> 
	`cd "C:\Program Files\XtractUniversal"`
- Install the Mono.Security.dll file to your global assembly cache using gacutil<br>
	`gacutil -i "C:\Program Files (x86)\Mono-2.0\lib\mono\2.0\Mono.Security.dll"`<br>
	For more information, see the article abot [installing an assembly into the global assembly cache](https://docs.microsoft.com/en-us/dotnet/framework/app-domains/install-assembly-into-gac)
2. Copy the Mono.Security.dll file into your Xtract Universal directory.

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![XU_redshift_destination](/img/content/XU_redshift_destination.png){:class="img-responsive"}

**Endpoint**<br>
Defines the server address of the Redshift System.
(Found in the Redshift Management Console)

**Port**<br>
Defines the port number for the connection.

**Username / Password**<br>
Defines the Username and Password of the database user.

**Database**<br>
Defines the name of the database you want to write to.

**Test Connection**<br>
Checks the database connection.


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form](/img/content/redshift-configurations.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/debugging-bulk-insert.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}


## Merging Data

{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

## Configuring AnySQL Maestro


This example shows how to configure and use AnySQL Maestro to manage your Redshift database.
You can use any other [db client](https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-using-workbench.html) for that matter. Steps should be similar. 

- Download and install AnySQL Maestro from [here](http://www.sqlmaestro.com/de/products/anysql/maestro/download/).
- Download and install ODBC driver for PostgreSQL from [here](http://ftp.postgresql.org/pub/odbc/versions/msi/psqlodbc_08_04_0200.zip).
- Launch AnySQL Maestro.
- Click "Create Database Profiles".


![RS-Configure-AnySQL-Add-Profile-Button](/img/content/RS-Configure-AnySQL-Add-Profile-Button.png){:class="img-responsive"}

- In the Create Database Profiles Wizard, click on the button next to the Connection string field.

![RS-Configure-AnySQL-Database-Profiles-Wizard](/img/content/RS-Configure-AnySQL-Database-Profiles-Wizard.png){:class="img-responsive"}

- Go to "Connection" and enable "Use connection string" then click "Build...".
- Go to "Machine Data Source" and Click "New..." (There might be a pop up with a warning, you can just close it with a click on "Ok").

- Click "Next" and choose "PostgreSQL Unicode", then click "Next" and "Finish".

![RS-Configure-AnySQL-Choose-Driver](/img/content/RS-Configure-AnySQL-Choose-Driver.png){:class="img-responsive"}

- Enter your credentials, click "Test" to check if they are correct and click "Save".

![RS-Configure-AnySQL-Enter-Credentials](/img/content/RS-Configure-AnySQL-Enter-Credentials.png){:class="img-responsive"}

- Choose your connection and click "Ok".
- Enter the database name and your credentials and select SSL-Mode "allow", then click "OK".

- Enter your credentials and select the initial catalog, then click "OK".

![RS-Configure-AnySQL-Data-Link-Properties](/img/content/RS-Configure-AnySQL-Data-Link-Properties.png){:class="img-responsive"}

- Click "Next", then "Ready".
- Now you can work with your database.

## Related Links
- [Amazon AWS: Getting Started - Backup & Restore with AWS](https://aws.amazon.com/backup-restore/getting-started/?nc1=h_ls)
- [Amazon Redshift: Getting Started with Amazon Redshift](hhttps://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html)
