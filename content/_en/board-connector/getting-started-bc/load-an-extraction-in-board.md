---
ref: bc-getting-started-bc-04
layout: page
title: Step 4 - Load an Extraction in BOARD
description: Step 4 - Load an Extraction in BOARD
product: board-connector
parent: getting-started-bc
permalink: /:collection/:path
weight: 4
lang: en_GB
progressstate: 3
---


Extractions can be loaded in BOARD using the DataReader. In the following example an extraction "Plants" is created in the BOARD Designer. 
The extraction "Plants", which extract the plants table *T001W* from SAP. 
In BOARD the entity plants is defined to load the SAP data. 

1. Select **Database > DataReader > SAP > New Protocol**  to create a new protocol.

![Load-Extraction-01](/img/content/Load-Extraction-01.png)

2. Create a new connection for the BOARD Connector Server. Optionally, you can select an existing connection. Set a *name* and the *URL* of the BOARD Connector server (e.g., localhost:8098).
3. Click **[OK]** to confirm.

![Load-Extraction-02](/img/content/Load-Extraction-02.png)

4. The *SAP* tab on the right hand side lists all the existing extractions grouped by extraction type. 
5. Select the extraction "Plants".  The details window displays a list of all available fields including description and datatype information.

![Load-Extraction-03](/img/content/Load-Extraction-03.png)

6. Select the *MDB* tab and mark the fields **Code** and **Desc**  of the entity **Plants**.
The selected fields appear in the top region of the form. 

7. In the column **Position**, map each field of the entity to an SAP field. 
8. In the column **Action**  select the corresponding entry, fill in the field **Title** with a name and click **OK**.

![Load-Extraction-04](/img/content/Load-Extraction-04.png)

9. Execute the DataReader to extract the SAP data.

![Load-Extraction-05](/img/content/Load-Extraction-05.png)

After executing the DataReader, the protocol shows how many rows are loaded into the entity.

![Load-Extraction-06](/img/content/Load-Extraction-06.png)
