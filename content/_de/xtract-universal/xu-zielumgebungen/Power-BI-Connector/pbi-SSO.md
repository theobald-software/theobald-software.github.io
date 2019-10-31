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

Beim erstmaligem Einrichten von der Xtract Universal-Datenquelle in Power BI, werden Sie aufgefordert Authentifizierungsmethoden auszuwählen.

* *Anonymous*: Wählen Sie diese Option, wenn Ihre Xtract Universal-Servereinstellungen keine Authentifizierung brauchen, um eine Extraktion auszuführen.
* *Basic*:  Wählen Sie diese Option, wenn bei einer Extraktion die SAP-Anmeldedaten eingegeben werden müssen. Dies kann in der SAP-Quelle oder in den Extraktionseinstellungen definiert werden. <br>
Tragen Sie Ihre SAP-Anmeldedaten in die entsprechenden Eingabefelder ein.
* *Windows*: Wählen Sie diese Option, wenn Sie [SSO](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/sap-single-sign-on) verwenden, oder wenn ein eingeschränkter Zugang zu den Extraktionen in den Xtract Universal-Servereinstellungen definiert ist. 
Tragen Sie \<domain>\\\<Windows AD user> ins Feld *user* und Ihr Windows-Passwort ins Feld *Password* ein.

Xtract Universal und die Destination *Power BI Connector* unsterstützen den Single Sign On (SSO) zu SAP. Wenn SSO korrekt konfiguriert ist, werden die Windows-Anmeldedaten von dem Power BI-Benutzer den SAP-Anmeldedaten zugeordnet (gemapped). Auf diese Weise wird die SAP-Authorisierung unterstützt und dem Benutzer werden nur die Daten angezeigt, die seiner Zugangsberechtigung entsprechen.
![XU_PBI_EN_SSO](/img/content/XU_PBI_EN_SSO.png){:class="img-responsive"}
