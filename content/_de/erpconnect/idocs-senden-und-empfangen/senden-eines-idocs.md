---
ref: ec-receiving-and-sending-idocs-01
layout: page
title: IDocs senden
description: Beispiel für das Senden eines IDocs
product: erpconnect
parent: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=beispiel-fuer-das-senden-eines-idocs
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis IdocSender**

Das folgende Beipiel ist ein Konsolenprogramm, das ein IDoc vom Typ STATUS sendet. Dieser IDoc-Typ ist dazu gedacht, den Status eines anderen (ausgehenden) IDocs anzupassen, z.B. wenn ein Subsystem IDocs empfängt und den Empfang durch eine Status-Anpassung quittieren möchte. Das Status-IDoc ist im Gegensatz zu anderen IDoc-Typen sehr einfach aufgebaut. Aus diesem Grund eignet es sich gut für ein Beispiel.

Zunächst wird mit Hilfe der *R3Connection*-Klasse eine Verbindung aufgebaut, die zu manipulierende IDoc-Nummer vom Benutzer abgefragt und das IDoc-Object mit Hilfe der Methode *CreateIdoc* erzeugt. Als Übergabe-Parameter erhält CreateIdoc "SYSTAT01", der IDoc-Typ

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)  
{  
using(R3Connection con = new 
	R3Connection("hamlet",11,"Theobald","pw","DE","800"))
{
   con.Open(false);  
    
   Console.WriteLine(  
      "Which IDocnumber would you like to manipulate?");  
   string IdocNo = Console.ReadLine();  
    
   Idoc i = con.CreateIdoc("SYSTAT01",""); 
    
   (...)
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Sub Main(ByVal args() As String) 
   Using con As R3Connection = New R3Connection("hamlet", _ 
      11, "Theobald", "pw", "DE", "800") 
   con.Open(False) 
  
   Console.WriteLine( _ 
      "Which Idocnumber would you like to manipulate?") 
  
   Dim IdocNo As String = Console.ReadLine() 
  
   Dim i As Idoc = con.CreateIdoc("SYSTAT01", "")
  
   (...)

     End Using
{% endhighlight %}
</details>

Jetzt muss das IDoc-Objekt i mit verschiedenen Infos im Kopfsatz versorgt werden. Dazu gehören Angaben zum Empfänger und Absender sowie der zugehörige Nachrichtentyp STATUS. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Fill Message Type 
i.MESTYP = "STATUS"; 
  
// Fill Information about IDoc Reciever 
i.RCVPRN = "PT4_800"; // Partner number 
i.RCVPRT = "LS"; // Partner type 
  
// Fill information about idoc sender 
i.SNDPOR = "ERPCONNECT"; // Partner port 
i.SNDPRN = "ERPCONNECT"; // Partner number 
i.SNDPRT = "LS"; // Partner type
  
(...)
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
' Fill Message Type 
i.MESTYP = "STATUS" 
  
' Fill Information about IDoc Reciever 
i.RCVPRN = "PT4_800" ' Partner number 
i.RCVPRT = "LS" ' Partner type 
  
' Fill information about idoc sender 
i.SNDPOR = "ERPCONNECT" ' Partner port 
i.SNDPRN = "ERPCONNECT" ' Partner number 
i.SNDPRT = "LS" ' Partner type
  
(...)
{% endhighlight %}
</details>

Jetzt müssen noch schnell die Nutzdaten gefüllt werden. Diese befinden sich im Segment E1STATS. Dazu gehören der Zielstatus (STATUS), Datum und Uhrzeit (LOGDAT, LOGTIM) und die zu manipulierende IDoc-Nummer (DOCNUM). Danach ist das IDoc bereit, mit Send abgeschickt zu werden. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Fill the right fields in the segments 
i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20060101"; 
i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 
  
i.Send(); 
Console.WriteLine("IDoc sent"); 
Console.ReadLine();
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
' Fill the right fields in the segments 
i.Segments("E1STATS", 0).Fields("LOGDAT").FieldValue = _ "20060101" 
i.Segments("E1STATS", 0).Fields("LOGTIM").FieldValue = "152301"
i.Segments("E1STATS", 0).Fields("STATUS").FieldValue = "12" 
i.Segments("E1STATS", 0).Fields("DOCNUM").FieldValue = IdocNo 
  
i.Send() 
  
Console.WriteLine("IDoc sent") 
Console.ReadLine()
{% endhighlight %}
</details>

Die beiden Abbildungen zeigen das Konsolenprogramm in Aktion, sowie die IDoc-Anzeige im SAP. Der Status ist von 3 (an Subsystem übergeben) auf 12 (Versand OK) erhöht worden. Wie Sie Ihr SAP-System für den Empfang konfigurieren, finden Sie in Abschnitt [IDoc-Empfang einrichten](../administration/idoc-empfang-einrichten).

![SAP-Send-IDoc-001](/img/content/SAP-Send-IDoc-001.png){:class="img-responsive"}
