---
ref: xu-abap-reports-02
layout: page
title: Define a Report Extraction
description: Define a Report Extraction
product: xtract-for-alteryx
parent: reports
permalink: /:collection/:path
weight: 2
lang: en_GB
---

### About

The Report component enables data extraction from most standard and custom ABAP reports and SAP transactions. In general, report extraction is possible if the report returns a table-like structure in SAP. This is the case for many Classical or ALV reports such as RLT10010 (Evaluation of Movements per Storage type) or RKEB0601 (Display Line Items). 

{: .box-note }
**Note:** The report component requires custom function module Z_THEO_READ_TABLE. Import this function module before proceeding.


### General workflow for creating a report extraction
When creating a new report extraction, start with executing the report in SAP. Know the selections or variants when executing the report. Format the report layout/output in a way that it returns a table-like structure. Save the layout as a variant if possible.

1. Look up the ABAP report or transaction you want to extract.
2. Select a variant (preferred) or manually enter selections in the Selection Screen. 
3. Automatically determine the report columns: Click the *Automatically detect columns* button. This executes the report. If the columns were automatically determined, column name, width and offset are listed in the columns section.
    
    {: .box-note }
    **Note:**
    The Report component can automatically detect report columns if the report's output separates the columns by the pipe symbol '|'.

4. If step 3. returns a single field, the report columns could not be detected automatically. Click the *Load Preview* button. This executes the report and displays the result in the Preview area. Click in the Preview area to manually set the report columns.  

This is the most simple scenario of a workflow for creating a report extraction. Further tweaking may be required.



### Look Up a Report or Transaction
1. In the main window of the component click the **[Search]** button (magnifying glass symbol). The window “Report Lookup” opens.
2. In the field **Report Name** (1) enter the name of a report using wildcards (*) if needed. Alternatively you can search for SAP Transaction Codes by selecting TCODE.
![Look-Up-Report](/img/content/Look-Up-Report.png){:class="img-responsive"}
3. Click **[Search]** (magnifying glass symbol) and select the report of your choice from the displayed list (3).
4. Click **[OK]** (4) to confirm.


### Variants and Selections

Most reports allow entering multiple selections before report execution. Selections limit the result set of the report so as to display only those records that match the entered selection. 

A selection variant can be created in SAP at the input screen of an ABAP report. The purpose of a variant is to save selection settings on your input screen. This minimizes the need to enter selections each time you run a report. 

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

{: .box-tip }
**Tip:** Instead of hard coding manual selections or variants, use parameters. This allows setting selections and variants at runtime.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
#### Choose a Variant:
1. Choose a variant from the drop-down-list *Variant* (1). 
2. If you created a variant in SAP after the report extraction was created, click the **[Refresh]** button next to the drop-down-list to show the newly created variant.

{: .box-note }
**Note:** The selections of the variant are **not** displayed in the *Selection Screen* section of the window. Take a look at the report's variant in SAP if you want to see the variant's definition.

#### Edit Selections

This section corresponds to the reports input screen which is displayed before executing a report in SAP. Some selection fields only have a technical name but no description. To understand which which field is which, take a look at the report's input screen in SAP. Click on a selection field and press function key F1. This displays the technical name of a selection field.

1. Click the **[Edit]** button next to the selection you want to edit. The window "Edit Selection" opens.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Choose if the selection is to be included or excluded (1) from the extracted data.
3. Select an operator (*Equal*, *GreaterThan*, etc.) from the *Option* drop-down(2). 
4. Enter the selection in the respective *Low*/*High* fields.

    {: .box-note }
    **Note:** Use the SAP database format when entering selections. Enter leading zeros for document numbers and enter date fields in the format yyyymmdd.
	
5. Optional: click **[Add Selection]** (3) to add more conditions.
6. Click **[OK]** (4) to confirm the selections.


{: .box-tip }
**Tip:** If you have a lot of selection parameters, create a variant in SAP. Use that variant instead of entering selections.


### Define Report Columns
As opposed to other components (e.g. table component), there is no metadata for ABAP Reports that defines the output columns (name and data type) of a report. The only way to identify the columns of a report is to execute the report and identify the columns based on the output.

With some reports, the output columns are separated by the pipe symbol '|'. In this case the report component can automatically determine the columns. For reports, whose output is not separated by the pipe, the columns need to be identified manually.

### Define Columns automatically
Use the button **[Automatically Detect Columns]**(2) automatically divides columns using "|" as the delimiter.

**Dynamic column width and offset**<br>
Prerequisite for this setting: The report columns are separated by '|'. This setting adjusts column length and offset dynamically at report runtime.

### Define Columns manually
A column is defined by its name, offset and length.

[//]: # (How to add new columns????) 
To manually define columns, edit name, offset and length of the columns in the section *Columns* (3).


#### Row Settings (4)

**skip rows from top**<br>
Enter the number of rows you want to skip at the beginning of the report.
The result is displayed in the preview section.

**skip rows from bottom**<br>
Enter the number of rows you want to skip at the end of the report.
The result is displayed in the preview section.

{: .box-tip}
**Tip:** You can use **skip rows from top** and **skip rows from bottom** to cut out headers or footers of a report.

**report rows per data row**<br>
You can use this parameter if rows are embedded in other rows of the source data. 
By entering the number of report rows contained in one data row, the Xtract Report component extracts the embedded rows.

**report width**<br>


<!---
### Further reading..

Most reports can be extracted in dialog mode. Some reports have to be extracted in background mode.
Reports that may cause issues:
- Reports w/o column separator '|', such as RM07MBST
- Reports with a '|' in the actual data.
- Reports, that split a line over multiple lines
- Interactive Reports that are meant for reporting purposes and offer navigational features.
- Reports created via report painter

--->