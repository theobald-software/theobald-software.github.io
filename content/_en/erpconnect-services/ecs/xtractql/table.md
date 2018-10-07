---
layout: page
title: Table
description: Table
product: erpconnect-services
parent: xtractql
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-xtractql-table
---

Select the first five records from table *T001W* where the field *FABKL* has a value of *US*.

{% highlight sql %}
SELECT TOP 5 * FROM T001W WHERE FABKL = 'US'
{% endhighlight %}

Select all records from table MAKT. The results table includes columns with the names *ShortText, MANDT* and *Language*. 

{% highlight sql %}
SELECT MAKTX AS [ShortText], MANDT, SPRAS AS Language FROM MAKT
{% endhighlight %}

Execute SAP Query *S\ZTHEO02\ZLIKP* with workspace *Standard*, user group *ZTHEO02* and name *ZLIKP*. The results table will return up to 30 records. XtractQL provides expanded syntax options for SELECT statements for SAP Query executions. For example, you can specify the return fields in the form *LIPS-LFIMG* or you can specify a WHERE clause as you typically would in SAP ABAP.

{% highlight sql %}
SELECT TOP 30 LIPS-LFIMG, LIPS-MATNR, TEXT_LIKP_KUNNR AS Kundennummer 
 FROM QUERY 'S|ZTHEO02|ZLIKP' 
 WHERE SP$00002 BT '0080011000'AND '0080011999' 
{% endhighlight %}

**Table Restrictions**

In order for ERPConnect Services to utilize a custom function module (e.g. Z_XTRACT_IS_TABLE) instead of the standard SAP function module to avoid restrictions by reading SAP tables, you will use WITH-OPTIONS to set the CustomFunction property.

Select all records from table MARA. In SAP, the XQL query is executed using the custom function module Z_XTRACT_IS_TABLE. 

{% highlight sql %}
SELECT * FROM MARA WITH-OPTIONS(CUSTOMFUNCTIONNAME = 'Z_XTRACT_IS_TABLE')
{% endhighlight %}

In the section [Table restrictions](../erpconnect-services-runtime/appendix/table-restrictions) you can find more information about the restrictions and how to install the custom function module 
Z_XTRACT_IS_TABLE to avoid them. 

