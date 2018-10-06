---
layout: page
title: Anwendungsentwicklung
description: Anwendungsentwicklung
product: erpconnect-services
parent: ecs-runtime
childidentifier: ecs-anwendungsentwicklung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-anwendungsentwicklung
---

Die folgenden Abschnitte geben einen Einblick in die Entwicklungsoptionen und Zielsetzung von ERPConnect Services. Die wesentliche Aufgabe der ERPConnect Services liegt in der Bereitstellung einer verteilten, gesicherten und für den Entwickler transparenten ERP-Mittelschicht, die die Komplexität des SAP-Zugriffs dem Anwendungsentwickler abnimmt.


**Entwicklungsumgebungen**

Wie bereits eingangs erläutert, können die ERPConnect Services in zahlreichen Entwicklungsumgebungen eingebunden werden. Der Hauptanwendungsbereich ist die Entwicklung von SharePoint-Komponenten wie *Web Parts oder Application Pages*. Diese Komponenten können sehr bequem mit Visual Studio und den SharePoint Developer Tools entwickelt werden. Die SAP-Integration erfolgt mit Hilfe des ERPConnect Services Objektmodells (ECOM). 

Neben den klassischen SharePoint-Komponenten können auch *Desktop*-Anwendungen erstellt werden, die das Objektmodell der ERPConnect Services nutzen. Für beide Anwendungsarten stellt ERPConnect Services die entsprechenden Client-Bibliotheken bereit.


**Client-Assemblies**

Während der Installation von ERPConnect Services werden im Unterordner ERPConnect Services des Programmverzeichnisses sämtliche notwendigen Assemblies installiert. Einige Assemblies werden zusätzlich im Global Assembly Cache (GAC) installiert.

Innerhalb eines Visual Studio Entwicklungsprojektes muss zunächst die jeweilige Client-Bibliothek referenziert werden. Für SharePoint-Komponenten wie Web Parts ist das die Assemblydatei ERPConnectServices.Server.Common.dll. <br>
Bei Desktopclients (Windows Forms- oder WPF-Anwendungen) kommt die Datei ERPConnectServices.Client.dll zum Einsatz.

| Bibliothek                              | Verwendung                                                        |
|-----------------------------------------|-------------------------------------------------------------------|
| *ERPConnectServices.Server.Common.dll*  | Für SharePoint-Komponenten wie Web Parts oder Application Pages   |
| *ERPConnectServices.Client.dll*         | Für Desktopanwendungen (z.B. Windows Forms- oder WPF-Anwendungen) |
| *ERPConnectServices.Client.WinRT45.dll* | Für WinRT-Anwendungen                                             |

In Ihrer Visual Studio Solution müssen Sie die enstprechende Bibliothek über *References -> Add Reference* ... referenzieren:

![ECS-VS-Add-Reference](/img/content/ECS-VS-Add-Reference.png){:class="img-responsive"}

Für die oben beschriebenen Anwendungstypen definieren die Client-Bibliotheken jeweils die Klasse ERPConnectServiceClient. Sie befindet sich im Namespace ERPConnectServices.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnectServices;
// ...
ERPConnectServiceClient client = new ERPConnectServiceClient();
DataTable dt1 = client.ExecuteTableQuery("T001W");
DataTable dt2 = client.ExecuteTableQuery("T001W", new ExecuteTableQuerySettings { RowCount = 10 });
{% endhighlight %}
</details>

Wie das obige Programmbeispiel zeigt, muss zuerst der Namespace *ERPConnectServices* referenziert werden.<br> 
Danach wird eine Instanz der Klasse *ERPConnectServiceClient* erzeugt, die Zugriff auf sämtliche von ERPConnect Services angebotenen Funktionalitäten bereitstellt.

Das Beispiel liest daraufhin zweimal die SAP-Tabelle *T001W* aus, einmal komplett und beim zweiten Mal nur die ersten zehn Datensätze. 
Die Methode *ExecuteTableQuery* stellt eine Schnittstelle zum Auslesen von SAP-Tabellen zur Verfügung und liefert eine *DataTable* zurück. 


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}