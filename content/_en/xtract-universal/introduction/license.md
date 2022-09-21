---
ref: xu-introduction-06
layout: page
title: Licensing
description: About the license of Xtract Universal
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=license
progressstate: 5
---
<!--- ### About the licensing concept of Xtract Universal
Xtract Universal is licensed per target environment, source system and Windows server. <br>
The following graphic shows on which workstations the installation of Xtract Universal with a valid license is required.   

![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}

A demo license is automatically installed with the installation of Xtract Universal.<br>
A regular license is provided in the [costumer portal - My Theobald Software](https://my.theobald-software.com/) after purchasing the product. 
The product license is bound to your company and a specific server name.<br>
If you run Xtract Universal Designer and Xtract Universal Server on different machines, it is only necessary to replace the license on the server.
 -->

### About the licensing concept of Xtract Universal

A demo license is automatically installed with the installation of Xtract Universal.<br>
A regular license is provided in the [costumer portal - My Theobald Software](https://my.theobald-software.com/) after purchasing the product. 

#### License Metrics

Xtract Universal is licensed per Windows server, source system and destination. A regular license includes the creation of 100 extractions. <br>
Xtract Universal checks the following license metrics before running an extraction:

| License Metric <img width=450/>| Description <img width=1550/>|
|:------------ | :------------ |
|license serial number| -  | 
|license expiration date | - | 
|licensed server name | The product license is bound to your company and a specific server name. If you run Xtract Universal Designer and Xtract Universal Server on different machines, it is only necessary to replace the license on the server, see [Moving a License to a new Server](#moving-license-to-a-new-server). The following graphic shows on which workstations the installation of Xtract Universal with a valid license is required. <br>![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}| 
|number of SAP sources | A source is a defined SAP connection, see [Creating an SAP Connection](../getting-started/sap-connection). A regular license allows up to 5 SAP connections.| 
|number of extractions | An extraction is a definition of what data is extracted and how it is extracted. There are 9 types of extractions: [BAPI](./bapis-and-function-modules), [BWCube](./bw-infocubes-and-bex-queries), [BW Hierarchy](./bw-hierarchies), [DeltaQ](./datasource-deltaq/), [ODP](./odp), [OHS](./bw-open-hub-services), [SAP Query](./sap-queries), [Report](./abap-reports) and [Table](./table). Depending on the extraction type, an extraction can include the definition of parameters, data formats, and other options. <br>When running an extraction, the defined data is extracted from the SAP source that is assigned to the extraction and written to the destination assigned to the extraction. A regular license allows the creation of 100 extractions.| 
|licensed destinations | A destination defines the location to which Xtract Universal can write the extracted SAP data. Destinations can be local directories, databases, data warehouses, business intelligence and analytics tools, business systems, cloud storages and others. For a complete list of available destinations, see [Destinations](../destinations). | 

{: .box-note }
**Note:** The number of defined extractions and other license information is displayed in the [status bar](../getting-started/designer-overview#status-bar) of the Designer.<br>

{: .box-tip }
**Recommendation:** According to our experience medium-sized businesses use less than 100 extractions.

![glossary](/img/content/glossary-example.jpg){:class="img-responsive"}


### Installing the Xtract Universal license - XtractUniversalLicense.json
For installing the regular license, place the regular XtractUniversalLicense.json into the following directory of the server: <br>
`C:\Program Files\XtractUniversal`
 <br>
 ![XU_license](/img/content/xu/xu_json_license.png ){:class="img-responsive"}
 
A restart of the Xtract Universal service is not necessary.

### Moving a License to a new Server
When moving your setup to a new server, a new license file must be issued for that server.
Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) to let us know the name of the new server.

For more information on the migration process, see [Migration to a Different Machine](../advanced-techniques/backup-and-migration#migration-to-a-different-machine).

### About Xtract Universal - Info Window

{: .box-tip }
**Tip:** To inspect your current license data, go to the main menu bar of the Xtract Universal Designer and choose **[Help] > [Info]** or press F12.

![Demo_License](/img/content/xu/xu_demo_license.png){:class="img-responsive"}

The *About* tab of the info window contains useful links to the customer portal, knowledge base, Online Help and the support. <br> 
![Abot](/img/content/about-xu.png){:class="img-responsive"}

### Maintenance
General information on maintenance pricing is available on the [official website](https://theobald-software.com/en/xtract-universal/pricing-and-order) of Theobald Software and at [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/). Contact the [sales department](mailto:sales@theobald-software.com) for more information about available maintenance options.<br>
In case of technical difficulties, contact the [support team](https://support.theobald-software.com).


****
#### Related Links
- [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/)