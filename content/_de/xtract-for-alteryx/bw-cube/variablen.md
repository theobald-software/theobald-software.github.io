---
ref: xfa-bw-cube-02
layout: page
title: BW Cube / Query-Variablen
description: Query-Variablen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 2
lang: de_DE
---

### Über Query Variablen
BW-Queries haben oft definierte Variablen zum Erstellen von Filteroptionen. Abhängig vom Typ der BEx-Variablen (Einzelwert, Mehrfachwert, Intervall oder komplexe Auswahl) werden die Eingabefelder der Variablen aktiviert oder deaktiviert.
Anstatt einen Wert für die BEx-Variable hart einzugeben, können Sie Variablen mit Werten definieren, die dynamisch gesetzt werden können.
Verwenden Sie das **@**-Symbol vor dem Variablennamen im Eingabefeld, um den Eintrag als Variable zu definieren z.B.  *@salesorg*. 

### Variablen anpassen
1. Um nach Queries zu [suchen](./eine-bw-cube-quelle-definieren) und wählen Sie ein Query mit definierten Variablen aus (1).
2. Laden Sie eine Echtzeitvorschau (2), falls erforderlich. 
![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}
3. Klicken Sie auf **[Edit]** (3). Das Fenster "Edit variables for [Name des Query]" öffnet sich und Felder mit verfügbaren Variablen werden aktiviert.
4. Definieren Sie die Variablen mit Hilfe der Dropdown-Listenoptionen in den Spalten **Sign** und **Option**. 
Die Spezifikation **Sign** definiert, ob die zugehörige Auswahl ein- oder ausgeschlossen werden soll.
Um Mehrfachwerte und komplexe Auswahlen zu bearbeiten, klicken Sie auf **[Edit]**.
5. Falls verfügbar, klicken Sie auf das **[Lupensymbol]**, um auswählbare Variablenwerte anzuzeigen. Beispiel:<br>
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
Sie können einen Wert aus der Liste auswählen, einen Wert manuell eintragen oder einen [Laufzeitparameter](./edit-runtime-parameters) hinterlegen.
6. Klicken Sie auf **[OK]** zum Bestätigen. 
7. Klicken Sie auf **[Load Live Preview]** um eine Vorschau der gefilterten Ergebnisse anzuzeigen.


*****
#### Weiterführende Links
- [Variablen in Alteryx Designer](https://help.alteryx.com/10.6/Reference/Variables.htm)
