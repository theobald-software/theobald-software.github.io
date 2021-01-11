---
ref: xu-alteryx-04
layout: page
title: Settings (Alteryx)
description: Settings (Alteryx)
product: xtract-universal
parent: alteryx
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings-alteryx-plugin-en-
progressstate: 5
---

### Using Xtract Universal Tool in Alteryx
1. Add the the Xtract Universal tool to your Alteryx workflow.
![XU_alteryx_plugin](/img/content/XU_alteryx_plugin.png){:class="img-responsive"}
2. Specify the following settings for the Xtract Universal tool in the Alteryx Designer:
- Connection (1)
- Parameters (2)

### Connection

**Server**<br>
The name, IP or domain and port to access the server within the network. <br>
Format: [Server]:[Port].

**Extraction**<br>
The name of the desired extraction. When clicking the arrow next to the text area, all available extractions are loaded into a drop-down menu. 
Only the extractions with Alteryx as destination type are displayed. You can define the destination type in the Xtract Universal Designer.

{: .box-note }
**Note:** Make sure the Xtract Universal server is running.

**Send SAP credentials** (3) <br>
Checkbox *Send SAP credentials* is only available, if the *Require SAP Credentials to be explicitly supplied for execution* checkbox is marked in the [SAP source](../../introduction/sap-connection#authentication) settings in Xtract Universal.
The setting *Send SAP credentials* can be useful in self service scenarios. When each extraction needs to be executed using an individual user's SAP credentials instead of the globally defined credentials.


### Parameters 
In the tab *Parameters* tab, the Xtract Universal tool can load the available parameters for the specified extraction. 

### Example 1: Overriding Custom Parameters with Static Values

In the given example, an extraction of SAP customers contains the *city* parameter defined in the **Custom Defined Parameters**. The *city* parameter needs to be overwritten with a static value (here: Stuttgart).
To override the parameter *city*, mark the checkbox **Override** and entering a new *value*.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters.PNG){:class="img-responsive"}

### Example 2: Overriding Custom Parameters with Dynamic Values
The Xtract Universal tool can also receive inputs, e.g., via the Input Data Tool.
The data input can be dynamically used to override the custom parameter in Xtract Universal.<br> 
In the given example there is an extraction of SAP customers with the city parameter to be dynamically parametrized.
To override the parameter *city*, mark the checkbox **Override** and the checkbox **Map**. Select an item out of the drop-down list in the field **value**.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters-override.PNG){:class="img-responsive"}

For more information on custom parameters go to [User-Defined Variables](../../advanced-techniques/user-defined-variables).

If the connection to the specified Xtract Universal server is not established and no errors are shown, the Xtract Unversal tool has a tooltip in the following format: [Extraction] @ [Server].

![alteryx-full-workflow](/img/content/alteryx-full-workflow.PNG){:class="img-responsive"}