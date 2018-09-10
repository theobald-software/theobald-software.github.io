---
layout: page
title: Table
description: Table
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-designer-table
---

To add an SAP table to the ERPConnect Services Designer, select the button with the plus (+) symbol next to Tables. The *Search* dialog will be displayed.<br>
Enter a search string and select the SAP table that you want to add.

![ECS-Designer-Table-01](/img/content/ECS-Designer-Table-01.png){:class="img-responsive"}

In the *ERPConnect Services Tables* dialog, you can select the fields from the SAP table that you want to make available in the result set (*Out* flag). You can change the value in the *Member* column to provide a different name for a table field.

![ECS-Designer-Table-02](/img/content/ECS-Designer-Table-02.png){:class="img-responsive"}

Select *OK* to confirm your entries. Save the ECS Designer file (.ecs) to initiate the code generation in the background. The generated code will be in a file named .Designer.cs (or .vb) and can be viewed in the Visual Studio editor.

To use the generated class in your code, the data context has to be instantiated. This can be done by specifying the ERPConnect Services Application name or you can use the default ERPConnect Services Application (using the overload constructor of the DataContext class). You can use the object DataContext. to construct LINQ queries in your code:

<details>
<summary>Click to open C+ example.</summary>
{% highlight c++ %}
using ERPConnectServices;
using System.Linq;
//…
using(ERPConnectServicesContext context = new ERPConnectServicesContext())
{
var data = (from m in context.MAKTList select m).OrderBy(m => m.MAKTX).Take(100);           
gv_Material.AutoGenerateColumns = true;
gv_Material.DataSource = data.ToList();
gv_Material.DataBind(); 
}
{% endhighlight %}
</details>

When displayed in a Web Part, the results would look as shown below.

![ECS-Designer-Table-03](/img/content/ECS-Designer-Table-03.png){:class="img-responsive"}
