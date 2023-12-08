---
ref: xi-table-04
layout: page
title: WHERE Bedingung
description: WHERE Bedingung
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=where-bedingung
---
Mit einer WHERE-Bedingung können Tabelleneinträge gefiltert werden, siehe [SAP ABAP Dokumentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-de/abapwhere.htm).

Beim Definieren einer WHERE-Bedingung können Sie auch die [Einstellungen](./extraction-settings) anpassen.

{% include _content/de/table/where-bedingung.md  %}
{% include _content/de/table/where-bedingung-syntax.md  %}
{% include _content/de/table/where-bedingung-editor.md  %}

### SSIS-Variablen im WHERE Clause Editor

1. Definieren Sie eine SSIS Variable. Weisen Sie der Variable den korrekten Datentyp zu.
2. Öffnen Sie die Xtract Table Komponente und öffnen Sie den *WHERE Clause* Tab.
3. Klicken Sie auf **[Editor mode]**, um den WHERE Clause Editor zu öffnen.
4. Fügen Sie der WHERE-Bedingung über **[Add Criteria]** und **[Default with Parameter]** ein neues Kriterium hinzu.
5. Klicken Sie auf die *Parameter* Komponente des Kriteriums. Eine Drop-Down-Liste öffnet sich und zeigt alle verfügbaren Parameter und Variablen an.
Wählen Sie eine der Variablen aus.<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
6. Weisen Sie der Variablen einen Wert zu und klicken Sie auf **[Load live Preview]**, um die WHERE-Bedingung zu testen. 

**** 
#### Weiterführende Links

- [Delta Table Extraction](https://kb.theobald-software.com/tables/delta-table-extraction)
- [Change Data Capture with CDHDR](https://kb.theobald-software.com/tables/change-data-capture-with-cdhdr)
- [Working with Lists in the WHERE-Clause Editor](https://kb.theobald-software.com/tables/where-clause-editor-lists)
- [LIKE Operand in WHERE Clauses](https://kb.theobald-software.com/tables/working-with-like-operand-where-clause)