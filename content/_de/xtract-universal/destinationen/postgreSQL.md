---
ref: destinations-81
layout: page
title: PostgreSQL
description: PostgreSQL
product: xtract-universal
parent: destinationen
childidentifier: postgreSQL
permalink: /:collection/:path
weight: 81
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine PostgreSQL-Zieldatenbank.

## Voraussetzungen

### Data Provider
Um Daten in dieses Ziel zu laden, benötigen Sie den Open Source ADO.NET Data Provider [Npgsql.dll](https://www.postgresql.org/docs/11/external-interfaces.html).
Dieser ist im Setup der Xtract Universal bereits vorhanden und wird bei der Ausführung der **XtractUniversalSetup.exe** zur Verfügung gestellt. 

### Unterstützte Versionen

Folgende PostgreSQL Versionen werden unterstützt:
- 15
- 14
- 13
- 12
- 11


Weiterführende Informationen bezüglich der Versionierung entnehmen Sie der offiziellen [Webseite](https://www.postgresql.org/support/versioning/).


## Verbindung


{% include _content/de/xu-specific/destinationen/general/connection.md %}	

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
Der PostgreSQL-Cloud-Domainname muss für die Zertifikatsvalidierung in das Feld **Server Name** eingegeben werden

**Port**<br>
Der Standard-Port ist 5432.

**Windows Authentication**<br>
Verwendet den Service Account, unter dem der XU Service läuft, um sich am PostgreSQL Server zu authentisieren, siehe auch [Client Authentication](https://www.postgresql.org/docs/11/client-authentication.html).

{: .box-note }
**Hinweis:** Um eine erfolgreiche Verbindung zur Datenbank mit Windows-Authentifizierung herzustellen, müssen Sie den [XU-Dienst unter einem Windows AD-Benutzer](../fortgeschrittene-techniken/service-account) mit Zugriff auf die Datenbank ausführen.


**Username**<br>
Name des Datenbank-Benutzers eingeben.

**Password**<br>
Passwort des Datenbank-Benutzers eingeben.

**Database**<br>
Name der Datenbank eingeben.

**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen.

{: .box-warning }
**Warning! The remote certificate is invalid according to the validation procedure** 
Bei der Verwendung von TLS-Verschlüsselung kann diese Fehlermeldung mehrere Ursachen haben, z.B. ungültige oder nicht vertrauendwürdige Zertifikate.
Für mehr Informationen, siehe [TLS-Verschlüsselung mit PostgreSQL](#tls-verschlüsselung-mit-postgresql).

### TLS-Verschlüsselung mit PostgreSQL
Voraussetzungen für die Verwendung einer TLS-Verschlüsselung mit PostgreSQL:
- die Version von Xtract Universal bzw. des Npgsql.dll-Treibers muss aktuell sein und TLS gegen neuere PostgreSQL-Versionen unterstützen.
Falls nötig, installieren Sie die aktuelle Version von Xtract Universal
- das [Zertifikat](../sicherheit/x.509-zertifikat-installieren) für die Authentifizierung muss gültig sein.
- der Subject Alternative Name des Zertifikats muss als PostgreSQL Host verwendet werden, siehe [**Private endpoint**](#destination-details).
- Stellen Sie sicher, dass die Zertifizierungsstelle (CA), die das Zertifikat signiert hat, oder das Zertifikat selbst vom Client vertrauenswürdig ist. 
Siehe [PostgreSQL Dokumentation: Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/11/ssl-tcp.html) für mehr Informationen.



## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![postgres_destination](/img/content/xu/postgres_destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/debugging-bulk-insert.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}

## Daten Mergen

{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}
