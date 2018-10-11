---
layout: page
title: Erstellen der SharePoint Listen
description: Erstellen der SharePoint Listen
product: erpconnect-services
parent: voraussetzungen_installation
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=installation_und_konfiguration
---

Zur Dateneingabe innerhalb der Szenarien werden verschiedene SharePoint-Listen genutzt.

Für den **Reiseantrag** erstellen Sie manuell eine SharePoint-Liste mit folgenden Eigenschaften oder importieren Sie die Liste über die Windows Powershell mit der Datei *TravelRequests.cmp*. Wie Sie SharePoint-Listen per Powershell importieren, erfahren Sie [hier](https://docs.microsoft.com/de-de/SharePoint/administration/import-a-list-or-document-library).

Typ = **Custom List**

Name = **Travel Requests**

![ECS-Nintex-TravelScenarios4](/img/content/ECS-Nintex-TravelScenarios4.png){:class="img-responsive"}

*Alternative Cost Assignment*

Über die Spalte *Alternative Cost Assignment* soll der Anwender die Möglichkeit erhalten, eine alternative Kontierung für den Reiseantrag zu hinterlegen. Die Idee dahinter ist, eine Liste an möglichen Kostenstellen direkt aus dem SAP System zu beziehen. Der externe Inhaltstyp wird mit dem BCS Connector von Theobald Software erzeugt. Dort erfolgt ein Aufruf einer Standard-SAP-Tabelle für Kostenstellen (CSKS oder CSKT). Eine genaue Erläuterung der Funktionsweise des BCS Connectors finden Sie [hier](../../../../../ecs-de/bcs-connector). 

Alternativ besteht die Möglichkeit, die Kostenstellen auch über eine andere Custom List zu definieren, die über eine Lookup-Spalte angesteuert wird, oder die alternative Kontierung mit Prozentsatz ganz wegzulassen. In SAP wird standardmäßig die Stammkostenstelle des Personalfalls für die Kontierung verwendet. 


![ECS-Nintex-TravelScenarios3](/img/content/ECS-Nintex-TravelScenarios3.png){:class="img-responsive"}

Für die **Reisekostenabrechnung** erstellen Sie eine SharePoint-Liste mit folgenden Eigenschaften oder importieren Sie die Liste über die Windows Powershell mit der Datei *TravelExpenses.cmp*.  


Typ = **Custom List**

Name = **Travel Expenses** 

![ECS-Nintex-TravelScenarios4](/img/content/ECS-Nintex-TravelScenarios4.png){:class="img-responsive"}

Zusätzlich zu den beiden Listen, die die Grundlage für die Workflows bilden, wird noch eine SharePoint-Liste benötigt, in welcher Informationen zu den Genehmigern der Reisekostenanträge hinterlegt sind (z.B. Genehmigungslimit):

Typ = **Custom List**

Name = **Approver**

![ECS-Nintex-TravelScenarios12](/img/content/ECS-Nintex-TravelScenarios12.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios11](/img/content/ECS-Nintex-TravelScenarios11.png){:class="img-responsive"}

Über die *Lookup*-Spalte in der Liste *Approver* kann optional noch ein Verweis auf eine weitere Liste mit Informationen zu beispielsweise Kostenstelle oder Geschäftsbereich, in welchem sich der Genehmiger befindet, erfolgen:

![ECS-Nintex-TravelScenarios13](/img/content/ECS-Nintex-TravelScenarios13.png){:class="img-responsive"}

Beachten Sie Folgendes bei der Erstellung der SharePoint-Listen:

- Die Titelspalte können Sie jeweils umbenennen (z.B. bei der Liste *Travel Requests* in *Travel Destination*).
- Spalten mit *Multiple Lines of text* müssen als *Plain Text* definiert werden.
- Welche Spalten in der Listensicht ein- und ausgeblendet sind bleibt Ihnen überlassen. Die Eingaben macht der - Anwender über das Nintex Forms Formular.
Die Spalten- und Listennamen können Sie jederzeit individuell umbenennen.
