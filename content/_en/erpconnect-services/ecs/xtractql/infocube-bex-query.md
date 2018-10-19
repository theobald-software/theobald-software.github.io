---
ref: ecs-xtractql-04
layout: page
title: InfoCube / BEx Query
description: InfoCube / BEx Query
product: erpconnect-services
parent: xtractql
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-xtractql-infocube-bex-query
---

Execution of SAP BEx Query *0D_DECU/VARDEMO01* with conditions in the *WHERE* clause.

{% highlight sql %}
SELECT * FROM BWQUERY '0D_DECU/VARDEMO01' 
  WHERE MAT03 EQ 'M03', SALESORG BT '1000' AND '3000'
{% endhighlight %}

Execution of SAP BEx Query *0D_DECU/ZSIMPLEQUERY* with specific field selection. 

{% highlight sql %}
SELECT [488CO5SSAOHBH8IM8Z45JO3WI] AS 'A B C',
  [0D_MATERIAL-50D_MATERIAL],[5N77E72SQLYDDW4Y96A53DKU6],
  [0D_MATERIAL-20D_MTLGROUP],[0D_MATERIAL],[0D_SOLD_TO] 
  FROM BWQUERY '0D_DECU/ZSIMPLEQUERY'
{% endhighlight %}