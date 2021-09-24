---
ref: xfa-bw-cube-02
layout: page
title: BEx Query-Variablen
description: Query-Variablen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 2
lang: de_DE
---

### Über Query-BEx-Variablen
BEx-Queries verwenden häufig Variablen zum Erstellen von Filtern. 
Abhängig vom Typ der BEx-Variablen (Einzelwert, Mehrfachwert, Intervall oder komplexe Auswahl) werden die Eingabefelder der Variablen aktiviert oder deaktiviert.

Anstatt Werte für BEx-Variablen hart einzugeben, können Sie Parameter definieren, die zur Laufzeit dynamisch gesetzt werden können, siehe [Laufzeitparameter](./edit-runtime-parameters) und [Parametrisierung](../parameterizing).

### BEx-Variablen anpassen
1. Rufen Sie eine BEx-Query auf, die BEx-Variablen verwendet (1), siehe [Eine BEx-Query oder einen BW InfoProvider finden](./bw-cube-extraction-anlegen#bw-cube-oder-query-finden).
![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}
2. Klicken Sie auf **[Edit Variables]** (3). Das Fenster "Edit variables for [Name des BEx-Query]" wird geöffnet und Felder mit verfügbaren Variablen werden aktiviert.
3. Definieren Sie die Variablen mit Hilfe der Dropdown-Listenoptionen in den Spalten **Sign** und **Option**. <br>
Unter **Sign** wird definiert, ob die zugehörige Auswahl in die Ergebnismenge ein- oder ausgeschlossen werden soll.<br>
Unter **Option** wird die Auswahl definiert. <br>
Um BEx-Variablen der Typen *MultipleSignle* und *Complex* zu bearbeiten, klicken Sie auf **[Edit]** 
4. Falls verfügbar, klicken Sie auf **[Suche]** (Lupensymbol) neben den Feldern, um eine Liste auswählbarer Variablenwerte anzuzeigen. Beispiel:<br>
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
Sie können einen Wert aus der Liste auswählen, einen Wert manuell eintragen oder einen [Laufzeitparameter](./edit-runtime-parameters) auswählen.
5. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen. 
6. Klicken Sie auf **[Load Live Preview]** um eine Vorschau der gefilterten Ergebnisse anzuzeigen.

*****
#### Weiterführende Links
- [Variablen in Alteryx Designer](https://help.alteryx.com/10.6/Reference/Variables.htm)



