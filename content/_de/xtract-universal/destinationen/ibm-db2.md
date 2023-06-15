---
ref: destinations-50
layout: page
title: IBM DB2
description: IBM DB2
product: xtract-universal
parent: destinationen
childidentifier: ibm-db2
permalink: /:collection/:path
weight: 50
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine IBM DB2-Zieldatenbank.

## Voraussetzungen

Um Daten in dieses Ziel zu laden, müssen Sie den zugehörigen ADO .NET Provider für Windows installieren. 
Die 32bit Version für 32bit basierte Betriebssysteme, die 64bit Version für 64bit basierte Betriebssysteme. 
Selektieren Sie das *IBM Data Server Driver Package* und danach *IBM Data Server Driver Package (Windows AMD64 and Intel EM64T) oder IBM Data Server Driver Package (Windows 32-bit AMD and Intel x86), siehe [IBM Data Server Client Packages - Version 11.5 GA](http://www-01.ibm.com/support/docview.wss?uid=swg27016878).


## Verbindung 

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![DB2-Connection](/img/content/DB2-Connection.png){:class="img-responsive"}

**Provider**<br>
Netz-Anbieter für DB2 eingeben. Zur Installation des Providers siehe bei Anforderungen.

**Host Name / Port** <br>
Name bzw. IP des Datenbankservers und die Portnummer eingeben.

**User Id / Password** <br>
IBM DB2 Authentifizierung: Name und Passwort des Datenbankbenutzers.

**Database Name** <br>
Name der IBM Datenbank eingeben.

**Default Schema** <br>
Schema der DB2-Datenbank eingeben.

**Test Connection** <br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 

## Einstellungen
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form](/img/content/ibmdb2-configurations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}

## Daten Mergen
{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}