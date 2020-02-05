---
ref: xu-exasol-05
layout: page
title: Merging data
description: Merging data
product: xtract-universal
parent: exasol
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=exasol-merging-data
---

In this example we will run an extraction to merge data, i.e. insert a new data row or update an existing one. 

It's important that the destination table has the right index to execute the merge statement with good performance.
Without an index merging data may take very long depend on the amount of data.  

Let's look at the data row for the plant 1000, the field NAME2 has the value NULL.

![Exa-Select-Before-Merge](/img/content/Exa-Select-Before-Merge.png){:class="img-responsive"}

Let's update the field NAME2 with the value 'Hamburg'.

![Exa-Update-Merge-Example-Data](/img/content/Exa-Update-Merge-Example-Data.png){:class="img-responsive"}

Now let's change the Extraction-Specific Settings and set 
- Preparation to *Prepare Merge*,  
- Row Processing to *Merge and* 
- Finalization to *Finalize Merge* 
to update the existent table. 


![Exa-Extraction-Specific-Settings-Merge-Makt](/img/content/Exa-Extraction-Specific-Settings-Merge-Makt.png){:class="img-responsive"}

The merge statement insert a new data row and updates an existent one. 

The SQL statement contains the fields that will be updated. 
The SQL statement can be modified, e.g. if you would not like to update all fields bot only some.
Fields that are not containet in the merge statement will not be modified.

In this case the field *NAME2* will be updated with the value from the SAP system.

![Exa-Merge-Result-Table-Data](/img/content/Exa-Merge-Result-Table-Data.png){:class="img-responsive"}

