---
ref: xu-tableau-data-extract-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=connection
---

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details
![tableauDestinationDetails-hyper](/img/content/tableauDestinationDetails-hyper.png){:class="img-responsive"}

### Output directory
Enter the directory on the Xtract Universal Server to store the generated Tableau files in.

{: .box-note }
**Note:** Make sure that the directory exists.


### Tableau Server
- **Upload to Tableau Server**
Option to upload the extracted file (as a data source) to Tableau Server or Tableau Online.
- **Delete local file after upload**
Option to remove the local file after a successful upload.

**Host**<br>
Enter the IP address or domain name of the remote server, starting with `http://` or `https://`.

**Username**<br>
Enter your username for Tableau Server/Online.

**Password**<br>
Enter your password for Tableau Server/Online.

**Site (for Tableau online)**<br>
Enter the ID of the site for publishing your data source. 
This field is mandatory and cannot be left blank. 

Get the correct site URL from [Tableau Online](https://online.tableau.com/#/site/Site/workbooks).

For the extraction of data to Tableau Online the role "Server Administrator" is required as "Site Role".
![Tableau_Server_Admin](/img/content/xu/tableau_server_admin.png){:class="img-responsive"}

**[Test Connection]**<br>
Check the database connection. 

#### Tableau Server Settings
**Site**<br>
A drop-down list of the sites stored on the connected on-prem server. Selecting a site is mandatory for uploading files. 

**Project**<br>
The project for publishing data source.
