---
ref: erpconnect-04
layout: page
title: SAP Queries
description: SAP Queries
product: erpconnect
parent: erpconnect
childidentifier: sap-queries
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-queries
---

Mit ERPConnect können alle Arten von SAP Queries angesteuert und deren Daten extrahiert werden. Die nötigen Klassen dazu befinden sich in dem Namespace ERPConnect.Queries.

Die nachfolgende Objekthierarchie zeigt den Zusammenhang der Klassen bzw. Objekte. Das Eingabebild der Query wird durch die *SelectParameters*-Collection gefüllt. Jeder Eingabeparameter kann beliebig viele Werte enthalten. Die Werte werden durch so genannte Ranges dargestellt. Außerdem enthält ein Query-Objekt noch eine *Fields*-Collection, die die Ausgabefelder enthält. 

![SAP-Query-Object-Model](/img/content/SAP-Query-Object-Model.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}