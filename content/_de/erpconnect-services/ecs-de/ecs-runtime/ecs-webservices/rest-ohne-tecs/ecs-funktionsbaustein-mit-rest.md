---
layout: page
title: Funktionsbaustein mit REST
description: Funktionsbaustein mit REST
product: erpconnect-services
parent: rest-ohne-tecs
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-funktionsbaustein-mit-rest
---

Ein abschließendes Beispiel zeigt den Abruf von Kundendaten mithilfe des Funktionsbausteines *SD_RFC_CUSTOMER_GET*. Hierzu bieten die ERPConnect Services die REST-Operationen *CreateFunction* und *ExecuteFunction / ExecuteFunctionAsXml* (siehe oben) an. 


<details>
<summary>[Javascript]</summary>
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
              func.exports["NAME1"].paramValue = 'T*'; // NAME1
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

Im ersten Schritt wird mit Hilfe ein Function-Objekt (JS) der REST-Operation *CreateFunction* mit dem Parameter name (=*SD_RFC_CUSTOMER_GET*) für die anschließende Weiterverarbeitung erzeugt.<br>
Das Function-Objekt enthält alle üblichen Parameter von Funktionsbausteinen, wie bspw. die Exports-Auflistung. Das Beispiel setzt nachfolgend den Exportparameter *NAME1* auf den Wert _T*_, um sämtliche Kunden abzufragen, die mit T im Namen anfangen.

Nach erfolgreicher Durchführung werden die Daten als Liste ausgeben. Dazu wird auf die Tabelle *CUSTOMER_T* zugegriffen.

Für ein Beispiel eines Funktionsbausteines mit mehr Parametern oder unter dem Einsatz eines ConnectionScope, siehe [ConnectionScope](./connectionscope). 

**Aufruf einer spezifischen ECS Application**

Sollte Ihr Programm auf eine spezifische ERPConnect Services Application zugreifen, dann nutzen Sie die Eigeschaft applicationName.

**Anlage einer Bestellung mit einem Funktionsbaustein (mit Struktur und Tabellen)**

The following sample shows how to create a purchase order in SAP. We will use the function module BAPI_PO_CREATE BAPI and fill the required header structure and tables.  

<details>
<summary>[Javascript]</summary>
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