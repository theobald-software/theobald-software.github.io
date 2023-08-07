Verwenden Sie Laufzeitparameter, um Selektionen dynamisch zur Laufzeit anzupassen.<br>

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

Weisen Sie Selektionen Laufzeitparameter zu:

1. Wählen Sie ein Element im Unterabschnitt *Selection Screen* und klicken Sie auf **[Edit]**. Das Fenster "Edit Selections" wird geöffnet.
{% if page.parent == "sap-queries" %}![Selection](/img/content/query/query-variant2.png){:class="img-responsive"}{% endif %}
2. Klicken Sie auf **[Add Selection]** (4). Felder zum Setzen der Filteroptionen werden geöffnet.
3. Klicken Sie auf das Symbol neben den Eingabefeldern **Low** und **High** (5). <br>
Wenn Sie Laufzeitparameter angelegt haben, wird neben den Eingabefeldern ein Parametersymbol angezeigt. <br>
Klicken Sie auf das Symbol, um zwischen der statischen Werten ( ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol) und Laufzeitparametern ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol) zu wechseln.  <br>
![Selection With Parameters](/img/content/edit-selections.png){:class="img-responsive"}<br>
4. Wählen Sie einen Laufzeitparameter aus der Dropdown-Liste aus.
5. Klicken Sie **[OK]**, um die Eingabe zu speichern. Das Fenster "Edit Selections" wird geschlossen.
6. Klicken Sie auf **[Load live preview]**, um die definierten Laufzeitparameter zu prüfen. <br>
Wenn Selektionen Laufzeitparameter verwenden, werden Sie aufgefordert, die Laufzeitparameter mit echten Werten zu füllen.  <br>
![provide values](/img/content/odp/odp-provide-parameter-values.png){:class="img-responsive"}
