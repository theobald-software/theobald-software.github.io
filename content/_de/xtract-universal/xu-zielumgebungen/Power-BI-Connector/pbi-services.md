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


### Anforderungen

Für die Verwendung von Power BI service benötigen Sie Folgendes:
* Einen [Power BI account](https://powerbi.microsoft.com/en-us/landing/signin/).
* Ein [Power BI on-premises Daten Gateway](https://powerbi.microsoft.com/en-us/gateway/).

Verbindung zu Xtract Universal kann mithilfe von Power BI custom connector **oder** Power Query M-script erstellt werden.
<br>

Wenn Sie den Power BI Custom Connector verwenden, gehen Sie so vor:
1. Konfigurieren Sie das [on-premises Daten-Gateway](https://docs.microsoft.com/en-us/power-bi/service-gateway-custom-connectors).
2. Konfigurieren Sie das Power BI Service Gateway to support custom data connectors.

Verwendung von Power Query M-script benötigt keine weitere Konfiguration.
![datagw_custom_conn](/img/content/XU_PBI_datagateway_config.png){:class="img-responsive"}

---

![datagw_service_custom_conn](/img/content/XU_PBI_datagateway_service_config.png){:class="img-responsive"}



### Xtract Universal als Datenquelle hinzufügen

![datagw_service_datasource](/img/content/XU_PBI_datagateway_service_datasource.png){:class="img-responsive"}

**Data Source Name**: Tragen Sie einen beliebigen Namen für die Xtract Universal Power BI Datenquelle.

**Data Source Type**: Wählen Sie die Extraktion *Xtract Universal Extraction* aus dem Dropdown-Menu. Wenn die Xtract Universal-Extraktion nicht in dem Drop-Down-Menu verfügbar ist, überprüfen Sie die Konfiguration im Abschnitt *Anforderungen* am Anfang der Seite.

**Xtract Universal Server**: Tragen Sie die Adresse Ihres On-Premises Xtract Universal (Web-) Servers ein.

**Authentication Method**: siehe [Singe Sign On und SAP-Authentifizierung](./pbi-SSO).

**Advanced settings**: Bei Default-Einstelungen belassen.

<br>
Nach dem Ausfüllen der Felder, klicken Sie auf *Apply*. <br>
Bei einer korrekten Konfiguration der Datenquelle, erscheint die Meldung *Verbindung erfolgreich*.
<br>
![datagw_service_datasource_successful](/img/content/XU_PBI_datagateway_service_datasource_successful.png){:class="img-responsive"}
