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

The following section shows how to use the Table component of the *LINQ to ERP* toolbox.

### Look Up a Table
1. Drag&Drop the Table component into the *LINQ to ERP* DataContext. A search window opens. 
2. Enter the name of the table to be extracted in the field **Table** (1). Use wildcards (*) if needed. <br>
![LINQToERP-Tables-001](/img/content/LINQToERP-Tables-001.png){:class="img-responsive" }
3. Click **[Search]** (binoculars icon) (2). Search results appear in the preview window.
4. Select a table (3) and click **[OK]** (4).

### Filtering Columns
After a table has been loaded, the window "LINQ to ERP Tables" opens. 

1. Mark all columns that are to be made available in the query output (5). 
2. Optional: You can change the name of the proxy class that is generated internally. 
By default the names of the columns correspond to the properties of the proxy class. 
You can name them yourself by writing over the entry in the column **Member** (6). <br>
![LINQToERP-Tables-002](/img/content/LINQToERP-Tables-002.png){:class="img-responsive" }
3. Click **[Preview]** (7) to check the result table.
4. Click **[OK]** (8) to confirm your selection. The window "LINQ to ERP Tables" closes and a corresponding icon is created in the Designer. <br>
![LINQToERP-Tables-003](/img/content/LINQToERP-Tables-003.png){:class="img-responsive" }

To edit the table, double-click the table icon in the Designer.

### How to Use the Class in your Code
Save the .erp file that contains the extraction component to trigger the proxy classes code generation in the background. <br>

{: .box-tip }
**Tip:** Experienced users can have a closer look at the implicitly generated file `.Designer.cs/vb` that shows how LINQ logic is mapped to traditional ERPConnect logic.  

To access the LINQ-capable class in the code, instantiate the DataContext. <br>
There are multiple ways to do that:
- Enter the user name and password with the previously stored system parameters. 
- Enter the entire registration information (the constructor of the DataContext class is accordingly overloaded). 
- If you already know the R3Connection object, address it directly via the DataContext.Connection

Using the DataContext, the corresponding LINQ queries can be formulated as shown the example below: <br>
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