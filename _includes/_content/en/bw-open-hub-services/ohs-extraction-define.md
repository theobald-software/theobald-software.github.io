
### Look up an OHS Destination
1. Select an **Extraction type** in the main window of the component.<br>
If you use BW4Hana2.0, select **Table** as your extraction type and make sure that the open hub destination type in SAP is set to *database table*.<br>
If you use BW7.x or below, select **Third party tool (legacy)** as your extraction type and make sure that the open hub destination type in SAP is set to *third party tool*.<br>
![ohs-main-window](/img/content/ohs-main-window.png){:class="img-responsive"}
2. Click **[Lookup]** to look up an OHS destination. The window “OHS Lookup” opens.<br>
3. Enter the name of an OHS destination in the field **OHS Destination** (1). Use wildcards (*) if needed.<br>
![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}
4. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select the destination of your choice from the displayed list (2).
5. Click **[OK]** to confirm. The application now returns to the main window of the component.

### Settings
1. If **Process Chain** is empty, enter an SAP process chain assigned to your OHS extraction, see [SAP Documentation: Display/Maintenance of Process Chain Attributes](https://help.sap.com/docs/SAP_NETWEAVER_701/6da591e86c4b1014b43de329b9ffb859/4a2cf30c6ed91c62e10000000a42189c.html?locale=en-US).
If **Process Chain** is left empty, the extraction fails.
2. Optional: Use the **Timeout** setting to set a maximum time period to wait for a notification from BW. If the time limit is reached, the extraction fails.
3. Check / edit the [extraction settings](./open-hub-services-settings) and [general settings](./general-settings) of the extraction.


{: .box-note }
**Note:** To use data sources, configure SAP BW, see [Customizing for OHS in BW](../sap-customizing/preparation-for-ohs-in-bw).
