---
layout: page
title: Skript-Ausdrücke
description: Skript-Ausdrücke
product: xtract-universal
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=skript-ausdruecke
---

Eine Formel wird in C#.NET-ähnlicher Syntax geschrieben und muss mit #{ anfangen und #} enden.<br>
Grundlegende .NET Typen und die entsprechenden Operationen aus dem System-Namensraum der .NET-Umgebung sowie Verkettungen werden standardmäßig unterstützt. 

Schauen wir uns nun folgende Beispiele an.

| Beschreibung                           | Eingabe                                                                         | Ausgabe              |
|---------------------------------------|-------------------------------------------------------------------------------|---------------------|
| Jetziges Datum und Zeitstempel            | #{ DateTime.Now}#                                                             | 23.07.2013 10:17:37 |
| Datum vor 5 Tagen                       | #{ DateTime.Now.AddDays(-5).ToString("d") }#                                  | 18.07.2013          |
| Jetziges Datum                          | #{ DateTime.Now.ToShortDateString() }#                                        | 23.07.2013          |
| Jetziges Datum im SAP-Format            | #{ DateTime.Now.ToString("yyyyMMdd") }#                                       | 20130723            |
| Jetziges Jahr mit "0101" verketten | #{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#                     | 20130101            |
| Jetziges Jahr mit "0101" verketten | #{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#                    | 20130101            |
| Jetziges Jahr mit "0101" verketten | #{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }# | 20130101            |

**IF-Abfrage**<br>
Eine IF-Abfrage hat die folgende Syntax: iif(bool condition, string trueResult, string falseResult)  

Schauen wir uns das folgende Beispiel an.

| Beschreibung                                                        | Eingabe                                             | Ausgabe |
|--------------------------------------------------------------------|---------------------------------------------------|--------|
| Wenn wir im 7. Monat sind, dann "July" ausgeben, sonst "Unknown"  | #{ iif(DateTime.Now.Month==7, "July","Unknown")}# | July   |

**Definierte Ausdrücke**

**Definierte Methoden**

bool ExistsTable(string tableName): überprüft, ob die Tabelle auf der Zieldatenbank existiert.


**Definierte Eigeschaften** 

Folgende Ausdrücke sind definiert und können verwendet werden: 

```
#{ Extraction.TableName }# : Name der Extraktion 
#{ Extraction.RowsCount }# : Anzahl der extrahierten Datensätze
#{Extraction.RunState}#: Status der Extraktion (Running, FinishedNoErrors, FinishedErrors)
#{(int)Extraction.RunState}#: Status der Extraktion als Zahl (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors)
#{Extraction.Timestamp}#: Zeitstempel der Extraktion
```

Damit kann man als Custom SQL bei der Finalization folgendes in die Zieltabelle [ExtractionStatistics] einfügen: 

{% highlight sql %}
INSERT INTO [ExtractionStatistics]
(
     [Timestamp], 
     [TableName], 
     [RowsCount]
)
VALUES
(
     '#{Extraction.Timestamp}#', 
     '#{Extraction.TableName}#', 
     '#{Extraction.RowsCount}#'
);
{% endhighlight %}


**Unterstützte Datentypen**<br>
Folgende .NET-Datentypen werden unterstützt:<br>
Object, object<br>
Boolean, bool<br>
Char, char<br>
String, string<br>
SByte<br>
Byte, byte<br>
int<br>
Int16<br>
UInt16<br>
Int32<br>
UInt32<br>
long<br>
Int64<br>
UInt64<br>
Single<br>
Double, double<br>
Decimal, decimal<br>
DateTime<br>
TimeSpan<br>
Guid<br>
Math und<br> 
Convert<br>

**Unterstützte Schlüsselwörter**

Folgende Schlüsselwörter werden unterstützt: <br>
true, false und null.

Informationen zu den .NET-Typen und Format für Datum und Zeit finden Sie im MSDN.



**Verwendung** 

Script-Ausdrücke können in der Where-Bedingung einer Tabelle sowie im Skript der Extraction-Specific Settings eines Datenziels.  
