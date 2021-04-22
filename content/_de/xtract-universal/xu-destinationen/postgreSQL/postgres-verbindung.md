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

{% include _content/de/xu-specific/xu-destinations/general/connection.md %}	

### Destination Details

![DESTINATION DETAILS](/img/content/xu/postgres_destination_details.png){:class="img-responsive"}


**Server Name**<br>
Name bzw. IP des Datenbankservers

**TLS Mode**<br>

Folgende TLS Modi stehen für die Verbindung zur Verfügung:

|Mode|Beschreibung|
|:--:|:---|
| Prefer | Default Wert, der eine TLS Verschlüsselung verwendet, falls der Server das unterstützt. Ist das nicht der Fall, werden unverschlüsselte Verbindungen verwendet  |
| Require | Xtract Universal erzwingt eine verschlüsselte TLS-Verbindungen zum PostgreSQL-Server - unverschlüsselte Verbindungen werden nicht hergestellt |
| Disable |**Achtung** - Eine unverschlüsselte, unsichere Verbindung wird zum PostgreSQL-Server hergestellt |

Bitte stellen Sie sicher, dass die Zertifizierungsstelle (CA), die das Zertifikat signiert hat, oder das Zertifikat selbst vom Client vertrauenswürdig ist.
Weiterführende Information entnehmen Sie bitte folgendem Link: - [Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/11/ssl-tcp.html).

**Private endpoint**<br>
Dieses Feld ist optional. Sie können einen alternativen Hostnamen eingeben, unter dem eine Verbindung aufgebaut wird. <br>
Beispiel: Die PostgreSQL-Datenbank wird in einer Cloud gehostet und der Zugriff auf den Cloud-Domainnamen der Datenbank ist durch Unternehmensrichtlinien eingeschränkt. 
In diesem Fall kann der Zugriff auf die Datenbank über einen privaten Endpunkt erfolgen. Geben Sie den privaten Endpunkt in diesem Feld ein. 
Der PostgreSQL-Cloud-Domain-Name muss für die Zertifikatsvalidierung in das Feld **Server Name** eingegeben werden

**Port**<br>
Standardmäßig ist Port 5432 ausgewählt.

**Windows Authentication**<br>
Verwendet den Service Account, unter dem der XU Service läuft, um sich am PostgreSQL Server zu authentisieren, siehe auch [Client Authentication](https://www.postgresql.org/docs/11/client-authentication.html).

{: .box-note }
**Hinweis:** Um eine erfolgreiche Verbindung zur Datenbank mit Windows-Authentifizierung herzustellen, müssen Sie den [XU-Dienst unter einem Windows AD-Benutzer](../../fortgeschrittene-techniken/service-account) mit Zugriff auf die Datenbank ausführen.


**Username**<br>
Name des Datenbank-Benutzers eingeben.

**Password**<br>
Passwort des Datenbank-Benutzers eingeben.

**Database**<br>
Name der Datenbank eingeben.

**Test Connection**<br>
Datenbankverbindung testen.

