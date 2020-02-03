---
ref: xi-join-table-05
layout: page
title: Aggregate Function
description: Aggregate Function
product: xtract-is
parent: join-table
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=tj-aggregate-function
---

In the *Grouping Criteria* tab you can define a criteria using an aggregate function. 
In the Selection tab you should define at first the condition with the aggregate function. 

![tj-aggregate-count](/img/content/tj-aggregate-count.png){:class="img-responsive" }

In the Grouping Criteria tab click *Click here to define criteria.*

![tj-grouping-criteria-0](/img/content/tj-grouping-criteria-0.png){:class="img-responsive" width="500px"}

Set an aggregate function, a field, an operation and a value.  

![tj-grouping-criteria-1](/img/content/tj-grouping-criteria-1.png){:class="img-responsive" width="500px"}

Here we defined the condition, that the count of description languages (SPRAS) in the table MAKT is greater or equal 2. 

![tj-grouping-criteria-count](/img/content/tj-grouping-criteria-count.png){:class="img-responsive" width="300px"}

Open the SQL window to check the SQL statement.  

![tj-grouping-sql](/img/content/tj-grouping-sql.png){:class="img-responsive" width="800px"}