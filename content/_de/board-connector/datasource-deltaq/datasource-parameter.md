---
ref: bc-datasource-deltaq-06
layout: page
title: Datasource-Parameter
description: Datasource-Parameter
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=datasource_parameter
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

{% include _content/de/datasource-deltaq/datasource-parameter.md %}
 

### Skript Ausdrücke

Skript-Ausdrücke werden unterstützt. <br>
Skript-Ausdrücke können als Auswahlparameter verwendet werden. 
Sie werden normalerweise verwendet, um ein dynamisches Datum auf der Basis des aktuellen Datums zu bestimmen. 

**Beispiele:**

|   Eingabe                         | Ausgabe                                                                         | Beschreibung              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Aktuelles Datum im SAP-Format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Aktuelles Datum verkettet mit "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Aktuelles Datum verkettet mit "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Aktuelles Datum verkettet mit "0101""           |


