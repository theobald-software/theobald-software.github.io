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


The class Transaction offers the possibility of executing SAP transactions in the foreground as well as in a background process. This technique is called Batch Input. By executing in a background process, you will be able to process mass data and transfer it to the SAP system. This technique is often used if no BAPI exists.

Another possibility is to jump directly to an SAP transaction from your .NET application. The example below covers this.

The user is able to enter a material number and the name of a plant. After doing so, she/he can click the button and the SAP GUI is launched with transaction MMBE (stock overview). A special tool, the TransactionRecorder, is also included in the installation package to record such transactions and implement them easily in your own program code. 

![Call-Transaction-001](/img/content/Call-Transaction-001.png){:class="img-responsive" width="400px" }

The code below shows how to add batch steps with the method AddStep. It is important to set the UseGui property to true. The SAP GUI will be launched by the method Execute.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
        {
            Transaction transaction1 = new Transaction();
            R3Connection r3Connection1 = new R3Connection("SAPServer", 00, "User", "Pass", "EN",800");
            transaction1.Connection = r3Connection1;
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
            r3Connection1.UseGui = true;
            r3Connection1.Open(false);
            // Run
            transaction1.Execute();
        }
{% endhighlight %}
</details>

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

The screenshot below shows the sample program in action.
If you only want to open the SAP GUI and execute a single transaction without adding several batch steps, it is sufficient to set the property TCode and execute. 

![Call-Transaction-002](/img/content/Call-Transaction-002.png){:class="img-responsive" width="300px" }

![Call-Transaction-003](/img/content/Call-Transaction-003.png){:class="img-responsive"  }
