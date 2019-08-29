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

**TLS Mode**<br>

Folgende TLS Modes können für die Verbindung ausgewählt werden:

|Mode|Beschreibung|
|:--:|:---|
| Prefer | Default Wert, der eine TLS Verschlüsselung verwendet, falls der Server das unterstützt. Ist das nicht der Fall, werden unverschlüsselte Verbindungen verwendet - siehe auch [Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/11/ssl-tcp.html). |
| Require | Xtract Universal erzwingt eine verschlüsselte TLS-Verbindungen zum PostgreSQL-Server - unverschlüsselte Verbindungen werden nicht hergestellt |
| Disable |**Achtung** - Eine unverschlüsselte, unsichere Verbindung wird zum PostgreSQL-Server hergestellt |

Bitte stellen Sie sicher, dass die Zertifizierungsstelle (CA), die das Zertifikat signiert hat, oder das Zertifikat selbst vom Client vertrauenswürdig ist.

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
