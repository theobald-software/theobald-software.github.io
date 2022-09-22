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

Der folgende Abschnitt zeigt, wie Sie ein Konsolenprogramm schreiben, das ein IDoc vom Typ *STATUS* sendet.
 
Der *STATUS*-Nachrichtentyp wird verwendet, um den Status eines anderen ausgehenden IDocs anzupassen, z.B. 
wenn ein Subsystem IDocs empfängt und den Empfang durch eine Status-Anpassung quittiert. 
Das *STATUS*-IDoc enthält nur einen Datensatz und ist somit sehr einfach aufgebaut. 

{: .box-note }
**Hinweis**: Stellen Sie sicher, dass Ihr SAP-System konfiguriert ist, IDocs zu empfangen, siehe [Einrichten des Empfangs von IDocs](./voraussetzungen#einrichten-des-empfangs-von-idocs).

### Ein STATUS IDoc senden

1. Bauen Sie mit der *R3Connection*-Klasse eine Verbindung zum R/3 System auf.
2. Fragen Sie die IDoc-Nummer des zu manipulierenden IDocs ab und lesen Sie die Eingabe aus.
3. Erzeugen Sie mit der Methode *CreateIdoc* ein IDoc Objekt. 
"SYSTAT01" ist der entsprechende IDoc-Typ für den Nachrichtentyp *STATUS*. <br> <br>
	 ```csharp
     static void Main(string[] args)  
     {  
        using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
        {
			con.Open(false);  
        
			Console.WriteLine("Which IDocnumber would you like to manipulate?");  
			string IdocNo = Console.ReadLine();  
        
			Idoc i = con.CreateIdoc("SYSTAT01","");
     ```
4. Geben Sie Angaben zum Empfänger und Absender für den Kopfsatz des IDoc-Objekts ein. <br> <br>
	 ```csharp
			// Fill Message Type 
			i.MESTYP = "STATUS"; 
  
			// Fill Information about IDoc Reciever 
			i.RCVPRN = "PT4_800"; // Partner number 
			i.RCVPRT = "LS"; // Partner type 
  
			// Fill information about idoc sender 
			i.SNDPOR = "ERPCONNECT"; // Partner port 
			i.SNDPRN = "ERPCONNECT"; // Partner number 
			i.SNDPRT = "LS"; // Partner type
     ```
5. Fügen Sie die folgenden Daten Segment *E1STATS* hinzu: Zielstatus (*STATUS*), Datum und Uhrzeit (*LOGDAT*, *LOGTIM*) und die zu manipulierende IDoc-Nummer (*DOCNUM*). 
6. Senden Sie das IDoc mit der Methode *Send*. 
	 ```csharp
			// Fill the right fields in the segments 
			i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20210901";
			i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
			i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
			i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 
  
			i.Send(); 
			Console.WriteLine("IDoc sent"); 
			Console.ReadLine();
			}
	}
     ```
7. Führen Sie das Programm aus und prüfen Sie in SAP den Status des manipulierten IDocs.<br>
Der Status ist von 3 (an Subsystem übergeben) auf 12 (Versand OK) erhöht worden.<br>
![SAP-Send-IDoc-001](/img/content/SAP-Send-IDoc-001.png){:class="img-responsive" width="400px" }

****
#### Weiterführende Links
- [Sending an ORDER IDoc](https://kb.theobald-software.com/erpconnect-samples/sending-an-order-idoc)
- [Sending IDocs Synchronously](https://kb.theobald-software.com/erpconnect-general/synchronous-sending-and-status-query)
- [Eine RFC-Destination anlegen](./voraussetzungen#eine-rfc-destination-anlegen)

<!---

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
-->