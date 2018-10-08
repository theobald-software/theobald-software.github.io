---
layout: page
title: Customizing Check
description: Customizing Check
product: xtract-is
parent: q-delta
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=customizing-check
---

Fill the fields on the top right for the logical target system and the technical settings for the RFC destination as defined in [DeltaQ Customizing](../sap-customizing/customizing-for-deltaq). 


![deltaq-tech-settings](/img/content/deltaq-tech-settings.png){:class="img-responsive"}

**Log. Destination** is the logical RFC target system (check step 1 in the DeltaQ Customizing).

**Gateway Host** is the Name (or IP address) of your SAP system of your SAP system. 
Be sure that the Gateway Host is the same as in your SAP Connection.

**Gateway Service** is generally *sapgwNN*, where NN is the instance number of your SAP system, i.e. a number between 00 andd 99.
NN must have the same value as the field System No in your SAP connection or instance number in your SAP Logon. 

**Program ID** is the name of the registered RFC server (check step 4 in the DeltaQ Customizing).

The values Gateway Host and Gateway Service corresponds to the following SAP connection.

![sap-conn-app-ecc](/img/content/sap-conn-app-ecc.png){:class="img-responsive"}

Now click on the *Customzing Check* link to validate the DeltaQ Customizing on the SAP system.
Be sure that all lines are green. 

![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}