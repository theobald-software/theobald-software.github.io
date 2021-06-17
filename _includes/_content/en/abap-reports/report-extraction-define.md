

The following section shows how to use the Report Component of Xtract for Alteryx. <br>


### Look Up a Report or Transaction
1. In the main window of the component click the **[Search]** button (magnifying glass symbol). The window “Report Lookup” opens.
2. In the field **Report Name** (1) enter the name of a report using wildcards (*) if needed. Alternatively you can search for SAP Transaction Codes by selecting TCODE.
![Look-Up-Report](/img/content/Look-Up-Report.png){:class="img-responsive"}
3. Click **[Search]** (magnifying glass symbol) and select the report of your choice from the displayed list (3).
4. Click **[OK]** (4) to confirm.


### Variants and Selections

Most reports allow entering selections before report execution. Selections limit the result set of the report so as to extract only records that match the selection. 

A selection variant can be created in SAP at the input screen of an ABAP report. The purpose of a variant is to save selection settings on your input screen. 
This minimizes the need to enter selections each time you run a report. 

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
#### Choose a Variant
Choose a variant from the drop-down-list *Variant* (1). If you create a new variant in SAP after the report extraction was created, click the **[Refresh]** button next to the drop-down list to access the new variant.

{: .box-note }
**Note:** The selections of the variant are **not** displayed in the *Selection Screen* section of the window. To see the definition of a variant, take a look at the report's variant in SAP.

#### Edit Selections

This section corresponds to the report's input screen in SAP. Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, take a look at the report's input screen in SAP. Click on a selection field and press function key F1. 
This displays the technical name of a selection field.

{% include _content/en/sap-data-format.md  %}

1. Click the **[Edit]** button next to the selection you want to edit. The window "Edit Selection" opens.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Choose if the selection is to be included or excluded (3) from the extracted data.
3. Select an operator (*Equal*, *GreaterThan*, etc.) from the *Option* drop-down list (4). 
4. Enter the selection in the respective *Low* and *High* fields. The *High* field is active for input when the *between* or *not between* operator was selected.
5. Optional: click **[Add Selection]** (5) to add conditions.
6. Click **[OK]** (6) to confirm the selections.

{: .box-note }
**Note:** Use the SAP database format when entering selections. Enter leading zeros for document numbers and enter date fields in the format yyyymmdd.
	
{: .box-tip }
**Tip:** If you use multiple selection parameters, create a variant in SAP. Use the variant instead of entering selections.


### Define Report Columns
A report column is defined by its name, offset and length. Per default, all columns are of data type *string*. To identify a report's columns, the report needs to be executed. Columns can then be identified based on the output.
    
{: .box-tip }
**Tip:**
At this stage, use a selection or variant that returns only a few records. This can be adapted later on.


Some Classical ABAP reports are developed in a way so that output columns are delimited by the pipe symbol '\|'. In this case the Report component can automatically identify the columns. Automatic column detection also works for most ALV reports. <br>
Example:
![Report-delimiters](/img/content/Report_new_delimiters.png){:class="img-responsive"}


For reports where the output is not separated by the pipe symbol, the columns must be identified manually. <br>
Example:
![Report-no-delimiters](/img/content/Report_new_no_delimiters.png){:class="img-responsive"}


### Define Columns automatically
**Automatically detect columns** <br>
By clicking **[Automatically detect columns]** the report is executed based on the selected variant or selections. Column name, width and offset are displayed in the *Columns* section if they can be identified automatically.

![Report-automatic-columns](/img/content/Report_new_automatic_columns.png){:class="img-responsive"}


**Dynamic column width and offset**<br>
You can use this setting when report columns can be detected automatically, see *Automatically Detect Columns*. If *Dynamic column width and offset* is active, the column length and offset is adjusted dynamically at report runtime. This can be required for reports that have varying column widths depending on the report's selection criteria.


### Define Columns manually
When automatic column detection is not possible, the report's column names, widths and offsets must be set manually.

Report columns can be manually defined as follows:

1. Make sure no columns are defined yet. Go to the *Columns* section and delete all columns by clicking on the *trash can* icon.
![Report-delete-columns](/img/content/Report_new_delete_column.png){:class="img-responsive"}
2. Click **[Load Preview]**. The report is executed based on the selected report variant or selections. The report output is displayed in the *Load Preview* section.
3. Press and hold down the left mouse button in the *Load Preview* section.  
4. Move the mouse pointer to the right while still holding down the left mouse button.
5. Let go of the mouse button. The report column is highlighted with a green background. An entry is added to the *Columns* section. 
6. To change the column name, offset and width, click in the respective fields in the *Columns* section and enter a new value.
7. Repeat steps 3 to 6 until all columns are defined.


{: .box-note }
**Note:** Once a column is set and highlighted with a green background, its width and offset can't be changed via the graphics editor. Change it using the *Columns* section.

Example:<br>
![Report-manual-columns](/img/content/Report_new_manual.png){:class="img-responsive"}


#### Row Settings
**Skip rows from top**<br>
Enter the number of rows you want to skip at the beginning of the report.
Some reports display meta information in the header section of the report, before the actual report body. This setting allows skipping the meta information. 

**Skip rows from bottom**<br>
Similar to *skip rows from top*. Enter the number of rows you want to skip in the footer section of the report.


**Report rows per data row**<br>
Use this setting for ABAP reports, that return two or more "physical" rows to display a single "semantic" data row. This concatenates the physical rows into a single data row. <br>
Example: Report RIEQUI20 

![Report_new_rows_per_data_row](/img/content/Report_new_rows_per_data_row.png){:class="img-responsive"}

**Report width**<br>
Use this setting in combination with **Report rows per data row**. Defines the length of each physical row.


#### Related Links
- [Types of ABAP Reports](https://wiki.scn.sap.com/wiki/display/ABAP/Types+of+Reports)


<!---
### Further reading..

Most reports can be extracted in dialog mode. Some reports have to be extracted in background mode.
Reports that may cause issues:
- Reports w/o column separator '|', such as RM07MBST
- Reports with a '|' in the actual data.
- Reports, that split a line over multiple lines
- Interactive Reports that are meant for reporting purposes and offer navigational features.
- Reports created via report painter

{: .box-tip }
**Tip:** Instead of hard coding manual selections or variants, use parameters. This allows setting selections and variants at runtime.

--->