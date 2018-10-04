---
layout: page
title: Eine OHS-Extraktion definieren
description: Eine OHS-Extraktion definieren
product: board-connector
parent: bw-open-hub-service
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=eine-ohs-extraktion-definieren
---

Wir legen eine neue Extraktion von Typ OHS an. In dem leeren Dialog haben Sie die Möglichkeit, mit dem Fernglas eine OHS-Extrakion zu suchen. Entweder nach Infospoke, Destination oder Prozesskette. Natürlich können auch * für die Suche verwendet werden (Wildcards). Achtung! Eine Selektion nach Prozessketten ist nur möglich, wenn die jeweilige Prozesskette einen InfoSpoke enthält.

![OHS-Extraction-01](/img/content/OHS-Extraction-01.png){:class="img-responsive"}

Nach der Selektion werden alle Metadaten vom BW abgerufen und im Editor angezeigt.

![OHS-Extraction-02](/img/content/OHS-Extraction-02.png){:class="img-responsive"}

Sie können für den Ausführungsmodus (Execution Mode) einen der folgenden Werte wählen: 

**P - Trigger Process Chain**

Die angegebene Prozesskette wird gestartet, die Extraktion durchgeführt und nach Beendigung der Extraktion werden die Daten paketweise extrahiert.

**E – Extract Only**

Es wird weder eine Prozesskette angestartet, noch wird auf eine Extraktionsbenachrichtigung gewartet. Die im Feld *Request ID* eingetragene Request ID wird genutzt, um die Daten abzurufen, die sich hinter dem jeweiligen Request verbergen. Diese Option ist dann sinnvoll, wenn Sie beispielsweise einen abgebrochenen Request neu starten möchten.


