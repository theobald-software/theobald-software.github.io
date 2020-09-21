---
ref: xi-table-07
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 7
lang: de_DE

---
Die folgenden Properties sind parametrisierbar:

|Property Name|Beschreibung|
|:----|:----|
| `[Xtract Table].[WhereClause]`| Durch Verwendung eines logischen Ausdrucks, schränkt die Anzahl der Zeilen ein, die in der Ergebnismenge durch die SELECT-Anweisung einer Abfrage enthalten sind.5|
| `[Xtract Table].[ConvertsDates]`|Konvertiert das SAP-Datenformat vom Typ Character in ein spezielles Datumsformat.|
| `[Xtract Table].[CustomFunctionName]`| Gibt den Namen des für die Datenextraktion verwendeten Funktionsbausteins an.|
| `[Xtract Table].[MaxRows]`|Gibt die maximale Anzahl der extrahierten Datensätze an.|
| `[Xtract Table].[MinDateReplacement]`|Datumskonvertierungen werden im Falle ungültiger Daten in SAP-Datumsfeldern angewendet.|
| `[Xtract Table].[MaxDateReplacement]`|Datumskonvertierungen werden im Falle ungültiger Daten in SAP-Datumsfeldern angewendet.|
| `[Xtract Table].[PackageSize]`| Gibt die Anzahl der pro Datenpaket abgerufenen Datensätze an.|


Weitere Informationen zur Parametrisierung finden Sie im Knowledge-Base-Artikel ["Dynamization of WHERE conditions of the XIS table components"](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)

