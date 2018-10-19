---
ref: ecs-sin-nintex-workflow-for-office-365-02
layout: page
title: Nintex Workflow für Office 365 anlegen
description: Nintex Workflow für Office 365 anlegen
product: erpconnect-services
parent: nintex-workflow-fuer-office-365
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nintex_for_office_365_workflow_f_r_den_webservice_anlegen
---

Legen in Ihrer Office 365-Umgebung zunächst eine SharePoint-Liste mit den folgenden Eigenschaften an:

Typ = **Custom List**

Name = **Purchasing Requests**


Fügen Sie die folgenden Spalten zur Liste hinzu:


**Material**: Single line of text (benennen Sie die Titel-Zeile in Material um), required

**Plant**: Single line of text, required

**Quantity**: Number, required

**Delivery Date**: Date only, required

**Cost Center**: Single line of text, required
 
**Purchase Requisition ID**: Single line of text


Wählen Sie anschließend unter Liste -> Einstellungen den Punkt **Nintex Workflow** aus und wählen Sie Create new workflow. Damit wird ein neuer Listen-Workflow angelegt. 


Fügen Sie im Nintex Workflow Designer zunächst folgende drei Workflow Actions hinzu:

**Aufgabe zuweisen** (aus der **User interaction** Gruppe)

**Wörterbuch erstellen** (Aus der **Operations** Gruppe)

**HTTP-Webdienst  aufrufen** (aus der **Integration** Gruppe)

![ECS-Nintex-Office365-1](/img/content/ECS-Nintex-Office365-1.png){:class="img-responsive"}

Konfigurieren Sie die **Aufgabe zuweisen** Action mit den folgenden Eigenschaften:

- **Participant**     = ApprovalManagers (Gruppe von Genehmigern)
- **Task Title**       = Approve Purchase Requisition
- **Related Item**  = Current Item

Alle übrigen Einstellungen sind optional. Sichern Sie die Einstellungen mit Save.


![ECS-Nintex-Office365-2](/img/content/ECS-Nintex-Office365-2.png){:class="img-responsive"}

Konfigurieren Sie anschließend die **Wörterbuch erstellen** Action: 


Das Wörterbuch definiert die Header-Daten für den Webservice-Aufruf. Grundsätzlich empfiehlt es sich, den Webservice zunächst in einem REST-Client auf Funktionstüchtigkeit zu testen. Einzelheiten dazu können Sie hier nachlesen. 


Folgende Angaben werden benötigt:

- **Authorization**: APIKEY [BASE64 kodierter ECS Core API-Schlüssel]
- **Accept**: application/json
- **Content-Type**: application/json	

Sichern Sie das Wörterbuch in der Workflow-Variable **RequestHeader**.

![ECS-Nintex-Office365-4](/img/content/ECS-Nintex-Office365-2.png.png){:class="img-responsive"}

Konfigurieren Sie anschließend die Workflow-Action **HTTP-Webdienst aufrufen**.  

Folgende Einträge müssen Sie vornehmen:

- **Adress**: Webservice-URL inklusive Input-Parametern. Für die Werte der Input-Parameter fügen sie Referenzierungen zu den Spalten der SharePoint-Liste ein  
- **Request Type**: POST  
- **RequestHeaders**: Workflow-Variable RequestHeader
- **Response Content**: Workflow-Variable ResponseContent	
- **Response Status Code**: Workflow-Variable Result

![ECS-Nintex-Office365-5](/img/content/ECS-Nintex-Office365-5.png){:class="img-responsive"}

Der Workflow wäre hiermit im Grunde schon einsatzbereit, jedoch soll für das vorliegende Szenario einer BANF-Anlage noch die im 
SAP-System erzeugte Belegnummer in die SharePoint-Liste zurückgeschrieben werden. Im Webservice wurde hierfür ein Return-Parameter ReqItemID 
angelegt, der dann im Webservice-Ergebnis ausgegeben wird. 

Fügen Sie folgende Workflow-Actions zu Ihrem Workflow hinzu:

- **Element aus einem Wörterbuch abrufen** (Aus der Operations Gruppe) 
- **Feld im aktuellen Element festlegen** (Aus der Libraries and Lists Gruppe)

Optional können Sie auch noch die Action In Verlaufsliste protokollieren zwischen den beiden Workflow-Actions platzieren.  

![ECS-Nintex-Office365-6](/img/content/ECS-Nintex-Office365-6.png){:class="img-responsive"}

Konfigurieren Sie zunächst die **Ein Element aus einem Wörterbuch abrufen** Action. 

- **Wörterbuch**: WF-Variable ResponseContent
- **Item name or path**: result 	(Damit wird aus dem Wörterbuch nur der result-Teil extrahiert, der die Belegnummer beinhaltet)
- **Output**: WF-Variable RequestItemID 

![ECS-Nintex-Office365-8](/img/content/ECS-Nintex-Office365-8.png){:class="img-responsive"}

Optional können Sie anschließend die Variable RequestItemID mit der Action **In Verlaufsliste protokollieren** ins Log schreiben lassen. 

Mit der Workflow-Action Feld im aktuellen Element festlegen soll anschließend die in der WF-Variable **RequestItemID** gespeicherte Belegnummer 
in die SharePoint-Liste zurückgeschrieben werden:

- **Feld**: Purchase Requisition ID
- **Wert**: WF-Variable RequestItemID

![ECS-Nintex-Office365-9](/img/content/ECS-Nintex-Office365-9.png){:class="img-responsive"}

Sichern Sie Ihre Einstellungen und publizieren Sie den Workflow.

