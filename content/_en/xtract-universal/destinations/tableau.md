---
ref: destinations-110
layout: page
title: Tableau
description: Tableau
product: xtract-universal
parent: destinations
childidentifier: tableau
permalink: /:collection/:path
weight: 110
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=tableau
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

The following section describes the loading of the SAP extraction data into Tableau Analytics Platform. 

The Tableau Destination enables you to save data extracted from SAP as Hyper files.

It is also possible to upload the Hyper file to Tableau Server or Tableau Online.


## Requirements

- Tableau Export Library
- Visual C++ 2015 Runtime

Download the Tableau Export Library and Visual C++ 2015 Runtime [here](https://s3.eu-central-1.amazonaws.com/cdn-files.theobald-software.com/download/XtractUniversal/tableau.zip).<br>
If no Visual C++ 2015 Runtime is installed on your machine, run the vc_redist.x64.exe to install the Visual C++ 2015 Runtime. <br>
Copy the `tableau` folder into your Xtract Universal directory so that the following folder structure is created: `C:\Program Files\XtractUniversal\tableau\hyper`.

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details
![tableauDestinationDetails-hyper](/img/content/tableauDestinationDetails-hyper.png){:class="img-responsive"}

### Output directory
Enter the directory on the Xtract Universal Server to store the generated Tableau files in.

{: .box-note }
**Note:** Make sure that the directory exists.

### Tableau Server
**Upload to Tableau Server**<br>
Option to upload the extracted file (as a data source) to Tableau Server or Tableau Cloud.

**Delete local file after upload**<br>
Option to remove the local file after a successful upload.

**Host**<br>
Enter the IP address or domain name of the remote server, starting with `http://` or `https://`.

**PAT name**<br>
Enter the name of your [Personal Access Token (PAT)](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm#make-a-sign-in-request-with-a-personal-access-token).<br>
To extract data to Tableau Server the site role "Server Administrator" is required.<br>

**PAT secret**<br>
Enter a valid token secret that corresponds to your token name.

**Site (for Tableau Cloud)**<br>
Enter the ID of the site for publishing your data source. 
This field is mandatory and cannot be left blank. <br>
Get the correct site URL from [Tableau Cloud](https://online.tableau.com/#/site/Site/workbooks).

**[Test Connection]**<br>
Check the database connection. 

### Tableau Server Settings
**Site**<br>
A drop-down list of the sites stored on the connected on-prem server. Selecting a site is mandatory for uploading files. 

**Project**<br>
Select the project in which the extracted data is published. 

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings
![Tableau-Extraction-Specific-Settings](/img/content/Tableau-Extraction-Specific-Settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/existing-files.md %}

{% include _content/en/xu-specific/destinations/general/column-mapping.md %}

{: .box-note }
**Note:** Columns that are not mapped are filled with NULL values.


*****
## Related Links
- [Webinar: Visualize your SAP data in Tableau](https://www.youtube.com/watch?v=X6T3NfVDhJE)
