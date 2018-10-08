---
layout: page
title: Settings in Qlik Sense
description: Settings in Qlik Sense
product: xtract-universal
parent: qliksense-qlikview
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings_in_qliksense
---

The dynamic load of data from a web file is deactivated in Qlik Sense per default.  
On the Qlik Sense help site you can find how to activate it. Do a search for 'Disabling standard mode' or check the following [link](https://help.qlik.com/en-US/sense/2.2/Subsystems/Hub/Content/LoadData/disable-standard-mode.htm). 

In Qlik Sense deactivate the Standard Mode in Qlik Management Console -> Engine Properties.<br> 
In Qlik Sense Desktop open the file C:\Users\{user}\Documents\Qlik\Sense\Settings.ini in a text editor. <br>Change StandardReload=1 to StandardReload=0. Save the file and restart Qlik Sense.