---
ref: ec-prerequisites-and-installation-03
layout: page
title: 64-Bit Umgebung
description: 64-Bit Umgebung
product: erpconnect
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=64-bit-umgebung
---

ERPConnect unterstützt echte 64-Bit Anwendungen.

Um ERPConnect im 64-Bit Modus ausführen zu können, benötigen Sie eine 64-Bit Version der librfc32.dll. Legen Sie die 64-Bit Version der librfc32.dll in das Verzeichnis \System32. Sie können die dll natürlich auch in Ihrem Programmverzeichnis ablegen.

Sie finden die 64-Bit-Version der librfc32.dll im Download-Bereich des SAPNet. Um ERPConnect  im 32-Bit-Modus laufen zu lassen, muss die 32-Bit-Version der librfc32.dll im Verzeichnis \SysWow64 liegen.

Beachten Sie, dass die Dateien den gleichen Dateinamen haben, nur die Dateigrösse variiert.

Laden Sie die aktuellste Version von [Visual C++ 2005 Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=26347) herunter.

Beachten Sie, dass die Dateien den gleichen Dateinamen haben, nur die Dateigrösse variiert.

![librfc32dll](/img/content/librfc32dll.png){:class="img-responsive"}

Die Ausnahmemeldung für falsche oder fehlende librfc32.dlls lautet:

*ERPConnect.ERPException: Cannot access librfc32.dll. Please put a 64-bit version of librfc32.dll in your System32 folder (typically C:\Windows\System32) and a 32-bit version of librfc32.dll in your SysWow64 folder (typically C:\Windows\SysWow64)*.