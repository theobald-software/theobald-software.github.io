---
layout: page
title: Stock Info
description: Stock Info
product: erpconnect-services
parent: business-integration-apps
childidentifier: stock-info
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=stockinfo
---

SAP StockInfo is a SharePoint Solution implemented with ERPConnect Services to get Stock Information from SAP.

**App structure** 

The handling of the app is extremely simple. There are four input boxes *Material, Company, Plant* and *Storage* you can choose as selection criteria. 
The Material number is a mandatory field, you need to enter it to get any hits displayed. The other input boxes are used to further restrict the hitlist.

![ECS-BIA-StockInfo1](/img/content/ECS-BIA-StockInfo1.png){:class="img-responsive"}

**Conducting a stock enquiry**


Enter a material number in field *Material* to start a new stock inquiry. Alternatively, you can search for materials with long text just by typing letters in the input box. Once you found and chosen the required material you can further restrict the hit list using the selection criteria *Company, Plant* and *Storage*. You run the inquiry by clicking the magnifier symbol. 


If there are any material stocks for the chosen material number, you get a hit list sorted by SAP company code. The list is arranged hierarchically and can be extended to plants and storages by clicking the root field company code. The material stocks are listed on every level according to its type in the SAP component. In this way the customer gets a quick and structured overview about all the necessary stock information.

![ECS-BIA-StockInfo2](/img/content/ECS-BIA-StockInfo2.png){:class="img-responsive"}


![ECS-BIA-StockInfo3](/img/content/ECS-BIA-StockInfo3.png){:class="img-responsive"}

By clicking the chart symbol the hitlist can optionally be displayed as a graphical chart which differentiates the material stocks by stock types (In Transf., On-Order, Unrestr. Use, etc.). 

![ECS-BIA-StockInfo4](/img/content/ECS-BIA-StockInfo4.png){:class="img-responsive"}

Using the truck symbol on the right side of the screen you can additionally display material movements and print the hit list.  

![ECS-BIA-StockInfo5](/img/content/ECS-BIA-StockInfo5.png){:class="img-responsive"}

![ECS-BIA-StockInfo6](/img/content/ECS-BIA-StockInfo6.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}