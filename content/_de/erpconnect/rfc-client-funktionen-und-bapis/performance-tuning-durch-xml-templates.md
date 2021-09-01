---
ref: ec-calling-bapis-and-function-modules-05
layout: page
title: Templates verwenden
description: Performance-Tuning durch XML-Templates
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=performance-tuning-durch-xml-templates
---

Durch die Verwendung von XML-Templates kann die Performance Ihrer Anwendung verbessert werden.
Die komplette Objekthierarchie wird dann nicht durch den Einsatz der *CreateFunction/CreateBAPI-Methoden* erzeugt, sondern aus einem XML-File geladen.


### XML-Templates erstellen

Das von ERPConnect mitgelieferte Tool *Function-Template-Generator* generiert XML-Templates für Funktionsbausteine und BAPIs.

1. Um den *Function-Template-Generator* zu starten, führen Sie die *FunctionTemplateGenerator.exe* aus dem ERPConnect-Verzeichnis `C:\Program Files\ERPConnect` aus.
2. Geben Sie den Namen des Funktionsbausteins/BAPIs ein, den Sie als Vorlage verwenden möchten und klicken Sie auf **[Generate XML Template]**. <br>
![Tools-003](/img/content/Tools-003.png){:class="img-responsive" }
3. Das Fenster "SAP Login" öffnet sich. Geben Sie Ihre SAP Benutzerdaten ein und klicken Sie auf **[OK]**.
4. Speichern Sie die XML-Datei lokal auf Ihrer Festplatte.


### XML-Templates verwenden

1. Erzeugen Sie ein Template mit dem Tool *FunctionTemplateGenerator.exe* aus Ihrem ERPConnect Verzeichnis.
2. Fügen Sie die XML-Datei als eingebettete Ressource Ihrem Projekt hinzu. 
3. Laden Sie die Objekthierarchie wie im unten stehenden C# Beispielcode dargestellt. <br>
Danach können Sie das RFCFunction-Objekt anstatt der *CreateFunction/CreateBAPI*-Methoden verwenden.

<details>
<summary>Klicken Sie hier, um das C# Beispiel zu öffnen.</summary>
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

<!---
<details>
<summary>Klicken Sie hier, um das VB Beispiel zu öffnen.</summary>
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
  
-->