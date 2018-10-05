---
layout: page
title: WHERE Bedingung
description: WHERE Bedingung
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=where-bedingung
---

Die WHERE-Bedingung muss dem SAP OpenSQL Syntax entsprechen.

- Vor und nach dem Gleichheitszeichen müssen Sie immer ein Leerzeichen eingeben, z.B. JAHR = '1999'. Für YEAR= '1999 ', YEAR ='1999' or YEAR='1999' erhalten Sie die Fehlermeldung 'A dynamically specified column Name is unknown'.
- Fließkommazahlen müssen immer in einfache Hochkommata gesetzt werden, z.B. KMENG > '10.3'.  Für KMENG > 10.3 erhalten Sie die Fehlermeldung 'The WHERE clause has an unexpected format'.
- Die Where-Bedingung darf keinen Zeilenumbruch (Eingabe-Taste) enthalten.

Weitere Informationen über die OpenSQL Syntax finden Sie auf der SAP Hilfe-Seite: [https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-de/abapwhere.htm?file=abapwhere.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-de/abapwhere.htm?file=abapwhere.htm)

**Interne SAP-Darstellung**

- Werte müssen in interner SAP-Darstellung angegeben werden: 
Das Datum 01.01.1999 hat die interne Darstellung 19990101 (YYYYMMDD)
- Die Periode 001.1999 hat die interne Darstellung  1999001 (YYYYPPP)
- Bei Nummern müssen auch führende Nullen angegeben werden: Kundennumer 1000 hat die interne Darstellung 0000001000.


**Formeln**

Ab Version 2.13.5 können Sie Script-Ausdrücke in der Where-Klausel verwenden.

![Table-Extraction-Where-Clause-Scripted-Expression](/img/content/Table-Extraction-Where-Clause-Scripted-Expression.jpg){:class="img-responsive"}

Für weitere Infomationen siehe [Skript-Ausdrücke](../fortgeschrittene-techniken/skript-ausdruecke). 