---
ref: ecs-runtime-sharepoint-application-01
layout: page
title: Creating purchase order
description: Creating purchase order
product: erpconnect-services
parent: sharepoint-application
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-creating-purchase-order
---


This sample provide a visual web part to create a purchase order in SAP.


![ECS-Create-PO-Webpart](/img/content/ECS-Create-PO-Webpart.png){:class="img-responsive" }


![ECS-SAP-Create-PO](/img/content/ECS-SAP-Create-PO.png){:class="img-responsive" }

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using (ERPConnectServiceClient client = new ERPConnectServiceClient())
            {
                // Create a RFC-Function object
                ERPFunction func = client.CreateFunction("BAPI_PO_CREATE");
 
                // Fill header structure
                ERPStructure Header = func.Exports["PO_HEADER"].ToStructure();
                Header["DOC_TYPE"] = "NB";
                Header["PURCH_ORG"] = "1000";
                Header["PUR_GROUP"] = "010";
                // check for date & time format strings  http://msdn.microsoft.com/en-us/library/8kb3ddd4.aspx
                Header["DOC_DATE"] = DateTime.Now.ToString("yyyyMMdd");
                Header["VENDOR"] = tb_Vendor.Text;
 
                // Create an Item
                ERPTable items = func.Tables["PO_ITEMS"];
                ERPStructure item = items.AddRow();
                item["PO_ITEM"] = "1";
                item["PUR_MAT"] = tb_Material.Text;
                item["PLANT"] = tb_Plant.Text;
 
                // Create and fill shedules
                ERPTable shedules = func.Tables["PO_ITEM_SCHEDULES"];
                ERPStructure shedule = shedules.AddRow();
                shedule["PO_ITEM"] = "1";
                shedule["DELIV_DATE"] = DateTime.Now.ToString("yyyyMMdd");
                shedule["QUANTITY"] = Convert.ToDecimal(tb_Quantity.Text);
 
                // Exceute Bapi and process return messages
                func.Execute();
                lbl_Message.Text = "";
                lbl_Message.Text += func.Tables["RETURN"].Rows[0, "MESSAGE"] + "\r\n";
            }
{% endhighlight %}
</details>

Download the [sample](https://cdn-files.theobald-software.com/help/ECS/PurchaseOrderSample.zip) for Visual Studio 2012.  