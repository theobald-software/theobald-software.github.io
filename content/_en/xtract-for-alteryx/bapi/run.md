---
ref: xfa-bapi-run
layout: page
title: Running an Example BAPI Extraction
description: Example Use Case
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 4
lang: en_GB
---

The following example depicts a successful BAPI extraction of a purchase requisition.

### Running an Extraction
1. Define an input table (e.g., *PRITEM*) in your Alteryx Workflow. Make sure that the name of the table is identical to the name of the corresponding table in SAP.
2. Drag and drop Xtract BAPI component into your workflow and check the SAP connection (2).
3. Connect your input table with the Xtract BAPI component (3).
4. Select the Xtract BAPI component and click **[Edit]** to open extraction options. The window "Xtract BAPI" opens.
5. Perform a [BAPI look up](./bapi-define#looking-up-a-bapi) and search for "BAPI_REQUISITION_CREATE".
6. Within the "Xtract BAPI" window, navigate to tab *Tables* (5).
7. Navigate to the mandatory field **REQUISITION_ITEMS** and select the created *PRITEM* table from the drop-down list (6).
8. Mark the output checkbox by the field **Return** (7). In the "Configuration" window of the Alteryx Designer, check the section **Output Mappings > Output Tables**. The selected output field **RETURN** and the amount of output tables (here: one) are displayed.
9. Run your Alteryx workflow.

![Bapi-Extraction](/img/content/xfa/bapi_example.png){:class="img-responsive"} 


### Checking the Extraction Results

Navigate to the "Result" window in Alteryx Designer and check the output:

![Bapi-Output](/img/content/xfa/bapi_example_result.png){:class="img-responsive"} 
