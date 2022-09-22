---
ref: ec-rfc-server-02
layout: page
title: RFC-Funktionen erstellen
description: Beispiel
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-server-beispiel
---
Dieser Abschnitt zeigt, wie Sie eine RFC-Server-Funktion erstellen, registrieren und Aufrufe verarbeiten.

Im folgenden Anwendungsbeispiel wird eine RFC-Server-Funktion erstellt, die es einem ABAP-Programm ermöglicht, zwei Ziffern zu addieren.<br>
Zwei Input-Parameter (*NUMBER1* und *NUMBER2*) werden addiert und als Ergebnis (*RES*) ausgegeben.

### Registrieren einer RFC-Server-Funktion

1. Initialisieren Sie ein *RFCServer*-Objekt, das sich unter Angabe des SAP-Hostes, des Gatewayservices und der Programm-ID am SAP-Gateway registriert. 
Voraussetzung ist, dass die Programm-ID als registrierbare Destination im SAP hinterlegt ist, siehe [Eine RFC-Destinationen anlegen](./rfc-destinationen-pflegen).
2. Verwenden Sie die Methode *RegisteredFunctions.Add*, um ein *RFCServerFunction*-Objekt zu registrieren.
Ein *RFCServer*-Objekt kann beliebig viele Funktionen zur Verfügung stellen.
3. Fügen Sie Import und Export-Parameter hinzu. Die Parameter werden genauso definiert, wie bei einer Client-Funktion.
4. Wenn ein ABAP-Programm die Funktion aufruft, wird das Ereignis *IncomingCall* getriggert. 
Es wird ausgelöst, 
wenn ein eingehender Funktionsaufruf abgearbeitet werden soll. 
Unter C# muss die Callback-Funktion für das Ereignis mit einer separaten Code-Zeile erledigt werden. 
5. Starten Sie den Server mit *Start*.

{: .box-note }
**Hinweis**: Falls die RFC-Destination in der SAP-Transaktion **SM59** auf Unicode eingestellt ist, muss die Eigenschaft *IsUnicode* des *RFCServer*-Objekts auf True gesetzt werden. 

```csharp
using ERPConnect; 
  
static void Main(string[] args) 
{ 
   RFCServer s = new RFCServer();
   s.GatewayHost = "sap-erp-as05.example.com"; 
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
```
<!---
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
  -->
  
### Eingehende Aufrufe abarbeiten

Der folgende Beispielcode zeigt, wie das Ereignis *IncomingCall* verarbeitet wird.

```csharp
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
```
<!---
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
  -->
Die Import-Parameter werden vom SAP-System übergeben. <br>
Die Export-Parameter werde an das SAP-System zurück geschickt.

### RFC-Server-Funktionen in ABAP aufrufen

In diesem Beispiel sehen Sie ein Stück ABAP-Code, der die neue Funktion **Z_ADD** in der RFC-Destination *ERPTEST* aufruft.<br>
Das Programm übergibt die beiden Zahlen 26 und 25 und das Ergebnis 51 wird berechnet und zurückgegeben.

```abap
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
```

Der folgende Screenshot zeigt die Ausgabe der RFC-Server-Funktion im ABAP-Programm:<br>
![RFCServer-Console](/img/content/RFCServer-Console.png){:class="img-responsive"}


*****
#### Weiterführende Links
- [Transactional RFC Server](https://kb.theobald-software.com/erpconnect-samples/transactional-rfc-server)
- [RFC Server with tables](https://kb.theobald-software.com/erpconnect-samples/rfc-server-with-tables)
- [RFC Server with structures](https://kb.theobald-software.com/erpconnect-samples/rfc-server-with-structures)
- [How to calculate the length of the SAP type QUAN when setting up an RFC-Server](https://kb.theobald-software.com/erpconnect-samples/how-to-calculate-the-length-of-the-sap-type-quan--when-setting-up-an-rfc-server)
