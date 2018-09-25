---
layout: page
title: XtractQL Explorer
description: XtractQL Explorer
product: erpconnect-services
parent: ecs-xtractql
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-xtractql-explorer
---

*XtractQL Explorer* ist ein Tool, welches mit den ERPConnect Services installiert wird, um *XtractQL*-Ausdrücke auszuführen.<br>
Starten Sie den XtractQL Explorer aus dem Startmenü -> ERP Connect Services.

![ECS-XtractQL-Explorer](/img/content/ECS-XtractQL-Explorer.jpg){:class="img-responsive"}

Im Menü *File -> Connection* ... definieren Sie Ihre SAP-Verbindung.

![ECS-XtractQL-SAP-Connection](/img/content/ECS-XtractQL-SAP-Connection.jpg){:class="img-responsive"}

Im oberen Bereich geben Sie einen XtractQL-Ausdruck und klicken Sie auf *Execute* zur Ausführung. Im unteren Bereich wird das Ergebnis angezeigt.

![ECS-XtractQL-Explorer-Table](/img/content/ECS-XtractQL-Explorer-Table.jpg){:class="img-responsive"}

**Vorlagen**

Unter dem Menüpunkt Template finden Sie verschiedene XtractQL-Ausdrücke, welche Sie als Vorlage benutzen können.

![ECS-XtractQL-Explorer-Template](/img/content/ECS-XtractQL-Explorer-Template.jpg){:class="img-responsive"}

**Variablen**

Es können Variablen sowohl für die Eingabe als auch für die Ausgabe verwendet werden.<br>
Im folgenden Beispiel wird dem Export-Parameter KUNNR die Variable @KUNNR zugewiesen.<br>
Die Ergebnistabelle CUSTOMER_T  wird im folgenden Beispiel in die Table-Variable @RETVAL gespeichert.<br>

{% highlight sql %}
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET' 
EXPORTS KUNNR= @KUNNR 
TABLES CUSTOMER_T INTO @RETVAL;
{% endhighlight %}

Eingabe-Variablen können Sie unter dem Menüpunkt File -> Parameters  definieren.

![ECS-XtractQL-Explorer-Menu](/img/content/ECS-XtractQL-Explorer-Menu.jpg){:class="img-responsive"}

![ECS-XtractQL-Explorer-Function-Parameter](/img/content/ECS-XtractQL-Explorer-Function-Parameter.jpg){:class="img-responsive"}

![ECS-XtractQL-Explorer-Function](/img/content/ECS-XtractQL-Explorer-Function.jpg){:class="img-responsive"}

