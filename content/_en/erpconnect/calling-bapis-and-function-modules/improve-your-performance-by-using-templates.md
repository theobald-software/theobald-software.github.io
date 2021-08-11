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

### How to Use XML Templates

1. Create an XML template using the tool [FunctionTemplateGenerator.exe](../tools/function-template-generator) located in the ERPConnect directory.
2. Add the XML file to your project as a resource.
3. Load the XML file into your program as shown in the C# example code below.
4. Now you can use the FRFCFunction-object instead of using the *CreateFunction/CreateBAPI* methods.



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