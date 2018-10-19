---
ref: xu-bw-infocubes-bex-queries-02
layout: page
title: Filter
description: Filter
product: xtract-universal
parent: bw-infocubes-and-bex-queries
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=filter
---

Each characteristic (dimension) of a BEx query or an InfoCube offers the possibility to set a filter to execute the MDX statement in BW using the selected filter values. 

![BWCube-Filter-01](/img/content/BWCube-Filter-01.jpg){:class="img-responsive"}

Click on Filter. The dialog shows the available values.  

![BWCube-Filter-02](/img/content/BWCube-Filter-02.jpg){:class="img-responsive"}

Select the desired characteristic values to filter the result.  

![BWCube-Filter-03](/img/content/BWCube-Filter-03.jpg){:class="img-responsive"}

It's possible to set filter for different characteristics.  

**Filter Variable** <br>
You can define a variable for the filter values.  
Write the variable name into the field **Variable** e.g. CompanyCode.<br>
When you execute the extraction, set the value e.g. *CompanyCode=1000* .<br>
Several values are supported too, just use comma as seperator, e.g. *CompanyCode=1000,2000* .

The option **Exclude Values from Resultset** allows to exclude the filter values from the result set. 

![BWCube-Filter-03-a](/img/content/BWCube-Filter-03-a.jpg){:class="img-responsive"}

Dimensions with a hierarchy are supported too. 

![BWCube_Hierarchy](/img/content/BWCube_Hierarchy.jpg){:class="img-responsive"}