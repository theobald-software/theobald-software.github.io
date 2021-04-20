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

### Look Up a Report
1. In the main window of the component click the **[Search]** button (magnifying glass symbol). The window “Report Lookup” opens.
2. In the field **Report Name** (1) enter the name of a report using wildcards (*) if needed. Alternatively you can search for SAP Transaction Codes by selecting TCODE.
![Look-Up-Report](/img/content/Look-Up-Report.png){:class="img-responsive"}
3. Click **[Search]** (magnifying glass symbol) (32 and select the report of your choice from the displayed list (3).
4. Click **[OK]** (4) to confirm.
5. Click [**[Extraction Settings]**](./report-extraction-settings) to define report settings.

### Variants and Selection
![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
#### Choose a Variant:
1. If your report has multiple variants, choose a variant from the drop-down-list *Variant* (1). 
2. Click the **[Refresh]** button next to the drop-down-list.

#### Edit Selection Parameters
All selection parameters associated with the chosen variant are displayed in the section *Selection Screen* (2).
You can use variables by adding an @ before the value to mark it as a variable.

[//]: # (You can use the selection parameters to implement variables and conditions to filter data.) 
[//]: # (die Variablen-Sache wird noch von Yogen geprüft)

{: .box-tip }
**Tip:** If you have a lot of selection parameters, create a variant in SAP. This makes handling parameters in Xtract for Alteryx easier.

1. Click the **[Edit]** button next to the parameter you want to edit. The window "Edit Selection" opens.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Choose if the result of the following condition is to be included or excluded (1) from the extracted data.
3. Formulate a condition using *Option* (2). The following operators are available:
- Contains Pattern
- Equal
- Greater or Equal
- Greater Than
- Less Than
- Less or Equal
- Not Contains Pattern
- Not Equal
- Between
- Not Between
4. Optional: click **[Add Selection]** (3) to add more conditions.
5. Click **[OK]** (4) to confirm the parameters.

### Define Report Columns
SAP Reports have a wide variety of formats, which makes it necessary to check the division of columns before starting an extraction.
Preview the report at least once by clicking **[Load Preview]** (1).

The current column division is indicated by green highlights in the preview section.
![Report-Edit-Selections](/img/content/Report-Columns-Xfa.png){:class="img-responsive"}

#### Define Columns automatically
Use the button **[Automatically Detect Columns]**(2) automatically divides columns using "|" as the delimiter.

#### Define Columns manually
A column is defined by its name, offset and length.

[//]: # (How to add new columns????) 
To manually define columns, edit name, offset and length of the columns in the section *Columns* (3).


**Dynamic column width and offset**<br>
Use this checkbox if the length or offset of the columns are dynamic.

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