---
layout: page
title: Using SOAP, HTTP and the SAP NetWeaver / Web Application Server
description: Using SOAP, HTTP and the SAP NetWeaver / Web Application Server
product: erpconnect
parent: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 4
lang: en_GB
---

**Warning:** SOAP Protocol is obsolete in ERPConnect since version 4.25.0 (Mai 2015).

All aforementioned client examples use the RFC protocol to communicate with the SAP system. In most cases, this is the best choice. But it is also possible to use the SOAP protocol and communicate with the help of HTTP. In the administration chapter you can learn how to activate and configure the SOAP/HTTP services. This technique only works on kernel release 6.20 or higher.

The following example shows how to retrieve customer details. Pay close attention to the code lines highlighted in yellow. The Protocol property is set to HttpSoap, and the property HttpURL has to be filled in with a valid URL to your SAP Web Application Server.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
    {
        using(ERPConnect.R3Connection con = new ERPConnect.R3Connection())
        {
            // Define protocol logon data
            con.Protocol = ERPConnect.ClientProtocol.HttpSoap;
            con.UserName = "RfcTestUser";
            con.Password = "pass01";
            con.Language = "EN";
            con.Client = "800";
  
            // Define URL of SAP Web Application Server
            con.HttpUrl = "http://hamlet:8011/sap/bc/soap/rfc";
  
            con.Open();
  
            // Create function object and define import parameters
            RFCFunction f = con.CreateFunction("BAPI_CUSTOMER_GETDETAIL");
            f.Exports["CUSTOMERNO"].ParamValue = textBox1.Text;
            f.Exports["PI_SALESORG"].ParamValue = "1000"; // Sales Organisation
            f.Exports["PI_DISTR_CHAN"].ParamValue = "10"; // Distribution Channel
            f.Exports["PI_DIVISION"].ParamValue = "10"; // Division
  
            f.Execute();
  
            // Process return structure
            RFCStructure struc = f.Imports["PE_ADDRESS"].ToStructure();
            textBox2.Text = struc["FIRST_NAME"].ToString();
            textBox3.Text = struc["NAME"].ToString();
            textBox4.Text = struc["STREET"].ToString();
            textBox5.Text = struc["POSTL_CODE"].ToString();
            textBox6.Text = struc["CITY"].ToString();
        }
    }

{% endhighlight %}
</details>

<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
        Using con As New ERPConnect.R3Connection
   
            ' Define protocol logon data
            con.Protocol = ERPConnect.ClientProtocol.HttpSoap
            con.UserName = "RFCTestUser"
            con.Password = "pass01"
            con.Language = "EN"
            con.Client = "800"
       
            ' Define URL of SAP Web Application Server
            con.HttpUrl = "http://hamlet:8011/sap/bc/soap/rfc"
       
            con.Open()
       
            ' Create function object and define import parameters
            Dim f As RFCFunction = con.CreateFunction("BAPI_CUSTOMER_GETDETAIL")
            f.Exports("CUSTOMERNO").ParamValue = textBox1.Text
            f.Exports("PI_SALESORG").ParamValue = "1000" '/ Sales Organisation
            f.Exports("PI_DISTR_CHAN").ParamValue = "10" ' Distribution Channel
            f.Exports("PI_DIVISION").ParamValue = "10" ' Division
       
            f.Execute()
       
            ' Process return structure
            Dim struc As RFCStructure = f.Imports("PE_ADDRESS").ToStructure()
            textBox2.Text = struc("FIRST_NAME").ToString()
            textBox3.Text = struc("NAME").ToString()
            textBox4.Text = struc("STREET").ToString()
            textBox5.Text = struc("POSTL_CODE").ToString()
            textBox6.Text = struc("CITY").ToString()
        End Using
    End Sub
{% endhighlight %}
</details>

The following figure shows the sample program in action.

If you need a proxy server to connect to the SAP system, please define your proxy server and optional username and password for the proxy as shown in the code lines below.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
con.HttpProxy = "http://proxy.theobald-software.com:8080";
con.HttpProxyPassword = "dummy";
con.HttpProxyUserName = "TestUser";
{% endhighlight %}
</details>

![ERPConnect with SOAP](/img/content/Using-ERPConnect-With-SOAP.png){:class="img-responsive" height="200px" width="200px"}  