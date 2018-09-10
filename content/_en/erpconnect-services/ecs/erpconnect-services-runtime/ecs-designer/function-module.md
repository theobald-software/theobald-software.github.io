---
layout: page
title: Function Module
description: Function Module
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-designer-function
---

SAP function modules and BAPI methods (or BAPIs) are technically very similar and are used synonymously throughout this documentation. To add an SAP function module to the ERPConnect Services Designer, select the button with the plus (+) symbol next to *Functions*. The *Search* dialog will be displayed.
Enter a search string and select the SAP function module that you want to add.

![ECS-Designer-Function-01](/img/content/ECS-Designer-Function-01.png){:class="img-responsive" }

In the RFC Function Modules / BAPIs dialog, you can edit the function object. For the parameters that you want to use in your code and assign values to, check the *Pass* column. Alternatively, you can assign a static value to a parameter in the *Value* column.

![ECS-Designer-Function-02](/img/content/ECS-Designer-Function-02.png){:class="img-responsive"}

Similarly, for the Tables parameters of your function module, you can indicate if you want to provide values for a table in your code (*Pass* flag) or use the table as the return structure in your code (*Return* flag). You can also specify a name for a *Variable, Table* or *Structure*. If you leave the values blank, default names will be assigned.

![ECS-Designer-Function-03](/img/content/ECS-Designer-Function-03.png){:class="img-responsive"}

Select *OK* to confirm your selections. Save the ECS Designer file (.ecs) to initiate the code generation in the background. The generated code will be in a file named .Designer.cs (or .vb) and can be viewed in the Visual Studio editor.

The following code sample illustrates how a function module with one *Exports (Pass)* and one *Tables (Return)* parameter can be called.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using System.Linq; 
using ERPConnectServices; 
…  
using(ERPConnectServicesContext context =  
new ERPConnectServicesContext()) 
{ 
    String Name = tb_CustomerName.Text ?? String.Empty; 
    var data = context.SD_RFC_CUSTOMER_GET(Name); 
    gv_Customers.AutoGenerateColumns = true; 
    gv_Customers.DataSource = data.ToList(); 
    gv_Customers.DataBind();             
}
{% endhighlight %}
</details>

When displayed in a Web Part, the results would look as shown below.

![ECS-Designer-Function-04](/img/content/ECS-Designer-Function-04.png){:class="img-responsive"}


