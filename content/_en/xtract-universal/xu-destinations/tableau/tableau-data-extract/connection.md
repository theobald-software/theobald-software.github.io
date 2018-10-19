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

The following setting can be defined in the Tableau Destination configuration:

![tableauDestinationDetails-hyper](/img/content/tableauDestinationDetails-hyper.png){:class="img-responsive"}

**Output directory**<br>
The directory on the Xtract Universal Server where the generated TDE Tableau files will be saved.
Make sure that the directory exists.

**TDE** or **Hyper**<br>
Select the desired format for the Data Extract file.

**Tableau Server**<br>
You can choose to upload the extracted TDE file (as a data source) to Tableau Server or Tableau Online.

**Host**<br>
The IP address or domain name of the remote server, starting with http:// or https://.

**Username**<br>
Your username for Tableau Server/Online.

**Password**<br>
Your password for Tableau Server/Online.

**Site**<br>
The ID of the site, where you want to publish your data source in. 
On Tableau Server, the default site will be selected if you leave the field blank. 
For Tableau Online this parameter is mandatory. Please sign in to Tableau Online and determine your Site parameter from the URL:

[https://online.tableau.com/#/site/Site/workbooks](https://online.tableau.com/#/site/Site/workbooks)

**Project**<br>
The project where the data source should be published. A new project will be created if it doesn't exist yet.

**Delete local file after upload**<br>
You can choose to remove the local file after successful upload.