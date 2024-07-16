---
ref: destinations-101
layout: page
title: SAP HANA
description: SAP HANA
product: xtract-universal
parent: destinations
childidentifier: sap-hana
permalink: /:collection/:path
weight: 101
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=hana
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

The following section describes how to setup Xtract Universal's HANA destination.
The HANA destination supports loading SAP data to a SAP HANA database and to SAP Data Warehouse Cloud. <br>


## Requirements

For establishing a connection to the HANA database or SAP Data Warehouse Cloud the *SAP HANA Data Provider for Microsoft ADO.NET*, part of the SAP HANA Client setup, is required.

 {: .box-warning }
**Warning!** The HANA destination only works with SAP HANA data provider version **2.17.22**.

## Connection


{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details
The following settings can be defined for the HANA database or SAP Data Warehouse Cloud (DWC) connection:

- SAP HANA database
![hana-destination](/img/content/hana-destination2.png){:class="img-responsive"}
- SAP Data Warehouse Cloud
![hana-destination](/img/content/hana-destination.png){:class="img-responsive"}

**Server Name**<br>
Enter the address of the server (including the port number). Note the different port numbers for HANA and DWC (see screenshots).

**User Name**<br>
Enter the SAP HANA/DWC user name. 

**Password**<br>
Enter the user password.

**Database**<br> 
Enter the name of the database.
 
**Schema**<br>
Enter the name of the database schema.

**Use encryption**<br>
Activates connection encryption. This is required when connecting to SAP DWC.

**Test Connection**<br>
Check the database connection.  

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form_debug](/img/content/dest_set_hana.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/debugging-bulk-insert.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}

## Merging Data

{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

******
## Related Links

- [SAP Help](https://help.sap.com/viewer/0eec0d68141541d1b07893a39944924e/2.0.00/en-US/469dee9e6d611014af70d4e9a9cd6b0a.html)
- [SAP HANA Client setup](https://blogs.sap.com/2017/12/14/sap-hana-2.0-client-installation-and-update-by-the-sap-hana-academy/)


