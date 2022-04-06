Click the *Extraction Settings* link to open the "Cube Settings" window. 

![XU_BWCube_Settings](/img/content/XU_BWCube_Settings.png){:class="img-responsive"}

### Extraction Settings

**Package Size** <br> 
Defines how many data records are fetched from SAP in a data package.
Values between 10,000 and 100,000 are practical for large data volumes.
If the value is set to 0, the complete result set is fetched at one time.

{: .box-tip }
**Recommendation**: Always define a package size.

**Row Limit** <br>
Defines the maximum number of rows in the result set.
If the value is set to 0, the complete result set is fetched.

You can use **Row Limit** to perform tests with a small amount of data by entering a row limit of e.g., 1000 (not 0).

**Formatted Values** <br>
If this option is active, the values of key figures are formatted as defined in the Query Designer e.g., scaling factor and number of decimal places.


### Automatic Slicing Dimension

This option sets a dimension for an automatic slicing. 
Slicing is the act of picking a subset of a cube by choosing a single value for one of its dimensions. 
Automatic slicing means that a loop is executed for each single value of the chosen slicing dimension (characteristic) to extract the result from BW. 

**Automatic Slicing Dimension** allows the extraction of a large amount of data (millions of records) from BW.

### Experimental

The following settings are only available for BICS extractions. They appear in the extraction settings window after retrieving the metadata of a BICS extraction.

![XU_BWCube_Settings](/img/content/bwcube-bics-fast-mode.png){:class="img-responsive"}

**BICS Fast Mode**<br>
Enabling the checkbox switches the internal behaviour of the BICS component.
Instead of loading RFC function definitions from SAP for each function call, the BICS fast mode uses locally stored BAPI definitions.
This may increase the performance of the BICS component.

**Create BICS Compatibilita Report**<br>
As the BICS mode is still in beta phase, you may encounter errors when using this component. 
Click **[Create BICS Compatibilita Report]** to run a number of tests to help us analyze why and where the error occured.
The test results are automatically stored in a .zip file.
If you have multiple different SAP systems, perform this test on each of them. <br>
Send the resulting .zip files to the [Theobald Support](https://support.theobald-software.com) team.