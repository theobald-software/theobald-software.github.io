---
ref: xu-oracle-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=oracle-verbindung
---

{% include _content/de/xu-specific/xu-destinations/general/connection.md %}	

### Destination Details

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}


Alternativ kann man den [connect descriptor](https://docs.oracle.com/html/E10927_01/featConnecting.htm) eingeben, zum Beispiel:

(DESCRIPTION = <br>
 (ADDRESS = (PROTOCOL = TCP) <br>
(HOST = [oracle host name])(PORT = [port number])) <br>
(CONNECT_DATA = <br>
(SERVER = DEDICATED) <br>
(SERVICE_NAME = [oracle service name])))

**Beispiel**
- Host Name: dbtest
- Instance Name: oracle12c
- Server Version: 12.2.0.2.0

![XU_oracle_connection_test_2](/img/content/XU_oracle_connection_test_2.png){:class="img-responsive"}


**Host / Data source**<br>
Name des Datenbankservers oder Connect Descriptor eingeben.

**Port**<br>
Port des Oracle-Servers (Default: 1521) eingeben. 

**SID / Service name**<br>
Eindeutigen Name (SID) bzw. Alias (Service name) der Oracle-Datenbank eingeben.

**Username** <br>
Name des Datenbankbenutzers eingeben.

**Password**<br>
Passwort des Datenbankbenutzers eingeben.
            
**Test Connection**<br>
Datenbankverbindung testen. 