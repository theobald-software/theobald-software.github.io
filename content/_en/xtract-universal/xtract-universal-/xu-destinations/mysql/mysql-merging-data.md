---
layout: page
title: Merging Data
description: Merging Data
product: xtract-universal
parent: mysql
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=mysql-merging_data
---

In this example we will run an extraction to merge data, i.e. insert a new data row or update an existing one.
Prerequisite for executing the merge is defining a primary key in the database table.
 

It is important that the destination table has the right index to execute the merge statement with good performance.
Without an index merging data may take very long depending on the amount of data.  
Let's look at the data row for plant 1000. The field NAME2 has the value 'Werk'.

![mysql_Merge_1](/img/content/mysql_Merge_1.png){:class="img-responsive"}

Let's alter the field content with the value 'Werk Hamburg'.

![mysql_Merge_2](/img/content/mysql_Merge_2.png){:class="img-responsive"}

Now let's change the Extraction-Specific Settings and set 
- Preparation to Create *if Not Exists* and 
- Row Processing to *Merge*
to merge the data. 
Alternatively you can set Preparation to *None* since the destination table already exists.

![mysql_Merge_3](/img/content/mysql_Merge_3.png){:class="img-responsive"}

The merge statement inserts a new data row and updates an existing one. 

![mysql_Merge_4](/img/content/mysql_Merge_4.png){:class="img-responsive"}

The SQL statement contains the fields that will be updated. 
The SQL statement can be modified, e.g. if you would not like to update all fields bot only some.
Fields that are not contained in the merge statement will not be modified.

In this case the field *NAME2* will be updated with the value from the SAP system.

![mysql_Merge_5](/img/content/mysql_Merge_5.png){:class="img-responsive"}