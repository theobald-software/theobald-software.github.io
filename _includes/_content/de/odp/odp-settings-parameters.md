### Parameter bearbeiten - Edit parameters 
1. Um die Bearbeitungsfunktion für die Parameter anzuzeigen, klicken Sie je nach Produkt entweder *oben* oder *unten* auf **Edit parameter** im Fenster “Define data source for SAP ODP”. <br/>
![ODP Edit parameters](/img/content/odp/odp-settings-edit-parameters1.png){:class="img-responsive"}<br> 
Das Fenster "Edit Runtime Parameters" wird geöffnet.<br> 
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Klicken Sie auf **[Add]** (1), um Parameter zu definieren, die als Platzhalter für die Datenselektionen verwendet werden können. Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. 
Dies ermöglicht ein dynamisches Setzen von Selektionsfiltern zur Laufzeit.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: *"p_MATNR"*).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen können mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. 
<br>
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.
5. Um die Parameter zu definieren, wählen Sie ein Element im Unterabschnitt **Fields** und klicken Sie auf **[Edit]** (4). Das Fenster "Edit Selections" wird geöffnet.<br> 
6. Klicken Sie auf **[Add]** (5). Felder zum Setzen der Filteroptionen werden geöffnet.
7. Klicken Sie auf das Symbol neben den Eingabefeldern **Low** und **High** (6).
Wenn es definierte Parameter gibt, wechselt das Symbol zum Parametersymbol. <br>
Klicken auf die Icons wechselt die Optionen zwischen der Eingabe echter Eingabewerte und der Eingabe der definierten Parameter.  
<br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}<br>
7. Um die definierten Parameter zu überprüfen, klicken Sie auf **[Load live preview]Load live preview**. <br>
Wenn Sie Parameter als Selektionsfilter definiert haben, werden Sie aufgefordert, die Parameter mit echten Werten zu füllen.  <br>
![ODP provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}
