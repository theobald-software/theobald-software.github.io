---
ref: xu-tableau-04
layout: page
title: Teil 2 - Verlinken einer BEx-Query mit einer BW-Hierarchie
description: Teil 2 - Verlinken einer BEx-Query mit einer BW-Hierarchie
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=teil_2___verlinken_einer_bex_query_mit_einer_bw_hierarchie
---

Bei SAP BW-Hierarchien werden die Ausprägungen eines Merkmals den verschiedenen Knoten einer Hierarchie zugeordnet. Alle Ausprägungen des Merkmals, die keinem Hierarchie-Knoten zugeordnet wurden, tauchen unter dem sog. "Not Assigned"-Knoten auf.

![BExQuery_notAssigned_node](/img/content/BExQuery_notAssigned_node.jpg){:class="img-responsive"}

Bei der Verlinkung einer BEx-Query mit einer BW-Hierarchie in Tableau, hängt die Anzeige des Not Assigned-Knotens davon ab, welche der Datenquellen (TDE-Datei mit BEx Query-Extrakt oder TDE-Datei mit BW Hierarchy-Extrakt) als primäre Datenquelle definiert wurde.

Das ist folgendermaßen in der [Tableau Online-Hilfe](https://onlinehelp.tableau.com/current/pro/online/mac/de-de/multipleconnections_secondary.html) beschrieben:<br>
"Die primäre Datenquelle ist die Verbindung, die Sie in der Ansicht zuerst verwenden. Nachdem Sie Felder in die Ansicht gezogen haben, wird die primäre Datenquelle mit einem blauen Häkchen gekennzeichnet."

Der Not Assigned-Knoten ist nur dann sichtbar, wenn der BEx Query-Extrakt primäre Datenquelle ist. In Tableau wird der Knoten als "Null" bezeichnet.

![Tableau_Relationship_with_Null_Node](/img/content/Tableau_Relationship_with_Null_Node.jpg){:class="img-responsive"}

Ist der BW Hierarchy-Extrakt die primäre Datenquelle, wird der Null-Knoten nicht angezeigt.

![Tableau_Relationship_without_Null_Node](/img/content/Tableau_Relationship_without_Null_Node.jpg){:class="img-responsive"}

