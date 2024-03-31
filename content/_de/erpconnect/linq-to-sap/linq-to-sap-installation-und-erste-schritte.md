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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

{: .box-note }
**Note:** Visual Studio Express-Versionen unterstützen den LINQ to SAP Designer nicht.**

### Installation

Die Installation des *LINQ to SAP*-Designers erfolgt nicht automatisch mit der Installation von ERPConnect. 
Führen Sie die folgenden Schritte aus, um *LINQ to SAP* zu installieren:
 
1. Schließen Sie Visual Studio.
2. Öffnen Sie das ERPConnect Installationsverzeichnis (`C:\Program Files\ERPConnect`).
In dem Verzeichnis befinden sich Anwendungen, die den *LINQ to SAP*-Designer installieren.<br>
Starten Sie Anwendung, die Ihrer Visual Studio Version entspricht. Die folgenden Anwendungen sind verfügbar:
- LINQtoERPSetupVS2013.exe
- LINQtoERPSetupVS2015.exe
- LINQtoERPSetupVS2017.exe
- LINQtoERPSetupVS2019.exe<br>
3. Im Installationsfenster klicken Sie auf **[Install]**, um den Designer zu installieren.
![LINQToERP-First-Steps-002](/img/content/LINQToERP-First-Steps-002.png){:class="img-responsive"}
4. Nachdem die Installation abgeschlossen ist, starten Sie Visual Studio.

Der *LINQ to ERP* DataContext steht jetzt als neues Item zum Einfügen zur Verfügung.

### LINQ to SAP Verwenden

Führen Sie die folgenden Schritte aus, um Ihrem Projekt den *LINQ to ERP* DataContext hinzuzufügen:

1. Führen Sie im *Solution Explorer* einen Rechtklick aus und klicken Sie im Kontextmenü auf **[Add] > [New Item..]**.
Das Fenster "Add New Item" öffnet sich. <br>
![LINQToERP-First-Steps-004](/img/content/LINQToERP-First-Steps-004.png){:class="img-responsive"}
2. Wählen Sie *LINQ to ERP* aus der Liste der verfügbaren Items aus und klicken Sie auf **[Add]**. 
Das Fenster schließt sich und das Item wird im *Solution Explorer* aufgelistet.
3. Doppelklicken Sie auf *LINQ to ERP*, um den DataContext zu öffnen. <br>
Verwenden Sie die *LINQ To ERP* Toolbox, um Komponenten in den Kontext einzufügen.
Wenn eine Komponente hinzugefügt wird, öffnet sich der Designer automatisch. <br>
![LINQToERP-First-Steps-003](/img/content/LINQToERP-First-Steps-003.png){:class="img-responsive"}
4. Geben Sie die Verbindungsinformationen zu Ihrem SAP System ein. <br>
![LINQToERP-First-Steps-005](/img/content/LINQToERP-First-Steps-005.png){:class="img-responsive"}