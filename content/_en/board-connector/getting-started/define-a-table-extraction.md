---
ref: bc-getting-started-02
layout: page
title: Step 3 - Define a Table Extraction
description: Step 3 - Define a Table Extraction
product: board-connector
parent: getting-started
permalink: /:collection/:path
weight: 3
lang: en_GB
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Board Connector.<br>
Make sure to use the documentation within the new [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

### Creating an Extraction

The following example shows the creation of an extraction using "SAP Table or View" component.<br>

1. In the main window of the Board Connector Designer click **[New]**.  
![Create-New-Table-Extraction](/img/content/bc_extraction_anlegen.png){:class="img-responsive list-img"}
The window "Create Extraction" opens. <br>
2. Field **Source** (1) states the SAP connection. Choose the SAP connection you created previously from the drop-down menu. 
![Add-Extraction](/img/content/bc_tabellen_extraktion_anlegen.png){:class="img-responsive list-img"}
3. Enter a unique name for your extraction (2).
4. Choose the type of extraction. In the given example: **SAP Table or View** (3). <br>
5. Click **[OK]** (4) to confirm.

The window "Extract Single and Joint SAP Tables or Views" opens. 
In the opened window you can define simple table extractions or join tables for extractions. In the following example, a single table is extracted. <br>



{% include _content/en/tables/define-a-table-extraction.md  %}