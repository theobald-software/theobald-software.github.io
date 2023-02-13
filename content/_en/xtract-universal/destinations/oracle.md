---
ref: destinations-70
layout: page
title: Oracle
description: Oracle
product: xtract-universal
parent: destinations
childidentifier: oracle
permalink: /:collection/:path
weight: 70
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=oracle
progressstate: 5
---

The following section describes the loading of the SAP extraction data to an Oracle Database destination.

## Requirements

Starting from the version Xtract Universal 4.2.34.0 the Oracle data provider is included in to the setup of Xtract Universal. 
There are no additional installations needed to use Oracle database destination.

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details


The Oracle destination supports 3 types of connections:
- **Default:** Connect to an Oracle database (on-premises).
- **Wallet:** Connect to an Oracle Database using a connection from a wallet. Use this option when [mTLS (Mutual TLS)](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/connect-introduction.html#GUID-9A472E49-3B2B-4D9F-9DC2-D3E6E4454285) authentication is required.
- **Connect Descriptor:** Connect to an Oracle database (on-premises and cloud) via TLS.

#### Default

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}

**Host** <br>
Enter the name of the Oracle server.

**Port** <br>
Enter the Oracle server connection port (Default: 1521).

**SID / Service name** <br>
Enter the unique name (SID) or the alias (service name) of the Oracle database.

**Username** <br> 
Enter the user name.

**Password** <br>
Enter the password.

**Test Connection** <br>
Check the database connection. 

#### Wallet

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_2.png){:class="img-responsive"}

**TNS Name** <br> 
Enter the TNS name of the connection as it is stored in the `tnsnames.ora` file in your wallet.<br>
For more information, see [Oracle Documentation: Download Client Credentials (Wallets)](https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/cswgs/autonomous-connect-download-credentials.html#GUID-B06202D2-0597-41AA-9481-3B174F75D4B1).

**Username** <br> 
Enter the user name.

**Password** <br>
Enter the password.

**Wallet location** <br> 
Enter the path to your wallet, e.g., `C:\Oracle\Wallet`. <br>
Note that the wallet location must be accessible for the user that runs the Xtract Universal service.<br>

**Test Connection** <br>
Check the database connection. 

#### Connect Descriptor

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_3.png){:class="img-responsive"}

**Connect Descriptor** <br>
Enter a connect descriptor (connection string), see [Oracle Documentation: View TNS Names and Connection Strings for an Autonomous Database Instance](https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/cswgs/autonomous-connection-strings-view.html#GUID-BE884A1B-034D-4CD6-9B71-83A4CCFDE9FB).<br>
A connect descriptor has the following format:<br>
```
*(DESCRIPTION =*<br>
*(ADDRESS = (PROTOCOL = TCP)*<br>
*(HOST = [oracle host name])(PORT = [port number]))*<br>
*(CONNECT_DATA =*<br>
*(SERVER = DEDICATED)*<br>
*(SERVICE_NAME = [oracle service name])))*<br>
```

**Username** <br> 
Enter the user name.

**Password** <br>
Enter the password.

**Test Connection** <br>
Check the database connection. 

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form](/img/content/oracle-configurations.png){:class="img-responsive"}


{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}


### Debugging

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}

{: .box-warning}
**Warning! Performance decrease!**
The performance decreases when bulk insert is disabled.
Disable the bulk insert only when necessary, e.g., upon request of the support team.


By activating the checkbox **Disable bulk operations**, 
the default bulk insert is deactivated when writing to a database.

This option enables detailed error analysis, if certain data rows cannot be persisted on the database.
Possible causes for the incorrect behavior could be incorrect values with regard to the stored data type.

Debugging needs to be deactivated again after the successful error analysis, otherwise the performance of the database write processes remains low. 

#### Using Custom SQL

{: .box-note }
**Note:** Bulk operations are generally supported when using [Custom SQL statements](#sql-commands) (e.g., by *Row Processing*) with an Oracle destination.

{: .box-tip }
**Tip:** To increase performance when using [Custom SQL statements](#sql-commands), it is recommended to perform the custom processing in the *Finalization* step.

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}

## Merging Data
{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

