---
ref: destinations-80
layout: page
title: Parquet
description: Parquet
product: xtract-universal
parent: destinations
childidentifier: parquet
permalink: /:collection/:path
weight: 80
lang: en_GB
progressstate: 5
---
## Connection
The following section describes the loading of the SAP extraction data to an Parquet Database destination.

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![Parquet-Destination-Details](/img/content/xu/parquet/parquet_destination_details.png){:class="img-responsive"}

**Output directory**<br>
Enter an existing local directory in which the extracted files are stored.

{: .box-note }
**Note:** Filling out the field **Output directory** creates a new folder, if it doesn't exist. 

**Compatibability mode**<br>
You can choose between *Pure* and *Spark* for the compatibility mode. *Spark* does not support the data types used in pure mode, so other data types need to be used.

### Checking the extraction result

1. Check the previously defined directory for saving Parquet files.
2. Open the Parquet file with an editor of your choice.

## Settings

### Opening Destination Settings

1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the Parquet destination.  
  
![XU_parquet_Destination](/img/content/xu/parquet/parquet_destination_settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/column-name-style.md %}        
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Existing files
The option *Existing files* is connected to the *Directory* option defined in the [Destination Details](../parquet#destination-details).<br>
**Replace file** - replaces the existing file in the directory, where the parquet file is saved.<br>
**Abort extraction** - aborts the extraction, if the flat file already exists in the defined directory.
