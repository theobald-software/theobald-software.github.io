---
ref: xi-q-delta-04
layout: page
title: Datasource-Parameter
description: Datasource-Parameter
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=parameter
---
### Parameter bearbeiten 

{: .box-note } 
**Hinweis:** Parameter sind beim Modus **Delta Update** nicht erlaubt, da die Parameter des Modus **Init** automatisch übernommen werden.

Parameter können *Einzelwerte*, *Intervalle* und *komplexe Auswahlen* haben. <br>
![Edit-Parameters](/img/content/Parameters_edit.png){:class="img-responsive"}

Klicken Sie auf **[Edit]** (1) und öffnen Sie den Editor zum Ändern der Parameter. Es öffnet sich das Fenster "Edit Range".

Stellen Sie die Werte für **Sign** (2); **Option** (3), **Low Value** (4) und **High Value** (5) ein, falls erforderlich.<br>
![Parameter-2](/img/content/Parameter-2.png){:class="img-responsive"}

**Sign** (2) kann zwei Werte erhalten: *Include* oder *Exclude*. Damit wird für jede Zeile festgelegt, ob das Ergebnis der Bedingung in der gesamten Ergebnismenge für alle Zeilen ein- oder ausgeschlossen wird.<br>
**Option** (3) enthält die Auswahlmöglichkeit für die Bedingung der Zeile in Form von logischen Operatoren.<br>
**Low Value** (4) bezeichnet den Vergleichswert bzw. die untere Intervallgrenze.<br>
**High Value** (5) bezeichnet die obere Intervallgrenze.

{: .box-note }
**Hinweis:** Die Spalte **Low Value** muss für jeden Operator ausgefüllt werden.<br>
Die Spalte **High Value** wird nur von Operatoren verwendet, die einen zweiten Parameter erwarten.<br>
Fügen Sie *@* direkt vor dem Wert ein, um ihn als Variable zu kennzeichnen.
 

|Operator|Beschreibung
|:---|:---|
| = |Gleich|
| != |Nicht gleich|
| < |Niedriger als|
| <= |Niedriger gleich als|
| > |Größer als|
| >= |Größer gleich als|
| [] |Zwischen|
| ][ |NichtZwischen|
| * |Enthält Muster (wie)| 

### Löschen
Um eine Zeile zu *löschen*, klicken Sie auf das Symbol unten links.

### Unterstützte Funktionen

SSIS-Variablen werden unterstützt. 

