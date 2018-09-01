---
layout: page
title: XML-Support for IDoc programming
description: Description about XML-Support for IDoc programming
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 4
lang: en_GB
---

**The sample code is located in the ERPConnect installation directory in the in IdocSendXML directory.**

ERPConnect offers support for both the IDoc schema and IDoc data located in XML-files.

The two screenshots below show an IDoc schema file (of the ORDERS01 type) and an IDoc data file. Both are also included in the samples directory. Please refer to chapter [IDoc-Schema-Generator]().

To create an IDoc object from the schema, we use the method LoadIdocSchema. After doing so, it is possible to create segment objects by using the method CreateSegment (as we did in the previous ORDER-Example). The example below shows how to load the IDoc data from a data file by using the method LoadXMLData.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using (R3Connection con = new R3Connection())        
    {           
    con.UserName = "erpconnect";            
    con.Password = "pass";              
    con.Language = "DE";
    con.Client = "800";             
    con.Host = "sapserver";             
    con.SystemNumber = 11; 
    con.Open(false);
          
    Idoc i = new Idoc();  
    i.Connection = con; 
    i.LoadIdocSchema(@"ORDERS01.xsd");        
    i.LoadXMLData(@"OrderIdoc.xml");
        
    i.Send();
             
    }
{% endhighlight %}
</details>

<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Using con As R3Connection = New R3Connection
  
    con.UserName = "erpconnect"
    con.Password = "pass"
    con.Language = "DE"
    con.Client = "800"
    con.Host = "sapserver"
    con.SystemNumber = 11
    con.Open(False)
  
    Dim i As Idoc = New Idoc
    i.Connection = con
    i.LoadIdocSchema("ORDERS01.xsd")
    i.LoadXMLData("OrderIdoc.xml")
  
    i.Send()

End Using
{% endhighlight %}
</details>

