
### Einen BAPI\Funktionsbaustein finden

1. Im Hauptfenster der Komponente klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol). Das Fenster "Function Module Lookup" öffnet sich.
2. Geben Sie im Feld **Function Name** (1) den Namen eines BAPI oder Funktionsbausteins ein. Die Verwendung von Wildcards (*) wird unterstützt. <br>
Alternativ können Sie nach Function Group suchen.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (2) und wählen Sie ein Objekt aus der angezeigten Liste aus (3). 
4. Bestätigen Sie Ihre Eingabe mit **[OK]** (4).

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

### Import, Export, Changings und Tables definieren

Das Fenster "Xtract BAPI" zeigt die Parameter des ausgewählten BAPI.<br>
Ein BAPI kann bis zu vier Paramtertypen haben: [Parametertypen](./parameter): Imports, Exports, Changings und Tables.

{: .box-note }
**Hinweis:** Sie können verschachtelte Parameter verwenden, z.B. Tabellen in Tabellen, Strukturen in Tabellen und Strukturen in Strukturen.<br>

1. Geben Sie in **Imports** Eingabeparameter an, die an SAP gesendet werden, siehe [Import-Parameter](./parameter#import-parameter). <br>
Sie können Skalarwerte (1) oder Strukturen (2) übergeben. Sie können außerdem dynamische Laufzeitparameter verwenden, siehe [Laufzeitparameter](./edit-runtime-parameters).<br>
Parameter, die in SAP als Muss-Parameter ausgewiesen sind, sind mit einem roten * markiert.
![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}
2. Definieren Sie die Ausgabe von SAP-Werten in **Exports**, siehe [Export-Parameter](./parameter#export-parameter).<br>
Aktivieren Sie die Checkbox neben den aufgelisteten Elementen, um sie der Ausgabe hinzuzufügen.<br>
![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"}
3. Optional: Falls verfügbar können Sie Ein- und Ausgabeparameter in **Changings** hinzufügen, siehe [Changings Parametrisierung](./parameter#changings-parameter).
4. Fügen Sie in **Tables** Tabellen zur Ein-/Ausgabe hinzu, siehe [Tabellen Parametrisierung](./parameter#tables-parameter).<br>
Klicken Sie auf das ![glasses](/img/content/icons/glasses.png) Symbol, um die Namen und Datentypen der Tabellenfelder zu prüfen (1).<br>
Aktivieren Sie die Checkbox (2) neben den aufgelisteten Tabellen, um sie der Ausgabe hinzuzufügen.<br>
Klicken Sie auf das ![pen](/img/content/icons/pen.png) Symbol, um die Tabelle zu bearbeiten (3). <br>
![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}
5. Bestätigen Sie Ihre Eingabe mit **[OK]**.

