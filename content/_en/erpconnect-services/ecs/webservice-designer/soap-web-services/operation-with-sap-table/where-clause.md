---
layout: page
title: Where Clause
description: Where Clause
product: erpconnect-services
parent: operation-with-sap-table
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=where_clause
---

If you want to set a filter on the table you can include a *Where Clause* in the *Execute Table* activity. 
To do this you have to edit your *EXECUTE TABLE* activity.
Click on the button on the right side in the *Where Clause* field to set a filter. 

At first click on *New* to create a clause Parameter *Namefilter*. Use the expression button to select the input parameter *Name*.

![WSD-NewWhereClauseParameterDialog](/img/content/WSD-NewWhereClauseParameterDialog.png){:class="img-responsive"}

![WSD-WhereClauseParameterExpressionDialog](/img/content/WSD-WhereClauseParameterExpressionDialog.png){:class="img-responsive"}

Now define a filter corresponding to the technical field name in SAP. 
In our example a filter for the field NAME1 should be created.  

![WSD-SAPTableKNA1](/img/content/WSD-SAPTableKNA1.png){:class="img-responsive"}

The *Where Clause* has now the value NAME1 LIKE '@Namefilter' . Be sure that the clause parameter is set in single quotes.   

![WSD-TableWhereClauseDialog2](/img/content/WSD-TableWhereClauseDialog2.png){:class="img-responsive"}

After the deployment of the web service the input parameter Name will be used as filter when you call the web service.  

**Remarks to the Where clause**

The WHERE clause must comply with the SAP OpenSQL syntax.

- Before and after the equal sign, you must enter a space, eg YEAR = '1999 '. For YEAR= '1999 ', YEAR ='1999' or YEAR='1999' you will get the error message 'A dynamically specified column name is unknown'.
- Floating point numbers must always be set in single quotation mark, e.g. KMENG > '10.3'. For KMENG > 10.3 you get the error message 'The WHERE clause has an unexpected format'.
- The Where clause must not contain any line break (return key).

You will find more information about the OpenSQL syntax on the SAP help site: [https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm)

**Values must have the internal SAP representation:**

- The date 01.01.1999 has the the internal representation 19990101 (YYYYMMDD),
- The year period 001.1999 has the internal representation 1999001 (YYYYPPP),
- Numbers must have the leading zeros, e.g. customer number 1000 has the internal representation 0000001000.