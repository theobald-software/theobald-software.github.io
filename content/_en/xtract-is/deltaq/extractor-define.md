---
ref: xi-q-delta-03
layout: page
title: Define and extractor
description: Define and extractor
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=master-data-in-full-update
---

Place the DeltaQ component on your data flow task by dragging it from the toolbox with your mouse. Double-click the icon to open the editor.


**Step 1: Search for extractor**

Within the editor, you can look up a *DataSource* (OLTP Source) by clicking the binocular button. You can also use wildcards ( * ) in your search.

The following example shows the download of material master data from the DataSource 0MATERIAL_ATTR.

![search-ds-mat-attr](/img/content/search-ds-mat-attr.png){:class="img-responsive"}

**Step 2: Define and Check Customizing** 

Now set the logical target system and the technical settings for the RFC destination (as shown in section Customizing) on the top right.

Gateway Host is the name (or IP address of your SAP system). Be sure that the Gateway Host is the same as in your SAP Connection.
The Gateway Service is generally *sapgwNN*, where NN is the ID of your SAP system, i.e. a number between 00 andd 99.
See Customizing Check.
  
**Step 3: Set Update Mode**<br>
In our example, we will make a Full Update. A full update requests all data that meets the selection criteria you set.
To get a real Delta procedure running, Delta first has to be initialized. See Delta.

**Step 4: Select Columns**<br>

You also have to put a checkmark next to the columns you would like to extract. Your template should look like this when you're done:

![Deltaq-Define-Data-Source-Filled](/img/content/Deltaq-Define-Data-Source-Filled.jpg){:class="img-responsive"}

**Step 5: Activation**

If the validation finished without errors you can activate this extraction in SAP (click the Activate button). 
If activation is successful, the corresponding status messages will appear within the course of a few seconds:

![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}

![Deltaq-Generation-Successfull-Info](/img/content/Deltaq-Generation-Successfull-Info.png){:class="img-responsive"}

Once activated successfully, the extraction can be executed. 

The activation must be done only for the Delta Full or Init Mode.
If you had an old activation, please be sure to delete it (see Extraction Settings) before the new activation.
For the Delta Update Mode don't make any activation. 

**Variables** can be used for the following settings: Log. Destination, Gateway Host, Gateway Service and Program ID. 
The Update Mode can be controlled via a variable too. See Extraction Settings. 

**To set a Filter** see the section Datasource parameters.

For any Errors please refer to our [Troubleshooting DeltaQ](./miscellaneous).
