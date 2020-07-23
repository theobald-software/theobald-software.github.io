---
ref: ecs-extending-a-solution-in-visual-studio-04
layout: page
title: Hinzufügen eines benutzerdefinierten UI in Visual Studio
description: Hinzufügen eines benutzerdefinierten UI in Visual Studio
product: erpconnect-services
parent: bcs-erweitern-einer-visual-studio-loesung
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-hinzufuegen-eines-benutzerdefinierten-ui-in-visual-studio
progressstate: 3
---

In den nachfolgenden Schritten erstellen Sie einen einfachen, benutzerdefinierten Web Part, der die Bestellungen und eine Freigabeschaltfläche darstellen wird. Dieser Web Part wird auf einer Seite dargestellt wenn der Benutzer die *Release* Aktion im Purchase Order Menü wählt.

**Erstellen des ReleasePO Web Part**

Im *Solution Explorer* Fenster klicken Sie mit der rechten Maustaste auf den Projektknoten 'SAPPOModel' und wählen *Add -> New Item*.
Im *Add New Item – SAPPOModel* Dialogfenster wählen Sie das Visual Web Part Template und geben ihm den Namen 'ReleasePO'. Betätigen Sie die *Add* Schaltfläche.

![BCS-PO-VS-Web-Part-01](/img/content/BCS-PO-VS-Web-Part-01.png){:class="img-responsive"}

Doppelklicken Sie auf das *Item* 'ReleasePOUserControl.ascx', um es im Designerfenster zu öffnen. Stellen Sie sicher, dass Sie den *Design* Modus aktiviert haben.

In der *Toolbox* erweitern Sie die Data Kategorie und ziehen ein *DetailsView Control* in das Designerfenster.

Aus der *Standard* Kategorie ziehen Sie ein Button, ein *DropDownList* und ein Label *Control* in das Designerfenster. Im Eigenschaftsfenster ändern Sie die *IDs* der *Controls* in die nachfolgend aufgeführten Werte:

**DetailsView** -	 dv_PurchaseOrder<br>
**Button** -	 btn_Release<br>
**DropDownList** -	 ddl_ReleaseCode<br>
**Label** -	 lbl_Message

Ordnen Sie die Controls wie auf dem nachfolgenden Bild an. Sie können Styles verwenden, um die Schrift, Abstände, Rahmen und andere Elemente zu formatieren. 

![BCS-PO-VS-Web-Part-02](/img/content/BCS-PO-VS-Web-Part-02.png){:class="img-responsive"}

Wechseln Sie zum Tab der den Sourcecode der Datei 'ReleasePOUserControl.ascx.cs' anzeigt. Fügen Sie den nachfolgenden Code hinzu, um die Controls mit den Daten zu verknüpfen und um die Release Methode aufzurufen, wenn die Schaltfläche geklickt wird.

<details>
<summary>[C#]</summary>
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

Stellen Sie sicher, dass das *Click Event* der Release Schaltfläche auf die Event Handler Methode verweist. Wählen Sie die Schaltfläche im Designerfenster aus. Wechseln Sie im *Properties* Fenster auf die Events Ansicht und wählen Sie 'btn_Release_Click' als Click Aktion.

![BCS-PO-VS-Web-Part-03](/img/content/BCS-PO-VS-Web-Part-03.png){:class="img-responsive"}

Führen Sie anschließend *Build* und *Deploy* aus, um das Projekt nach SharePoint zu übertragen.

![BCS-PO-VS-Web-Part-04](/img/content/BCS-PO-VS-Web-Part-04.png){:class="img-responsive"}

**Erstellen einer Seite für den ReleasePO Web Part**


Öffnen Sie den *Browser* und navigieren Sie zu der Seite, die die externe Liste 'Purchase Orders' beinhaltet.

Wählen Sie aus dem *Site Actions* Menü den Eintrag *More Options*.

Im *Create* Dialogfenster filtern Sie nach Page und *Web Part Page*. Betätigen Sie die Create Schaltfläche.

![BCS-PO-VS-Page-01](/img/content/BCS-PO-VS-Page-01.png){:class="img-responsive"}

Im *New Web Part Page* Fenster geben Sie der Seite den Namen 'ReleasePO', übernehmen das Standardlayout *Layout Template* und wählen 'Site Pages' als *Save Location*.

Betätigen Sie *Create*.

![BCS-PO-VS-Page-02](/img/content/BCS-PO-VS-Page-02.png){:class="img-responsive"}

Die neue Seite wird im Edit Modus geöffnet. Betätigen Sie '*Add a Web Part*' in einem der Seitenbereiche, in dem Sie den 'ReleasePO' Web Part positionieren wollen. Wählen Sie den 'ReleasePO' *Web Part* aus der Custom Kategorie und betätigen Sie *Add*.


![BCS-PO-VS-Page-03](/img/content/BCS-PO-VS-Page-03.png){:class="img-responsive"}

Der Web Part wird angezeigt. Betätigen Sie die *Stop Editing* Schaltfläche vom Ribbon um die neue Seite mit dem 'ReleasePO' Web Part anzuzeigen.

![BCS-PO-VS-Page-04](/img/content/BCS-PO-VS-Page-04.png){:class="img-responsive"}

Beachten Sie die URL in Ihrem Webbrowser. Sie sollte folgendermaßen aussehen: 'http:////SitePages/ReleasePO.aspx'.

