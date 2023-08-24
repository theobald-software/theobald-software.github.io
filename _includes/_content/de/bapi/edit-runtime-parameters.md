### Laufzeitparameter erstellen 

1. Klicken Sie auf {% if page.product == "xtract-for-alteryx" %}**[Edit Parameters]** {% else %}**Edit runtime parameters** {% endif %}.
Das Fenster "Edit Runtime Parameters" öffnet sich.<br> 
{% if page.product == "xtract-for-alteryx" %}![Edit parameters](/img/content/xfa/BAPI-Edit-Parameters.png){:class="img-responsive"}{% else %}![Edit parameters](/img/content/xu/BAPI-Edit-Parameters.png){:class="img-responsive"}{% endif %}<br> 
2. Klicken Sie auf **[Add Scalar]** (1), um Parameter zu definieren, die als Platzhalter für die Datenselektionen verwendet werden können. Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. 
Dies ermöglicht ein dynamisches Setzen von Selektionsfiltern zur Laufzeit.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben.<br> 
![Add parameters](/img/content/extractors.bapi/BAPI-Create-Runtime-Parameters.png){:class="img-responsive"}<br> 
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen müssen mit den SAP-Datentypen übereinstimmen. 
- String: Dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Number: Dieser Datentyp kann für numerische SAP-Selektionsfelder verwendet werden.
- Flag: Dieser Datentyp kann für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. <br>
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.

### Laufzeitparameter zuweisen

1. Um die erstellten Parameter zu verwenden, wählen Sie ein Element aus dem Tab **Imports**, **Exports**, **Changings** oder **Tables**. 
2. Klicken Sie auf das Symbol neben den Eingabefeldern unter **Value**.
Wenn Sie Parameter angelegt haben, wird neben den Eingabefeldern ein Parametersymbol angezeigt. <br>
Klicken Sie auf die Icons, um zwischen der Eingabe fester Werte und der Eingabe von Parametern zu wechseln.
3. Wählen Sie einen Laufzeitparameter aus der Drop-Down-Liste aus, um ihn dem Element zuzuweisen.
{% if page.product == "xtract-for-alteryx" %}![Assign parameters](/img/content/xfa/XfA-BAPI-Runtime-Parameters.png){:class="img-responsive"}{% else %}![Assign parameters](/img/content/BAPI-Runtime-Parameters.png){:class="img-responsive"} {% endif %}

### Parameter zur Laufzeit übergeben
