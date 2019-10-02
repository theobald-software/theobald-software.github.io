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

Folgende Einstellungen können für die Verbindung zu Snowflake definiert werden.

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details.png){:class="img-responsive"}

**Directory**<br>
Angabe eines vorhandenen Verzeichnises, in das die Zieldateien abgelegt werden.

**Region**<br>
Angabe der Region der Snowflake-Umgebung.
In unserem Beispiel haben wir die Region 
AWS - EU (Frankfurt)
gewählt. Die gewählte Region muss den Angaben im zugewiesen Account entsprechen. 

**Account**<br>
Name des vom Snowflake zugewiesenen Kontos.
In unserem Beispiel ist es: theobald_partner, wie es in der unteren URL steht: 
https://theobald_partner.eu-central-1.snowflakecomputing.com/console#/


**User Name**<br>
Name des Benutzers.

**Password**<br>
Passwort des Benutzers.

**Database**<br>
Name der Datenbank.

**Connect**<br>
Klicken Sie auf Connect, um Ihre Verbindung zu prüfen.
Ist die Verbindung erfolgreich, dann können Sie unten die weiteren Einstellungen definieren. 

**Stage name**<br>
Name der Snowflake Stage. 
Beachten Sie, dass nur "Internal" Stages unterstützt werden. 

**Warehouse**<br>
Name der Snowflake Data Warehouse.

