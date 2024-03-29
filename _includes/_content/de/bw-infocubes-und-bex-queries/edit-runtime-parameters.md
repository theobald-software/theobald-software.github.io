
<!---

Verwenden Sie Laufzeitparameter, um Dimensionsfilter und Variablen dynamisch zur Laufzeit anzupassen.<br>

### Laufzeitparameter erstellen 

1. Klicken Sie im Hauptfenster der Komponente auf **Edit Runtime Parameter**, um Laufzeitparameter anzulegen und zu bearbeiten.
Das Fenster "Edit Runtime Parameters" öffnet sich.<br> 
![Add parameters](/img/content/edit-runtime-parameters-list.png){:class="img-responsive"}<br> 
2. Klicken Sie auf **[Add Scalar]**, um Skalarparameter zu definieren, die als Platzhalter für die Datenfilter verwendet werden können. <br>
Klicken Sie auf **[Add List]**, um Listenparameter zu definieren, die als Platzhalter für Dimensionsfilter mit mehreren Werten verwendet werden können. <br>
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. Listenparameter enthalten eine Liste von Werten, die durch ein Komma voneinander getrennt sind z.B. *1,10* oder *"1", "10"*.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben.
3. Klicken Sie auf das Drop-Down-Menü und weisen Sie einen der folgenden Datentypen einem Parameter zu. Die Datentypen können, müssen aber nicht mit den SAP-Datentypen übereinstimmen. 
- String: dieser Datentyp kann für jeden Typ der SAP-Felder verwendet werden.
- Number: dieser Datentyp kann nur für numerische SAP-Felder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Felder verwendet werden, die einen 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. <br>
4. Klicken Sie auf **[OK]** zum Bestätigen.
-->


#### Skalare Parameter Hinzufügen
{% if page.product == "xtract-for-alteryx" %} ![Add Scalar](/img/content/xfa/xfa_scalar_2.gif){:class="img-responsive" style="border:1px solid black;"}
{% else %} ![Add Scalar](/img/content/bwcube_scalar_param_bw.gif){:class="img-responsive" style="border:1px solid black;"}
{% endif %}

#### Listenparameter Hinzufügen

{% if page.product == "xtract-for-alteryx" %} ![Add List](/img/content/xfa/xfa_list_param.gif){:class="img-responsive" style="border:1px solid black;"}
{% else %} ![Add List](/img/content/bwcube_list_param.gif){:class="img-responsive" style="border:1px solid black;"}
{% endif %}


### Laufzeitparameter zuweisen

Führen Sie die folgenden Schritte aus, um Laufzeitparameter Variablen oder Dimensionsfiltern zuzuweisen.

1. Um die erstellten Laufzeitparameter für Variablen zu verwenden, klicken Sie im Hauptfenster der Komponente auf **[Edit Variables]**. Das Fenster "Edit variables..." öffnet sich, siehe [Variablen](./variablen).<br> 
Um die erstellten Laufzeitparameter für Dimensionsfilter zu verwenden, rechtsklicken Sie im Hauptfenster der Komponente auf eine Dimension und klicken Sie dann auf **Edit Filter**. Das Fenster "Member Filter" öffnet sich, siehe [Einstellen eines Dimensionsfilters](./eine-bw-cube-quelle-definieren#einstellen-eines-dimensionsfilters).
2. Klicken Sie auf das Symbol neben dem Eingabefeld (4), um von statischen Eingabewerten ( ![Assign parameters](/img/content/icons/runtime-parameters-static.png)) zu Laufzeitparametern ( ![Assign parameters](/img/content/icons/runtime-parameters-dynamic.png)) zu wechseln.
Wenn kein Symbol angezeigt wird, [erstellen Sie mindestens einen Laufzeitparameter](#laufzeitparameter-erstellen).
![Selection With Parameters](/img/content/bwcube-parameters.png){:class="img-responsive"}
3. Wählen Sie einen Laufzeitparameter aus der Drop-Down-Liste aus (5).

