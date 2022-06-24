---
ref: xu-getting-started-05
layout: page
title: Designer - Main Window Overview
description: Additional Functions in Designer
product: xtract-universal
parent: getting-started
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=additional-functions-in-designer
progessstate: 5
---

The Designer features different functionalities for data extractions. 

### Main Menu Bar

![main-window-menubar](/img/content/xu/main-window-menubar.png){:class="img-responsive"}

#### Designer

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
 - | Reset Preferences  | Reset connection settings to server | [Connecting Designer and Server](../getting-started/connect-designer-with-server)
 - | Disconnect | Logging off the server | -
 - | Exit | Exits the Designer | -


#### Extraction

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
 - | New  | Creating a new extraction | [Defining a Table Extraction](../getting-started/define-a-table-extraction)
 - | Edit | Edit an existing extraction | -
 - | Delete | Delete an existing extraction | -
 - | Clone | Clone an existing extraction | -
 - | Source | Select an existing SAP source system | [SAP Connection](../introduction/sap-connection)
 - | Destination | Select a destination | [Destinations](https://help.theobald-software.com/en/xtract-universal/destinations)
 - | Log | Open extraction log | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
 - | Run  | Run a selected extraction | [Running an Extraction](../getting-started/run-an-extraction)
 - | Abort | Abort a selected extraction | -
 - | Clear Result Cache | Clear extraction cache | [Cache results](../getting-started/general-settings#misc-tab)
 - | Refresh | Refreshing extraction status | -
 - | Filter | Define filters or keywords |  [Define Keywords](../getting-started/general-settings#misc-tab)

#### Server

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
 - | Logs  | Open server logs | [Server Logging](../logging/logging-access-via-designer#server-logs-run)
 - | Settings | Open server settings | [Server Settings](../server/server-settings)
 - | Manage Sources | Edit connection to source system | [SAP Connection](../introduction/sap-connection)
 - | Manage Destinations | Edit or delete destinations | [Manage Destinations](https://help.theobald-software.com/en/xtract-universal/destinations/managing-destinations).

#### Security

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
 - | Set User Password  | Set or change user password  | [User Managements](../security/user-management#user)
 - | Manage Users | Manage user groups | [User Groups](../security/user-management#user-groups)

#### Help

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
 - | Online Help (EN) | <!-----> - <!-----> | <!-----> - <!-----> 
 - | Online Help (DE) | - | -
 - | Submit Support Ticket | - | [Helpdesk](https://support.theobald-software.com/helpdesk/User/Register)
 - | Support Client | Direct support | [TeamViewer Client](https://get.teamviewer.com/theobaldsoftware)
 - | Info | Product information | [Info window](../introduction/license#about-xtract-universal---info-window)
 - | Version History | - | [Version History](https://kb.theobald-software.com/version-history)

### GUI Buttons

![main-window-guibuttons](/img/content/xu/main-window-guibuttons.png){:class="img-responsive"}

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
 - | New | Creating a new extraction | [Defining a Table Extraction](../getting-started/define-a-table-extraction)
 - | Edit |  Edit existing extraction | -
 - | Delete |  Delete existing extraction  | -
 - | Clone |  Clone existing extraction  | - 
 - | Refresh | Update of the extraction status  | -
 - | Filter |  Define filters or keywords | [Define Keywords](../getting-started/general-settings#misc-tab)
 - | Source|  Select existing SAP source system  | [SAP Connection](../introduction/sap-connection)
 - | Destination | Select destination  | [Destinations](https://help.theobald-software.com/en/xtract-universal/destinations)
 - | Log | Open extraction log  | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
 - | Run  | Run a selected extraction  | [Running an Extraction](../getting-started/run-an-extraction)


### List of Extractions

![main-window-extractionlist](/img/content/xu/main-window-extractionlist.png){:class="img-responsive"}

List of all extractions divided by name, type, modification and creation date etc. <br>

{: .box-tip }
**Tip:** You can enter a filter value for the extraction name. Wildcards (*) are not supported. <br> 
More extensive filter options are available via the [Filter](../advanced-techniques/regular-expressions) button in the [GUI Buttons](#gui-buttons) section.

{: .box-tip }
**Tip:** To adjust the settings of multiple extractions at once, select multiple extractions using **[CTRL]+[left mouse button]**.<br>
You can now adjust the **[Destination]** and **[Source]** settings in [GUI Buttons](#gui-buttons) for all selected extractions.

**Double Clicking:** Double-clicking an extraction works as a shortcut to the **[Edit]** button. <br>
**Right-clicking:** Right-clicking an extraction in the list opens the following menu:<br>

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
 - | Edit | Edit an existing extraction | -
 - | Delete | Delete an existing extraction | -
 - | Clone | Clone an existing extraction | -
 - | Log | Open extraction log | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
 - | Source settings| Select an existing SAP source system | -
 - | Destination settings| Select a destination | [Destinations](https://help.theobald-software.com/en/xtract-universal/destinations)
 - | Run  | Run a selected extraction | [Running an Extraction](../getting-started/run-an-extraction)
 - | Run in browser | Run a selected extraction in the default web browser | - 
 - | Run in xu.exe | Run a selected extraction in the command-line tool xu.exe | - 
 - | Abort | Abort a selected extraction | -


### Status Bar 

![main-window-footer](/img/content/xu/main-window-footer.png){:class="img-responsive"}

Status bar contains information about: 
- credentials
- authentication method
- access rights
- license type and validity period
- connected server
- connected client



*****
### Related Links
- [Server Settings](../server)
