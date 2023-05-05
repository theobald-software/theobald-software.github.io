---
ref: xfa-abap-reports-02
layout: page
title: Variants and Selections
description: Variants and Selections
product: xtract-for-alteryx
parent: reports
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-report-extraction
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

1. Click the **[Edit]** button next to the selection you want to edit (2). The window "Edit Selection" opens.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Choose if the selection is to be included or excluded (3) from the extracted data.
3. Select an operator (*Equal*, *GreaterThan*, etc.) from the *Option* drop-down list (4). <br>
**Tip:** Use the *In* operator when mapping list parameters to selections.
4. Enter the selection in the respective *Low* and *High* fields. The *High* field is active for input when the *between* or *not between* operator was selected.
5. Optional: click **[Add Selection]** (5) to add conditions.
6. Click **[OK]** (6) to confirm the selections.

{: .box-tip }
**Tip:** If you use multiple selection parameters, create a variant in SAP. Use the variant instead of entering selections.

### Data Format

{% include _content/en/sap-data-format.md  %}
