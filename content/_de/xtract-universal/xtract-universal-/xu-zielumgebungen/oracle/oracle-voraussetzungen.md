---
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

Um Daten in dieses Ziel zu laden, müssen Sie den zugehörigen Treiber.

**Ab Xtract Universal Version 2.64.0 (vom 24.11.2015)** 

Der **Oracle Data Provider for .NET 4 (managed driver)** wird benötigt. Zur Zeit der Dokumentation war 12c Release 4 (12.1.0.2.4) die aktuelle Version:<br>
[http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html](http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html)

Den Treiber sollten Sie dann gemäß Anleitung installieren. Hier muss auf einem 64-bit System nur die 64-bit-Variante installiert werden, unter einem 32-bit-System nur die 32-bit-Variante.<br>
Die volle ODAC Installation oder der gesamte Oracle DB Client funktioniert alternativ auch, sofern ODP.NET als Komponente ausgewählt wird.

![xu-oracle-odp-net-managed-driver](/img/content/xu-oracle-odp-net-managed-driver.jpg){:class="img-responsive"}

Sie sollten möglichst die aktuellste Version des Providers von der Webseite des Anbieters herunterladen. <br>
*Wichtig*: Nach der Installation müssen Sie den Xtract Universal Service neustarten.


**Vor Xtract Universal Version 2.64.0** 

Der "**Oracle Data Provider for .NET 2.0**" wird benötigt, was ein Bestandteil der "Oracle Data Access Components (ODAC)" ist.

- Windows 64-Bit: ODAC for Windows x64<br> 
(z.B. 64-bit ODAC 11.2 Release 5 (11.2.0.3.20) for Windows x64 <br>
[http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html](http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html)  )
- Windows 32-Bit: ODAC for Windows x32 <br>
(z.B. ODAC 11.2 Release 5 (11.2.0.3.20) with Oracle <br>Developer Tools for Visual Studio [http://www.oracle.com/technetwork/database/windows/downloads/index-101290.html](http://www.oracle.com/technetwork/database/windows/downloads/index-101290.html) )

Sie sollten möglichst die aktuellste Version des Providers von der Webseite des Anbieters herunterladen.<br> 
*Wichtig*: Nach der Installation müssen Sie den Xtract Universal Service neustarten.


