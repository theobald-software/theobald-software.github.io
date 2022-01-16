---
ref: ecs-core-developing-01
layout: page
title: Erste Schritte mit ECS Core und SharePoint Online
description: Erste Schritte mit ECS Core und SharePoint Online
product: erpconnect-services
parent: anwendungsentwicklung-mit-ecs-core
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=erste-schritte-mit-ecs-core-und-sharepoint-online
---

Dieses Beispiel zeigt, wie Sie Daten aus einem On-Premises SAP-System in SharePoint Online (Office 365) mit Hilfe von ECS Core integrieren. Folgende Tools werden außerdem verwendet: Napa Office 365 Development Tools und das Azure Portal.

ECS Core ermöglicht eine Integration mit SAP, sowohl lesend als auch schreibend. Dieses Beispiel zeigt, wie man SAP-Daten nach SharePoint Online transferiert. 

**Bevor Sie starten** 

Dieses Beispiel benötigt die folgenden Voraussetzungen: 

1. Eine Office 365 Developer Site in einer Office 365 Domäne und die Rechte, eine Napa-App zu entwickeln.
2. Eine Service Bus Instanz im Azure Management Portal.
3. Eine ECS Core Installation und Konfiguration, insbesondere:  
- Eine Service Application anlegen (d.h. eine SAP-Verbindung), siehe [Services](../ecscore-administration/ecscore-service-applikation). 
- Einen API Key generieren, siehe [API Keys]().
- Einen Service Bus registrieren, siehe [Azure Service Bus](). 

*Bemerkung*: Andere Middleware Tools, insbesondere SAP Gateway oder SAP Gateway for Microsoft werden für dieses Szenario nicht benötigt. 

**Schritt 1: Eine NAPA App anlegen**  

Mit Napa können Sie ein SharePoint Add-in innerhalb des Browsers anstelle von Visual Studio entwickeln. Jederzeit können Sie das Projekt herunterladen und mit Visual Studio weiterarbeiten für fortgeschrittene Szenarien.

Sie benötigen eine SharePoint Online Subscription, mit der Sie eine Napa-Anwendung entwickeln können. Wenn dies nicht der Fall ist, können Sie eine Developer Site in der Administration UI Ihrer Subscription anlegen und dann Napa installieren. 

Um Napa zu installieren, öffnen Sie Ihre Developer Site und wählen Sie Site Contents > add an add-in > SharePoint Store. Suchen Sie im Store nach Napa und installieren Sie es. (Falls Sie eine Office 365 Developer Site haben, könnte Napa bereits installiert sein. Das würden Sie unter Site Contents finden.)

**Ein SharePoint Add-in-Projekt anlegen** 

Öffnen Sie das Napa Add-in auf Ihrer Office 365 bzw. SharePoint Online-Seite.

![ecscore-gettingstarted-01](/img/content/ecscore-gettingstarted-01.png){:class="img-responsive"}

Wählen Sie *Add New Project* und dann *Add-in for SharePoint*.

![ecscore-gettingstarted-02](/img/content/ecscore-gettingstarted-02.png){:class="img-responsive"}

![ecscore-gettingstarted-03](/img/content/ecscore-gettingstarted-03.png){:class="img-responsive"}

Geben Sie einen Namen ein, z.B. SAPMaterials, und klicken Sie auf Create.
Der Code Editor öffnet sich und zeigt die default Webpage mit einem Beispielcode. 

**Schritt 2: Die Home Page (Default.aspx) editieren**

Auf der linken Seite unter dem Ordner Pages wählen Sie die Seite Default.aspx.  

Im Abschnitt *PlaceHolderAdditionalPageHead* fügen Sie die folgende Zeile als Referenz zur Theobald JavaScript library (tEcs):

Im Beispiel nutzen wir die Version 4.10.2: src="//static.theobald-software.com/theobald.ecs/4.10.2/theobald.ecs.js"

