---
ref: ecs-sin-nintex-forms-02
layout: page
title: Load data in dropdown-lists
description: Load data in dropdown-lists
product: erpconnect-services
parent: nintex-forms
permalink: /:collection/:path
weight: 2
lang: en_GB
---

In some SAP integration scenarios it can be useful to provide a flexible data selection in cascading dropdown lists. This is also possible by integrating JavaScript and ECS REST-Services in Nintex Forms (compare this with the earlier example of SAP validation in Nintex Forms). 

In the present example an SAP material number should be entered in an input field in Nintex Forms and all possible return values for this material number should be listed in a dropdown box. When the wanted material is selected in the dropdown box the material long text is supposed to be displayed in another field.  

**Step 1: Create a SharePoint custom list**

The first step is to create a SharePoint custom list, where the form is placed upon. One or two list fields (i.e. *Material*, *Material Number*) of type *Single line of text* can optionally be created.  
After creating the list open the Nintex Forms designer for that list.

**Step 2: Define the form controls**

In our Nintex Form we require three fields with descriptions: 

1. The first control named *Material Number* is of type **Single Line Textbox**. It is the input field for entering the SAP material number. Connect that control to the *Material* list field created in step one. 
2. The second control named *Suggested Materials* is of type **Choice**. All possible matches for the given material number should be displayed and be selectable here in a dropdown list. 
3. The third control named *Selected Material* is of type **Single Line Textbox**. The material long text for the selected material should be displayed here.

You can create description labels for all three controls.

![nintex-forms-js-dropdown-01](/img/content/nintex-forms-js-dropdown-01.png){:class="img-responsive"}

Open the settings dialog for field *Material Number* and set the option *Store Client ID in JavaScript Variable to Yes*.

Enter *field_input* as a name into field *Client ID JavaScript variable name*.

![nintex-forms-js-dropdown-02](/img/content/nintex-forms-js-dropdown-02.png){:class="img-responsive"}

After that open the settings for the *Choice* field.<br> 
Choose *Drop down list* as display format and enter some value in the Choices field (i.e. *Start Typing*). It doesn't matter which value you enter here because all entries are overwritten later by JavaScript code (In this example they are overwritten with the sentence *Start typing in the input above*). 
Then set the option *Store Client ID in JavaScript Variable* to Yes and enter *field_select* as a name in field *Client ID JavaScript variable name*.


![nintex-forms-js-dropdown-03](/img/content/nintex-forms-js-dropdown-03.png){:class="img-responsive"}

Afterwards call up the settings for Single Line Textbox *Material*. Set the option *Store Client ID in JavaScript Variable* to Yes and enter field_output as a name in field *Client ID JavaScript variable name*.   

Since this should be only a display field you can also define under *Appearance*, that the field is only visible but not enabled.  

![nintex-forms-js-dropdown-04](/img/content/nintex-forms-js-dropdown-04.png){:class="img-responsive"}

**Step 3: Add the JavaScript code**

Add a reference to the JavaScript library under *Settings - Form -> Advanced -> Custom JavaScript Includes:*

http://static.theobald-software.com/theobald.ecs.micro/5.2.0/theobald.ecs.micro.js

![nintex-forms-js-dropdown-05](/img/content/nintex-forms-js-dropdown-05.png){:class="img-responsive"}

Insert the JavaScript Code under *Settings - Form -> Advanced -> Custom JavaScript*.

![nintex-forms-js-dropdown-06](/img/content/nintex-forms-js-dropdown-06.png){:class="img-responsive"}

In the JS code, function *tEcs.executeXql* is called to read the material number and the material long text from SAP table MAKT.


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

For more information see [JavaScript Library for REST](../../ecs/erpconnect-services-runtime/web-services/javascript-library).<br>  
You can also realize this example with ECS Core (see [Developing with ECS Core](../../ecs-core/ecs-core-developing)).

**Step 4: Run the Nintex Form**

Run the form and enter a material number. The return values are read from SAP table MAKT and displayed in the dropdown list (Suggested Materials).  

![nintex-forms-js-dropdown-07](/img/content/nintex-forms-js-dropdown-07.png){:class="img-responsive"}

When you select a material, the material long text should be displayed in the *Material* field. 

![nintex-forms-js-dropdown-08](/img/content/nintex-forms-js-dropdown-08.png){:class="img-responsive"}
