### Ein Objekt (Data Object) finden

1. Innerhalb des Hauptfensters "Xtract ODP" navigieren Sie zu **Operational Data Provider** und klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (1).
Das Fenster "Operational Data Provider Lookup" wird geöffnet.
![Datasource Sales Document Item Data (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
2. Geben Sie einen Namen im Feld **Name** (2) ein. Verwendung von Wildcards (*) ist möglich.
3. Wählen Sie einen *Context* (3). Abhängig vom angeschlossenen SAP-Quellsystem sind verschiedene Provider-Kontexte (Provider-Contexts) verfügbar.
	
	ODP-Kontext | SAP-Quellobjekte |
	------------ |------------ |
	ABAP Core Data Services [[ABAP_CDS](./odp-abap-cds-views)]|- CDS Views |
	SAP NetWeaver Business Warehouse [[BW](./odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query als InfoProvider<br> **BW Systeme:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
	HANA Information Views [[HANA](./odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
	DataSources/Extraktoren [[SAPI](./odp-extractors)] | - DataSources und Extraktoren |
	SAP LT Queue Alias [[SLT~your_queue_alias](./odp-slt-server)] | - SAP Tables<br> - Cluster tables<br> - Pool tables |
4. Klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (4) und wählen Sie den gewünschten Extraktor aus der angezeigten Liste(5).
5. Klicken Sie auf **[OK]** (6), um Ihre Eingabe zu bestätigen.

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

{: .box-note }
**Hinweis:** Um DataSources finden zu können, müssen sie in SAP aktiviert sein, siehe [Activating DataSources in the SAP OLTP System](https://kb.theobald-software.com/sap/activating-datasource-in-the-SAP-OLTP-System).

### Eine ODP Extraktion Einrichten

1. Optional: Erstellen Sie Selektionen, indem Sie Felder aktivieren oder deaktivieren (7). <br>
Um [Filter](#selektion-und-filter) hinzuzufügen, klicken Sie auf die **[Edit]** Option neben den Feldern. 
Wenn es sich bei Ihrer Datenquelle um eine Hierarchy handelt, siehe [Select Hierarchy](./odp-extractors#select-hierarchy) für Filteroptionen.
2. Wählen Sie ein [Load-Verfahren](#load-verfahren-update-mode), z.B. um eine Delta-Extraktion durchzuführen.
3. Klicken Sie auf **[Load live preview]** (8) , um eine Echtzeitvorschau anzuzeigen, ohne eine Extraktion auszuführen.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}
4. Bevor Sie eine Extraktion ausführen, prüfen Sie die [Extraktionseinstellungen](./odp-settings).

