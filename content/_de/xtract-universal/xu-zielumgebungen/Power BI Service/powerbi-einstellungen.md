---
ref: xu-powerbi-cloud-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: Power BI Service
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=powerbi-einstellungen
---

Sie können über **Extraction-Specific Settings** Einstellungen für jede Extraktion bezüglich des Ziels festlegen.

![powerbi-settings](/img/content/powerbi-settings.jpg){:class="img-responsive"}

#### Automatic dataset

Ein dataset mit einer einzigen Tabelle wird automatisch angelegt. 

#### Custom Dataset

Sie haben auch die Möglichkeit manuell ein Dataset zu erstellen.<br>
Sie können auch beliebig viele Tabellen im Dataset definieren. <br>
Beachten Sie, dass aufgrund der Einschränkungen in der PowerBI-Schnittstelle später keine Tabellen mehr dem vorhandenen Dataset hinzugefügt werden können. 

![powerbi-settings-custom-01](/img/content/powerbi-settings-custom-01.jpg){:class="img-responsive"}

**Create dataset**

Klicken Sie drauf, um ein neues Dataset zu erstellen.

![powerbi-settings-custom-02](/img/content/powerbi-settings-custom-02.jpg){:class="img-responsive"}

Geben Sie den Namen des Datasets und die Namen der Tabellen, welcher erstellt werden müssen. 

![powerbi-settings-custom-03](/img/content/powerbi-settings-custom-03.jpg){:class="img-responsive"}

Bestätigen Sie mit **create**.

![powerbi-settings-custom-04](/img/content/powerbi-settings-custom-04.jpg){:class="img-responsive"}

Nun wählen Sie ein Dataset und eine Tabelle aus der Liste. 

![powerbi-settings-custom-05](/img/content/powerbi-settings-custom-05.jpg){:class="img-responsive"}

Wenn die Extraktion ausgeführt wird, dann werden die Daten in die gewählte Dataset-Tabelle geschrieben.

{% include _content/de/xu-specific/xu-destinations/general/table-name.md %}

{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %}

#### Power Bi Settings

**Rows per Package**
Gibt die Anzahl der Datensätze an, die pro Packet in die Tabelle des Datasets geschrieben werden. <br>
Welche Werte in Ihrem Fall optimal sind, muss ausprobiert werden.

