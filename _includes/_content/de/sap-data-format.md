{: .box-warning }
**Warnung! Geben Sie Werte immer in der SAP internen Datendarstellung ein:** <br>
Datum: Das Datum 01.01.1999 hat die interne Darstellung 19990101 (JJJJMMTT).<br>
Jahresperiode: Die Jahresperiode 001.1999 hat die interne Darstellung 1999001 (JJJJPPP).<br>
Zahlen und Nummern: Zahlen müssen führende Nullen enthalten, z.B. hat die Kundennummer 1000 die interne Darstellung 0000001000.

Eingaben die nicht der SAP internen Datendarstellung entsprechen, resultieren in einer Fehlermeldung wie:
> ERPConnect.ABAPProgramException: RfcInvoke failed(RFC_ABAP_MESSAGE): Enter date in the format __.__.____