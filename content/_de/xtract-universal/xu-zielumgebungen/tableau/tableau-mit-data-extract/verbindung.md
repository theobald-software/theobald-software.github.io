---
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: tableau-mit-data-extract
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=verbindung
---

Folgende Einstellungen können für den Tableau-Export definiert werden:

![tableauDestinationDetails-hyper](/img/content/tableauDestinationDetails-hyper.png){:class="img-responsive"}

**Output directory** <br>
Geben Sie hier das Verzeichnis auf dem Xtract Universal Server an, in das die exportierten Tableau-Dateien gespeichert werden sollen.

**TDE oder Hyper** <br>
Wählen Sie das gewünschte Format der Data Extract-Datei. 

**Tableau Server** <br>
Sie können die extrahierte TDE-Datei (als Datenquelle) zu Tableau Server oder Tableau Online hochladen.

**Host** <br>
Die IP-Adresse oder der Domainname des Servers, beginnend mit http:// oder https://.

**Username** <br>
Ihr Benutzername für Tableau Server/Online.

**Password** <br>
Ihr Passwort für Tableau Server/Online.


**Site** <br>
Die ID der Site, auf der die Datenquelle veröffentlichet werden soll. <br>
Bei der Verwendung von Tableau Server wird die Standard-Site verwendet, falls Sie dieses Feld leer lassen.<br>
Für Tableau Online hingegen muss dieses Feld ausgefüllt sein. Um Ihre Site festzustellen, loggen Sie sich bitte bei Tableau Online ein und bestimmen Sie den folgenden Teil der URL:

[https://online.tableau.com/#/site/Site/workbooks](https://online.tableau.com/#/site/Site/workbooks)

**Project**<br>
Das Projekt, in dem ihre Datenquelle veröffentlicht werden soll. Es wird ein neues Projekt angelegt, falls es noch nicht existiert.

**Delete local file after upload**<br>
Sie können die lokal erstellte Datei nach dem erfolgreichen Hochladen entfernen lassen.