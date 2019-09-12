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
{% include _content/de/table/where-bedingung.md  %}

**SSIS-Variablen**

Es ist auch möglich, SSIS-Variablen in dem Where-String zu verwenden, wie man das von SQL-Statements gewohnt ist. Definieren Sie beispielsweise eine Variable VKORG im Datenflusstask und formulieren Sie Ihr Where-Statement wie folgt: VKORG = @vkorg. Xtract IS erkennt anhand des @-Symbols, dass dieser Platzhalter ersetzt werden muss.

Sobald die Datenquelle entsprechend konfiguriert ist, stehen die Ausgabespalten für die weitere Verarbeitung zur Verfügung.