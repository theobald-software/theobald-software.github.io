---
ref: ecscore-nintex-forms-02
layout: page
title: Filling dropdown boxes in Nintex Forms
description: Filling dropdown boxes in Nintex Forms
product: ecs-core
parent: nintex_forms_for_office365
permalink: /:collection/:path
weight: 2
lang: en_GB
---

In certain integration scenarios, it can be useful to make SAP data available for flexible data selection in cascading dropdown lists. This is also possible with JavaScript and REST services in Nintex Forms (see previous example).

In this example, an SAP material number is entered in an input field and the possible hits are displayed in a dropdown list. If a material is selected in the drop-down list, the material text is to be displayed in another field. 

**Step 1: Define text fields**

In our Nintex form we need three fields with designations: 

The first field *Material Number* of type **Single Line Textbox** is the input field and contains the material number.
In the second field *Suggested material* of type **Choice**, the possible hits for the material number entered are displayed in a dropdown list and can be selected.
The third field *Material* of type **Single Line Textbox** displays the material long text for the selected material.

![nintex-forms-js-dropdown-01](/img/content/nintex-forms-js-dropdown-01.png){:class="img-responsive"}

First call the settings for the field *Material Number* and set the option *Store Client ID in JavaScript Variable* to Yes. <br>
Enter *field_input* as the name in the *Client ID JavaScript variable name* field.

![nintex-forms-js-dropdown-02](/img/content/nintex-forms-js-dropdown-02.png){:class="img-responsive"}

Then call up the settings for the *Choice* field. <br>
Select Drop down list as the display format and enter e.g. Start typing for *Choices*. What you enter here does not matter, as the input will be overwritten by JavaScript later (in this example with the sentence *Start typing in the input* above).  
Then set the option *Store Client ID in JavaScript Variable* to *Yes* and enter the name *field_select* in the field *Client ID JavaScript variable name*.

![nintex-forms-js-dropdown-03](/img/content/nintex-forms-js-dropdown-03.png){:class="img-responsive"}

Then recall the settings for the *Single Line Textbox* next to *Material*. Set the option *Store Client ID in JavaScript Variable* to *Yes* and enter the name *field_output* in the field *Client ID JavaScript variable name*.   

Since this is only a display field, you can also define under *Appearance* that the field is only to be displayed and that no entries are allowed.        

![nintex-forms-js-dropdown-04](/img/content/nintex-forms-js-dropdown-04.png){:class="img-responsive"}

**Step 2: Insert JavaScript code**

Add a reference to our JavaScript library under *Form Settings -> Advanced -> Custom JavaScript Includes*:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)


![nintex-forms-js-dropdown-05](/img/content/nintex-forms-js-dropdown-05.png){:class="img-responsive"}

Insert the JavaScript code under *Form Settings -> Advanced -> Custom JavaScript*.

![nintex-forms-js-dropdown-06](/img/content/nintex-forms-js-dropdown-06.png){:class="img-responsive"}

The function *tEcs.executeXql* is called in the code to read the material number and the material long text from the SAP table MAKT.


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
            ecsCoreConnection = {
                ecs: {
                    coreApiKey: 'C30B8CD6E8DA474DBDC22CAE1958D14XX',
                    instance: 'SAP',
                    url: 'https://theobald-cloudservices.servicebus.windows.net/ecs/ws'
                }
            },
            queryFunction = function(val) {
                var tEcsOptions = {
                    data: tEcs.format(xqlString, val)
                };
                if(ecsCoreConnection){
                    tEcsOptions.connection = ecsCoreConnection;
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
{% endhighlight %}

For more information see [JavaScript Library for REST](../../../../en/erpconnect-services/ecs/erpconnect-services-runtime/web-services/javascript-library).<br>  

**Step 3: Executing the Nintex Form**

Now execute the form and enter a material number. The hits for the entry are read from SAP and displayed in the dropdown list (Suggested Materials).  

![nintex-forms-js-dropdown-07](/img/content/nintex-forms-js-dropdown-07.png){:class="img-responsive"}

If you select a material from the list, the long text for this material is displayed in the *material* field. 

![nintex-forms-js-dropdown-08](/img/content/nintex-forms-js-dropdown-08.png){:class="img-responsive"}
