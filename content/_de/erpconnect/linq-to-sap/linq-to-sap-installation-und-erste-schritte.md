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

Die Installation des *LINQ to SAP*-Designers erfolgt nicht automatisch mit der Installation von ERPConnect. 

1. Um das *LINQ to SAP* Add-On zu installieren, starten Sie das Setup, das Ihrer Visual Studio Version entspricht. <br>
Folgende Setups sind im ERPConnect Verzeichnis (`C:\Program Files\ERPConnect`) verfügbar:<br>
- LINQtoERPSetupVS2012.exe
- LINQtoERPSetupVS2013.exe
- LINQtoERPSetupVS2015.exe
- LINQtoERPSetupVS2017.exe
- LINQtoERPSetupVS2019.exe<br>
2. Falls offen, schließen Sie Visual Studio.
3. Klicken Sie im *LINQ to ERP Setup* auf **[Install]**, um den Designer zu installieren.<br>
![LINQToERP-First-Steps-002](/img/content/LINQToERP-First-Steps-002.png){:class="img-responsive"}
4. Starten Sie Visual Studio. Ein neues Item, um dem aktuellen Projekt einen *LINQ to ERP DataContext* hinzuzufügen, steht jetzt zur Verfügung.


### How to Use LINQ to SAP

Nach der Installation können Sie Ihrem Projekt LINQ to ERP als *DataContext* hinzufügen.

1. Machen Sie einen Rechtsklick im *Solution Explorer* und wählen Sie **[Add] > [New Item..]**.
Das Fenster "Add New Item" öffnet sich. <br>
![LINQToERP-First-Steps-004](/img/content/LINQToERP-First-Steps-004.png){:class="img-responsive"}
5. Wählen Sie *LINQ to ERP* aus der Liste der verfügbaren Items aus und klicken Sie auf **[Add]**, um das Item Ihrem aktuellen Projekt hinzuzufügen.
6. Öffnen Sie den *LINQ to ERP DataContext** mit einem Doppelklick. 
In der Toolbox finden Sie nun folgende Komponenten, die dem Context hinzugefügt werden können:<br>
- Table
- Query
- Function Module
- IDoc
- BWCube
7. Ziehen Sie eines der Elemente auf den Context. Der Designer öffnet sich automatisch.
8. Geben Sie die Verbindungsdaten zu Ihrem SAP-System ein. <br>
Neben den Account-Details (*Mandant, User-Name, Passwort* und *Sprache*) sind das der *Hostname* und die *Systemnummer* oder der *Message-Server*, die *Logon-Gruppe* und die *SID*. 

![LINQToERP-First-Steps-005](/img/content/LINQToERP-First-Steps-005.png){:class="img-responsive"}

