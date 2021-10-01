---
ref: destinations-70
layout: page
title: Oracle
description: Oracle
product: xtract-universal
parent: destinationen
childidentifier: oracle
permalink: /:collection/:path
weight: 70
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine Oracle-Zieldatenbank.

## Voraussetzungen
Ab der Version Xtract Universal 4.2.34.0 wird der Oracle Data Provider in das Setup von Xtract Universal eingebunden. 
Es sind keine zusätzlichen Installationen für die Nutzung der Oracle Datenbank-Destination erforderlich.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}


**Host / Data source**<br>
Name des Datenbankservers oder Connect Descriptor eingeben.
Alternativ kann man den [connect descriptor](https://docs.oracle.com/html/E10927_01/featConnecting.htm) eingeben, zum Beispiel:

*(DESCRIPTION =* <br>
*(ADDRESS = (PROTOCOL = TCP)* <br>
*(HOST = [oracle host name])(PORT = [port number]))* <br>
*(CONNECT_DATA =* <br>
*(SERVER = DEDICATED)* <br>
*(SERVICE_NAME = [oracle service name])))*

**Port**<br>
Port des Oracle-Servers (Default: 1521) eingeben. 

**SID / Service name**<br>
Eindeutigen Name (SID) bzw. Alias (Service name) der Oracle-Datenbank eingeben.

**Username** <br>
Name des Datenbankbenutzers eingeben.

**Password**<br>
Passwort des Datenbankbenutzers eingeben.
            
**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form_debug](/img/content/oracle-configurations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}


### Debugging

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}

{: .box-warning}
**Warnung! Performance-Verlust (Leistungseinbuße)!**
Die Performance sinkt, wenn Bulk Insert deaktiviert ist.
Deaktivieren Sie den Bulk Insert nur wenn es notwendig ist, z.B. auf Anfrage des Support-Teams.

Durch das Anhaken der Checkbox **Disable bulk operations** wird der standardmäßige Bulk Insert beim Schreiben auf die Datenbank deaktiviert.

Diese Option ermöglicht eine detaillierte Fehleranalyse, falls bestimmte Datenzeilen nicht auf der Datenbank persistiert werden können. 
Mögliche Ursachen für dieses Verhalten können fehlerhafte Werte im hinterlegten Datentyp sein.

Das Debugging sollte nach der erfolgreichen Fehleranalyse wieder deaktiviert werden, da ansonsten die Performance der Datenbank-Schreibprozesse dauerhaft niedrig bleibt. 

#### Verwendung von Custom SQL

{: .box-note }
**Hinweis:** Bulk Operations werden grundsätzlich beim Verwenden von [Custom SQL Anweisungen](#sql-anweisungen) (z.B. bei *Row Processing*) mit Oracle Destination unterstützt.

{: .box-tip }
**Tip:** Um die Performance beim Verwenden von [Custom SQL Anweisungen](#sql-anweisungen) zu steigern, wird empfohlen die Custom-Verarbeitung im *Finalization*-Schritt zu verwenden.

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}


## Daten Mergen

{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}
