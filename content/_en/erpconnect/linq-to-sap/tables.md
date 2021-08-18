---
ref: ec-linq-to-sap-02
layout: page
title: Tables
description: Tables
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-tables
---

{: .box-warning }
**Warning! Deprecated component** 
As of Visual Studio Version 2019 an .Net4.5 the *LINQ to SAP* add-on is not supported anymore.


**The sample code is located in the installation directory in theLINQTable directory**

Following up on the previous section, a search mask now opens up for the selection of tables. Take the desired table by confirming your selection with OK. 

![LINQToERP-Tables-001](/img/content/LINQToERP-Tables-001.png){:class="img-responsive" width="600px" }


After the desired table has been selected, the following selection dialog will open. Here you check off the desired columns that are to be made available later on in the query output. You can also change the name of the proxy class that is internally generated. By default, the names of the columns correspond with the properties of the proxy class later on. You can name them yourself by writing over the entry in the Member column.

![LINQToERP-Tables-002](/img/content/LINQToERP-Tables-002.png){:class="img-responsive" width="800px" }

Confirm this by clicking OK. Now you'll see a corresponding icon in the Designer. Save the .erp file in order to trigger the proxy classes code generation in the background. Experienced users can have a closer look at the implicitly generated file .Designer.cs/vb which shows how LINQ logic is mapped to traditional ERPConnect logic.  

![LINQToERP-Tables-003](/img/content/LINQToERP-Tables-003.png){:class="img-responsive" width="800px" }

To now access the LINQ-capable class in the code, the data context first has to be instantiated. This is either done by entering the user name and password (with the previously stored system parameters) or alternatively entering the entire registration information (the constructor of the DataContext class is accordingly overloaded; alternatively, if you already know the R3Connection object, it can be addressed directly via the DataContext.Connection). With DataContext, the corresponding LINQ queries can be formulated: 


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
static void Main(string[] args) 
{ 
   SAPContext sc = new SAPContext("TestUser", "SECRET01"); 
  
   var MyTexts = from t in sc.MAKTList 
             where t.MATNR.StartsWith("100") 
             && t.SPRAS == "D" 
             select t; 
  
   foreach (var MyText in MyTexts) 
      Console.WriteLine(MyText.MATNR + " " + MyText.MAKTX); 
   Console.WriteLine("Press any key to exit"); 
   Console.ReadLine(); 
}
{% endhighlight %}
</details>

<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Sub Main() 
   Dim sc As New LINQTable.SAPContext("TestUser", "SECRET01") 
   Dim MyTexts = From t In sc.MAKTList _ 
            Where t.MATNR.StartsWith("100") _ 
            And t.SPRAS = "D" 
  
   For Each MyText In MyTexts 
      Console.WriteLine(MyText.MATNR & " " & _ 
      MyText.MAKTX) 
   Next 
  
   Console.WriteLine("Press any key to exit") 
   Console.ReadLine() 
End Sub
{% endhighlight %}
</details>