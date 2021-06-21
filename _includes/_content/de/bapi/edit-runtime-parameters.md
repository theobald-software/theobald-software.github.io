Um Parameter zur Laufzeit dynamisch anzupassen, erstellen Sie Laufzeitparameter und weisen sie Ihrer Auswahl zu.

### Laufzeitparameter erstellen 

Klicken Sie auf **Edit Parameters**, um dynamische Laufzeitparameter anzulegen und zu bearbeiten.

1. Um die Bearbeitungsfunktion für die Parameter anzuzeigen, klicken Sie je nach Produkt entweder *oben* oder *unten* auf **Edit parameter** im Hauptfenster. <br/>
Das Fenster "Edit Runtime Parameters" wird geöffnet.<br> 
![Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
2. Klicken Sie auf **[Add]** (1), um Parameter zu definieren, die als Platzhalter für die Datenselektionen verwendet werden können. Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. 
Dies ermöglicht ein dynamisches Setzen von Selektionsfiltern zur Laufzeit.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: *"p_MATNR"*).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen können mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. <br>
4. Klicken Sie auf **[OK]** (3) zum Bestätigen.

### Laufzeitparameter zuweisen

Weisen Sie Selektionen Laufzeitparameter zu.

1. Um die erstellten Parameter zu verwenden, wählen Sie ein Element aus dem Tab **Import**, **Export**, **Changing** oder **Table**. 
2. Klicken Sie auf das Symbol neben den Eingabefeldern unter **Value**.
Wenn Sie Parameter angelegt haben, wird neben den Eingabefeldern ein Parametersymbol angezeigt. <br>
Klicken Sie auf die Icons, um zwischen der Eingabe fester Werte und der Eingabe von Parametern zu wechseln.  <br>
3. Wählen Sie einen Laufzeitparameter aus der Drop-Down-Liste aus, um ihn dem Element zuzuweisen.

{: .box-note }
**Hinweis:** Für Informationen bzgl. der Ausführung von Extraktionen mit Laufzeitparametern, siehe [benutzerdefinierten Variablen](../fortgeschrittene-techniken/benutzerdefinierte-variablen).
