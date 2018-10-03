---
layout: page
title: Datasource-Parameter
description: Datasource-Parameter
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=datasource-parameter
---

Bei den Paremetern kann es sich um Einzelwerte, einen Intervall oder um eine komplexe Selektion handeln. 

Bei einer komplexen Selektion springen Sie über den Edit-Link in ein neues Fenster ab.<br> 
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


Auch Variablen und [Skript-Ausdrücke]() werden unterstützt.<br>
Parameter (Filter) sind nicht erlaubt für den Delta Update Modus, denn die Filter des Init Modus werden hier angewendet. 