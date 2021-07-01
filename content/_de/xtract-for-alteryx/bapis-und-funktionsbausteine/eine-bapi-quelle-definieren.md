---
ref: xfa-bapi-define
layout: page
title: Eine BAPI Extraktion definieren
description: Eine BAPI-Quelle definieren
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-bapi-quelle-definieren
---
### BAPI verwenden
1. Ziehen Sie die BAPI-Komponente mit "drag and drop" (1) aus der Menüleiste auf die Arbeitsfläche. Das Fenster "Konfiguration" öffnet sich.
2. Füllen Sie die Anschlussdaten (2) aus, siehe Abschnitt [Erste Schritte mit Xtract for Alteryx](../erste-schritte).
3. Innerhalb der **ausgewählten Extraktion**, klicken Sie auf **[Edit]** (3). Das Fenster "Xtract BAPI" öffnet sich.
![BAPI component](/img/content/xfa/Define-bapi-component.png){:class="img-responsive"}

### Eine BAPI Extraktion finden
1. Suchen nach **BAPI / Function Name** über das **[Lupensymbol]** (4). Sie können Platzhalter verwenden (*), wenn gewünscht. Das Fenster "Function Module Lookup" öffnet sich.
2. Durch Eingabe eines Suchnamens in das Feld **BAPI / Function Name**, können Sie die Suche einschränken. Starten Sie die Suche duch klicken auf das **[Lupensymbol]** (5). Sie können Platzhalter verwenden (*), wenn gewünscht.<br>
![Look-Up-Function-Module](/img/content/xfa/Look-Up-Function-Module.png){:class="img-responsive"}
3. Wählen Sie ein Element aus der Liste aus (6). 
4. Klicken Sie auf **[OK]** (7), um die Auswahl zu bestätigen.

![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}


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
Prüfen Sie die Namen und Datentypen der Tabellenfelder, indem Sie auf das **[Brillensymbol]** unter **Type** klicken.
Aktivieren Sie die Checkbox (2) neben den aufgelisteten Tabellen, um sie der Ausgabe hinzuzufügen.
Bearbeiten Sie die Tabelle über das **[Stiftsymbol]** unter **Values** (3).
![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"}
5. Bestätigen Sie Ihre Eingabe mit **[OK]**.

