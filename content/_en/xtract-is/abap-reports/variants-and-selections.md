---
ref: xi-report-03
layout: page
title: Variants and Selections
description: Variants and Selections
product: xtract-is
parent: report
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=variants-and-selections
---


Most reports allow entering selections before report execution. Selections limit the result set of the report to extract only records that match the selection. 

A selection variant can be created in SAP at the input screen of an ABAP report. The purpose of a variant is to save selection settings on your input screen. 
The purpose of a variant is to minimize the necessity to enter selections when running a report.

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

### Choose a Variant
Choose a variant from the drop-down-list *Variant* (1). If you create a new variant in SAP after the report extraction was created, click the **[Refresh]** button next to the drop-down list to access the new variant.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}

{: .box-note }
**Note:** The selections of the variant are **not** displayed in the *Selection Screen* section of the window. To see the definition of a variant, take a look at the report's variant in SAP.

### Edit Selections

This section corresponds to the report's input screen in SAP. Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, take a look at the report's input screen in SAP. Click on a selection field and press function key F1. 
This displays the technical name of a selection field.

1. Click the **[Edit]** button next to the selection you want to edit (2). The window “Edit Selection” opens.<br> 
2. Click **[Add Selection]** to add a new filter criterion.<br>
![ODP Fields](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
3. Select *Include* in the **Sign** (3) column to only include the filtered data to the output. <br>
Select *Exclude* in the **Sign** (3) column to exclude the filtered data from the output.
4. Select an operator in the **Option** (4) column. The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(Not)Equal |  True if data is (not)equal to the content of operand 1.|
   |GreaterOrEqual |  True if data is greater than or equal to the content of operand 1.|
   |GreaterThan |  True if data is greater than the content of operand 1.|
   |LessOrEqual | True if data is less than or equal to the content of operand 1.|
   |LessThan | True if data is less than the content of operand 1.|
   |(Not)Between | True if data values do (not) lie between the values of operand 1 and operand 2. |
   |In | True if data is part of the content of operand 1. This operator is only available for *List* parameters.|
5. Enter static values or select SSIS variables for filtering. <br>
- Static values: Enter values directly into the **Low** and **High** input fields. 
If SSIS variables are available, make sure that the ![static-value](/img/content/icons/runtime-parameters-static.png) icon is displayed next to the input field.
Clicking on the icon switches between static input values and SSIS variables.
- SSIS variables: Click ![static-value](/img/content/icons/runtime-parameters-static.png) to change the input type to variables ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png).
Select an SSIS variable from the drop-down list.
6. Click **[OK]** to confirm your input.
7. Click **[Load Preview]** in the main widnow of the component to check the result of your selection. <br>
If SSIS variables are defined, you are prompted to populate the parameters with actual values.


{: .box-tip }
**Tip:** If you use multiple selection parameters, create a variant in SAP. Use the variant instead of entering selections.

### Data Format

{% include _content/en/sap-data-format.md  %}
