---
ref: xu-server-01
layout: page
title: Server starten
description: Server starten
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 1
lang: de_DE
---

Bei Ausführung der *XtractUniversalSetup.exe* wird standardmäßig der Xtract Universal Server als Standard Windows-Dienst installiert und gestartet.

Die Installation sowie Deinstallation des Xtract Universal Dienstes kann ebenfalls über nachfolgende Anwendung `C:\Program Files\XtractUniversal\XtractService.exe` durchgeführt werden.
Die Verwendung wird über das Windows-Konsolenprogramm ermöglicht und unterstützt nachfolgende Befehle:

``` .net
/i install Windows Service
/u uninstall Windows Service
```

Nach der Installation kann der Windows-Dienst über die Windows-Dienste-Verwaltung getartet, gestoppt and konfiguriert werden.

![Services-Start-Server](/img/content/Services-Start-Server.png){:class="img-responsive"}


{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuelle Anpassung der Standardports, startet der Xtract Universal Dienst nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden Config-Dateien angepasst werden. 
`C:\Program Files\XtractUniversal\config\server\config\general.json`
`C:\Program Files\XtractUniversal\config\server\web\general.json`


Xtract Universal ist für die verteilte Anwendung konzipiert. Die Installation des Xtract Universal Dienstes auf einer zentralen Serverinstanz, z.B. einem firmenweiten Anwendungsserver.
Demzufolge ist der Zugriff auf ein gemeinsames Xtract Universal Repository `C:\Program Files\XtractUniversal\config` möglich und kann durch mehrere Xtract Universal Anwender genutzt werden.

{: .box-tip }
**Tip:** Stellen Sie durch eine geeignete Rechtverwaltung in Xtract Universal sicher, dass lediglich Benutzer mit Admin-User-Rechten grundlegende Änderungen am zentralen Reporsitory durchführen können.<br> Weitere Einformationen entnehmen sie dem Abschnitt [Zugriffsverwaltung](./sicherheit/zugriffsverwaltung).




