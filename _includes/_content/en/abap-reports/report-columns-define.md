
A report column is defined by its name, offset and length. Per default, all columns are of data type *string*. To identify a report's columns, the report needs to be executed. Columns can then be identified based on the output.
    
{: .box-tip }
**Tip:**
At this stage, use a selection or variant that returns only a few records. This can be adapted later on.


- Some Classical ABAP reports are developed in a way so that output columns are delimited by the pipe symbol '\|'. In this case the Report component can automatically identify the columns. Automatic column detection also works for most ALV reports. <br>
Example:<br>
![Report-delimiters](/img/content/Report_new_delimiters.png){:class="img-responsive"}
- For reports where the output is not separated by the pipe symbol, the columns must be identified manually. <br>
Example:<br>
![Report-no-delimiters](/img/content/Report_new_no_delimiters.png){:class="img-responsive"}


### Define Columns automatically
**Automatically detect columns** <br>
By clicking **[Automatically detect columns]** the report is executed based on the selected variant or selections. Column name, width and offset are displayed in the *Columns* section if they can be identified automatically.

![Report-automatic-columns](/img/content/Report_new_automatic_columns.png){:class="img-responsive"}

**Dynamic column width and offset**<br>
If this option is active, the column width and offset is adjusted dynamically at report runtime. 
This can be required for reports that have varying column widths depending on the report's selection criteria.


### Define Columns manually
When automatic column detection is not possible, the report's column names, widths and offsets must be set manually.

1. Make sure no columns are defined yet. If columns are defines, go to the *Columns* section and delete all columns by clicking on the ![trashbin](/img/content/icons/trashbin.png) icon.
![Report-delete-columns](/img/content/Report_new_delete_column.png){:class="img-responsive"}
2. Click **[Load Preview]**. The report is executed based on the selected report variant or selections. The report output is displayed in the *Load Preview* section.
3. Press and hold down the left mouse button in the *Load Preview* section.  
4. Move the mouse pointer to the right while still holding down the left mouse button.
5. Let go of the mouse button. The report column is highlighted with a green background. An entry is added to the *Columns* section. <br>
![Report-Columns](/img/content/report-column.gif){:class="img-responsive" style="border:1px solid black;"}
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
