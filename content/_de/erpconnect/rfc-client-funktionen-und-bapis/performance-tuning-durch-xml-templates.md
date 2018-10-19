---
ref: ec-calling-bapis-and-function-modules-05
layout: page
title: Performance-Tuning durch XML-Templates
description: Performance-Tuning durch XML-Templates
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=performance-tuning-durch-xml-templates
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis PocketGetCustomer**

Manchmal kann es sinnvoll sein, durch den Einsatz von XML-Templates die Performance Ihrer Anwendung zu verbessern. Die komplette Objekthierarchie wird dann nicht durch den Einsatz der *CreateFunction/CreateBAPI-Methoden* erzeugt, sondern aus einem XML-File geladen.

1. Erzeugen Sie ein Template mit dem Tool FunctionTemplateGenerator.exe.
2. Fügen Sie die XML-Datei als eingebettete Ressource Ihrem Projekt hinzu. 
3. Laden Sie die Objekthierarchie wie im folgenden Beispielcode gezeigt. 
4. Jetzt können Sie das RFCFunction-Objekt wie gewohnt benutzen .

<details>
<summary>[C#]</summary>
{% highlight csharp %}
[ … create and open connection … ] 
RFCFunction f = new RFCFunction("BAPI_CUSTOMER_GETDETAIL"); 
f.Connection = con; 
StreamReader reader = new StreamReader( 
   System.Reflection.Assembly.GetExecutingAssembly().
   GetManifestResourceStream 
   ("PocketGetCustomer.BAPI_CUSTOMER_GETDETAIL.xml")); 
f.LoadFromXML(reader);
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
[ … create and open connection … ] 
Dim f As New RFCFunction("BAPI_CUSTOMER_GETDETAIL") 
f.Connection = con 
  
Dim reader As New StreamReader( _
   System.Reflection.Assembly.GetExecutingAssembly(). _
   GetManifestResourceStream( _
   "PocketGetCustomer.BAPI_CUSTOMER_GETDETAIL.xml")) 
  
f.LoadFromXML(reader)
{% endhighlight %}
</details>