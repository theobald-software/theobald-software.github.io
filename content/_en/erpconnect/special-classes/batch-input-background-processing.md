---
ref: ec-special-classes-04
layout: page
title: Batch Return Class
description: Batch Input Background Processing
product: erpconnect
parent: special-classes
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=batch-input-background-processing
---

**The sample code is located in the ERPConnect installation directory in the BatchInputCreatePurchaseOrder directory** 

 

The following example shows how to create a purchase order by using Batch Input techniques in background processing. 
For this purpose, we use the TransactionRecorder to generate C# or VB code as explained in Chapter 10.1 TransactionRecorder. 
The transaction for creating a purchase order is ME21.

Please also note the end of the code where return messages of the Batch Input transaction are processed. 
The code loops over the Returns collection to inspect the BatchReturn objects. 


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using (ERPConnect.R3Connection con = new ERPConnect.R3Connection())
           {
               con.UserName = "erpconnect";
               con.Password = "pass";
               con.Language = "DE";
               con.Client = "800";
               con.Host = "sapserver";
               con.SystemNumber = 11;
   
               con.Open(false);
   
               Transaction trans = new Transaction();
   
               trans.Connection = con;
               trans.TCode = "ME21";
   
               //Begin a new Dynpro
               trans.AddStepSetNewDynpro("SAPMM06E", "0100");
               trans.AddStepSetCursor("EKKO-EKGRP");
               trans.AddStepSetOKCode("/00"); // Enter
               trans.AddStepSetField("EKKO-LIFNR", "1070"); // Vendor
               trans.AddStepSetField("RM06E-BSART", "NB"); // Order Type
               trans.AddStepSetField("RM06E-BEDAT", "01.01.2006"); //Purch.Date
               trans.AddStepSetField("EKKO-EKORG", "1000"); // Purchase Org
               trans.AddStepSetField("EKKO-EKGRP", "010"); // Purchase Group
               trans.AddStepSetField("RM06E-LPEIN", "T");
   
               //Begin a new Dynpro
               trans.AddStepSetNewDynpro("SAPMM06E", "0120");
               trans.AddStepSetCursor("EKPO-WERKS(01)");
               trans.AddStepSetOKCode("=BU");
               trans.AddStepSetField("EKPO-EMATN(01)", "B-7000"); // Material
               trans.AddStepSetField("EKPO-MENGE(01)", "20"); // Quantity
               trans.AddStepSetField("EKPO-WERKS(01)", "1000"); // Plant
               trans.Execute();
   
               foreach (ERPConnect.Utils.BatchReturn br in trans.Returns)
                   MessageBox.Show(br.Message);
               if (trans.Returns.Count == 0)
                   MessageBox.Show("No Messages");
           }
{% endhighlight %}
</details>

<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Using con As New ERPConnect.R3Connection
  
     con.UserName = "erpconnect"
     con.Password = "pass"
     con.Language = "DE"
     con.Client = "800"
     con.Host = "sapserver"
     con.SystemNumber = 11
  
     con.Open(False)
     Dim trans As New Transaction
 
     trans.Connection = con
     trans.TCode = "ME21"
  
     'Begin a new Dynpro
     trans.AddStepSetNewDynpro("SAPMM06E", "0100")
     trans.AddStepSetCursor("EKKO-EKGRP")
     trans.AddStepSetOKCode("/00")
     trans.AddStepSetField("EKKO-LIFNR", "1070")
     trans.AddStepSetField("RM06E-BSART", "NB")
     trans.AddStepSetField("RM06E-BEDAT", "01.01.2006")
     trans.AddStepSetField("EKKO-EKORG", "1000")
     trans.AddStepSetField("EKKO-EKGRP", "010")
     trans.AddStepSetField("RM06E-LPEIN", "T")
  
     'Begin a new Dynpro
     trans.AddStepSetNewDynpro("SAPMM06E", "0120")
     trans.AddStepSetCursor("EKPO-WERKS(01)")
     trans.AddStepSetOKCode("=BU")
     trans.AddStepSetField("EKPO-EMATN(01)", "B-7000")
     trans.AddStepSetField("EKPO-MENGE(01)", "20")
     trans.AddStepSetField("EKPO-WERKS(01)", "1000")
  
     trans.Execute()
  
     Dim br As BatchReturn
     For Each br In trans.Returns
         MessageBox.Show(br.Message)
     Next
     If trans.Returns.Count = 0 Then
         MessageBox.Show("No Messages")
     End If
 End Using
{% endhighlight %}
</details>

