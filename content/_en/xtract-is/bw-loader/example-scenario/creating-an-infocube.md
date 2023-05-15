---
ref: xi-example-scenario-03
layout: page
title: Creating an InfoCube
description: Creating an InfoCube
product: xtract-is
parent: example-scenario
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=creating-an-infocube
---
Before we now discuss the last type of loading, the transaction data, we need an InfoCube into which the data can be loaded.
Create a new SSIS package, define an OleDB source in the Sales test table and link the pipeline with a BW Loader target.
Click the link *Create Cube* in the editor. The following window opens:.


![BWLoader-Create-InfoCube-01](/img/content/BWLoader-Create-InfoCube-01.png){:class="img-responsive"}
 Through the already linked pipeline, Xtract IS has the correct properties of the cube. One InfoObject for each element is necessary to create a cube.

OrderID was not in the system as an InfoObject up to now, which is why it should be created by clicking the *Create* link:

![BWLoader-Create-InfoCube-02](/img/content/BWLoader-Create-InfoCube-02.png){:class="img-responsive"}


Now only two key figures are needed: quantity and price. A fixed unit (ST for Stück, unit in German) is specified under quantity, and for price, a reference is made to the 0CURRENCY InfoObject:


![BWLoader-Create-InfoCube-03](/img/content/BWLoader-Create-InfoCube-03.png){:class="img-responsive"}

![BWLoader-Create-InfoCube-04](/img/content/BWLoader-Create-InfoCube-04.png){:class="img-responsive"}



The three remaining elements are defined through InfoObjects that already exist (ZPROD for product, 0CALDAY for the date and 0CURRENCY for the currency):


![BWLoader-Create-InfoCube-05](/img/content/BWLoader-Create-InfoCube-05.png){:class="img-responsive"}


We still need to create a new InfoSource of the *Transaction Data* type. It is set up just like the cube. Only in the price field we have to make an explicit reference to the currency column (*Unit Field* column):

![BWLoader-Create-InfoCube-06](/img/content/BWLoader-Create-InfoCube-06.png){:class="img-responsive"}


Xtract IS does not support the automatic creation of updating rules in the cube. These therefore have to be manually created. To do so, open the cube administration in the RSA1 transaction and then select *Environment* in the *menu -> Update Rules -> Create*. Select the InfoSource you just created and confirm with *Enter*. Save and activate the rule.