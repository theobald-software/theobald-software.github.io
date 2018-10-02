---
layout: page
title: Tabellen
description: Tabellen
product: xtract-universal
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=tabellen
---

Tabellen können sowohl in den Baustein hinein, als auch aus ihm heraus 'fließen'. Im unteren Bereich des Editors können Sie für jede Tabelle des BAPI einen Input- und Output-Type definieren.

![Bapi-Table-Type](/img/content/Bapi-Table-Type.png){:class="img-responsive"}

Folgende Optionen sind für den Input-Type möglich:

**Static**<br>
bedeutet, dass die Tabelle Festwerte enthält. Öffnen Sie mit dem Edit-Link das Eingabefenster für die Festwerte. Die Option Static ist natürlich nur für Tabellen interessant, die an den Baustein übergeben werden, nicht für die, die zurückkommen.

**Skip**<br>
bedeutet, dass die Tabelle ignoriert wird.


Folgende Optionen sind für den Output-Type möglich:

**Pipeline**<br>
bedeutet, dass die Tabelle in den Datenausgang geleitet wird und somit später als Datenlieferant zur Verfügung steht.

**Skip**<br>
bedeutet, dass die Tabelle ignoriert wird

Das folgende Bild zeigt die Tabelle IDRANGE. Wählen Sie Static als Input Type und klicken Sie auf Edit, um die statischen Werte zu füllen. Diese Werte werden damit später beim Aufruf an den Baustein übergeben.

![Bapi-Table-Static-Input](/img/content/Bapi-Table-Static-Input.png){:class="img-responsive"}

![Bapi-Table-Edit](/img/content/Bapi-Table-Edit.png){:class="img-responsive"}
