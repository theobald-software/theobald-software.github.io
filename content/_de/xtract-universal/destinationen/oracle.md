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


Die Oracle Destination unterstützt 3 Verbindungsarten:
- **Default:** Verbindung zu einer Oracle Datenbank (On-premises).
- **Wallet:** Verbindung zu einer Oracle Datenbank über Verbindungsdaten aus einem Wallet. 
Verwenden Sie diese Option, wenn [mTLS (Mutual TLS)](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/connect-introduction.html#GUID-9A472E49-3B2B-4D9F-9DC2-D3E6E4454285) Authentifizierung erforderlich ist.
- **Connect Descriptor:** Verbindung zu einer Oracle Datenbank (On-premises und Cloud) via TLS.

### Default

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}

**Host**<br>
Geben Sie den Namen des Oracle-Servers ein.

**Port**<br>
Port des Oracle-Servers (Default: 1521) eingeben. 

**SID / Service name**<br>
Eindeutigen Name (SID) bzw. Alias (Service name) der Oracle-Datenbank eingeben.

**Username** <br>
Name des Datenbankbenutzers.

**Password**<br>
Passwort des Datenbankbenutzers.
 
**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 

#### Wallet

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_2.png){:class="img-responsive"}

**TNS Name**<br>
Geben Sie den TNS-Namen der Verbindung ein. Der TNS-Name ist in der Datei `tnsnames.ora` in Ihrem Wallet abgelegt.<br>
Für mehr Informationen, siehe [Oracle Documentation: Download Client Credentials (Wallets)](https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/cswgs/autonomous-connect-download-credentials.html#GUID-B06202D2-0597-41AA-9481-3B174F75D4B1).

**Username** <br>
Name des Datenbankbenutzers.

**Password**<br>
Passwort des Datenbankbenutzers.

**Wallet location** <br> 
Geben Sie den Pfad zu Ihrem Wallet ein, z.B. `C:\Oracle\Wallet`.<br>
Der Benutzer, unter dem der Xtract Universal Service ausgeführt wird, muss Zugriff auf den Ordner haben, in dem das Wallet liegt.

**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 

#### Connect Descriptor

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_3.png){:class="img-responsive"}

**Connect Descriptor** <br>
Geben Sie einen gültigen Connect Descriptor (connection string) ein, siehe [Oracle Documentation: View TNS Names and Connection Strings for an Autonomous Database Instance](https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/cswgs/autonomous-connection-strings-view.html#GUID-BE884A1B-034D-4CD6-9B71-83A4CCFDE9FB).<br>
Ein Connect Descriptor verwendet folgendes Format:<br>
```
(DESCRIPTION =
(ADDRESS = (PROTOCOL = TCP)
(HOST = [oracle host name])(PORT = [port number]))
(CONNECT_DATA =
(SERVER = DEDICATED)
(SERVICE_NAME = [oracle service name])))
```

**Username** <br>
Name des Datenbankbenutzers.

**Password**<br>
Passwort des Datenbankbenutzers.
 
**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen. 

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form_debug](/img/content/oracle-configurations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

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
