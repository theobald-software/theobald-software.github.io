---
ref: bc-server-01
layout: page
title: Server starten
description: Server starten
product: board-connector
parent: server
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=server-starten
---
Bei Ausführung der *BOARDConnectorSetup.exe* wird der BOARD Connector Server als Standard Windows Service (Dienst) installiert und gestartet.

Achten Sie darauf, bei der [Installation](../einfuehrung/installation-und-update) die Option "Server > Install Service" auszuwählen.

![Services-Install](/img/content/xu/XU_Setup_3.png){:class="img-responsive"}

Die Installation sowie Deinstallation des BOARD Connector Service kann über die Anwendung BCService.exe durchgeführt werden.
Die Verwendung der Anwendung BCService.exe wird über die Windows Eingabeaufforderung (Konsole) ermöglicht und unterstützt nachfolgende Befehle:

- /i - install Windows service
- /u - uninstall Windows service

**Beispiel:** BOARD Connector\BCService.exe
```
C:\Program Files\BOARDConnector>BCService.exe /i
C:\Program Files\BOARDConnector>BCService.exe /u
```

### Windows Diensteverwaltung

Nach der Installation kann der Windows-Service über die Windows-Diensteverwaltung gestartet, gestoppt und konfiguriert werden.

![Services-Install](/img/content/board/BC_Setup_3.png){:class="img-responsive"}


{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuellen Anpassung der Standardports, startet der BOARD Connector Service nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden [Config-Dateien](./ports) angepasst werden:<br>
`C:\Program Files\BOARDConnector\config\server\config\general.json`<br>
`C:\Program Files\BOARDConnector\config\server\web\general.json`

### Architektur

BOARD Connector ist für die [verteilte Anwendung](../einfuehrung#grundfunktionalit%C3%A4t---architektur) konzipiert. Der BOARD Connector Service kann auf einer zentralen Serverinstanz, z.B. einem firmenweiten Anwendungsserver, installiert werden.
Demzufolge ist der Zugriff auf ein gemeinsames BOARD Connector Repository `C:\Program Files\BOARDConnector\config` möglich und kann durch mehrere BOARD Connector Anwender genutzt werden.

{: .box-tip }
**Tipp:** Stellen Sie durch eine geeignete Rechteverwaltung in BOARD Connector sicher, dass lediglich Benutzer mit Administratorberechtigungen (Administrator User Rights) grundlegende Änderungen am zentralen Reporsitory durchführen können. Weitere Informationen entnehmen sie dem Abschnitt [Zugriffssteuerung](../sicherheit/zugriffsverwaltung).

*****
#### Weiterführende Links
- [Installation](../einfuehrung/installation-und-update)
- [BOARD Connector Server Troubleshooting](https://kb.theobald-software.com/board-connector/bc_windows_service_not_running)

