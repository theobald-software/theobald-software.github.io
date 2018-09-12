---
layout: page
title: Variables
description: Variables
product: erpconnect-services
parent: xtractql
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-xtractql-variables
---

Variables can be used for input and output. 
In the following example the variable *@KUNNR* is assigned to the export parameter *KUNNR*.
The result table *CUSTOMER_T*  is saved to the variable *@RETVAL*.

{% highlight sql %}
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET' 
EXPORTS KUNNR= @KUNNR 
TABLES CUSTOMER_T INTO @RETVAL;
{% endhighlight %}