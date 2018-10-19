---
ref: xu-qliksense-qlikview-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: qliksense-qlikview
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings3
---

When clicking on the *Destination* button you can make the following settings.


![XU_qlik_destination_settings](/img/content/XU_qlik_destination_settings.jpg){:class="img-responsive"}


**Date Conversion** 

**Convert invalid dates to** <br>
Every invalid value will be converted into this value. NULL is supported as value.<br> 
You should set this value to be used in case of non convertible date values.  <br>
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first. 

**Convert 00000000 to** <br>
Converts all SAP date 00000000 to the specified value. 

**Convert 9999XXXX to** <br>
Converts all SAP date 9999XXXX to the specified value.
