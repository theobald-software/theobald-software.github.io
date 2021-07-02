---
ref: xu-pbi_connector-03
layout: page
title: Power BI Custom Connector einrichten
description: Power BI Custom Connector installieren
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: 
---


Die *Power BI Connector* Destination in Xtract Universal funktioniert in Kombination mit dem benutzerdefinierten Custom Connector für Power BI. Der Dateiname ist *XtractUniversalExtension.pqx*. Die Datei XtractUniversalExtension.pqx befindet sich im Ordner *powerbi* innerhalb des Installationsverzeichnisses von Xtract Universal.

Der Power BI Connector wurde entsprechend den Microsoft Richtlinien zum Erstellen von [Custom Connectors in Power BI](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility) entwickelt.
### Power BI Custom Connector manuell einrichten
Wenn Sie die Anwendung *Power BI Desktop* verwenden, beachten Sie Folgendes: 
1. Prüfen Sie, ob das Verzeichnis *[Documents]\Power BI Desktop\Custom Connectors* existiert.
2. Erstellen Sie dieses Verzeichnis, falls es nicht existiert.
3. Kopieren Sie die Datei *XtractUniversalExtension.pqx* in das Verzeichnis *[Documents]\Power BI Desktop\Custom Connectors*.
4. Starten Sie Power BI neu. <br>
5. Ändern Sie die Sicherheitsstufe in der Option [Datenerweiterung](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility#data-extension-security) innerhalb von Power BI  auf *Alle Erweiterungen ohne Überprüfung oder Warnung laden* (Allow any extension to be load without validation or warning). <br>
Andernfalls wird die Datenquelle *Xtract Universal* in Power BI nicht angezeigt.

![powerbi-datasource](/img/content/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

### Power BI Custom Connector automatisch einrichten
1. Öffnen Sie den *powerbi* Ordner, der sich im Installationsverzeichniss von Xtract Universal befindet.
2. Führen Sie das PowerShell Skript *install-connector* aus. <br>
Dieses Skript kopiert die *XtractUniversalExtension.pqx* Datei in den Ordner *[Documents]\Power BI Desktop\Custom Connectors*.
Falls der Ordner nicht existiert, wird er neu angelegt.
3. Führen Sie das PowerShell Skript *trust-connector* aus.<br>
Dieses Skript modifiziert die Registry unter HKLM:\SOFTWARE\Policies\Microsoft\Power BI Desktop.
Falls noch nichtvorhanden, wird der Wert *TrustedCertificateThumbprints* mit dem Fingerabdruck der *XtractUniversalExtension.pqx* Datei angelegt.
Dieser Prozess entspricht den Microsoft-Empfehlungen für 
[vertrauenswürdige Connectoren von Drittanbietern](https://docs.microsoft.com/de-de/power-bi/connect-data/desktop-trusted-third-party-connectors).



### Power BI mit Xtract Universal verbinden

1. Wählen Sie Xtract Universal im Menu *Get Data*.
2. Klicken Sie auf die Schaltfläche *Connect*.
3. Geben Sie die URL des Xtract Universal-Webservers an `<Protocol>://<HOST oder IP address>:<Port>/`.
![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.png){:class="img-responsive"}
	Wenn Sie aufgefordert werden eine der folgenden Authentifizierungsmethoden auszuwählen: *Anonymous*, *Basic* or *Windows*, befolgen Sie die Handlungsanweisungen aus dem Abschnitt [Singe Sign On und SAP-Authentifizierung](./pbi-SSO).
	Im Fenster Navigator werden alle *Power BI Connector*- Extraktionen von Xtract Universal aufgelistet. 
4. Wählen Sie eine Extraktion aus der Liste. <br>
Die Vorschau zeigt die SAP-Spaltenkofbezeichnungen und  Vorschaudaten abhängig vom Extraktionstyp, z.B. Echt-Daten oder Dummy-Daten.
5. Klicken Sie auf die Schaltfläche *Load*. <br>
Dies stößt eine Extraktion in Xtract Universal an und die Daten werden in Power BI geladen .

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.png){:class="img-responsive"}

****
#### Weiterführende Links
- [Youtube Tutorial: SAP Power BI Schnittstelle in Xtract Universal](https://www.youtube.com/watch?v=1jqw755yqP4){:target="_blank"}