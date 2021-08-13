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


This IDoc creates a sales order in the SAP system.
### Prerequisites


There are some things to do before sending this type of IDoc. 
Please refer to the administration chapter to learn how to configure a correct partner profile. 
If there is no partner profile found for an incoming IDoc, no order will be created.

### Create 
There are two ways to create an IDoc object after having established a connection to the SAP system. 
Use the CreateIdoc method to create an IDoc with all segments located in the segment collections. 
This might be useful for sending very simple IDocs. 
In this example we use the CreateEmptyIdoc method to create only the segments we need with the CreateSegment method.

The example below is a simple WinForms application with two textboxes: 
The material number (txtMaterialNumber) and the quantity (txtQty) can be entered by the user.

Our sample IDoc needs three different kinds of segment types:

E1EDK01 is the main segment of an ORDERS01 IDoc. 
We leave it empty, but it must be provided by the calling program to pass the SAP IDoc syntax check.

E1EDP01 is the segment for a single order position. 
The field MENGE contains the quantity. Of course, this segment can occur more than once.

E1EDP19 represents an object definition. 
In this case the object is a material number. 
The field QUALF is therefore set to 002 and the material number is written into the IDTNR field. 
E1EDP19 segments are always children of E1EDP01.

{: .box-note }
**Note**: You can use the transaction **WE60** to look up the structures of IDocs in SAP.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)  
{  
    using(R3Connection con = new R3Connection())
    {
        
          con.UserName = "erpconnect"; 
          con.Password = "pass"; 
          con.Language = "DE"; 
          con.Client = "800"; 
          con.Host = "sapserver"; 
          con.SystemNumber = 11; 
       
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
}
{% endhighlight %}
</details>

The figure shows the received IDoc (transaction WE02). 
The green light indicates that the IDoc has been properly processed and a sales order has been created

![SAP-Send-IDoc-002](/img/content/SAP-Send-IDoc-002.png){:class="img-responsive"}