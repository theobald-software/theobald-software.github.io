---
layout: page
title: Settings
description: Settings
product: xtract-is
parent: report
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=report-settings
---

Über den Settings-Link im Editor öffnet sich das Einstellungsfenster.

![Report-Preferences](/img/content/Report-Preferences.png){:class="img-responsive"}

**Automatic String Conversion** <br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert, wenn SAP ein Unicode-System ist, und nach VarChar, wenn SAP kein Unicode-System ist.

**Convert Strings to VarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach VarChar konvertiert.

**Convert Strings to NVarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert.

**Use Batch** <br>
Definiert, ob der Report im Hintergrund ausgeführt werden soll. Das ist vor allem dann sinnvoll, wenn der Report eine ALV-Ausgabe hat.

**Batch Timeout** <br>
Definiert die Zeitspanne in Sekunden, wie lange der Report im Hintergrund maximal laufen darf, bevor der Task abbricht.

**Batch Job Name** <br>
Definiert den Name des Jobs im SAP unter dem der Report im Hintergrund ausgeführt wird.

**Spool Destination** <br>
Definiert das Ausgabegerät (den Drucker) für den Spooljob.

**Custom Function** <br>
Definiert den Funktionsbaustein der durch den Beutzer in SAP angelegt wurde.

**Automatic column detection** <br>
Aktiviert die automatische Spaltenerkennung.

**Pattern for header detection** <br>
Definiert ein Suchmuster, um bei aktivierter automatischer Spaltenerkennung den Spaltenkopf zu erkennen (z.B. *header*).

**Ignore ABAP Exceptions** <br>
Definiert, dass die ABAP Fehler- und Ausnahmen ignoriert werden.