Wichtig: Bitte nutzen Sie immer die aktuelle Version von tEcs, welche die neuesten Änderungen und Verbesserungen enthält. Siehe: [http://static.theobald-software.com/tEcs/](http://static.theobald-software.com/tEcs/)


![ecscore-gettingstarted-04](/img/content/ecscore-gettingstarted-04.png){:class="img-responsive"}

In den Abschnitt *PlaceHolderMain* fügen Sie den unteren HTML-Code ein. 

![ecscore-gettingstarted-05](/img/content/ecscore-gettingstarted-05.png){:class="img-responsive"}

Der HTML-Code definiert folgende Controls:             

- Ein Eingabe-Feld (z.B. SAP Materialnummer) in der Webseite des SharePoint 
Add-ins.
- Einen Button, um den Leseprozess der SAP-Daten auszulösen. 
- Ein div-Control für das Ergebnis. 

**Schritt 3: Javascript-Code für den Aufruf der SAP-Tabelle einfügen** 

Nun benötigen wir JavaScript-Code, um die SAP-Verbindung herzustellen und SAP-Materialbeschreibungen aus der SAP-Tabelle MAKT ins SharePoint Add-in zu holen.<br>
Wählen Sie den Ordner Scripts und anschließend *App.js*.

Die JavaScript-Datei App.js enthält den Code für Ihr SharePoint Add-in. Sie können eine neue JavaScript-Datei einfügen oder wie in unserem Fall die bestehende Datei nutzen. 

Im ersten Schritt definieren wir unter der Funktion $(document).ready(), dass beim Klick auf den Button die folgende Funktion aufgerufen werden soll
GetSAPData(): liest SAP-Daten aus der Tabelle MAKT.

![ecscore-gettingstarted-06](/img/content/ecscore-gettingstarted-06.png){:class="img-responsive"}

Bemerkung: Rote, wellenförmige Unterstreichungen können als Hinweis auf Fehler auftreten, werden aber später verschwinden.  

Fügen Sie nun den Code für die Funktion GetSAPData() nach der Funktion $(document).ready() ein.

![ecscore-gettingstarted-07](/img/content/ecscore-gettingstarted-07.png){:class="img-responsive"}

Schauen wir uns nun den Code näher an, mit dem wir auf das On-Premises SAP-System über Azure Bus und ECS Core zugreifen:
- connection.ecs.coreApiKey ist der API Key aus Ihrer ECS Core Installation.
- instance: ist der Name der gepflegten SAP-Verbindung in ECS Core.
- connection.ecs.url ist der Azure Service Bus Name für ECS Core
  Das 'data'-Feld beinhaltet den SAP-Ausdruck (in [XtractQL]()),  um die deutsche und englische Materialbeschreibung aus der SAP-Tabelle MAKT zu lesen. 

Das Ergebnis wird mit Hilfe einer Tabelle dargestellt. 

Für weitere Informationen über den Code siehe unsere Online Help und unsere JavaScript Bibliothek [tEcs]().
In diesem Beispiel haben wir Daten aus einer SAP-Tabelle gelesen. Im [nächsten Beispiel]() zeigen wir, wie Sie einen SAP-Funktionsbaustein aufrufen.  

**Schritt 4: Ausführen**

Auf der linken Seite klicken Sie auf den Button *run*. 
Das Projekt wird nun auf Ihrer Office 365 Developer Site installiert.

![ecscore-gettingstarted-08](/img/content/ecscore-gettingstarted-08.png){:class="img-responsive"}

Nach der Installation startet das SharePoint Add-In. Falls das Add-In nicht automatisch startet, weil z.B. ein Popup-Blocker aktiviert ist, klicken Sie auf den Add-In-Link, um das Add-In zu starten. 

![ecscore-gettingstarted-09](/img/content/ecscore-gettingstarted-09.png){:class="img-responsive"}

Nun geben Sie eine Materialnummer ein und klicken Sie auf den Button.  
Das Ergebnis wird aus SAP geholt und angezeigt.  

![ecscore-gettingstarted-10](/img/content/ecscore-gettingstarted-10.png){:class="img-responsive"}
