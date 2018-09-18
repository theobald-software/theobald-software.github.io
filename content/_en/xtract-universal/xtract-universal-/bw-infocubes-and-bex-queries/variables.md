---
layout: page
title: Variables
description: Variables
product: xtract-universal
parent: bw-infocubes-and-bex-queries
permalink: /:collection/:path
weight: 3	
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=variables
---

Use the *Variables* link to enter values for BEx Query variables. 

![Define-Data-Source-for-Cube](/img/content/Define-Data-Source-for-Cube.png){:class="img-responsive"}

Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields are enabled or disabled. All kinds of variables can be edited and entered with the help of the variable editor shown below. If the BEx variable is of type complex selection or allows multiple values please use the Edit link to open an additional dialog.

As shown in the screenshot, instead of hard coding a value for the BEx variable you can use variables. This applies to regular extraction mode as well as [MDX extraction]() mode. Please add an @ right before the value entered in the input field to mark it as a variable. The variables will become part of the extraction's URL where you can assign values to them (see section on [User-Defined Variables]()).

![Cube-Variables](/img/content/Cube-Variables.png){:class="img-responsive"}

Variables in regular extraction mode (above) and MDX extraction mode (below).

![XU_MDX_Var_1](/img/content/XU_MDX_Var_1.png){:class="img-responsive"}

The following screenshot shows the additional dialog for entering complex selections for MAT03:

![Cube-Variables-Edit-Range](/img/content/Cube-Variables-Edit-Range.png){:class="img-responsive"}