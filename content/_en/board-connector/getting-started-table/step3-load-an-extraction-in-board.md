---
layout: page
title: Step III - Load an Extraction in BOARD
description: Step III - Load an Extraction in BOARD
product: board-connector
parent: getting-started-table
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=load-an-extraction-in-board
---

The next step is to load an extraction in BOARD using the data reader. In the BOARD designer we defined the extraction plants which extracts the plants table *T001W*  from SAP. In BOARD wie defined the entity Plants, in which we want to load the SAP data. Now select *Database -> Data Reader -> SAP -> New Protocol*  to create a new protocol.

![Load-Extraction-01](/img/content/Load-Extraction-01.png){:class="img-responsive"}

Now create a new connection for the BOARD Connector Server. Optional you can select an existing connection. Set a *name* and the *URL* of the BOARD Connector server (e.g. localhost:8098). Then click *OK*.

![Load-Extraction-02](/img/content/Load-Extraction-02.png){:class="img-responsive"}

Now you see in the *SAP* tab on the left hand side a list of all exitsting extractions grouped by extraction type. Now select the extraction *plants*.  In the window below you see now the list of all available fields including description and datatype information.

![Load-Extraction-03](/img/content/Load-Extraction-03.png){:class="img-responsive"}

Now select the *MDB*  tab and select the fields *Code* and *Desc*  of the entity *Plants*.
The selected fields will appear in the top region of the form. In the column *Position* map each field of your entity to an SAP field. In the column *Action*  select the corresponding entry.

Now fill in the field *Title* with a name and click *OK*.

![Load-Extraction-04](/img/content/Load-Extraction-04.png){:class="img-responsive"}

Now execute the DataReader to extract the SAP data.

![Load-Extraction-05](/img/content/Load-Extraction-05.png){:class="img-responsive"}

After executing the DataReader you can see in the protocol how many rows have been loaded into the entity.

![Load-Extraction-06](/img/content/Load-Extraction-06.png){:class="img-responsive"}