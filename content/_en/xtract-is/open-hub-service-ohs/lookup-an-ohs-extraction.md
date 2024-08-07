---
ref: xi-open-hub-service-ohs-02
layout: page
title: Defining an OHS Extraction
description: Set up an OHS Extraction
product: xtract-is
parent: open-hub-service-ohs
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=look-up-an-ohs-extraction
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).


The following section shows how to use the OHS component.

### Look up an OHS Destination

1. Select an **Extraction type** in the main window of the component.<br>
If you use BW4Hana2.0, select **Table** as your extraction type and make sure to set the open hub destination type in SAP to *database table*.<br>
If you use BW7.x or below, select **Third party tool (legacy)** as your extraction type and set the open hub destination type in SAP to *third party tool*.<br>
![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
2. Click **[Lookup]** to look up an OHS destination. The window "OHS Lookup" opens.
3. Enter the name of an OHS destination in the field **OHS Destination** (1). Use wildcards (*) if needed.<br>
![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}
4. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select the destination of your choice from the displayed list (2).
5. Click **[OK]** to confirm.
6. If **Process Chain** is empty, enter an SAP process chain assigned to your OHS extraction, see [SAP Documentation: Display/Maintenance of Process Chain Attributes](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/4a/2cf30c6ed91c62e10000000a42189c/content.htm).
If **Process Chain** is left empty, the extraction fails.
7. Optional: Use the **Timeout** setting to set a maximum time period to wait for a notification from BW. If the time limit is reached, the extraction fails.
8. Check / edit the [settings](./settings) of the extraction.


{: .box-note }
**Note:** To use data sources, configure SAP BW, see [Customizing for OHS in BW](../sap-customizing/preparation-for-ohs-in-bw).