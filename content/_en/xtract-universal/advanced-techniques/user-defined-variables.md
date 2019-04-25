---
ref: xu-advanced-techniques-01
layout: page
title: User-Defined Variables
description: User-Defined Variables
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=user-defined-variables
---

In principle, any extraction can be started by specifying its name. 

In addition, there is also the possibility to use user-defined parameters in the extraction. The following screenshot shows a *Where* clause with two variables @PlantLow and @PlantHigh.

![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}

Now click on the Run button and confirm the message, that the changes would be saved.
When you open the Run dialog basing on this Where clause, you can find the variables in the second tab, so you can assign to them the wished value. Please use the @ symbol to identify variables. Please note that DATE values must be provided in form of YYYYMMDD.

![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.jpg){:class="img-responsive"}

Thus we have now the following URL to set the values:
 
	http://localhost:8085/?name=plants&**PlantLow=1000&PlantHigh=9999**

Replacing the variables with the data is logged and can be seen in the extraction log. To do this, click on the button Log in the Xtract Universal Designer:

![User-Variables-In-Log](/img/content/User-Variables-In-Log.png){:class="img-responsive"}

**SQL Parameters for Database Destinations**

In Xtract Universal user defined variables (custom parameters) that can be set as query string in the url, can be used as SQL parameter in the SQL statements for database destinations.
 
The following table extraktion has a custom parameter WNAME in the WHERE clause.

![xu-customerparam-where](/img/content/xu-customerparam-where.png){:class="img-responsive"}

The extraction uses an Oracle destination. In the preparation statement the custom parameter can be used:

![xu-customerparam-destination](/img/content/xu-customerparam-destination.png){:class="img-responsive"}

The format of the variable depends on the destination. For the variable WNAME, for example, :WNAME is used for an Oracle destination and @WMNAME for an SQL Server destination. You can view the format in the insert statement.

Make sure to avoid name conflicts. 
The custom parameter in our example may not be called *NAME1*, since in the row processing statement we have the SQL parameter *NAME1*.
