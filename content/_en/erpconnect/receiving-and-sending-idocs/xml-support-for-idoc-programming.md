---
ref: ec-receiving-and-sending-idocs-04
layout: page
title: Using XML for IDocs
description: XML-Support for IDoc programming
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=xml-support-for-idoc-programming
---


ERPConnect offers support for both the IDoc schema and IDoc data located in XML-files.

The two screenshots below show an IDoc schema file (of the ORDERS01 type) and an IDoc data file. Creating an Schema is possible with the IDoc Schema Generator. Please refer to chapter [IDoc-Schema-Generator](../tools/idoc-schema-generator).

{% highlight xml %}
xml version="1.0" encoding="ISO-8859-1" ?>
- <ORDERS01>
  - <IDOC>
    - <EDI_DC40> 
         
    <TABNAM>EDI_DC40TABNAM>
         
    <IDOCTYP>ORDERS01IDOCTYP>
         
    <MESTYP>ORDERS>MESTYP>
         
    <SNDPRT>KUSNDPRT>
      EDI_DC40>
      <E1EDK01 />  
    - <E1EDK01>
         
    <MENGE>10MENGE>
    - <E1EDP10>
         
    <QUALF>002QUALF>
         
    <IDTNR>100-100IDTNR>
      E1EDP19>
{% endhighlight %}

To create an IDoc object from the schema, we use the method LoadIdocSchema. After doing so, it is possible to create segment objects by using the method CreateSegment (as we did in the previous ORDER-Example). The example below shows how to load the IDoc data from a data file by using the method LoadXMLData.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using (R3Connection con = new R3Connection("sapappserver", 00, "sapuser", "password", "EN", "800"))
          
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

