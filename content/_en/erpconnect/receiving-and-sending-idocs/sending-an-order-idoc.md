---
ref: ec-receiving-and-sending-idocs-03
layout: page
title: Sending an ORDER IDoc
description: Sending an ORDER IDoc
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sending-an-order-idoc
---

This article describes how to create an IDoc of type *ORDERS01* with ERPConnect.
The *ORDERS01* IDoc creates a sales order in the SAP system.

### Prerequisites

For SAP to create sales orders, a partner profile for incoming IDocs needs be set up, see [Online Help - Set Up Receiving IDocs](https://help.theobald-software.com/en/erpconnect/receiving-and-sending-idocs/prerequisites#set-up-receiving-idocs) 
for information on how to customize your SAP system accordingly.
If no partner profile is found, no order will be created.

### Sending an IDoc Order
After connecting to your SAP system, there are 2 ways to create an IDoc object:
- You can use the *CreateIdoc* method to create an IDoc with all segments located in the segment collections. 
This can be used for sending very simple IDocs. 
- You can use the *CreateEmptyIdoc* method in combination with the *CreateSegment* method to create only the needed segments. 

This example shows how to use the *CreateEmptyIdoc* and *Create Segment* method to create a WinForms application with two input textboxes:<br>
- The material number (*txtMaterialNumber*) 
- The quantity (*txtQty*)

The sample IDoc needs three different kinds of segment types:
- *E1EDK01* is the main segment of an *ORDERS01* IDoc. 
While it is empty, it must be provided to pass the SAP IDoc syntax check.
- *E1EDP01* is the segment for a single order position. 
The field *MENGE* contains the quantity.This segment can occur more than once.
- *E1EDP19* represents an object definition. In this case the object is a material number. 
The field *QUALF* is therefore set to 002 and the material number is written into the *IDTNR* field. 
*E1EDP19* segments are children of *E1EDP01*.

{: .box-tip }
**Tip**: You can use the transaction **WE60** to look up the structures of IDocs in SAP.

#### Example Code
<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)  
{  
    R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
    con.Open(false);

    Idoc idoc = con.CreateEmptyIdoc("ORDERS01","");  
    idoc.MESTYP = "ORDERS";  
        
    // Fill information about idoc sender  
    idoc.SNDPRN = "1172"; // Partner number  
    idoc.SNDPRT = "KU"; // Partner type  
        
    // Create document header segment  
    IdocSegment e1edk01 = idoc.CreateSegment("E1EDK01");  
    idoc.Segments.Add(e1edk01);  
        
    // Create item segment IdocSegment  
    e1edp01 = idoc.CreateSegment("E1EDP01");  
    e1edp01.Fields["MENGE"].FieldValue = txtQty.Text;  
    idoc.Segments.Add(e1edp01);  
        
    // Create Object identification (material number in this case)  
    IdocSegment e1edp19 = idoc.CreateSegment("E1EDP19");  
    // Following Value “002” for Material number  
    e1edp19.Fields["QUALF"].FieldValue = "002";  
    // material number  
    e1edp19.Fields["IDTNR"].FieldValue = txtMaterialNumber.Text;  
    e1edp01.ChildSegments.Add(e1edp19);  
        
    idoc.Send();  
    this.lblInfo.Text = "IDoc sent";    
}
{% endhighlight %}
</details>

After running the program, you can check the result in SAP. The transaction **WE02** displays the received IDocs and their status as shown in the screenshot below:

![SAP-Send-IDoc-002](/img/content/SAP-Send-IDoc-002.png){:class="img-responsive"}