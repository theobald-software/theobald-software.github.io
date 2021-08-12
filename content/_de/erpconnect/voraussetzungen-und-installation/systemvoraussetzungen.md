---
ref: ec-prerequisites-and-installation-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: erpconnect
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=systemvoraussetzungen
---

### .NET Framework

ERPConnect (ohne LINQ to ERP) besteht aus drei .NET Assemblies, welche unterschiedliche [Frameworks als Ziel](https://docs.microsoft.com/de-DE/dotnet/standard/frameworks) haben:
-	ERPConnect35.dll (Ziel: .NET Framework 3.5 SP1)
-	ERPConnect45.dll (Ziel: .NET Framework 4.5.2)
-	ERPConnectStandard20.dll (Ziel: .NET Standard 2.0)

Daraus ergibt sich folgende Kompatibilitätsmatrix:

| |	ERPConnectStandard20.dll	| ERPConnect45.dll	| ERPConnect35.dll|
|:------|:------|:------ |:------ |
|.NET Framework 3.5 SP1	| | |	X|
|.NET Framework 4.0     | | |	X |
|.NET Framework 4.5	    | | |	X |
|.NET Framework 4.5.1	  | | |	X |
|.NET Framework 4.5.2 	 | | X	| X |
|.NET Framework 4.6	    | |	X |	X |
|.NET Framework 4.6.1 und neuer |	X	| X |	X |
|.NET Core 2.0 und neuer | X |	X	| X |
|Universal Windows Platform 10.0.16299 und neuer	| X | | |	 	 

{% include _content/de/sap-releases.md %}

Die Installation von kundenspezifischen Funktionsbausteinen / Transportaufträgen ist nicht erforderlich. 

{% include _content/de/operating-systems.md %}

### Visual Studio

- Visual Studio 2019
- Visual Studio 2017
- Visual Studio 2015 (bis 14.10.2025)
- Visual Studio 2013 (bis 09.04.2024)
- Visual Studio 2012 Update 5 (bis 10.01.2023)

{: .box-note }
**Hinweis**: Visual Studio Express-Versionen unterstützen den LINQ to ERP Designer nicht.

### Andere Anwendungen und Frameworks

- [SAP NetWeaver RFC Library 7.50](https://launchpad.support.sap.com/#/notes/2573790) 
- [Visual C++ 2013 Runtime](https://www.microsoft.com/de-DE/download/details.aspx?id=40784).

#### Netweaver RFC-Bibliothek

ERPConnect unterstützt die Netweaver RFC-Bibliothek ab Version 4.6.0.
Um die Bibliothek zu verwenden, setzen Sie die Eigenschaft *Protocol* des *R3Connection-Objekts* auf *ClientProtocol.NWRFC*. 

```
R3Connection.Protocol = ClientProtocol.NWRFC;
```

Für die 64-Bit Umgebung sind folgende DLLs nötig:
- ERPConnect35.dll oder ERPConnect45.dll
- sapnwrfc.dll
- icuucXX.dll
- icudtXX.dll
- icuinXX.dll 

Die ERPConnect*.dll wird mit ERPConnect mitgeliefert. 
Die restlichen DLLs können Sie von der SAP-Webseite herunterladen.

### Arbeitsspeicher
 	
- 2 GB oder mehr empfohlen (abhängig vom konkreten Anwendungsfall).

### Festplattenspeicher
 	
- Für die Installation werden ca. 12 MB Festplattenspeicher benötigt.

### 32/64-Bit Umgebung
 	
- Es werden sowohl x86 als auch x64 Plattformen unterstützt.

{: .box-warning }
**Warnung! ERPConnect.ERPException: Cannot access librfc32.dll.** <br>
Um ERPConnect im 64-Bit Modus ausführen zu können, benötigen Sie eine 64-Bit Version der SAP-Bibliothek **librfc32.dll**. 
Kopieren Sie die 64-Bit Version der librfc32.dll in das Verzeichnis `C:\Windows\System32`. <br>
Um ERPConnect im 32-Bit-Modus laufen zu lassen, kopieren Sie die 32-Bit-Version der librfc32.dll in das Verzeichnis `C:\Windows\SysWOW64`. 

![librfc32dll](/img/content/librfc32dll.png){:class="img-responsive" width="300px" }

### Sicherheitseinstellungen
 	
- Für die Anmeldung am SAP wird ein System- oder Dialog-Anwender mit den entsprechenden [Authorisierungs-Objekten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights) benötigt.
- Plain authentication (Benutzer/Passwort), Secure Network Communications (SNC) mit und ohne Single Sign-On (SSO) und SAP Logon Tickets (MYSAPSSO2) werden unterstützt.

### Netzwerkeinstellungen

Für die Kommunikation mit dem SAP Applikationsserver müssen je nach Verbindungstechnik des SAP Systems Ports geöffnet werden.
Details finden Sie im Knowledgebase-Artikel [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/how-to-check-the-accessibility-to-a-sap-system).
