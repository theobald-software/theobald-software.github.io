
### Operational Data Provider
Zeigt den Namen des Quellobjekts an. Die Look-Up-Funktion ermöglicht die Suche nach Objekten.

#### Ein Objekt (Data Object) suchen
1. Innerhalb des Hauptfensters "Xtract ODP" navigieren Sie zu **Operational Data Provider** und klicken Sie auf **Search** (Lupensymbol) (1). <br>
Das Fenster "Operational Data Provider Lookup" wird geöffnet.
2. Geben Sie einen Namen im Feld **Name** (2) ein. Verwendung von Wildcards (*) ist möglich.
3. Wählen Sie den *Context* (3) und einen Typ, um nach einem Extraktor zu suchen.
4. Klicken Sie auf **Search** (Lupensymbol)(4) und wählen Sie den gewünschten Extraktor aus der angezeigten Liste(5).
5. Klicken Sie auf **[OK]** (6) zum Bestätigen.
![Datasource Sales Document Item Data (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
6. Klicken Sie auf **[Load live preview]** (7), um eine Echtzeitvorschau anzuzeigen, ohne eine Extraktion auszuführen.
![Datasource Preview](/img/content/odp/odp-component-hanaview-salesdocumentitem-02-preview.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option Delta Update in der ODP-Komponente verfügbar. 


### Additional info 
**Context**<br/>
zeigt den Kontext des ODP-Anbieters an 

**Typ**<br/>
zeigt den Datentyp des Quellobjekts an.

### Load-Verfahren (Update Mode) 
**Full update**: <br/>
extrahiert die Daten im Full-Update-Modus.<br/>

{: .box-note }
**Hinweis:** Die Option **Delta update** ist nur dann eingabebereit, wenn der ODP-Anbieter im SAP-Quellsystem Delta-Updates unterstützt.

**Delta update**:<br/>
Runs a delta initialization, if no delta initialization is available for selected subscriber. Runs a delta update, if there is a delta initialization for the selected subscriber. <br/>

- **On delta initialization** <br/>
Aktivieren der Checkbox *Extract data* ermöglicht eine Datenextraktion während einer laufenden Delta-Initialisierung.
Bei einer nicht angekreuzten Checkbox würde keine Datenextraktion während einer Delta-Initialisierung stattfinden.<br/>
- **Auto-sync subscription**<br/>
ermöglicht das Löschen des bestehenden Abonnements und erstellt bei Bedarf ein neues.
Jede Extraktion hat eine interne ID, die Teil des Abonnenten ist. 
Wenn Sie dann nach der Delta-Initialisierung den Filter einer Extraktion ändern, löscht die Option *Auto-sync subscription* automatisch das bestehende Abonnement und legt ein neues an. 
Ein Abonnement wird gelöscht, wenn die Fehlermeldung "Illegale Änderung der Selektionsparameter" seitens SAP-System erscheint. <br/>

**Delta recovery:**<br/>
wiederholt das letzte Delta-Update.


