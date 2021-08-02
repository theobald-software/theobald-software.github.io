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

Willkommen in der Online Help für ERPConnect. <br>
ERPConnect ist eine .NET Programmierbibliothek zum Entwickeln von SAP-Schnittstellen in allen .NET-fähigen Umgebungen.
Das Design und die Implementierung der Schnittstellen ist sehr komfortabel, da für jede Art von SAP-Objekten steht eine eigenständige API zur Verfügung.

![ERP-Connect](/img/content/erpconnect/architecture_erpconnect.png){:class="img-responsive" }

### Extraktionstypen

ERPConnect bietet einen Satz von neun Extraktionstypen, um eine Reihe von Anforderungen der SAP-Datenextraktion abzudecken.

- [**BAPIs and Function Modules**](./bapis-and-function-modules) greift auf BAPIs und RFC-Funktionsmodule zu.
- [**BWCube**](./bw-infocubes-and-bex-queries) extrahiert Daten aus SAP BW InfoCubes und BEx Queries.
- [**IDocs**](./receiving-and-sending-idocs) greift auf SAP IDocs zu.
- [**Query**](./sap-queries) extrahiert ERP-Queries. **Hinweis: nicht die BEx-Queries von BW Cube**.
- [**Table**](./spezialklassen/sap-tabellen-lesen-mit-der-readtable-klasse) extrahiert Daten aus SAP-Tabellen und Views.


### Add-Ons und Tools

*LINQ to SAP* ist ein exklusives Add-On für ERPConnect, das Microsoft's [Language Integrated Query (LINQ)](https://docs.microsoft.com/de-de/dotnet/csharp/programming-guide/concepts/linq/) integriert, um native Datenabfragefunktionen zur Verfügung zu stellen. 
Für weitere Informationen zum *LINQ to SAP* Add-On, siehe [LINQ to SAP](./linq-to-sap).

Im Installationsumfang von ERPConnect sind folgende Tools enthalten:
- [TransactionRecorder](./tools/transaction-recorder)
- [IDoc-Schema-Generator](./tools/idoc-schema-generator)

Weitere Informationen zu den Funktionen von ERPConnect finden Sie in den folgenden Abschnitten:

*****
{% include _content/table-of-contents.html parent="erpconnect" collection=site.de %}