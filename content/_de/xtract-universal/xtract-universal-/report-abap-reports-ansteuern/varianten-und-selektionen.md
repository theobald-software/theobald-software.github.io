---
layout: page
title: Varianten und Selektionen
description: Varianten und Selektionen
product: xtract-universal
parent: report-abap-reports-ansteuern
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=varianten-und-selektionen
---

Nachdem ein Report ausgewählt wurde, muss nun entweder eine Variante und/oder entsprechende Selektionskriterien hinterlegt werden. Es sei an dieser Stelle ausdrücklich empfohlen, alle Selektionen, die nicht unmittelbar dynamisch sein müssen, über eine Variante einzuschränken, um die Übersicht zu behalten. Oftmals sind in dem Report auch Standardfelder belegt, die Sie ohne Variante von Hand füllen müssten.

Einzelne Selektionsoptionen (Parameter) können über den Edit-Link in der Liste links oben eingeschränkt werden.


![Report-Variants-And-Selections](/img/content/Report-Variants-And-Selections.png){:class="img-responsive"}


Bei den Paremetern kann es sich um Einzelwerte, einen Intervall oder um eine komplexe Selektion handeln. 

Bei einer komplexen Selektion springen Sie über den Edit-Link in ein neues Fenster ab. <br>
Natürlich können in die Textfelder auch Variablen eingetragen werden (wie im Bild zu sehen).<br>

Bitte fügen Sie eine @ diret vor den Wert, um es als variable zu markieren.

Das folgende Bild zeigt eine komplexe Selektion:

![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

Das Feld Sign hat 2 Optionen: Include - Exclude. Mit dieser Funktion können Sie jene Werte wählen, die Sie für das Ergebnis ein- bzw. ausschließen wollen. 

Das Feld Option enthält den logischen Operator für die Bedingung: <br>
"="  Gleich<br>
"!=" Ungleich<br>
"<" Kleiner als<br>
"<=" Kleiner oder gleich<br>
">" Größer als <br>
">=" Größer oder gleich <br>
"[]" zwischen (Intervall)<br>
"][" nicht zwischen (Intervall)<br>
" * " entählt (Like)

Die Spalte Low Value muss bei jedem Operator gefüllt werden.<br>
Die Spalte High Value wird nur von den Operatoren verwendet, welche einen zweiten Paramter erwarten. 