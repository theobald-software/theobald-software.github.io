---
ref: xfa-queries-02
layout: page
title: Variants and Selections
description: Variants and Selections
product: xtract-for-alteryx
parent: queries
permalink: /:collection/:path
weight: 2
lang: en_GB
progressstate: 5
---

Most queries allow entering selections before query execution.
Selections limit the result set of the query to extract only records that match the selection.<br>
A selection variant can be created in SAP, see [SAP Documentation: Query Variants](https://help.sap.com/docs/SAP_NETWEAVER_750/40d2cb3a4f9249d58e9bbc95f4dbaff8/4e535406a32c4f49e10000000a42189e.html?locale=en-US). 
The purpose of a variant is to minimize the necessity to enter selections when running a query.

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

### Choose a Variant
Choose a variant from the drop-down-list *Variant* (1). <br>
If you create a new variant in SAP after creating the query extraction, click on the **[Refresh]** icon ( ![refresh](/img/content/icons/refresh.png)) to load the new variant.

![Variants-Section](/img/content/xfa/query-variant1.png){:class="img-responsive"}

{: .box-note }
**Note:** The selections of the variant are **not** displayed in the *Selection Screen* section of the window. 
To see the definition of a variant, open the variant in SAP.

### Edit Selections

The *Selection Screen* in the query window corresponds to the query's input screen in SAP.

![Selections-Section](/img/content/xfa/query-variant2.png){:class="img-responsive"}

{: .box-note }
**Note:** Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, open the query's input screen in SAP. 
Click on a selection field and press the function key **[F1]** to display the technical name of the selection field. 

Follow the steps below to edit selection fields in Xtract for Alteryx:
1. Click the **[Edit]** button next to the selection field you want to edit. The window “Edit Selection” opens.
2. Click **[Add Selection]** to add a new filter criterion.
3. Select *Include* in the **Sign** (1) column to only include the filtered data to the output. <br>
Select *Exclude* in the **Sign** (1) column to exclude the filtered data from the output.<br>
![ODP Fields](/img/content/query/query-plant-selection.png){:class="img-responsive"}
4. Select an operator in the **Option** (2) column. The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(Not)ContainsPattern |  True if data values do (not)contain to the content of operand 1.|
   |(Not)Equal |  True if data is (not)equal to the content of operand 1.|
   |GreaterOrEqual |  True if data is greater than or equal to the content of operand 1.|
   |GreaterThan |  True if data is greater than the content of operand 1.|
   |LessOrEqual | True if data is less than or equal to the content of operand 1.|
   |LessThan | True if data is less than the content of operand 1.|
   |(Not)Between | True if data values do (not) lie between the values of operand 1 and operand 2. |
5. Enter values directly into the **Low** and **High** input fields. 
6. Click **[OK]** to confirm your input.

Note that edited selection fields overwrite the selection fields in the variant. 

{: .box-tip }
**Tip:** If you use multiple selection parameters, create a variant in SAP. Use the variant instead of entering selections.

### Data Format

{% include _content/en/sap-data-format.md  %}
