---
ref: xu-oracle-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=oracle-voraussetzungen
---

Um Daten nach Oracle zu laden, müssen Sie den **Oracle Data Provider for .NET, Managed Driver** installieren. 

[http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html](http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html)

**ACHTUNG**: Die Oracle Destination funktioniert nur mit Oracle Data Provider Version 4.122.1.0 (ODAC 12.2.0.1.0)

Bitte installieren Sie den 64-bit-Treiber gemäß Anleitung.<br>
Die volle ODAC Installation oder der gesamte Oracle DB Client funktioniert alternativ auch, sofern ODP.NET als Komponente ausgewählt wird.

Bitte gehen Sie für die Installation wie folgt vor:

1. Laden Sie den 64-bit-Treiber von oben genannter Oracle-Website herunter
2. Entpacken Sie das **ODP.NET_Managed_ODAC122cR1.zip** Verzeichnis
3. Starten Sie die Eingabeaufforderung und führen Sie die **install_odpm.bat** aus

![install_odpm_parameters](/img/content/xu/install_odpm.bat_paramter.png){:class="img-responsive"}
- Ausführung als **Admin-User** 
- Installation mit folgendem Parameter **c:\oracle x64 true**

![xu-oracle-odp-net-managed-driver](/img/content/xu-oracle-odp-net-managed-driver.png){:class="img-responsive"}
