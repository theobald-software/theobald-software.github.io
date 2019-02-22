---
ref: pentaho-di-cmd
layout: page
title: Pentaho Integration mit dem Command Line Tool
description: Pentaho Integration mit dem Command Line Tool
product: xtract-universal
parent: pentaho-di
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: 
---

In diesem Kapitel zeigen wir die Pentaho-Integration mit dem Command Line Tool.
Dieses Szenario setzt voraus, dass Pentaho auf einem Windows-Betriebssystem läuft.
Im Fall anderer Betriebssysteme kann der Aufruf über HTTP aufrufen. 
In Xtract Universal haben wir eine Extraktion definiert.
Die Destination ist eine SQL Server Datenbank. 
In Pentaho führen wir die Extraktion durch einen Aufruf mit dem Command Line Tool von Xtract universal (xu.exe). Bei erfolgreicher Extraktion werden die Daten in die SQL Server-Datenbank geschrieben.
In Pentaho können wir die Daten aus der Datenbanktabelle lesen und weiterverarbeiten.


Hier sehen wir die Definition der Extraktion in Xtract Universal mit SQL Server Destination:
![pdi-cmd-xu](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-xu.png){:class="img-responsive"}

Übersicht der Transformation in Kettle:
![pdi-cmd-transf-overview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-overview.png){:class="img-responsive"}

Als erstes definieren wir 2 Felder: 
- XUCmd: "C:\Program Files\XtractUniversal\xu.exe"	
- XUArg: http://KETSWIN16DC02:8065/?name=SAPCustomersToSQL
![pdi-cmd-transf-generate-rows-settings](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-generate-rows-settings.png){:class="img-responsive"}

Die Settings zum Aufruf des Command Tools:
![pdi-cmd-transf-exe-settings01](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-exe-settings01.png){:class="img-responsive"}

![pdi-cmd-transf-exe-settings02](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-exe-settings02.png){:class="img-responsive"}


Die Verbindung zum SQL Server:
![pdi-cmd-transf-sql-server-connection](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-sql-server-connection.png){:class="img-responsive"}


Die Einstellungen von Table Input:
![pdi-cmd-transf-table-input-settings](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-table-input-settings.png){:class="img-responsive"}


Nach erfolgreicher Ausführung schauen wir uns die Metriken.<br>
![pdi-cmd-sql](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-sql.png){:class="img-responsive"}

Auch das Preview der einzelnen Schritte ist möglich.Preview der Eingabefelder: 
![pdi-cmd-transf-generate-rows-preview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-generate-rows-preview.png){:class="img-responsive"}

Preview der Daten vom Table Input
![pdi-cmd-transf-table-input-preview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-table-input-preview.png){:class="img-responsive"}

Hier nochmal ein Preview der Daten im SQL Server:
![pdi-cmd-sql](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-sql.png){:class="img-responsive"}

Die Transformation für Pentaho Data Integration (PDI) aka Kettle können Sie hier herunterladen.
