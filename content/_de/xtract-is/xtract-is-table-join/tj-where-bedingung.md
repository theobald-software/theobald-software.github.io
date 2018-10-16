---
ref: xi-join-table-04
layout: page
title: Where-Bedingung
description: Where-Bedingung
product: xtract-is
parent: xtract-is-table-join
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=tj-where-bedingung
---

Im Bereich *Criteria* klicken Sie auf den Link, um die Where-Bedingung definieren. 

![tj-where-0](/img/content/tj-where-0.jpg){:class="img-responsive"}

Klicken Sie auf Field, um ein Feld zu wählen.

![tj-where-1](/img/content/tj-where-1.jpg){:class="img-responsive"}

Wählen Sie ein Feld aus der Liste, in der die Namen der Tabelle und des Feldes getrennt durch das Tilde-Zeichen in der Form 'Tabelle~Feld' stehen.

![tj-where-2](/img/content/tj-where-2.jpg){:class="img-responsive"}

Wählen Sie einen Operator aus der Liste:<br>
EQ: gleich (equal)<br>
NE: ungleich (not equal)<br>
LT: kleiner als (less than)<br>
LE: kleiner oder gleich (less or equal than) <br>
GT: größer als (greater than)<br>
GE: größer oder gleich (greater or equal than) <br>
LIKE: Bestimmt, ob eine bestimmte Zeichenfolge mit einem angegebenen Muster übereinstimmt. <br>
        WHERE MAKT~SPRAS LIKE 'D%' findet alle Sprachen, die mit dem Buchstaben 'D' anfangen.<br>
NOT LIKE: Negation von LIKE.<br>
IS NULL: Ist NULL.<br>
IS NOT NULL: Ist nicht NULL.

![tj-where-operation](/img/content/tj-where-operation.jpg){:class="img-responsive"}

Anschließend können Sie einen Wert eingeben. Auch Variablen in der Form @MyWert werden hier unterstützt. 

![tj-where-value](/img/content/tj-where-value.jpg){:class="img-responsive"}

Nun haben wir die Bedingung definiert. 

![tj-where-3](/img/content/tj-where-3.jpg){:class="img-responsive"}

**Neue Bedingung** 

Klicken Sie rechts auf das Symbol, um eine neue Bedingung einzugeben. 

![tj-where-single-criteria](/img/content/tj-where-single-criteria.jpg){:class="img-responsive"}

Hier haben Sie folgende Optionen, um die Bedingungen  zu verbinden:<br>
AND (und): Beide Bedingungen müssen wahr sein.<br>
OR (oder): Eine Bedingung oder beiden Bedingungen müssen wahr sein.

![tj-where-and](/img/content/tj-where-and.jpg){:class="img-responsive"}

Sie können auch eine Kriteriengruppe hinzufügen. Dazu klicken Sie auf das entsprechende Symbol rechts.

![tj-where-criteria-group](/img/content/tj-where-criteria-group.jpg){:class="img-responsive"}
![tj-where-criteria-group-2](/img/content/tj-where-criteria-group-2.jpg){:class="img-responsive"}

**Manuelle Eingabe / Open SQL** 

Um die Bedingung manuell einzugeben, klicken Sie rechts auf dem Icon und bestätigen Sie die Warnung, dass die definierten Bedingungen verloren gehen. 

![tj-where-4](/img/content/tj-where-4.jpg){:class="img-responsive"}

Nun können Sie die Bedingung frei mit Open SQL (nach dem SAP-Syntax) eingeben. 

![tj-where-5](/img/content/tj-where-5.jpg){:class="img-responsive"}

**Syntax der Where-Bedingung** 

Die WHERE-Bedingung muss dem SAP OpenSQL Syntax entsprechen.

- Vor und nach dem Gleichheitszeichen müssen Sie immer ein Leerzeichen eingeben, z.B. JAHR = '1999'. Für YEAR= '1999 ', YEAR ='1999' or YEAR='1999' erhalten Sie die Fehlermeldung 'A dynamically specified column Name is unknown'.
- Fließkommazahlen müssen immer in einfache Hochkommata gesetzt werden, z.B. KMENG > '10.3'.  Für KMENG > 10.3 erhalten Sie die Fehlermeldung 'The WHERE clause has an unexpected format'.
- Die Where-Bedingung darf keinen Zeilenumbruch (Eingabe-Taste) enthalten.

Weitere Informationen über die OpenSQL Syntax finden Sie auf der SAP Hilfe-Seite: [https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-de/abapwhere.htm?file=abapwhere.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-de/abapwhere.htm?file=abapwhere.htm)

**Interne SAP-Darstellung**

Werte müssen in interner SAP-Darstellung angegeben werden: 

- Das Datum 01.01.1999 hat die interne Darstellung 19990101 (YYYYMMDD)
- Die Periode 001.1999 hat die interne Darstellung  1999001 (YYYYPPP)
- Bei Nummern müssen auch führende Nullen angegeben werden: Kundennumer 1000 hat die interne Darstellung 0000001000.
