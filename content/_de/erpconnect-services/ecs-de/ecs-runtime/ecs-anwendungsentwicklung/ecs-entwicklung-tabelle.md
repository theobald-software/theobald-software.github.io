---
layout: page
title: Tabelle
description: Tabelle
product: erpconnect-services
parent: ecs-anwendungsentwicklung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-entwicklung-tabelle
---

Eine oft wiederkehrende Aufgabe in der täglichen Arbeit mit .NET und SAP ist das direkte Lesen von Daten aus der SAP-Tabellen.  

Um ERPConnect Services zu veranlassen, einen Z-Funktionsbaustein, z.B. *Z_XTRACT_IS_TABLE*, anstelle des SAP-Standards zu nutzen, um Einschränkungen beim Lesen von SAP-Tabellen umzugehen, verwenden Sie die Eigenschaft *CustomFunction* der Klasse *ExecuteTableQuerySettings*. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
ERPConnectServiceClient client = new ERPConnectServiceClient();
DataTable dt = client.ExecuteTableQuery("VBAK",
new ExecuteTableQuerySettings {
CustomFunction = "Z_XTRACT_IS_TABLE"
RowCount = 10
});
{% endhighlight %}
</details>

**Einschränkungen beim Tabellen-Lesen**

Im Kapitel [Einschränkungen bei Tabellen]() finden Sie weitere Informationen zu den Einschränkungen beim Lesen von SAP-Tabellen und wie Sie den Z-Funktionsbaustein Z_XTRACT_IS_TABLE installieren.