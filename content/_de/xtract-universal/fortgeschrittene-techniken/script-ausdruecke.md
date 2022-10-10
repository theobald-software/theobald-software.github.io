---
ref: xu-advanced-techniques-10
layout: page
title: Skript-Ausdrücke
description: Skript-Ausdrücke
product: xtract-universal
parent: fortgeschrittene-techniken
progressstate: 5
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=skript-ausdruecke
---

### Über Skript-Ausdrücke

Skript-Ausdrücke bieten eine Möglichkeit, dynamische Parameter zu Xtract Universal hinzuzufügen. 
Sie werden zur Laufzeit einer Extraktion aufgelöst.
Die Ausgabe eines Skript-Ausdrucks ist ein String. 
Dieser String kann als Eingabe für weitere .NET-String-Operationen verwendet werden.

Skript-Ausdrücke können in den folgenden Szenarien verwendet werden:
- als Auswahlparameter in [Table](../table/where-bedingung#skript-ausdrücke) und [DeltaQ](../datasource-deltaq/datasource-parameter#skript-ausdrücke) Extraktionen.
- als Custom SQL-Anweisungen in [Datenbank-Destinationen](../destinationen#datenbanken--data-warehouses).
- als dynamische Ordnerpfade in den Destinationen [Amazon AWS S3](../destinationen/amazon_aws_s3#folder), [Azure Storage](../destinationen/azure-storage#folderdestinationen/azure-storage#folder) und [Hadoop](../destinationen/hadoop#hadoop-remote-folder).
- als dynamische Dateinamen in Push-Destinationen.

{% include _content/de/xu-specific/fortgeschrittene-techniken/skript-ausdruecke.md %}