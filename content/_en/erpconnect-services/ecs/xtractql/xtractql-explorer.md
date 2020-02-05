---
ref: ecs-xtractql-06
layout: page
title: XtractQL Explorer
description: XtractQL Explorer
product: erpconnect-services
parent: xtractql
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-xtractql-explorer
---

*XtractQL Explorer* is a tool that is installed as part of ERPConnect Services and allows the execution of XtractQL statements.
Launch the *XtractQL Explorer* from the *Start menu -> ERP Connect Services*.

![ECS-XtractQL-Explorer](/img/content/ECS-XtractQL-Explorer.png){:class="img-responsive"}

Select *File -> Connection* ... to define the connection to your SAP system.

![ECS-XtractQL-SAP-Connection](/img/content/ECS-XtractQL-SAP-Connection.png){:class="img-responsive"}

In the upper portion of the window, enter the XtractQL expression, then select Execute. The result will be shown in the lower portion of the window.

![ECS-XtractQL-Explorer-Table](/img/content/ECS-XtractQL-Explorer-Table.png){:class="img-responsive"}

**Templates** 

Select the template menu to insert commonly used XtractQL expressions.

![ECS-XtractQL-Explorer-Template](/img/content/ECS-XtractQL-Explorer-Template.png){:class="img-responsive"}

**Variables**

Variables can be used for input and output parameters. 
In the following sample the variable @KUNNR is assignet to the Export parameter KUNNR.
The result table *CUSTOMER_T*  is saved into the table variable *@RETVAL*.


{% highlight sql %}
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET' 
EXPORTS KUNNR= @KUNNR 
TABLES CUSTOMER_T INTO @RETVAL;
{% endhighlight %}

The input variables can be defined under File -> Parameters.

![ECS-XtractQL-Explorer-Menu](/img/content/ECS-XtractQL-Explorer-Menu.png){:class="img-responsive"}

![ECS-XtractQL-Explorer-Function-Parameter](/img/content/ECS-XtractQL-Explorer-Function-Parameter.png){:class="img-responsive"}

![ECS-XtractQL-Explorer-Function](/img/content/ECS-XtractQL-Explorer-Function.png){:class="img-responsive"}