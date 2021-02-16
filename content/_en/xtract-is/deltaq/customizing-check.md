---
ref: xi-q-delta-02
layout: page
title: Customizing Check
description: Customizing Check
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=customizing-check
---
### Settings

1. Open the DeltaQ Extraction.
2. Fill in the fields on the top right. Search for the settings from the drop-down menu by using the **[magnifying glass symbol]**. The settings are defined in [SAP Customizing/DeltaQ Customizing](../sap-customizing/customizing-for-deltaq).


![deltaq-tech-settings](/img/content/deltaq-tech-settings.png){:class="img-responsive"}

**Log. Destination**<br>is the logical RFC target system. See step 1 at [SAP Customizing/DeltaQ Customizing](../sap-customizing/customizing-for-deltaq).

**Gateway Host**<br>is the Name (or IP address) of your SAP system. 
Make sure that the Gateway Host is the same as in your SAP Connection.

**Gateway Service**<br>is generally *sapgwNN*, where NN is the instance number of your SAP system. NN is a number between *00* and *99*.
NN must have the same value as the *System No* field in your SAP connection or the instance number in your SAP logon. 

**Program ID**<br>is the name of the registered RFC server. See step 4 at [SAP Customizing/DeltaQ Customizing](../sap-customizing/customizing-for-deltaq)..

The values **Gateway Host** and **Gateway Service** corresponds to the following SAP connection.

![sap-conn-app-ecc](/img/content/sap-conn-app-ecc.png){:class="img-responsive"}

### Check Customizing

3. Click on the link *Customizing Check* to validate the DeltaQ Customizing on the SAP system.
Make sure that all lines are green. 

![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}
