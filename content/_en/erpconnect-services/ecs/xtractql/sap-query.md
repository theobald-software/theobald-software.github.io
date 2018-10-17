---
ref: ecs-xtractql-03
layout: page
title: SAP Query
description: SAP Query
product: erpconnect-services
parent: xtractql
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-xtractql-query
---

XQL query to discover the metadata for the *FIELDS* of SAP Query *ZTHEOSQUERY*. 

{% highlight sql %}
DESCRIBE QUERY 'G|ZTHEO1|ZTHEOSQUERY' GET FIELDS
{% endhighlight %}

XQL query to execute SAP function module *SD_RFC_CUSTOMER_GET* using the *Export* parameter *KUNNR*. The SAP table *CUSTOMER_Twilldurch* die Syntaxbeschreibung *INTO @RETVAL* definiert. 

{% highlight sql %}
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET' 
EXPORTS KUNNR='0000003340' 
TABLES CUSTOMER_T INTO @RETVAL;
{% endhighlight %}