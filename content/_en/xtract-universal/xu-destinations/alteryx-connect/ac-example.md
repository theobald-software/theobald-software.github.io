---
layout: page
title: Example
description: Example
product: xtract-universal
parent: alteryx-connect
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=ac-example
---

In this example we will extract SAP Plants to Alteryx Connect. 

We have defined the following extraction:

![XU-SAPPlant-01](/img/content/XU-SAPPlant-01.png){:class="img-responsive"}

We are using the following Alteryx Connect Destination: 

![XU-Alteryx-Connect-Destination](/img/content/XU-Alteryx-Connect-Destination.png){:class="img-responsive"}

As described in the [Alteryx Connect Help](https://help.alteryx.com/developer/current/Connect/Examples/Examples.htm?TocPath=SDKs|Build%20Connect%20Loaders|Examples|_____0) we have defined two configuration files and uploaded them:
- Table configuration file: sapplants.xml
- Load job configuration file: load-theobald-sapplant.xml

In the destination settings we set the option to execute the job defined as xml file in the last step.<br> 
The extraction loads the data into a stage table called EXT_PLANTS. <br>
The load job maps between the stage table and the Connect Interface. <br>

![XU-Plants-Destination-Settings](/img/content/XU-Plants-Destination-Settings.png){:class="img-responsive"}

In Alteryx Connect we have created a Datasource Folder *SAP Plant Test*:

![AC-Datasource-Folder-Plant](/img/content/AC-Datasource-Folder-Plant.png){:class="img-responsive"}

After we execute the extraction we can check the stage in the Administration Console:

![AC-Stage-Plant](/img/content/AC-Stage-Plant.png){:class="img-responsive"}

We see also that the load job has been executed: 

![AC-Jobs-Plant](/img/content/AC-Jobs-Plant.png){:class="img-responsive"}

We can also check the log too: 

![AC-Log-Plant](/img/content/AC-Log-Plant.png){:class="img-responsive"}

Now we can check the Entries:

![AC-Datasource-Folder-Plant-Entries](/img/content/AC-Datasource-Folder-Plant-Entries.png){:class="img-responsive"}

You can also find the XML configuration files on [GitHub](https://github.com/KhoderElzein/theobaldsoftware/tree/master/Xtract%20Universal%20Alteryx%20Connect/SAP%20Plant).