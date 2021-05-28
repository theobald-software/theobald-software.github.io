### Step 1: Search for extractor (1)

Within the editor "Look Up OLTP Source", search for **OLTP Source** (Data Source) by using the **Search** (magnifying glass symbol). You can use wildcards (*), if needed.

The search dialoge "Look Up OLTP Source" opens.
![search-ds-mat-attr](/img/content/search-ds-mat-attr.png){:class="img-responsive"}

The following example shows the download of material master data from the DataSource *0MATERIAL_ATTR*.
![search-ds-mat-attr](/img/content/search-ds-mat-attr2.png){:class="img-responsive"}

### Step 2: Set Update Mode (2)

**Full Update** requests all data that meets the selection criteria you set. To get a real **Delta** procedure running, Delta first has to be initialized, see at [Delta](./datasource-delta).<br>
To get an overview which update modes are available, see at [Update Mode](./update-mode).

### Step 3: Select Columns

Tick the checkmarks next to the columns you would like to extract. See the following example:

![Deltaq-Define-Data-Source-Filled](/img/content/Deltaq-Define-Data-Source-Filled.png){:class="img-responsive"}

### Step 4: Activation

If the validation finished without errors klick on **[Activate]** to activate this extraction in SAP.<br> 
After successful activation, the corresponding status messages appear in the course of a few seconds:

![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}

![Deltaq-Generation-Successfull-Info](/img/content/Deltaq-Generation-Successfull-Info.png){:class="img-responsive"}

Once activated successfully, the extraction can be executed. 

The activation must only be done for **Delta**, **Full** or **Init** modes.
Delete the old activation before starting a new one, see at **[Extraction Settings]**.
Don't make any activation for the **Delta Update** mode. 

### Variables and Filters

**Variables** can be used for the following settings:
* **Log. Destination**, 
* **Gateway Host**,
* **Gateway Service**,
* **Program ID**. 

The **Update Mode** can be controlled via a variable too, see at **[Extraction Settings]**.

**Filters** see at [Datasource Parameters](./datasource-parameters).
 
In case of errors, refer to the [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide). 
