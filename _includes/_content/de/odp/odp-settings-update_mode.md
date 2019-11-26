Der folgende Abschnitt gibt einen Überblick über die
 Einstellungen, die für die ODP-Komponente geändert werden können.
Die Einstellungen können im Fenster "Define data source for SAP ODP" geändert werden. 
Es gibt zwei Wege zum Öffnen des Fensters "Define data source for SAP ODP":
- Legen Sie eine neue Extraktion an (s. [Eine neue Extraktion anlegen](https://help.theobald-software.com/de/xtract-universal/erste-schritte-mit-table/eine-neue-extraktion-anlegen) am Beispiel einer Tabelle).
- Wählen Sie eine existierende OPD-Extraktion und Klicken Sie auf **Edit**.<br/>
Die Einstellungen befinden sich auf der linken Seite des Fensters "Define data source for SAP ODP" in den Unterabschnitten:
- Operational Data Provider
- Additional info
- Update mode
<br/>
![ODP Settings](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>

### Operational Data Provider <br/>
zeigt den Namen des Quellobjekts an 

### Additional info <br/>
**Context**<br/>
zeigt den Kontext des ODP-Anbieters an 

**Type**<br/>
zeigt den Datentyp des Quellobjekts an.

### Update Mode <br/>
**Full update**:<br/>
extrahiert die Daten im Full-Modus.<br/>
<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> Die Option **Delta update** ist nur dann eingabebereit, wenn der ODP-Anbieter im SAP-Quellsystem Delta-Updates unterstützt.</div><br/>
  
**Delta update**: <br/>
führt eine Initialisierung aus, wenn für gegebenen Abonnenten keine Initialisierung vorhanden ist. 
Führt ein Delta-Update aus, wenn eine Delta-Initialisierung für diesen Abonnenten vorhanden ist.
- **On delta initialization** <br/>
Aktivieren des Kontrollkästchens *Extract data* ermöglicht eine Datenextraktion während einer laufenden Delta-Initialisierung.
Bei einem nicht angekreuzten Kontrollkästchen würde keine Datenextraktion während einer Delta-Initialisierung stattfinden.<br/>
- **Auto-sync subscription**<br/>
ermöglicht das Löschen des bestehenden Abonnements und erstellt bei Bedarf ein neues.
Jede Extraktion hat eine interne ID, die Teil des Abonnenten ist. 
Wenn Sie dann nach der Delta-Initialisierung den Filter einer Extraktion ändern, löscht diese Option automatisch das bestehende Abonnement und legt ein neues an. 
Ein Abonnement wird gelöscht, wenn die Fehlermeldung "Illegale Änderung der Selektionsparameter" seitens SAP-System erscheint. <br/>

**Delta recovery**: <br/>
wiederholt das letzte Delta-Update.

