---
ref: ec-linq-to-sap-03
layout: page
title: Einschränkungen beim Tabellenzugriff
description: Einschränkungen beim Tabellenzugriff
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-einschraenkungen-beim-tabellenzugriff
---

Bei der Extraktion von Tabellen aus älteren SAP-Systemen können Sie bei der Verwendung des SAP-Standardfunktionsbausteins (RFC_READ_TABLE) auf einige Einschränkungen stoßen.

### Einschränkungen von RFC_READ_TABLE 
Insbesondere bei älteren SAP Releases bestehen einige Einschränkungen bei der Extraktion von Tabellen wenn der SAP Standardfunktionsbaustein (RFC_READ_TABLE) verwendet wird:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten
- Andere Einschränkungen existieren abhängig von der SAP-Version. 
  Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.
- Schlechte Extraktionsperformance bei Extraktion großer Tabellen.

Um die o.g. Einschränkungen zu umgehen, installieren Sie den Z-Funktionsbaustein *Z_THEO_READ_TABLE* von Theobald Software auf Ihrem SAP-System.

{: .box-warning }
**Warnung! Error while converting value '\*.0' of row 1530, column 3** <br>
Der SAP-Standardbaustein *RFC_READ_TABLE* zur Tabellenextraktion kann den ABAP-Datentyp DEC nur bedingt extrahieren. Dies führt zu dem genannten Beispielfehler bei der Extraktion.<br>
Verwenden Sie den Funktionsbaustein von Theobald Software *Z_THEO_READ_TABLE*. 

#### Z_THEO_READ_TABLE installieren

Kontaktieren Sie den [Theobald Support](mailto:support@theobald-software.com), um den SAP-Transportauftrag *Z_THEO_READ_TABLE* anzufordern.<br>
Sobald der Funktionsbaustein im System verfügbar ist, können Sie ihn aktivieren, indem Sie den Namen des Funktionsbausteins im LINQ-Table Fenster eintragen. <br>
![LINQToERP-Tables-004](/img/content/LINQToERP-Tables-004.png){:class="img-responsive"}

### Einschränkung der LINQ-Ausdrücke
Nicht alle LINQ-Ausdrücke sind bei *LINQ to SAP* technisch realisierbar oder sinnvoll. <br>
Neben den klassischen Ausdrücken wie den Operatoren <, > und =, bietet *LINQ to SAP* ausgeschriebene Funktionen:

- *Equals* (=)
- *Contains* (LIKE "%..%")
- *StartsWith* (LIKE "%...") 
- *EndsWith* (LIKE "…%")
- *InList* 

*InList* ist allerdings nur aktiv, wenn *ERPConnect.Linq* als using-Statement angegeben ist (bzw. bei den Imports unter VB). 

```csharp
using ERPConnect.Linq; 
  
[…] 
  
var MyTexts = from t in sc.MAKTList 
         where t.MATNR.StartsWith("100") 
         && t.SPRAS.InList("D","E") 
         select t;
```
