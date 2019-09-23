Eine WHERE-Bedingung kann im Karteireiter *WHERE Clause* hinterlegt und das Ergebnis mit *Load live preview* angezeigt werden. Beachten Sie, dass bei nicht eindeutigen Feldnamen, der Tabellenname in der WHERE Bedingung aufgeführt sein muss (z.B. MAKT~MATNR). Dies kann z.B. bei Tabellen-Joins der Fall sein.     

![Extraction-Settings-01](/img/content/Table-Extraction-Where-Clause.png){:class="img-responsive"}

Die WHERE-Bedingung muss der SAP OpenSQL Syntax entsprechen.

- Vor und nach dem Gleichheitszeichen müssen Sie immer ein Leerzeichen eingeben, z.B. JAHR = '1999'. Für YEAR= '1999 ', YEAR ='1999' or YEAR='1999' erhalten Sie die Fehlermeldung 'A dynamically specified column Name is unknown'.
- Fließkommazahlen müssen immer in einfache Hochkommata gesetzt werden, z.B. KMENG > '10.3'.  Für KMENG > 10.3 erhalten Sie die Fehlermeldung 'The WHERE clause has an unexpected format'.
- Die Where-Bedingung darf keinen Zeilenumbruch (Eingabe-Taste) enthalten.

Weitere Informationen über die OpenSQL Syntax finden Sie auf der [SAP Hilfe-Seite](https://help.sap.com/doc/saphelp_nw70ehp3/7.03.19/en-US/fc/eb3969358411d1829f0000e829fbfe/frameset.htm)
**Interne SAP-Darstellung**

- Werte müssen in interner SAP-Darstellung angegeben werden: 
Das Datum 01.01.1999 hat die interne Darstellung 19990101 (YYYYMMDD)
- Die Periode 001.1999 hat die interne Darstellung  1999001 (YYYYPPP)
- Bei Nummern müssen auch führende Nullen angegeben werden: Kundennumer 1000 hat die interne Darstellung 0000001000.



