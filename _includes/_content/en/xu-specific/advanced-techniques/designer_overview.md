
The main window of the Designer consists of three main sections:
- Main Menu Bar (1)
- GUI Buttons (2)
- List of Extractions (3)
- Status bar (4)

### Main Menu Bar (1)

#### Designer

![menueleiste_designer](/img/content/xu/menueleiste_designer.png){:class="img-responsive"}

Menu Item |Description | Details
------------ | ------------ | -------------
Reset Preferences  | Reset connection settings to server | [Connecting Designer and Server](../getting-started/connect-designer-with-server)
Disconnect | Logging off the server | -
Exit | Exits the Designer | -

#### Extraction

![menueleiste_extraction](/img/content/xu/menueleiste_extraction.png){:class="img-responsive"}

Menu Item | Description | Details
------------ | ------------ | -------------
New  | Creating a new extraction | [Defining a Table Extraction](../getting-started/define-a-table-extraction)
Edit | Edit an existing extraction | -
Delete | Delete an existing extraction | -
Clone | Clone an existing extraction | -
Source | Select an existing SAP source system | -
Destination (Xtract Universal only)| Select a destination | [Destinations](https://help.theobald-software.com/en/xtract-universal/destinations)
Log | Open extraction log | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
Run  | Run a selected extraction | [Running an Extraction](../getting-started/run-an-extraction)
Abort | Abort a selected extraction | -
Clear Result Cache | Clear extraction cache | [Cache results](../getting-started/general-settings#misc-tab)
Refresh | Refreshing extraction status | -
Filter | Define filters or keywords |  [Define Keywords](../getting-started/general-settings#misc-tab)

#### Server

![menueleiste_server](/img/content/xu/menueleiste_server.png){:class="img-responsive"}

Menu Item | Description | Details
------------ | ------------ | -------------
Logs  | Open server logs | [Server Logging](../logging/logging-access-via-designer#server-logs-run)
Settings | Open server settings | [Server Settings](../server/server-settings)
Manage Sources | Edit connection to source system | [SAP Connection](../introduction/sap-connection)
Manage Destinations (Xtract Universal only) | Edit or delete destinations | [Manage Destinations](https://help.theobald-software.com/en/xtract-universal/destinations/managing-destinations).

#### Security

![menueleiste_security](/img/content/xu/menueleiste_security.png){:class="img-responsive"}

Menu Item | Description  | Details
------------ | ------------ | -------------
Set User Password  | Set or change user password  | [User Managements](../security/user-management#user)
Manage Users | Manage user groups | [User Groups](../security/user-management#user-groups)

#### Help

![menueleiste_help](/img/content/xu/menueleiste_help.png){:class="img-responsive"}

Menu Item | Description | Details
------------ | ------------ | -------------
Online Help (EN) | <!-----> - <!-----> | <!-----> - <!-----> 
Online Help (DE) | - | -
Submit Support Ticket | - | [Helpdesk](https://support.theobald-software.com/helpdesk/User/Register)
Support Client | Direct support | [TeamViewer Client](https://get.teamviewer.com/theobaldsoftware)
Info | Product information | [Info window](../introduction/license#about-xtract-universal---info-window)
Version History | - | [Version History](https://kb.theobald-software.com/version-history)

### GUI Buttons (2)

Buttons | Description 
------------ | ------------ 
New | Creating a new extraction 
Edit |  Edit existing extraction |
Delete |  Delete existing extraction  |
Clone |  Clone existing extraction  |
Refresh | Update of the extraction status  |
Filter |  Define filters or keywords |
Source|  Select existing SAP source system  |
Destination (Xtract Universal only) | Select destination  |
Log | Open extraction log  |
Run  | Run a selected extraction  | 


### List of Extractions (3)
List of all extractions divided by name, type, modification and creation date etc. <br>

**Filter**<br>
You can enter a filter value for the extraction name, wildcard characters are not supported. <br> 
More extensive filter options are available via the [Filter](../advanced-techniques/regular-expressions) button in the [GUI Buttons (2)](#gui-buttons-2) section. 

**Multiple selection**<br>
To adjust the settings of multiple extractions at once, select multiple extractions using **[CTRL]+[left mouse button]**.<br>
You can now adjust the **[Destination]** and **[Source]** settings in [GUI Buttons (2)](#gui-buttons-2) for all selected extractions.

**Double click**<br>
Double-clicking an extraction works as a shortcut to the **[Edit]** button. <br>

**Right click**<br>
Right-clicking an extraction in the list opens the following menu:

![menu_list_of_extractions](/img/content/xu/menu_list_of_extractions.png){:class="img-responsive"}

Menu Item | Description | Details
------------ | ------------ | -------------
Edit | Edit an existing extraction | -
Delete | Delete an existing extraction | -
Clone | Clone an existing extraction | -
Log | Open extraction log | [Extraction Logging](../logging/logging-access-via-designer#extraction-logs)
Source settings| Select an existing SAP source system | -
Destination settings(Xtract Universal only)| Select a destination | [Destinations](https://help.theobald-software.com/en/xtract-universal/destinations)
Run  | Run a selected extraction | [Running an Extraction](../getting-started/run-an-extraction)
Run in browser | Run a selected extraction in the default web browser | - 
Run in xu.exe | Run a selected extraction in the command-line tool xu.exe | - 
Abort | Abort a selected extraction | -


### Status Bar (4)
Status bar contains information about authentication method, connected server, license with validity period, etc.


*****
### Related Links
- [Server Settings](../server)



