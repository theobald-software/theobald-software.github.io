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
progessstate: 5
---

Der folgende Abschnitt zeigt, wie Sie ein *MATMAS* IDoc empfangen und verarbeiten.
Um Ihr SAP-System so konfigurieren, dass es MATMAS-IDocs sendet, folgen Sie der Anleitung im Abschnitt [Einrichten einer IDoc-Testumgebung](./voraussetzungen#einrichten-einer-idoc-testumgebung).

### Ein MATMAX IDoc empfangen

1. Erstellen Sie ein *RFCServer* Objekt, um Aufrufe von SAP zu verarbeiten, siehe [RFC-Server](rfc-server/rfc-server-beispiel) für weitere Informationen.
2. Um IDocs mit dem *RFCServer* zu empfangen, setzten Sie die Eigenschaft *CanReceiveIdocs* auf True.  
3. Wenn ein IDoc von ERPConnect empfangen wird, wird das Ereignis *IncomingIdoc* getriggert und eine Referenz auf die Objekte *RFCServer* und *IDoc* transferriert.
Nutzen Sie das Ereignis *IncomingIdoc*, um das eingehende IDoc zu verarbeiten. 
```csharp
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
```

### Ein eingehendes IDoc verarbeiten

In diesem Beispiel enthält das empfangene IDoc u.a. Materialbeschreibungen, die in das Konsolenfenster geschrieben werden können, um den Inhalt des empfangenen IDocs zu prüfen. <br>
Der Inhalt der *IDocs* kann mit Hilfe des *E2MARAM005* Segments analysiert und ausgelesen werden.
Das *E2MARAM005* Segment enthält mehrere *E2MAKTM001*-Segmente, die jeweils einen Kurztext des Materials beinhalten.

{: .box-note }
**Hinweis**: Sie können in SAP mit der Transaktion **WE60** die Strukturen Ihrer IDocs einsehen.

1. Lesen Sie den Datenpuffer mit der Methode *ReadDataBuffer* aus, um auf die Materialbeschreibungen in *E2MAKTM001* zuzugreifen. 
Der Text befindet sich an der Stelle 4 und ist 40 Zeichen lang.<br><br>
```csharp
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
```
2. Geben Sie alle Texte in der Konsole aus.
3. Führen Sie das Programm aus, senden Sie das IDoc in SAP und prüfen Sie das Ergebnis. 
In diesem Fall werden 5 *E2MAKTM001* Segmente gefunden und somit 5 Teste ausgegeben. <br>
![SAP-Receive-IDoc](/img/content/SAP-Receive-IDoc.png){:class="img-responsive" width="800px" }

{: .box-note }
**Hinweis**: Falls Sie die Texte nicht unter Angabe des Offsets und der Länge direkt auf den Daten-Puffer lesen möchten, können Sie den Datenpuffer alternativ über ein XML-Schema in Felder aufzulösen. 
Siehe [IDocs als XML](../idocs-senden-und-empfangen/idocs-als-xml-verarbeiten) für weitere Informationen. 

*****
#### Weiterführende Links
- [Einrichten einer IDoc-Testumgebung](./voraussetzungen#einrichten-einer-idoc-testumgebung)
- [Einrichten des Empfangs von IDocs](./voraussetzungen#einrichten-des-empfangs-von-idocs)


<!---

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
-->