---
ref: ec-receiving-and-sending-idocs-04
layout: page
title: XMLs verwenden
description: IDocs als XML verarbeiten
product: erpconnect
parent: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=idocs-als-xml-verarbeiten
---


Die IDoc-Klassen von ERPConnect unterstützen den Einsatz von XML-Dateien für IDoc Schemas und Daten-Dateien. 

{: .box-note }
**Hinweis**: IDoc Schema-Dateien definieren wie ein IDoc aufgebaut ist, während IDoc Daten-Dateien den eigentlichen Inhalt des IDocs enthalten.

### XML-Dateien für IDocs erstellen
Erstellen Sie mit dem Theobald-Tool *IDocSchemaGenerator.exe* eine Schema-Datei, siehe [IDoc-Schema-Generator](../tools/idoc-schema-generator).<br>
Eine einfache Daten-Datei des IDoc Typs *ORDERS01* kann wie folgt aussehen:

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

### XML-Dateien laden
1. Verwenden Sie die Methode *LoadIdocSchema*, um ein IDoc-Objekt aus der Schema-Datei zu erstellen.
2. Erstellen Sie mit der Methode *CreateSegment* Segment-Objekte.
3. Laden Sie mit der Methode *LoadXMLData* die Daten des IDocs aus der Daten-Datei.

#### Beispiel-Code
Der folgende C#-Code zeigt, wie Sie Daten aus Dateien auslesen und senden.
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