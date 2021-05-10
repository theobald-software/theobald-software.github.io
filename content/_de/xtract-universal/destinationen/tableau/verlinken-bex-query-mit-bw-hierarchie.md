---
ref: xu-tableau-03
layout: page
title: Teil 1 - Verlinken einer BEx-Query mit einer BW-Hierarchie
description: Teil 1 - Verlinken einer BEx-Query mit einer BW-Hierarchie
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=verlinken-bex-query-mit-bw-hierarchie
---

In diesem Beispiel extrahieren wir eine BEx-Query und eine BW-Hierarchie und erstellen eine Beziehung in Tableau, um die beiden Extraktionen zu verlinken. 

### Schritt 1: Eine BEx-Query-Extraction anlegen.
![XU-Tableau-BExQuery](/img/content/XU-Tableau-BExQuery.png){:class="img-responsive"}

Die Extraktion hat die folgenden General Settings:

![XU-Tableau-BExQuery-Settings](/img/content/XU-Tableau-BExQuery-Settings.png){:class="img-responsive"}

Für weitere Informationen siehe [BW InfoCubes und BEx Queries](../../bw-infocubes-und-bex-queries).

### Schritt 2: Eine BW-Hierarchie-Extraktion anlegen.

![XU-Tableau-Hierarchy](/img/content/XU-Tableau-Hierarchy.png){:class="img-responsive"}

Die Extraktion hat die folgenden General Settings. Hier wird die Option *Natural representation* gewählt. 

![XU-Tableau-Hierarchy-Settings](/img/content/XU-Tableau-Hierarchy-Settings.png){:class="img-responsive"}

Für weitere Informationen siehe [BW Hierarchien](../../bw-hierarchien).


### Schritt 3: Eine Beziehung erstellen.
Beide Extraktionen in Tableau laden und eine Beziehung zwischen diesen erstellen.
![Tableau-BExQuery-Datasource](/img/content/Tableau-BExQuery-Datasource.png){:class="img-responsive"}

![Tableau-BWHierarchy-Datasource](/img/content/Tableau-BWHierarchy-Datasource.png){:class="img-responsive"}

Wir erstellen eine Beziehung zwischen beiden Extraktionen, in dem wir die Felder Sold to *party key* (bexquery) und *Node Name* (bwhierarchy) verlinken.<br>
Wählen Sie aus dem Menü Data -> *Edit Relationships*.<br>
Wählen Sie *Custom* und klicken Sie auf Add.<br>
Wählen Sie *Node Name* als das primary field und *Sold to party Key* als das secondary field.<br>
Klicken Sie auf OK.

![Tableau-Edit-Relationships](/img/content/Tableau-Edit-Relationships.png){:class="img-responsive"}

Die beiden Extraktionen sind nun verlinkt und Sie können Daten aus beiden Extraktionen in einem einzigen Tableau-Sheet verwenden. 

![Tableau-Linked-Data-Sources](/img/content/Tableau-Linked-Data-Sources.png){:class="img-responsive"}

Für weitere Informationen über Beziehungen in Tableau siehe [Tableau Online Help](https://www.tableau.com/support/online). 

### "Not Assigned" Knoten

Bei SAP BW-Hierarchien werden die Ausprägungen eines Merkmals den verschiedenen Knoten einer Hierarchie zugeordnet. Alle Ausprägungen des Merkmals, die keinem Hierarchie-Knoten zugeordnet wurden, tauchen unter dem sog. "Not Assigned"-Knoten auf.

![BExQuery_notAssigned_node](/img/content/BExQuery_notAssigned_node.png){:class="img-responsive"}

Bei der Verlinkung einer BEx-Query mit einer BW-Hierarchie in Tableau, hängt die Anzeige des Not Assigned-Knotens davon ab, welche der Datenquellen (TDE-Datei mit BEx Query-Extrakt oder TDE-Datei mit BW Hierarchy-Extrakt) als primäre Datenquelle definiert wurde.

Das ist folgendermaßen in der Tableau Online-Hilfe beschrieben:<br>
"Die primäre Datenquelle ist die Verbindung, die Sie in der Ansicht zuerst verwenden. Nachdem Sie Felder in die Ansicht gezogen haben, wird die primäre Datenquelle mit einem blauen Häkchen gekennzeichnet."

Der Not Assigned-Knoten ist nur dann sichtbar, wenn der BEx Query-Extrakt primäre Datenquelle ist. In Tableau wird der Knoten als "Null" bezeichnet.

![Tableau_Relationship_with_Null_Node](/img/content/Tableau_Relationship_with_Null_Node.png){:class="img-responsive"}

Ist der BW Hierarchy-Extrakt die primäre Datenquelle, wird der Null-Knoten nicht angezeigt.

![Tableau_Relationship_without_Null_Node](/img/content/Tableau_Relationship_without_Null_Node.png){:class="img-responsive"}

