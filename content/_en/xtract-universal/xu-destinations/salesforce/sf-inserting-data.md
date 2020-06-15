---
ref: xu-salesforce-04
layout: page
title: Inserting Data
description: Inserting Data
product: xtract-universal
parent: salesforce
permalink: /:collection/:path
weight: 4	
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=inserting_data1
progressstate: 3
---

In this example we will extract data to Salesforce.

**Define extraction**

We define an extraction based on the SAP table **KNA1** for general customer information.

![sf-settings_create_object_2](/img/content/sf-settings_create_object_2.PNG){:class="img-responsive"}

The two columns needed for this example are KUNNR and UMSA1. The Where Clause will be used to get only those entries which match our criteria.


**Set destination** 

To use the Salesforce destination we have to set our Salesforce login data.


![sf-definition](/img/content/sf-definition.PNG){:class="img-responsive"}

**Define destination settings**

These settings are set by default and required for this example.

![sf-settings_create_object__0](/img/content/sf-settings_create_object__0.PNG){:class="img-responsive"}

The **Preparation** option Create if not exists will only create a new Salesforce object if no object with the same name already exists. With **Row processing** set to *Insert* all new entries will be inserted into the specified object and merging won’t be possible.


**Run extraction**

Click the **Run** button in the extraction definition window. In the dialog click either **Run in xu.exe** or **Run in Browser**.

![sf-run_extraction_popup](/img/content/sf-run_extraction_popup.PNG){:class="img-responsive"}

Refresh the Designer by clicking the **Refresh** button. Check the execution status and the number of rows that have been extracted.


To check the processing status in Salesforce we have to navigate to **Setup > Jobs > Bulk Data Load Jobs**. Here we can check the status of our extraction job. Make sure the number of records processed matches the number of rows extracted in Xtract Universal.

![sf-salesforce_view](/img/content/sf-salesforce_view.PNG){:class="img-responsive"}

The entries in our **Sales__c** object look as following:

![sf-salesforce_entries_view](/img/content/sf-salesforce_entries_view.PNG){:class="img-responsive"}
