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

- [Power BI Account](https://powerbi.microsoft.com/de-de/landing/signin/)
- [On-premises Data Gateway](https://powerbi.microsoft.com/en-us/gateway/)

### Einrichtung On-premises Data Gateway

Befolgen Sie die folgenden Schritte, um das On-premises Data Gateway mittels Power BI Custom Connector einzurichten.

{: .box-note }
**Hinweis:** Die Verbindung zu Xtract Universal kann mithilfe von Power Query M-script oder Power BI Custom Connector erstellt werden. Die Verwendung von Power Query M-script benötigt keine weitere Konfiguration.

1. Installieren Sie das On-premises Data Gateway auf dem Xtract Universal Anwendungsserver.
2. Konfigurieren Sie das Data Gateway, siehe [Use the on-premises data gateway app](https://docs.microsoft.com/de-de/data-integration/gateway/service-gateway-app).
3. Wechseln Sie in den Tab *Connectors* und hinterlegen Sie den Pfad zum Power BI Custom Connector, z.B. `C:\Program Files\XtractUniversal\powerbi`.<br> Die *XtractUniversalExtension* wird anschließend als Custom Data Connector angezeigt.
![Data-Gateway Connectors](/img/content/xu/data-gateway-connectors.png){:class="img-responsive"}


### Xtract Universal als Datenquelle hinzufügen
Das konfigurierte On-premises Data Gateway wird nachfolgend in die Power BI Service Umgebung eingebunden. Anschließend muss eine DataSource zum Xtract Universal Server eingerichtet werden.

1. Öffnen Sie im Power BI Service **Settings > Manage Gateways**.
2. Öffnen Sie das *GATEWAY CLUSTERS* Menü über **[...]**.
3. Erstellen Sie eine Datenquelle über **[ADD DATA SOURCE]** (1).
![ADD DATA SOURCE](/img/content/xu/add-data-source.png){:class="img-responsive"}
4. Wählen Sie den Data Source Type *Xtract Universal Extraction* aus. 
![NEW DATA SOURCE](/img/content/xu/new-data-source.png){:class="img-responsive"}
5. Tragen Sie die URL des Xtract Universal Servers in der Form `<Protokoll>://<HOST oder IP-Adresse>:<Port>/` ein, z.B. `https://todd.theobald.local:8165/`.
6. Wählen Sie die Authentication Method, z.B. *Basic*, *Windows* oder *Anonymous*.
7. Bestätigen Sie die Eingaben mit **[ADD]** (2).
![Configure DATA SOURCE](/img/content/xu/configure-data-source.png){:class="img-responsive"}

**Data Source Name**<br> Tragen Sie einen beliebigen Namen für die Xtract Universal Power BI Datenquelle ein.

**Data Source Type**<br> Wählen Sie den Eintrag *Xtract Universal Extraction* aus dem Dropdown-Menü. 

{: .box-note }
**Hinweis:** Wenn der Eintrag Xtract Universal nicht in dem Dropdown-Menü verfügbar ist, überprüfen Sie die Konfiguration im Abschnitt [Einrichtung On-premises Data Gateway](./pbi-services#einrichtung-on-premises-data-gateway).

**Xtract Universal Server**<br> Geben Sie die Xract Universal Server URL an, siehe [Web Server](../../server/server_einstellungen#web-server).

**Authentication Method**<br> 
Auswahl einer Authentisierungsmethode, siehe [Single Sign On und SAP-Authentifizierung](./pbi-SSO):
- Basic
- Windows
- Anonymous

**Advanced settings**<br> Bei Default-Einstellungen belassen.

### Data Source Status
Überprüfen Sie den Data Source Status und weiterere Einstellungen, z.B. **Schedules Refresh**.  
![DATA SOURCE Settings](/img/content/xu/data-source-settings.png){:class="img-responsive"}


****
#### Weiterführende Links:
- [Was ist ein lokales Datengateway?](https://docs.microsoft.com/de-de/power-bi/connect-data/service-gateway-onprem)
- [Verwenden von benutzerdefinierten Datenconnectors mit dem lokalen Datengateway](https://docs.microsoft.com/de-de/power-bi/connect-data/service-gateway-custom-connectors)
- [Konfigurieren von geplanten Aktualisierungen](https://docs.microsoft.com/de-de/power-bi/connect-data/refresh-scheduled-refresh)

