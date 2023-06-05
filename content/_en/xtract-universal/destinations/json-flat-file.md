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

## Connection

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
\- Enter the **File output path** in [UNC format](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats#unc-paths) e.g., `\\Server2\Share\Test\`.<br>
\- Run the [Xtract Universal service](../advanced-techniques/service-account) by a user with write permission to the directory. 

### Checking the extraction result

1. Check the previously defined directory for saving JSON flat files.
2. Open the JSON flat file with an editor of your choice.
![JSON-Flat-File](/img/content/xu/json/json_flat-file.png){:class="img-responsive"}

## Settings

### Opening Destination Settings

1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination JSON flat file destination.  
  
### Destination Settings
The window "Destination Settings" consists of the following subsections:
- File Name
- Column Name Style
- Date Conversion
- Existing files

![XU_flatfile_JSON_Destination](/img/content/xu/json/XU_flatfile_JSON_Destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}        
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Existing files
The option *Existing files* is connected to the *Directory* option defined in the [Destination Details](#destination-details). <br>
**Replace file** - replaces the existing file in the directory, where the flat file is saved. <br>
**Abort extraction** - aborts the extraction, if the flat file already exists in the defined directory.
