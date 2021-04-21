---
ref: xu-snowflake-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 2
lang: de_DE
---

{% include _content/de/xu-specific/xu-destinations/general/connection.md %}	

### Destination Details
![Snowflake-Destination](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

#### Connection

**Directory**<br>
Angabe eines vorhandenen Verzeichnises, in das die Zieldateien abgelegt werden.

**Region**<br>
Angabe der Region der Snowflake-Umgebung.<br>
In unserem Beispiel haben wir die Region *AWS - EU (Frankfurt)* gewählt. Die gewählte Region muss den Angaben im zugewiesen Account entsprechen. 

**Account**<br>
Name des vom Snowflake zugewiesenen Kontos.
In unserem Beispiel ist es "dummy_account", wie es in der folgenden URL steht:<br>`
`https://dummy_account.eu-central-1.snowflakecomputing.com/console#/`


**User Name**<br>
Name des Benutzers eingeben.

**Password**<br>
Passwort des Benutzers eingeben.

**Database**<br>
Name der Datenbank eingeben.

**Schema**<br>
Name des Schema eingeben.

**Connect**<br>
Klicken Sie auf Connect, um Ihre Verbindung zu prüfen.
Ist die Verbindung erfolgreich, dann können Sie weitere Einstellungen definieren. 

#### Stage
**Stage name**<br>
Name der Snowflake Stage eingeben. 
Beachten Sie, dass nur "Internal" Stages unterstützt werden. 


**Warehouse**<br>
Name der Snowflake Data Warehouse eingeben.

