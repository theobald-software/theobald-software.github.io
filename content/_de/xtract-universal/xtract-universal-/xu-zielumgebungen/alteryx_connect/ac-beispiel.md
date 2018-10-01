---
layout: page
title: Beispiel
description: Beispiel
product: xtract-universal
parent: alteryx_connect
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=ac-beispiel
---

In diesem Beispiel extrahieren wir die Daten von SAP Werken (SAP Plants) zu Alteryx Connect. 

Wir haben die folgende Extraktion definiert: 

![XU-SAPPlant-01](/img/content/XU-SAPPlant-01.png){:class="img-responsive"}

und nutzen die folgende Alteryx Connect Destination: 

![XU-Alteryx-Connect-Destination](/img/content/XU-Alteryx-Connect-Destination.png){:class="img-responsive"}

Wie in der Hilfe von Alteryx Connect beschrieben haben wir die zwei benötigten Konfigurationsdateien definiert und hochgeladen: 
- Table configuration file: sapplants.xml
- Load job configuration file: load-theobald-sapplant.xml

In den Destination Settings haben wir die Option gewählt, um den im letzten Schritt definierten Load Job auszuführen. <br>
Die Extraktion lädt die SAP-Daten in die Stage-Tabelle EXT_PLANTS.<br>
Der Load-Job ist für das Mappen zwischen der Stage-Tabelle und dem Connect Interface zuständig.

![XU-Plants-Destination-Settings](/img/content/XU-Plants-Destination-Settings.png){:class="img-responsive"}

In Alteryx Connect haben wir einen Datasource Folder *SAP Plant Test* angelegt:

![AC-Datasource-Folder-Plant](/img/content/AC-Datasource-Folder-Plant.png){:class="img-responsive"}

Nachdem wir die Extraktion ausführen, können wir das Ergebnis im Stage in der Administration Console überprüfen:

![AC-Stage-Plant](/img/content/AC-Stage-Plant.png){:class="img-responsive"}

We sehen also auch, dass der Load-Job ausgeführt wurde: 

![AC-Jobs-Plant](/img/content/AC-Jobs-Plant.png){:class="img-responsive"}

Man kann auch das Log überprüfen: 

![AC-Log-Plant](/img/content/AC-Log-Plant.png){:class="img-responsive"}

Die Einträge kann man auch überprüfen: 

![AC-Datasource-Folder-Plant-Entries](/img/content/AC-Datasource-Folder-Plant-Entries.png){:class="img-responsive"}

Die XML-Konfigurationsdateien können von [GitHub]() heruntergeladen werden. 