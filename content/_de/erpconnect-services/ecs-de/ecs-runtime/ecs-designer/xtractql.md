---
ref: ecs-runtime-designer-05
layout: page
title: XtractQL
description: XtractQL
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-designer-xtractql
---

Um einen XtractQL-Objekt anzulegen, klicken Sie auf den Knopf mit dem + -Symbol. Geben Sie den Namen der Funktion sowie den XtractQL-Ausdruck ein. Klicken Sie auf die Schaltfläche *Execute*, um ein Daten-Preview zu sehen.

![ECS-Designer-XtractQL-01](/img/content/ECS-Designer-XtractQL-01.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit *OK*. Speichern Sie die ECS Designer-Datei (.ecs) um die automatische Code-Generierung zu veranlassen. Der generierte Code wird der Datei .Designer.cs (oder .vb) hinzugefügt und kann im Visual Studio-Editor angezeigt werden.

Der folgende Code zeigt die Ansteuerung des obigen Beispiels mit einer Rückgabetabelle:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnectServices;
using System.Linq;
//… 
using(ERPConnectServicesContext context = new ERPConnectServicesContext())
{
    System.Data.DataTable data = context.GetMaterials();
    gv_Materials.AutoGenerateColumns = true;
    gv_Materials.DataSource = data;
    gv_Materials.DataBind();
}
{% endhighlight %}
</details>

In einem Webpart würde das Ergebnis folgendermaßen aussehen:

![ECS-Designer-XtractQL-02](/img/content/ECS-Designer-XtractQL-02.png){:class="img-responsive"}

Weitere Beispiele sowie eine ausführliche Syntax-Referenz finden Sie [im Abschnitt XtractQL]().

