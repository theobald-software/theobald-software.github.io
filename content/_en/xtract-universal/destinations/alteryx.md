---
ref: destinations-20
layout: page
title: Alteryx
description: Alteryx
product: xtract-universal
parent: destinations
childidentifier: alteryx
permalink: /:collection/:path
weight: 20
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=alteryx
progressstate: 5
---

The following section describes the loading of the SAP extraction data from Alteryx.

## Requirements

The Xtract Universal Alteryx plugin for the Alteryx Designer is required to use the Alteryx destination. 

### Installation using the Xtract Universal Setup

The Xtract Universal setup installs the Xtract Universal Alteryx plugin if there is a valid Alteryx installation on the current system. <br>
If you install Alteryx after installing Xtract Universal, run the Xtract Universal setup again.

The Xtract Universal setup creates the following entries and extensions in the installation directory of that Alteryx installation:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

{: .box-note }
**Note:** Run the Xtract Universal setup on every machine that needs the Xtract Universal Alteryx  plugin. 
If there is more than one Alteryx installation on your system, the Xtract Universal setup only detects one installation. 

<!---
#### Multiple Alteryx Installation on the same Machine

If there is more than one Alteryx installation on your system, the Xtract Universal setup only detects one installation. 
Run the Xtract Universal setup for that one Alteryx installation.
The Xtract Universal setup creates the following entries and extensions in the installation directory of that Alteryx installation:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

To use the Xtract Universal Alteryx plugin, copy the files to the respective Alteryx installation directory that was not detected by the setup.
-->
<!---
{: .box-note }
**Note:** Should you have more than one Alteryx installation on your system, the setup will only detect one installation. 
The files for the Xtract Universal Alteryx plugin are only placed into the folders of that one installation.
For any other Alteryx installations on your system, the plugin must be installed manually.

### Manual installation (for a separate Alteryx system)

1. Copy the Alteryx folder `C:\Program Files\XtractUniversal\alteryx` from your local Xtract Universal installation directory to any directory on the server you want to install the plug-in. 
2. Run the `C:\Program Files\XtractUniversal\alteryx\AlteryxPluginSetup.exe` from a Windows command shell. 

The following commands are supported followed by a parameter pointing at the Alteryx installation directory: 
- */i* (for install) e.g., `C:\Program Files\XtractUniversal\alteryx>AlteryxPluginSetup /i "C:\Users\mywindowsuser\AppData\Local\Alteryx"`
- */u* (for uninstall)

{: .box-note }
**Note:** Should you encounter issues with the installation of the plugin, such as the plugin is not showing in Alteryx, send the setup.log file in `C:\Program Files\XtractUniversal\alteryx\setup.log` to [Theobald Support](https://support.theobald-software.com).
-->

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details
To use the Alteryx destination, no further settings have to be made.

![alteryx-create-destination](/img/content/alteryx-create-destination.PNG){:class="img-responsive"}


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![alteryx-configuration](/img/content/alteryx-configuration.PNG){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}


## Settings in Alteryx

### Using Xtract Universal Tool in Alteryx
1. Add the the Xtract Universal tool to your Alteryx workflow.
![XU_alteryx_plugin](/img/content/XU_alteryx_plugin.png){:class="img-responsive"}
2. Specify the following settings for the Xtract Universal tool in the Alteryx Designer:
- Connection
- Parameters

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
Mark the checkbox *Send SAP credentials*, if the *Require SAP Credentials to be explicitly supplied for execution* checkbox is also marked in the [SAP source](../introduction/sap-connection#authentication) settings in Xtract Universal.

The setting *Send SAP credentials* can be useful in self service scenarios. When each extraction needs to be executed using an individual user's SAP credentials instead of the globally defined credentials.

**Authenticate using current Windows user** <br>
Mark the checkbox *Authenticate using current Windows user* to use the Windows user that runs Alteryx for authentication.

### Parameters 
In the tab *Parameters* tab, the Xtract Universal tool can load the available parameters for the specified extraction. 

### Example 1: Overriding Custom Parameters with Static Values

In the following example, an extraction of SAP customers contains the *city* parameter defined in the **Custom Defined Parameters**. 
The *city* parameter can be overwritten with a static value (here: Stuttgart).
To override the parameter *city*, mark the checkbox **Override** and entering a new *value*.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters.PNG){:class="img-responsive"}

### Example 2: Overriding Custom Parameters with Dynamic Values
The Xtract Universal tool can also receive inputs, e.g., via the Input Data Tool.
The data input can be dynamically used to override the custom parameter in Xtract Universal.<br> 
In the following example, an extraction of SAP customers contains the *city* parameter defined in the **Custom Defined Parameters**. 
The parameter can be set dynamically.
To override the parameter *city*, mark the checkbox **Override** and the checkbox **Map**. Select an item out of the drop-down list in the field **value**.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters-override.PNG){:class="img-responsive"}

For more information on custom parameters go to [User-Defined Variables](../advanced-techniques/user-defined-variables).

If the connection to the specified Xtract Universal server is not established and no errors are shown, the Xtract Unversal tool has a tooltip in the following format: [Extraction] @ [Server].

![alteryx-full-workflow](/img/content/alteryx-full-workflow.PNG){:class="img-responsive"}

## Related Links
- [User-Defined Variables](../advanced-techniques/user-defined-variables)
