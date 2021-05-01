---
ref: xu-parquet-01
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: parquet
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---

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

