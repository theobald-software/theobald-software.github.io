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
progressstate: 5
---

### Function
The update mode allows delta update meaning that only added or changed data is extracted, instead of a full load.

### Settings

In the main window "Extract SAP DataSources and Extractors" select the **Update-Mode** from the drop-down menu.
![Update-Mode2](/img/content/deltaq-extraction-seetings2.png ){:class="img-responsive"}


| Letter |  Desgination   | Description |
| :------: |:--- | :--- |
| F | Full  | Extracts all data that match the set selection criteria.|
| D | Delta Update | Only extracts data added or changed on the SAP system since the last delta request. Initialize the delta process before running a delta update. To prevent errors, aborts and gaps in your data during a delta run, run the next extraction in the update mode **Repeat**. |
| C | Delta Initialisation | Initialiazies the delta process and extracts all data in full mode simultaneously. When re-initilizing a delta process, first delete any exsiting Inits by clicking **[Request Maintenance]** in the DeltaQ extraction settings.|
| R | Repeat  | Repeats the last delta run and updates and any delta data accumulated since the last run. Deletes any data from the last (unsuccesful) delta update before running a repeat. You can run a repeate multiple times.|
| S | Delta Init (without data)   | Initiliazies the delta process without extracting any data from the SAP Datasource. The result of the **Delta inits** is a so called **[Request Maintenance]** on the SAP side. When re-initilizeing a delta process, first delete any exsiting Inits by clicking **[Request Maintenance]** in the DeltaQ extraction settings.|
| I | Non-cumulative Init    |  Relevant for DataSources such as *2LIS_03_BX*.  |
| A | Activate (don't extract)  | Activates a DataSource similar to clicking **[Activate]**, but is more practical when activating all DataSources in batch. **[Activate]** is an alternative to **[Automatic Synchronization]**.  No data is extracted. |
| V | **[Xtract IS only]** SSIS Variable; Deprecated, see [Variables](../bw-cube/variables) |  If **V** is selected, a variable name needs to be entered in the [DeltaQ settings](https://help.theobald-software.com/en/xtract-is/deltaq/settings). The same SSIS variable needs to be created in SSIS and assigned a value. The following values are possible: F, D, C, R, S, I and A. |


