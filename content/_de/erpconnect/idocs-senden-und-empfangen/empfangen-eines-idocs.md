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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Der folgende Abschnitt zeigt, wie Sie ein *MATMAS* IDoc empfangen und verarbeiten.
Um Ihr SAP-System so konfigurieren, dass es MATMAS-IDocs sendet, folgen Sie der Anleitung im Abschnitt [Einrichten einer IDoc-Testumgebung](./voraussetzungen#einrichten-einer-idoc-testumgebung).

### Über MATMAS

In diesem Beispiel enthält das empfangene IDoc u.a. Materialbeschreibungen, die in das Konsolenfenster geschrieben werden können, um den Inhalt des empfangenen IDocs zu prüfen. <br>

Der Inhalt der *IDocs* kann mit Hilfe des *E2MARAM005* Segments analysiert und ausgelesen werden.
Das *E2MARAM005* Segment enthält mehrere *E2MAKTM001*-Segmente, die jeweils einen Kurztext des Materials beinhalten.

{: .box-tip }
**Tipp**: Sie können in SAP mit der Transaktion **WE60** die Strukturen Ihrer IDocs einsehen.


### Ein MATMAX IDoc empfangen

1. Erstellen Sie ein *RFCServer* Objekt, um Aufrufe von SAP zu verarbeiten, siehe [RFC-Server](../rfc-server/rfc-server-beispiel) für weitere Informationen.
2. Um IDocs mit dem *RFCServer* zu empfangen, setzten Sie die Eigenschaft *CanReceiveIdocs* auf *True*.  
3. Wenn ein IDoc von ERPConnect empfangen wird, wird das Ereignis *IncomingIdoc* getriggert und eine Referenz auf die Objekte *RFCServer* und *IDoc* transferriert.
Nutzen Sie das Ereignis *IncomingIdoc*, um das eingehende IDoc zu verarbeiten. 
4. Lesen Sie den Datenpuffer mit der Methode `ReadDataBuffer` aus, um auf die Materialbeschreibungen in *E2MAKTM001* zuzugreifen. 
Der Text befindet sich an der Stelle 4 und ist 40 Zeichen lang.<br>
5. Geben Sie alle Texte in der Konsole aus.
6. Führen Sie das Programm aus.
7. Senden Sie das IDoc in SAP und prüfen Sie das Ergebnis. 

```csharp
using System;
using ERPConnect;
using ERPConnect.Idocs;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var server = new RFCServer();
server.Logging = true;
server.GatewayHost = "hamlet";
server.GatewayService = "sapgw11";
server.ProgramID = "ERPTEST";
server.CanReceiveIdocs = true;

server.InternalException += (_, exception) =>
{
    Console.WriteLine($"Internal error: {exception.Message}");
};

server.IncomingIdoc += (_, idoc) =>
{
    Console.WriteLine("Received Idoc " + idoc.IDOCTYP);
    IdocSegment e1maram = idoc.Segments["E2MARAM005", 0];
    for (int i = 0; i < e1maram.ChildSegments.Count; i++)
    {
        if (e1maram.ChildSegments[i].SegmentName != "E2MAKTM001")
        {
            continue;
        }

        string text = e1maram.ChildSegments[i].ReadDataBuffer(4, 40);
        Console.WriteLine($"Material text found: {text}");
    }
};

server.Start();

Console.WriteLine("Server is running. Press any key to exit.");
Console.ReadLine();

server.Stop();
```

Ausgabe:

In diesem Fall werden 5 *E2MAKTM001* Segmente gefunden und somit 5 Teste ausgegeben. <br>
![SAP-Receive-IDoc](/img/content/SAP-Receive-IDoc.png){:class="img-responsive" width="800px" }


{: .box-note }
**Hinweis**: Falls Sie die Texte nicht unter Angabe des Offsets und der Länge direkt auf den Daten-Puffer lesen möchten, können Sie den Datenpuffer alternativ über ein XML-Schema in Felder aufzulösen. 
Siehe [XML für IDocs verwenden](../idocs-senden-und-empfangen/idocs-als-xml-verarbeiten) für weitere Informationen. 

*****
#### Weiterführende Links
- [Einrichten einer IDoc-Testumgebung](./voraussetzungen#einrichten-einer-idoc-testumgebung)
- [Einrichten des Empfangs von IDocs](./voraussetzungen#einrichten-des-empfangs-von-idocs)


<!---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

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