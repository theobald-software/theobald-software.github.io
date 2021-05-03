---
ref: destinations-13
layout: page
title: Flat File - JSON
description: Flat File - JSON
product: xtract-universal
parent: destinations
childidentifier: json-flat-file
permalink: /:collection/:path
weight: 11
lang: en_GB
progressstate: 5
---
The JSON flat file destination creates a generic JSON file.


### Adding a Destination

1. In the main window of the Designer, navigate to **Server > [Manage Destinations](./managing-destinations)**. The window “Manage Destinations” opens.
2. Click **[Add]** to create a new destination. The window "Destination Details" opens.
3. Enter a **Name** for the destination.
4. Select the destination **Type** from the drop-down menu.

### Destination Details

![JSON-Flat-Destination-Details](/img/content/xu/json/json-flat-Destination-Details.png){:class="img-responsive"}

**File output path**<br>
Enter the directory to save the destination flat files in. If the entered folder does not exist, a new folder is created.

{: .box-note }
**Note:** To write flat files to a network drive, you need to: <br>
\- Enter the **File output path** in UNC format.<br>
\- Run the [Xtract Universal service](../advanced-techniques/service-account) by a user with write permission to the directory. 

### Checking the extraction result

1. Check the previously defined directory for saving JSON flat files.
2. Open the JSON flat file with an editor of your choice.
![JSON-Flat-File](/img/content/xu/json/json_flat-file.png){:class="img-responsive"}
