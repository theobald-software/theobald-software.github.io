---
ref: xu-azure-blob-storage-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: azure-blob-storage
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=blob-settings
---
When you click the **Destination** button, you can set extraction-specific settings for the destination.

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

#### Table Name

determines the name of the target table. You have the following options:
- **Same as name of SAP object**: Copy the name of the SAP object.
- **Same as name of extraction**: The name of the extraction.
- **Custom**: Here you can define your own name.  

- **Append timestamp**: Adds the current timestamp in the format [_YYYY_MM_DD_hh_mm_ss_fff] to the file name of the extraction.

#### Column Name Style

Defines the column name. The following options are available: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/column_name_style_options.png){:class="img-responsive"}

**Code**: The technical column name from SAP is used as the column name, for example, MAKTX.<br>.
**PrefixedCode**: The technical name of the table is linked to the tilde character and the corresponding column name, for example T001W~MANDT<br>.
**CodeAndText**: The technical name and the description of the column from SAP are linked with an underscore and used as column names, for example, MAKTX_Material Description (Short Text).<br>.
**TextAndCode**: The description and the technical name of the SAP column are combined with an underscore to form the column name, for example, Material Description (Short Text)_MAKTX.

#### Date conversion

**Convert date strings**<br>
Converts the character-type SAP date (YYYYMMDD, for example, 19900101) to a formatted date (YYYY-MM-DD, for example, 1990-01-01). In the data target, the SAP date does not have a string data type but a real date type.

**Convert invalid dates to**<br>
If an SAP date cannot be converted to a valid date, this default date value is used.
invalid value is then converted to the entered date. NULL is supported as a value.

When an invalid SAP date is converted, the two special cases 00000000 and 9999XXXX are checked first.

**Convert 00000000 to**<br>
Converts the SAP date 00000000 to this value.

**Convert 9999XXXX to**<br>
Converts the SAP date 9999XXXX to this value.

#### Compression

**None**<br>
The data is transferred uncompressed and stored as a csv file.

**gzip**<br>
The data is transferred compressed and stored as a gz file. 

#### Blob Type

**Append Blob**<br>
Consists of blocks, analogous to Blob Type, and are optimized for attachment operations.

**Block Blob**<br>
Text and binary data consisting of data blocks that can be managed individually.



After the successful extraction you will find the data in the Azure BLOB Storage.

![azure-blob-file-gz](/img/content/azure-blob-file-gz.png){:class="img-responsive"}


