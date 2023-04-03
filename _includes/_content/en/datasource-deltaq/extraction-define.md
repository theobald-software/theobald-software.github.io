### Look Up Extractors

1. Click **[Search]** (binoculars icon) in the main window of the component. The window “Look Up OLTP Source” opens.
![search-ds-mat-attr](/img/content/search-ds-mat-attr2.png){:class="img-responsive"}
2. Enter a name or description of a *DataSource* (1). Use wildcards ( * ), if needed.
3. Click **[Search]** (magnifying glass icon) (2) and select the extractor of your choice from the displayed list (3).
The following example shows the download of material master data from the DataSource *0MATERIAL_ATTR*.
4. Click **[OK]** (4) to confirm your selection.

The application now returns to the main window of the component.

{: .box-note }
**Note:** To find DataSources, they have to be activated in SAP, see [Activating DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System).

### Defining a DeltaQ Extraction

After selecting an Extractor, follow the steps below:

1. Choose an *Update Mode* (5).<br>
**Full Update** requests all data that meets the selection criteria you set. To get a real **Delta** procedure running, Delta first has to be initialized, see [Delta](./datasource-delta).<br>
For more information on available update modes, see [Update Mode](./update-mode).
2. Check the boxes of the columns you want to extract (6).<br>
![Deltaq-Define-Data-Source-Filled](/img/content/Deltaq-Define-Data-Source-Filled.png){:class="img-responsive"}
3. Optional: If applicable, add filters in the **Selection** column to filter your data (7).
For more information on filtering, see [Datasource Parameters](./datasource-parameters).
4. Validate your settings by running a test extraction.
5. If the validation finished without errors klick on **[Activate]** to activate this extraction in SAP.<br> 
After successful activation, the corresponding status messages appear in the course of a few seconds:<br>
![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}<br>
![Deltaq-Generation-Successfull-Info](/img/content/Deltaq-Generation-Successfull-Info.png){:class="img-responsive"}

{: .box-note } 
**Note:** The activation must only be done for **Delta**, **Full** or **Init** modes.
Don't make any activation for the **Delta Update** mode. 
Delete the old activation before starting a new one.


### Variables

**Variables** can be used for the following settings:
* **Log. Destination**, 
* **Gateway Host**,
* **Gateway Service**,
* **Program ID**. 

**Update Mode** and **Selection** filters can be controlled via a variable too, see [Update Mode](./update-mode) and [Datasource Parameters](./datasource-parameters).

*****
#### Related Links
- [DeltaQ Troubleshooting Guide](https://support.theobald-software.com/helpdesk/KB/View/14424-deltaq-troubleshooting-guide). 
