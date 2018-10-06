---
layout: page
title: Function Module with REST
description: Function Module with REST
product: erpconnect-services
parent: rest-without-tecs
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-function-module-with-rest
---

The following example illustrates how customer data can be retrieved using the SAP function module *SD_RFC_CUSTOMER_GET*. For this purpose, ERPConnect Services provides the REST operations *CreateFunction* and *ExecuteFunction / ExecuteFunctionAsXml* .


<details>
<summary>Javascript.</summary>
{% highlight javascript %}
$(document).ready(function () {
  var json = JSON.stringify({ applicationName: 'ECC', name: 'SD_RFC_CUSTOMER_GET' });
 
  $.ajax({
      url: '/_vti_bin/ERPConnectServiceRest.svc/CreateFunction',
      type: 'POST',
      data: json,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
          //Sys.Debug.traceDump(data, 'data');
              console.log(data);
          if (!data.error) {
              var func = data.result;
              func.exports["NAME1"].paramValue = 'T*';
              var d = JSON.stringify({ applicationName: 'ECC', 'function': func });
              $.ajax({
                  url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteFunction',
                  type: 'POST',
                  data: d,
                  dataType: 'json',
                  contentType: 'application/json; charset=utf-8',
                  success: function (data) {
                      if (!data.error) {
                          alert('Number of rows of table CUSTOMER_T: ' + data.result.tables["CUSTOMER_T"].rows.length);
                          alert('NAME1 of first table row: ' + data.result.tables["CUSTOMER_T"].rows[0].NAME1);
                      }
                  }
              });
          }
      }
  });
 
});
{% endhighlight %}
</details>

Initially, a function object (JS) for the REST operation CreateFunction with the parameter name SD_RFC_CUSTOMER_GET is created using the jQuery method $.getJSON.
The function object contains the typical parameters of an SAP function module, for example the *Export* parameters. This example assigns the value T* to export parameter *NAME1*, to return all customer records where the name begins with *T*.

After successful execution, the data will be returned as a list which can be accessed in the Tables parameter *CUSTOMER_T*.

For a function module sample with more parameters or with a connection scope refer to [How to use ConnectionScope](./how-to-use-connectionscope). 
 
**Use of a specific ECS Application**

If the program should access a specific ERPConnect Services Application, please use the parameter applicationName.

**Creating an SAP Purchase Order via BAPI (using structures and tables)**

The following sample shows how to create a purchase order in SAP. We will use the function module BAPI_PO_CREATE BAPI and fill the required header structure and tables. 

<details>
<summary>Javascript.</summary>
{% highlight javascript %}
$(document).ready(function () {       
    $.ajax({           
        url: '/_vti_bin/ERPConnectServiceRest.svc/CreateFunction',
        type: 'POST',
        data: JSON.stringify({
            applicationName: 'ecc',
            name: 'BAPI_PO_CREATE'
        }),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {               
            console.log(data);               
            if (!data.error) {   
             
                // Fill header structure PO_HEADER               
                var po_header = data.result.exports.PO_HEADER.paramValue.values;
                po_header.DOC_TYPE = "NB";
                po_header.PURCH_ORG = "1000";
                po_header.PUR_GROUP = "010";
                po_header.VENDOR = "0000001070";
 
                // Create an Item using a table PO_ITEMS
                var po_items = data.result.tables.PO_ITEMS.rows;               
                po_items.push({
                    PO_ITEM: "1",
                    PUR_MAT: "B-7000",
                    PLANT: "1000"
                });
 
                // Create and fill schedules using a table PO_ITEM_SCHEDULES
                var po_item_schedules = data.result.tables.PO_ITEM_SCHEDULES.rows;
                po_item_schedules.push({
                    PO_ITEM: "1",
                    DELIV_DATE: "20141022",
                    QUANTITY: 10
                });
 
                                   
                $.ajax({                       
                    url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteFunction',
                    type: 'POST',
                    data: JSON.stringify({
                        applicationName: 'ecc',
                        'function': data.result
                    }),
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    success: function (data1) {                           
                        if (!data1.error) {                               
                            alert(data1.result.tables.RETURN.rows[0].MESSAGE);                                                         
                        }                       
                        else {
                            alert(JSON.stringify(data1));
                        }
                    }                   
                }).fail(function (data_exec_fail) {
                    alert(JSON.stringify(data_exec_fail));
                });               
            }  
            else {
                alert(JSON.stringify(data.error));
            }         
        }       
    }).fail(function (data_create_fail) {
        alert(JSON.stringify(data_create_fail));
    });;   
});
{% endhighlight %}
</details>