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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

### Über Skript-Ausdrücke

Skript-Ausdrücke bieten eine Möglichkeit, dynamische Parameter zu Xtract Universal hinzuzufügen. 
Sie werden zur Laufzeit einer Extraktion aufgelöst.
Die Ausgabe eines Skript-Ausdrucks ist ein String. 
Dieser String kann als Eingabe für weitere .NET-String-Operationen verwendet werden.

Skript-Ausdrücke können in den folgenden Szenarien verwendet werden:
- als Auswahlparameter in [Table](../table/where-bedingung#skript-ausdrücke) und [DeltaQ](../datasource-deltaq/datasource-parameter#skript-ausdrücke) Extraktionen.
- als Custom SQL-Anweisungen in [Datenbank-Destinationen](../destinationen#datenbanken--data-warehouses).
- als dynamische Ordnerpfade in den Destinationen [Amazon S3](../destinationen/amazon_aws_s3#folder) und [Azure Storage](../destinationen/azure-storage#folderdestinationen/azure-storage#folder).
- als dynamische Dateinamen in Push-Destinationen.

{% include _content/de/xu-specific/fortgeschrittene-techniken/skript-ausdruecke.md %}

### Liste verfügbarer Skript-Ausdrücke

{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/folder-script-expressions.md %}

#### Skript-Ausdrücke als Auswahlparameter in Table und DeltaQ Extraktionen

Skript-Ausdrücke werden verwendet, um ein dynamisches Datum auf der Basis des aktuellen Datums zu bestimmen. <br>
Um Skript-Ausdrücke in WHERE-Bedingungen zu verwenden, müssen sie in einfache Anführungszeichen gesetzt werden.

**Syntax:**<br>
```[Field_name][Space][Operator][Space]'#[Script-Expression]#'```<br>
```BUDAT >= '#{DateTime.Now.AddYears(-5).ToString("yyyyMMdd")}#'```

**Beispiele:**

|   Eingabe                         | Ausgabe                                                                         | Beschreibung              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Aktuelles Datum im SAP-Format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Aktuelles Datum verkettet mit "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Aktuelles Datum verkettet mit "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Aktuelles Datum verkettet mit "0101""           |
