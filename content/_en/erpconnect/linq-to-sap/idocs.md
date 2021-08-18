---
ref: ec-linq-to-sap-06
layout: page
title: IDocs
description: IDocs
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-idocs
---


{: .box-warning }
**Warning! Deprecated component** 
As of Visual Studio Version 2019 an .Net4.5 the *LINQ to SAP* add-on is not supported anymore.


You can send IDocs to SAP with the help of LINQ to SAP. The segments can be used in the SAP context.

To use an IDoc in .NET, drag the IDoc component from the toolbox to the data context. The selection of the IDoc is done in the search dialog.

![LINQToERP-IDocs_001](/img/content/LINQToERP-IDocs_001.png){:class="img-responsive" width="600px"}

In the following dialog you can find in the left area the structure of the IDoc. In the lower area the fields are shown of the segment that is selected in the treeview. Uncheck unused fields or rename them. In the upper right corner you will find the class names and the collection names (names are generated automatically). If you like, just rename them.

![LINQToERP-IDocs_002](/img/content/LINQToERP-IDocs_002.png){:class="img-responsive" width="800px"}

The checkbox selected can be used to deactivate segments which are not used later in the code. Deactivated segments are shown in italic in the treeview.

The following code shows how to use the generated classes. First an IDoc object is generated (MATMAS05) and the most important header information is filled (e.g. sender and receiver information like RCVPRN or SNDPRN).

Two Segments are created: E1MARAM (Basicdata) and E1MAKTM (Shorttext), filled with the required fields and added to the IDoc. The IDoc is sent with *Send()*.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
static void Main(string[] args) 
{ 
   try 
   { 
      SAPContext sc = new SAPContext("User", "password"); 
      sc.Connection.Open(); 
  
      SAPContext.MATMAS05 MATMAS5 = new SAPContext.MATMAS05(sc.Connection); 
      SAPContext.E1MARAM E1MARAM = new SAPContext.E1MARAM(); 
      SAPContext.E1MAKTM E1MAKTM = new SAPContext.E1MAKTM(); 
  
      MATMAS5.RCVPRN = "T90CLNT090"; 
      MATMAS5.RCVPRT = "LS"; 
      MATMAS5.SNDPOR = "ERPTEST"; 
      MATMAS5.SNDPRN = "ERPTEST"; 
      MATMAS5.SNDPRT = "LS"; 
      MATMAS5.MESTYP = "MATMAS"; 
  
      E1MARAM.MATNR = "100-890"; 
      E1MARAM.MEINS = "KG"; 
      E1MARAM.MATKL = "001"; 
      E1MARAM.GEWEI = "KG"; 
      E1MARAM.MTART = "ROH"; 
  
      E1MAKTM.MAKTX = "TestMat"; 
  
      MATMAS5.E1MARAMList.Add(E1MARAM); 
      E1MARAM.E1MAKTMList.Add(E1MAKTM); 
      MATMAS5.Send(); 
  
      Console.WriteLine("IDoc sent successfully"); Console.ReadLine(); 
      } 
      catch (Exception e1) 
      { 
         Console.WriteLine(e1.Message); Console.ReadLine(); 
      } 
}
{% endhighlight %}
</details>


In the transaction WE02 we can see the incoming IDocs, and if the status is green they are successfully processed.

![LINQToERP-IDocs_003](/img/content/LINQToERP-IDocs_003.png){:class="img-responsive" width="800px"}