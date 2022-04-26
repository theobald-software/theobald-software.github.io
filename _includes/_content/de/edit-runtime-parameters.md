

### Laufzeitparameter erstellen 


1. Klicken Sie im Hauptfenster der Komponente auf **Edit Runtime Parameter**, um Laufzeitparameter anzulegen und zu bearbeiten. 
Das Fenster “Edit Runtime Parameters” öffnet sich.<br> 
![Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Klicken Sie auf **[Add]** (1), um Parameter zu definieren, die als Platzhalter für die Datenselektionen verwendet werden können. Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. 
Dies ermöglicht ein dynamisches Setzen von Selektionsfiltern zur Laufzeit.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: *"p_MATNR"*).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen müssen mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. <br>
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.

### Laufzeitparameter zuweisen

Weisen Sie Selektionen Laufzeitparameter zu.

1. Um die erstellten Parameter für Selektionen zu verwenden, wählen Sie ein Element im Unterabschnitt **Fields** und klicken Sie auf **[Edit]**. Das Fenster "Edit Selections" wird geöffnet.<br> 
2. Klicken Sie auf **[Add Selection]** (4). Felder zum Setzen der Filteroptionen werden geöffnet.
3. Klicken Sie auf das Symbol neben den Eingabefeldern **Low** und **High** (5).
Wenn Sie Parameter angelegt haben, wird neben den Eingabefeldern ein Parametersymbol angezeigt. <br>
Klicken Sie auf die Icons, um zwischen der Eingabe fester Werte und der Eingabe von Parametern zu wechseln.  <br>
![Selection With Parameters](/img/content/edit-selections.png){:class="img-responsive"}<br>
4. Prüfen Sie die Funktionalität der definierten Parameter, indem Sie auf **[Load live preview]** klicken. <br>
Wenn Sie Parameter als Selektionsfilter definiert haben, werden Sie aufgefordert, die Parameter mit echten Werten zu füllen.  <br>
![provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}
