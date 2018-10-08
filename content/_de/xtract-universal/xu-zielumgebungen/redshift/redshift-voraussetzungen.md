---
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

Um Daten in das Ziel zu laden, werden eine laufende Redshift-Instanz sowie die Zugangsdaten benötigt.<br>
Zusätzlich muss ihr System für den Zugriff auf das Cluster autorisiert sein.

Um sich mit dem Redshift Cluster verbinden zu können, ist die Installation eines geeigneten Datenbank-Treibers notwendig.<br>
Bitte laden Sie hierfür die 64 bit-Version des Amazon Redshift ODBC Treibers [hier](https://docs.aws.amazon.com/redshift/latest/mgmt/install-odbc-driver-windows.html) herunter.

Bei fehlendem Treiber schlägt der Connection Test fehl:

![XU-fehlender-redshift-treiber](/img/content/XU-fehlender-redshift-treiber.png){:class="img-responsive"}

In Xtract Universal Versionen vor 2.102.0 muss anstelle des oben genannten ODBC Treibers die Mono.Security assembly installiert werden.<br>
Sie können entweder das [offizielle Mono Paket](http://download.mono-project.com/archive/2.0/download/) vom Hersteller oder aber die Mono.Security.dll von einer Quelle Ihrer Wahl herunterladen.<br>
Um die Datei zu installieren, gibt es zwei Möglichkeiten:

1. Registrieren Sie die Mono.Security assembly im global assembly cache (gac):
- Öffnen Sie ein Kommandozeilenfenster und wechseln Sie in das Xtract Universal Installationsverzeichnis
	cd "C:\Program Files\XtractUniversal"
- Installieren Sie die Mono.Security.dll Datei mit Hilfe des gacutil in Ihren global assembly cache 
	gacutil -i "C:\Program Files (x86)\Mono-2.0\lib\mono\2.0\Mono.Security.dll"<br>
	Für weitere Informationen schauen Sie sich bitte [diesen Artikel](https://docs.microsoft.com/en-us/dotnet/framework/app-domains/how-to-install-an-assembly-into-the-gac) an.

2. Kopieren Sie die Mono.Security.dll in das Xtract Universal Installationsverzeichnis.