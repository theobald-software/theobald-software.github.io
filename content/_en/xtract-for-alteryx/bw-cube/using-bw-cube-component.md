---
ref: xfa-bw-cube-01
layout: page
title: Using BW Cube component
description: Using BW Cube component
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: en_GB
---

The BW Cube component is used to extract data from BW InfoProviders (e.g. Cubes) directly or from BW Queries, which in turn can be based on all possible InfoProviders. <br>
A common approach would be to build the query so that it fits well into the architecture. <br>
Click on New Extraction to search for either a Query or a BW Cube / InfoProvider directly in the corresponding search field. Confirm with OK.


![Designer](/img/content/xfa/bwcube01.png){:class="img-responsive"}

### Selecting Measure (Key Figures), Dimensions and Properties

In the main dialog box, you see a tree on the left that represents the query (or InfoProvider). <br>
The first folder contains all the measures (key figures). <br>
All folders below it correspond to one dimension each, which contain the additional dimension properties. <br>
Select the key figures, dimensions, and properties you want to extract. <br>
On the right side you can see the output table. A click on Preview fills the output table with data from BW.<br>.

![Designer](/img/content/xfa/bwcube02.png){:class="img-responsive"}

### Selecting the units of the measures (key figures) 
Using the right mouse button on a key figure, you can select whether the unit is to be displayed or hided (show column unit / hide column unit). <br>

### Dimension Filter 
You can define a filter using the right mouse button on a dimension (Edit Filter). <br> 
If a filter is defined, a corresponding icon is displayed for the dimension.


- Single Values
Here you select from the list which values should be included in the filter. <br>
With the option **Exclue values from result set** these values can be excluded. 

- Value Ranges 
Here you can define one or more intervals, that can be included in the filter.<br>
With the option **Exclue values from result set** these values can be excluded. 
