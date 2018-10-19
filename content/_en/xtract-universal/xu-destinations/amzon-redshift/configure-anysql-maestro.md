---
ref: xu-amzon-redshift-06
layout: page
title: Configure AnySQL Maestro
description: Configure AnySQL Maestro
product: xtract-universal
parent: amzon-redshift
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=configure-anysql-maestro
---

In this example we will explain how to configure and use AnySQL Maestro to manage your Redshift database.
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
- Now you can work with your Database .