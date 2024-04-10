### Laufzeitparameter erstellen 

Führen Sie die folgenden Schritte aus, um Laufzeitparameter anzulegen:
1. Klicken Sie im Hauptfenster der Komponente auf {% if page.product == "xtract-for-alteryx" or page.product == "xtract-is" %}**Edit parameters**{% else %}**Edit Runtime Parameters**{% endif %}.
Das Fenster “Edit Runtime Parameters” öffnet sich.<br> 
{% if page.product == "xtract-for-alteryx" and page.parent == "odp"%}![Edit runtime parameters](/img/content/xfa/odp-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "reports"%}![Edit runtime parameters](/img/content/xfa/report-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "queries"%}![Edit runtime parameters](/img/content/xfa/query-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "bw-cube"%}![Edit runtime parameters](/img/content/xfa/cube-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "table"%}![Edit runtime parameters](/img/content/xfa/table-edit-runtime-params.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx" and page.parent == "bapi"%}![Edit runtime parameters](/img/content/xfa/BAPI-Edit-Parameters.png){:class="img-responsive"}{% elsif page.product == "xtract-universal" or page.product == "board-connector"%}{% if page.parent == "odp"%}![Edit runtime parameters](/img/content/xu/odp-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "bw-infocubes-and-bex-queries"%}![Edit runtime parameters](/img/content/xu/cube-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "sap-queries"%}![Edit runtime parameters](/img/content/xu/queries-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "bapis-and-function-modules"%}![Edit runtime parameters](/img/content/xu/bapi-edit-runtime-params.png){:class="img-responsive"}{% elsif page.parent == "abap-reports"%}![Edit runtime parameters](/img/content/xu/report-edit-runtime-params.png){:class="img-responsive"}{% endif %}{% else %}![Edit runtime parameters](/img/content/xis/odp-edit-runtime-params.png){:class="img-responsive"}{% endif %}
2. Klicken Sie auf **[Add Scalar]** oder **[Add List]** (1), um Skalar- oder Listenparameter zu erstellen, die als Platzhalter verwendet werden können.
Listenparameter können mehrere Werten enthalten, die durch Kommas voneinander getrennt werden, z.B. *1,10* oder *"1", "10"*.
Die Platzhalter müssen zur Laufzeit mit echten Werten befüllt werden.  <br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben.
![ODP Add parameters](/img/content/edit-runtime-parameters-list.png){:class="img-responsive"}
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen müssen mit den SAP-Datentypen übereinstimmen. <br>
*String*: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.<br>
*Integer / Number*: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.<br>
*Flag*: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. 
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.

{% if page.product == "xtract-universal" %}
Die Laufzeitparameter werden zur Laufzeit überschrieben, siehe [Extraktionsparameter - Custom](../extraktionen-ausfuehren-und-einplanen/extraktionsparameter#custom).
{% endif %}
{% if page.product == "board-connector" %}
Die Laufzeitparameter werden zur Laufzeit überschrieben, siehe [Extraktionsparameter - Custom](../fortgeschrittene-techniken/extraktionsparameter#custom)
{% endif %}
