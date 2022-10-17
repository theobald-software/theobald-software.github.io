
### Verwendung von HAVING-Bedingung

Mit einer HAVING-Bedingung können Zeilengruppen gefiltert werden, siehe [SAP ABAP Dokumentation: SELECT-HAVING](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-de/abaphaving_clause.htm).

Das folgende Beispiel zeigt, wie viele Materialien einer Materialart (MTART) zugeordnet sind. 
Nach Anwendung der HAVING-Bedingung zeigt die Vorschau nur die Materialarten mit mehr als 10 zugeordneten Materialien.

{: .box-note}
**Hinweis:** Aggregatfunktionen sind nur für nummerische Felddatentypen verfügbar, deswegen wird das Feld BRGEW (Bruttogewicht) im aufgeführten Beispiel verwendet.

1. Wählen Sie eine Aggregatfunktion (1) für ein Feld aus, das Sie in der HAVING-Bedingung verwenden möchten.
![Extraction-Settings-01](/img/content/table/Table-Extraction-Having-Clause1.png){:class="img-responsive"}
2. Navigieren Sie zum Tab **HAVING Clause** (2).
2. Geben Sie die HAVING-Bedingung ein.
3. Um die Ergebnisse im Abschnitt **Preview** anzuzeigen, klicken Sie auf **[Load live preview]**.
![Extraction-Settings-01](/img/content/table/having-clause.png){:class="img-responsive"}


{: .box-note }
**Hinweis:** Wenn der Feldname nicht eindeutig ist, muss der Tabellenname dem Feldnamen vorangestellt werden, z.B. MAKT~MATNR. Dies kann z.B. bei [Table Joins](./table-joins) der Fall sein.    

### Syntax der HAVING-Bedingung  
Bezüglich Syntax und Formeln gelten bei der HAVING-Bedingung dieselben Bestimmungen wie bei der [WHERE-Bedingung](./where-bedingung#syntax-der-where-bedingung).
