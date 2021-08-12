---
ref: ec-receiving-and-sending-idocs-02
layout: page
title: IDocs empfangen
description: Beispiel für das Empfangen eines IDocs
product: erpconnect
parent: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=beispiel-fuer-das-empfangen-eines-idocs
progessstate: 3
---

Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis SimpleIdocServer 

Das folgende Beispiel zeigt den Empfang und die Verarbeitung eines MATMAS-IDocs. Wie Sie ihr SAP-System so konfigurieren, dass es MATMAS-IDocs sendet, erfahren Sie im Abschnitt [Einrichten einer IDoc-Testumgebung](../administration/einrichten-einer-idoc-testumgebung).

Bei einem IDoc-Server handelt es sich in erster Linie um einen ganz normalen RFC-Server (siehe RFC-Server-Beispiel), nur mit dem Unterschied, dass die Eigenschaft *CanReceiveIdocs* auf true gesetzt werden muss. Darüber hinaus muss das Ereignis *IncomingIdoc* abgefangen werden. Der folgende Code zeigt die Initialisierungsarbeiten innerhalb der Main-Prozedur bis hin zum Starten des Servers.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args) 
{ 
   // define server object and start 
   RFCServer s = new RFCServer(); 
   s.Logging = true; 
   s.GatewayHost = "hamlet"; 
   s.GatewayService = "sapgw11"; 
   s.ProgramID = "ERPTEST"; 
   s.CanReceiveIdocs = true; 
   s.IncomingIdoc+= new ERPConnect.RFCServer.OnIncomingIdoc(s_IncomingIdoc); 
   s.InternalException+= new ERPConnect.RFCServer.OnInternalException (s_InternalException); 
   s.Start(); 
  
   Console.WriteLine("Server is running. Press any key to exit."); 
   Console.ReadLine(); 
   s.Stop(); 
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Dim WithEvents s As RFCServer = New RFCServer 
  
Sub Main() 
   ' define server object and start 
   s.GatewayHost = "hamlet" 
   s.GatewayService = "sapgw11" 
   s.ProgramID = "ERPCONNECT" 
   s.CanReceiveIdocs = True 
   s.Start() 
  
   Console.WriteLine( _ "Server is running. Press any key to exit.") 
   Console.ReadLine() 
   s.Stop() 
End Sub
{% endhighlight %}
</details>

Tritt das Ereignis *IncomingIdoc* auf, wird eine Referenz auf das *RFCServer*-Objekt sowie ein *IDoc*-Objekt übergeben. Mit Hilfe der Segment-Collection kann nun der Inhalt der *IDocs* analysiert und ausgelesen werden. Im folgenden Fall besorgen wir uns zunächst das E2MARAM005-Segment. Es enthält beliebig viele E2MAKTM001-Segmente, die wiederum jeweils einen Kurztext des Materials in unterschiedlichen Sprachen beinhalten.

Mit Hilfe von *ReadDataBuffer* kann der Datenpuffer des Segments ausgelesen werden. Der eigentliche Text befindet sich an der Stelle 4 und ist 40 Zeichen lang (nachzulesen in der *IDoc*-Doku, z.B. Transaktion WE60). Alle Texte werden auf der Console ausgegeben.
Falls Sie nicht direkt auf den Daten-Puffer lesen möchten (unter Angabe des Offsets und der Länge) gibt es auch die Möglichkeit, über ein XML-Schema den Daten-Puffer in Felder aufzulösen. Mehr dazu im Abschnitt [IDocs als XML](../idocs-senden-und-empfangen/idocs-als-xml-verarbeiten) verarbeiten. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private static void s_IncomingIdoc(RFCServer Sender, Idoc idoc) 
{ 
   Console.WriteLine("Received Idoc " + idoc.IDOCTYP); 
   IdocSegment e2maram = idoc.Segments["E2MARAM005",0]; 
   for (int i=0; i < e2maram.ChildSegments.Count;i++) 
   { 
      if (e2maram.ChildSegments[i].SegmentName == "E2MAKTM001") 
      { 
         Console.WriteLine("Materialtext found: " + 
            e1maram.ChildSegments[i].ReadDataBuffer(4,40)); 
      } 
   } 
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub s_IncomingIdoc(ByVal Sender As _ 
   ERPConnect.RFCServer, _ 
   ByVal idoc As ERPConnect.Idocs.Idoc) Handles s.IncomingIdoc 
  
   Console.WriteLine("Received Idoc " + idoc.IDOCTYP) 
   Dim e2maram As IdocSegment = idoc.Segments("E2MARAM005", 0) 
   Dim i As Integer For i = 0 To e2maram.ChildSegments.Count - 1 
      If e2maram.ChildSegments(i).SegmentName = "E2MAKTM001" Then 
         Console.WriteLine("Materialtext found: " & _ 
         e2maram.ChildSegments(i).ReadDataBuffer(4, 40)) 
      End If 
   Next i 
End Sub
{% endhighlight %}
</details>

Der nachfolgende Screenshot zeigt das Beispielprogramm in Aktion. In diesem Fall werden die Texte aus insgesamt 7 Sprachen im IDoc übergeben. Daraus ergeben sich auch 7 E2MAKTM001-Segmente. 

![SAP-Receive-IDoc](/img/content/SAP-Receive-IDoc.png){:class="img-responsive"}
