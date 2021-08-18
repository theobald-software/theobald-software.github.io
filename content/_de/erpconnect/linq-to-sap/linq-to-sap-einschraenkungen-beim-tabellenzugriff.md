---
ref: ec-linq-to-sap-03
layout: page
title: Einschränkungen beim Tabellenzugriff
description: Einschränkungen beim Tabellenzugriff
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-einschraenkungen-beim-tabellenzugriff
---

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.


Der Zugriff auf Tabellen wie im letzten TeilAbschnitt gezeigt funktioniert ohne irgendwelche Installationen im SAP-System. Leider gibt es dieselben Beschränkungen wie schon bei der traditionellen ReadTable-Klasse (siehe [SAP-Tabellen lesen mit der ReadTable-Klasse](../spezialklassen/sap-tabellen-lesen-mit-der-readtable-klasse)).

Um dieses Problem in den Griff zu bekommen, ist es aber möglich, einen Z-Baustein im SAP-System zu installieren, siehe Abschnitt [Z-Baustein installieren](../sap-customizing/umgehung-der-einschraenkungen-bei-der-tabellenextraktion). Sobald dieser Baustein im System verfügbar ist, können Sie ihn aktivieren, in dem Sie den Namen im LINQ-Table-Dialog eintragen (bei Bedarf kann der Baustein-Name je nach Benennungsvorschiften geändert werden). 

![LINQToERP-Tables-004](/img/content/LINQToERP-Tables-004.png){:class="img-responsive"}

Nicht alle LINQ-Ausdrücke machen bei LINQ to SAP Sinn bzw. sind technisch realisierbar. Neben den klassischen Ausdrücken wie den Operatoren <, > und =, bietet LINQ to SAP die zeichenartigen Funktionen wie Equals (=), Contains (LIKE "%..%"), StartsWith (LIKE "%...") und EndsWith (LIKE "…%"). Darüber hinaus gibt es noch eine Extension-Funktion namens InList. Sie ist allerdings nur aktiv, wenn ERPConnect.Linq im using Abschnitt angegeben ist (bzw. bei den imports unter VB). 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnect.Linq; 
  
[…] 
  
var MyTexts = from t in sc.MAKTList 
         where t.MATNR.StartsWith("100") 
         && t.SPRAS.InList("D","E") 
         select t;
{% endhighlight %}
</details>
