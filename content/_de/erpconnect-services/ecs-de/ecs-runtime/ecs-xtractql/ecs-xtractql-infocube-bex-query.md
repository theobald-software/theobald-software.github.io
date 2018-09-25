---
layout: page
title: InfoCube / BEx Query
description: InfoCube / BEx Query
product: erpconnect-services
parent: ecs-xtractql
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-xtractql-infocube-bex-query
---

Abfrage der SAP BEx Query *0D_DECU/VARDEMO01* mit Einschränkungsangaben in der *WHERE*-Klausel.

{% highlight sql %}
SELECT * FROM BWQUERY '0D_DECU/VARDEMO01' 
  WHERE MAT03 EQ 'M03', SALESORG BT '1000' AND '3000
{% endhighlight %}

Abfrage SAP BEx Query *0D_DECU/ZSIMPLEQUERY* mit spezifischer Feldauswahl.

{% highlight sql %}
SELECT [488CO5SSAOHBH8IM8Z45JO3WI] AS 'A B C',
  [0D_MATERIAL-50D_MATERIAL],[5N77E72SQLYDDW4Y96A53DKU6],
  [0D_MATERIAL-20D_MTLGROUP],[0D_MATERIAL],[0D_SOLD_TO] 
  FROM BWQUERY '0D_DECU/ZSIMPLEQUERY'
{% endhighlight %}