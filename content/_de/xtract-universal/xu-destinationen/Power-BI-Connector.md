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

Dieses Abschnitt beinhaltet Informationen zu Verbindung von Power BI und Xtract Universal über die  *Power BI Connector* Zielumgebung von Xtract Universal. 

Die Zielumgebung *Power BI Connector* bietet zwei Wege zum Verbinden von Power BI mit Xtract Universal:
- Power BI Custom Connector
- Generic Power Query M-script

![Power-BI-Connector-](/img/content/xu/PowerBI_Connector_Architecture_SSO.png){:class="img-responsive"}

### Unterstützte Power BI Umgebungen

Xtract Universal unterstützt folgende Umgebungen: 
- [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) mittels [Power BI Custom Connector](./Power-BI-Connector/pbi-custom-connector-einrichten)
- [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) mittels [Power BI on-premises data gateway](https://docs.microsoft.com/de-de/data-integration/gateway/service-gateway-onprem)
- [Power BI Report Server](https://docs.microsoft.com/de-de/power-bi/report-server/get-started) mittels [Power Query M-script](./Power-BI-Connector/pbi-script)


|  | Custom Connector | M-script |
|------------------------|:---:|:----:|
| Power BI Desktop | X | X |
| Power BI service | X | X |
| Power BI Report Server |  | X |

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}


