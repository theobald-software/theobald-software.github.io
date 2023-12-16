---
ref: ec-receiving-and-sending-idocs-01
layout: page
title: Sending IDocs
description: Example- Sending an IDoc from your .Net Application
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=example-sending-an-idoc-from-your-net-application
---

There are two possible ways to create an IDoc object: 
- The `CreateIdoc` method creates an IDoc with all segments located in the segment collections. This is useful for sending simple IDocs. 
- The `CreateEmptyIdoc` method in combination with the `CreateSegment` method creates only the needed segments. 

This section shows how to write a sample console program that sends a *STATUS IDoc* using the `CreateIdoc` method.

The *STATUS* message type is used to manipulate the status of another outbound IDoc e.g., 
when a subsystem receives an IDoc and acknowledges the receive with a status change.
*STATUS* is a simple IDoc that contains only one data record.

{: .box-note }
**Note**: Make sure to configure your SAP system to receive IDocs, see [Set Up Receiving IDocs](./prerequisites#setting-up-receiving-idocs).

### Send a STATUS IDoc

Follow the steps below to send a STATUS IDoc:

1. Open a client connection to the R/3 system using the *R3Connection* class. 
2. Inquire the IDoc number of the IDoc to be manipulated and read the input.
3. Use `CreateIdoc` to instance a valid *IDoc* object. 
"SYSTAT01" is the IDoc type for the appropriate message type STATUS. 
4. Provide receiver and sender information. 
5. Fill in the following fields in segment *E1STATS*: 
	- the new status code (*STATUS*)
	- date and time (*LOGDAT*, *LOGTIM*) 
	- the number of the IDoc to be manipulated
6. Send the IDoc using the `Send`. <br> 
7. Run the program using and check the result.<br>

```csharp

using System;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open(false);
        
Console.WriteLine("Which IDoc number would you like to manipulate?");  
string IdocNo = Console.ReadLine(); 
        
Idoc i = connection.CreateIdoc("SYSTAT01","");
 
// Fill Message Type 
i.MESTYP = "STATUS"; 
  
// Fill Information about IDoc Reciever 
i.RCVPRN = "PT4_800"; // Partner number 
i.RCVPRT = "LS"; // Partner type 
  
// Fill information about IDoc sender 
i.SNDPOR = "ERPCONNECT"; // Partner port 
i.SNDPRN = "ERPCONNECT"; // Partner number 
i.SNDPRT = "LS"; // Partner type

// Fill the right fields in the segments 
i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20210901";
i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 
  
i.Send(); 
Console.WriteLine("IDoc sent"); 
Console.ReadLine();
 ```

Output:

The status code of the manipulated IDoc increases from 3 (Data passed...) to 12 (Dispatch OK). <br>
![SAP-Send-IDoc-001](/img/content/SAP-Send-IDoc-001.png){:class="img-responsive" width="400px" }

****
#### Related Links
- [Send an ORDER IDoc](https://kb.theobald-software.com/erpconnect-samples/send-an-order-idoc)
- [Send a MATMAS IDoc](https://kb.theobald-software.com/erpconnect-samples/send-a-matmas-idoc)
- [Resend IDocs which where set to CPICERR in SM58](https://kb.theobald-software.com/erpconnect-samples/resend-idocs-which-where-set-to-cpicerr-in-sm58)
- [Set Up an RFC-Destination](./prerequisites#setting-up-an-rfc-destination)



<!---
<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Sub Main(ByVal args() As String) 
   Using con As R3Connection = New R3Connection("sapappserver", 00, "sapuser", "password", "DE", "800") 
   con.Open(False) 
  
   Console.WriteLine( _ 
      "Which Idocnumber would you like to manipulate?") 
  
   Dim IdocNo As String = Console.ReadLine() 
  
   Dim i As Idoc = con.CreateIdoc("SYSTAT01", "")
  
   (...)
{% endhighlight %}
</details>
-->

<!---
<details>
<summary>Click to open VB example.</summary>
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
-->

<!---
<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
' Fill the right fields in the segments 
i.Segments("E1STATS", 0).Fields("LOGDAT").FieldValue = "20181001" 
i.Segments("E1STATS", 0).Fields("LOGTIM").FieldValue = "152301"
i.Segments("E1STATS", 0).Fields("STATUS").FieldValue = "12" 
i.Segments("E1STATS", 0).Fields("DOCNUM").FieldValue = IdocNo 
  
i.Send() 
  
Console.WriteLine("IDoc sent") 
Console.ReadLine()
{% endhighlight %}
</details>
-->