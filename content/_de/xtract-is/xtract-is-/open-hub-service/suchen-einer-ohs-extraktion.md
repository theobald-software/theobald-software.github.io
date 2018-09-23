---
layout: page
title: Suchen einer OHS-Extraktion
description: Suchen einer OHS-Extraktion
product: xtract-is
parent: open-hub-service
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=suchen-einer-ohs-extraktion
---

Innerhalb des Editors haben Sie die Möglichkeit, mit dem Fernglas eine OHS-Extrakion zu suchen. Entweder nach Infospoke, Destination oder Prozesskette. Natürlich können auch Wildcards ( * ) für die Suche verwendet werden. Achtung! Eine Selektion nach Prozessketten ist nur möglich, wenn die jeweilige Prozesskette einen InfoSpoke enthält.

![OHS-Search-001](/img/content/OHS-Search-001.png){:class="img-responsive"}

Nach der Selektion werden alle Metadaten vom BW abgerufen und im Editor angezeigt.
Die Art der Extraktion definiert sich durch drei Fälle:

**P - Trigger Process Chain**<br>
Die angegebene Prozesskette wird gestartet, die Extraktion durchgeführt und nach Beendigung der Extraktion werden die Daten paketweise extrahiert.

**W – Wait for Notify**<br>
Es wird keine Prozesskette angestartet, sondern das Tool wartet nur, bis es über die Beendigung der Extraktion informiert wird. Für das Anstarten der Extraktion ist jemand anderes zuständig (z.B. der SAP-eigene Scheduler).

**E – Extract Only**<br>
Es wird weder eine Prozesskette angestartet, noch wird auf eine Extraktionsbenachrichtung gewartet. Die im Feld *Request ID* eingetragene Request ID wird genutzt, um die Daten abzurufen, die sich hinter dem jeweiligen Request verbergen. Diese Option ist dann sinnvoll, wenn Sie beispielsweise einen abgebrochenen Request erneut extrahieren möchten. Es können nur Daten des letzten Requests der OHS Destination extrahiert werden.

![OHS-Search-002](/img/content/OHS-Search-002.png){:class="img-responsive"}