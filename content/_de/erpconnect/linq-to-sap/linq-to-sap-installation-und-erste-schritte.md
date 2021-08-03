---
ref: ec-linq-to-sap-01
layout: page
title: Installation und erste Schritte 
description: Installation und erste Schritte 
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-installation-und-erste-schritte
---

### Installation

{: .box-note }
**Hinweis:** Visual Studio Express-Versionen unterstützen den LINQ to SAP Designer nicht.

Die Installation des *LINQ to SAP*-Designers erfolgt nicht automatisch mit der Installation von ERPConnect. <br>
Führen Sie die folgenden Schritte aus, um das Add-On zu installieren:

1. Schließen Sie Visual Studio.
2. Im ERPConnect Verzeichnis (`C:\Program Files\ERPConnect`) befinden sich Setups, die die Installation des *LINQ to SAP*-Designers durchführen.<br>
Starten Sie das Setup, das Ihrer Visual Studio Version entspricht. Folgende Setups sind verfügbar:<br>
- LINQtoERPSetupVS2012.exe
- LINQtoERPSetupVS2013.exe
- LINQtoERPSetupVS2015.exe
- LINQtoERPSetupVS2017.exe
- LINQtoERPSetupVS2019.exe<br>
3. Klicken Sie im *LINQ to ERP Setup* auf **[Install]**, um den *LINQ to SAP* zu installieren.<br>
![LINQToERP-First-Steps-002](/img/content/LINQToERP-First-Steps-002.png){:class="img-responsive"}
4. Nach beendeter Installation starten Sie Visual Studio. 

Der *LINQ to ERP* DataContext steht jetzt als Item in Visual Studio zur Verfügung.


### LINQ to SAP verwenden

Führen Sie die folgenden Schritte aus, um Ihrem Projekt den *LINQ to ERP* DataContext hinzufügen und den Designer zu verwenden:

1. Rechtsklicken Sie in den *Solution Explorer* und wählen Sie im Kontextmenü **[Add] > [New Item..]**.
Das Fenster "Add New Item" öffnet sich. <br>
![LINQToERP-First-Steps-004](/img/content/LINQToERP-First-Steps-004.png){:class="img-responsive"}
2. Wählen Sie *LINQ to ERP* aus der Liste der verfügbaren Items aus und klicken Sie auf **[Add]**.
Das Fenster schließt sich und das Item wird im *Solution Explorer* aufgelistet.
3. Öffnen Sie den *LINQ to ERP* DataContext mit einem Doppelklick. <br>
Über die Toolbox *LINQ To ERP* können Sie dem DataContext Komponenten hinzufügen. 
Wenn Sie eines der Elemente in den DataContext ziehen, öffnet sich der Designer automatisch.<br>
![LINQToERP-First-Steps-003](/img/content/LINQToERP-First-Steps-003.png){:class="img-responsive"}
4. Geben Sie die Verbindungsdaten zu Ihrem SAP-System ein. <br>
![LINQToERP-First-Steps-005](/img/content/LINQToERP-First-Steps-005.png){:class="img-responsive"}
