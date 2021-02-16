---
ref: xi-q-delta-03
layout: page
title: Defining an extractor
description: Defining an extractor
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=master-data-in-full-update
---

Place the DeltaQ component on your data flow task by dragging it from the toolbox with your mouse. Double-click the icon to open the editor.


### Step 1: Search for extractor

Within the editor "Look Up OLTP Source", search for **OLTP Source** (Data Source) by using the **[magnifying glass symbol]**. You can use wildcards (*), if needed.

The following example shows the download of material master data from the DataSource *0MATERIAL_ATTR*.

![search-ds-mat-attr](/img/content/search-ds-mat-attr.png){:class="img-responsive"}


### Step 2: Define and Check Customizing

Set the logical target system (**Log.Destination**) and the technical settings for the RFC destination, see at  [Customizing Check](./customizing-check).

**Gateway Host** is the name (or IP address of your SAP system). Make sure that the Gateway Host is the same as in your SAP Connection.<br>
**Gateway Service** is generally *sapgwNN*, where NN is the ID of your SAP system. NN is a number between 00 and 99.
  

### Step 3: Set Update Mode

**Full Update** requests all data that meets the selection criteria you set.<br>
To get a real **Delta** procedure running, Delta first has to be initialized. See at [Delta](./content-delta).<br>
To get an overview see at [Update Mode](./update-mode).


### Step 4: Select Columns

Tick the checkmarks next to the columns you would like to extract. See the following example:

![Deltaq-Define-Data-Source-Filled](/img/content/Deltaq-Define-Data-Source-Filled.png){:class="img-responsive"}


### Step 5: Activation

If the validation finished without errors klick on **[Activate]** to run this extraction in SAP.<br> 
After successful activation, the corresponding status messages appear in the course of a few seconds:

![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}

![Deltaq-Generation-Successfull-Info](/img/content/Deltaq-Generation-Successfull-Info.png){:class="img-responsive"}

Once activated successfully, the extraction can be executed. 

The activation must only be done for **Delta**, **Full** or **Init** modes.
Delete the old activation before starting a new one, see at **Extraction Settings**.
Don't make any activation for the **Delta Update** mode. 

### Variables and Filters

**Variables** can be used for the following settings:
* **Log. Destination**, 
* **Gateway Host**,
* **Gateway Service**,
* **Program ID**. 

The **Update Mode** can be controlled via a variable too, see at **Extraction Settings**.

**Filters** see at [Datasource Parameters](./datasource-parameters).

 
In case of errors, refer to the [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide). 
