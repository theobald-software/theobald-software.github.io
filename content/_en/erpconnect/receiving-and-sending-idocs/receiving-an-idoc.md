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
progressstate: 5

---

This section shows how to receive and process a *MATMAS* IDoc.
To configure your SAP system to send *MATMAS* IDocs, see [Setting Up a Test Environment for IDocs](./prerequisites#setting-up-a-test-environment-for-idocs).

### Receiving a MATMAS IDoc

1. Create an RFC Server object to accept calls from SAP, see [RFC Server](../rfc-server/example) for more information.
2. To receive IDocs with the *RFCServer* object, set the property *CanReceiveIdocs* to true.<br>
3. When an IDoc is received by ERPConnect, the event *IncomingIdoc* is triggered and a reference to the *RFCServer* object and to the *IDoc* object is transferred. 
Use this event to process the IDoc object as shown in the code below. <br>
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

### Processing a Received IDoc

In this example the received IDoc contains material descriptions that can be written into the console window to check the contents of the IDoc. <br> 
The IDoc is analyzed using the *E2MARAM005* segment. 
Within this segment, several *E2MAKTM001* child segments contain material descriptions.

{: .box-note }
**Note**: You can use the transaction **WE60** to look up the structures of IDocs in SAP.

1. Read the data buffer with the *ReadDataBuffer* method to access the description texts in the child segment *E2MAKTM001*. 
The description text is located at index 4 with a length of 40. <br>
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
2. Write the description texts into the console window.
3. Run the program, send an IDoc in SAP and check the result. 
In this case, 5 *E2MAKTM001* segments were found so 5 texts are passed. <br>
![SAP-Receive-IDoc](/img/content/SAP-Receive-IDoc.png){:class="img-responsive" width="800px" }


{: .box-note }
**Note**: If you do not want to read the data buffer with offset and length of the texts, you can load an XML Schema instead, see [Using XMLs for IDocs](./xml-support-for-idoc-programming).

*****
#### Related Links
- [Setting Up a Test Environment for IDocs](./prerequisites#set-up-a-test-environment-for-idocs)
- [Setting Up Receiving IDocs](./prerequisites#setting-up-receiving-idocs)

<!---
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

-->