---
ref: ec-calling-bapis-and-function-modules-04
layout: page
title: ERPConnect und SOAP über HTTP
description: ERPConnect und SOAP über HTTP
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=soap-ueber-http
---

Warnung: Das SOAP-Protokoll ist obsolete in ERPConnect ab Version 4.25.0 (Mai 2015). 

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis SOAPGetCustomerDetail** 

Bei allen Beispielen der vergangenen Seiten haben wir RFC als Protokoll genutzt, um mit dem SAP-System zu kommunizieren. Es gibt ab Release 6.20 aber auch eine andere Möglichkeit, nämlich das XML-basierende SOAP/HTTP-Protokoll. Bitte werfen Sie zu diesem Thema auch einen Blick in das AdministrationsAbschnitt. Es zeigt, wie die erforderlichen Services im SAP-System aktiviert und administriert werden.

Das folgende Beispiel zeigt eine einfache Client-Kommunikation analog zu den anderen TeilAbschnittn. Bitte beachten Sie die Programmzeilen, die gelb markiert sind. Die Eigenschaft Protocol des *R3Connection Objekts* wird von *RFC* (Standard) auf *HttpSoap* gestellt. Außerdem ist die http-URL zum SAP-System anzugeben. Der Rest sollte soweit bekannt sein.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)  
{ 
   using(ERPConnect.R3Connection con = new ERPConnect.R3Connection())
    {
    
       // Define protocol logon data  
       con.Protocol = ERPConnect.ClientProtocol.HttpSoap;  
       con.UserName = "RFCTestUser";  
       con.Password = "pass01";  
       con.Language = "DE";  
       con.Client = "800";  
    
       // Define URL of SAP Web Application Server  
       con.HttpUrl = "http://hamlet:8011/sap/bc/soap/rfc";  
       con.Open();  
    
       // Create function object and define import parameters  
       RFCFunction f = con.CreateFunction("BAPI_CUSTOMER_GETDETAIL");  
       f.Exports["CUSTOMERNO"].ParamValue = textBox1.Text;  
       // Sales Organisation  
       f.Exports["PI_SALESORG"].ParamValue = "1000";  
       // Distribution Channel  
       f.Exports["PI_DISTR_CHAN"].ParamValue = "10";  
       // Division  
       f.Exports["PI_DIVISION"].ParamValue = "10";  
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
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, _ 
   ByVal e As System.EventArgs) Handles Button1.Click  
       
    Using con As New ERPConnect.R3Connection  
       ' Define protocol logon data  
       con.Protocol = ERPConnect.ClientProtocol.HttpSoap  
       con.UserName = "RFCTestUser" 
       con.Password = "pass01" 
       con.Language = "DE" 
       con.Client = "401" 
       
       ' Define URL of SAP Web Application Server  
       con.HttpUrl = "http://hamlet:8011/sap/bc/soap/rfc" 
       con.Open()  
       
       ' Create function object and define import parameters  
       Dim f As RFCFunction = _  
          con.CreateFunction("BAPI_CUSTOMER_GETDETAIL")  
       f.Exports("CUSTOMERNO").ParamValue = TextBox1.Text  
       ' Sales Organisation  
       f.Exports("PI_SALESORG").ParamValue = "1000" 
       ' Distribution Channel  
       f.Exports("PI_DISTR_CHAN").ParamValue = "10" 
       ' Division  
       f.Exports("PI_DIVISION").ParamValue = "10" 
       f.Execute()  
    
       ' Process return structure  
       Dim struc As RFCStructure = _  
          f.Imports("PE_ADDRESS").ToStructure()  
    
       textBox2.Text = struc("FIRST_NAME").ToString()  
       textBox3.Text = struc("NAME").ToString()  
       textBox4.Text = struc("STREET").ToString()  
       textBox5.Text = struc("POSTL_CODE").ToString()  
       textBox6.Text = struc("CITY").ToString()  
    End Using
End Sub
{% endhighlight %}
</details>

Nachfolgend sehen Sie das Beispielprogramm in Aktion.

Falls zwischen Ihrem Client-Programm und dem SAP eine Firewall oder ein Proxy-Server liegt, sieht das ERPConnect auch vor. Wie die folgenden Zeilen zeigen, können URL, Benutzername und Passwort des Proxys gesetzt werden.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
con.HttpProxy = "http://proxy.theobald-software.com:8080"; 
con.HttpProxyPassword = "dummy"; 
con.HttpProxyUserName = "TestUser";
{% endhighlight %}
</details>

![Using-ERPConnect-With-SOAP](/img/content/Using-ERPConnect-With-SOAP.png){:class="img-responsive"}