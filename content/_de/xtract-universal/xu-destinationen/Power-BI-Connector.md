---
ref: xu-destinations-82
layout: page
title: Power BI Connector
description: Power BI Connector
product: xtract-universal
parent: xu-destinationen
childidentifier: Power-BI-Connector
permalink: /:collection/:path
weight: 82
lang: DE_DE
old_url: 
progressstate: 5
---
### Einführung

Dieses Abschnitt beinhaltet Informationen zu Verbindung von Power BI und Xtract Universal über die  *Power BI Connector* Zielumgebung von Xtract Universal. <br>

Die Zielumgebung *Power BI Connector* bietet zwei Wege zum Verbinden von Power BI mit Xtract Universal:

1. Power BI Custom Connector
2. Generic Power Query M-script

### Power BI custom connector und Power Query M-script

Der Power BI Custom Connector fügt eine Xtract Universal-Datenquelle zu der Liste der Datenquellen (Connectors) von Power BI. Diese Funktion ermöglicht eine bequeme und benutzergeführte Auswahl von Xtract Universal Extraktionen direkt in Power BI. <br>

Zusätzlich zu dem benutzerdefinierten Power BI Custom Connector, liefert Theobald Software eine Skriptdatei *Power Query M-script", wenn die Verwendung vom benutzerdefinierten Connector nicht unterstützt wird oder nicht möglich ist. <br>

Die Extraktionen von Xtract Universal werden direkt aus Power BI ausgelöst und weiterverarbeitet, egal, ob die  Verbindung über den Power BI Custom Connector oder über den Power Query M-script zustande kam.<br>

### Unterstützte Power BI Umgebungen

Der Xtract Universal Power BI Custom Connector unterstützt *Power BI Desktop* und [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) (durch [Power BI on-premises data gateway](https://docs.microsoft.com/de-de/data-integration/gateway/service-gateway-onprem)). Zusätzlich zu den aufgelisteten Umgebungen unterstützt der Xtract Universal Power Query M-script den [Power BI Report Server](https://docs.microsoft.com/de-de/power-bi/report-server/get-started).<br>


|  | Custom Connector | M-script |
|------------------------|------------------|----------|
| Power BI Desktop | X | X |
| Power BI service | X | X |
| Power BI Report Server | - | X |


![Power-BI-Connector-](/img/content/xu/PowerBI_Connector_Architecture_SSO.png){:class="img-responsive"}

Derzeit ist existiert die vollständige Dokumentation nur in [Englischer Sprache](https://help.theobald-software.com/en/xtract-universal/xu-destinations/Power-BI-Connector). Weitere Informationen in Deutscher Sprache folgen in Kürze.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}


