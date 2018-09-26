---
layout: page
title: BCS Connector Modell zur Suche in SAP
description: BCS Connector Modell zur Suche in SAP
product: erpconnect-services
parent: bcs-sharepoint-suche
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-connector-modell-zur-suche-in-sap
---

Die bei der Suche verwendeten externen Inhaltstypen verfügen über bestimmte Eigenschaften innerhalb des BCS-Modells, die für die Suchfunktion von Bedeutung sind. Es wird empfohlen, eigenständige externe Inhaltstypen für die Suche zu definieren.


Im folgenden Beispiel wird mit dem BCS Connector zunächst ein neues Modell ´SAP Search Model´ mit LOB System und LOB System Instance definiert.

![BCS-Search-New-Model](/img/content/BCS-Search-New-Model.png){:class="img-responsive"}

Für die SharePoint-Verbindung ist zu beachten, dass für die Webanwendung der angegebenen SharePoint URL eine Dienstverbindung zu folgenden Dienstanwendungen besteht.

- Business Data Connectivity Service
- Search Service Application
- ERPConnect Services
- Secure Store Service (falls von ERPConnect Services verwendet)

Die Dienstverbindungen können in derZentraladministration von SharePoint im Bereich Webanwendungen überprüft werden.

![BCS-Search-Web-Application-Connections](/img/content/BCS-Search-Web-Application-Connections.png){:class="img-responsive"}

