---
ref: destinations-14
layout: page
title: Flat File - CSV
description: Flat File - CSV
product: xtract-universal
parent: destinations
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 10
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-flat-file
progressstate: 5
---

This destination is a CSV (comma-separated values) flat file. 


## Connection

### Adding a Destination

1. In the main window of the Designer, navigate to **Server > [Manage Destinations](./managing-destinations)**. The window “Manage Destinations” opens.
2. Click **[Add]** to create a new destination. The window "Destination Details" opens.
3. Enter a **Name** for the destination.
4. Select the destination **Type** from the drop-down menu.

### Destination Details
![CSV-Flat-Destination-Details](/img/content/xu/CSV-Flat-Destination-Details.png){:class="img-responsive"}

**File output path**<br>
Enter the directory to save the destination flat files in. If the entered folder does not exist, a new folder is created.


{: .box-note }
**Note:** To write flat files to a network drive, you need to: <br>
\- Enter the **File output path** in [UNC format](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats#unc-paths) e.g., `\\Server2\Share\Folder1`.<br>
\- Run the [Xtract Universal service](../advanced-techniques/service-account) by a user with write permission to the directory. 
 

{% include _content/en/xu-specific/destinations/general/csv-settings.md %}														 

{% include _content/en/xu-specific/destinations/general/convert-encoding.md %}	

### Column encryption
{% include _content/en/xu-specific/destinations/general/column-encryption.md %}


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_flatfile_csv_Destination](/img/content/XU_flatfile_csv_Destination.png){:class="img-responsive"}
      
{% include _content/en/xu-specific/destinations/general/file-name.md %}	 
{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}	  
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}	  
 
### Existing files
**Replace file**: The export process overwrites existing files.<br>
**Append results**: The export process appends new data to an already existing file.<br>
**Abort extraction**: The process is aborted, if the file already exists.  

### File Splitting

**File Splitting**<br>
Writes extraction data of a single extraction to multiple files. 
Each filename is appended by *_part[nnn]*. 

**Max. file size** <br>
The value set in *Max. file size* determines the maximum size of each file. 

{: .box-note }
**Note:** The option *Max. file size* does not apply to gzip files. 
The size of a gzipped file cannot be determined in advance.
