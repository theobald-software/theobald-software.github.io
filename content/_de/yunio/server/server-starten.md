---
ref: yunio-server-01
layout: page
title: Server starten
description: Server starten
product: yunio
parent: server
permalink: /:collection/:path
weight: 1
lang: de_DE
---

Bei Ausführung der *XtractUniversalSetup.exe* wird der yunIO Server als Standard Windows Service (Dienst) installiert und gestartet.

Achten Sie darauf, bei der [Installation](../einfuehrung/installation-und-update) die Option "Server > Install Service" auszuwählen.

![Services-Install](/img/content/xu/XU_Setup_3.png){:class="img-responsive"}

Die Installation sowie Deinstallation des yunIO Service kann über die Anwendung XtractService.exe durchgeführt werden.
Die Verwendung der Anwendung XtractService.exe wird über die Windows Eingabeaufforderung (Konsole) ermöglicht und unterstützt nachfolgende Befehle:

- /i - install Windows service
- /u - uninstall Windows service

**Beispiel:**
```
C:\Program Files\XtractUniversal>XtractService.exe /i
C:\Program Files\XtractUniversal>XtractService.exe /u
```

### Windows Diensteverwaltung

Nach der Installation kann der Windows-Service über die Windows-Diensteverwaltung gestartet, gestoppt und konfiguriert werden.

![Services-Start-Server](/img/content/Services-Start-Server.png){:class="img-responsive"}


{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuellen Anpassung der Standardports, startet der yunIO Service nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden [Config-Dateien](./ports) angepasst werden:<br>
`C:\Program Files\XtractUniversal\config\server\config\general.json`<br>
`C:\Program Files\XtractUniversal\config\server\web\general.json`

### Architektur

yunIO ist für die [verteilte Anwendung](../einfuehrung#grundfunktionalit%C3%A4t---architektur) konzipiert. Der yunIO Service kann auf einer zentralen Serverinstanz, z.B. einem firmenweiten Anwendungsserver, installiert werden.
Demzufolge ist der Zugriff auf ein gemeinsames yunIO Repository `C:\Program Files\XtractUniversal\config` möglich und kann durch mehrere yunIO Anwender genutzt werden.

{: .box-tip }
**Tipp:** Stellen Sie durch eine geeignete Rechteverwaltung in yunIO sicher, dass lediglich Benutzer mit Administratorberechtigungen (Administrator User Rights) grundlegende Änderungen am zentralen Reporsitory durchführen können. Weitere Informationen entnehmen sie dem Abschnitt [Zugriffssteuerung](../sicherheit/zugriffsverwaltung).

*****
#### Weiterführende Links
- [Installation](../einfuehrung/installation-und-update)
- [yunIO Server Troubleshooting](https://kb.theobald-software.com/troubleshooting/xu_windows_service_not_running)


