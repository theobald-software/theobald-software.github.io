### Eine OHS finden

![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
1. Wählen Sie im Hauptfenster "Extract via SAP BW Open Hub Service" einen **Extraction type**. 
- Falls Sie BW4Hana2.0 verwenden, wählen Sie **Table** als Ihren *Extraction type*. Stellen Sie sicher, dass in SAP *database table* als Typ der OHS Destination ausgewählt ist. 
- Falls Sie BW7.x order niedriger verwenden, wählen Sie **Third party tool (legacy)** als Ihren *Extraction type*. Stellen Sie sicher, dass in SAP *third party tool* als Typ der OHS Destination ausgewählt ist. 
![OHS-Look-Up](/img/content/xis/ohs-sap-destinationtype.png){:class="img-responsive" }
2. Klicken Sie im Hauptfenster der OHS-Komponente auf **[Suche]** (Fernglassymbol), um nach OHS Extraktionen zu suchen.
3. Suchen Sie eine Extraktion und wählen Sie diese aus. Sie können in der Suche Wildcards (*) verwenden.
![OHS-Search-001](/img/content/xis/OHS-Search-001.png){:class="img-responsive" }
4. Klicken Sie auf **[OK]**, um die Auswahl zu bestätigen. Alle Metadaten werden aus dem BW abgerufen und im Hauptfenster der Komponente angezeigt.
5. Stellen Sie sicher, dass **Process Chain** nicht leer ist.
6. Prüfen/editieren Sie die [Extraktionseinstellungen](./settings) der Extraktion.

#### Process Chain
Geben Sie eine SAP [Prozesskette](http://saphelp.ucc.ovgu.de/NW750/EN/4a/2cf30c6ed91c62e10000000a42189c/frameset.htm) ein, die Ihrer OHS Extraktion zugewiesen ist. 
Falls der Extraktion mehrere Prozessketten zugewiesen sind, geben Sie eine der Prozessketten manuell ein.

Wenn **Process Chain** leer ist, schlägt die Extraktion fehl.

#### Timeout
Setzen Sie ein Zeitlimit für die Rückmeldung des BWs. Wenn das Zeitlimit überschritten wird, schlägt die Extraktion fehl.