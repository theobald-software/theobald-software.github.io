---
layout: page
title: Synchronous sending and status query
description: Description about Synchronous sending and status query
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 5
lang: en_GB
---

**You can find the code for this example in the ERPConnect installation directory in the SendOrderIdoc directory.**

In the last few examples, we always sent the IDocs asynchronously to the SAP system. This has the advantage that the send program finishes very quickly with the send procedure because the processing that is heavy on computing time is done in the background. The disadvantage of this approach, however, is that the send program cannot make any assertion as to whether the IDoc processing in SAP has run on an error or not. ERPConnect or the Idoc class, respectively, provides two functions for this purpose: In place of Send, SendAndWait waits until the IDoc is processed in SAP. From this point on, the IDoc.DOCNUM (i.e. the IDoc number) field is also filled. Now with the help of GetCurrent-Status, an IdocStatus object can be called, which will contain any possible success or error messages.

The following code is based on the OrderIdoc example in Chapter [Sending an ORDER IDoc]() and shows synchronous sending and the status query: 

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
idoc.SendAndWait(); 
IdocStatus status = idoc.GetCurrentStatus(); 
MessageBox.Show(status.Status + " -> " + status.Description);
{% endhighlight %}
</details>

![SAP-Send-IDoc-003](/img/content/SAP-Send-IDoc-003.png){:class="img-responsive" width="400px"}