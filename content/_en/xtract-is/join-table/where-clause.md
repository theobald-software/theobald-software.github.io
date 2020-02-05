---
ref: xi-join-table-04
layout: page
title: Where Clause
description: Where Clause
product: xtract-is
parent: join-table
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=tj-where-clause
---

In the Criteria window click on link to define a where condition.  

![tj-where-0](/img/content/tj-where-0.png){:class="img-responsive" width="600px"}


Click Field to select a table field. 

![tj-where-1](/img/content/tj-where-1.png){:class="img-responsive" width="400px"}

Select a field from the list that contains the names of the tcrables and the fileds seperated by the tilde character '~'

![tj-where-2](/img/content/tj-where-2.png){:class="img-responsive" width="150px"}

Select an operator from the list: <br> 

| **operator** | **description** |  
|-------|------------------------|
| EQ     | equal |      
| NE      | not equal    |                                                              
| LT     | less than    | 
| LE   | less or equal than| 
| GT   | greater than| 
| GE | greater or equal than     |
| LIKE | find a string fitting the value - e.g.: WHERE MAKT~SPRAS LIKE 'D%' find all languages that start with the letter 'D'|
| NOT LIKE | negation of LIKE
| IS NULL | is *NULL*
| IS NOT NULL | is not *NULL* |

![tj-where-operation](/img/content/tj-where-operation.png){:class="img-responsive" width="100px"}

Set a value for the criterion. Variables in the form of @myValue are supported too.  

![tj-where-value](/img/content/tj-where-value.png){:class="img-responsive" width="300px"}

Now the criterion is defined.  

![tj-where-3](/img/content/tj-where-3.png){:class="img-responsive" width="600px"}

**New criteria**

Click on the right side on the button to create a new criterion.  

![tj-where-single-criteria](/img/content/tj-where-single-criteria.png){:class="img-responsive" width="400px"}

You have the following logical operators to combine conditions: <br>
AND: Both conditions must be true.  <br>
OR: One or both conditions must be true. <br>

![tj-where-and](/img/content/tj-where-and.png){:class="img-responsive" width="400px"}

You can even add a criteria group. Click on the symbol on the right side.

![tj-where-criteria-group](/img/content/tj-where-criteria-group.png){:class="img-responsive" width="300px"}

![tj-where-criteria-group-2](/img/content/tj-where-criteria-group-2.png){:class="img-responsive" width="400px"}


**Manual input / Open SQL**

To write a condition manually, click on the symbol on the right side and confirm the warning that criteria definitions will be lost.  

![tj-where-4](/img/content/tj-where-4.png){:class="img-responsive" width="600px"}

Now you use the free open SQL mode (SAP syntax) to write manually your SQL statement. 

![tj-where-5](/img/content/tj-where-5.png){:class="img-responsive" width="600px"}