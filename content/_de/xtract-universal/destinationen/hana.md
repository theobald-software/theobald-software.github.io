---
ref: destinations-101
layout: page
title: SAP HANA
description: SAP HANA
product: xtract-universal
parent: destinationen
childidentifier: hana
permalink: /:collection/:path
weight: 101
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine SAP HANA-Datenbank oder in die [SAP Data Warehouse Cloud](https://saphanajourney.com/data-warehouse-cloud/).  

## Voraussetzungen

Für die Verbindung zur HANA-Datenbank und SAP Data Warehouse Cloud wird der *SAP HANA Data Provider for Microsoft ADO.NET*, Bestandteil des SAP HANA Client Setups, benötigt.

 {: .box-warning }
**Warnung!** Für die Nutzung der HANA-Destination wird die Version **2.6.61** des SAP HANA Data Providers benötigt. Andere Versionen funktionieren nicht.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

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

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings

![ext_spec_set_de_form_debug](/img/content/dest_set_hana.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/debugging-bulk-insert.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}


## Daten Mergen

{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}

******
## Weiterführende Links

- [SAP Help](https://help.sap.com/viewer/0eec0d68141541d1b07893a39944924e/2.0.00/en-US/469dee9e6d611014af70d4e9a9cd6b0a.html)
- [SAP HANA Client Setup](https://blogs.sap.com/2017/12/14/sap-hana-2.0-client-installation-and-update-by-the-sap-hana-academy/)