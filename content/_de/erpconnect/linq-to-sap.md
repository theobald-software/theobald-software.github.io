---
ref: erpconnect-09
layout: page
title: LINQ To SAP
description: LINQ To SAP
product: erpconnect
parent: erpconnect
childidentifier: linq-to-sap
permalink: /:collection/:path
weight: 9
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap
---

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.

Bevor wir in diesem Abschnitt tiefer in LINQ to SAP einsteigen, sind im folgenden die Antworten auf einige wichtige Fragen gegeben, die dem einen oder anderen Leser unter den Nägeln brennen werden:

- *LINQ to SAP* heißt im Quellcode immer *LINQ to ERP*. Das hat markenrechtliche Gründe. Aus dem selben Grund heißt ERPConnect auch ERPConnect und nicht SAPConnect, was eigentlich näher liegen würde. 
- *LINQ to SAP* ist ausschließlich ein AddOn für ERPConnect. Es baut intern auf ERPConnect auf und wird niemals alleine existieren. Daraus folgt auch, dass eventuell bestehender ERPConnect-Code immer kompatibel zu „LINQ to SAP" sein wird. Es macht also keinen Sinn, bestehenden Code unbedingt auf LINQ to SAP zu migrieren. 
- *LINQ to SAP* funktioniert ausschließlich unter .NET 3.5 (oder höher). Frühere .NET Versionen unterstützten kein LINQ. 
- Der *LINQ to SAP*-Designer funktioniert mit Visual Studio ab der Version 2008 (ohne Express). 
- Um die fertige Anwendung an den Kunden zu verteilen, ist die ERPConnect35.dll oder eine höhere Version mitzugeben. Andere Dlls sind nicht nötig. 


![BW-001](/img/content/BW-001.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
