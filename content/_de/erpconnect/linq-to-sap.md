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
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 nicht mehr unterstützt.


*LINQ to SAP* ist ein exklusives Add-On für ERPConnect, das Microsoft’s [Language Integrated Query (LINQ)](https://docs.microsoft.com/de-de/dotnet/csharp/programming-guide/concepts/linq/) integriert, um native Datenabfragefunktionen zur Verfügung zu stellen.
Das Add-On bietet einen Designer für mehr Benutzerfreundlichkeit.
 
*LINQ to SAP* ist ausschließlich für ERPConnect. Es baut intern auf ERPConnect auf und existiert nicht als alleinstehendes Tool. 
Daher ist ERPConnect-Code immer kompatibel mit *LINQ to SAP*.
Um die fertige Anwendung an den Kunden zu verteilen, stellen Sie Ihren Kunden die ERPConnect35.dll (oder höher) zur Verfügung. Andere .dlls sind nicht nötig. 

### Technische Voraussetzungen

- Microsoft.NET 3.5 oder höher. Frühere .NET Versionen unterstützten kein LINQ. 
- Visual Studio 2008 order höher (ohne Express). 

Weitere Informationen zum Arbeiten mit *LINQ to SAP* finden Sie in den folgenden Unterabschnitten.

****
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
