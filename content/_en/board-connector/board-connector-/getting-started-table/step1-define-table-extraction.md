---
layout: page
title: Step I - Define a Table Extraction
description: Step I - Define a Table Extraction
product: board-connector
parent: getting-started-table
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=define-a-table-extraction
---

After the launch of the BOARD Designer, the designer must connect to the BOARD Server and the extraction repository. The address is in case of a local BOARD Server the localhost (as in the screenshot), or a different network address, depending on where the  BOARD Server is running. The default port may vary depending on the configuration. If the BOARD Server is running on another machine than the BOARD Designer be sure that the port is not disabled by your firewall. Click Connect to establish a connection with the server.

![Table-Extraction-01](/img/content/Table-Extraction-01.png){:class="img-responsive"}

After connecting the server successfully, the buttons to create and configure extractions are enabled. The list shows all the extractions, which are already created on the server.<br>
Click *New* to define a new extraction and select the extraction type. In our case we want a table extraction.

Enter a unique name and click OK.

![Table-Extraction-02](/img/content/Table-Extraction-02.png){:class="img-responsive"}

The next form shows the connection manager, with which you define the connection details. The form must be filled in as shown below. Please fill in the text boxes with the logon data (user name, client, language, password). If you need to log on to a single application host, fill in the fields *Host* and *System Number*. If you want log on by load-balancing the message server field, the *logon group* and *SID* must be filled in. If you do not know what these parameters in your SAP system environment are, please ask your SAP Basis Components department for help.<br> 
If everything is filled in correctly, try to establish a connection to SAP by clicking the *Test Connection* button.

![Table-Extraction-03](/img/content/Table-Extraction-03.png){:class="img-responsive"}

Now the BOARD Table window opens. Click the binocular button to open a dialog for selecting a table.

![Table-Extraction-04](/img/content/Table-Extraction-04.png){:class="img-responsive"}

Enter the name of the table (wildcards like * are supported) and click the binocular button again to invoke the search.

![Table-Extraction-05](/img/content/Table-Extraction-05.png){:class="img-responsive"}

The editor is now filled in with all the columns from the table. The columns must be marked in the checkbox before they can be extracted.

![Table-Extraction-06](/img/content/Table-Extraction-06.png){:class="img-responsive"}

To define a WHERE statement, please fill in the multi-line text box below the grid. The statement must be conform to the OpenSQL Standard. Please remember that it is necessary to put blanks beween the values and the operators.


Click *OK* to save the extraction to the repository of the BOARD Server.  