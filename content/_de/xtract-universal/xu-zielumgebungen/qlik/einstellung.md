---
ref: xu-qliksense-qlikview-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: qlik
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellung
---

Wenn Sie auf die Schaltfläche "Destination" klicken, können Sie folgende Einstellungen für die Extraktion nach Qlik vornehmen.


![XU_qlik_destination_settings](/img/content/XU_qlik_destination_settings.jpg){:class="img-responsive"}

**Date Conversion**

**Convert invalid dates to**<br>
Falls ein SAP-Datum nicht in ein gültiges Datum konvertiert werden kann, wird dieser Standard-Datumswert verwendet.<br>
Ungültige Werte werden dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

**Bei der Konvertierung eines ungültigen** <br>SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft.

**Convert 00000000 to**<br>
Konvertiert das SAP-Datum 00000000 zu diesem Wert.

**Convert 9999XXXX to** <br>
Konvertiert das SAP-Datum 9999XXXX zu diesem Wert.