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
The following section shows how to use the IDoc component of the *LINQ to ERP* toolbox.<br>
With the IDoc component you can send IDocs to SAP. The segments of IDocs can be used in the SAP context.


### Look Up an IDoc
1. Drag&Drop the IDoc component into the *LINQ to ERP* DataContext. A search window opens. 
2. Enter the name of the IDOC to be sent to SAP in the field **IDoc** (1). Use wildcards (*) if needed. <br>
![LINQToERP-IDocs_001](/img/content/LINQToERP-IDocs_001.png){:class="img-responsive" }
3. Click **[Search]** (binoculars icon) (2). Search results appear in the preview window.
4. Select an IDoc (3) and click **[OK]** (4).


### Edit an IDoc
After an IDoc has been loaded, the window "LINQ to ERP IDocs" opens. <br>
Use it to filter and rename the content of an IDoc:

1. Select a segment you want to edit from the treeview (5). The fields of the segment are displayed in the lower area of the window.<br>
![LINQToERP-IDocs_002](/img/content/LINQToERP-IDocs_002.png){:class="img-responsive" }
2. Uncheck unused fields or rename fields using the **Member** column (6).
3. Optional: Rename the class name and collection names of the segment (7).
4. Use the checkbox **Selected** to deactivate segments that are not used later in the code (8).
Deactivated segments are displayed with *italic* font in the treeview. 
5. Click **[OK]** to confirm your selection. The window "LINQ to ERP IDocs" closes and a corresponding icon is created in the Designer.

To edit the IDoc, double-click the IDoc icon in the Designer.

### How to Use the Class in your Code
Save the .erp file that contains the extraction component to trigger the proxy classes code generation in the background. <br>

In this example the IDoc component generates the following objects:
- an IDoc object (MATMAS05) including important header information (e.g. sender and receiver information e.g., RCVPRN or SNDPRN).
- the two Segments E1MARAM (Basicdata) and E1MAKTM (Shorttext) with the required fields already filled. They are also added to the IDoc.

The IDoc is sent with *Send()*.<br>
The following code shows how to use the generated classes:

<details>
<summary>Click here to open a C# example.</summary>
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

#### Check the result in SAP

The SAP transaction *WE02* shows incoming IDocs. 
If the status is green, they are successfully processed.

![LINQToERP-IDocs_003](/img/content/LINQToERP-IDocs_003.png){:class="img-responsive" }