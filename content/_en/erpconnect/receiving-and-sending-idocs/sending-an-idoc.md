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

This section shows how to write a sample console program that sends a *STATUS IDoc*.

The *STATUS* message type is used to manipulate the status of another outbound IDoc e.g., 
when a subsystem receives an IDoc and acknowledges the receive with a status change.
*STATUS* is a simple IDoc that contains only one data record.

{: .box-note }
**Note**: Make sure to configure your SAP system to receive IDocs, see [Set Up Receiving IDocs](./prerequisites#set-up-receiving-idocs).

### Sending a STATUS IDoc

1. Open a client connection to the R/3 system using the *R3Connection* class. 
2. Inquire the IDoc number of the IDoc to be manipulated and read the input.
3. Use the *CreateIdoc* method to instance a valid *IDoc* object. 
"SYSTAT01" is the IDoc type for the appropriate message type STATUS. <br> <br>
	 ```csharp
     static void Main(string[] args)  
     {  
         R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
         con.Open(false);  
        
         Console.WriteLine("Which IDocnumber would you like to manipulate?");  
         string IdocNo = Console.ReadLine();  
        
         Idoc i = con.CreateIdoc("SYSTAT01","");
     ```
4. Provide receiver and sender information as shown in the code below. <br> <br>
	 ```csharp
		 // Fill Message Type 
		 i.MESTYP = "STATUS"; 
  
		 // Fill Information about IDoc Reciever 
		 i.RCVPRN = "PT4_800"; // Partner number 
		 i.RCVPRT = "LS"; // Partner type 
  
		 // Fill information about idoc sender 
		 i.SNDPOR = "ERPCONNECT"; // Partner port 
		 i.SNDPRN = "ERPCONNECT"; // Partner number 
		 i.SNDPRT = "LS"; // Partner type
     ```
5. Fill in the following fields in segment *E1STATS*: the new status code (*STATUS*), date and time (*LOGDAT*, *LOGTIM*) and the number of the IDoc to be manipulated. 
6. Send the IDoc using the *Send* method. <br> <br>
	 ```csharp
		 // Fill the right fields in the segments 
		 i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20181001"; 
		 i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
		 i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
		 i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 
  
		 i.Send(); 
		 Console.WriteLine("IDoc sent"); 
		 Console.ReadLine();
	}
     ```
7. Run the program and check the result.<br>
The status code of the manipulated IDoc increases from 3 (Data passed...) to 12 (Dispatch OK). <br>
![SAP-Send-IDoc-001](/img/content/SAP-Send-IDoc-001.png){:class="img-responsive" width="400px" }

****
#### Related Links
- [KBArticles]()

<!---
Valeries Test, um Code in Liste zu kollabieren -> fehlgeschlagen T_T
1. Open a client connection to the R/3 system using the *R3Connection* class. 
2. Use the *CreateIdoc* method to instance a valid *IDoc* object. 
*SYSTAT01* is the IDoc type for the appropriate message type STATUS. 
	<details> 
	<summary>Click to open C# example.</summary> {% highlight visualbasic %}
	Sub Main(ByVal args() As String)
    Using con As R3Connection = New R3Connection("sapappserver", 00, "sapuser", "password", "DE", "800") 
    con.Open(False) 
  
    Console.WriteLine( _ 
       "Which Idocnumber would you like to manipulate?") 
  
    Dim IdocNo As String = Console.ReadLine() 
  
    Dim i As Idoc = con.CreateIdoc("SYSTAT01", "")
  
    (...) {% endhighlight %}
    </details>
3. Provide receiver and sender information for the header of the IDoc object as shown in the code below. <br>

-->


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