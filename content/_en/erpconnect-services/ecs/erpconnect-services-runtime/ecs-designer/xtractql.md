---
layout: page
title: XtractQL
description: XtractQL
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-designer-xtractql
---

To add an XtractQL object to the ERPConnect Services Designer, select the button with the plus (+) symbol next to *XtractQLs*. Specify a name for the *Method* and enter the *XQL Statement*. Select the *Execute* button for a preview of the data.

![ECS-Designer-XtractQL-01](/img/content/ECS-Designer-XtractQL-01.png){:class="img-responsive"}

Select *OK* to confirm your entries. Save the ECS Designer file (.ecs) to initiate the code generation in the background. The generated code will be in a file named .Designer.cs (or .vb) and can be viewed in the Visual Studio editore in a file named .Designer.cs (or .vb) and can be viewed in the Visual Studio editor.

The following sample code illustrates how the XtractQL object can be used with a return table:


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using ERPConnectServices;
using System.Linq;
//… 
using(ERPConnectServicesContext context = new ERPConnectServicesContext())
{
    System.Data.DataTable data = context.GetMaterials();
    gv_Materials.AutoGenerateColumns = true;
    gv_Materials.DataSource = data;
    gv_Materials.DataBind();
}
{% endhighlight %}
</details>

When displayed in a Web Part, the results would look as shown below.

![ECS-Designer-XtractQL-02](/img/content/ECS-Designer-XtractQL-02.png){:class="img-responsive"}

Please refer to the section [XtractQL]() to find more samples and a complete syntax reference. 