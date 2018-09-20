---
layout: page
title: Beispiel
description: Beispiel
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-server-beispiel
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis ZAddServer** 

Im folgenden Beispiel wollen wir eine einfache Anforderung entwerfen. Ein ABAP-Programm soll zwei Zahlen addieren. Die beiden Input-Parameter NUMBER1 und NUMBER2 werden zum Ergebnis RES addiert.

Der folgende Code bildet zunächst ein *RFCServer*-Objekt, das sich unter Angabe des SAP-Hostes, des Gatewayservices und der Programm-ID am SAP-Gateway registriert. Voraussetzung ist, dass die Programm-ID als registrierbare Destination im SAP hinterlegt ist (siehe auch [RFC-Destinationen pflegen]()).

Bevor der Server mittels *Start* gestartet wird, wird die dem SAP angebotene Funktion registriert und zwar mittels *.RegisteredFunctions.Add*. Ein einzelnes RFCServerFunction-Objekt repräsentiert eine einzelne aufrufbare Funktion. Selbstverständlich kann ein Server-Objekt beliebig viele unterschiedliche Funktionen zur Verfügung stellen.

Die Im- und Export-Parameter werden genauso definiert, wie bei einer Client-Funktion.

Das RFCServer-Objekt bietet das Ereignis *IncomingCall*. Es wird ausgelöst, wenn ein eingehender Funktionsaufruf abgearbeitet werden soll. Unter C# muss dies mit einer separaten Code-Zeile erledigt werden. In VB.net geht das etwas einfacher durch die Ergänzung von WithEvents in der Deklaration. Die Funktion, die gerade aufgerufen wird, wird unter Angabe des *RFCServerFunction*-Objekts an das Ereignis zur Abarbeitung übergeben.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnect; 
  
static void Main(string[] args) 
{ 
   RFCServer s = new RFCServer();
   s.GatewayHost = "hamlet"; 
   s.GatewayService = "sapgw11"; 
   s.ProgramID = "ERPTEST"; 
   s.IncomingCall+=new ERPConnect.RFCServer.OnIncomingCall(s_IncomingCall); 
   RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD"); 
   f.Imports.Add("NUMBER1",RFCTYPE.INT); 
   f.Imports.Add("NUMBER2",RFCTYPE.INT); 
   f.Exports.Add("RES",RFCTYPE.INT); 
  
   s.Start(); 
  
   Console.Write( "Server is running. Press any key to exit."); 
   Console.ReadLine(); 
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Imports ERPConnect 
  
Module Module1 
   Dim WithEvents s As New RFCServer 
  
   Sub Main() 
      ' define server object 
      s.GatewayHost = "hamlet" 
      s.GatewayService = "sapgw11" 
      s.ProgramID = "ERPTEST" 
  
      ' deifne regsitered function 
      Dim f As RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD") 
      f.Imports.Add("NUMBER1", RFCTYPE.INT) 
      f.Imports.Add("NUMBER2", RFCTYPE.INT) 
      f.Exports.Add("RES", RFCTYPE.INT) 
        
      ' start server s.Start() 
  
      Console.Write( _ "Server is started. Please press any key to stop.") 
      Console.ReadLine() 
   End Sub
{% endhighlight %}
</details>

Nachfolgend sehen Sie noch die Funktion, die bei jedem eingehenden Aufruf abgearbeitet wird. Die Import-Parameter sind diejenigen, die vom SAP-System kommen. Die Export-Parameter diejenigen, die zurück ans SAP-System gehen.

**Sie finden den Code dieses Beispiels im Installationsverzeichnis im Verzeichnis ZCalculateServer**

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction) 
{ 
   if (CalledFunction.FunctionName=="Z_ADD") 
   { 
      Int32 i1 = (Int32)CalledFunction.Imports["NUMBER1"].ParamValue; 
      Int32 i2 = (Int32)CalledFunction.Imports["NUMBER2"].ParamValue; 
      Int32 erg = i1 + i2; 
      CalledFunction.Exports["RES"].ParamValue = erg; 
      Console.WriteLine("Incoming Call"); 
   } 
   Else 
      throw new ERPConnect.ERPException("Function unknown"); 
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub s_IncomingCall( ByVal Sender As _
   ERPConnect.RFCServer, _ 
   ByVal CalledFunction As ERPConnect.RFCServerFunction) _ 
   Handles s.IncomingCall 
  
      Dim i1 As Int32 
      i1 = CalledFunction.Imports("NUMBER1").ParamValue 
      Dim i2 As Int32 
      i2 = CalledFunction.Imports("NUMBER2").ParamValue 
      Dim res As Int32 
      res = i1 + i2 
      CalledFunction.Exports("RES").ParamValue = res 
      Console.WriteLine("Incoming Call") 
End Sub
{% endhighlight %}
</details>

Um unser Beispiel zu vervollständigen, sehen Sie nachfolgend ein Stück ABAP-Code, der die Funktion Z_ADD in einer entfernten RFC-Destination (nämlich genau in unserem Programm) aufruft.

Das Programm übergibt die beiden Zahlen 26 und 25. Das Ergebnis 51 wird von unserem Programm oben berechnet und zurückgegeben.


<details>
<summary>[ABAP]</summary>
{% highlight csharp %}
REPORT z_add_test 
. 
  	
DATA result TYPE i.
CALL FUNCTION 'Z_ADD' DESTINATION 'ERPTEST' 
   EXPORTING 
      number1 = 26 
      number2 = 25 
   IMPORTING 
      res = result. 
   WRITE: / 'Result: ', result.
{% endhighlight %}
</details>

Das Bild zeigt die Ausgabe des Ergebnisses.

![RFCServer-Console](/img/content/RFCServer-Console.png){:class="img-responsive"}

**Unicode**

Falls die RFC-Verbindung (RFC Destination) in der SAP-Transaktion SM59 auf Unicode eingestellt ist, muss die Eigenschaft IsUnicode des *RFCServer*-Objekts auf True gesetzt werden. 