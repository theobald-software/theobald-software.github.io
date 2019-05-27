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
-- Extract data 
-- Extract no data 
-- Auto-sync subscription: Diese Option ermöglicht es, bei Bedarf das bestehende Abonnement zu löschen und ein neues zu erstellen.. Jede Extraktion hat eine interne ID, welche Teil des Subscribers ist. Wenn man die Seletkion (Filter) einer Extraktion nach dem Delta Init dann verändert, dann wird mit dieser Option automatisch die bestehende Subscription gelöscht und eine Neue erstellt. Das wird nur gemacht, wenn der Fehler "Illegal change in selection parameters" vom SAP System kommt. 

Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option Delta Update in der ODP-Komponente verfügbar. 
<br/>
![ODP-Einstellungen](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>

**Show Subscriptions** <br/>
Klicken Sie auf Abonnements anzeigen, um Informationen über den Abonnenten zu erhalten. Dazu gehört auch: 
- Name des Abonnenten: Der Teilnehmername basiert auf dem Namen des Rechners, auf dem die Extraktion läuft. Das bedeutet, dass Extraktionen auf verschiedenen Maschinen (es sei denn, die Namen sind gleich) unterschiedliche Abonnentennamen und Deltas haben. Der Produktname ist auch im Abonnementnamen enthalten. Dies kann für die Überwachung in SAP hilfreich sein und um Verwirrung zu vermeiden.
- Zeitstempel der letzten Anforderung
- Erstellungszeitstempel 
Um das Abonnement zu löschen, klicken Sie auf das Symbol Löschen auf der rechten Seite. <br/>

![ODP-Abonnent](/img/content/odp/odp-settings-02.png){:class="img-responsive"}

**Filterung**<br/>
In den Hauptfenstern können Sie neben jedem Feld auf Bearbeiten klicken, um einen Filter zu definieren.
In den eckigen Klammern links neben dem Feldnamen, z.B.[1], sehen Sie die Anzahl der definierten Filter. <br/>
![ODP ABAP CDS View Filter](/img/content/odp/odp-component-cds-costcenter-03-filter.png){:class="img-responsive"}
