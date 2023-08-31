---
ref: xfa-bapi-input-output
layout: page
title: Input and Output Values
description: Input and output values
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 3
lang: en_GB
---

{% include _content/en/bapis-and-function-modules/parameters.md %}


### Mapping Input Tables

To correctly map the data of an input table, the following requirements apply:

- The column names of the input table must be the same as in the Xtract BAPI component.
- The data types in the input table must be the same as in the Xtract BAPI component.

Click on the ![glasses-icon](/img/content/icons/glasses.png) icon next to a table to look up column names and data types in the Xtract BAPI component.<br>
Follow the steps below to pass tables to Xtract BAPI at runtime:
1. Define / load the input tables in your workflow. 
2. Connect the input tables to the Xtract BAPI component using the input anchor "I". <br>
The number that is displayed in the connection arrow is used to identify tables in the Xtract BAPI component.<br>
![bapi-input-table2](/img/content/xfa/bapi-input-table2.png){:class="img-responsive" }
3. Open the Xtract BAPI component and navigate to the table you want to parameterize.
4. Select an input table from the dropdown list. <br>
![bapi-input-table](/img/content/xfa/bapi-input-table.png){:class="img-responsive" }

To remove an input table from a structure, click ![x-icon](/img/content/icons/x.png).