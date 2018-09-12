---
layout: page
title: Function Module
description: Function Module
product: erpconnect-services
parent: xtractql
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-xtractql-function-module
---

XQL query to discover the metadata for the *Export* parameter collection of function module *SD_RFC_CUSTOMER_GET*.

{% highlight sql %}
DESCRIBE FUNCTION 'SD_RFC_CUSTOMER_GET' GET EXPORTS
{% endhighlight %}

**Sample with input structure and input table** 

This sample shows the XQL statement to  execute the function module BAPI_QUOTATION_CREATEFROMDATA2.
In this sample we use an export structure (QUOTATION_HEADER_IN) and a table (QUOTATION_ITEMS_IN). Afterward a commit is executed with the funktion module BAPI_TRANSACTION_COMMIT. 


{% highlight sql %}
EXECUTE FUNCTION 'BAPI_QUOTATION_CREATEFROMDATA2'
   EXPORTS  
    QUOTATION_HEADER_IN-DOC_TYPE = 'AG', QUOTATION_HEADER_IN-SALES_ORG = '1000', QUOTATION_HEADER_IN-DISTR_CHAN = '10', QUOTATION_HEADER_IN-DIVISION = '00', QUOTATION_HEADER_IN-INCOTERMS1 = 'EXW',
    QUOTATION_HEADER_IN-PMNTTRMS = '0001', QUOTATION_HEADER_IN-QT_VALID_T = '20131231'
   TABLES
    QUOTATION_ITEMS_IN = ( (ITM_NUMBER, MATERIAL, TARGET_QTY, TARGET_QU) , ('00010', '100-100', '1000', 'ST') ),
        QUOTATION_SCHEDULES_IN = ( (ITM_NUMBER, REQ_DATE, REQ_QTY) , ('00010', '20130612', '1000') ),
        QUOTATION_PARTNERS =  ( (PARTN_ROLE, PARTN_NUMB) ,('AG', '0000000307') ),
        RETURN INTO @RETURN
;
EXECUTE FUNCTION 'BAPI_TRANSACTION_COMMIT';
{% endhighlight %}

**Sample with import and export parameters, output tables and variables**

{% highlight sql %}
EXECUTE FUNCTION 'BAPI_USER_GET_DETAIL'
EXPORTS USERNAME = 'ELZEIN', CACHE_RESULTS = 'X'
IMPORTS @myAlias = ALIAS
TABLES RETURN INTO @RETURN, ACTIVITYGROUPS INTO @ROLES;
{% endhighlight %}