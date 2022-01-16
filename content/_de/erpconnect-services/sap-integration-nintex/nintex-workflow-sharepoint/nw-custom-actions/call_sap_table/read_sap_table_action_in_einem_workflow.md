---
ref: ecs-sin-nis-read-sap-table-action-01
layout: page
title: Read SAP Table Action in einem Workflow
description: Read SAP Table Action in einem Workflow
product: erpconnect-services
parent: call_sap_table
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=read_sap_table_action_in_einem_workflow
---

Um die Custom Action Read SAP Table zu einem Workflow hinzuzufügen, suchen Sie im Nintex Workflow Manager nach der Action *Read SAP Table* oder rufen Sie den Menüpunkt mit ERPConnect Services auf der linken Seite auf. Dort sind alle Custom Actions der ERPConnect Services aufgelistet. Per Drag & Drop lässt sich die Action zum Workflow hinzufügen.

![ECS-Nintex-ReadSAPTable-Action1](/img/content/ECS-Nintex-ReadSAPTable-Action1.png){:class="img-responsive"}

Anschließend muss die Custom Action konfiguriert werden. Rufen Sie dafür über die Dropdown-Liste innerhalb der Action den Punkt *Configure* auf. 

![ECS-Nintex-ReadSAPTable-Action8](/img/content/ECS-Nintex-ReadSAPTable-Action8.png){:class="img-responsive"}

In den Konfigurations-Einstellungen muss zunächst die ERPConnect Service Application hinterlegt werden. Im Feld *SAP table* 
muss die SAP-Tabelle hinterlegt werden, die aufgerufen werden soll. Sie können den *Search* Button verwenden, um nach einer  Tabelle auf Ihrem SAP System zu suchen.

![ECS-Nintex-ReadSAPTable-Action3](/img/content/ECS-Nintex-ReadSAPTable-Action3.png){:class="img-responsive"}

Mit dem Button *Load parameters* werden die Tabellenwerte in die Konfigurationsmaske geladen.


*XML output variable*

Hier kann eine Workflow-Variable selektiert werden, um die Ausgabe der SAP-Tabelle als XML-Output zu speichern. Die Workflow-Variable muss im Menüpunkt Variables in der Konfigurationsmaske zunächst angelegen werden, damit sie hier auswählbar ist. 

![ECS-Nintex-ReadSAPTable-Action9](/img/content/ECS-Nintex-ReadSAPTable-Action9.png){:class="img-responsive"}

*Column Selection*

Unter *Column Selection* wählen Sie die Tabellen-Spalten aus, die ausgegeben werden sollen. Mit *Select All* und *Select None* lassen sich alle Spalten markieren und entmarkieren. 

![ECS-Nintex-ReadSAPTable-Action4](/img/content/ECS-Nintex-ReadSAPTable-Action4.png){:class="img-responsive"}

**Advanced Options** 

Unter *Advanced Options* können zusätzliche Verarbeitungsoptionen für den Aufruf der SAP-Tabelle gesetzt werden. 

Use *custom function Z_XTRACT_IS_TABLE*: Mit Auswahl dieser Option wird der Z-Baustein Z_XTRACT_IS_TABLE für die Tabellenextraktion statt des SAP-Standards verwendet. 

![ECS-Nintex-ReadSAPTable-Action5](/img/content/ECS-Nintex-ReadSAPTable-Action5.png){:class="img-responsive"}

Durch Nutzung dieses Funktionsbausteins ist es möglich

- Tabellen zu extrahieren, deren Gesamtanzahl an Spalten eine Größe von 512 Bytes übersteigt
- Tabellen zu extrahieren, die mindestens eine Spalte vom Typ F (floating point) enthalten
- die Tabelle TCURR zu extrahieren, die im Data Dictionary diverse Probleme mit Metadaten hat    

Nähere Informationen zur Installation des Funktionsbausteins Z_XTRACT_IS_TABLE finden Sie im Abschnitt SAP Customizing. 

*Row count (0 = unlimited)*: Mit dieser Funktion kann ein Limit für die Anzahl der ausgegebenen Zeilen definiert werden. Standardmäßig ist die Ausgabe unbegrenzt. 

![ECS-Nintex-ReadSAPTable-Action6](/img/content/ECS-Nintex-ReadSAPTable-Action6.png){:class="img-responsive"}

*Where Clause*: Mit dieser Funktion kann eine WHERE-Bedingung für den Aufruf der SAP-Tabelle hinterlegt werden. 

![ECS-Nintex-ReadSAPTable-Action7](/img/content/ECS-Nintex-ReadSAPTable-Action7.png){:class="img-responsive"}