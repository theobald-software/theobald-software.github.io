---
layout: page
title: Funktionsbaustein
description: Funktionsbaustein
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-designer-funktionsbaustein
---

Da die beiden Begriffe Funktionsbausteine und BAPIs fast äquivalent sind, sprechen wir abwechselnd von BAPIs und Fuktionsbausteine. Um einen neuen Funktionsbaustein anzulegen, klicken Sie auf den Knopf mit dem +-Symbol. Es erscheint der Such-Dialog.


![ECS-Designer-Function-01](/img/content/ECS-Designer-Function-01.png){:class="img-responsive"}

Der folgende Screenshot zeigt den Dialog zum Editieren des Function-Objekts. Wenn ein Parameter später beim Aufruf dynamisch im Code gefüllt werden soll, muss in der Pass-Spalte ein Häkchen gesetzt sein, alternativ kann auch in der Value-Zelle ein statischer Wert hinterlegt werden.

![ECS-Designer-Function-02](/img/content/ECS-Designer-Function-02.png){:class="img-responsive"}

Ähnlich funktioniert es mit den Tabellen. Sie können entweder als Tabellenobjekte an die Funktion übergeben werden, oder als Rückgabewert zurückkommen. Der Variablen-Name, der Name der Tabellenklasse und der Name der Zeilenklasse können ebenfalls vorgegeben werden. Bleiben die Felder leer, werden Defaultnamen generiert.

![ECS-Designer-Function-03](/img/content/ECS-Designer-Function-03.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit OK. Speichern Sie die ECS Designer-Datei (.ecs) um die automatische Code-Generierung zu veranlassen. Der generierte Code wird der Datei .Designer.cs (oder .vb) hinzugefügt und kann im Visual Studio-Editor angezeigt werden.

Der folgende Code zeigt die Ansteuerung des obigen Beispiels mit jeweils einem Übergabewert und einer Rückgabetabelle.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using System.Linq;
using ERPConnectServices;
… 
using(ERPConnectServicesContext context = 
new ERPConnectServicesContext())
{
    String Name = tb_CustomerName.Text ?? String.Empty;
    var data = context.SD_RFC_CUSTOMER_GET(Name);
    gv_Customers.AutoGenerateColumns = true;
    gv_Customers.DataSource = data.ToList();
    gv_Customers.DataBind();            
}
{% endhighlight %}
</details>

In einem Webpart würde das Ergebnis folgendermaßen aussehen:

![ECS-Designer-Function-04](/img/content/ECS-Designer-Function-04.png){:class="img-responsive"}