---
ref: destinations-80
layout: page
title: Flat File - Parquet
description: Parquet
product: xtract-universal
parent: destinations
childidentifier: parquet
permalink: /:collection/:path
weight: 11
lang: en_GB
progressstate: 5
---


{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

## Connection
The following section describes the loading of the SAP extraction data to an Parquet Database destination.

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![Parquet-Destination-Details](/img/content/xu/parquet/parquet_destination_details.png){:class="img-responsive"}

**Output directory**<br>
Enter the directory to save the destination flat files in. If the entered folder does not exist, a new folder is created.

{: .box-note }
**Note:** To write flat files to a network drive, you need to: <br>
\- Enter the **Output directory** in [UNC format](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats#unc-paths) e.g., `\\Server2\Share\Test\`.<br>
\- Run the [Xtract Universal service](../advanced-techniques/service-account) by a user with write permission to the directory. 

**Compatibility mode**<br>
You can choose between *Pure*, *Spark* and *BigQuery* for the compatibility mode. 
*Spark* does not support the data types used in pure mode, so other data types need to be used.
*BigQuery* formats columns names to be compatible with Google BigQuery, see [BigQuery Documentation: Column Names](https://cloud.google.com/bigquery/docs/schemas?hl=en#column_names).

### Checking the extraction result

1. Check the previously defined directory for saving Parquet files.
2. Open the Parquet file with an editor of your choice.

## Settings

### Opening Destination Settings

1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

### Destination Settings
The following settings can be defined for the Parquet destination.  
  
![XU_parquet_Destination](/img/content/xu/parquet/parquet_destination_settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}        
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Existing files
The option *Existing files* is connected to the *Directory* option defined in the [Destination Details](#destination-details).<br>
**Replace file** - replaces the existing file in the directory, where the parquet file is saved.<br>
**Abort extraction** - aborts the extraction, if the flat file already exists in the defined directory.
