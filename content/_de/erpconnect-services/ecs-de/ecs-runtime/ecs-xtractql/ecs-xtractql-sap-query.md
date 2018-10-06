---
layout: page
title: SAP Query
description: SAP Query
product: erpconnect-services
parent: ecs-xtractql
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-xtractql-sap-query
---

XQL-Abfrage zur Ermittlung der Metadaten der *FIELDS*-Auflistung der SAP Query *ZTHEOSQUERY*. 

{% highlight sql %}
DESCRIBE QUERY 'G|ZTHEO1|ZTHEOSQUERY' GET FIELDS
{% endhighlight %}

XQL-Abfrage, die den SAP-Funktionsbaustein *SD_RFC_CUSTOMER_GET* mit dem Export-Parameter *KUNNR* zur Ausführung bringt. Als Ergebnistabelle wird die SAP-Tabelle *CUSTOMER_T* durch die Syntaxbeschreibung INTO @RETVAL definiert.

{% highlight sql %}
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET' 
EXPORTS KUNNR='0000003340' 
TABLES CUSTOMER_T INTO @RETVAL;
{% endhighlight %}