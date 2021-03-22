
Das Hauptfenster vom Designer besteht aus drei Hauptabschnitten:
- Hauptmenüleiste (1)
- GUI-Schaltflächen (2)
- Auflistung der Extraktionen (3)
- Statusleiste (4)

### Hauptmenüleiste (1)

#### Designer

![menueleiste_designer](/img/content/xu/menueleiste_designer.png){:class="img-responsive"}

Menüeintrag |Beschreibung | Details
------------ | ------------ | -------------
Reset Preferences  | Zurücksetzen der Verbindungsparameter zum Server | [Den Designer mit dem Server verbinden](../erste-schritte/designer-mit-dem-server-verbinden#verbindung-zu-einem-server)
Disconnect | Abmeldung vom Server | -
Exit | Beendet den Designer | -

#### Extraction

![menueleiste_extraction](/img/content/xu/menueleiste_extraction.png){:class="img-responsive"}

Menüeintrag |Beschreibung | Details
------------ | ------------ | -------------
New  | Neue Extraktion anlegen | [Eine neue Extraktion anlegen](../erste-schritte/eine-neue-extraktion-anlegen)
Edit | Vorhandene Extraktion bearbeiten | -
Delete | Vorhandene Extraktion bearbeiten | -
Clone | Vorhandene Extraktion klonen | -
Source | Vorhandenes SAP Quellsystem auswählen | -
Destination (nur Xtract Universal) | Destination auswählen | [Destinationen](https://help.theobald-software.com/de/xtract-universal/xu-destinationen)
Log | Extraktions-Log aufrufen | [Extraktions-Logging](../logging/log-zugriff-ueber-designer#extraktions-logs)
Run  | Ausgewählte Extraktion ausführen | [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren)
Abort | Ausgewählte Extraktion abbrechen | -
Clear Result Cache | Extraktions-Cache leeren | [Cache results](../erste-schritte/allgemeine-einstellungen#misc-tab)
Refresh | Aktualisierung des Extraktionsstatus | -
Filter | Filter oder Keywords definieren | [Keywords definieren](../erste-schritte/allgemeine-einstellungen#misc-tab)

#### Server

![menueleiste_server](/img/content/xu/menueleiste_server.png){:class="img-responsive"}

Menüeintrag |Beschreibung | Details
------------ | ------------ | -------------
Logs  | Server-Log aufrufen | [Server-Logging](../logging/log-zugriff-ueber-designer#server-logs-run)
Settings | Server-Einstellungen aufrufen | [Server-Einstellungen](../server/server_einstellungen)
Manage Sources | Verbindung zum Quellsystem bearbeiten | [SAP-Verbindung](../einfuehrung/sap-verbindungen-anlegen)
Manage Destinations (nur Xtract Universal) | Destinationen verwalten | [Destinationen verwalten](https://help.theobald-software.com/de/xtract-universal/xu-destinationen/ziele-verwalten)

#### Security

![menueleiste_security](/img/content/xu/menueleiste_security.png){:class="img-responsive"}

Menüeintrag |Beschreibung | Details
------------ | ------------ | -------------
Set User Password  | Benutzerkennwort festlegen oder ändern  | [Benutzerverwaltung](../sicherheit/benutzerverwaltung#benutzer)
Manage Users | Benutzergruppen verwalten | [Benutzergruppen](../sicherheit/benutzerverwaltung#benutzergruppen)

#### Help

![menueleiste_help](/img/content/xu/menueleiste_help.png){:class="img-responsive"}

Menüeintrag |Beschreibung | Details
------------ | ------------ | -------------
Online Help (EN) |  -  | -
Online Help (DE) | - | -
Submit Support Ticket | Support-Ticket einreichen | [Helpdesk](https://support.theobald-software.com/helpdesk/User/Register)
Support Client | Direkter Support | [TeamViewer Client](https://get.teamviewer.com/theobaldsoftware)
Info | Produktinfos | [Info-Fenster](../einfuehrung/lizenz#about-xtract-universal---info-fenster)
Version History | Versionshistorie | [Versionshistorie]( https://kb.theobald-software.com/version-history)

### GUI-Schaltflächen (2)

Schaltfläche |Beschreibung 
------------ | ------------ 
New | Neue Extraktion anlegen 
Edit |  Vorhandene Extraktion bearbeiten |
Delete | Vorhandene Extraktion löschen  |
Clone| Vorhandene Extraktion klonen  |
Refresh | Aktualisierung des Extraktionsstatus  |
Filter |  Filter oder Keywords definieren |
Source| Vorhandenes SAP Quellsystem auswählen  |
Destination (nur Xtract Unviersal)| Vorhandene Destination auswählen  |
Log | Extraktions-Log aufrufen  |
Run  | Ausgewählte Extraktion ausführen  | 

### Auflistung der Extraktionen (3)
Liste aller Extraktionen unterteilt nach Namen, Typ, Änderungs- und Erstellungsdatum usw.

**Filtern**<br>
Sie können einen Filterwert für den Extraktionsnamen eingeben, Platzhalterzeichen werden nicht unterstützt. <br> 
Umfangreichere Filteroptionen sind über die Schaltfläche [Filter](../fortgeschrittene-techniken/regulaere-ausdruecke) im Bereich [GUI-Schaltflächen (2)](#gui-schaltflächen-2) verfügbar. 

**Mehrfachauswahl**<br>
Um mehrere Destinationen gleichzeitig zu bearbeiten, selektieren Sie mit **[STRG]+[linke Maustaste]** die Extraktionen.<br>
Sie können über die [GUI-Schaltflächen (2)](#gui-schaltflächen-2) **[Destination]** oder **[Source]** die entsprechenden Einstellungen für alle ausgewählten Extraktionen anpassen. 

**Doppelklick**<br>
Mit einem Doppelklick auf eine Extraktion können Sie die Extraktion wie über die Schaltfläche **[Edit]** bearbeiten.<br>

**Rechtsklick**<br>
Ein Rechtsklick auf eine Extraktion in der Liste öffnet das folgende Menü:
![menu_list_of_extractions](/img/content/xu/menu_list_of_extractions.png){:class="img-responsive"}

Menüeintrag |Beschreibung | Details
------------ | ------------ | -------------
Edit | Vorhandene Extraktion bearbeiten | -
Delete | Vorhandene Extraktion bearbeiten | -
Clone | Vorhandene Extraktion klonen | -
Log | Extraktions-Log aufrufen | [Extraktions-Logging](../logging/log-zugriff-ueber-designer#extraktions-logs)
Source settings | Vorhandenes SAP Quellsystem auswählen | -
Destination settings (nur Xtract Universal) | Destination auswählen | [Destinationen](https://help.theobald-software.com/de/xtract-universal/xu-destinationen)
Run  | Ausgewählte Extraktion ausführen | [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren)
Run in browser | Ausgewählte Extraktion im Standard Webbrowser ausführen | - 
Run in xu.exe | Ausgewählte Extraktion im Kommandozeilen-Tool xu.exe ausführen | - 
Abort | Ausgewählte Extraktion abbrechen | -

### Statusleiste (4)
Statusleiste beinhaltet Informationen zu Authentifizierungsmethode, zum verbundenen Server, zu der Lizenz mit der Gültigkeitsdauer usw.


*****
### Weiterführende Links
- [Server Einstellungen](../server)



