---
ref: ecs-sin-nintex-forms-03
layout: page
title: Dropdown-lists II (function calls)
description: Dropdown-lists II (function calls)
product: erpconnect-services
parent: nintex-forms
permalink: /:collection/:path
weight: 3
lang: en_GB
---

The JavaScript library also supports calling SAP function modules and BAPIs in Nintex Forms.  

In this example, a customer name is entered in an input field and the possible hits are displayed in a dropdown-list. If a customer master record is selected in the dopdown-list, the customer number is  displayed in a separate field.
The request to the SAP system to retrieve the customer data is made by calling a function module (SD_RFC_CUSTOMER_GET). <br>

**Step 1: Define text fields**

In the Nintex form we need three fields: 

1. The first field *Customer Name* of type **Single Line Textbox** is the input field and contains the customer name.
2. In the second field *Select Customer* of type **Choice**, the possible hits for the entered customer name are displayed in a drop-down list and can be selected.
3. The third field *Customer Number* of type **Single Line Textbox** displays the customer number.

Proceed as shown in the previous example [Load data in dropdown-lists](https://help.theobald-software.com/en/erpconnect-services/sap-integration-nintex/nintex-forms/load-data-in-dropdown-lists).
Set *field_output_id* as *Client ID JavaScript variable name* for field *Customer Number*. 

**Step 2: Insert JavaScript code**

Add a reference to our JavaScript library under *Form Settings -> Advanced -> Custom JavaScript Includes*:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)


Insert the JavaScript code under *Form Settings -> Advanced -> Custom JavaScript*.

The function *tEcs.executeFunction* is called in the code to read the customer information with the SAP function module SD_RFC_CUSTOMER_GET. The input parameter is the field NAME1, the return is processed using the table CUSTOMER_T:

{% highlight javascript %}
NWF$(document).ready(function () {
    theobald.ready(function () {
        var self = this,
            $ = NWF$,
            /* DEFINE FIELD VARIABLES (IN NINTEX FORM SETTINGS) */
            /* material number input and dropbox */
            tsInput = $('#' + field_input),
            /* in combobox properties set custom text e.g. "Start typing in the field above..." */
            tsSelect = $('#' + field_select),
            /* id output */
            tsInputId = $('#' + field_output_id),
            /* description output */
            /* tsInputDescription = $('#' + field_output), */

            customServiceApplication = '',

            /* literals */
            stringsEN = {
                loading: 'Loading...',
                matches: ' matches',
                noMatchText: 'No direct match!',
                noMatches: 'No matches',
                errComm: 'Communication error, please see console',
                select: 'Please select',
                type: 'Start typing in the input above'
            },
            stringsDE = {
                loading: 'Wird geladen...',
                matches: ' Treffer',
                noMatchText: 'Keine direkte Entsprechung!',
                noMatches: 'Keine Treffer',
                errComm: 'Netzwerk Fehler (bitte Konsole öffnen)',
                select: 'Bitte auswählen',
                type: 'Geben Sie einen Suchbegriff ein'
            },
            /* SELECT LANGUAGE */
            strings = stringsEN,

            domOptionString1parameter = '{0}',
            domOptionString = '{0} ({1})',
        

            /* DEFINE whether search queries should be send in UPPERCASE (if SAP has a field for case insensitive searches) */
            minChars = 3,
            maskSearchPostfix = "*",
            useUppercaseValuesForQueries = true,
            removeLeadingZerosFromNumbers = false,

            /* supporing query functions */
            runningQueryPromise = null,
            /* so racing done-handler won't release the wrong promise */
            runningQueryId = null,
            connection = {
                ecs: {
                    serviceApplication: customServiceApplication
                }
            },
            resultProcessFunction = function (queryId, functionData) {
                if (queryId !== runningQueryId) {
                    /* omitting because of a newer query */
                    return void(0);
                }

                tsSelect.empty();
                var newOptionAfterInput = firstOption.clone();
                newOptionAfterInput.prop('selected', 'selected');

                var data = functionData.tables.CUSTOMER_T.rows;

                if (data.length > 0) {
                    newOptionAfterInput.text(tEcs.format(domOptionString, strings.select, data.length + strings.matches));
                    tsSelect.append(newOptionAfterInput);

                    $.each(data, function (i, v) {
                        var $option = firstOption.clone();

                        var idFieldValue = v.KUNNR;

                        $option.text(tEcs.format(domOptionString, idFieldValue, v.NAME1));

                        $option.attr('tsid', v.KUNNR);
                        $option.attr('tsdescription', v.NAME1);
                        tsSelect.append($option);
                    });
                } else {
                    newOptionAfterInput.text(strings.noMatches);
                    tsSelect.append(newOptionAfterInput);
                }

                tsSelect[0].selectedIndex = 0;

                if (runningQueryId === queryId) {
                    runningQueryPromise = null;
                }
            },
            getResultProcessWrapFunction = function (queryId) {
                return function (functionData) {
                    resultProcessFunction(queryId, functionData);
                };
            }

        /* Main call */
        queryFunction = function (val) {
            var runningQueryIdLocal = theobald.util.guid();
            runningQueryId = runningQueryIdLocal;

            if (runningQueryPromise) {
                /* done won't execute, races possible */
                tEcs.abortRunningRequest(runningQueryPromise);
                runningQueryPromise = null;
            }

            var effectiveValue = useUppercaseValuesForQueries ? val.toUpperCase() : val,
                tEcsOptions = {
                    data: {
                        exports: {
                            NAME1: effectiveValue + maskSearchPostfix
                        }
                    },
                    name: "sd_rfc_customer_get",
                    done: getResultProcessWrapFunction(runningQueryIdLocal)
                    /* , fail: queryFailFunction */
                };

            if (customServiceApplication) {
                tEcsOptions.connection = connection;
            }

            runningQueryPromise = tEcs.executeFunction(tEcsOptions);
            return runningQueryPromise;
        };

        var firstOption = tsSelect.find("option:nth-child(1)").clone();
        tsSelect[0].selectedIndex = -1;
        tsSelect.empty();
        tsSelect.append(firstOption.clone());

        /* user types into input, each character triggers search (SAP query) */
        tsInput.on('input', function () {
            var val = tsInput.val();
            if (val.length < minChars) {
                return void(0);
            }

            tsSelect.empty();
            var newOption = firstOption.clone();
            newOption.text(strings.loading);
            tsSelect.append(newOption);
            newOption.prop('selected', 'selected');

            queryFunction(val)
                .done().fail();
        });

        /* when user selects an option */
        tsSelect.on('change', function () {
            var selectedOption = tsSelect.find('option:selected');
            tsInputId.val(selectedOption.attr('tsid'));
            /* tsInputDescription.val(selectedOption.attr('tsdescription')); */
        });
    });
});
{% endhighlight %}


**Step 3: Execute the Nintex form**

Execute the form and enter a customer name. The hits for the entry are read from SAP and displayed in the dropdown list (Select Customer).  
If you select a customer from the list, the customer number is displayed in the *Customer Number* field. 
