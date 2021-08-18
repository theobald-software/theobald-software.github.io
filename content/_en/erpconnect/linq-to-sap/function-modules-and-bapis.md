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


{: .box-warning }
**Warning! Deprecated component** 
As of Visual Studio Version 2019 and .Net4.5 the *LINQ to SAP* add-on is not supported anymore.

**You can find the code for this example in the ERPConnect installation directory in the LINQBapi directory.**

Because the terms function modules and BAPIs are almost equivalent, we only speak of BAPIs in the following. In the LINQ application, BAPIs are handled nearly the same way as stored procedures in LINQ to SQL. Drag a function object from the toolbox to the prepared DataContext. The selection of the BAPI is made with the search dialog.

![LINQToERP-Function-Modules-001](/img/content/LINQToERP-Function-Modules-001.png){:class="img-responsive" width="600px"}

The following screenshot shows the dialog for editing the function object. If a parameter is to be filled later dynamically in the code when calling it, a checkmark has to be made in the Pass column. Alternatively, a static value can also be entered in the Value cell.

![LINQToERP-Function-Modules-002](/img/content/LINQToERP-Function-Modules-002.png){:class="img-responsive" width="800px"}

Working with tables is similar. You can either make transfers to a function as a table object or as a return value. The variable name, the name of the table class and the name of the row class can also be specified. If the fields remain empty, default names will be generated. 

![LINQToERP-Function-Modules-003](/img/content/LINQToERP-Function-Modules-003.png){:class="img-responsive" width="800px"}

The following code shows how the above example is addressed with an actual parameter and with a return value table.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
SAPContext sc = new SAPContext("TestUser","SECRET01");
var MyEmpls = sc.BAPI_EMPLOYEE_GETLIST("T*"); 
foreach (var Empl in MyEmpls) 
   Console.WriteLine(Empl.PERNR + " " + Empl.ENAME); 
Console.ReadLine();
{% endhighlight %}
</details>

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

![LINQToERP-Function-Modules-004](/img/content/LINQToERP-Function-Modules-004.png){:class="img-responsive" width="600px"}