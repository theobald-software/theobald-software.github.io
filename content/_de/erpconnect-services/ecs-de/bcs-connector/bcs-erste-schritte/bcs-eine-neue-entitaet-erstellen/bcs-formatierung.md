---
layout: page
title: Formatierung
description: Formatierung
product: erpconnect-services
parent: bcs-eine-neue-entitaet-erstellen
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-formatierung
---

Sie können mit dem BCS Connector eine Spalte formatieren. Betätigen Sie dazu die Schaltfläche neben dem Eigenschaftenfeld, um das Localization and Formatting Dialog zu öffnen und wechseln Sie zum Formatting-Reiter. Wählen Sie dort einen der folgende Werte:

![BCS-Formatting](/img/content/BCS-Formatting.jpg){:class="img-responsive"}

**Format as date (z.B. 8/28/2012)** <br>
**Format as date (z.B. Tuesday, August 28, 2012)** <br>
**Format as date (z.B.  August, 2012)** <br>
Das SAP-Datum 20120828 wird als SharePoint-Datum formatiert. Das Anzeige-Format ist von den Regional Settings Ihrer SharePoint-Seite abhängig ("Site Action > Site Settings > Regional Settings"). 

**Format as time (z.B. 8:17 AM)** <br>
**Format as time (z.B. 8:17:29 AM)** <br>
Der SAP-Zeitstempel 081729 wird als SharePoint-Zeitstempel formatiert. Das Anzeige-Format ist von den Regional Settings Ihrer SharePoint-Seite abhängig ("Site Action > Site Settings > Regional Settings").

**Format as number and remove leading zeros** <br>
Ein SAP-String (z.B. Kundennummer 0000001049) wird als Zahl (1049) formatiert. Dabei werden führende Nullen entfernt.