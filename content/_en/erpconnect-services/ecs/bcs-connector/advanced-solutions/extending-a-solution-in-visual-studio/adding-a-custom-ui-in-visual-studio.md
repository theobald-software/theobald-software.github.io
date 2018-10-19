---
ref: ecs-extending-a-solution-in-visual-studio-04
layout: page
title: Adding a Custom UI in Visual Studio
description: Adding a Custom UI in Visual Studio
product: erpconnect-services
parent: extending-a-solution-in-visual-studio
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-adding-a-custom-ui-in-visual-studio
---

In the following steps, you will create a simple custom web part that will display the purchase order with a button to release it. This web part will be hosted on a page that will be displayed when a user chooses  the *Release* action from the purchase order item menu.


**Creating the ReleasePO Web Part**

In the *Solution Explorer* window, right-click on the project node 'SAPPOModel', and then select *Add -> New Item*.

In the *Add New Item – SAPPOModel* dialog, select the Visual Web Part template and specify 'ReleasePO' as the name. Select the *Add* button.

![BCS-PO-VS-Web-Part-01](/img/content/BCS-PO-VS-Web-Part-01.png){:class="img-responsive"}

Double-click on the item 'ReleasePOUserControl.ascx' to open it in the designer window. Make sure you have *Design* mode selected.

In the *Toolbox* window, expand the *Data* category and drag-and-drop a *DetailsView* control onto the designer window.

From the *Standard* category, drag-and-drop a *Button*, a *DropDownList* and a *Label* control onto the designer window. In the Properties window, change the *IDs* for the controls to the following values:

**DetailsView** -	 dv_PurchaseOrder<br>
**Button** -	 btn_Release<br>
**DropDownList** -	 ddl_ReleaseCode<br>
**Label** -	 lbl_Message

Arrange the controls as shown below, you can use styles to change fonts, spacing, borders etc.

![BCS-PO-VS-Web-Part-02](/img/content/BCS-PO-VS-Web-Part-02.png){:class="img-responsive"}

Switch to the tab showing the code file 'ReleasePOUserControl.ascx.cs'. Add the following code to bind the controls to data and to invoke the release method when the button is clicked.

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Collections.Generic;
  
namespace SAPPOModel.ReleasePO
{
    public partial class ReleasePOUserControl : UserControl
    {
        List poList = new List(); 
        PurchaseOrders poItem;
        string poID = String.Empty;
        string relCode = String.Empty;
        
        protected void Page_Load(object sender, EventArgs e)
        {
            lbl_Message.Visible = false;
            if (ddl_ReleaseCode.Items.Count == 0)
            {
                ddl_ReleaseCode.Items.Add("Z1");
            }
            if (Request.QueryString.Count != 0)
            {
                poID = Request.QueryString[0];
                relCode = ddl_ReleaseCode.SelectedItem.Text;
                poItem = PurchaseOrdersService.ReadDataRecord(poID);
                poList.Add(poItem);
                dv_PurchaseOrder.AutoGenerateRows = true;
                dv_PurchaseOrder.DataSource = poList;
                dv_PurchaseOrder.DataBind();
           }
        }
          
        protected void btn_Release_Click(object sender, EventArgs e)
  {
   try
   {
    SAPPOModel.PurchaseOrdersService.Release(poID, relCode);
    lbl_Message.Visible = true;
    lbl_Message.Text = "Purchase order released successfully.";
   }
   catch(Exception ex)
   {
    lbl_Message.Visible = true;
    lbl_Message.Text = ex.ToString();
            }
        }
    }
}
{% endhighlight %}
</details>

Ensure that the click event of the Release button is assigned to the event handler method. Select the button in the design window. In the *Properties* window, switch to *Events* view and select 'btn_Release_Click' as the *Click* action.

![BCS-PO-VS-Web-Part-03](/img/content/BCS-PO-VS-Web-Part-03.png){:class="img-responsive"}

Finally, *Build* and *Deploy* your project to SharePoint.

![BCS-PO-VS-Web-Part-04](/img/content/BCS-PO-VS-Web-Part-04.png){:class="img-responsive"}

**Creating a Page for the ReleasePO Web Part**

Open a browser window and navigate to the site that will host the 'Purchase Orders' external list.

From the *Site Actions* menu, select *More Options*.

In the *Create* dialog, filter by *Page* and select *Web Part Page*. Select the *Create* button.

![BCS-PO-VS-Page-01](/img/content/BCS-PO-VS-Page-01.png){:class="img-responsive"}

On the *New Web Part Page* screen, specify 'ReleasePO' as the name of the page, leave the default *Layout Template* and select 'Site Pages' as the *Save Location*.

Select *Create*.



![BCS-PO-VS-Page-02](/img/content/BCS-PO-VS-Page-02.png){:class="img-responsive"}

The new page will open in *Edit* mode. Click on 'Add a Web Part' in one of the page zones where you want to place the 'ReleasePO' web part. Select the 'ReleasePO' web part from the Custom category, then select Add.

![BCS-PO-VS-Page-03](/img/content/BCS-PO-VS-Page-03.png){:class="img-responsive"}

The web part will be displayed. Select the *Stop Editing* button from the ribbon to see the new page hosting the 'ReleasePO' web part.

![BCS-PO-VS-Page-04](/img/content/BCS-PO-VS-Page-04.png){:class="img-responsive"}

Notice the URL to your page in your browser window. It should look like 'http:////SitePages/ReleasePO.aspx'.
