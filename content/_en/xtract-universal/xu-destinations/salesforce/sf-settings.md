---
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: salesforce
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sf-settings-en
---

You can define the following extraction-specific settings:


![sf-destination-settings3](/img/content/sf-destination-settings3.PNG){:class="img-responsive"}

**Entity name**<br>
sets the API-name of the Salesforce object. You can select between the following options:
- **Same as name of SAP object**
- **Same as name of extraction**
- **Custom:** Define your own name for the object.


**Date Conversion**

**Convert date strings**<br> 
Converts SAP dates (YYYYMMDD, e.g. 19900101) into a formatted date value. In the destination the date field does not have a string data type but a date data type (YYYY-MM-DD, e.g. 1990-01-01). 

**Convert invalid dates to** <br>
Every invalid value will be converted into this value. NULL is supported as value. 
You should set this value to be used in case of no convertible date values.  
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first. 

**Convert 00000000 to** converts all SAP date 00000000 to this value. 
**Convert 9999XXXX to** converts all SAP date 9999XXXX to this value.


**Preparation**<br>
- **Delete & Create**: Deletes the object with the specified name and creates a new one.
- **Create if not exists**: Creates a new object if no object with the specified name could be found.

**Row processing**
- **Insert**: Inserts all records into the specified object.
- **Merge**: Inserts all records into the specified object and updates already existing entries.

**Concurrency mode**
- **Parallel**: Process batches in parallel mode. This is the default value.
- **Serial**: Process batches in serial mode. Processing in parallel can cause database contention. When this is severe, the job may fail. If you're experiencing this issue, submit the job with serial concurrency mode. This guarantees that batches are processed one at a time. Note that using this option may significantly increase the processing time for a job.