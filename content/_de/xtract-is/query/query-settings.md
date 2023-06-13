---
ref: xi-query-03
layout: page
title: Einstellungen
description: Settings
product: xtract-is
parent: query
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=query-settings
---
### Xtract IS Query Preferences

Klicken Sie im Hauptfenster der Komponente auf *Settings*. Das Fenster “Xtract IS Query Preferences” öffnet sich.

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

**Tread "No Data Selected" as Error** <br>
Definiert, ob eine Fehlermeldung ausgelöst werden soll, wenn die Query-Extraktion keine Daten liefert.