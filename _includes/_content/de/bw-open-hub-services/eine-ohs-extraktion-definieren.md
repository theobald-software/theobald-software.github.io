### Eine OHS Destination finden

1. Wählen Sie im Hauptfenster “Extract via SAP BW Open Hub Service” einen **Extraction type**. <br>
Falls Sie BW4Hana2.0 verwenden, wählen Sie **Table** als Extraktionstyp. Stellen Sie sicher, dass in SAP *database table* als Typ der OHS Destination ausgewählt ist.<br>
Falls Sie BW7.x order niedriger verwenden, wählen Sie **Third party tool (legacy)** als Extraktionstyp. Stellen Sie sicher, dass in SAP *third party tool* als Typ der OHS Destination ausgewählt ist.<br>
![ohs-main-window](/img/content/ohs-main-window.png){:class="img-responsive"}
2. Klicken Sie auf **[Lookup]**, um nach einer OHS Destination zu suchen. Das Fenster “OHS Lookup” öffnet sich.<br>
3. Geben Sie in das Feld **OHS Destination** (1) den Namen einer OHS Destination. Verwenden Sie Wildcards (*) falls nötig.<br>
![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}
4. Klicken Sie auf **[Suchen]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) wählen Sie eine OHS Destination Ihrer Wahl aus der angezeigten Liste aus (2).
5. Bestätigen Sie die Auswahl mit **[OK]**.

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

### Einstellungen
1. Wenn im Hauptfenster der Komponente das Feld **Process Chain** leer ist, geben Sie eine SAP Prozesskette ein, die Ihrer OHS Extraktion zugewiesen ist, siehe [SAP Dokumentation: Display/Maintenance of Process Chain Attributes](https://help.sap.com/docs/SAP_NETWEAVER_701/6da591e86c4b1014b43de329b9ffb859/4a2cf30c6ed91c62e10000000a42189c.html).
Wenn **Process Chain** leer bleibt, schlägt die Extraktion fehl.
2. Optional: Setzen Sie neben **Timeout** ein Zeitlimit für die Rückmeldung des BWs. Wenn das Zeitlimit überschritten wird, schlägt die Extraktion fehl.
3. Prüfen / bearbeiten Sie die [Extraktionseinstellungen](./open-hub-services-settings) und [Allgemeinen Einstellungen](./allgemeine-einstellungen).

{: .box-note }
**Hinweis:** Um die OHS-Datenquelle nutzen zu können, müssen Anpassungen im SAP BW vorgenommen werden, siehe [Vorbereitungen für OHS im BW](../sap-customizing/vorbereitung-fuer-ohs-im-bw). 
