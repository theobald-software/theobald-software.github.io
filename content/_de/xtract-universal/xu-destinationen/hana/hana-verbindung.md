---
ref: xu-sap-hana-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: hana
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=hana-verbindung
---
{% include _content/de/xu-specific/xu-destinations/general/connection.md %}	

### Destination Details
Folgende Einstellungen können für die Verbindung zur Zielumgebung (SAP HANA-Datenbank und SAP Data Warehouse Cloud (DWC)) definiert werden:

- SAP HANA-Datenbank
![hana-destination](/img/content/hana-destination2.png){:class="img-responsive"}
- SAP Data Warehouse Cloud
![hana-destination](/img/content/hana-destination.png){:class="img-responsive"}


**Server Name**<br>
Geben Sie die Adresse des Servers ein (einschließlich der Portnummer). Beachten Sie die unterschiedlichen Portnummern für HANA und DWC (siehe Screenshots).

**User Name**<br>
SAP HANA/DWC-Benutzername eingeben.

**Password**<br>
Passwort des SAP HANA/DWC-Benutzers eingeben.

**Database**<br> 
Name der Datenbank eingeben.

**Schema**<br> 
Name des Datenbankschemas eingeben.

**Use encryption**<br>
Schaltet Verschlüsselung ein. Wird bei der Verbindung zur SAP DWC benötigt.
             
**Test Connection**<br>
Testet die Verbindung zur Zielumgebung.