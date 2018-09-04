---
layout: page
title: Where Clause
description: Where Clause
product: xtract-is
parent: join-table
permalink: /:collection/:path
weight: 4
lang: en_GB
---

In the Criteria window click on link to define a where condition.  

![tj-where-0](/img/content/tj-where-0.jpg){:class="img-responsive" width="600px"}


Click Field to select a table field. 

![tj-where-1](/img/content/tj-where-1.jpg){:class="img-responsive" width="400px"}

Select a field from the list that contains the names of the tcrables and the fileds seperated by the tilde character '~'

![tj-where-2](/img/content/tj-where-2.jpg){:class="img-responsive" width="150px"}

Select an operator from the list: <br> 
EQ: equal<br>
NE: not equal<br>
LT: less than<br>
LE: less or equal than<br>
GT: greater than<br>
GE: greater or equal than<br>
LIKE: find a string fitting the value.  <br>
        WHERE MAKT~SPRAS LIKE 'D%' find all languages that start with the letter 'D'. <br>
NOT LIKE: Negation of LIKE.<br>
IS NULL: Is NULL<br>
IS NOT NULL: Ist not NULL.<br>

![tj-where-operation](/img/content/tj-where-operation.jpg){:class="img-responsive" width="100px"}

Set a value for the criterion. Variables in the form of @myValue are supported too.  

![tj-where-value](/img/content/tj-where-value.jpg){:class="img-responsive" width="300px"}

Now the criterion is defined.  

![tj-where-3](/img/content/tj-where-3.jpg){:class="img-responsive" width="600px"}

**New criteria**

Click on the right side on the button to create a new criterion.  

![tj-where-single-criteria](/img/content/tj-where-single-criteria.jpg){:class="img-responsive" width="400px"}

You have the following logical operators to combine conditions: <br>
AND: Both conditions must be true.  <br>
OR: One or both conditions must be true. <br>

![tj-where-and](/img/content/tj-where-and.jpg){:class="img-responsive" width="400px"}

You can even add a criteria group. Click on the symbol on the right side.

![tj-where-criteria-group](/img/content/tj-where-criteria-group.jpg){:class="img-responsive" width="300px"}

![tj-where-criteria-group-2](/img/content/tj-where-criteria-group-2.jpg){:class="img-responsive" width="400px"}


**Manual input / Open SQL**

To write a condition manually, click on the symbol on the right side and confirm the warning that criteria definitions will be lost.  

![tj-where-4](/img/content/tj-where-4.jpg){:class="img-responsive" width="600px"}

Now you use the free open SQL mode (SAP syntax) to write manually your SQL statement. 

![tj-where-5](/img/content/tj-where-5.jpg){:class="img-responsive" width="600px"}