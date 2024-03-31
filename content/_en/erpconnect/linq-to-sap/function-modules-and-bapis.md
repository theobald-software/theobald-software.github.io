---
ref: ec-linq-to-sap-04
layout: page
title: Function Modules and BAPIs
description: Function Modules and BAPIs
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-function-modules-and-bapis
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

The following section shows how to use the Function component of the *LINQ to ERP* toolbox. <br>
The component includes Function Modules and BAPIs. 
In the LINQ application, Function Modules and BAPIs are handled nearly the same way as stored procedures in *LINQ to SQL*. 


### Look up a Function Module/BAPI
1. Drag&Drop the Function component into the *LINQ to ERP* DataContext. A search window opens.
2. Enter the name of the Function Module/BAPI to be used in the field **Function** (1). Use wildcards (*) if needed. <br>
![LINQToERP-Function-Modules-001](/img/content/LINQToERP-Function-Modules-001.png){:class="img-responsive" }
3. Click **[Search]** (binoculars icon) (2). Search results appear in the preview window.
4. Select a Function Module/BAPI (3) and click **[OK]** (4) to proceed.

### Define Export, Import, Changings and Tables

After a Function Module/BAPI has been loaded, the window "RFC Function Modules/BAPIs" opens. 

1. In the *Export* tab you can define the output values sent from SAP back to the client after the execution of a function module.<br>
If a parameter is to be set dynamically in the code, mark the checkbox of the item in the column **Pass** (5).<br>
To assign a static value, enter the new value in the column **Value** (6).<br>
![LINQToERP-Function-Modules-002](/img/content/LINQToERP-Function-Modules-002.png){:class="img-responsive" }
2. In the *Import* tab you can define the input values sent from the client to SAP.
3. In the *Changings* tab you can define parameters that can be used for input and output.
4. In the *Tables* tab you can define parameters presented in a table structure consisting of multiple rows. 
Tables can be used for input by marking the checkbox in the column **Pass** or they can be used as output by marking the checkbox in the column **Return**.<br>
You can also specify the variable name, the name of the table class and the name of the row class. If the fields remain empty, default names will be generated. 
![LINQToERP-Function-Modules-003](/img/content/LINQToERP-Function-Modules-003.png){:class="img-responsive" }
5. To edit a table, click **Edit** (8).
6. Click **[OK]** to confirm your input. The window "RFC Function Modules/BAPIs" closes and a corresponding icon is created in the Designer. <br>

To edit the Function Module/BAPI, double-click the function icon in the Designer.

### How to Use the Class in your Code
Save the .erp file that contains the extraction component to trigger the proxy classes code generation in the background. <br>

The following code shows how the example above is addressed with an actual parameter and a return table:

```csharp
SAPContext sc = new SAPContext("TestUser","SECRET01");
var MyEmpls = sc.BAPI_EMPLOYEE_GETLIST("T*"); 
foreach (var Empl in MyEmpls) 
   Console.WriteLine(Empl.PERNR + " " + Empl.ENAME); 
Console.ReadLine();
```

<!---
<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Dim sc As New LINQTable.SAPContext("TestUser", "SECRET01") 
  
Dim MyEmpls = From t In sc.BAPI_EMPLOYEE_GETLIST("T*") Select t 
  
For Each Empl In MyEmpls 
   Console.WriteLine(Empl.PERNR & " " & Empl.ENAME) 
Next 
  
Console.ReadLine()
{% endhighlight %}
</details>
  -->
  

![LINQToERP-Function-Modules-004](/img/content/LINQToERP-Function-Modules-004.png){:class="img-responsive" width="600px"}