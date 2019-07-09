---
ref: xu-postgres-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: postgreSQL
permalink: /:collection/:path
weight: 2
lang: de_DE
---

Folgende Einstellungen müssen für die Verbindung zur Zieldatenbank definiert werden.

![DESTINATION DETAILS](/img/content/xu/postgres_destination_details.png){:class="img-responsive"}


**Server Name**<br>
Name bzw. IP des Datenbankservers und die Portnummer.

**Require TLS encryption**<br>
PostgreSQL bietet native Unterstützung für die Verwendung von TLS-Verbindungen zur Verschlüsselung der Client/Server-Kommunikation für mehr Sicherheit, 
siehe auch [Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/11/ssl-tcp.html).

Please make sure, that the certificate authority (CA) that has signed the certificate or the certificate itself is trusted by the client.

**Windows Authentication**<br>
Verwendet den Service Account, unter dem der XU Service läuft, um sich am PostgreSQL Server zu authentisieren, siehe auch [Client Authentication](https://www.postgresql.org/docs/11/client-authentication.html).

**Port**<br>
standardmäßig wird der Port 5432 ausgewählt

**Username**<br>
Name des Datenbank-Benutzers.

**Password**<br>
Passwort des Datenbank-Benutzers

**Database**<br>
Name der Datenbank

**Test Connection**<br>
Klicken Sie auf den Knopf, um die Datenbankverbindung zu testen.

![DESTINATION DETAILS](/img/content/xu/postgres_test_connection.png){:class="img-responsive"}
