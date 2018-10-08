---
layout: page
title: 64-Bit-Umgebungen
description: 64-Bit-Umgebungen
product: xtract-rs
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=installation-unter-64-bit-umgebungen
---

Xtract RS ist zu 100% 64-Bit tauglich.

Das Installationsprogramm erkennt 64-Bit Umgebungen und wird die Dlls so auf dem Rechner installieren, dass 64- und 32-Bit Modi möglich sind.

Um einen Report im 32-Bit-Modus laufen zu lassen, muss die 32-Bit-Version der librfc32.dll, wie im Kapitel [Systemvoraussetzungen](./systemvoraussetzungen) erwähnt, im Verzeichnis [WindowsDir]\SysWow64 liegen. Dies gilt nur für X64-Prozessoren. Auf IA64-Prozessoren sind keine 32-Bit Prozesse möglich.

Um einen Report im 64-Bit-Modus laufen zu lassen, muss die 64-Bit-Version der librfc32.dll im Verzeichnis [WindowsDir]\System32 liegen. Dies gilt für x64 und ia64-Prozessoren. Sie finden die 64-Bit-Version der librfc32.dll im Download-Bereich des SAPNet.

Sie können die Versionen der librfc32.dll aus unserem Knowledgebase Artikel [Theobald Products in a 64-bit environment](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/71/0/theobald--products-in-a-64-bit-environment) herunterladen. Hier finden Sie auch weiterführende Informationen zur Installation.

Bitte beachten Sie, dass die Dateien den gleichen Dateinamen haben, nur die Dateigrösse variiert.