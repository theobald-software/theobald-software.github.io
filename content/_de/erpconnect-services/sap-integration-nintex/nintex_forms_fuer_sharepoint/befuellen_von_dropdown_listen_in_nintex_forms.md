---
ref: ecs-sin-nintex-forms-02
layout: page
title: Befüllen von Dropdown-Listen in Nintex-Forms
description: Befüllen von Dropdown-Listen in Nintex-Forms
product: erpconnect-services
parent: nintex_forms_fuer_sharepoint
permalink: /:collection/:path
weight: 2
lang: de_DE
---

In bestimmten Integrationsszenarien kann es sinnvoll sein, SAP-Daten für eine flexible Datenselektion in kaskadierenden Dropdown-Listen zur Verfügung zu stellen. Auch dies ist mit JavaScript und ECS REST-Services in Nintex Forms möglich (vgl. vorheriges Beispiel).

Im vorliegenden Beispiel soll in einem Eingabefeld eine SAP Materialnummer eingegeben und die möglichen Treffer in einer Dropdown-Liste angezeigt werden. Wird ein Material in der Dropdown-Liste selektiert, dann soll der Materialtext in einem weiteren Feld angezeigt werden. 

**Schritt 1: Textfelder definieren**

In unserer Nintex-Form benötigen wir drei Felder mit Bezeichnungen: 

1. Das erste Feld *Material Number* vom Typ **Single Line Textbox** ist das Eingabefeld und enthält die Materialnummer.
2. Im zweiten Feld *Suggested Materials* vom Typ **Choice** werden die möglichen Treffer für die eingegebene Materialnummer in einer Dropdownliste ausgegeben und sind selektierbar.
3. Im dritten Feld *Material* vom Typ **Single Line Textbox** wird der Material-Langtext zum ausgewählten Material angezeigt.

![nintex-forms-js-dropdown-01](/img/content/nintex-forms-js-dropdown-01.png){:class="img-responsive"}

Rufen Sie zunächst die Settings für das Feld *Material Number* auf und setzen Sie die Option *Store Client ID in JavaScript Variable* auf Yes. <br>
Tragen Sie *field_input* als Namen ins Feld *Client ID JavaScript variable name* ein.

![nintex-forms-js-dropdown-02](/img/content/nintex-forms-js-dropdown-02.png){:class="img-responsive"}

Rufen Sie anschließend die Settings für das *Choice*-Feld auf. <br>
Wählen Sie als Anzeigeformat Drop down list und tragen Sie bei *Choices* z.B. Start typing ein. Was Sie hier eintragen spielt keine Rolle, da die Eingabe durch JavaScript später wieder überschrieben wird (Im vorliegenden Beispiel mit dem Satz *Start typing in the input* above).  
Setzen Sie anschließend die Option *Store Client ID in JavaScript Variable* auf Yes und tragen Sie ins Feld *Client ID JavaScript variable name* den Name *field_select* ein.

![nintex-forms-js-dropdown-03](/img/content/nintex-forms-js-dropdown-03.png){:class="img-responsive"}

Rufen Sie anschließend die Settings für die *Single Line Textbox* neben *Material* auf. Setzen Sie auch hier die Option *Store Client ID in JavaScript Variable* auf Yes und tragen Sie ins Feld *Client ID JavaScript variable name* den Name *field_output* ein.   

Da es sich nur um ein Anzeigefeld handeln soll, können Sie zusätzlich unter *Appearance* definieren, dass das Feld nur angezeigt werden soll und keine Eingaben zugelassen sind.        

![nintex-forms-js-dropdown-04](/img/content/nintex-forms-js-dropdown-04.png){:class="img-responsive"}

**Schritt 2: JavaScript-Code einfügen**

Fügen Sie eine Referenz zu unserer JavaScript-Bibliothek unter *Form Settings -> Advanced -> Custom JavaScript Includes* ein:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)


![nintex-forms-js-dropdown-05](/img/content/nintex-forms-js-dropdown-05.png){:class="img-responsive"}

Fügen Sie den JavaScript-Code unter *Form Settings -> Advanced -> Custom JavaScript* ein.

