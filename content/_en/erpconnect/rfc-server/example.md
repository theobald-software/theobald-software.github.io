---
ref: ec-rfc-server-02
layout: page
title: Example Function
description: Example
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=rfc-server-example
---

This section shows how to create a simple example function that allows ABAP programs to add numbers.<br>
The two imports *NUMBER1* and *NUMBER2* are added and passed back to the calling program via the export *RES*.  

### Registering the RFC Server Function

1. Initialize an *RFCServer* object by providing the gateway host, the gateway service and the program ID to register on the SAP gateway.
For this, the program ID must be available as a registered destination in SAP, see [Setting Up an RFC Destination](./maintaining-rfc-destinations). 
2. Use the method *RegisteredFunctions.Add* to register an *RFCServerFunction* object.
An *RFCServer* object can hold more than one *RFCServerFunction* object.  
3. Add Imports and Exports. They are handled the same way as when calling RFC functions as a client. 
4. When an ABAP program calls the function, the event *IncomingCall* is triggered. 
If you use C#, you must define the event call-back with a separate line of code.  
5. Start the server with *Start*.

{: .box-note }
**Note**: If the RFC destination is set to Unicode (SAP transaction code **SM59**), the property *IsUnicode* of the *RFCServer* object must be set to true.

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

<!---
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
  -->
  
### Handling Incoming Calls
 
The following code shows how the *IncomingCall* event is handled:

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
<!---
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
  -->
The import parameters are passed by the calling SAP system. <br>
The export parameters are passed back to SAP.<br>

### Calling RFC Server Functions in ABAP
In this example the following ABAP code is used to call the new function **Z_ADD** in the remote destination *ERPTEST*. <br>
The two numbers 26 and 25 are passed, and the result 51 is passed back. 

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

The screenshot below shows the running ABAP program:<br>
![RFCServer-Console](/img/content/RFCServer-Console.png){:class="img-responsive" height="200px" width="200px"}  
