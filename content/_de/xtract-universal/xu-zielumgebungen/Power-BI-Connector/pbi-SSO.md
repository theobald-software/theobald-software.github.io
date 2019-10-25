---
ref: xu-pbi_connector-06
layout: page
title: Single Sign On und SAP-Authentifizierung
description: Single Sign On
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url:
---

Beim Konfigurieren von Xtract Universal-Datenquelle in Power BI, werden Sie aufgefordert eine der folgenden Authentifizierungsmethoden auszuwählen. Wählen Sie eine Authentifizierungsmethode entsprechend Ihrer Systemlandschaft.

* *Anonymous*: Wählen Sie diese Option, wenn Ihre Xtract Universal-Servereinstellungen keine Authentifizierung brauchen, um eine Extraktion auszuführen.
* *Anonymous*: Wählen Sie diese Option, wenn in Ihrer Xtract Universal SAP-Quelle oder in Ihrer Xtract Universal Extraktion SAP-Anmeldedaten benötigt werden, um eine Extraktion auszuführen. Tragen Sie Ihre SAP-Anmeldedaten hier ein.
* *Windows*: Wählen Sie diese Option, wenn Sie [SAP Single Sign On](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-single-sign-on) verwenden, oder wenn ein eingeschränkter Zugang zu den Extraktionen in den Xtract Universal-Servereinstellungen definiert ist. 
Tragen Sie \<domain>\\\<Windows AD user> ins Feld *user* und Ihr Windows-Passwort ins Feld *Password*.

Xtract Universal und die Destination *Power BI Connector* unsterstützen den Single Sign On (SSO) zu SAP. Wenn SSO korrekt konfiguriert ist, werden die Windows-Anmeldedaten von dem Power BI-Benutzer den SAP-Anmeldedaten zugeordnet (gemapped). Auf diese Weise wird die SAP-Authorisierung unterstützt und dem Benutzer werden nur die Daten angezeigt, die seiner Zugangsberechtigung entsprechen.
