---
ref: home-01
layout: page
title: ERPConnect
description: ERPConnect main page
product: erpconnect
parent: home
childidentifier: erpconnect
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/
---

Willkommen in der Online Help für ERPConnect.

ERPConnect ist eine .NET Programmierbibliothek zum Entwickeln von SAP-Schnittstellen in allen .NET-fähigen Umgebungen.
Das Design und die Implementierung der Schnittstellen ist sehr komfortabel, da für jede Art von SAP-Objekten steht eine eigenständige API zur Verfügung.

![ERP-Connect](/img/content/erpconnect/architecture_erpconnect.png){:class="img-responsive" width="800px" }

### Eigenschaften

ERPConnect bietet einen Satz von neun Extraktionstypen, um eine Reihe von Anforderungen der SAP-Datenextraktion abzudecken.

- [**BAPIs and Function Modules**](./rfc-client-funktionen-und-bapis) greift auf BAPIs und RFC-Funktionsmodule zu.
- [**BWCube and BEx Queries**](./sap-bw) extrahiert Daten aus SAP BW InfoCubes und BEx Queries.
- [**IDocs**](./idocs-senden-und-empfangen) sendet und empfängt SAP IDocs.
- [**Query**](./sap-queries) extrahiert SAP Queries. **Hinweis: nicht die BEx-Queries von BW Cube**.
- [**Tables via RFC**](./spezialklassen/sap-tabellen-lesen-mit-der-readtable-klasse) liest SAP-Tabellen direkt per RFC.

Darüber hinaus kann ERPConnect ABAP-Code on-the-fly generieren und ausführen, sowie Transaktionen per Batch-Input steuern.

### Add-Ons und Tools

*LINQ to SAP* ist ein exklusives Add-On für ERPConnect, das Microsoft's [Language Integrated Query (LINQ)](https://docs.microsoft.com/de-de/dotnet/csharp/programming-guide/concepts/linq/) integriert, um native Datenabfragefunktionen zur Verfügung zu stellen. 
Für weitere Informationen zum *LINQ to SAP* Add-On, siehe [LINQ to SAP](./linq-to-sap).

Im Installationsumfang von ERPConnect sind folgende Tools enthalten:
- [Transaction-Recorder](./tools/transactionrecorder)
- [IDoc-Schema-Generator](./tools/idoc-schema-generator)
- [*Function-Template-Generator*](./tools/function-template-generator) 


*****
Weitere Informationen zu den Funktionen von ERPConnect finden Sie in den folgenden Abschnitten:

{% include _content/table-of-contents.html parent="erpconnect" collection=site.de %}