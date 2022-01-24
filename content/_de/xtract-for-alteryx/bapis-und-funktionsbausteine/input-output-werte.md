---
ref: xfa-bapi-input-output
layout: page
title: Input- und Output-Werte
description: Eingabe- und Ausgabewerte
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Jeder Import-, Export- und Changing- Parameter kann einen der folgenden Typen haben: 
- ein Skalarfeld (z.B. Zeichen, Datum, Zeit, Ziffer, etc.)
- eine Struktur, die aus mehreren Komponenten besteht 
- eine Tabelle - Felder mit Strukturen desselben Typs 

### Einen Eingabewert übergeben

#### Skalarfeld
Es gibt zwei Möglichkeiten Skalarfelder einzustellen: 
- als statischer Wert (z.B. 1141)
- als dynamischen Wert, der über einen [Parameter](./skalare-parameter#eparameter-bearbeiten) während der Laufzeit übergeben wird.
![BAPI static constant value](/img/content/xfa/BAPI-scalar.png){:class="img-responsive"}


#### Strukturen
Wie bei Skalarfeldern werden jedem Skalarfeld, das zu einer Struktur gehört, Werte zugewiesen. Der gesamten Struktur nur einen Wert zuzuweisen ist nicht möglich. 

Wenn eine Struktur verfügbar ist, klicken Sie auf **[Edit Structures]**, um der Struktur Elemente hinzuzufügen. 
![BAPI table fields](/img/content/xfa/BAPI-Structures.png){:class="img-responsive"}

#### Tabellen
Nur Tabellen können als Eingabe für einen Tabellen-Parameter verwendet werden. Im Tab *Tables* sind die verfügbaren Eingabetabellen (2) in der Spalte **Value** aufgelistet.
![BAPI table](/img/content/xfa/bapi_table.png){:class="img-responsive"}

{: .box-warning }
**Warnung!** Wenn die Datentypen der Eingabetabelle mit denen der SAP Tabelle nicht kompatibel sind, gibt es eine Fehlermeldung.

Felder in der Eingabetabelle werden den Feldern der SAP-Tabelle zugewiesen, deren Namen identisch sind. 
Werte in den Tabellenfeldern müssen einen mit der SAP-Tabelle kompatiblen Datentyp haben. Felder deren Namen nicht zugewiesen werden können, werden ignoriert.

### Parameter bearbeiten - Edit parameters
Die Funktion **[Edit Parameters]** ermöglicht es, dynamische Werte für Parameter zu setzen, die während der Laufzeit übergeben werden. 
Verwenden Sie die Funktion **[Edit Parameters]**, um Parameter als Platzhalter zu definieren. Diese Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden. 

1. Klicken Sie auf **[Edit Parameters]**, um Parameter zu bearbeiten. Das Fenster "Edit Runtime Parameters" öffnet sich. 
![BAPI add parameters](/img/content/xfa/bapi-add-parameter.png){:class="img-responsive"} 
2. Klicken Sie auf **[Add]** um einen neuen Parameter anzulegen. <br>
**Tipp:** Parameter0..-n ist der Standardname für hinzugefügte Parameter. Sie können einen beliebigen Namen eingeben.
3. Klicken Sie auf das Drop-down-Menü und weisen Sie einem Parameter einen der folgenden Datentypen zu: 
- *String* - dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- *Integer* - dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- *Flag* - dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die eine 'X'&nbsp;(true) oder eine leere Eingabe ''&nbsp;(false) als Eingabewert benötigen. <br> 
Die Datentypen der Parameter müssen denen von SAP entsprechen oder konvertierbar sein.
4. Klicken Sie auf **[OK]** zum Bestätigen.
5. Wenn es definierte Parameter gibt, wechselt das Symbol des Eingabefelds zum Parametersymbol. <br>
Klicken auf die Icons, wechselt die Optionen zwischen der Eingabe statischer Eingabewerte und der Eingabe der definierten dynamischen Parameter.  
![BAPI select parameters](/img/content/xfa/bapi-select-parameters.png){:class="img-responsive"} 
