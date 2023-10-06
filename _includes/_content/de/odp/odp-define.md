### Ein Objekt (Data Object) finden

1. Klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png). Das Fenster "Operational Data Provider Lookup" wird geöffnet.<br>
{% if page.product == "xtract-for-alteryx" %}![Lookup](/img/content/xfa/odp-lookup.png){:class="img-responsive"}{% elsif page.product == "xtract-is" %}![Lookup](/img/content/xis/odp-lookup.png){:class="img-responsive"}{% else %}![Lookup](/img/content/xu/odp-lookup.png){:class="img-responsive"}{% endif %}
2. Geben Sie den Namen eines Extraktors im Feld **Name** (1) ein. Verwenden Sie Wildcards (*), falls nötig.
![Datasource Sales Document Item Data (2LIS_11_VAITM)](/img/content/odp/odp-datasource-2lis-11-vaitm-01.png){:class="img-responsive"}
3. Wählen Sie einen *Context* (2). Abhängig vom angeschlossenen SAP-Quellsystem sind verschiedene Provider-Kontexte (Provider-Contexts) verfügbar.
	
	ODP-Kontext | SAP-Quellobjekte |
	------------ |------------ |
	ABAP Core Data Services [[ABAP_CDS](./odp-abap-cds-views)]|- CDS Views |
	SAP NetWeaver Business Warehouse [[BW](./odp-bw-infoproviders)] |**BW/4HANA:**<br> - DSO / aDSO<br> - CompositeProvider<br> - InfoObjects <br> - Query als InfoProvider<br> **BW Systeme:**<br> - CompositeProvider<br> - InfoCubes<br> - Semantically partitioned objects<br> - HybridProviders<br> - MultiProviders<br> - InfoSets |
	HANA Information Views [[HANA](./odp-hana-views)] | - Analysis Views<br> - Calculation Views<br> - Associated Attribute Views |
	DataSources/Extraktoren [[SAPI](./odp-extractors)] | - DataSources und Extraktoren |
	SAP LT Queue Alias [[SLT~your_queue_alias](./odp-slt-server)] | - SAP Tables<br> - Cluster tables<br> - Pool tables |
4. Klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) und wählen Sie den gewünschten Extraktor aus der angezeigten Liste (3).
5. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen.

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

{: .box-note }
**Hinweis:** Um DataSources finden zu können, müssen sie in SAP aktiviert sein.

### Eine ODP Extraktion Einrichten

1. Optional: Erstellen Sie Selektionen, indem Sie Felder aktivieren oder deaktivieren (4). <br>
Um [Filter](#selektion-und-filter) hinzuzufügen, klicken Sie auf die **[Edit]** Option neben den Feldern. 
Wenn es sich bei Ihrer Datenquelle um eine Hierarchy handelt, siehe [Select Hierarchy](./odp-extractors#select-hierarchy) für Filteroptionen.
2. Optional: Um eine Delta-Extraktion durchzuführen, wählen Sie das entsprechende [Load-Verfahren](#load-verfahren-update-mode) aus.
3. Klicken Sie auf **[Load live preview]** (5) , um eine Echtzeitvorschau anzuzeigen, ohne eine Extraktion auszuführen.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}
4. Bevor Sie eine Extraktion ausführen, prüfen Sie die [Extraktionseinstellungen](./odp-settings).

