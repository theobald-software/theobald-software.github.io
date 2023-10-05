---
ref: xfa-bapi-input-output
layout: page
title: Eingabe- und Ausgabewerte
description: Eingabe- und Ausgabewerte
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 3
lang: de_DE
---

{% include _content/de/bapi/parameters.md %}

### Eingabetabellen mappen

Um die Daten einer Eingabetabelle korrekt zu mappen, gelten folgende Voraussetzungen:

- ThDie Spaltennamen der Eingabetabelle müssen mit denen in der Xtract BAPI-Komponente übereinstimmen.
- Die Datentypen in der Eingabetabelle müssen mit denen in der Xtract BAPI-Komponente übereinstimmen.

Klicken Sie auf ![glasses-icon](/img/content/icons/glasses.png) neben einer Tabelle, um Spaltennamen und Datentypen in der Xtract BAPI-Komponente nachzuschlagen.<br>
Führen Sie die folgenden Schritte aus, um Tabellen zur Laufzeit an Xtract BAPI zu übergeben:
1. Definieren bzw. laden Sie die Eingabetabellen in Ihrem Workflow.
2. Verbinden Sie die Eingabetabellen über den Eingabeanker „I“ mit der Xtract BAPI-Komponente. <br>
Die im Verbindungspfeil angezeigte Nummer dient zur Identifizierung von Tabellen in der Xtract BAPI-Komponente.<br>
![bapi-input-table2](/img/content/xfa/bapi-input-table2.png){:class="img-responsive" }
3. Öffnen Sie die Xtract BAPI-Komponente und navigieren Sie zu der Tabelle, die Sie parametrisieren möchten.
4. Wählen Sie eine Eingabetabelle aus der Dropdown-Liste aus. <br>
![bapi-input-table](/img/content/xfa/bapi-input-table.png){:class="img-responsive" }

Um eine Eingabetabelle aus einer Struktur zu entfernen, klicken Sie auf ![x-icon](/img/content/icons/x.png).