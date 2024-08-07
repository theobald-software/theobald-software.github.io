---
ref: xi-bw-cube-01
layout: page
title: Defining a BW Cube extraction
description: Define a BW Cube extraction
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=look-up-cubes
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

The following section shows how to use the Xtract BW Cube component


### Look up a BW Cube or Query
1. Click **[Search]** (binoculars icon) in the main window of the component.
![Bw-Cube-Data-Source](/img/content/xis/bw-cube-lookup.png){:class="img-responsive"}
The dialog “Look Up Cube or Query” opens.
![Query-LookUp](/img/content/Query-LookUp.png){:class="img-responsive" }
2. Select *InfoCubes* or *QueryCubes*.
3. Search for **Cube Name** by using **[Search]** (binoculars icon), you can use wildcards (*), if needed.
4. Select an item from the list. 
5. Click **[OK]** to confirm.

![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive" }
On the left-hand side of the editor all dimensions, measures and dimension properties are shown. These parameters are presented hierarchically in a tree view.

6. To extract one or more of these cube elements, drag and drop them to the grid on the right-hand side. If you are choosing the property of a dimension that is not yet contained in the result set, the dimension will be added automatically as well.
7. To select all the properties of a dimension or all key figures, right-click the corresponding node and select the option *Select* for *Output*.
8. If one or more measure is seleted, the button **[Preview}]** is activated.
9. To see the MDX statement that is generated in the background, click the **[Show MDX]** link at the top of the editor. 