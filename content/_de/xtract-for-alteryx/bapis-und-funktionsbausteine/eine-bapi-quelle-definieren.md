---
ref: xfa-bapi-define
layout: page
title: Eine BAPI-Quelle definieren
description: Eine BAPI-Quelle definieren
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-bapi-quelle-definieren
---
### BAPI verwenden
1. Ziehen Sie die BAPI- Komponente per drag & drop von der Menüleiste in Ihr Workflow(1). Das Konfigurationsfenster wird geöffnet. 
2. Tragen Sie Ihre Verbindungs in Conncection (2) (2)ein. Orientieren Sie sich dabei and dem Vorgehen für die [Table Komponente](../erste-schritte).
3. In den **gewählten Extraktionen**, klicken Sie auf **[Edit]** (3). Das Fenster "Xtract BAPI" öffnet sich.
![BAPI component](/img/content/xfa/Define-bapi-component.png){:class="img-responsive"}

### Nach einer BAPI suchen
1. Klicken Sie auf **Search** (4) , um nach einer BAPI zu suchen. Das Fenster "Function Module Lookup" öffnet sich.
2. Geben Sie den NAmen der gesuchten BAPI in das Feld **Function Name** ein und klicken Sie auf **Search** (5). <br>
**Tipp:** Sie können Wildcards (*) für die Suche verwenden.
![Look-Up-Function-Module](/img/content/xfa/Look-Up-Function-Module.png){:class="img-responsive"}
3. Wählen Sie eine BAPI aus der Liste der gefundenen BAPIs aus (6). 
4. Klicken Sie auf **[OK]** (7), um die Auswahl zu bestätigen.
5. Das Xtract BAPI Fenster zeigt die Parameter der selektierten BAPI an.
BAPI kann bis zu vier [Parametertypen](./parameter) haben: Imports, Exports, Changings and Tables.
![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}

