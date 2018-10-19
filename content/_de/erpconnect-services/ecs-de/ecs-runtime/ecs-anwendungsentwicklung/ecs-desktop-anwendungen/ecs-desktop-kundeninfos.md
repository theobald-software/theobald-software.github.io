---
ref: ecs-runtime-application-desktop-02
layout: page
title: Funktionsbaustein Kundeninfos
description: Funktionsbaustein Kundeninfos
product: erpconnect-services
parent: ecs-desktop-anwendungen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-desktop-kundeninfos
---

Der Baustein SD_RFC_CUSTOMER_GET ist ein Demo-Baustein für RFC-Anwendungen, der in jedem SAP-System vorhanden sein sollte. Er empfängt als Eingabeparameter eine Kundennummer und gibt die zugehörige Adresse in Form einer Tabelle zurück (es ist deshalb eine Tabelle, weil Sie theoretisch auch mit Wildcards suchen können. Das Resultat wäre dann mehr als eine Kundenadresse). Das folgende Programmcode zeigt die Ausführung des Funktionsbausteins SD_RFC_CUSTOMER_GET unter ERPConnect Services.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnectServices;  
//...  
ERPConnectServiceClient client = new ERPConnectServiceClient("http://SERVERNAME");  
ERPFunction function = client.CreateFunction("SD_RFC_CUSTOMER_GET");  
function.Exports["NAME1"].ParamValue = "T*";  
function.Execute();  
      
DataTable dt1 = function.Tables["CUSTOMER_T"].ToADOTable();  
DataTable dt2 = function.Tables["CUSTOMER_T"].ToADOTable("ORT01 = 'CHICAGO'");  
      
foreach(ERPStructure row in function.Tables["CUSTOMER_T"])  
 Console.WriteLine(row["NAME1"] + ", " + row["ORT01"]);
{% endhighlight %}
</details>

Zunächst muss der Namespace *ERPConnectServices* eingebunden werden. Mit einer Instanz von *ERPConnectServiceClient* wird mittels der *CreateFunction*-Methode zunächst ein *ERPFunction*-Objekt angelegt.

Die Klasse *ERPFunction* enthält Auflistungen für alle Funktionsparametertypen. Das sind die Parameterauflistungen *Exports, Imports, Changings *und *Tables*. Die Methode *Execute* (siehe vorstehenden Quellcode) leitet die Exekutionsanfrage an ERPConnect Services weiter. <br>
Nach dem das Ergebnis erfolgreich an den Client zurückgesendet wurde, stehen die Parameterauflistungen aktualisiert zur weiteren Verwendung bereit. Für die SharePoint und Desktop-Anwendungen ermöglicht die Hilfsfunktion ToADOTable eine Konvertierung von Tabellendaten vom Typ *ERPTable* nach *DataTable*. Eine Überladung der Methode bietet die gleichzeitige Filterung der Daten an.

Im Beispiel werden alle Kundendaten zurückgegeben, bei denen der Name mit *T* anfängt. Dazu wird der Export-Parameter NAME1 vor der Ausführung durch Execute auf den Wert _T*_ eingestellt. Die Kundendatensätze werden mit der Tabelle *CUSTOMER_T* der Tables-Auflistung zurückgeliefert und auf der Console ausgegeben.

Der folgende Screenshot zeigt den Inhalt der DataTable dt1:


![ECS-VS-Function-Preview](/img/content/ECS-VS-Function-Preview.png){:class="img-responsive"}