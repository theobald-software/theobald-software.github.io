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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

Bei Ausführung der *BOARDConnectorSetup.exe* wird der Board Connector Server als Standard Windows Service (Dienst) installiert und gestartet.

Achten Sie darauf, bei der [Installation](../einfuehrung/installation-und-update) die Option "Server > Install Service" auszuwählen.

![Services-Install](/img/content/xu/XU_Setup_3.png){:class="img-responsive"}

Die Installation sowie Deinstallation des Board Connector Service kann über die Anwendung BCService.exe durchgeführt werden.
Die Verwendung der Anwendung BCService.exe wird über die Windows Eingabeaufforderung (Konsole) ermöglicht und unterstützt nachfolgende Befehle:

- /i - install Windows service
- /u - uninstall Windows service

**Beispiel:** Board Connector\BCService.exe
```
C:\Program Files\BOARDConnector>BCService.exe /i
C:\Program Files\BOARDConnector>BCService.exe /u
```

### Windows Diensteverwaltung

Nach der Installation kann der Windows-Service über die Windows-Diensteverwaltung gestartet, gestoppt und konfiguriert werden.

![Services-Install](/img/content/board/BC_Setup_3.png){:class="img-responsive"}


{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuellen Anpassung der Standardports, startet der Board Connector Service nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden [Config-Dateien](./ports) angepasst werden:<br>
`C:\Program Files\BOARDConnector\config\server\config\general.json`<br>
`C:\Program Files\BOARDConnector\config\server\web\general.json`

### Architektur

Board Connector ist für die [verteilte Anwendung](../einfuehrung#grundfunktionalit%C3%A4t---architektur) konzipiert. Der Board Connector Service kann auf einer zentralen Serverinstanz, z.B. einem firmenweiten Anwendungsserver, installiert werden.
Demzufolge ist der Zugriff auf ein gemeinsames Board Connector Repository `C:\Program Files\BOARDConnector\config` möglich und kann durch mehrere Board Connector Anwender genutzt werden.

{: .box-tip }
**Tipp:** Stellen Sie durch eine geeignete Rechteverwaltung in Board Connector sicher, dass lediglich Benutzer mit Administratorberechtigungen (Administrator User Rights) grundlegende Änderungen am zentralen Reporsitory durchführen können. Weitere Informationen entnehmen sie dem Abschnitt [Zugriffssteuerung](../sicherheit/zugriffsverwaltung).

*****
#### Weiterführende Links
- [Installation](../einfuehrung/installation-und-update)
- [Board Connector Server Troubleshooting](https://support.theobald-software.com/helpdesk/KB/View/20074-board-connector-server-troubleshooting)

