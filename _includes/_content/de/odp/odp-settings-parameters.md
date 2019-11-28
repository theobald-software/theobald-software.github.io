### Parameter bearbeiten - Edit parameters <br/>

Um die Bearbeitungsfunktion für die Parameter anzuzeigen, klicken Sie je nach Produkt entweder *oben* oder *unten* auf **Edit parameter** im Fenster “Define data source for SAP ODP”.<br> 

![ODP Edit parameters](/img/content/odp/odp-settings-edit-parameters1.png){:class="img-responsive"}<br> 
Es erscheint das Fenster "Edit Runtime Parameters".<br>
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}<br> 
Klicken Sie auf **Add**, um Parameter zu definieren, die als Platzhalter für die Datenselektionen verwendet werden können. Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. Dies ermöglicht ein dynamisches Setzen von Selektionsfiltern zur Laufzeit.
Sie können einen der folgenden Datentypen (4) einem Parameter zuweisen. Die Datentypen können mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Integer: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. <br>

Wenn definierte Parameter vorhanden sind, erscheinen Parameter-Icons neben den Eingabefeldern *Low* und *High* im Fenster "Edit selections". <br> 
Klicken Sie auf die Icons, um zwischen der Eingabe echter Eingabewerte und der Eingabe der Parameter zu wechseln. <br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}
