Die Einstellungen befinden sich auf der linken Seite des Fensters "Define data source for SAP ODP" in den Unterabschnitten:<br/>
- Operational Data Provider
- Additional info
- Update mode
<br/>
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
 <i class="fas fa-info-circle"></i> <strong>Note:</strong> Die Option <em>Delta update</em> ist nur dann eingabebereit, wenn der ODP-Anbieter im SAP-Quellsystem Delta-Updates unterstützt.</div>
**Delta update**: <br/>
führt eine Initialisierung aus, wenn für gegebenen Abonnenten keine Initialisierung vorhanden ist. 
Führt ein Delta-Update aus, wenn eine Delta-Initialisierung für diesen Abonnenten vorhanden ist.
- **On delta initialization** <br/>
Aktivieren der Checkbox *Extract data* ermöglicht eine Datenextraktion während einer laufenden Delta-Initialisierung.
Bei einer nicht angekreuzten Checkbox würde keine Datenextraktion während einer Delta-Initialisierung stattfinden.<br/>
- **Auto-sync subscription**<br/>
ermöglicht das Löschen des bestehenden Abonnements und erstellt bei Bedarf ein neues.
Jede Extraktion hat eine interne ID, die Teil des Abonnenten ist. 
Wenn Sie dann nach der Delta-Initialisierung den Filter einer Extraktion ändern, löscht diese Option automatisch das bestehende Abonnement und legt ein neues an. 
Ein Abonnement wird gelöscht, wenn die Fehlermeldung "Illegale Änderung der Selektionsparameter" seitens SAP-System erscheint. <br/>

**Delta recovery**: <br/>
wiederholt das letzte Delta-Update.

