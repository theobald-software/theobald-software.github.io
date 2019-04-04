---
ref: xu-sap-queries-01
layout: page
title: Definieren einer Query
description: Definieren einer Query
product: xtract-universal
parent: sqp-queries
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=definieren-einer-query
---

Erstellen Sie mit Hilfe des Designers eine neue Extraktion vom Typ Query. Der folgende Dialog öffnet sich. 

![Define-Query-Extraction-Data-Source](/img/content/Define-Query-Extraction-Data-Source.jpg){:class="img-responsive"}


Klicken Sie auf den Suchen-Button, um eine Query zu suchen. Eine Query wird durch Angabe des Arbeitsbereiches, der Benutzergruppe und des Query-Namens eindeutig identifiziert. Selbstverständlich sind bei der Suche Wildcards erlaubt. Bestätigen Sie die Auswahl mit *OK*.

![Look-Up-Query](/img/content/xu/xu_query_look-up.png){:class="img-responsive"}

Im Hauptdialog werden nun die so genannten Select Options angezeigt. Das sind die Selektionskriterien, die Sie auch sehen würden, wenn Sie die Query im SAP GUI starten.

![Define-Query-Extraction-Data-Source-Selected](/img/content/Define-Query-Extraction-Data-Source-Selected.jpg){:class="img-responsive"}

Sie müssen entweder eine Variante (siehe Kapitel [Variante anwenden](./varianten-anwenden) ) wählen oder einen Wert für die maximale Anzahl der Zeilen (siehe Kapitel [Extraktionseinstellungen](./extraktionseinstellungen_1)) setzen.

**Empehlung:**
1. beginnen Sie mit der Erstellung einer [Variante](https://help.sap.com/doc/saphelp_dm40/4.0/de-DE/c0/980389e58611d194cc00a0c94260a5/content.htm?no_cache=true), die Sie vorab im SAP GUI erstellen sowie testen
2. im nächsten Schritt können über *Edit* [Select-Parameter](./select-options-fuellen
) angepasst werden

*Generell gilt, Selektionsparameter überschreiben die ausgewählte Variante. 
Somit ist sicher gestellt, dass Kombinationsmöglichkeiten für die Selektion bestehen.*
