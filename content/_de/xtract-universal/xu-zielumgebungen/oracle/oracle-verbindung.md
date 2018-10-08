---
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

Folgende Einstellungen können für die Verbindung zur Zieldatenbank definiert werden.

![XU_oracle_connection_test_1](/img/content/XU_oracle_connection_test_1.png){:class="img-responsive"}


Alternativ kann man den [connect descriptor](https://docs.oracle.com/html/E10927_01/featConnecting.htm) eingeben, zum Beispiel:

(DESCRIPTION = <br>
 (ADDRESS = (PROTOCOL = TCP) <br>
(HOST = [oracle host name])(PORT = [port number])) <br>
(CONNECT_DATA = <br>
(SERVER = DEDICATED) <br>
(SERVICE_NAME = [oracle service name])))

![XU_oracle_connection_test_2](/img/content/XU_oracle_connection_test_2.png){:class="img-responsive"}


**Connection**

**Host / Data source**<br>
Name des Datenbankservers oder Connect Descriptor.

**Port**<br>
Port des Oracle-Servers (Default: 1521). 

**SID / Service name**<br>
Eindeutiger Name (SID) bzw. Alias (Service name) der Oracle-Datenbank.

**Username** <br>
Name des Datenbankbenutzers.

**Password**<br>
Passwort des Datenbankbenutzers.
            
**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Datenbankverbindung zu testen. 