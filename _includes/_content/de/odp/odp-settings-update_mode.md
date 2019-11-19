**Operation Data Provider**<br/>
zeigt den Namen des Quellobjekts an 

**Context**<br/>
zeigt den Kontext des ODP-Anbieters an 

**Typ**<br/>
zeigt den Datentyp des Quellobjekts an.

**Update Mode** 
- Full Update: extrahiert die Daten im Full-Modus.
- Delta-Update: extrahiert die Daten im Delta-Modus (inkrementell). 
Bei der Delta-Initialisierung haben Sie die Möglichkeit, Daten zu extrahieren oder nicht.
- Extract data 
- Extract no data 
- Auto-sync subscription: Diese Option ermöglicht es, bei Bedarf das bestehende Abonnement zu löschen und ein neues zu erstellen.. Jede Extraktion hat eine interne ID, welche Teil des Subscribers ist. Wenn man die Seletkion (Filter) einer Extraktion nach dem Delta Init dann verändert, dann wird mit dieser Option automatisch die bestehende Subscription gelöscht und eine Neue erstellt. Das wird nur gemacht, wenn der Fehler "Illegal change in selection parameters" vom SAP System kommt. 

Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option Delta Update in der ODP-Komponente verfügbar. 
<br/>
![ODP-Einstellungen](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>
