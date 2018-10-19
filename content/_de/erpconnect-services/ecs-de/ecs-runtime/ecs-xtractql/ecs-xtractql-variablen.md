---
ref: ecs-xtractql-05
layout: page
title: Variablen
description: Variablen
product: erpconnect-services
parent: ecs-xtractql
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-xtractql-variablen
---

Es können Variablen sowohl für die Eingabe als auch für die Ausgabe verwendet werden.<br>
Im folgenden Beispiel wird dem Export-Parameter KUNNR die Variable @KUNNR zugewiesen.<br>
Die Ergebnistabelle *CUSTOMER_T*  wird im folgenden Beispiel in die Table-Variable *@RETVAL* gespeichert.

{% highlight sql %}
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET' 
EXPORTS KUNNR= @KUNNR 
TABLES CUSTOMER_T INTO @RETVAL;
{% endhighlight %}