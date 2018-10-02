---
layout: page
title: Den Workflow erweitern
description: Den Workflow erweitern
product: erpconnect-services
parent: mit_call_sap_function_action
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=den_workflow_erweitern
---

Gehen Sie zurück zum Nintex Workflow Designer und fügen Sie die folgenden Standard-Workflow-Actions direkt unter der Call SAP Function Action hinzu:

**Query XML** – verwenden Sie diese Action, um die XML Return Message des SAP BAPI Aufrufs zu parsen

**Log in history list** – verwenden Sie diese Action, um die XML Return Message zur Workflow Historie der **Purchasing Requests** Liste zu schreiben

**Update item** –  verwenden Sie diese Action, um in die Spalte **Purchase Requisition** der Liste **Purchasing Requests** die Belegnummer der Bestellanforderung aus SAP zu schreiben.

![ECS-Nintex-Scenario-SAPFunction-15](/img/content/ECS-Nintex-Scenario-SAPFunction-15.png){:class="img-responsive"}

Modifizieren Sie darüber hinaus die Konfiguration der **Call SAP Function** Action.


Erstellen Sie eine neue Workflow Variable mit dem Namen **BAPIReturn** und vom Typ **Multiple lines of text**, um darin die Return Message des aufgerufenen BAPIs zu schreiben. 


![ECS-Nintex-Scenario-SAPFunction-16](/img/content/ECS-Nintex-Scenario-SAPFunction-16.png){:class="img-responsive"}

Erstellen Sie zwei weitere Workflow Variablen: 

- Variable LogMessage vom Typ **Single line of text**

- Variable PurchaseRequisition vom Typ **Single line of text**

![ECS-Nintex-Scenario-SAPFunction-17](/img/content/ECS-Nintex-Scenario-SAPFunction-17.png){:class="img-responsive"}

Wählen Sie in der **Call SAP Function** Action die Tabelle  **RETURN** als XML output table und mappen Sie den Output zur Variable **BAPIReturn**, wie unten dargestellt.

![ECS-Nintex-Scenario-SAPFunction-18](/img/content/ECS-Nintex-Scenario-SAPFunction-18.png){:class="img-responsive"}

Fügen Sie abschließend den Output-Parameter **NUMBER** hinzu und mappen diese zur Workflow Variable **PurchaseRequisition**.

![ECS-Nintex-Scenario-SAPFunction-19](/img/content/ECS-Nintex-Scenario-SAPFunction-19.png){:class="img-responsive"}

**Sichern** Sie die Konfiguration der Action **Call SAP Function**.

Konfigurieren Sie anschließend die **Query XML** Action.

Wählen Sie **XML** als Quelle für die Action und fügen Sie eine Referenz zur Workflow Variable **Return ein**.

Als Output spezifizieren Sie die XPath expression **/TABLES/TABLE/RETURN/MESSAGE**. Dies bewirkt, dass nur der Message Abschnitt der SAP BAPI Rückgabe-Struktur angezeigt wird.

Wählen Sie **Text** für Return results as und schreiben Sie Ergebnisse in die **LogMessage** Variable.

![ECS-Nintex-Scenario-SAPFunction-20](/img/content/ECS-Nintex-Scenario-SAPFunction-20.png){:class="img-responsive"}

**Sichern** Sie die Ergebnisse der **Query XML** Action.

Konfigurieren Sie die **Log in history** list Action.

Fügen Sie eine Referenz zur **LogMessage** Variable in den Workflow ein. Damit wird der Inhalt der **LogMessage** Variable zur Workflow Historie des Listen-Items geschrieben.

![ECS-Nintex-Scenario-SAPFunction-21](/img/content/ECS-Nintex-Scenario-SAPFunction-21.png){:class="img-responsive"}

**Sichern** Sie die Konfiguration der **Log in history** list Action.

Konfigurieren Sie die **Update item** Action.

Wählen Sie **Current item** für Update und **Purchase Requisition** als Feld, das aktualisiert werden soll.

Setzen Sie das **Purchase Requisition** Feld auf den Wert der Workflow Variable **Purchase Requisition**.


![ECS-Nintex-Scenario-SAPFunction-22](/img/content/ECS-Nintex-Scenario-SAPFunction-22.png){:class="img-responsive"}

**Sichern** Sie die Konfiguration der **Update item** Action.

**Sichern** und **Publizieren** Sie den Workflow.
