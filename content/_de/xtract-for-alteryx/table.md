---
ref: xtract-for-alteryx-06
layout: page
title: Table
description: Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: table
permalink: /:collection/:path
weight: 6
lang: de_DE
---

Die Xtract for Alteryx Table Datenquelle wird verwendet, um Daten aus SAP Tabellen und Views abzuziehen und in bekannter Weise in Alteryx weiterzuverarbeiten. <br> 

Darüber hinaus dient die Table-Komponente dazu, mehrere Tabellen (und Views) auf der SAP-Seite zu joinen.<br> 
Mögliche Szenarien dafür wären, Tabellen mit Kopf- und Postionsdaten (z.B. einer Bestellung oder Rechnung) oder Tabellen mit Stammdaten und Texte (z.B. eines Materials) zu joinen.<br> 
Dazu wird dynamisch der entsprechende SQL-Befehl generiert und auf dem SAP-Server ausgeführt.<br> 

Die Komponente kann die Standardfunktionsbausteine im SAP nutzen, um Daten aus einer einzigen Tabelle und  einem einzigen View zu extrahieren. <br> 
Wir bieten allerdings einen eigenen Funktionsbaustein, der die Daten performanter extrahiert und viele Probleme der SAP-Standardfunktionsbausteine löst.<br> 
Das Joinen von Tabellen ist nur mit unserem eigenen Funktionsbaustein möglich. <br> 
Wenn Sie also 
- eine bessere Performance bei der Extraktion der Daten haben wollen oder 
- große Tabellen und Views extrahieren wollen, was mit dem Standardfunktionsbaustein unmöglich ist oder 
- weitiere Einschräung mit dem SAP-Standardfunktionsbaustein (Datentyp, Tabellentyp usw.) haben oder 
- mehrere Tabellen joinen wollen
dann sollten Sie den von uns mitgelieferten Funktionssbaustein auf dem SAP-System installieren und nutzen.<br> 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}