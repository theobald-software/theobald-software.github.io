---
ref: ec-calling-bapis-and-function-modules-06
layout: page
title: Non-RFC enabled modules
description: Non-RFC enabled modules
product: erpconnect
parent: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=non-rfc-enabled-modules
---

**This functionality is obsolete and will not be supported by ERPConnect starting by version 4.5.**

In each of the examples previously discussed, we referred to functional modules or BAPIs with the "RFC-enabled" attribute. But that's only one subset of all the modules available in an SAP system. With ERPConnect, it is also possible to execute modules that are not explicitly labeled as RFC enabled. For this purpose, a sort of wrapper is internally built around the module, executing it indirectly instead of directly. As a developer though, you'll hardly notice this. The only thing you have to do is to set the attribute UseRFCWraper of the RFCFunction object to true.

The following example shows the call of the module READ_TEXT. It is used by ABAP programs to read text objects (such as e.g. a sales memo to a customer). By default it is not RFC enabled, yet it still works with ERPConnect.

Important!!! Unfortunately, the tactic with the wrapper only works if the modification flag in the SAP system is set (see transaction SE03, administration). To find out if this flag is set, the attribute IsEditable of the R3Connection object can be queried, as shown in the following.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
static void Main(string[] args)
{
    using(R3Connection con = new R3Connection("hamlet",11,"RFCTestUser","pass01","EN","800"))
    {
        con.Open();
           
        // check if system is editable
        if (con.IsSystemEditable())
            Console.WriteLine("Dynamic ABAP can be executed");
        else
            Console.WriteLine("Sorry, it is forbidden " +
                "to execute dynamic ABAP.");
           
        // Create function object an fill parameters
        RFCFunction readtext = con.CreateFunction("READ_TEXT");
        readtext.Exports["CLIENT"].ParamValue = "800";
        readtext.Exports["ID"].ParamValue = "0001";
        readtext.Exports["LANGUAGE"].ParamValue = "EN";
        readtext.Exports["NAME"].ParamValue = "0000006001";
        readtext.Exports["OBJECT"].ParamValue = "KNA1";
           
        // enable RFC wrapper
        readtext.UseRFCWrapper = true;
           
        readtext.Execute();
           
        // process result lines
        foreach(RFCStructure line in readtext.Tables["LINES"].Rows)
        Console.WriteLine(line["TDLINE"].ToString());
        Console.ReadLine();
    }
}
{% endhighlight %}
</details>

![Dynamic-Abap](/img/content/Dynamic-Abap.png){:class="img-responsive" } 