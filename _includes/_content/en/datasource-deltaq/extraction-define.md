### Look Up Extractors

Follow the steps below to look up a DataSource. For information on ho to look up Hierarchies, see [Hierarchies](./hierarchies).

1. In the main window of the component navigate to **OLTP** and click ![magnifying-glass](/img/content/icons/magnifying-glass.png). The window “Look Up OLTP Source” opens.<br>
![DeltaQ](/img/content/DeltaQ.png){:class="img-responsive"}
2. Enter the name of a DataSource in the field **Name** (1). Use wildcards ( * ), if needed.<br>
![search-ds-mat-attr](/img/content/search-ds-mat-attr2.png){:class="img-responsive"}
3. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select the extractor of your choice from the displayed list (2).
4. Click **[OK]** to confirm your selection.

The application now returns to the main window of the component.

{: .box-note }
**Note:** To find DataSources, they have to be activated in SAP, see [Activating DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System).


### Defining the DeltaQ Extraction

After looking up an extractor, follow the steps below:

1. Select an [Update Mode](#update-mode), e.g., to create delta extractions.
2. Select the elements you want to extract for output.<br>
![DeltaQ-output](/img/content/DeltaQ-output.png){:class="img-responsive"}
3. Optional: click the **[Edit]** option next to an element to add [DataSource Parameters](./datasource-parameters).
4. Click **[Run]** to testrun the extraction and validate your settings.
5. Click **[Activate]** to activate the extraction in SAP. After successful activation, a corresponding status message opens:<br>
![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}

{: .box-note } 
**Note:** The activation is only required for the update modes *Delta*, *Full* or *Init*.
Do not activate the extraction for the *Delta Update* mode. 

*****
#### Related Links
- [DeltaQ Troubleshooting Guide](https://support.theobald-software.com/helpdesk/KB/View/14424-deltaq-troubleshooting-guide). 
