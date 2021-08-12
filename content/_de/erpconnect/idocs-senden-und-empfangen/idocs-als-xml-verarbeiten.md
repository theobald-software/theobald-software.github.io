---
ref: ec-receiving-and-sending-idocs-04
layout: page
title: XML für IDocs
description: IDocs als XML verarbeiten
product: erpconnect
parent: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=idocs-als-xml-verarbeiten
---

**The sample code is located in the ERPConnect installation directory in the in IdocSendXML directory**

Die IDoc-Klassen von ERPConnect bieten an etlichen Stellen Unterstützung für den Einsatz von XML. Wir unterscheiden hier Schema-Dateien, die definieren wie ein IDoc auszusehen hat, und Daten-Dateien, die den eigentlichen Inhalt enthalten.<br>
Die beiden nachfolgenden Abbildungen zeigen einen Auszug der Schema-Datei ORDERS01.xsd und der Daten-Datei OrderIdoc.xml (beide sind im Beispiel-Verzeichnis zu finden). Bitte beachten Sie auch Abschnitt IDoc-Schema-Generator.

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

Um ein IDoc-Object aus einem Schema zu erzeugen, nutzen wir die Methode LoadIdocSchema. Nun können die leeren Segmente entweder mit CreateSegment gefüllt (wie im ORDER-Beispiel), oder es kann mit Hilfe von LoadXMLData das Datenfile hinzugeladen werden. Es ist zu beachten, dass das Laden von XML-Daten nur Sinn macht, wenn die Segmente zuvor entweder mit LoadIdocSchema oder mit CreateEmptyIdoc bekannt gemacht wurden, ansonsten weiß ERPConnect nicht, an welche Stelle im Datenpuffer die Daten geschrieben werden können. Im einfachsten Fall sieht das Erzeugen und Senden eines IDocs dann wie folgt aus:

<details>
<summary>[C#]</summary>
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
<summary>[VB]</summary>
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
