---
ref: xu-table-02
layout: page
title: Table Joins
description: Table Joins
product: xtract-universal
parent: table
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=where-bedingung
---

Unter dem Karteireiter *Joins* können in der Komponente ab Version 4.x Tabellen-Joins definiert werden. Für Versionen älter als 4.x beachten Sie den Abschnitt zur separaten [Table Join](../table-join) Komponente. <br>

Die *Joins* Funktion dient dazu, mehrere Tabellen (und Views) auf SAP-Seite zusammenzufassen.  <br>
Mögliche Szenarien dafür wären, Tabellen für Kopf- und Postionsdaten (z.B. einer Bestellung oder Rechnung) oder Tabellen für Stammdaten und Texte (z.B. eines Materials) zu joinen. <br>
Dazu wird dynamisch der entsprechende SQL-Befehl generiert und auf dem SAP-Server ausgeführt. <br>

Voraussetzung für die Nutzung ist die Installation Funktionssbausteins Z_THEO_READ_TABLE in SAP. 

*Bemerkung*: Joins von Cluster- und Pool-Tabellen werden nicht unterstützt, können aber als Einzeltabellen extrahiert werden.

Zur Definition eines Tabellen-Joins beachten Sie bitte folgende Schritte:

**Tabellen definieren**

Im Beispiel sollen die Tabellen MARA und MAKT gejoined werden. Fügen Sie hierfür die beiden Tabellen über den *Tables* Dialog hinzu. 

![Table-Join-Tabellen](/img/content/xu/xu_join_tabellen_auswählen.png){:class="img-responsive"}

**Felder selektieren**

Selektieren Sie anschließend die gewünschten Felder in den Tabellen. Bei der Selektion stehen die unter [Tabellen und Felder](../table/tabellen_und felder) erläuterten Aggregierungsfunktionen zur Verfügung. 

Hier ein Beispiel, um die Anzahl des Sprachen-Felds (SPRAS) in der Tabelle MAKT zurückzugeben.   

![Table-Join-Felder](/img/content/xu/xu_join_felder_auswählen.png){:class="img-responsive"}

**Verknüpfungen definieren**

Wechselt man nun in den *Joins* Dialog ist bereits eine Inner-Join Verknüpfung vordefiniert. Für die Details klicken Sie auf das Stift-Symbol. Im Beispiel wurde die Tabelle MARA (Linke Tabelle) mit der Tabelle MAKT (Rechte Tabelle) anhand der Felder MATNR und MANDT mit dem Join Typ "Inner" zusammengefügt. 

![Table-Join-Verknüpfungen](/img/content/xu/xu_join_verknüpfungen_01.png){:class="img-responsive"}
   





 
 
  
