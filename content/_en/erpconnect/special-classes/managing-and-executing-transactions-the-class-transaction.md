---
ref: ec-special-classes-03
layout: page
title: Transaction Class 
description: Managing and  Executing Transactions- The Class Transaction
product: erpconnect
parent: special-classes
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=managing-and-executing-transactions-the-class-transaction
---

This section shows how to use the *Transaction* class to execute SAP transactions in the foreground as well as in a background process (Batch Input).<br>
When executing transactions in a background process, mass data can be processed and transferred to the SAP system. 
This technique is often used if no suitable BAPI exists.

### How to use SAP Transactions 

The following sample application shows how to use the *Transaction* class to directly execute an SAP transaction.<br>
In this application the user can enter a material number and the name of a plant. 
By clicking a button, the SAP GUI is launched and the transaction **MMBE** (stock overview) is executed to list the entered materials and plants. 

![Call-Transaction-002](/img/content/Call-Transaction-002.png){:class="img-responsive" width="300px" }

{: .box-tip }
**Tip**: The installation package of ERPConnect includes the *Transaction-Recorder* tool. 
This tool records transactions and implements them to code, see [Transaction-Recorder](../tools/transaction-recorder). 

The code below shows how to add batch steps with the method *AddStep*. 
When connecting to SAP it is important to set the *UseGui* property to true. 
The SAP GUI is launched using the method *Execute*.

```csharp
private void button1_Click(object sender, System.EventArgs e)
    {
    using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
        {
            Transaction transaction1 = new Transaction();
            transaction1.Connection = con;
            // Reset the batch steps
            transaction1.BatchSteps.Clear();
  
            // fill new steps
            transaction1.ExecutionMode = ERPConnect.Utils.TransactionDialogMode.ShowOnlyErrors;
            transaction1.TCode = "MMBE";
            transaction1.AddStepSetNewDynpro("RMMMBEST", "1000");
            transaction1.AddStepSetOKCode("ONLI");
            transaction1.AddStepSetCursor("MS_WERKS-LOW");
            transaction1.AddStepSetField("MS_MATNR-LOW", textBox1.Text);
            transaction1.AddStepSetField("MS_WERKS-LOW", textBox2.Text);
  
            // connect to SAP
            con.UseGui = true;
            con.Open(false);
            // Run
            transaction1.Execute();
        }
    }
```
<!---
<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
    Dim r3Connection1 As R3Connection = New R3Connection("SAPServer", 0, "SAPUser", "Password", "EN", "800")
    Dim transaction1 As Transaction = New Transaction()
    transaction1.Connection = r3Connection1
    ' Reset the batch steps
    transaction1.BatchSteps.Clear()
    ' fill new steps
    transaction1.ExecutionMode = _
       ERPConnect.Utils.TransactionDialogMode.ShowOnlyErrors
    transaction1.TCode = "MMBE"
    transaction1.AddStepSetNewDynpro("RMMMBEST", "1000")
    transaction1.AddStepSetOKCode("ONLI")
    transaction1.AddStepSetCursor("MS_WERKS-LOW")
    transaction1.AddStepSetField("MS_MATNR-LOW", "100-100")
    transaction1.AddStepSetField("MS_WERKS-LOW", "100-200")
    ' connect to SAP
  
  
    r3Connection1.UseGui = True
    r3Connection1.Open(False)
    ' Run
    transaction1.Execute()
  
End Sub
{% endhighlight %}
</details>
-->

{: .box-note }
**Note**: If you only want to execute a single transaction without adding several batch steps, simply set the property *TCode* and execute the transaction. 

The screenshot below shows the sample program in action.

![Call-Transaction-003](/img/content/Call-Transaction-003.png){:class="img-responsive"  }


### Background Processing (Batch Input)

The following sample shows how to create a purchase order using Batch Input techniques in background processing.
The transaction for creating a purchase order is **ME21**.

At the end the code loops over the *Returns* collection to check the *BatchReturn* objects that contain the return messages of the Batch Input transaction. 

```csharp
using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
    {
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
```
<!---
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

-->