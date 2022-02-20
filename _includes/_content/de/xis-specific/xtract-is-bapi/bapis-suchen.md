### Eine BAPI finden

1. Im Hauptfenster der Komponente klicken Sie auf **[Suche]** (Fernglassymbol). 
![BAPI-Editor](/img/content/BAPI-Editor.png ){:class="img-responsive"}
Der Dialog "Function Module Lookup" öffnet sich.
2. Geben Sie im Feld **Function Name** (1) den Namen eines BAPI oder Funktionsbausteins ein. Die Verwendung von Wildcards (*) wird unterstützt. <br>
Alternativ können Sie nach Function Group suchen.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Klicken Sie auf das **[Suche]** (Lupensymbol)(2) und wählen Sie ein Objekt aus der angezeigten Liste aus (3). 
4. Bestätigen Sie Ihre Eingabe mit **[OK]** (4).

### Import, Export, Changings und Tables definieren

Das Fenster "Xtract BAPI" zeigt die Parameter des ausgewählten BAPI.<br>
Ein BAPI kann bis zu vier Paramtertypen haben: [Parametertypen](./parameter): Imports, Exports, Changings und Tables.

{: .box-note }
**Hinweis:** Sie können verschachtelte Parameter verwenden, z.B. Tabellen in Tabellen, Strukturen in Tabellen und Strukturen in Strukturen.<br>

1. Geben Sie in **Imports** Eingabeparameter an, die an SAP gesendet werden, siehe [Import-Parameter](./parameter#import-parameter). <br>
Sie können Skalarwerte (1) oder Strukturen (2) übergeben. Sie können außerdem dynamische Laufzeitparameter verwenden, siehe [Parametrisierung](./parametrisierung).<br>
![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}
2. Definieren Sie die Ausgabe von SAP-Werten in **Exports**, siehe [Export-Parameter](./parameter#export-parameter).<br>
Aktivieren Sie die Checkbox neben den aufgelisteten Elementen, um sie der Ausgabe hinzuzufügen.<br>
![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"}
3. Optional: Falls verfügbar können Sie Ein- und Ausgabeparameter in **Changings** hinzufügen, siehe [Changings Parametrisierung](./parameter#changings-parameter).
4. Fügen Sie in **Tables** Tabellen zur Ein-/Ausgabe hinzu, siehe [Tabellen Parametrisierung](./parameter#tables-parameter).<br>
Prüfen Sie die Namen und Datentypen der Tabellenfelder, indem Sie auf das **[Brillensymbol]** unter **Type** klicken.
Aktivieren Sie die Checkbox (2) neben den aufgelisteten Tabellen, um sie der Ausgabe hinzuzufügen.
Bearbeiten Sie die Tabelle über das **[Stiftsymbol]** unter **Values** (3).
![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}
5. Bestätigen Sie Ihre Eingabe mit **[OK]**.
