---
ref: ecs-sin-nintex-forms-01
layout: page
title: SAP Validation in Nintex Forms
description: SAP Validation in Nintex Forms
product: erpconnect-services
parent: nintex-forms
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=sap-validation-in-nintex-forms
---

When you use Nintex Forms to submit Data to your SAP-System, you may need to validate the input data on the client side in the Nintex Form before the form is submitted. If your Form has an input field e.g. for an SAP customer number, you may need to validate if the customer number exists in your SAP system. 

ERPConnect Services (ECS) provides REST-Services for SAP Operations, that can be consumed e.g. by JavaScript that is supported in Nintex Forms. In this sample you will see how to use JavaScript and ERPConnect Services REST Services to validate SAP customer number input in the Nintex Form. 

**Step 1: Define the text fields**

In our Nintex Form we have two fields:
The first field *field_input* should contain the customer number input.
The second field *field_output* should contain the SAP customer name if the customer number is valid. Otherwise an error message will appear.

![nintex-forms-js-ecs-01](/img/content/nintex-forms-js-ecs-01.png){:class="img-responsive"}

Right-Click the first field and select *Settings*.

![nintex-forms-js-ecs-02](/img/content/nintex-forms-js-ecs-02.png){:class="img-responsive"}

Set the option *Store Client ID in JavaScript Variable* to *Yes*.<br>
Set the *Client ID JavaScript variable name, e.g. field_input*.

![nintex-forms-js-ecs-03](/img/content/nintex-forms-js-ecs-03.png){:class="img-responsive"}

Repeat the same steps for the second field and give it a name, e.g. *field_output*.

![nintex-forms-js-ecs-04](/img/content/nintex-forms-js-ecs-04.png){:class="img-responsive"}

**Step 2: Add the JavaScript Code**

Add a reference to the ECS JavaScript library under Form *Settings -> Advanced -> Custom JavaScript Includes*:

https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html


![nintex-forms-js-ecs-05](/img/content/nintex-forms-js-ecs-05.png){:class="img-responsive"}

Insert the JavaScript Code under Form *Settings -> Advanced -> Custom JavaScript*.

![nintex-forms-js-ecs-06](/img/content/nintex-forms-js-ecs-06.png){:class="img-responsive"}

In the code the function *tEcs.ExeculeXQL* is called to get the customer name from the SAP table KNA1.

```
// webpage loaded
NWF$(document).ready(function() {
    // tecs5
    theobald.ready(function() {    
        var $ = NWF$,
            // number input
            tsInput = $('#' + field_input),
            // description output
            tsInputDescription = $('#' + field_output);           
        tsInput.on('blur', function() {        
            tEcs.executeXql({            
                data: tEcs.format("SELECT TOP 2 KUNNR, NAME1 FROM KNA1 WHERE (KUNNR LIKE '%{0}') ", tsInput.val())        
            }).done(function(data) {            
                if (data.length === 1) {                
                    var firstRow = data[0];                
                    tsInputDescription.val(tEcs.format('{0} - {1}', firstRow.KUNNR, firstRow.NAME1));            
                } else {                
                    tsInputDescription.val('No direct match!');            
                }        
            }).fail(function(data, data2) {            
                tsInputDescription.val('Communication error, please see console');        
            });    
        });
    });
});
```


**Step 3: Run the Nintex Form**

Now run the form. Fill in an SAP customer number. The customer name will be fetched from SAP and written in the second field. 

![nintex-forms-js-ecs-07](/img/content/nintex-forms-js-ecs-07.png){:class="img-responsive"}

If the input number is invalid, an error message will be shown.

![nintex-forms-js-ecs-08](/img/content/nintex-forms-js-ecs-08.png){:class="img-responsive"}

This sample showed how to validate input data in Nintex Forms using JavaScript and REST-Services provided by ERPConnect Services. 
Other scenarios are possible too, e.g. to fill a combo-box with SAP customer numbers or to search directly using an SAP customer number or name.  
In further Scenarios you can use external columns from external content types, that are based on SAP business objects (e.g. Customer) and created with the [BCS Connector](../../ecs/bcs-connector).