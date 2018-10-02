---
layout: page
title: Erstellen eines Nintex Workflow
description: Erstellen eines Nintex Workflow
product: erpconnect-services
parent: mit_call_sap_function_action
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=erstellen_eines_nintex_workflow
---

Navgieren Sie zur neu erstellten **Purchasing Requests** Liste und wählen Sie unter **List -> Workflow Settings** den Punkt **Create a Workflow in Nintex Workflow**.

![ECS-Nintex-Scenario-SAPFunction-2](/img/content/ECS-Nintex-Scenario-SAPFunction-2.png){:class="img-responsive"}

Wählen Sie eine leere Vorlage für den Workflow.

Fügen Sie im Nintex Workflow Designer folgende zwei Workflow Actions hinzu:

- **Request approval** (aus der **User interaction** Gruppe)

- **Call SAP Function** (aus der **ERPConnect Services** Gruppe)

![ECS-Nintex-Scenario-SAPFunction-3](/img/content/ECS-Nintex-Scenario-SAPFunction-3.png){:class="img-responsive"}

Konfigurieren Sie die **Request approval** Action mit den folgenden Eigenschaften:

- **Approvers** = ApprovalManagers (Gruppe von Genehmigern)

- **Approval options** = Only one approval is required

Sichern Sie die Einstellungen mit **Save**.

![ECS-Nintex-Scenario-SAPFunction-4](/img/content/ECS-Nintex-Scenario-SAPFunction-4.png){:class="img-responsive"}

Konfigurieren Sie die **Call SAP Function** Action.<br>
Spezifizieren Sie die **ERPConnect Service Application** für Ihr SAP System. Sie können eine oder mehrere ERPConnect Service Applikationen in der SharePoint **Zentraladministration** einrichten.

Als SAP function wählen Sie **BAPI_REQUISITION_CREATE**, den SAP Standard-BAPI für die Erstellung einer Bestellanforderung.

Klicken Sie auf **(Re-)Load Parameters.**

![ECS-Nintex-Scenario-SAPFunction-5](/img/content/ECS-Nintex-Scenario-SAPFunction-5.png){:class="img-responsive"}

Konfigurieren Sie die Parameter des Funktionsbausteins: 

Klappen Sie den **Tables** Abschnitt auf und wählen Sie bei *Table Input* die Tabelle **REQUISITION_ITEMS**.
Das Konfigurationsfenster für diese Tabelle öffnet sich. 


![ECS-Nintex-Scenario-SAPFunction-25](/img/content/ECS-Nintex-Scenario-SAPFunction-25.png){:class="img-responsive"}

Klicken Sie auf das Stift-Symbol und hinterlegen Sie im Eingabefenster für die folgenden Felder Werte und Referenzierungen:

**DOC_TYPE** = **NB** (tragen Sie **NB** in das Feld als Konstante ein)

![ECS-Nintex-Scenario-SAPFunction-7](/img/content/ECS-Nintex-Scenario-SAPFunction-7.png){:class="img-responsive"}

Scrollen Sie nach unten und hinterlegen Sie für die folgenden Felder Werte und Referenzierungen:

- **MATERIAL** = Wählen Sie **Insert Reference -> Item Properties -> Material**

- **PLANT** = Wählen Sie **Insert Reference -> Item Properties -> Plant**

- **MAT_GRP** = Wählen Sie **Insert Reference -> Item Properties -> Material Group**

- **QUANTITY** = Wählen Sie **Insert Reference -> Item Properties -> Qty**

- **DELIV_DATE** = Wählen Sie **Insert Reference -> Item Properties -> Delivery Date**


Formatieren Sie  den Wert für Delivery Date indem Sie die folgende built-in function verwenden: **fn-FormatDate(Delivery Date, yyyyMMdd)**

- **ACCTASSCAT** = K (tragen Sie K als konstanten Wert für die Kostenstellenzuordnung ein)

![ECS-Nintex-Scenario-SAPFunction-8](/img/content/ECS-Nintex-Scenario-SAPFunction-8.png){:class="img-responsive"}

Rufen Sie anschließend im Table input-Abschnitt die Tabelle **REQUISITION_ACCOUNT_ASSIGNMENT** auf.

Öffnen Sie das Editierfenster und tragen Sie für die folgenden Felder Werte und Referenzierungen ein:

**COST_CTR** = Wählen Sie **Insert Reference -> Item Properties -> Cost Center**

Formatieren Sie den Wert des Feldes **Cost Center** indem Sie die folgende built-in function verwenden: **fn-PadLeft(Cost Center, 10, 0)**

![ECS-Nintex-Scenario-SAPFunction-9](/img/content/ECS-Nintex-Scenario-SAPFunction-9.png){:class="img-responsive"}

Sichern Sie die Konfiguration der **Call SAP Function** action.

Stellen Sie in den **Workflow Settings** sicher, dass der workflow mit **Start manually** konfiguriert ist.

![ECS-Nintex-Scenario-SAPFunction-10](/img/content/ECS-Nintex-Scenario-SAPFunction-10.png){:class="img-responsive"}

**Sichern** Sie den Workflow z.B. als **SAP Purchasing Requests** und **publizieren** Sie ihn anschließend.