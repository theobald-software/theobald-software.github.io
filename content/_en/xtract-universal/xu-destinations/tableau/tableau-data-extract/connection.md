---
ref: xu-tableau-data-extract-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: tableau-data-extract
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=connection
---

The following settings are available when setting up the Tableau destination:

![tableauDestinationDetails-hyper](/img/content/tableauDestinationDetails-hyper.png){:class="img-responsive"}

### Connection
**TDE** or **Hyper**<br>
Select the desired format for the Data Extract file.

**Output directory**<br>
The directory on the Xtract Universal Server to store the generated TDE Tableau files.

{: .box-note }
**Note:** Make sure that the directory exists.



### Tableau Server
- **Upload to Tableau Server**
Option to upload the extracted TDE file (as a data source) to Tableau Server or Tableau Online.
- **Delete local file after upload**
Option to remove the local file after a successful upload.

**Host**<br>
The IP address or domain name of the remote server, starting with `http://` or `https://`.

**Username**<br>
Your username for Tableau Server/Online.

**Password**<br>
Your password for Tableau Server/Online.

**Site (for Tableau online)**<br>
The ID of the site for publishing your data source. 
The field is mandatory and cannot be left blank. 

Get the correct site URL from [Tableau Online](https://online.tableau.com/#/site/Site/workbooks).

For the extraction of data to Tableau Online the role "Server Administrator" is required as "Site Role".
![Tableau_Server_Admin](/img/content/tableau_server_admin.png){:class="img-responsive"}

**[Test Connection]**<br>
Button to check if the connection data is correct and a connection can be established.

### Tableau Server Settings
**Site**<br>
A drop-down list of the sites stored on the connected on-prem server.

**Project**<br>
The project for publishing data source. A new project is created, if it doesn't exist yet.
