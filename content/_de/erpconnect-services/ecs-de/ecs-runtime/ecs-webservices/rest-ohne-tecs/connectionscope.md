---
layout: page
title: ConnectionScope
description: ConnectionScope
product: erpconnect-services
parent: rest-ohne-tecs
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=connectionscope
---

Das folgende Beispiel zeigt, wie Sie ConnectionScope mit ECS/JS nutzen, um mehr als einen SAP-Funktionsbaustein in derselben SAP-Verbindungssession aufzurufen. 

<details>
<summary>ConnectionScope mit ECS/JS</summary>
{% highlight javascript %}
$(document).ready(function () {
//
//
//
//
// ========== BEGIN SCOPE ==========
//
//
//
$.ajax({
    contentType: 'application/json; charset=utf-8',
    // if default ecs application, then empty string, if custom, then object>>  data: JSON.stringify('{applicationName: "ecc1"}')
    data: JSON.stringify(''),
    dataType: 'json',
    type: 'POST',
    url: '/_vti_bin/ERPConnectServiceRest.svc/BeginConnectionScope'
})
    .done(function (data_begin_scope) {
        console.log('scope begin: %o', data_begin_scope);
        if (data_begin_scope.error) {
            alert(JSON.stringify(data_begin_scope.error));
            return;
        }
        //
        //
        //
        //
        // ========== CREATE FUNCTION ==========
        //
        //
        //
        $.ajax({         
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                //applicationName: 'ecc',
                // SET SCOPE HERE
                //             
         // <<<<<<<<<< SCOPE SET WITH EACH FUNCTION >>>>>>>>>>>
                connectionScope: data_begin_scope.result,
                //
                //
                name: 'BAPI_PO_CREATE'
            }),
            dataType: 'json',
            type: 'POST',
            url: '/_vti_bin/ERPConnectServiceRest.svc/CreateFunction'
        })
            .done(function (data_created) {             
                console.log('function created: %o', data_created);
                if (data_created.error) {
                    alert(JSON.stringify(data_created.error));
                }
                // set your fields here
                var po_header = data_created.result.exports.PO_HEADER.paramValue.values;
                po_header.DOC_TYPE = 'NB';
                po_header.PURCH_ORG = '1000';
                po_header.PUR_GROUP = '010';
                po_header.VENDOR = '0000001070';
  
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
  
                //
                //
                //
                //
                // ========== EXECUTE FUNCTION ==========
                //
                //
                //
                $.ajax({                     
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify({
                        //applicationName: 'ecc',
                        'function': data_created.result,
                        //
                        //
                        // <<<<<<<<<< SCOPE SET WITH EACH FUNCTION >>>>>>>>>>>
                        connectionScope: data_begin_scope.result
                        //
                        //
                        // data_created result of CreateFunction is input for ExecuteFunction
                    }),
                    dataType: 'json',
                    type: 'POST',
                    url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteFunction'
                })
                    .done(function (data_exec) {
                        console.log('function executed: %o', data_exec);
                        if (data_exec.error) {                             
                            // processing error, ecs tried but could not COMPLETE processomg the query
                            alert(JSON.stringify(data_exec.error));
                            return;
                        }                     
                        //
                        //
                        //
                        //
                        // ========== CREATE COMMIT ==========
                        //
                        //
                        //
                        $.ajax({                     
                            contentType: 'application/json; charset=utf-8',
                            data: JSON.stringify({
                                //applicationName: 'ecc',
                                //
                  //<<<<<<<<< SCOPE SET WITH EACH FUNCTION >>>>>>>>>>>
                                connectionScope: data_begin_scope.result,
                                //
                                //
                                name: 'BAPI_TRANSACTION_COMMIT'
                            }),
                            dataType: 'json',
                            type: 'POST',
                            url: '/_vti_bin/ERPConnectServiceRest.svc/CreateFunction',
                        })
                            .done(function (data_commit_created) {
                                console.log('commit created: %o', data_commit_created);
                                if (data_commit_created.error) {                             
                              // processing error, ecs tried but could not COMPLETE process the query
                                    alert(JSON.stringify(data_commit_created.error));
                                    return;
                                }                     
                                //
                                //
                                //
                                //
                                // ========== EXECUTE COMMIT ==========
                                //
                                //
                                //
                                $.ajax({                     
                                    contentType: 'application/json; charset=utf-8',
                                    data: JSON.stringify({
                                        //applicationName: 'ecc',
                                        //
                                        //
                                        // <<<<<<<<<< SCOPE SET WITH EACH FUNCTION >>>>>>>>>>>
                                        connectionScope: data_begin_scope.result,
                                        //
                                        //
                                        'function': data_commit_created.result
                                    }),
                                    dataType: 'json',
                                    type: 'POST',
                                    url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteFunction'
                                })
                                    .done(function (data_commit_exec) {
                                        console.log('commit executed: %o', data_commit_exec);
                                        if (data_commit_exec.error) {                             
                     // processing error, ecs tried but could not COMPLETE process the query
                                            alert(JSON.stringify(data_commit_exec.error));
                                            return;
                                        }                     
                                        //
                                        //
                                        //
                                        //
                                        // ========== END SCOPE ==========
                                        //
                                        //
                                        //
                                        $.ajax({                     
                                            contentType: 'application/json; charset=utf-8',
                                            data: JSON.stringify({
                                                //applicationName: 'ecc',
                                                //
                                                //                                             // <<<<< SCOPE SET WITH EACH FUNCTION >>>>>>>>
                                                connectionScope: data_begin_scope.result,
                                                //
                                                //
                                            }),
                                            dataType: 'json',
                                            type: 'POST',
                                            url: '/_vti_bin/ERPConnectServiceRest.svc/EndConnectionScope'
                                        })
                                            .done(function (data_scope_end) {
                                                console.log('end scope: %o', data_scope_end);
                                                if (data_scope_end.error) {                             
                      // processing error, ecs tried but could not COMPLETE process the query
                                                    alert(JSON.stringify(data_scope_end.error));
                                                    return;
                                                }                     
                                                //
                                                //
                                                //
                                                //
                                                // ========== ALL COMPLETE ==========
                                                //
                                                //
                                                //
                                                alert(data_scope_end.result);
                                                                     //<
                                            })
                                            .fail(function (data_scope_end_fail) {
                                   // connection/request error (ecs could not START processing
                                                       // the request / parameter signatures not correct)
                                                alert(JSON.stringify(data_scope_end_fail));
                                            });
                                    })
                                    .fail(function (data_commit_exec_fail) {
                                        // connection/request error (ecs could not START processing
                                                         // the request / parameter signatures not correct)
                                        alert(JSON.stringify(data_commit_exec_fail));
                                    });
                            })
                            .fail(function (data_commit_created_fail) {
                                // connection/request error (ecs could not START processing
                                             // the request / parameter signatures not correct)
                                alert(JSON.stringify(data_commit_created_fail));
                            });
                    })
                    .fail(function (data_exec_fail) {
                        // connection/request error (ecs could not START processing
                                  // the request / parameter signatures not correct)
                        alert(JSON.stringify(data_exec_fail));
                    });        
            })
            .fail(function (data_create_fail) {
                // connection/request error (ecs could not START processing
                       // the request / parameter signatures not correct)
                alert(JSON.stringify(data_create_fail));
            });
    })
    .fail(function (begin_scope_fail) {
        // connection/request error (ecs could not START processing
           // the request / parameter signatures not correct)
        alert(JSON.stringify(begin_scope_fail));
    });
});
{% endhighlight %}
</details>