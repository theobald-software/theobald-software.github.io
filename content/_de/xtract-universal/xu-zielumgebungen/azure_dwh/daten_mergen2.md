---
ref: xu-azure-dwh-05
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: azure_dwh
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=daten_mergen2
---

In diesem Beispiel wollen wir neue Datensätze einfügen und bestehende Datensätze aktualisieren.<br>
Voraussetzung hierfür ist, dass in den *General Settings* der Extraktion ein Primärschlüssel vergeben wurde.

![XU_table_Primary_key](/img/content/XU_table_Primary_key.png){:class="img-responsive"}

Nun ändern wir die Destination Einstellungen und setzen 

- Preparation auf *Prepare Merge*, um eine temporäte Staging-Tabelle anzulegen.<br>
- Row Processing auf *Fill merge staging table*, um Daten in die Staging-Tabelle einzufügen und <br>
- Finalization auf *Finalize Merge*, um die Staging-Tabelle mit der Zieltabelle zu mergen und anschließen die Staging-Tabelle zu löschen.

![XU_Azure_DWH_merge](/img/content/XU_Azure_DWH_merge.png){:class="img-responsive"}

Das *Prepare Merge* Statement erstellt eine temporäre Tabelle auf der Datenbank.

{% highlight sql %}
CREATE TABLE [T001W_STAGING]
(
   [WERKS] NATIONAL CHARACTER VARYING(4) NOT NULL,
   [NAME1] NATIONAL CHARACTER VARYING(30),
   [KUNNR] NATIONAL CHARACTER VARYING(10),
   [NAME2] NATIONAL CHARACTER VARYING(30)
);
{% endhighlight %}

Im Bereich *Row Processing* wird die temporäre Tabelle befüllt.

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

Das Finalize Merge Statement fügt auf Basis des Primärschlüssels neue Datensätze ein bzw. aktualisiert bestehende Datensätze.<br>
Anschließend wird die Staging-Tabelle gelöscht.

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

