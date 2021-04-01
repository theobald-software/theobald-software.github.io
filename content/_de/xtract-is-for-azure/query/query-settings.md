---
ref: xi-query-04
layout: page
title: Settings
description: Settings
product: xtract-is-for-azure
parent: query
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=query-settings
---

Über den Settings-Link im Editor öffnet sich das Einstellungsfenster.

![Query-Settings](/img/content/Query-Settings.png){:class="img-responsive"}

**Max Rows** <br>
Gibt die maximale Anzahl der extrahierten Datensätze an. 0 steht für unlimitiert.

**Automatic String Conversion** <br>
Automatic bedeutet, dass die Datenquelle alle Strings nach NvarChar konvertiert, wenn SAP ein Unicode-System ist, und nach VarChar, wenn SAP kein Unicode-System ist.

**Convert Strings to VarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach Varchar konvertiert.

**Convert Strings to NVarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach NVarchar konvertiert.

**Use Variant Variable** <br>
Das Textfeld für die Variante ist für den Schreibzugriff geöffnet. Damit kann der User eine Variablen dort eintragen, um die Variante zu dynamisieren.

**Do not tread "No Data Selected" as Error** <br>
definiert, ob ein Fehler ausgelöst werden soll, wenn die Query-Extraktion keine Daten liefert.