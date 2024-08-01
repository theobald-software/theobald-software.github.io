---
ref: bc-table-join-05
layout: page
title: Aggregat-Funktion
description: Aggregat-Funktion
product: board-connector
parent: table-join
permalink: /:collection/:path
weight: 5
lang: de_DE
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

Im Tab Grouping Criteria können Sie eine Bedingung mit einer Aggregat-Funktion definieren. Davor müssen Sie aber erstmal die Aggregat-Funktion definieren.

![tj-aggregate-count](/img/content/tj-aggregate-count.png){:class="img-responsive"}

Im Tab Grouping Criteria klicken Sie auf Click here to define criteria.

![tj-grouping-criteria-0](/img/content/tj-grouping-criteria-0.png){:class="img-responsive"}

Sie wählen dann die Aggregat-Funktion, das Feld, die Operation und den Wert. 

![tj-grouping-criteria-1](/img/content/tj-grouping-criteria-1.png){:class="img-responsive"}

Hier definieren wir die Bedingung, dass die Anzahl der Sprachen der Beschreibungstexte in der MAKT-Tabelle größer oder gleich 2 ist. 

![tj-grouping-criteria-count](/img/content/tj-grouping-criteria-count.png){:class="img-responsive"}

Im SQL-Dialog finden Sie den entsprechenden SQL-Ausdruck. 

![tj-grouping-sql](/img/content/tj-grouping-sql.png){:class="img-responsive"}