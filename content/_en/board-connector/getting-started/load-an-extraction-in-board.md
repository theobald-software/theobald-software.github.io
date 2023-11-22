---
ref: bc-getting-started-04
layout: page
title: Step 5 - Load an Extraction in Board
description: Step 5 - Load an Extraction in Board
product: board-connector
parent: getting-started
permalink: /:collection/:path
weight: 5
lang: en_GB
progressstate: 5
---

{: .box-note }
**Note:** When using Board SaaS with Board Connector, a recent software change requires users to update Board and to change the connection URL of the Data Reader.
Set the connection URL of the Board Data Reader from TCP to an HTTP connection (port 8097) or an HTTPS (port 8197) connection.
For more information, see [Board Release Notes Summer 2023](https://www.boardmanual.com/2021/summer/whats-new-release-notes/2023-summer-release/other-enhancements.htm?rhsearch=sap%20connector&rhhlterm=sap%20connector)

Extractions can be loaded in Board using the Data Reader. In the following example an extraction "Plants" is created in the Board Designer. 
The extraction "Plants" extracts the table *T001W* from SAP. 

1. In Board, select **[+ DATA READER]**  to create a new Data Reader. Enter a name (here: "Plants") and a group (here: "Main Group"). Select the source type "SAP". <br>
![Load-Extraction-01](/img/content/board/Load-Extraction-01.png)
2. Create a new connection for the Board Connector Server. Optionally, you can select an existing connection. Set a *name* and the *URL* of the Board Connector server (e.g., localhost:8197).<br>
3. Click the "Connect" icon (1) to pull a list of extractions from the Board Connector.
4. Select an extraction (here: T001W)  from the EXTRACTOR box on the right hand-side. The extraction's metadata (field names, data types) is listed in the window below.
![Load-Extraction-02](/img/content/board/Load-Extraction-02.png)
5. **Optionally:** Specify URL parameter(s) to add to the connection string. 
In the depicted scenario a WHERE-clause is specified, restricting the extraction to purchasing organization (EKORG) '1000'. 
For more information about URL parameters, see [Dynamic Connection Parameters](../advanced-techniques/extraction-parameters#subsection-parameters-tab-source).
6. Click **[Browse Table]** to get a preview of the extracted SAP data. <br>
**Note:** The preview displays real or dummy data depending on the type of extraction.
![Load-Extraction-03](/img/content/board/Load-Extraction-03.png)
7. Click **[MAPPING]** to proceed to mapping the fields of the extraction with existing Board entities. 
8. Select the corresponding fields for mapping (e.g., WERKS, NAME1, etc.).
![Load-Extraction-04](/img/content/board/Load-Extraction-04.png)
9. In the column **Position**, map each field of the entity to an SAP field. Select the correct mode for *Insert* or *Update*. In the depicted example, the mode "ADD NEW ITEM" is selected for all fields.
10. Click **[Browse Query]** and **[OK]**.
![Load-Extraction-05](/img/content/board/Load-Extraction-05.png)
11. Execute the Data Reader to extract the SAP data. <br>
![Load-Extraction-06](/img/content/board/Load-Extraction-06.png)
![Load-Extraction-06](/img/content/board/Load-Extraction-07.png)
After executing the Data Reader, the Board protocol shows how many rows are loaded. <br>

