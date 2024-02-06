---
ref: destinations-30
layout: page
title: EXASolution
description: EXASolultion
product: xtract-universal
parent: destinationen
childidentifier: exasol
permalink: /:collection/:path
weight: 30
lang: de_DE
progressstate: 5
---


Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine EXASolution-Zieldatenbank.

## Voraussetzungen

Ab der Version Xtract Universal 4.2.26.0 wird der Exasol ADO.Net Treiber ExaDataProvider mit dem Setup von Xtract Universal ausgeliefert. Es sind keine zusätzlichen Installationen erforderlich, um die Destination Exasol-Datenbank zu verwenden.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details

![Exa-Connection](/img/content/Exa-Connection.png){:class="img-responsive"}
 
**Connection string**<br>
Name bzw. IP des Datenbankservers und die Portnummer eingeben.

**User Id / Password**<br>
Name und Passwort des Datenbank-Benutzers eingeben.

**Database Name**<br>
Name der Datenbank.

**Schema**<br>
Schema der Datenbank eingeben.

**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form](/img/content/exasol-configuration.PNG){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/debugging-bulk-insert.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}


## Daten Mergen

{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}