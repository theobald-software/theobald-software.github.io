---
ref: ec-receiving-and-sending-idocs-04
layout: page
title: Using XMLs
description: XML-Support for IDoc programming
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=xml-support-for-idoc-programming
---


The IDoc class of ERPConnect offers support for both the IDoc schema and IDoc data located in XML-files.

{: .box-note }
**Note**: IDoc schema files contain the structure of an IDoc while IDoc data files contain the actual content of the IDoc.

### How to Create XML Files for IDocs
 
To create an IDoc schema file, use the Theobald tool *IDocSchemaGenerator.exe*, see [IDoc-Schema-Generator](../tools/idoc-schema-generator).<br>
A simple IDoc data file that contains the content of an *ORDERS01* IDoc can look like this:

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

### How to Load XML Files
1. Use the method *LoadIdocSchema* tool to create an IDoc object from a schema file.
2. Create segment objects using *CreateSegment*. 
3. Load the IDoc data from a data file with the method *LoadXMLData*.

#### Sample Code
The following C# code shows how to load and send data from files.

```csharp
using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
{ 
    Idoc i = new Idoc();  
    i.Connection = con; 
	
    i.LoadIdocSchema(@"ORDERS01.xsd");        
    i.LoadXMLData(@"OrderIdoc.xml");
    
    i.Send();
}
```

<!---
<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Using con As ParseConnectionString = New ParseConnectionString
  
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
-->