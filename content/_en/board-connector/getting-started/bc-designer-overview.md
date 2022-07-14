---
ref: bc-getting-started-06
layout: page
title: Designer - Main Window Overview
description: Additional Functions in Designer
product: board-connector
parent: getting-started
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /Board-Connector-EN/default.aspx?pageid=additional-functions-in-designer
progressstate: 5
---	


The Designer features different functionalities for data extractions. 

### Main Menu Bar

![main-window-menubar](/img/content/board/main-window-menubar.png){:class="img-responsive"}

#### Designer

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
![designer-icon](/img/content/icons/designer/reset-preferences.png) | Reset Preferences  | Reset connection settings to server | [Connecting Designer and Server](../getting-started/connect-designer-with-server)
![designer-icon](/img/content/icons/designer/disconnect.png) | Disconnect | Logging off the server | -
![designer-icon](/img/content/icons/designer/exit.png) | Exit | Exits the Designer | -


#### Extraction

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
![designer-icon](/img/content/icons/designer/add.png) | New  | Creating a new extraction | [Defining a Table Extraction](../getting-started/define-a-table-extraction)
![designer-icon](/img/content/icons/designer/edit.png) | Edit | Edit an existing extraction | -
![designer-icon](/img/content/icons/designer/delete.png) | Delete | Delete an existing extraction | -
![designer-icon](/img/content/icons/designer/clone.png) | Clone | Clone an existing extraction | -
![designer-icon](/img/content/icons/designer/source.png)| Source | Select an existing SAP source system | [SAP Connection](../introduction/sap-connection)
![designer-icon](/img/content/icons/designer/log1.png) | Log | Open extraction log | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
![designer-icon](/img/content/icons/designer/run.png)| Run  | Run a selected extraction | [Running an Extraction](../getting-started/run-an-extraction)
![designer-icon](/img/content/icons/designer/abort.png) | Abort | Abort a selected extraction | -
![designer-icon](/img/content/icons/designer/clear-result-cache.png) | Clear Result Cache | Clear extraction cache | [Cache results](../getting-started/general-settings#misc-tab)
![designer-icon](/img/content/icons/designer/refresh.png) | Refresh | Refreshing extraction status | -
![designer-icon](/img/content/icons/designer/filter.png) | Filter | Define filters or keywords |  [Define Keywords](../getting-started/general-settings#misc-tab)

#### Server

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
![designer-icon](/img/content/icons/designer/log1.png) | Logs  | Open server logs | [Server Logging](../logging/logging-access-via-designer#server-logs-run)
![designer-icon](/img/content/icons/designer/settings.png) | Settings | Open server settings | [Server Settings](../server/server-settings)
![designer-icon](/img/content/icons/designer/source.png) | Manage Sources | Edit connection to source system | [SAP Connection](../introduction/sap-connection)

#### Security

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
![designer-icon](/img/content/icons/designer/user-password.png) | Set User Password  | Set or change user password  | [User Managements](../security/user-management#user)
![designer-icon](/img/content/icons/designer/user.png) | Manage Users | Manage user groups | [User Groups](../security/user-management#user-groups)

#### Help

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
![designer-icon](/img/content/icons/designer/eng.png)| Online Help (EN) | Open the English Online Help| <!-----> - <!-----> 
![designer-icon](/img/content/icons/designer/de.png) | Online Help (DE) | Open the German Online Help | -
![designer-icon](/img/content/icons/designer/support.png) | Submit Support Ticket | Open the Ticket Portal | [Helpdesk](https://support.theobald-software.com/helpdesk/User/Register)
![designer-icon](/img/content/icons/designer/support-client.png) | Support Client | Direct support | [TeamViewer Client](https://get.teamviewer.com/theobaldsoftware)
![designer-icon](/img/content/icons/designer/info.png) | Info | Product information | [Info window](../introduction/license#about-xtract-universal---info-window)
![designer-icon](/img/content/icons/designer/version-history.png) | Version History | List of recent software changes | [Version History](https://kb.theobald-software.com/version-history)

### GUI Buttons

![main-window-guibuttons](/img/content/board/main-window-guibuttons.png){:class="img-responsive"}

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
![designer-icon](/img/content/icons/designer/add.png) | New | Creating a new extraction | [Defining a Table Extraction](../getting-started/define-a-table-extraction)
![designer-icon](/img/content/icons/designer/edit.png) | Edit |  Edit existing extraction | -
![designer-icon](/img/content/icons/designer/delete.png) | Delete |  Delete existing extraction  | -
![designer-icon](/img/content/icons/designer/clone.png) | Clone |  Clone existing extraction  | - 
![designer-icon](/img/content/icons/designer/refresh.png) | Refresh | Update of the extraction status  | -
![designer-icon](/img/content/icons/designer/filter.png) | Filter |  Define filters or keywords | [Define Keywords](../getting-started/general-settings#misc-tab)
![designer-icon](/img/content/icons/designer/source.png) | Source|  Select existing SAP source system  | [SAP Connection](../introduction/sap-connection)
![designer-icon](/img/content/icons/designer/log1.png) | Log | Open extraction log  | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
![designer-icon](/img/content/icons/designer/run.png) | Run  | Run a selected extraction  | [Running an Extraction](../getting-started/run-an-extraction)


### List of Extractions

![main-window-extractionlist](/img/content/board/main-window-extractionlist.png){:class="img-responsive"}

List of all extractions divided by name, type, modification and creation date etc. <br>

{: .box-tip }
**Tip:** You can enter a filter value for the extraction name. Wildcards (*) are not supported. <br> 
More extensive filter options are available via the [Filter](../advanced-techniques/regular-expressions) button in the [GUI Buttons](#gui-buttons) section.

{: .box-tip }
**Tip:** To adjust the settings of multiple extractions at once, select multiple extractions using **[CTRL]+[left mouse button]**.<br>
You can now adjust the **[Source]** settings in the [GUI Buttons](#gui-buttons) for all selected extractions.

**Double Clicking:** Double-clicking an extraction works as a shortcut to the **[Edit]** button. <br>
**Right-clicking:** Right-clicking an extraction in the list opens the following menu:<br>

Icon <img width=0/>| Menu Item <img width=70/>|Description <img width=200/>| Details<img width=200/>
-----|------------ | ------------ | -------------
![designer-icon](/img/content/icons/designer/edit.png) | Edit | Edit an existing extraction | -
![designer-icon](/img/content/icons/designer/delete.png) | Delete | Delete an existing extraction | -
![designer-icon](/img/content/icons/designer/clone.png) | Clone | Clone an existing extraction | -
![designer-icon](/img/content/icons/designer/log1.png) | Log | Open extraction log | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
![designer-icon](/img/content/icons/designer/source.png) | Source settings| Select an existing SAP source system | -
![designer-icon](/img/content/icons/designer/run.png) | Run  | Run a selected extraction | [Running an Extraction](../getting-started/run-an-extraction)
![designer-icon](/img/content/icons/designer/run-in-browser.png) | Run in browser | Run a selected extraction in the default web browser | - 
![designer-icon](/img/content/icons/designer/abort.png) | Abort | Abort a selected extraction | -


### Status Bar 

![main-window-footer](/img/content/board/main-window-footer.png){:class="img-responsive"}

The status bar contains information about: 
- Credentials
- Authentication method
- Access rights
- License type and validity period
- Connected server
- Connected client

