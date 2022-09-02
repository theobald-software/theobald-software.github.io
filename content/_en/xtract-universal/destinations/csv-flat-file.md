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
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_flatfile_csv_Destination](/img/content/XU_flatfile_csv_Destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}	 

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}	  
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}	  
 
### Existing files
**Replace file**: The export process overwrites existing files.<br>
**Append results**: The export process appends new data to an already existing file. See also [Column Mapping](#column-mapping).<br>
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

### Column Mapping
Activate **Column Mapping** to map the columns of an extraction to the columns of an existing file.
1. Click **[...]** and select the file you want to extend with your data. Supported are .csv and .hyper files.
2. Click **[Map]** to assign collumns. The window "Column Mapping" opens.<br>
![Column-Mapping](/img/content/column-mapping.png){:class="img-responsive"}
3. If the column names of the extraction match the column names in the file, click **[Auto map by name]**.<br>
If the column names do not match, assign columns manually by selecting the SAP column corresponding to the destination column from the dropdown menu.
4. Click **[OK]** to confirm your input.
5. If you want to append the extracted data to an existing file, select **Append results** in the section [Existing Files](#existing-files).<br>
If you want to create a new file with the column names of the mapped destination file, select **Replace results**.

