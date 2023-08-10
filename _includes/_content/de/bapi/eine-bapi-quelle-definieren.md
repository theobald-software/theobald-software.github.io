
### Einen BAPI\Funktionsbaustein finden

1. Im Hauptfenster der Komponente klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol). Das Fenster "Function Module Lookup" öffnet sich.
2. Geben Sie im Feld **Function Name** (1) den Namen eines BAPI oder Funktionsbausteins ein. Die Verwendung von Wildcards (*) wird unterstützt. <br>
Alternativ können Sie nach Function Group suchen.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (2) und wählen Sie ein Objekt aus der angezeigten Liste aus (3). 
4. Bestätigen Sie Ihre Eingabe mit **[OK]** (4).

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

### Import, Export, Changings und Tables definieren

Das Fenster “Xtract BAPI” zeigt die Parameter des ausgewählten BAPI.

1. Geben Sie in **Imports** Eingabeparameter an, die an SAP gesendet werden, siehe [Import-Parameter](./parameter#import-parameter). <br>
Sie können Skalarwerte (1) oder Strukturen (2) übergeben. Sie können außerdem dynamische Laufzeitparameter verwenden, siehe [Laufzeitparameter](./edit-runtime-parameters).<br>
Parameter, die in SAP als Muss-Parameter ausgewiesen sind, sind mit einem roten * markiert.
{% if page.product == "xtract-for-alteryx" %}![Define-Bapi-Data-Source](/img/content/xfa/XfA-BAPI-Parameters.png){:class="img-responsive"}{% else %}![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"} {% endif %}
2. Definieren Sie die Ausgabe von SAP-Werten in **Exports**, siehe [Export-Parameter](./parameter#export-parameter).<br>
Aktivieren Sie die Checkbox neben den aufgelisteten Elementen, um sie der Ausgabe hinzuzufügen.<br>
{% if page.product == "xtract-for-alteryx" %}![BAPI export parameters](/img/content/xfa/XfA-Bapi-Exports-Edit.png){:class="img-responsive"} {% else %}![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"} {% endif %}
3. Optional: Falls verfügbar können Sie Ein- und Ausgabeparameter in **Changings** hinzufügen, siehe [Changings Parametrisierung](./parameter#changings-parameter).
4. Fügen Sie in **Tables** Tabellen zur Ein-/Ausgabe hinzu, siehe [Tabellen Parametrisierung](./parameter#tables-parameter).<br>
Sie können die Namen und Datentypen der Tabellenfelder prüfen (1), Elemente der Ausgabe hinzufügen (2) und Tabellen bearbeiten (3).<br>
{% if page.product == "xtract-for-alteryx" %}![BAPI table](/img/content/xfa/XfA-Bapi-Table-Type.png){:class="img-responsive"} {% else %}![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"} {% endif %}
5. Bestätigen Sie Ihre Eingabe mit **[OK]**.


{: .box-note }
**Hinweis:** Sie können verschachtelte Parameter verwenden, z.B. Tabellen in Tabellen, Strukturen in Tabellen und Strukturen in Strukturen.<br>