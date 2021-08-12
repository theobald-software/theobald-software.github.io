---
ref: ec-calling-bapis-and-function-modules-03
layout: page
title: Retrieving Stock Quantity via BAPI
description: Retrieving Stock Quantity via BAPI
product: erpconnect
parent: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=retrieving-stock-quantity-by-calling-a-bapi
---

A so-called BAPI is a Business Object method. There are hundreds of Business Objects in an SAP system, one of which is Material. 
Material represents a single material. You can execute several methods on it, e.g. Availability. The method Availability provides the so-called ATP (stock quantity Available To Promise). 

You can use the Object Repository (transaction BAPI) to search or execute BAPIs and Business Objects.

The example below shows how to execute the BAPI Material.Availability in a Windows Forms application. 

The figure below shows the form during design time. 

![bapi-stock](/img/content/calling-client-bapi-stock-001_n.png){:class="img-responsive" height="300px" width="300px"}    

Before executing the BAPI, there are at least three import parameters to be defined (For this BAPI, other BAPIs need other parameters): the Plant (PLANT), the material number (MATERIAL) and the unit (UNIT). 

As you can see in the code below, the BAPI object is created by the CreateBapi method of the R3Connection object. The imports will be set the same way as we did when calling 'normal' function modules.

After executing this BAPI we can evaluate the return parameters. In case of an error, we have to analyze the Return structure. If no error has occurred, the AV_QTY_PLT parameter contains the stock quantity in the given unit.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void GetQuantity_Click(object sender, System.EventArgs e)
        {
            try
            {
                       R3Connection r3Connection1 = new R3Connection("hamlet", 11, "theobald", "pw", "EN", "800");
                   r3Connection1.Open(false);
                // Create a Bapi object, fill parameters and execute
                BusinessObjectMethod f =
                    r3Connection1.CreateBapi("Material","Availability");
                f.Exports["PLANT"].ParamValue = textBox1.Text;
                f.Exports["MATERIAL"].ParamValue = textBox2.Text;
                f.Exports["UNIT"].ParamValue = textBox3.Text;
                f.Execute();
   
                // Read the import structure RETURN to provide possible Messages
                RFCStructure BapiRet = f.Imports["RETURN"].ToStructure();
                textBox5.Text = BapiRet["MESSAGE"].ToString();
   
                // Fill textbox with stock quantity
                textBox4.Text = f.Imports["AV_QTY_PLT"].ToString();
            }
            catch (ERPException e1)
            { MessageBox.Show(e1.Message); }
        }
{% endhighlight %}
</details>


<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Private Sub GetQuan_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles GetQuan.Click
        Try
            Dim con As New R3Connection("host", 11, "user", "pw", "EN", "800")  
              r3Connection1.Open(False)
            ' Create a Bapi object, fill parameters and execute
            Dim f As BusinessObjectMethod = _
                     r3Connection1.CreateBapi("Material", "Availability")
            f.Exports("PLANT").ParamValue = textBox1.Text
            f.Exports("MATERIAL").ParamValue = textBox2.Text
            f.Exports("UNIT").ParamValue = textBox3.Text
            f.Execute()
   
            ' Read the import structure RETURN to provide possible Messages
            Dim BapiRet As RFCStructure = f.Imports("RETURN").ToStructure()
            textBox5.Text = BapiRet("MESSAGE").ToString()
   
            ' Fill textbox with stock quantity
            textBox4.Text = f.Imports("AV_QTY_PLT").ToString()
        Catch e1 As ERPException
            MessageBox.Show(e1.Message)
        End Try
    End Sub
{% endhighlight %}
</details>  

The figures below show the example program in action. In the first try, the user types a non-existing material number so an error message is given by the BAPI. The second figure shows a correct quantity indication.


![bapi-stock02](/img/content/calling-client-bapi-stock-002_n.png){:class="img-responsive" height="200px" width="200px"}  

![bapi-stock03](/img/content/calling-client-bapi-stock-003_n.png){:class="img-responsive" height="200px" width="200px"}  
  
