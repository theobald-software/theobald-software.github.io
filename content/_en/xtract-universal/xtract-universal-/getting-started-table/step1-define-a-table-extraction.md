---
layout: page
title: Step I- Define a Table Extraction
description: Step I- Define a Table Extraction
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-table-extraction
---

After successfully establishing a [connection to the server](), the buttons to create and configure extractions are enabled. The list shows all the extractions, which have already been created on the server.

![XU3_Designer](/img/content/XU3_Designer.jpg){:class="img-responsive"}

**Step A: Create SAP Source Connection**

Select the menu **Server -> Manage Sources.**

![XU-Create-Connection-1](/img/content/XU-Create-Connection-1.jpg){:class="img-responsive"}

Click **Add**.

![XU-Create-Connection-2](/img/content/XU-Create-Connection-2.jpg){:class="img-responsive"}

Set the connection name in the **Name** field.<br>
Set the SAP connection details.<br>
The form must be filled in as shown below. <br>
Please fill in the text boxes with the logon data (Client, Language, User, Password). <br>
To log on to a single application host, fill in the fields Host and System Number. <br>
To log on by load-balancing the message server field, the logon group and SID must be filled in. <br>
If you do not know what these parameters in your SAP system environment are, please ask your SAP Basis Components department for help. <br>

![XU-Create-Connection-3-A](/img/content/XU-Create-Connection-3-A.jpg){:class="img-responsive"}

If everything is filled in correctly, try to establish a connection to SAP by clicking the **Test Connection** button.

![XU-Create-Connection-3](/img/content/XU-Create-Connection-3.jpg){:class="img-responsive"}

The SAP Source connection is successfully created. 

![XU-Create-Connection-4](/img/content/XU-Create-Connection-4.jpg){:class="img-responsive"}

**Step B: Create SAP Extraction**

Click *New* to define a new extraction and select the SAP source connection.

![Add-Extraction-01](/img/content/Add-Extraction-01.jpg){:class="img-responsive"}

Enter a unique name. Select the extraction type SAP Table or View to extract data from an SAP table. 
and click OK.

![Add-Extraction](/img/content/Add-Extraction.jpg){:class="img-responsive"}

Now the Table window opens. Click the binocular button to open a dialog for selecting a table.

![New-Table-Extraction](/img/content/New-Table-Extraction.jpg){:class="img-responsive"}

Enter the name of the table (wildcards like * are supported) and click the binocular button again to invoke the search.

![Look-Up-Table](/img/content/Look-Up-Table.png){:class="img-responsive"}

The editor is now filled in with all the columns from the table. The columns must be marked in the checkbox before they can be extracted.

![Table-Form](/img/content/Table-Form.jpg){:class="img-responsive"}

To define an optional WHERE statement, please fill in the multi-line text box below the grid. The statement must be conform to the OpenSQL Standard. Please remember that it is necessary to put blanks between the values and the operators.

Click *OK* to save the extraction to the repository of the Xtract Server. 

**Step C: Define the  extraction destination** 

After the extraction has been created, we have to define the destination, where the SAP data should be loaded to. 
In this scenario we use the default destination http-csv, the extraction data can be requested via http and is delivered in csv format. 

![XU-Step-01-Destination](/img/content/XU-Step-01-Destination.jpg){:class="img-responsive"}

Click on Destination to check the extraction-specific settings. 

![XU-Step-01-Destination-02](/img/content/XU-Step-01-Destination-02.jpg){:class="img-responsive"}



