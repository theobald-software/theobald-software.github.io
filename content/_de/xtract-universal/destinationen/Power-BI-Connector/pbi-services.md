---
ref: xu-pbi_connector-05
layout: page
title: Power BI service
description: PBI service
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url:
---
### Voraussetzungen
Die Anbindung des Power BI Service erfordert folgende Komponenten:

- [Power BI Account](https://powerbi.microsoft.com/en-us/landing/signin/)
- [On-premises Data Gateway](https://powerbi.microsoft.com/en-us/gateway/)

### Einrichtung On-premises Data Gateway

Für die Einrichtung des On-premises Data Gateway mittels Power BI Custom Connector befolgen Sie nachfolgende Einrichtungsschritte.

{: .box-note }
**Hinweis:** Die Verbindung zu Xtract Universal kann mithilfe von Power Query M-script oder Power BI Custom Connector erstellt werden. Die Verwendung von Power Query M-script benötigt keine weitere Konfiguration.

1. Installation des On-premises Data Gateway auf dem Xtract Universal Anwendungsserver.
2. Konfiguration des Data Gateways, siehe [Use the on-premises data gateway app](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-app).
3. Wechseln Sie in den Tab *Connectors* und hinterlegen den Pfad zum Power BI Custom Connector, z.B. `C:\Program Files\XtractUniversal\powerbi`.<br> Die *XtractUniversalExtension* sollte als Custom Data Connector anschließend angezeigt werden.
![Data-Gateway Connectors](/img/content/xu/data-gateway-connectors.png){:class="img-responsive"}


### Xtract Universal als Datenquelle hinzufügen
Das konfigurierte On-premises Data Gateway wird nachfolgend in die Power BI Service Umgebung eingebunden. Anschließend muss eine DataSource zum Xtract Universal Server eingerichtet werden.

1. Öffnen der Power BI Service **Settings > Manage Gateways**.
2. Öffnen des *GATEWAY CLUSTERS* Menüs mittels **[...]**.
3. Erstellen einer Data Source mittels **[ADD DATA SOURCE]** (1).
![ADD DATA SOURCE](/img/content/xu/add-data-source.png){:class="img-responsive"}
4. Auswahl des Data Source Type *Xtract Universal Extraction*. 
![NEW DATA SOURCE](/img/content/xu/new-data-source.png){:class="img-responsive"}
5. Angabe der Xtract Universal Server URL in der Form `<Protokoll>://<HOST oder IP-Adresse>:<Port>/` z.B. `https://todd.theobald.local:8165/`.
6. Angabe der Authentication Method, z.B. *Basic*, *Windows* oder *Anonymous*.
7. Bestätigen der Eingaben mittels **[ADD]** (2).
![Configure DATA SOURCE](/img/content/xu/configure-data-source.png){:class="img-responsive"}

**Data Source Name**<br> Tragen Sie einen beliebigen Namen für die Xtract Universal Power BI Datenquelle ein.

**Data Source Type**<br> Auswahl des Eintrags *Xtract Universal Extraction* aus dem Dropdown-Menu. 

{: .box-note }
**Hinweis:** Wenn der Eintrag Xtract Universal nicht in dem Drop-Down-Menu verfügbar ist, überprüfen Sie die Konfiguration im Abschnitt *Einrichtung On-premises Data Gateway*.

**Xtract Universal Server**<br> Angabe der Xract Universal Server URL, siehe [Web Server](../server/server_einstellungen#web-server).

**Authentication Method**<br> 
Auswahl einer Authentisierungsmethode, siehe [Single Sign On und SAP-Authentifizierung](./pbi-SSO):
- Basic
- Windows
- Anonymous

**Advanced settings**<br> Bei Default-Einstelungen belassen.

### Data Source Status
Überprüfen des Data Source Status und weiterer Einstellungen, z.B. **Schedules Refresh**.  
![DATA SOURCE Settings](/img/content/xu/data-source-settings.png){:class="img-responsive"}


****
#### Weiterführende Links:
- [What is an on-premises data gateway?](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)
- [Use custom data connectors with the on-premises data gateway](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-custom-connectors)
- [Configure scheduled refresh](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh)

