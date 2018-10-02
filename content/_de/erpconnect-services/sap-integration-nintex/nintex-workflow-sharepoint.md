---
layout: page
title: Nintex Workflow für SharePoint
description: Nintex Workflow für SharePoint
product: erpconnect-services
parent: sap-integration-nintex
childidentifier: nintex-workflow-sharepoint
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nintex-workflow-fuer-sharepoint
---

Dieser Abschnitt zeigt die unterschiedlichen Szenarien wie Nintex-Workflow mit ERPConnect Services für eine SAP-SharePoint-Integration eingesetzt werden kann. 

**BCS Connector / Business Connectivity Services** 

Für SharePoint-Lösungen, welche die Business Connectivity Services und externe Listen für den SAP-Zugriff verwenden, können Sie die List-Actions (Query List, Create Item, Update Item, Delete Item) benutzen, welche vom Nintex-Workflow zur Verfügung gestellt werden, um SAP-Daten in Ihr Workflow-Szenario zu integrieren. Der Vorteil der Option ist, dass die List-Actions im Nintex Workflow einfach zu konfigurieren sind. Zweitens kann der Einsatz der externen Listen in SharePoint für andere Szenarien nützlich sein, um SAP-Zugriff zu ermöglichen. Ferner ist es mit dem **BCS Connector** als Teil von ERPConnect Services sehr einfach, einen externen Inhaltstyp und eine externe Liste für eine SAP-Tabelle bzw. SAP-Funktionsbaustein mit wenigen einfachen Schritten und ohne Programmierung zu erstellen und in SharePoint direkt zu veröffentlichen. 


**Custom Actions (angeboten von ERPConnect Services für Nintex Workflow)**

Die zweite Option ist, dass Ihre SharePoint-Solution einen direkten Zugriff zu den SAP-Daten und Prozessen über die ERPConnect Services nutzt, ohne den Einsatz der Business Connectivity Services und der externen Listen. In einem Nintex-Workflow können Sie die folgenden Custom Actions verwenden, die mit ERPConnect Services ausgeliefert werden: 

- **Call SAP Function Action:**  Die Call SAP Function Action ermöglicht die Erstellung von Szenarien für lesenden und schreibenden Zugriff auf SAP Daten. Die Custom Action lässt sich mit ein paar wenigen Mausklicks konfigurieren und ist somit ein ideales Tool für Nicht-Programmierer (z.B. SharePoint-Architekten), um Geschäftsprozesse in SharePoint mit Integration von SAP-Daten auf einfachste Art und Weise zu modellieren. 
- **Read SAP Table Action:** Die Read SAP Table Action ermöglicht ebenfalls den direkten Zugriff auf SAP, um Daten aus einer Tabelle zu lesen.
- **Query XQL Action:** Auch die Query XQL Action lässt sich dafür nutzen, um z.B. Daten aus einer SAP-Tabelle zu lesen oder einen SAP-Prozess zu starten. Sie können für die Query XQL Action den XQL Explorer als Teil der ERPConnect Services verwenden, um XQL-Ausdrücke ganz einfach zu schreiben und zu testen. Das Resultat der Query XQL Action ist im XML-Format und kann mit Hilfe der standard Query XML Action in Nintex Workflow weiterverarbeitet werden.

**WebService Designer / Webservices**

Darüber hinaus können Sie mit der **Call Web Service** Action des Nintex-Workflows auf Webservices zugreifen, welche Sie mit dem WebService Designer basierend auf SAP-Daten und Prozesse ganz leicht und ohne Programmierung erstellen und in SharePoint veröffentlichen können.   

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}