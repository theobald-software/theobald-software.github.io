---
ref: xfa-queries-01
layout: page
title: Defining a Query Extraction
description: Define a Query Extraction
product: xtract-for-alteryx
parent: queries
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---

The following section shows how to use the Xtract Query component.


### Look up a Query

1. In the main window of the component click on the **[Search]** icon ( ![magnifying-glass](/img/content/icons/magnifying-glass.png)). The window “Query Lookup” opens.
2. Enter the name of a query in the field **Query Name** or enter the name of a user group in the field **User group** (1). Use wildcards (*) if needed. <br>
![Look Up Hierarchy](/img/content/query/query-lookup.png){:class="img-responsive"}
3. Select the query work area that contains the query object (2). For more information, see [SAP Documentation: Query Areas](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/4e/3bdad0b8503b0fe10000000a42189e/frameset.htm).
4. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) and select the preferred query from the displayed list (2).
5. Click **[OK]** to confirm your selection.

The application now returns to the main window of the component.

### Set Up a Query Extraction
<!--- ### Eine Query Extraktion Einrichten -->

[Look up a query](#look-up-a-query) and follow the steps below to set up a query extraction:

1. If the query has variants, select a variant in the *Variant* section of the main window.
For more information, see [Variants and Selections: Choose a Variant](./variant-selections#choose-a-variant).<br>
2. Optional: Edit selections in the *Selection Screen* section of the main window. For more information, see [Variants and Selections: Edit Selections](./variant-selections#edit-selections).<br>
3. Optional: Change the [Extraction Settings](./extraction-settings).
4. In the main window of the component click **[OK]** to save the extraction.

You can now run the extraction in your Alteryx workflow.

{: .box-tip }
**Tip:** Use a Browse tool in your Alteryx workflow to review the extracted data.