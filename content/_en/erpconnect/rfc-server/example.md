---
layout: page
title: Example
description: Example
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=rfc-server-example
---

**The sample code is located in the ERPConnect directory in the ZAddServer directory**  

The example below shows a simple task. An ABAP program should add two numbers with the help of a function module. The two imports NUMBER1 and NUMBER2 are added and passed back to the calling program via the export RES.  
  
The code shows how to initialize an RFCServer object by providing the gateway host, the gateway service and the program ID to register on the SAP gateway (you may also refer to [Maintaining RFC Destinations](../administration/maintaining-rfc-destinations)).
  
After registering the RFCServer object at the SAP gateway, there is an RFCServerFunction object registered with the help of the _.RegisteredFunctions.Add_ method. The imports and exports must be handled the same way as when calling RFC functions as a client. An RFCServer object can, of course, hold more than one RFCServerFunction object.  
  
The event _IncomingCall_ is fired when an ABAP program calls the function in a foreign destination. If you use C#, you must define the event call-back with a separate line of code. If you use Visual Basic on the other hand, use the WithEvents statement. 

<details>
<summary>Click to open C# example.</summary>
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
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Imports ERPConnect 
  
Module Module1 
   Dim WithEvents s As New RFCServer 
  
   Sub Main() 
      ' define server object 
      s.GatewayHost = "hamlet" 
      s.GatewayService = "sapgw11" 
      s.ProgramID = "ERPTEST" 
  
      ' define registered function 
      Dim f As RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD") 
      f.Imports.Add("NUMBER1", RFCTYPE.INT) 
      f.Imports.Add("NUMBER2", RFCTYPE.INT) 
      f.Exports.Add("RES", RFCTYPE.INT) 
        
      ' start server s.Start() 
  
      Console.Write( _ "Server has started. Please press any key to stop.") 
      Console.ReadLine() 
   End Sub
{% endhighlight %}
</details>  
  
The following code shows how the IncomingCall event is handled. The import parameters are the ones that are passed by the calling SAP system. The export parameters are the ones that are passed back to SAP.
  
**The sample code is located in the installation directory and the ZCalculateServer directory**  
  
<details>
<summary>Click to open C# example.</summary>
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
<summary>Click to open VB example.</summary>
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
  
At the end of this example, you will see the ABAP code that is used to call our .NET function in the remote destination ERPTEST. 
  
The two numbers 26 and 25 are passed, and the result 51 is passed back. The screenshot further below shows the running ABAP program.
  

<details>
<summary>Click to open ABAP example.</summary>
{% highlight abap %}
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

![RFCServer-Console](/img/content/RFCServer-Console.png){:class="img-responsive" height="200px" width="200px"}  
  
**Unicode**  
If the RFC Destination is set to Unicode (SAP transaction code SM59), the property _IsUnicode of the RFCServer_ object must be set to true.