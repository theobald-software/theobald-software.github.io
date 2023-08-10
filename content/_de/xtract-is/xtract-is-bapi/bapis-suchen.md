---
ref: xi-bapi-01
layout: page
title: Eine BAPI Extraktion definieren
description: BAPIs suchen
product: xtract-is
parent: xtract-is-bapi
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=bapis-suchen
---
Der folgende Abschnitt beschreibt die Anwendung der BAPI Komponente.

### Eine BAPI finden

1. Im Hauptfenster der Komponente klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol). 
![BAPI-Editor](/img/content/BAPI-Editor.png ){:class="img-responsive"}
Der Dialog "Function Module Lookup" öffnet sich.
2. Geben Sie im Feld **Function Name** (1) den Namen eines BAPI oder Funktionsbausteins ein. Die Verwendung von Wildcards (*) wird unterstützt. <br>
Alternativ können Sie nach Function Group suchen.
![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}
3. Klicken Sie auf das **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol)(2) und wählen Sie ein Objekt aus der angezeigten Liste aus (3). 
4. Bestätigen Sie Ihre Eingabe mit **[OK]** (4).

### Import, Export, Changings und Tables definieren

Das Fenster "Xtract BAPI" zeigt die Parameter des ausgewählten BAPI.<br>

1. Geben Sie in **Imports** Eingabeparameter an, die an SAP gesendet werden, siehe [Import-Parameter](./parameter#import-parameter). <br>
Sie können Skalarwerte (1) oder Strukturen (2) übergeben. Sie können auch SSIS-Variablen zuweisen.<br>
![BAPI import parameters](/img/content/xis/XtractBAPI_ImportParams.png){:class="img-responsive"}
2. Definieren Sie die Ausgabe von SAP-Werten in **Exports**, siehe [Export-Parameter](./parameter#export-parameter).<br>
Aktivieren Sie die Checkbox neben den aufgelisteten Elementen, um sie der Ausgabe hinzuzufügen.<br>
![BAPI export parameters](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"}
3. Optional: Falls verfügbar können Sie Ein- und Ausgabeparameter in **Changings** hinzufügen, siehe [Changings Parametrisierung](./parameter#changings-parameter).
4. Fügen Sie in **Tables** Tabellen zur Ein-/Ausgabe hinzu, siehe [Tabellen Parametrisierung](./parameter#tables-parameter).<br>
Sie können die Namen und Datentypen der Tabellenfelder prüfen (1), Elemente der Ausgabe hinzufügen (2) und Tabellen bearbeiten (3).<br>
![BAPI table](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"}
5. Bestätigen Sie Ihre Eingabe mit **[OK]**.

{: .box-note }
**Hinweis:** Sie können verschachtelte Parameter verwenden, z.B. Tabellen in Tabellen, Strukturen in Tabellen und Strukturen in Strukturen.<br>

****
#### Weiterführende Links
- [How to Post Data in SAP with Xtract BAPI](https://kb.theobald-software.com/xtract-is/how-to-post-data-in-sap)
- [Uploading CATS data by using Xtract IS BAPI](https://kb.theobald-software.com/xtract-is/uploading-cats-data-by-using-xtract-is-bapi)