---
ref: xi-q-delta-06
layout: page
title: Update Mode
description: Update Mode
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=update_mode
---

**Update Mode**<br>
DeltaQ offers the following Update Modes:

**F - Full**<br>
Full mode extracts all data which correspond to any selection criteria that may have been set.

**D - Delta Update**<br>
Delta Update mode only extracts data, that has been added or changed on the SAP system since the last delta request. 
Before running a delta update, the delta process needs to be initialized 
Should you encounter unexpected errors or aborts during a delta run, you are highly adviced to run the next extraction in update mode Repeat. Otherwise you might have gaps in your data.

**C - Delta Initialisation**<br>
In order to run delta extractions, you firts need to initialize the delta process. This update mode initiliazies the delta process and extracts all data in full mode at the same time.
Should you want to re-initilize a delta process, it's recommende to delete any exsiting Inits by clicking on the "Request Maintenance" button in the DeltaQ Extraction Settings.

**S - Delta Init (without data)**<br>
In order to run delta extractions, you firts need to initialize the delta process. This update mode only initiliazies the delta process but does not extract any data.
Should you want to re-initilize a delta process, it's recommende to delete any exsiting Inits by clicking on the "Request Maintenance" button in the DeltaQ Extraction Settings.

**I - Non-cumulative Init**<br>
Relevant for DataSources like 2LIS_03_BX

**R - Repeat**<br>
If an error occurs during a delta update, you are advised to run the following extraction using the Repeat mode.
This mode will repeat the last delta update and any delta data, that has accumulated since then.
Before running a repeat, you may want to delete any data from the last (unsuccesful) delta update, that may have found its way to your destination table.
You can run a Repeate more than once.

**A - Activate (don't extract)**<br>
This mode only activates a DataSource, just like manually clicking on the "Activate" button does.  No data is being extracted.
You can use this mode for instance, for activating all DataSources in batch. In this way, this mode is an alternative to the DeltaQ setting "Automatic Synchronization".
