---
ref: erpconnect-04
layout: page
title: SAP Query
description: SAP Queries
product: erpconnect
parent: erpconnect
childidentifier: sap-queries
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-queries
---

Der folgende Abschnitt zeigt, wie man SAP Queries mit ERPConnect ansteuert und extrahiert.

{: .box-note }
**Hinweis**: Die Query-Komponente bezieht sich auf Queries, die Sie in den Transaktionen **SQ02** und **SQ01** erstellen.
Wenn Sie eine BW Query als Datengrundlage verwenden möchten, siehe [SAP BW](./sap-bw).

### Über SAP Queries

SAP Queries werden verwendet, um auf Datenmengen zuzugreifen, siehe [SAP Hilfe -Arbeiten mit Queries](https://help.sap.com/viewer/b1c834a22d05483b8a75710743b5ff26/7.51.6/de-DE/0e05493bbccf41a79caed7099c82bd48.html) for more information.


Das Eingabebild der Query wird durch die *SelectParameters*-Collection gefüllt. 
Jeder Eingabeparameter kann beliebig viele Werte enthalten. 
Die Werte werden durch sog. Ranges dargestellt. 
Außerdem enthält ein Query-Objekt eine *Fields*-Collection, die die Ausgabefelder enthält. 

Die nachfolgende Grafik zeigt die Objekthierarchie der ERPConnect Queries-Klassen. <br>
![SAP-Query-Object-Model](/img/content/SAP-Query-Object-Model.png){:class="img-responsive"}

*****
Weitere Informationen zum Arbeiten mit den ERPConnect Queries-Klassen finden Sie in den folgenden Unterabschnitten:
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}