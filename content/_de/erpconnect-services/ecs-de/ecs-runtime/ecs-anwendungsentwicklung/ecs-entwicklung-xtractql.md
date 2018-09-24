---
layout: page
title: XtractQL (XQL)
description: XtractQL (XQL)
product: erpconnect-services
parent: ecs-anwendungsentwicklung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-entwicklung-xtractql	
---

ERPConnect Services bietet erstmalig die Option Daten mit Hilfe der Datenabfragesprache *XtractQL (XQL)* aus einem SAP-System auszulesen bzw. umfangreiche SAP-Funktionalitäten auszuführen.

Die Sprachsyntax von XtractQL ist eine Mischung aus SQL- und ABAP-Sprachelementen. Die Einsatzbereiche umfassen

- SAP-Tabelle/Objekte und deren Metadaten,
- Funktionsbausteine,
- BW Cubes,
- SAP Queries,
- MDX-Statements.

Das folgende Programmbeispiel verdeutlicht die Ausführung von XQL-Abfragen:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnectServices;
// ....
ERPConnectServiceClient client = new ERPConnectServiceClient();
DataTable dt = client.ExecuteXQL("SELECT TOP 50 * FROM MAKT");
{% endhighlight %}
</details>

Alle XQL-Abfragen liefern jeweils eine Tabelle als Ergebnismenge zurück. Bei Funktionsbausteinen muss explizit angegeben werden, welcher Eintrag einer Parameterauslistung als Rückgabewert verwendet werden soll (siehe Abfragebeispiel "INTO @RETVAL").

XtractQL ist besonders hilfreich bei dynamischen Datenabfragen, die erst zur Laufzeit bekannt sind und erstellt werden können. 

Weitere Beispiele sowie eine ausführliche Syntax-Referenz finden Sie [im Abschnitt XtractQL](). 