![nintex-forms-js-dropdown-06](/img/content/nintex-forms-js-dropdown-06.png){:class="img-responsive"}

Im Code wird die Funktion *tEcs.executeXql* aufgerufen, um die Materialnummer und den Material-Langtext aus der SAP-Tabelle MAKT zu lesen.

{% highlight javascript %}
NWF$(document).ready(function() {
    theobald.ready(function() {
        var $ = NWF$,
            // material number input and dropbox
            tsInput = $('#' + field_input),
            // in combobox properties set custom text e.g. "Start typing in the field above..."
            tsSelect = $('#' + field_select),
            // description output
            tsInputDescription = $('#' + field_output),
            //
            // literals
            strings = {
                loading: 'Loading...',
                matches: ' matches',
                noMatchText: 'No direct match!',
                noMatches: 'No matches',
                errComm: 'Communication error, please see console',
                select: 'Please select',
                type: 'Start typing in the input above'
            },
            //
            domOptionString1parameter = '{0}',
            domOptionString = '{0} ({1})',
            // xql query
            xqlString = "SELECT TOP 10 MATNR, MAKTX FROM MAKT WHERE (MATNR LIKE '%{0}%' OR MAKTX LIKE '%{0}%') AND SPRAS = 'EN'",
            queryFunction = function(val) {
                var tEcsOptions = {
                    data: tEcs.format(xqlString, val)
                };
                if(window.ecsCoreConnection){
                    tEcsOptions.connection = window.ecsCoreConnection;
                }
                return tEcs.executeXql(tEcsOptions);
            };
 
        var firstOption = tsSelect.find("option:nth-child(1)").clone();
        tsSelect[0].selectedIndex = -1;
        tsSelect.empty();
        tsSelect.append(firstOption.clone());
 
        // user types into input, each character triggers search (SAP query)
        tsInput.on('input', function() {
            tsSelect.empty();
            var newOption = firstOption.clone();
            newOption.text(strings.loading);
            tsSelect.append(newOption);
            newOption.prop('selected', 'selected');
 
            queryFunction(tsInput.val())
                .done(function(data) {
                    tsSelect.empty();
                    var newOptionAfterInput = firstOption.clone();
                    newOptionAfterInput.prop('selected', 'selected');
 
                    if (data.length > 0) {
                      newOptionAfterInput.text(tEcs.format(domOptionString, strings.select, data.length + strings.matches));
                        tsSelect.append(newOptionAfterInput);
 
                        $.each(data, function(i, v) {
                            var $option = firstOption.clone();
                            $option.text(tEcs.format(domOptionString, tEcs.util.ltrim(v.MATNR, '0'), v.MAKTX));
                            $option.attr('tsdescription', v.MAKTX);
                            tsSelect.append($option);
                        });
                    } else {
                        newOptionAfterInput.text(strings.noMatches);
                        tsSelect.append(newOptionAfterInput);
                    }
 
                    tsSelect[0].selectedIndex = 0;
                }).fail(function(xhr, et) {
                    console.log(xhr, et);
                });
        });
 
        // when user selects an option
        tsSelect.on('change', function() {
            tsInputDescription.val(tsSelect.find('option:selected').attr('tsdescription'));
        });
    });
});
{% endhighlight %}

Für weitere Informationen siehe [JavaScript Library for REST](../../ecs-de/ecs-runtime/ecs-webservices/javascript-bibliothek-fuer-rest).<br>  
Dieses Szenario können Sie auch mit ECS Core umsetzen, siehe [Developing with ECS Core](../../ecs-core/anwendungsentwicklung-mit-ecs-core).

**Schritt 3: Die Nintex Form ausführen**

Nun führen Sie die Form aus und geben Sie eine Materialnummer ein. Die Treffer zur Eingabe werden aus SAP gelesen und in der Dropdown Liste (Suggested Materials) angezeigt.  


![nintex-forms-js-dropdown-07](/img/content/nintex-forms-js-dropdown-07.png){:class="img-responsive"}

Wählt man ein Material aus der Liste aus, wird der Langtext dazu im Feld *Material angezeigt*. 

![nintex-forms-js-dropdown-08](/img/content/nintex-forms-js-dropdown-08.png){:class="img-responsive"}
