---
ref: destinations-62
layout: page
title: MySQL
description: MySQL
product: xtract-universal
parent: destinationen
childidentifier: mysql
permalink: /:collection/:path
weight: 62
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine MySQL-Zieldatenbank.  

## Voraussetzungen

Ab der Version Xtract Universal 4.2.26.0 wird der MySQL ADO.Net Treiber MySQL Data Provider mit dem Setup von Xtract Universal ausgeliefert. 
Es sind keine zusätzlichen Installationen erforderlich, um die Destination MySQL-Datenbank zu verwenden.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![mysql_destination_details](/img/content/mysql_destination_details.png){:class="img-responsive"}

**Server Name** <br>
Name oder Adresse des Hosts auf dem die Datenbank installiert ist eingeben.

**Server Port** <br>
Port des Servers, auf dem die Datenbank installiert ist eingeben.

**User Name** <br>
Datenbanknutzer für die MySQL Datenbank eingeben.

**Password** <br>
Passwort des Datenbanknutzers eingeben.

**Database** <br>
Name der MySQL Datenbank eingeben.

**Test Connection** <br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form](/img/content/mysql-configurations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}

## Daten Mergen

{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}