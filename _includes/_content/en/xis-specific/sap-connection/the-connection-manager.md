### Connecting to SAP
Every Xtract IS component needs a connection manager to establish access to the SAP system. 

{: .box-warning}
**Warning!** **Missing Authorization**
To establish a connection to SAP the access to general authority objects (RFC) must be available.
Make sure to gain access to the general authority objects. For more information, see the knowledge base article on [SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

1. To create a new connection manager right-click in the connection managers within "Solution Explorer" area and choose **New connection Manager**. 
The window "Add SSIS Connection Manager" opens.
![Connection-Manager-01](/img/content/Connection-Manager-01.png){:class="img-responsive"}
2. Select the XTRACT Connection Manager from the list and click **[Add]**. Xtract IS Connection manager appears under the tab *Connection Managers*.
3. To configure the SAP connection, double-click the Xtract IS Connection Manager icon. The window "Xtract IS Connection Manager" opens.
![Connection-Manager](/img/content/Connection-Manager.png){:class="img-responsive" }
4. Fill in all the necessary data (*Client*, *Username*, *Password* ect. see below). 
5. Click **[Test connection]** to check the connection to your SAP system. <br>
If the connection test is successful, the Xtract IS component is ready to use.

### SAP source system (1)
There are two possibilities to connect to an SAP source system:

1. Use Single Application Server
- **Application server**:  host name or IP address of the application server (Property Host) 
- **Instance number**: a two-digit number between 00 und 99 (Property SystemNumber)

2. Use Load Balancing Server (message server)
- **System ID**: three-digit System ID (Property SID e.g.,  MSS) 
- **Message Server**: name or IP address of the message server (Property MessageServer) 
- **Logon group**: property LogonGroup, usually *PUBLIC*
See also SAP online help: [Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).

#### Accessing via SAP router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. <br>
Example:<br>
If the application server is "hamlet" and the router string is "/H/lear.theobald-software.com/H/", set the host property to "/H/lear.theobald-software.com/H/hamlet".

See also SAP online help: [SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).

{: .box-tip }
**Tip:** Values to fill out the forms can be found in the SAP Logon Pad in the *Properties* or acquired from SAP Basis team.


### Trace Directory (2)

You can log debug information and save it locally. Fill the **Trace directory** field with a local path to a folder, where you want to save the debug information.
See further details in the knowledge base article [*Trace Directory*](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary e.g., upon request of the support team.

### RFC libraries (3)
The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system.  
There are two options for using RFC libraries in Xtract IS:
- Use classic RFC library (librfc32.dll)
- Use NetWeaver RFC libraries (sapnwrfc.dll)

{: .box-tip }
**Recommendation:** Use the not supported librfc32.dll for some extraction types, e.g., DeltaQ as runs more stable than the NetWeaver RFC library.

See additional information on SAP libraries on the [SAP Help Site - RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm) <br>

SAP has stopped [supporting librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/). 

{: .box-note }
**Note:** When using the NetWeaver RFC library with DeltaQ or OHS extractions, the RFC destination in SM59 must be set to Unicode. 

### Additions (4)
In the upper part of the "Xtract IS Connection Manager" click **Additions** (4). The window "Xtract IS Connection Manager Additions" opens.
![XIS_ConnectionManager_AdditionsTab](/img/content/XIS_ConnectionManager_AdditionsTab.png){:class="img-responsive"}

#### SNC
In the window "Xtract IS Connection Manager Additions" you can find several SNC (Secure Network Connection) options.
For more details see [SAP Connection with SNC](./sap-connection-with-snc)<br>

#### Expert Options

Since 09.2017, SAP connection parameters are no longer stored as *Connection Strings*, but as *Properties*.<br>
There is a *Property* for each component of the *Connection string*.

- **Legacy storage mode (connection string):**<br>
SAP connection parameters are set via a single *Connection string* (default in XIS versions pre 09.2017).
You can either use *Connection properties* or a *Connection string*, not both.
*Connection string* does not support [sensitive environment variable](./sensitive-environment-variable-in-ssis-catalog).
- **Obfuscate Password:**<br>
Masks the SAP connection password. This option is switched on per default when activating **Legacy storage mode**.
- **Internal Table Function:**<br>
States the function module used for Xtract IS' internal communication with SAP, e.g., retrieving metadata. 
To change the selected function module, type the name of function module manually. 
Using another function module can be necessary when adding permission restrictions within the functional module.
- **AttachesSapGui:**<br>
This option is only acessible in the *Properties* of the Connection Manager and not in the GUI.
There are Reports and BAPIs that require an installed SAP GUI even when they are called remotely. 
In this case, set the *AttachesSapGui* property in the *Expert Options* of the Connection Manager to *True*.

{: .box-warning }
**Warning! 'sapgui' start failed.**
Sometimes SAP opens a pop-up window that requires input when running extractions.
To deactivate pop-up windows, open the SAP GUI Logon pad and navigate to **Options... > Security Settings**. 
Click the **[Open Security Configuration]** button and select *Allow* as the **Default Action**.
Apply the changes and close the SAP GUI Logon pad.

### Assigning a Connection Manager to an Xtract Component

Xtract Connection Managers can be assigned to an Xtract component automatically or manually.

#### Automatically Assign a Connection Manager

1. Create a Connection Manager as shown in [Connecting to SAP](./the-connection-manager#connecting-to-sap).
2. Drag & drop an Xtract component e.g., **Xtract Table**, **Xtract BAPI**, etc.  
3. Double-click the Xtract component to automatically assign a Connection Manager. The settings window of the component opens. 

{: .box-note }
**Note:** If there are multiple Connection Managers available, we recommend using a manual assignment. 

#### Manually Assign a Connection Manager

1. Create a Connection Manager as shown in [Connecting to SAP](./the-connection-manager#connecting-to-sap).
2. Drag & drop the Xtract component e.g., **Xtract Table**, **Xtract BAPI**, etc.  
3. Select the Xtract component. Under *Properties* Open *Show Advanced Editor* (1). The window "Advanced Editor" opens (2). 
4. Select a Connection Manager from the drop-down-menu (3). 
5. Confirm your selection with **[OK]** (4).

![assign-connection-manager](/img/content/xis/assign-connection-manager.png)