---
ref: ec-calling-bapis-and-function-modules-04
layout: page
title: Web Applications
description: Web Application Usage
product: erpconnect
parent: calling-bapis-and-function-modules
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=using-erpconnect-in-a-web-application
---

The following section shows the development process for an ASP.NET/ERPConnect project.

### Prerequisites

- Add the ERPConnect.dll class library as a reference to the project (the .dll is copied to the bin directory when compiling the project). 
- Add the librfc32.dll to your bin directory, see [Requirements - 32/64-Bit Environment](../prerequisites-and-installation/requirements#3264-bit-environment). 

{: .box-warning }
**Warning!** The standard demo license does not support working in web environments. 
To test ERPConnect with your ASP.NET project, apply for a test license number at [sales@theobald-software.com](mailto:sales@theobald-software.com).    

### ASP.NET Example
This example uses an ASP page to enter data for a purchase order, see screenshot below. <br>
![purchase-order1](/img/content/Create-Purchase-Order-IE.png){:class="img-responsive"}  

The ASP page contains a button, a status message and the following textboxes:
- vendor number (*txtVendor*)
- the material number (*txtMaterial*)
- the quantity (*txtQuan*)
- plant the vendor should deliver the material to (*txtPlant*).

#### How to Create a Purchase Order via BAPI
To create a purchase order using the *BAPI_PO_CREATE* BAPI, follow the steps below:
1. Establish a connection to the SAP system 
2. Create an RFC-Function object for the BAPI *BAPI_PO_CREATE*.
3. Fill the structure *PO_HEADER* with the following values: 
- DOC_TYPE -> Order type (NB normal order)
- PURCH_ORG -> Purchasing organization
- PUR_GROUP -> Purchasing group
- DOC_DATE -> Date 
- VENDOR -> Vendor number
4. Define the items *PLANT* and *PUR_MAT* (material number) in the table *PO_ITEMS*. <br>
5. The values for the quantity (*QUANTITY*) and the delivery date (*DELIV_DATE*) must be placed in the table *PO_ITEM_SHEDULES*.
6. Execute the BAPI and process the return messages.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void Button1_Click(object sender, System.EventArgs e) 
{ 
	ERPConnect.LIC.SetLic("xxxxxxxxxxxxx"); //Set your ERPConnect License. 
	
	R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");  //Set Connection Properties
	con.Open(false); 
          
    // Create a RFC-Function object 
    RFCFunction func = con.CreateFunction("BAPI_PO_CREATE");

	// Fill header structure
	RFCStructure Header = func.Exports["PO_HEADER"].ToStructure();
	Header["DOC_TYPE"]= "NB";
	Header["PURCH_ORG"] = "1000";
	Header["PUR_GROUP"] = "010";
	Header["DOC_DATE"]= ERPConnect.ConversionUtils.NetDate2SAPDate(DateTime.Now);
	Header["VENDOR"]= this.txtVendor.Text
	
	// Create an Item
	RFCTable items = func.Tables["PO_ITEMS"];
	RFCStructure item = items.AddRow();
	item["PO_ITEM"] = "1";
	item["PUR_MAT"] = this.txtMaterial.Text;
	item["PLANT"] = this.txtPlant.Text;
  
	// Create and fill shedules
	RFCTable shedules = func.Tables["PO_ITEM_SCHEDULES"];
	RFCStructure shedule = shedules.AddRow();
	shedule["PO_ITEM"] = "1";
	shedule["DELIV_DATE"] = ERPConnect.ConversionUtils.NetDate2SAPDate(DateTime.Now);
	shedule["QUANTITY"] = Convert.ToDecimal(this.txtQuan.Text);

	// Exceute Bapi and process return messages
	func.Execut e();
	this.txtReturn.Text = "";
	this.txtReturn.Text += func.Tables["RETURN"].Rows[0, "MESSAGE"] + "\r\n";
}
{% endhighlight %}
</details>

The screenshot below shows the created purchase order.<br>
![purchase-order2](/img/content/create-purchase-order-ie_02.png){:class="img-responsive"}  
  
****
#### Related Links
- [How to implement a connection pool](https://kb.theobald-software.com/erpconnect-samples/how-to-implement-a-connection-pool)