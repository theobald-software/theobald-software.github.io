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
progressstate: 5
---

Beim erstmaligem Einrichten der Xtract Universal-Datenquelle in Power BI, werden Sie aufgefordert eine der folgenden Authentifizierungsmethoden auszuwählen:

* *Anonymous*: Wählen Sie diese Option, wenn Ihre Xtract Universal-Servereinstellungen keine Authentifizierung erfordern, um eine Extraktion auszuführen.
* *Basic*:  Wählen Sie diese Option, wenn in Xtract Universal in den [SAP Source-Einstellungen](../../einfuehrung/sap-verbindungen-anlegen#authentication) die Checkbox *Require SAP Credentials to be explicitly supplied for execution* markiert ist. Geben Sie Ihre SAP-Benutzerdaten in die entsprechenden Eingabefelder ein.
* *Windows*: Wählen Sie diese Option, wenn Sie [SSO](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-single-sign-on) verwenden, oder wenn ein eingeschränkter Zugang zu den Extraktionen in den Xtract Universal-Servereinstellungen definiert ist. <br>
Tragen Sie \<domain>\\\<Windows AD user> ins Feld *user* und Ihr Windows-Passwort ins Feld *Password* ein.

Xtract Universal und die *Power BI Connector* Destination unterstützen Single Sign On (SSO) zu SAP. Wenn SSO korrekt konfiguriert ist, werden die Windows-Anmeldedaten des Power BI-Benutzers den SAP-Anmeldedaten zugeordnet (gemapped). Auf diese Weise wird das SAP-Berechtigungskonzept unterstützt und dem Benutzer werden nur die Daten angezeigt, die seiner SAP-Berechtigung entsprechen.
![XU_PBI_EN_SSO](/img/content/XU_PBI_EN_SSO.png){:class="img-responsive"}
