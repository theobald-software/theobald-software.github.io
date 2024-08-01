---
ref: bc-table-join-02
layout: page
title: Verknüpfung definieren
description: Verknüpfung definieren
product: board-connector
parent: table-join
permalink: /:collection/:path
weight: 2
lang: de_DE
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

Im Beispiel mit den MARA- und MAKT-Tabellen, ist das Feld MATNR (Materialnummer) in beiden Tabellen ein Schlüsselfeld. Daher wird MATNR anhand der Namensgleichheit für die Verknüpfung der beiden Tabellen verwendet. <br>
Wenn der Mauszeiger sich über dem Join-Rechteck befindet, werden Tooltips mit den jeweiligen Feldverknüpfungen angezeigt.

![tj-2-tables-where](/img/content/tj-2-tables-where.png){:class="img-responsive"}

Mit einem Doppelklick auf das Join-Rechteck öffen Sie das Fenster für die Verknüpfung.<br>
In dem Beispiel sehen wir, dass das Feld MATNR aus der Tabelle MARA mit dem Feld MATNR aus der Tabelle MAKT verknüpft ist.

![tj-relation](/img/content/tj-relation.png){:class="img-responsive"}

Um weitere Verknüpfungen hinzufügen, klicken Sie auf Add und wählen Sie die entsprechenden Felder für die beiden Tabellen. 

**Join Type**

*INNER JOIN*
ist der standardmäßige Join-Typ. <br>
Beim Inner Join erhält man nur die Sätze des Kreuzprodukts, zu denen in allen beteiligten Tabellen ein Eintrag existiert. 

In unserem Beispiel werden alle Datensätze aus den Tabellen MARA und MAKT angezeigt, die den gleichen Wert im Feld MATNR haben. <br>
Materialstammdaten ohne Materialbeschreibung oder Materialbeschreibung ohne Materialstammdaten werden damit nicht angezeigt.

*Outer JOIN*
Beim Outer Join werden auch solche Sätze selektiert, bei denen in einigen der beteiligten Tabellen kein Eintrag existiert.

Damit werden in unserem Beispiel sowohl Materialstammdaten ohne Materialbeschreibung als auch Materialbeschreibung ohne Materialstammdaten angezeigt.

Die über einen Outer Join ermittelte Treffermenge kann also eine echte Obermenge der über einen Inner Join ermittelten Treffermenge sein.

SAP Help: [Inner Join und Outer Join](https://help.sap.com/saphelp_erp60_sp/helpdata/de/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true)