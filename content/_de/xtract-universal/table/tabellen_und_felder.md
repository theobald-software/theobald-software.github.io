---
ref: xu-table-01
layout: page
title: Tabellen und Felder
description: Tabellen und Felder
product: xtract-universal
parent: table
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=where-bedingung
---

Unter dem Karteireiter *Tables And Fields* können eine oder mehrere SAP Tabellen oder Views selektiert werden. <br>
Mit *Add* oder *Remove* fügen Sie eine neue Tabelle hinzu, oder entfernen eine bereits hinzugefügte Tabelle. 
Das grundsätzliche Vorgehen hierzu ist im Abschnitt [Erste Schritte mit Xtract Table](../erste-schritte-mit-xtract-table) beschrieben. <br>     

Folgende Optionen stehen rechts unter *Fields* bei der Spaltenselektion zur Verfügung: <br>

**Filter** <br>
Der Spaltenname und die Spaltenbeschreibung lassen sich filtern.

**Alias** <br>
Im Moment ohne Funktionalität (wird nicht benötigt). 

**Aggregate Function** <br>
Es stehen folgende Aggregierungs-Funktionen für Spalteninhalte zur Verfügung:
- None: Keine Aggregierung 
- AVG: Durchschnitt
- COUNT: Anzahl  
- MAX: Maximum
- MIN: Minimum 
- SUM: Summe

**Use Conversion Routine (Conv.)** <br>
Definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen Felder angewendet werden. 
Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). 
Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. 
Diese Option wird nur im Zusammenhang mit den Funktionsbausteinen Z_THEO_READ_TABLE und Z_XTRACT_IS_TABLE_COMPRESSION unterstützt. 	

Unter *Preview* können Extraktionsdaten im Preview-Modus angezeigt werden. Klicken Sie dazu auf *Load live preview*. <br>
Mit der Preview lassen sich auch die Aggregierungsfunktionen als Vorschau anzeigen. 
 
![Table-Form](/img/content/xu/xu_preview_modus.png){:class="img-responsive"} 
  
