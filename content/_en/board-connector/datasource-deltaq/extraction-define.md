---
layout: page
title: Define a DeltaQ Extraction
description: Define a DeltaQ Extraction
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=define-a-deltaq-extraction
---

Within the editor, you can look up a *DataSource* (OLTP Source) by clicking the binocular button. You can also use wildcards ( * ) in your search.

![DeltaQ-Extraction](/img/content/DeltaQ-Extraction.png){:class="img-responsive"}

The following example shows the download of material master data from the DataSource 0MATERIAL_ATTR.

![DeltaQ-LookUp](/img/content/DeltaQ-LookUp.png){:class="img-responsive"}

Now set the logical target system and the technical settings for the RFC destination (as shown in section [Customizing](./customizing)) on the top right.

Gateway Host is the name (or IP address of your SAP system). Be sure that the Gateway Host is the same as in your SAP Connection. <br>
The Gateway Service is generally sapgwNN, where NN is the ID of your SAP system, i.e. a number between 00 andd 99.
See Customizing Check.
  
You also have to put a checkmark next to the columns you would like to extract. Your template should look like this when you're done:

![DeltaQ-Extraction-01](/img/content/DeltaQ-Extraction-01.png){:class="img-responsive"}

Before you activate the extraction in SAP use the *Customzing Check* link to validate the extraction.

![DeltaQ-Customizing-Check](/img/content/DeltaQ-Customizing-Check.png){:class="img-responsive"}

If the validation finished without errors you can activate this extraction in SAP (click the *Activate* button). If activation is successful, the corresponding status messages will appear within the course of a few seconds:

![DeltaQ-Message-01](/img/content/DeltaQ-Message-01.png){:class="img-responsive"}

![DeltaQ-Message-02](/img/content/DeltaQ-Message-02.png){:class="img-responsive"}

Once activated successfully, the local extraction can be launched (Button Local Extraction). The local extraction will first output a protocol and, if successful, show the extracted data: 

From now on the extraction can be executed via the Run button.

![DeltaQ-Source-Definition](/img/content/DeltaQ-Source-Definition.png){:class="img-responsive"}

For any Errors please refer to our [DeltaQ Troubleshooting Guide](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/107/4/deltaq-troubleshooting-guide). 