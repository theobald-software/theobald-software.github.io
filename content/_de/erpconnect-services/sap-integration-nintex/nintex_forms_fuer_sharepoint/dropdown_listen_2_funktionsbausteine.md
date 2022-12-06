---
ref: ecs-sin-nintex-forms-03
layout: page
title: Dropdown-Listen II (Funktionsbausteinaufruf)
description: Dropdown-Listen II (Funktionsbausteinaufruf)
product: erpconnect-services
parent: nintex_forms_fuer_sharepoint
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Auch der Aufruf von SAP Funktionsbausteinen und BAPIs in Nintex Forms wird über die JavaScript-Bibliothek unterstützt.  

Im vorliegenden Beispiel soll in einem Eingabefeld ein Kundenname eingegeben und die möglichen Treffer in einer Dropdownliste angezeigt werden. Wird ein Kundenstammdatz in der Dopdown-Liste selektiert, dann soll die Kundennummer in einem weiteren Feld angezeigt werden.
Die Anfrage an das SAP-System zum Abruf der Kundendaten erfolgt hier über den Aufruf eines Funktionsbausteins (SD_RFC_CUSTOMER_GET). <br>
  
Führen Sie folgende Schritte zur Umsetzung des Beispiels aus:

**Schritt 1: Textfelder definieren**

In unserer Nintex-Form benötigen wir drei Felder mit Bezeichnungen: 

1. Das erste Feld *Customer Name* vom Typ **Single Line Textbox** ist das Eingabefeld und enthält den Kundenname.
2. Im zweiten Feld *Select Customer* vom Typ **Choice** werden die möglichen Treffer für den eingegebenen Kundenname in einer Dropdownliste ausgegeben und sind selektierbar.
3. Im dritten Feld *Customer Number* vom Typ **Single Line Textbox** wird die Kundennummer angezeigt.

Gehen Sie im Weiteren so vor wie im Beispiel [Befüllen von Dropdown-Listen in Nintex-Forms](https://help.theobald-software.com/de/erpconnect-services/sap-integration-nintex/nintex_forms_fuer_sharepoint/befuellen_von_dropdown_listen_in_nintex_forms).
Setzen Sie *field_output_id* als *Client ID JavaScript variable name* für das Feld *Customer Number*. 

**Schritt 2: JavaScript-Code einfügen**

Fügen Sie eine Referenz zu unserer JavaScript-Bibliothek unter *Form Settings -> Advanced -> Custom JavaScript Includes* ein:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)


Fügen Sie den JavaScript-Code unter *Form Settings -> Advanced -> Custom JavaScript* ein.

Im Code wird die Funktion *tEcs.executeFunction* aufgerufen, um die Kundeninformationen mit dem SAP-Funktionsbaustein SD_RFC_CUSTOMER_GET zu lesen. Eingabeparamter ist das Feld NAME1, die Rückgabe erfolgt über die Tabelle CUSTOMER_T:

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


**Schritt 3: Die Nintex Form ausführen**

Nun führen Sie die Form aus und geben Sie einen Kundennamen ein. Die Treffer zur Eingabe werden aus SAP gelesen und in der Dropdown Liste (Select Customer) angezeigt.  
Wählt man einen Kunden aus der Liste aus, wird die Kundennummer im Feld *Customer Number* angezeigt. 


