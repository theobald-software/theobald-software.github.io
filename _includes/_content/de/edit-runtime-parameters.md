1. Klicken Sie im Hauptfenster der Komponente auf **Edit Runtime Parameter**.
Das Fenster "Edit Runtime Parameters" öffnet sich.<br> 
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Erstellen Sie Parameter, die als Platzhalter verwendet werden können. 
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden.  <br>
- Klicken Sie auf **[Add Scalar]** (1), um Skalarparameter zu definieren.
- Klicken Sie auf **[Add List]** (1), um Listenparameter zu definieren, die mehrere Werten enthalten können. Die Werte werden durch Kommas voneinander getrennt, z.B. *1,10* oder *"1", "10"* <br>
- **Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: *"p_MATNR"*).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen müssen mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer / Number: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. 
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.
