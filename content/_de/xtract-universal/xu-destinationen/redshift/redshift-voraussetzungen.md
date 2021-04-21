---
ref: xu-amazon-redshift-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-universal
parent: redshift
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=redshift-voraussetzungen
---
### Voraussetzungen
- Sie benötigen eine laufende Instanz und gültige Anmeldedaten.
- Ihr Client-Rechner muss für den Zugriff auf den Cluster autorisiert sein.
- Für den Aufbau einer Verbindung zu Redshift wird ein geeigneter Datenbanktreiber benötigt.
- Laden Sie den 64-Bit-Amazon-Redshift-ODBC-Treiber von der offiziellen [Website](https://docs.aws.amazon.com/redshift/latest/mgmt/install-odbc-driver-windows.html) herunter und installieren Sie ihn.

{: .box-note }
**Hinweis:** Wenn der Treiber fehlt, schlägt der Verbindungstest fehl.

![XU-fehlender-redshift-treiber](/img/content/XU-fehlender-redshift-treiber.png){:class="img-responsive"}

Vor Xtract Universal Version 2.102.0 müssen Sie die Mono.Security.dll Assembly anstelle des oben genannten ODBC-Treibers installieren.
Sie können das komplette Mono-Paket von [der offiziellen Projektseite](http://download.mono-project.com/archive/2.0/download/) des Herstellers, oder die Mono.Security.dll von einer beliebigen Quelle Ihrer Wahl herunterladen. Bitte stellen Sie sicher, dass Sie die Mono.Security-Assembly installieren, die auf .NET 2.0 kompiliert wurde. Andere Versionen könnten Probleme mit den Assemblies verursachen, die für den Zugriff auf die Redshift-Datenbank verwendet werden.

### Installation
Um die Datei zu installieren, gibt es zwei Möglichkeiten:

1. Registrieren Sie die Mono.Security assembly im global assembly cache (gac):
- Öffnen Sie ein Kommandozeilenfenster und wechseln Sie in das Xtract Universal Installationsverzeichnis
	cd "C:\Program Files\XtractUniversal"
- Installieren Sie die Mono.Security.dll Datei mit Hilfe des gacutil in Ihren global assembly cache 
	gacutil -i "C:\Program Files (x86)\Mono-2.0\lib\mono\2.0\Mono.Security.dll"<br>
Weitere Informationen finden Sie in dem Artikel über das [Installieren einer Assembly im globalen Assemblycache](https://docs.microsoft.com/en-us/dotnet/framework/app-domains/how-to-install-an-assembly-into-the-gac).
2. Kopieren Sie die Mono.Security.dll in das Xtract Universal Installationsverzeichnis.