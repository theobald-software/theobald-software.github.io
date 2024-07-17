---
ref: xi-bw-cube-02
layout: page
title: Filter
description: Filter
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=bwcubefilter
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Each characteristic (dimension) of a BEx query or an InfoCube offers the possibility to set a filter to execute the MDX statement in BW using the selected filter values.

![BWCube-Filter-01](/img/content/BWCube-Filter-01.png){:class="img-responsive" }

Click on Filter. The dialog shows the available values. 

![BWCube-Filter-02](/img/content/BWCube-Filter-02.png){:class="img-responsive" }

Select the desired characteristic values to filter the result.  

![BWCube-Filter-03](/img/content/BWCube-Filter-03.png){:class="img-responsive" }

It's possible to set filter for different characteristics.  

**Filter Variable**<br>
You can define a variable for the filter values.  
Write the variable name into the field **Variable** e.g. CompanyCode.
When you execute the extraction, set the value e.g. *CompanyCode=1000*.
Several values are supported too, just use comma as seperator, e.g. *CompanyCode=1000,2000*.

The option **Exclude Values from Resultset** allows to exclude the filter values from the result set. 

![BWCube-Filter-03-a](/img/content/BWCube-Filter-03-a.png){:class="img-responsive" } 

Dimensions with a hierarchy are supported too. 

![BWCube_Hierarchy](/img/content/BWCube_Hierarchy.png){:class="img-responsive" } 