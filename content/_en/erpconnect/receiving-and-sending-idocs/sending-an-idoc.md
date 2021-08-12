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

**The sample code is located in the ERPConnect installation directory in the IdocSender directory**

The example below shows a sample console program that sends a STATUS IDoc. This message type (STATUS) is designed for manipulating a status of another outbound IDoc. If an external application received an IDoc, it can use the STATUS IDoc to confirm the successful processing. STATUS is a very simple IDoc (which contains only one data record). We have kept the example simple here.

To begin, we open a client connection to the R/3 system with the help of R3Connection class. Then we use the CreateIdoc method to instance a valid IDoc object. SYSTAT01 is the IDoc type for the appropriate message type STATUS. 


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
static void Main(string[] args)  
{  
     using (R3Connection con = new R3Connection("sapappserver", 00, "sapuser", "password", "EN", "800"))
    {
       con.Open(false);  
        
       Console.WriteLine(  
          "Which IDocnumber would you like to manipulate?");  
       string IdocNo = Console.ReadLine();  
        
       Idoc i = con.CreateIdoc("SYSTAT01",""); 
        
       (...)
   }
{% endhighlight %}
</details>

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

The next step is to provide various administrative information. Have a look at the source code to see how receiver and sender information is set. 

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
// Fill Message Type 
i.MESTYP = "STATUS"; 
  
// Fill Information about IDoc Reciever 
i.RCVPRN = "PT4_800"; // Partner number 
i.RCVPRT = "LS"; // Partner type 
  
// Fill information about idoc sender 
i.SNDPOR = "ERPCONNECT"; // Partner port 
i.SNDPRN = "ERPCONNECT"; // Partner number 
i.SNDPRT = "LS"; // Partner type
  
(...)
{% endhighlight %}
</details>

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

Now we have to fill in some fields in segment E1STATS: the new status code (STATUS), date und time (LOGDAT, LOGTIM), and the IDoc number, which should be manipulated. Now is the perfect time to send the IDoc using the Send method.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
// Fill the right fields in the segments 
i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20181001"; 
i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 
  
i.Send(); 
Console.WriteLine("IDoc sent"); 
Console.ReadLine();
{% endhighlight %}
</details>

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

The figures below show the sample program in action. The status code is increased from 3 (Data passed...) to 12 (Dispatch OK). To configure your SAP system please refer to chapter [Receiving Order IDocs](./example-receiving-an-idoc) .

![SAP-Send-IDoc-001](/img/content/SAP-Send-IDoc-001.png){:class="img-responsive" width="600px" }
