
### Laufzeitparameter im WHERE Clause Editor

1. Klicken Sie auf **Edit Runtime Parameters**, um Laufzeitparameter anzulegen und zu bearbeiten. 
Das Fenster “Edit Runtime Parameters” öffnet sich.<br>
![dd-parameters](/img/content/where-clause-parameter.png){:class="img-responsive"}
2. Klicken Sie auf **[Add Scalar]**, um Skalarparameter zu definieren, die als Platzhalter für eine Datenauswahl verwendet werden können.<br>
Klicken Sie auf **[Add List]**, um Listenparameter zu definieren, die mehrere Werte enthalten können. Die Werte werden durch Kommas voneinander getrennt, z.B. 1,10 oder “1”, “10”
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: “p_MATNR”).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. 
Die Datentypen müssen mit den SAP-Datentypen übereinstimmen.
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Number: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen ‘X’ (true) oder eine leere Eingabe ‘‘ (false) als Eingabewert benötigen.
Klicken Sie auf **[OK]** (3) zum Bestätigen.
4. Klicken Sie im WHERE Clause Tab des Hauptfensters auf **[Editor mode]**, um den WHERE Clause Editor zu öffnen.
5. Fügen Sie der WHERE-Bedingung über **[Add Criteria]** und **[Default with Parameter]** ein neues Kriterium hinzu.
6. Klicken Sie auf die *Parameter* Komponente des Kriteriums. Eine Drop-Down-Liste öffnet sich und zeigt alle verfügbaren Laufzeitparameter an.
Wählen Sie einen der Laufzeitparameter aus.<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
7. Klicken Sie auf **[Load live Preview]**, um die WHERE-Bedingung zu testen. 
Weisen Sie den Parametern Werte zu, wenn Sie aufgefordert werden.
