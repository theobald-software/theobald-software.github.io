---
layout: page
title: Funktionsbaustein
description: Funktionsbaustein
product: erpconnect-services
parent: ecs-anwendungsentwicklung
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-entwicklung-funktionsbaustein
---

Mit Hilfe dieses Funktionsblocks lassen sich SAP-Funktionsbausteine ausführen. Die Schnittstelle ist in Art und Verwendung der von *ERPConnect*, der Basisbibliothek von Theobald Software, sehr ähnlich und kompatibel.

Funktionsbausteine sind einzelne Funktionen, die im SAP *Function Builder* (Transaktion SE37) verwaltet und in ABAP entwickelt werden. Wenn ein Funktionsbaustein das Attribut Remotefähig hat, kann er von einem externen System per RFC-Protokoll aufgerufen werden. Genau diese Funktionsbausteine können von ERPConnect Services angesprochen und ausgeführt werden.

Jeder Funktionsbaustein besteht aus *Import*- und *Export*-Parametern, die - wie der Name schon sagt - entweder an den Baustein übergeben oder von ihm zurückgegeben werden. Außer diesen skalaren Parametern gibt es noch einen Austausch von Tabellen. 

![ECS-VS-Function-Architecture](/img/content/ECS-VS-Function-Architecture.png){:class="img-responsive"}

**Commit Transaction / Transaktion abschließen** 

Um einen Funktionsbaustein zum Abschließen einer Transaktion (commit transaction) auszuführen (z.B. mit BAPI_TRANSACTION_COMMIT) benötigen Sie einen [Verbindungskontext (connection scope)](). <br> 
Das ist auch der Fall, wenn Sie mehrere Funktionsbausteine im selben Verbindungskontext ausführen müssen. 