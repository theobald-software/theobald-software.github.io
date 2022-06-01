### Laufzeitparameter bearbeiten 

Verwenden Sie Laufzeitparameter für dynamische [Selektionen und Filter](./odp-define#selektion-und-filter).

1. Klicken Sie im Hauptfenster der Komponente auf **Edit Runtime Parameter**, um Laufzeitparameter anzulegen und zu bearbeiten.
Das Fenster "Edit Runtime Parameters" öffnet sich.<br> 
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Klicken Sie auf **[Add Scalar]**, um Skalarparameter zu definieren, die als Platzhalter für eine Datenauswahl verwendet werden können. <br>
Klicken Sie auf **[Add List]**, um Listenparameter zu definieren, die mehrere Werten enthalten können. Die Werte werden durch Kommas voneinander getrennt, z.B. *1,10* oder *"1", "10"* <br>
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden.  <br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: *"p_MATNR"*).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen müssen mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. 
<br>
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.
