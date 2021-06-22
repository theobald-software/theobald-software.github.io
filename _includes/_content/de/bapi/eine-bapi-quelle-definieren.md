Der folgende Abschnitt beschreibt die Anwendung der Report Komponente.

### Eine BAPI Extraktion finden

1. Klicken Sie auf das **[Lupensymbol]** im Hauptfenster der Komponente. Das Fenster "Function Module Lookup" öffnet sich.
2. Geben Sie im Function Name (1) den Namen einer BAPI / eines Funktionsbausteins ein. Die Verwendung von Wildcards (*) wird unterstützt. <br>
Alternativ können Sie nach Function Groups suchen.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Klicken Sie auf das **[Lupensymbol]** (2) und wählen Sie ein Objekt aus der angezeigten Liste aus (3). 
4. Bestätigen Sie Ihre Eingabe mit **[OK]** (4).

### Import, Export, Changings und Tables definieren

Das Fenster "Xtract BAPI" zeigt die Parameter der ausgewählten BAPI.<br>
Eine BAPI kann bis zu vier Paramtertypen haben: [Parametertypen](./parameter): Imports, Exports, Changings und Tables.

{: .box-note }
**Hinweis:** Sie können verschachtelte Parameter verwenden, z.B. Tabellen in Tabellen, Strukturen in Tabellen und Strukturen in Strukturen.<br>

1. Geben Sie in **Import** Eingabeparameter an, die an SAP gesendet werden, siehe [Import-Parameter](./parameter#import-parameter). <br>
Sie können Skalarwerte (1) oder Strukturen (2) übergeben. Sie können außerdem dynamische Laufzeitparameter verwenden, siehe [Laufzeitparameter](./edit-runtime-parameters).<br>
Verpflichtende Parameter sind mit einem roten * markiert.
![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}
2. Definieren Sie die Ausgabe von SAP in **Export**, siehe [Export-Parameter](./parameter#export-parameter).<br>
Aktivieren Sie die Checkbox neben den aufgelisteten Elementen, um sie der Ausgabe hinzuzufügen.<br>
![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"}
3. Optional: Falls verfügbar können Sie Ein- und Ausgabeparameter in **Changings** hinzufügen, siehe [Changings Parametrisierung](./parameter#changings-parameter).
4. Fügen Sie in **Tables** Tabellen zur Ein-/Ausgabe hinzu, siehe [Tabellen Parametrisierung](./parameter#tables-parameter).<br>
Prüfen Sie die Namen und Datentypen der Tabellenfelder, indem Sie auf das **[Brillensymbol]** unter **Type** klicken.
Aktivieren Sie die Checkbox (2) neben den aufgelisteten Tabellen, um sie der Ausgabe hinzuzufügen.
Bearbeiten Sie die Tabelle über das **[Stiftsymbol]** unter **Values** (3).
![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}
5. Bestätigen Sie Ihre Eingabe mit **[OK]**.

