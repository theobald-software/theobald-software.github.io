---
ref: ec-receiving-and-sending-idocs-02
layout: page
title: Receiving IDocs
description: Example- Receiving an IDoc
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=example-receiving-an-idoc
progressstate: 3

---

**The sample code is located in the ERPConnect installation directory in the SimpleIdocServer directory**

 
The following example shows how to receive a MATMAS IDoc. If you want to learn more about submitting test IDoc from the SAP system, please refer to chapter [Setting Up an Environment for Sending Test IDocs](../administration/setting-up-an-environment-for-sending-test-idocs).

As shown in another example (RFC Server) an RFC Server object is needed to accept calls from the SAP system. To receive IDocs with the RFCServer object we need to set the property CanReceiveIdocs to true.

The event IncomingIdoc is fired when an IDoc is received by ERPConnect, so you can use this event to process the IDoc object. The code shows how to initialize and start the RFC Server and how to install the event.

<details>
<summary>Click to open C# example.</summary>
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
<summary>Click to open VB example.</summary>
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

A reference to an IDoc object is transferred to the event IncomingIdoc. With the segment collection, the content of the IDoc can be analyzed.

The first step is to obtain the E2MARAM005 segment. Within this segment, several E2MAKTM001 child segments contain material descriptions. We need to read the data buffer with the ReadDataBuffer method. The description text is located at index 4 with a length of 40. You can use transaction WE60 to look up IDoc structures. All description texts will be written to the console window.

If you do not want to read the data buffer, you can load an XML Schema, please refer to chapter [XML-Support for IDoc programming](./xml-support-for-idoc-programming).

<details>
<summary>Click to open C# example.</summary>
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
<summary>Click to open VB example.</summary>
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

The screenshot below shows the sample program in action. In this case, 5 E2MAKTM001 segments were found so 5 texts are passed.  

![SAP-Receive-IDoc](/img/content/SAP-Receive-IDoc.png){:class="img-responsive" width="800px" }
