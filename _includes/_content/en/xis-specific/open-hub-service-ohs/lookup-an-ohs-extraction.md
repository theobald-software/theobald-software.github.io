### Look Up an OHS Extraction

1. Double-click the OHS component to open the main window of the component.
![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
2. In the main window, select an **Extraction type**. 
- If you use BW4Hana2.0, select **Table** as your extraction type and make sure that the open hub destination type in SAP is set to *database table*. 
- If you use BW7.x or below, select **Third party tool (legacy)** as you extractionr type and make sure that the open hub destination type in SAP is set to *third party tool*.
![OHS-Look-Up](/img/content/xis/ohs-sap-destinationtype.png){:class="img-responsive" }
3. In the main window of the OHS component, click **[Look Up]** (binocular symbol) to look up an OHS extraction.<br/>
The search dialoge "OHS Look Up" opens.

4. Search and select your extraction. You can use wildcards ( * ) for the search.
![OHS-Search-001](/img/content/xis/OHS-Search-001.png){:class="img-responsive" }
5. Click **[OK]** to confirm the selection. All meta data are retrieved from the BW and displayed in the main window of the component.
6. Make sure that **Process Chain** is not empty.
7. Check/edit the [settings](./settings) of the extraction.

#### Process Chain
Enter an SAP [process chain](http://saphelp.ucc.ovgu.de/NW750/EN/4a/2cf30c6ed91c62e10000000a42189c/frameset.htm) assigned to your OHS extraction. 
If there are multiple process chains assigned to an extraction, the process chain data needs to be entered manually.
If **Process Chain** is left empty, the extraction fails.

#### Timeout
Set a maximum time period to wait for a notification from BW. If the time limit is reached, the extraction fails.