---
layout: page
title: Tabelle
description: Tabelle
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-designer-tabelle
---

Anknüpfend an das letzte Teilkapitel öffnet sich nun die Suchmaske für die Tabellenauswahl. Übernehmen Sie die gewünschte Tabelle, indem Sie mit *OK* bestätigen.

![ECS-Designer-Table-01](/img/content/ECS-Designer-Table-01.png){:class="img-responsive"}

Nachdem die gewünschte Tabelle selektiert wurde, öffnet sich der folgende Auswahldialog. Hier können Sie die gewünschten Spalten ankreuzen, die später in der Ergebnismenge zur Verfügung stehen sollen. Sie können einen eigenen Namen vergeben, indem Sie die Angabe in der Spalte Member überschrieben. 


![ECS-Designer-Table-02](/img/content/ECS-Designer-Table-02.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit OK. Speichern Sie die ECS Designer-Datei (.ecs) um die automatische Code-Generierung zu veranlassen. Der generierte Code wird der Datei  .Designer.cs (oder .vb) hinzugefügt und kann im Visual Studio-Editor angezeigt werden.

Um nun die Klasse im Code anzusteuern, muss zunächst der Data-Kontext instaziiert werden. Dies geschieht entweder unter Angabe einer ERPConnect Services-ApplicationName oder alternativ unter ohne Angabe um die Standard ERPConnect Services Application zu verwenden (der Konstruktor der DataContext-Klasse ist entsprechend überladen). Mit DataContext. können nun entsprechende LINQ-Abfragen formuliert werden:

<details>
<summary>[C+]</summary>
{% highlight csharp %}
using ERPConnectServices;
using System.Linq;
//…
using(ERPConnectServicesContext context = new ERPConnectServicesContext())
{
var data = (from m in context.MAKTList select m).OrderBy(m => m.MAKTX).Take(100);           
gv_Material.AutoGenerateColumns = true;
gv_Material.DataSource = data.ToList();
gv_Material.DataBind(); 
}
{% endhighlight %}
</details>

In einem Webpart würde das Ergebnis folgendermaßen aussehen:


![ECS-Designer-Table-03](/img/content/ECS-Designer-Table-03.png){:class="img-responsive"}
