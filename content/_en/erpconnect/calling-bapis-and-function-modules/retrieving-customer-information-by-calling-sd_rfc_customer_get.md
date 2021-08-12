---
ref: ec-calling-bapis-and-function-modules-02
layout: page
title: Retrieving Customer Information by calling SD_RFC_CUSTOMER_GET
description: Retrieving Customer Information by calling SD_RFC_CUSTOMER_GET
product: erpconnect
parent: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=retrieving-customer-information-by-calling-sd-rfc-customer-get
---

SD_RFC_CUSTOMER_GET is an RFC-enabled function module that should be present in every SAP system. It is designed for demonstration purposes. As an import parameter, a customer number should be transferred to the module and the customer's address is sent back to the calling program contained in a table parameter.
The code below shows how to log on to the SAP system. An RFCFunction object is created by the method CreateFunction.
The import parameter KUNNR is filled with the string given by the user. Execute() executes the function module.

After the call, the program loops through the table CUSTOMER_T and writes some columns to the console.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
static void Main(string[] args) 
{ 
    using(R3Connection con = new R3Connection("sapappserver", 00, "sapuser", "password", "EN", "800"))
    {
        con.Open(false); 
        // Create a function object 
        RFCFunction func = con.CreateFunction("SD_RFC_CUSTOMER_GET"); 
           
        Console.WriteLine("Please enter cutomer number ..."); 
        Console.WriteLine("and do not forget the leading zeros ..."); 
       
        // fill the export parameter 
        StringBuilder CustomerNo = new StringBuilder(Console.ReadLine()); 
        func.Exports["KUNNR"].ParamValue = CustomerNo.ToString(); 
        try
        { 
            func.Execute(); 
        } 
        catch (ERPException e) 
        { 
            Console.WriteLine(e.Message); 
            Console.ReadLine(); 
            return; 
        } 
        // Output the result of the function module 
        Console.WriteLine("Name of customer:"); 
        Console.WriteLine(func.Tables["CUSTOMER_T"].Rows[0, "NAME1"]); 
        Console.ReadLine(); 
    }
}
{% endhighlight %}
</details>


<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Sub Main() 
    Using con As New R3Connection("sapappserver", 00, "sapuser", "password", "EN", "800") 
        con.Open(False) 
       
        ' Create a function object Dim func = con.CreateFunction("SD_RFC_CUSTOMER_GET") 
        Console.WriteLine("Please enter cutomer number ...") 
        Console.WriteLine("and do not forget the leading zeros ...") 
       
        ' fill the export parameter 
        Dim CustomerNo As New StringBuilder(Console.ReadLine())
       
        func.Exports("KUNNR").ParamValue = CustomerNo.ToString() 
        Try
            func.Execute() 
        Catch e As ERPException 
            Console.WriteLine(e.Message) 
            Console.ReadLine() 
            Return
        End Try
        ' Output the result of the function module 
        Console.WriteLine("Name of customer:") 
        Console.WriteLine(func.Tables("CUSTOMER_T").Rows(0, "NAME1")) 
        Console.ReadLine() 
    End Using
End Sub
{% endhighlight %}
</details>  



![console](/img/content/Calling-Client-BAPI-From-Console.png){:class="img-responsive"}  
  
