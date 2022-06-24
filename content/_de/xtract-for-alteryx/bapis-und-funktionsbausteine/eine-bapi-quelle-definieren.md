---
ref: xfa-bapi-define
layout: page
title: Eine BAPI-Extraktion definieren
description: Eine BAPI-Quelle definieren
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-bapi-quelle-definieren
---

Der folgende Abschnitt beschreibt die Anwendung der Xtract BAPI Komponente.

### Xtract BAPI verwenden
1. Ziehen Sie die Xtract BAPI-Komponente mit "drag and drop" (1) aus der Menüleiste auf die Arbeitsfläche. Das Fenster "Konfiguration" öffnet sich.
2. Füllen Sie die Anschlussdaten (2) aus, siehe Abschnitt [Erste Schritte mit Xtract for Alteryx](../erste-schritte).
3. Innerhalb der **ausgewählten Extraktion**, klicken Sie auf **[Edit]** (3). Das Fenster "Xtract BAPI" öffnet sich.
![BAPI component](/img/content/xfa/Define-bapi-component.png){:class="img-responsive"}

### Eine BAPI finden
1. Klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) (4) im Hauptfenster der Komponente. Das Fenster "Function Module Lookup" öffnet sich.
2. Geben Sie im Feld **Function Name** (5) den Namen eines BAPI oder Funktionsbausteins ein. Die Verwendung von Wildcards (*) wird unterstützt. <br>
Alternativ können Sie nach Function Group suchen.
![Look-Up-Function-Module](/img/content/xfa/Look-Up-Function-Module.png){:class="img-responsive"}
3. Klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) und wählen Sie ein Objekt aus der angezeigten Liste aus (6). 
4. Bestätigen Sie Ihre Eingabe mit **[OK]** (7).
5. Das Fenster "Xtract BAPI" zeigt die Parameter der ausgewählten BAPI.<br>
Ein BAPI kann bis zu vier Paramtertypen haben: [Parametertypen](./skalare-parameter): Imports, Exports, Changings und Tables.
![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}
