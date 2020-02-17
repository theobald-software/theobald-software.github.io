---
ref: xu-azure-dwh-05
layout: page
title: Merging Data
description: Merging Data
product: xtract-universal
parent: azure-dwh
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=merging_data1
---
{: .box-note }
**Note** Prerequisite for executing the merge is defining a primary key in the **General Settings** of the extraction.

![XU_table_Primary_key](/img/content/XU_table_Primary_key.png){:class="img-responsive"}

Now let's change the Destination settings of the extraction and set 
- Preparation to *Prepare Merge*
- Row Processing to *Fill merge staging table*
- Finalization to *Finalize Merge*

to merge the data.

![XU_Azure_DWH_merge](/img/content/XU_Azure_DWH_merge.png){:class="img-responsive"}

The *Prepare Merge* statement creates a temporary staging table on the database.
{% highlight sql %}
CREATE TABLE [T001W_STAGING]
(
   [WERKS] NATIONAL CHARACTER VARYING(4) NOT NULL,
   [NAME1] NATIONAL CHARACTER VARYING(30),
   [KUNNR] NATIONAL CHARACTER VARYING(10),
   [NAME2] NATIONAL CHARACTER VARYING(30)
);
{% endhighlight %}

In the *Row Processing* the staging table is filled.

{% highlight sql %}
INSERT INTO [T001W_STAGING]
(
   [WERKS],
   [NAME1],
   [KUNNR],
   [NAME2]
)
VALUES
(
   @WERKS,
   @NAME1,
   @KUNNR,
   @NAME2
);
{% endhighlight %}

The *Finalize Merge* statement inserts new data rows and updates an existing ones.
Afterwards the staging table created in the Preparation step will be deleted.

{% highlight sql %}
UPDATE [T001W] SET
   [T001W].[WERKS] = [T001W_STAGING].[WERKS],
   [T001W].[NAME1] = [T001W_STAGING].[NAME1],
   [T001W].[KUNNR] = [T001W_STAGING].[KUNNR],
   [T001W].[NAME2] = [T001W_STAGING].[NAME2]
FROM [T001W_STAGING]
WHERE
   [T001W].[WERKS] = [T001W_STAGING].[WERKS];

INSERT INTO [T001W]
(
   [WERKS],
   [NAME1],
   [KUNNR],
   [NAME2]
)
SELECT
   [WERKS],
   [NAME1],
   [KUNNR],
   [NAME2]
FROM [T001W_STAGING]

   WHERE NOT EXISTS
   (
      SELECT 1
      FROM [T001W]
      WHERE
         [T001W].[WERKS] = [T001W_STAGING].[WERKS]
   );

DROP TABLE [T001W_STAGING];
{% endhighlight %}

