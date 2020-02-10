---
ref: xu-microstrategy-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: microstrategy
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen6
---

Wenn Sie auf die **Destination** Schaltfläche klicken, können Sie extraktionsspezifische Einstellungen bezüglich des Ziels festlegen.

![mstr-destinations](/img/content/mstr-destinations.png){:class="img-responsive"}

{% include _content/de/xu-specific/xu-destinations/general/table-name.md %}
### Column name style
{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %}

#### Dataset ID

ID des Datasets mit dem gearbeitet werden soll. Diese kann entweder manuell gesetzt werden, oder wird automatisch vom Server bezogen. Wird in jedem Fall auch ins Log geschrieben. 

**Update Policy**<br>
Beschreibt die Art, wie die Daten in MSTR geschrieben werden. <br>
**DropAndCreate** ist der default Wert. Vorhandene Tabelle wird ggf. gelöscht und Daten werden eingefügt. <br>
**Add** verhält sich wie ein Insert und fügt Daten in die vorhandene Tabelle neu hinzu, sofern sie noch nicht in der Datenbank existieren. Dataset ID wird benötigt. <br>
**Update**: aktualisiert die metrischen Werte im Datensatz, wenn bereits ein passender Schlüssel im Datensatz vorhanden ist; neue Datensätze werden ignoriert. <br>
**Upsert**: aktualisiert bestehende Datensätze und fügt dann auch neue hinzu. <br>
**Replace** verhält sich wie ein Truncate and Insert. Alle vorhandenen Daten werden gelöscht und durch die neuen ersetzt. Dataset ID wird benötigt.

#### Attributes and metrics

Attribute and Metriken (Kennzahlen) werden automatisch basiert auf dem Datentyp des Quellobjekts definiert. <br>
Um sie im Einzelfall anders definieren zu können, klicken Sie auf den entsprechenden Knopf, um die JSON-Definition zu generieren und ggf. zu ändern. 

![mstr-extraction-settings_metrics](/img/content/mstr-extraction-settings_metrics.PNG){:class="img-responsive"}

![mstr-extraction-settings_attr](/img/content/mstr-extraction-settings_attr.png){:class="img-responsive"}

