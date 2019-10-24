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

Um Power BI Service zu benutzen, brauchen Sie ein [Power BI Konto (Account)](https://powerbi.microsoft.com/de-de/landing/signin/). Laden Sie zusätzlich das [Power BI On-premises Daten-Gateway](https://powerbi.microsoft.com/de-de/gateway/) herunter.

Wenn Sie den Power BI custom connector verwenden, [konfigurieren](https://docs.microsoft.com/en-us/power-bi/service-gateway-custom-connectors) Sie das Power BI On-premises Daten-Gateway **sowie** das Power BI Service-Gateway, sodass die Unterstützung von benutzerdefinierten Datenconnectors zu gewährleisten.

Nutzung von Power Query M-script setzt keine weitere Konfiguration voraus.
<br>


![datagw_custom_conn](/img/content/XU_PBI_datagateway_config.png){:class="img-responsive"}

<br>

![datagw_service_custom_conn](/img/content/XU_PBI_datagateway_service_config.png){:class="img-responsive"}

### Xtract Universal als Datenquelle hinzufügen

![datagw_service_datasource](/img/content/XU_PBI_datagateway_service_datasource.png){:class="img-responsive"}

**Daten Quelle Name**: beliebiger Name für die Xtract Universal Power BI Datenquelle.

**Daten Quelle Typ**: Wählen Sie die Extraktion *Xtract Universal Extraction* aus dem Dropdown-Menu. Wenn die Xtract Universal-Extraktion nicht in dem Drop-Down-Menu verfügbar ist, überprüfen Sie die Konfiguration im Abschnitt *Anforderungen* am Anfang der Seite.

**Datenquelleninformation**: Tragen Sie die Adresse Ihres On-Premises Xtract Universal (Web-) Servers ein.

**Authentifizierungsmethode**: siehe Single Sign On and SAP authentication.

**Erweiterte Einstellungen**: Bei Default-Einstelungen belassen.

<br>
Klicken Sie auf *Apply*. Bei einer korrekten Konfiguration der Datenquelle, erscheint die Meldung *Verbindung erfolgreich*.
<br>
![datagw_service_datasource_successful](/img/content/XU_PBI_datagateway_service_datasource_successful.png){:class="img-responsive"}
