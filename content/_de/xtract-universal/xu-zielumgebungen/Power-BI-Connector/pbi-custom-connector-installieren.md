---
ref: xu-pbi_connector-03
layout: page
title: Power BI Custom Connector installieren
description: Power BI Custom Connector installieren
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: 
---

### Power BI Custom Connector installieren
Zusammen mit der Destination *Power BI Connector* wird Xtract Universal mit einer benutzerdefinierten Erweiterungsdatei für Power BI ausgeliefert. Die Erweiterungsdatei, bennant *XtractUniversalExtension.pqx*, befindet sich im Ornder *powerbi* innerhalb des  Installationsverzeichnisses von Xtract Universal.

Der Power BI connector wurde entsprechend den Microsoft Richtlinien zum Erstellen von  [Custom Connectors in Power BI](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility) entwickelt.

Wenn Sie die Anwendung *Power BI Desktop* nutzen, kopieren Sie die .pqx-Datei in das folgende Verzeichnis *[Documents]\Power BI Desktop\Custom Connectors*. Erstellen Sie das Verzeichnis  *[Documents]\Power BI Desktop\Custom Connectors*, wenn keines vorhanden ist. Nach dem Kopieren der XtractUniversalExtension.pq in das  *[Documents]\Power BI Desktop\Custom Connectors* Verzeichnis, kann ein Neustart von Power BI notwendig sein. <br>

Außerdem ist es sinnvoll die Sicherheitsstufe in der Option [Datenerweiterung](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility#data-extension-security) innerhalb von Power BI  auf * Alle Erweiterungen ohne Überprüfung oder Warnung laden* zu setzen. Andernfalls wird die *Xtract Universal* Datenquelle innerhalb von Power BI nicht sichtbar.

![powerbi-datasource](/img/content/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

### Power BI mit Xtract Universal verbinden

* Geben Sie die URL des Xtract Universal- Webservers. Das ist der erste Teil der URL, die im Webbrowser angezeigt wird, wenn Sie eine Extraktion in Xtract Universal starten und die Option *Run in Browser* auswählen.
![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.jpg){:class="img-responsive"}

* Sie können aufgefordert werden  *Anonymous*, *Basic* oder *Windows* Authentifizierungsmethode auszuwählen. Weitere Informationen dazu finden Sie im Abschnitt Single Sign On and SAP authentication. <!-- Don't forget to set the link --> 

* Im Fenster Navigator werden alle Extraktionen, die in  *Power BI Connector* Destination in Xtract Universal gesetzt sind, angezeigt. Die angezeigte Datenvorschau zeigt die Bezeichnung des SAP-Spaltenkopfs und eine Datenvorschau abhändig vom Extraktionstyp (z.B. Echtdaten oder Dummy-Daten).

Das Laden der Daten löst eine Extraktion in Xtract Universal aus und das Schreiben der extrahierten Daten in die Anwendung Power BI.

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.jpg){:class="img-responsive"}