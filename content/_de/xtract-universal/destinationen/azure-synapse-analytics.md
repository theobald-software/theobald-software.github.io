---
ref: destinations-25
layout: page
title: Azure Synapse Analytics (SQl pool)
description: Azure Synapse Analytics (SQl pool)
product: xtract-universal
parent: destinationen
childidentifier: azure_dwh
permalink: /:collection/:path
weight: 25
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in einen Azure Synapse Analytics SQl pool.

## Voraussetzungen

Um die Azure Synapse Analytics (SQL pool) Destination nutzen zu können, brauchen Sie

- eine vorhandene [Azure Synapse Analytics SQL Datenbank](https://docs.microsoft.com/de-de/azure/azure-sql/database/single-database-create-quickstart?tabs=azure-portal).
- eine [Freischaltung in der Firewall](https://docs.microsoft.com/de-de/azure/azure-sql/database/secure-database-tutorial#create-firewall-rules) für die IP-Adressen, unter denen Xtract Universal läuft.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details
![XU_AzureSA_Verbindungen](/img/content/XU_AzureSA_Verbindungen.png){:class="img-responsive"}

#### Connection
**Server Name**<br>
Name des Azure Servers eingeben: `[servername].database.windows.net`

**User Name**<br>
Benutzername des Datenbanknutzers.

**Password**<br>
Passwort des Datenbanknutzers.

**Database Name**<br>
Name der Datenbank.

**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form](/img/content/azuredwh-configurations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/debugging-bulk-insert.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}

## Daten Mergen

{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}


*****
## Weiterführende Links
- [Microsoft Azure Synapse Analytics](https://docs.microsoft.com/de-de/azure/synapse-analytics/)
- [Integration mittels Azure Data Factory](../extraktionen-ausfuehren-und-einplanen/call-via-etl#integration-mittels-azure-data-factory)