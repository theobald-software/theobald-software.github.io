---
ref: ecs-xtractql-02
layout: page
title: Funktionsbaustein
description: Funktionsbaustein
product: erpconnect-services
parent: ecs-xtractql
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-xtractql-funktionsbaustein
---

XQL-Abfrage zur Ermittlung der Metadaten für die *EXPORTS*-Parameterauflistung des Funktionsbausteines *SD_RFC_CUSTOMER_GET*.

{% highlight sql %}
DESCRIBE FUNCTION 'SD_RFC_CUSTOMER_GET' GET EXPORTS
{% endhighlight %}

**Beispiel mit Eingabe-Struktur und Eingabe-Tabelle**  

Dieses Beispiel zeigt ein XQL-Statement zum Aufruf des Funktionsbausteins BAPI_QUOTATION_CREATEFROMDATA2.<br>
In diesem Beispiel wird unter anderem eine Export-Struktur (QUOTATION_HEADER_IN) und eine Tabelle (QUOTATION_ITEMS_IN) verwendet. Anschließend wird ein Commit mit dem Funktionsbaustein BAPI_TRANSACTION_COMMIT ausgeführt. 

{% highlight sql %}
EXECUTE FUNCTION 'BAPI_QUOTATION_CREATEFROMDATA2'
   EXPORTS  
    QUOTATION_HEADER_IN-DOC_TYPE = 'AG', QUOTATION_HEADER_IN-SALES_ORG = '1000', QUOTATION_HEADER_IN-DISTR_CHAN = '10', QUOTATION_HEADER_IN-DIVISION = '00', QUOTATION_HEADER_IN-INCOTERMS1 = 'EXW',
    QUOTATION_HEADER_IN-PMNTTRMS = '0001', QUOTATION_HEADER_IN-QT_VALID_T = '20131231'
   TABLES
    QUOTATION_ITEMS_IN = ( (ITM_NUMBER, MATERIAL, TARGET_QTY, TARGET_QU) , ('00010', '100-100','1000', 'ST') ),
        QUOTATION_SCHEDULES_IN = ( (ITM_NUMBER, REQ_DATE, REQ_QTY) , ('00010', '20130612','1000') ),
        QUOTATION_PARTNERS =  ( (PARTN_ROLE, PARTN_NUMB) ,('AG', '0000000307') ),
        RETURN INTO @RETURN
;
EXECUTE FUNCTION 'BAPI_TRANSACTION_COMMIT';
{% endhighlight %}

Beispiel mit Import- und Export-Parametern, Tabellen sowie Variablen

{% highlight sql %}
EXECUTE FUNCTION 'BAPI_USER_GET_DETAIL'
EXPORTS USERNAME = 'ELZEIN', CACHE_RESULTS = 'X'
IMPORTS @myAlias = ALIAS
TABLES RETURN INTO @RETURN, ACTIVITYGROUPS INTO @ROLES;
{% endhighlight %}

