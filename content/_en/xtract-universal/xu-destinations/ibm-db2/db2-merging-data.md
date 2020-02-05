---
ref: xu-ibm-db2-05
layout: page
title: Merging data
description: Merging data
product: xtract-universal
parent: ibm-db2
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=db2-merging-data
---

In this example we will run an extraction to merge data, i.e. insert a new data row or update an existing one. 

It's important that the destination table has the right index to execute the merge statement with good performance.
Without an index merging data may take very long depend on the amount of data.  

Let's look at the data row for the plant 1000, the field NAME2 has the value NULL.

![DB2-Select-Before-Merge](/img/content/DB2-Select-Before-Merge.png){:class="img-responsive"}

Let's update the field NAME2 with the value 'Hamburg'.

![DB2-Update-Merge-Example-Data](/img/content/DB2-Update-Merge-Example-Data.png){:class="img-responsive"}

Now let's change the Extraction-Specific Settings and set 
- Preparation to *Create if Not Exists* and 
- Row Processing to *Merge*
to merge the data. 
Alternatively you can set Preparation to None since the destination table exists. 

![DB2-Extraction-Specific-Settings-Merge](/img/content/DB2-Extraction-Specific-Settings-Merge.png){:class="img-responsive"}

The merge statement insert a new data row and updates an existent one. 

![DB2-Edit-SQL-Merge-Statement](/img/content/DB2-Edit-SQL-Merge-Statement.png){:class="img-responsive"}

The SQL statement contains the fields that will be updated.<br> 
The SQL statement can be modified, e.g. if you would not like to update all fields bot only some.<br>
Fields that are not containet in the merge statement will not be modified.<br>

In this case the field *NAME2* will be updated with the value from the SAP system.

![DB2-Select-After-Merge](/img/content/DB2-Select-After-Merge.png){:class="img-responsive"}

