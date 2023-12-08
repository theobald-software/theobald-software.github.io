
### Laufzeitparameter im WHERE Clause Editor

Um Laufzeitparameter anzulegen und zuzuweisen, führen Sie die folgenden Schritte aus: 

1. Klicken Sie im Hauptfenster der Komponente auf {% if page.product == "xtract-for-alteryx" %}**[Edit Parameters]**{% else %}**Edit Runtime Parameters**{% endif %}.
Das Fenster “Edit Runtime Parameters” öffnet sich.<br>
![dd-parameters](/img/content/where-clause-parameter.png){:class="img-responsive"}
2. Klicken Sie auf **[Add Scalar]**, um Skalarparameter zu definieren, die als Platzhalter für echte Werte verwendet werden können.<br>
{% if page.product == "xtract-for-alteryx" %}Klicken Sie auf **[Add List]**, um Listenparameter zu definieren, die mehrere Werten enthalten können. Die Werte werden durch Kommas voneinander getrennt, z.B. 1,10 oder “1”, “10”.<br>{% endif %} Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben.
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. <br>
Die Datentypen müssen mit den SAP-Datentypen übereinstimmen.
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden. {% if page.product == "xtract-for-alteryx" %} Listemparameter sind immer vom Typ *String*.{% endif %}
- Number: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen ‘X’ (true) oder eine leere Eingabe ‘‘ (false) als Eingabewert benötigen.
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.
5. Navigieren Sie zum WHERE Clause Tab des Hauptfensters öffnen Sie den WHERE Clause Editor.
6. Fügen Sie der WHERE-Bedingung über **[Add Criteria]** und **[Default with Parameter]** ein neues Kriterium hinzu.
7. Klicken Sie auf die *Parameter* Komponente des Kriteriums. Eine Drop-Down-Liste öffnet sich und zeigt alle verfügbaren Laufzeitparameter an.
Wählen Sie einen der Laufzeitparameter aus.<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
8. Klicken Sie auf **[Load live Preview]**, um die WHERE-Bedingung zu testen. 
Weisen Sie den Parametern Werte zu, wenn Sie aufgefordert werden.

{% if page.product == "xtract-for-alteryx" %}

{: .box-note }
**Hinweis:** Listenparameter sind noch nicht verfügbar.

{% endif %}

