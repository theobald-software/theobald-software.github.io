---
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: gooddata
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=gooddata-settings
---

You can define the following extraction-specific settings:

![GD-Extraction-Specific-Settings](/img/content/GD-Extraction-Specific-Settings.png){:class="img-responsive"}

You can choose between two different methods of integration into GoodData:

**Upload data for ETL processing**

Use this method if you want to create a custom ETL graph in GoodData's CloudConnect software.
For more information on graph creation after data export please refer to [this page]().   
                        
**Upload file**<br>
File name for the uploaded data.
                        
**Upload to DataSet without ETL**

This method directly uploads your extracted data into a GoodData DataSet.
              
**DataSet name**<br>
Specify the name of the target DataSet here. You can choose between the SAP object name and the extraction identifier or specify a custom name yourself. If you have entered your account information and selected a project in the destination settings, the drop-down list allows you to quickly select the names of already existing DataSets.
                        
**Mode**

**Full/Create**: builds a new DataSet from scratch. Use this mode if you run an export for the first time. Please be careful, since an existing DataSet with the same name and all Reports associated with it will be deleted in the process! 

**Truncate**: drops all stored data and fills the DataSet with the newly extracted data, but otherwise doesn't alter the structure of the DataSet or existing Reports. Use this mode if you already have a target DataSet and want to replace existing data. 

**Incremental**: either appends new data or updates existing data if a matching primary key column is found. No data will be dropped.