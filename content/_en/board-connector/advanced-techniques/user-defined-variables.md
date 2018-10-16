---
ref: bc-advanced-techniques-01
layout: page
title: User-Defined Variables
description: User-Defined Variables
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=user-defined-variables
---

In principle, any extraction can be started via HTTP (e.g. a web browser) by specifying its name. We have already seen in the last chapter a way to override certain system parameters (e.g. the maximum number of rows) by setting the parameter (Rows).

In addition, there is also the possibility to use user-defined parameters in the extraction. The following screenshot shows a *Where clause* with two variables @PlantLow and @PlantHigh.

![User-Variables-01](/img/content/User-Variables-01.png){:class="img-responsive"}

Now click on the Run button and confirm the message, that the changes would be saved.<br>
When you open the Run dialog basing on this Where clause, you can find the variables in the second tab, so you can assign to them the wished value. Please use the @ symbol to identify variables. Please note that DATE values must be provided in form of YYYYMMDD.

![User-Variables-02](/img/content/User-Variables-02.png){:class="img-responsive"}

Thus we have now the following URL to set the values:
 
    http://localhost:8085/?name=plants&**PlantLow=1000&PlantHigh=9999**

Replacing the variables with the data is logged and can be seen in the extraction log. To do this, click on the button Log in the BOARD Designer:


![User-Variables-03](/img/content/User-Variables-03.png){:class="img-responsive"}
