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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

Bei Ausführung der *XtractUniversalSetup.exe* wird der Xtract Universal Server als Standard Windows Service (Dienst) installiert und gestartet.

Achten Sie darauf, bei der [Installation](../einfuehrung/installation-und-update) die Option "Server > Install Service" auszuwählen.

![Services-Install](/img/content/xu/XU_Setup_3.png){:class="img-responsive"}

Die Installation sowie Deinstallation des Xtract Universal Service kann über die Anwendung XtractService.exe durchgeführt werden.
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
Nach der manuellen Anpassung der Standardports, startet der Xtract Universal Service nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden [Config-Dateien](./ports) angepasst werden:<br>
`C:\Program Files\XtractUniversal\config\server\config\general.json`<br>
`C:\Program Files\XtractUniversal\config\server\web\general.json`

### Architektur

Xtract Universal ist für die [verteilte Anwendung](../einfuehrung#grundfunktionalit%C3%A4t---architektur) konzipiert. Der Xtract Universal Service kann auf einer zentralen Serverinstanz, z.B. einem firmenweiten Anwendungsserver, installiert werden.
Demzufolge ist der Zugriff auf ein gemeinsames Xtract Universal Repository `C:\Program Files\XtractUniversal\config` möglich und kann durch mehrere Xtract Universal Anwender genutzt werden.

{: .box-tip }
**Tipp:** Stellen Sie durch eine geeignete Rechteverwaltung in Xtract Universal sicher, dass lediglich Benutzer mit Administratorberechtigungen (Administrator User Rights) grundlegende Änderungen am zentralen Reporsitory durchführen können. Weitere Informationen entnehmen sie dem Abschnitt [Zugriffssteuerung](../sicherheit/zugriffsverwaltung).

*****
#### Weiterführende Links
- [Installation](../einfuehrung/installation-und-update)
- [Xtract Universal Server Troubleshooting](https://kb.theobald-software.com/xtract-universal/xu_windows_service_not_running)


