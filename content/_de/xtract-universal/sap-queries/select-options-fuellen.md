---
ref: xu-sap-queries-03
layout: page
title: Select Options füllen
description: Select Options füllen
product: xtract-universal
parent: sap-queries
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=select-options-fuellen
---

In dem Selektionsbildschirm einer Query haben Sie im SAP die Möglichkeit, komplexe Einschränkungen zu hinterlegen. Das geht im Query genauso. Klicken Sie im Editor im gewünschten Parameter auf den Edit-Link.

![SAP-Query-Selection-Parameters](/img/content/SAP-Query-Selection-Parameters.png){:class="img-responsive"}

Das folgende Fenster öffnet sich:

![SAP-Query-Select-Options](/img/content/SAP-Query-Select-Options.png){:class="img-responsive"}

Die Spalte *Sign* definiert, ob die Ergebnismenge der Einschränkung eingeschlossen (Include) oder ausgeschlossen wird (Exclude). <br>
Die Spalte *Option* ist ein Operator (z.B. =,> oder [] für von ... bis).  <br>
In den Spalten *Low Value* und *High Value* sind dann die jeweiligen Werte einzutragen.  <br>
Der Screenshot oben beispielsweise selektiert alle Werte von 100-100 bis 999-999 (Include, [] -> von ... bis), außer den Einzelwert 100-120 (Exclude, =). *HighValue* Werte müssen nur eingetragen werden wenn der Operator [] (zwischen) oder ][ (nicht zwischen) ausgewählt wurde. In allen anderen Fällen reicht es aus, wenn der *LowValue* Wert angegeben ist.  <br>
Selbstverständlich können für die Wertfelder auch benutzerdefinierte Variablen verwendet werden (mit einem vorangestellten @, um die Variable als solche zu kennzeichnen).

Um eine Zeile zu löschen, klicken Sie auf den Knopf links unten. <br>
Klicken Sie auf OK, um die Änderungen zu speichern.
