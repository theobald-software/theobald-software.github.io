---
ref: bc-bapis-and-function-modules-04
layout: page
title: Tabellen
description: Tabellen
product: board-connector
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /BOARD-Connector-DE/	default.aspx?pageid=tabellen
---

Tabellen können sowohl in den Baustein hinein, als auch aus ihm heraus 'fließen'. Im unteren Bereich des Editors können Sie für jede Tabelle des BAPI einen Input- und Output-Type definieren.

![BAPI-Table-01](/img/content/BAPI-Table-01.png){:class="img-responsive"}


Folgende Optionen sind für den Input-Type möglich:

**Static**

bedeutet, dass die Tabelle Festwerte enthält. Öffnen Sie mit dem Edit-Link das Eingabefenster für die Festwerte. Die Option Static ist natürlich nur für Tabellen interessant, die an den Baustein übergeben werden, nicht für die, die zurückkommen.

**Skip**

bedeutet, dass die Tabelle ignoriert wird.

Folgende Optionen sind für den Output-Type möglich:

**Pipeline**

bedeutet, dass die Tabelle in den Datenausgang geleitet wird und somit später als Datenlieferant zur Verfügung steht.

**Skip**

bedeutet, dass die Tabelle ignoriert wird

Das folgende Bild zeigt die Tabelle IDRANGE. Wählen Sie Static als Input Type und klicken Sie auf Edit, um die statischen Werte zu füllen. Diese Werte werden damit später beim Aufruf an den Baustein übergeben.

![BAPI-Table-02](/img/content/BAPI-Table-02.png){:class="img-responsive"}

![BAPI-Table-03](/img/content/BAPI-Table-03.png){:class="img-responsive"}


Das folgende Bild zeigt den Output-Type Pipeline. Die Tabelle ADDRESSDATA dient somit als Datenlieferant.

![BAPI-Table-04](/img/content/BAPI-Table-04.png){:class="img-responsive"}