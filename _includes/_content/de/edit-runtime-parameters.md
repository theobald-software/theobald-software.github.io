### Laufzeitparameter erstellen 

1. Klicken Sie im Hauptfenster der Komponente auf {% if page.product == "xtract-for-alteryx" or page.product == "xtract-is" %}**Edit parameters**{% else %}**Edit Runtime Parameters**{% endif %}.
Das Fenster “Edit Runtime Parameters” öffnet sich.<br> 
{% if page.product == "xtract-for-alteryx" %}![Edit runtime parameters](/img/content/xfa/odp-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-is" %}![Edit runtime parameters](/img/content/xis/odp-edit-runtime-params.png){:class="img-responsive"}{% else %}![Edit runtime parameters](/img/content/xu/odp-edit-runtime-params.png){:class="img-responsive"}{% endif %}
2. Klicken Sie auf **[Add Scalar]** (1), um Skalarparameter zu definieren, die als Platzhalter verwendet werden können. <br>
Falls verfügbar, klicken Sie auf **[Add List]** (1), um Listenparameter zu definieren, die mehrere Werten enthalten können. Die Werte werden durch Kommas voneinander getrennt, z.B. *1,10* oder *"1", "10"*. <br>
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden.  <br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben.
![ODP Add parameters](/img/content/edit-runtime-parameters-list.png){:class="img-responsive"}
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen müssen mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer / Number: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. 
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.

Die Laufzeitparameter sind jetzt in der Komponente verfügbar.