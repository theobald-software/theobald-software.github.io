---
layout: page
title: Tabelle
description: Tabelle
product: erpconnect-services
parent: ecs-desktop-anwendungen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-desktop-table
---

Wie im oben aufgeführten Programmbeispiel bereits gesehen, umfasst dieser Funktionsblock die Möglichkeit zur Datenabfrage einer SAP-Tabelle mit Hilfe der ExecuteTableQuery-Methode der Klasse ERPConnectServiceClient.<br>
Je nach Anwendungstyp liefert die ExecuteTableQuery-Methode entweder eine DataTable oder eine DataTable-ähnliche Struktur namens ERPDataTable als Ergebnis zurück. Für SharePoint- und Desktop-Applikationen steht die Methode ExecuteTableQuery in den folgenden Ausprägungen zur Verfügung:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public DataTable ExecuteTableQuery(string tableName)
public DataTable ExecuteTableQuery(string tableName, ExecuteTableQuerySettings settings)
{% endhighlight %}
</details>

Im folgenden Beispiel sollen Materialtexte ausgelesen werden. Diese befinden sich in der Tabelle MAKT. Zunächst wird eine Instanz von ERPConnectServiceClient unter Angabe der öffentlich zugänglichen SharePoint Server URL erzeugt. Da wir nur die englischen Textbausteine auslesen möchten, schränken wir die Selektion mit dem Kriterium SPRAS = 'EN' ein. SPRAS ist die Spalte für den Sprachenschlüssel in der Tabelle MAKT. Es werden nur die ersten 10 Datensätze der Tabelle MAKT abgefragt (RowCount = 10).


<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnectServices;
// ...
ERPConnectServiceClient client = new ERPConnectServiceClient("http://SERVERNAME"); 
DataTable dt = client.ExecuteTableQuery("MAKT", 
new ExecuteTableQuerySettings { 
RowCount = 10, 
WhereClause = "SPRAS = 'EN'" 
});
{% endhighlight %}
</details>

Wenn Sie nur bestimmte Spalten der Tabelle haben wollen, dann nutzen Sie die Property Fields der Klasse ExecuteTableQuerySettings:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
Fields.Add("ColumnName");
{% endhighlight %}
</details>

Das untenstehende Bild zeigt die von der Abfrage zurückgebenen Daten.

![ECS-VS-Table-Preview](/img/content/ECS-VS-Table-Preview.png){:class="img-responsive"}

