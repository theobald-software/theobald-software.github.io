---
ref: xtract-for-alteryx-03
layout: page
title: Table
description: Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: table
permalink: /:collection/:path
weight: 4
lang: de_DE
---

Die Xtract for Alteryx Table Datenquelle wurde entwickelt, um Daten aus SAP Tabellen und Views abzuziehen und in bekannter Weise in Alteryx weiterzuverarbeiten. <br> 
Darüber hinaus dient die Table-Komponente dazu, mehrere Tabellen (und Views) auf der SAP-Seite zu joinen.<br> 
Mögliche Szenarien dafür wären, Tabellen für Kopf- und Postionsdaten (z.B. einer Bestellung oder Rechnung) oder Tabellen für Stammdaten und Texte (z.B. eines Materials) zu joinen.<br> 
Dazu wird dynamisch der entsprechende SQL-Befehl generiert und auf dem SAP-Server ausgeführt.<br> 

Die Komponente nutzt die Standardfunktionsbausteine im SAP für die Datenextraktion. <br> 
Wir bieten allerdings auch einen eigenen Funktionsbaustein, der die Daten um einiges schneller extrahiert.<br> 
Auch Table-Join ist nur mit unserem eigenen Funktionsbaustein möglich. <br> 
Wenn Sie also 
- mit der Geschwindigkeit der Extraktion nicht zufrieden sind oder 
- Einschränkung mit dem SAP-Standardfunktionsbaustein haben oder 
- Tabellen joinen wollen
dann sollten Sie den von uns mitgelieferten Funktionssbaustein auf dem SAP-System installieren und nutzen.<br> 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}