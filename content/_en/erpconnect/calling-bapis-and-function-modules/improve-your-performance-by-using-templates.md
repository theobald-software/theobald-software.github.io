---
ref: ec-calling-bapis-and-function-modules-05
layout: page
title: Using Templates
description: Improve your Performance by Using Templates
product: erpconnect
parent: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=improve-your-performance-by-using-templates
---

Using XML templates can improve the performance of your application by loading the complete object hierarchy from an XML file. 

### How to Create an XML Template

The ERPConnect installation package includes the tool *Function-Template-Generator* that generates reusable XML templates for Function Modules and BAPIs.

1. To start the *Function-Template-Generator*, run the *FunctionTemplateGenerator.exe* in the ERPConnect directory `C:\Program Files\ERPConnect`.
2. Enter the name of a Function Module or BAPI that you want to use as a template and click **[Generate XML Template]**. <br>
![Tools-003](/img/content/Tools-003.png){:class="img-responsive" }
3. The window "SAP Login" opens. Enter your SAP credentials and click **[OK]**.
4. Save the XML file to your local hard drive. 

### How to Use XML Templates

1. Create an XML template using the tool *FunctionTemplateGenerator.exe* located in the ERPConnect directory.
2. Add the XML file to your project as a resource.
3. Load the XML file into your program as shown in the C# example code below.<br>
Now you can use the FRFCFunction-object instead of using the *CreateFunction/CreateBAPI* methods.



<details>
<summary>Click to open C# example.</summary>
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
<summary>Click to open VB example.</summary>
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