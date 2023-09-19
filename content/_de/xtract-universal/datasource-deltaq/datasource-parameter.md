---
ref: xu-datasource-deltaq-04
layout: page
title: Datasource-Parameter
description: Datasource-Parameter
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 5
lang: de_DE
progressstate: 5
---
{% include _content/de/datasource-deltaq/datasource-parameter.md %}

### Variablen 
Variablen werden unterstützt. <br>
Fügen Sie *@* direkt vor einem Wert ein, um ihn als Variable zu kennzeichnen.

### Skript Ausdrücke

Skript-Ausdrücke können als Auswahlparameter verwendet werden. 
Sie werden normalerweise verwendet, um ein dynamisches Datum auf der Basis des aktuellen Datums zu bestimmen. 

**Beispiele:**

|   Eingabe                         | Ausgabe                                                                         | Beschreibung              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Aktuelles Datum im SAP-Format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Aktuelles Datum verkettet mit "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Aktuelles Datum verkettet mit "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Aktuelles Datum verkettet mit "0101""           |

