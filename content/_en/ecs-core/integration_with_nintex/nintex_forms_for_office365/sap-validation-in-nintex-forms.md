---
ref: ecscore-nintex-forms-01
layout: page
title: SAP validation in Nintex-Forms
description: SAP validation in Nintex-Forms
product: ecs-core
parent: nintex_forms_for_office365
permalink: /:collection/:path
weight: 1
lang: en_GB
---

When using Nintex Forms in SAP integration scenarios, it is often necessary to check the input data to see if it is valid in the SAP system before we send the form. If the form has an input field for an SAP customer number, for example, we want to check whether this customer number exists in the SAP system. 

ECS Core offers REST services for SAP operations that can be consumed by JavaScript. The integration of custom JavaScript is in turn supported by Nintex Forms. In this example, we will use JavaScript and ERPConnect Services REST Services to check the SAP customer number entered in the Nintex form for validity in the SAP system.

**Step 1: Define text fields**

In our Nintex form we need two fields: 
The first field *field_input* contains the customer number. 
The second field *field_output* contains the SAP customer name if the entry is valid, otherwise an error message.

![nintex-forms-js-ecs-01](/img/content/nintex-forms-js-ecs-01.png){:class="img-responsive"}

Right-click on the first field and select *Settings*.

![nintex-forms-js-ecs-02](/img/content/nintex-forms-js-ecs-02.png){:class="img-responsive"}

Set the option *Store Client ID in JavaScript Variable* to *Yes*.<br>.
Put a name in the field *Client ID JavaScript variable name*, e.g. *field_input*.

![nintex-forms-js-ecs-03](/img/content/nintex-forms-js-ecs-03.png){:class="img-responsive"}

Repeat the last steps for the second field and name it, e.g. *field_output*.

![nintex-forms-js-ecs-04](/img/content/nintex-forms-js-ecs-04.png){:class="img-responsive"} 

**Step 2: Insert JavaScript code**

Add a reference to our JavaScript library under *Form Settings -> Advanced -> Custom JavaScript Includes*:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html]()


![nintex-forms-js-ecs-05](/img/content/nintex-forms-js-ecs-05.png){:class="img-responsive"}

Insert the JavaScript code under *Form Settings -> Advanced -> Custom JavaScript*.

![nintex-forms-js-ecs-06](/img/content/nintex-forms-js-ecs-06.png){:class="img-responsive"}

The *tEcs.ExeculeXQL* function is called in the code to read the customer name from the SAP table KNA1. 

{% highlight javascript %}
// webpage loaded
NWF$(document).ready(function() {
    // tecs5
    theobald.ready(function() {
        var $ = NWF$,
            // material number input
            tsInput = $('#' + field_input),
            // description output
            tsInputDescription = $('#' + field_output),
            // literals
            noMatchText = 'No direct match!',
            errComm = 'Communication error, please see console',
            selectOptionString = '{0} ({1})',
            // xql query
            xqlString = "SELECT TOP 2 KUNNR, NAME1 FROM KNA1 WHERE (KUNNR LIKE '%{0}') ",
            // connection properties to ecscore
            ecsConnection = {
                ecs: {
                    coreApiKey: 'C30B8CD6E8DA474DBDC22CAE1958D1XX',
                    instance: 'EC5',
                    url: 'https://theobald-cloudservices.servicebus.windows.net/ecs/ws'
                }
            },
            queryFunction = function(val) {
                return tEcs.executeXql({
                    connection: ecsConnection,
                    data: tEcs.format(xqlString, val)
                });
            };
        tsInput.on('blur', function() {
            queryFunction(tsInput.val())
                .done(function(data) {
                    if (data.length === 1) {
                        var firstRow = data[0];
                        tsInputDescription.val(tEcs.format(selectOptionString, firstRow.NAME1, firstRow.KUNNR));
                    } else {
                        tsInputDescription.val(noMatchText);
                    }
                }).fail(function(data, data2) {
                    console.log(data, data2);
                    tsInputDescription.val(errComm);
                });
        });
    });
});
{% endhighlight %}

For more information, see [JavaScript Library for REST]().  

**Step 3: Execute the Nintex form**

Now execute the form and enter a customer number. The customer name is read from SAP and displayed in the second field.  



![nintex-forms-js-ecs-07](/img/content/nintex-forms-js-ecs-07.png){:class="img-responsive"}

If the customer number you entered does not exist in SAP, an error message appears. 

![nintex-forms-js-ecs-08](/img/content/nintex-forms-js-ecs-08.png){:class="img-responsive"}

This example shows how to check input data for SAP validity in Nintex form. The check was implemented using JavaScript and ECS Core REST Services. <br>
Many other scenarios are feasible. It would be possible, for example, to fill a combo box with SAP customer numbers or names, or to offer a direct SAP search.
