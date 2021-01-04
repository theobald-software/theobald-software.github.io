---
ref: bc-getting-started-04
layout: page
title: 4. Load an Extraction in BOARD
description: Step 4 - Load an Extraction in BOARD
product: board-connector
parent: getting-started
permalink: /:collection/:path
weight: 4
lang: en_GB
progressstate: 3
---

Extractions can be loaded in BOARD using the DataReader. In the following example an extraction "Plants" is created in the BOARD Designer. 
The extraction "Plants" extracts the table *T001W* from SAP. 
In BOARD the entity "plants" is defined to load the SAP data. 

1. In BOARD, select **[+ DataReader] > DataReader**  to create a new DataReader. Enter a name, in the example "Plants" and a group, in the example "Main Group". Select the source type "SAP". <br>
![Load-Extraction-01](/img/content/board/Load-Extraction-01.png)
2. Create a new connection for the BOARD Connector Server. Optionally, you can select an existing connection. Set a *name* and the *URL* of the BOARD Connector server (e.g., localhost:8098).<br>
3. Click **[OK]** to confirm.<br>
![Load-Extraction-02](/img/content/board/Load-Extraction-02.png)
4. Click **[Browse Table]** to select the table *T001W*. 
5. Select the extraction "Plants".  The details window displays a list of all available fields including description and datatype information. <br>
![Load-Extraction-03](/img/content/board/Load-Extraction-03.png)
6. Select the fields for mapping (e.g., WERKS, NAME1 etc.).
![Load-Extraction-04](/img/content/board/Load-Extraction-04.png)
7. In the column **Position**, map each field of the entity to an SAP field. 
8. Click **[Browse Query]** and **[OK]**.
![Load-Extraction-05](/img/content/board/Load-Extraction-05.png)
9. Execute the DataReader to extract the SAP data. <br>
![Load-Extraction-06](/img/content/board/Load-Extraction-06.png)
![Load-Extraction-06](/img/content/board/Load-Extraction-07.png)
After executing the DataReader, the protocol shows how many rows are loaded into the entity. <br>

