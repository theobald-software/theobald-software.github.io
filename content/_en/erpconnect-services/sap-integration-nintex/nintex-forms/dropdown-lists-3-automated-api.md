---
ref: ecs-sin-nintex-forms-04
layout: page
title: Dropdown-lists III (automated API)
description: Dropdown-lists III (automated API)
product: erpconnect-services
parent: nintex-forms
permalink: /:collection/:path
weight: 4
lang: en_GB
---

For the example with the flexible data selection in cascading dropdown-lists, we also provide a mostly automated script with a few lines of code.
This makes it possible for users without JavaScript knowledge to implement such scenarios. 

{% highlight javascript %}
NWF$(document).ready(function () {
    theobald.ready(function () {
        theobald.$ = NWF$;

        tEcs.initializeLiveCombobox({
            controls: {
                inputId: input1,
                selectId: combo1,
                outputId: output1,
                descriptionId: outputd1
            },
            tableSettings: {
                tableName: "MAKT",
                idField: "MATNR",
                textField: "MAKTX",
                language: "EN"
            }
        });
        
        tEcs.initializeLiveCombobox({
            controls: {
                inputId: input2,
                selectId: combo2,
                outputId: output2,
                descriptionId: outputd2
            },
            tableSettings: {
                tableName: "KNA1",
                idField: "KUNNR",
                textField: "NAME1",
                language: "EN"
            }
        });
    });
});
{% endhighlight %}

The full signature can also be found [here](https://static.theobald-software.com/theobald.ecs.micro/5.6.0/index.html#div-liveCombobox).

The script is a template for the following two use cases, which can be changed or adapted any time: 

1. Search for a material number in SAP table MAKT and display the possible hits in the dropdown-list. If you select a hit, the material number and the material description are displayed in two separate fields.

2. Search for the customer number in SAP table KNA1 and display the possible hits in the dropdown-list. If you select a hit, the customer number and the customer name are displayed in two separate fields.


Carry out the following steps to implement the example in Nintex Forms: 

**Step 1: Define text fields**

In the Nintex form, four freely nameable fields are required (for both examples, if they are to be executed in one form): 

1. The first field of type *Single Line Textbox* is the input field and contains the material number. Assign the JavaScript variable *input1* to this field.
2. In the second field of type *Choice**, the possible hits for the entered material number are displayed in a dropdown list and can be selected. Assign the JavaScript variable *combo1* to this field.
3. The third field of type *Single Line Textbox* displays the material number for the selected material. Assign the JavaScript variable *output1* to this field.  	
4. The fourth field of type *Single Line Textbox* displays the material long text for the selected material. Assign the JavaScript variable *outputd2* to this field.  

The second example in the script works analogously, but the corresponding variable names in this example (input2, combo2,...) must be used. 

The names for the JavaScript variables are suggested in the script, but can be changed.
In addition, the following fields can be freely assigned in the *tableSettings* section: 

*tableName*: Name of the SAP table.
*idField*: Name of the field with the ID to be displayed.  
*textField*: Name of the field with the description text.
*language*: SAP logon language abbreviation (DE, EN, etc.)

The example is therefore adaptable and applicable for a multitude of possible scenarios, without complicated code.  

**Step 2: Insert JavaScript code**

Add a reference to our JavaScript library under *Form Settings -> Advanced -> Custom JavaScript Includes*:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)

The latest version of the JavaScript library can be obtained by entering the abbreviated URL:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)

Insert the JavaScript code under *Form Settings -> Advanced -> Custom JavaScript*.

**Step 3: Publish and execute the Nintex form.**

After you have published the form, you can execute it and use the template.

![nintex-forms-js-dropdown-09](/img/content/nintex-forms-js-dropdown-09.gif){:class="img-responsive"}

