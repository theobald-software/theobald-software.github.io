---
ref: ec-prerequisites-and-installation-01
layout: page
title: SAP Bibliotheken
description: SAP Libraries
product: erpconnect
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=systemvoraussetzungen
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

To use ERPConnect you need also the following SAP libraries.

### Client Protocol RFC (librfc32.dll)

Kopieren Sie die 64-bit Version der librfc32.dll in den `\System32` Ordner.<br>
Kopieren Sie die 32-bit Version der librfc32.dll in den `\SysWoW64` Ordner.

Beachten Sie, dass die Dateien den gleichen Dateinamen haben, nur die Dateigrösse variiert.

![librfc32dll](/img/content/librfc32dll.png){:class="img-responsive" width="300px" }

Um die Klassische RFC-Bibliothek zu verwenden, setzen Sie die Eigenschaft *Protocol* des *R3Connection*-Objekts auf *ClientProtocol.NWRFC*.

```
R3Connection.Protocol = ClientProtocol.RFC;
```

### Netweaver RFC Library

ERPConnect unterstützt die Netweaver RFC-Bibliothek seit der Version 4.6.0 (siehe Version History).<br>
Für die 64-Bit Umgebung sind folgende DLLs nötig:
- sapnwrfc.dll
- icuucXX.dll
- icudtXX.dll
- icuinXX.dll 

Kopieren Sie die 64-bit Version der Netweaver RFC-Bibliothek in den `\System32` Ordner.<br>
Kopieren Sie die 32-bit Version der Netweaver RFC-Bibliothek in den `\SysWoW64` Ordner.

Um die Netweaver RFC-Bibliothek zu verwenden, setzen Sie die Eigenschaft *Protocol* des *R3Connection*-Objekts auf *ClientProtocol.NWRFC*.

```
R3Connection.Protocol = ClientProtocol.NWRFC;
```