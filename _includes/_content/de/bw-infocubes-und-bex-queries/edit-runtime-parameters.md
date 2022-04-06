
Verwenden Sie Laufzeitparameter, um Dimensionsfilter und Variablen dynamisch zur Laufzeit anzupassen.<br>

### Laufzeitparameter erstellen 

1. Um Laufzeitparameter anzulegen und zu bearbeiten, klicken Sie im Hauptfenster der Komponente auf **Edit Runtime Parameter**. <br/>
Das Fenster "Edit Runtime Parameters" öffnet sich.<br> 
![Add parameters](/img/content/edit-runtime-parameters-list.png){:class="img-responsive"}<br> 
2. Klicken Sie auf **[Add Scalar]**, um Skalarparameter zu definieren, die als Platzhalter für die Datenfilter verwendet werden können. <br>
Klicken Sie auf **[Add List]**, um Listenparameter zu definieren, die als Platzhalter für Dimensionsfilter mit mehreren Werten verwendet werden können. <br>
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. Listenparameter enthalten eine Liste von Werten, die durch ein Komma voneinander getrennt sind z.B. *1,10* oder *"1", "10"*.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: *"p_MATNR"*).
3. Klicken Sie auf das Drop-Down-Menü und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen können, müssen aber nicht mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Felder verwendet werden.
- Number: dieser Datentyp kann nur für numerische SAP-Felder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Felder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. <br>
4. Klicken Sie auf **[OK]** zum Bestätigen.


### Laufzeitparameter zuweisen

Weisen Sie Variablen oder Dimensionsfiltern Laufzeitparameter zu.

1. Um die erstellten Laufzeitparameter für Variablen zu verwenden, klicken Sie im Hauptfenster der Komponente auf **[Edit Variables]**. Das Fenster "Edit variables..." öffnet sich, siehe [Variablen](./variablen).<br> 
 Um die erstellten Laufzeitparameter direkt für Dimensionsfilter zu verwenden, rechtsklicken Sie im Hauptfenster der Komponente auf eine Dimension und klicken Sie dann auf **Edit Filter**. Das Fenster "Member Filter" öffnet sich, siehe [Einstellen eines Dimensionsfilters](./eine-bw-cube-quelle-definieren#einstellen-eines-dimensionsfilters).
2. Wenn Sie Parameter angelegt haben, wird neben den Eingabefeldern ein Parametersymbol angezeigt (4). <br>
Klicken Sie auf die Icons, um zwischen der Eingabe fester Werte und der Eingabe von Parametern zu wechseln.  <br>
![Selection With Parameters](/img/content/bwcube-parameters.png){:class="img-responsive"}
3. Wenn Sie auf Parametereingabe umgeschaltet haben, können einen Parameter aus der Drop-Down-Liste (5) auswählen.

