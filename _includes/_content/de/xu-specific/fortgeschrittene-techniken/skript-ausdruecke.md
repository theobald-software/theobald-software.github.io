
In Skript-Ausdrücken wird eine Formel in C#.Net-ähnlicher Syntax geschrieben: die Formel muss mit einem Raute-Symbol (#) beginnen und enden und kann als eine dynamische WHERE-Bedingung verwendet werden.

Die folgenden grundlegenden .NET Objekte werden standardmäßig unterstützt:
- Operationen aus dem System-Namensraum
- Verkettungen

Beispiele:

| Beschreibung                           | Eingabe                                                                         | Ausgabe              |
|---------------------------------------|-------------------------------------------------------------------------------|---------------------|
| Jetziges Datum und Zeitstempel            |```'#{ DateTime.Now}#'```                                                             | DD.MM.YYYY HH:MM:SS |
| Datum vor 5 Tagen. Wenn heutiges Datum 10., dann wird 05. ausgegeben.| ```'#{ DateTime.Now.AddDays(-5).ToString("d") }#'```     | DD.MM.YYYY          |
| Jetziges Datum                          | ```'#{ DateTime.Now.ToShortDateString() }#'```                                        | DD.MM.YYYY          |
| Jetziges Datum im SAP-Format            | ```'#{ DateTime.Now.ToString("yyyyMMdd") }#'```                                       | yyyyMMdd            |
| Jetziges Jahr mit "0101" verketten | ```'#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#'```                     | yyyy0101            |
| Jetziges Jahr mit "0101" verketten | ```'#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#'```                    | yyyy0101            |
| Jetziges Jahr mit "0101" verketten | ```'#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#'``` | yyyy0101            |


### Verwendung

Sript-Ausdrücke können sowohl für die [Where-Bedingung](../table/where-bedingung) einer Tabelle als auch in den Destination Settings mittels [Custom SQL](https://help.theobald-software.com/de/xtract-universal/xu-zielumgebungen/microsoft-sql-server/sql-server-custom-sql) (Xtract Universal Beispiel) verwendet werden. 

{: .box-note }
**Hinweis:** Die Werte bei der Verwendung einer WHERE-Bedingung sind stets in einfachen Anführungsstrichen anzugeben.<br>
*Syntax:*```[field_name][Leerzeichen][operator][Leerzeichen]'#[Skript-Ausdruck]#'```<br>
*Beispiel:*```BUDAT >= '#{DateTime.Now.AddDays(-30).ToString("d")}#'```

### IF-Abfrage

Eine IF-Abfrage hat die folgende Syntax: iif(bool condition, string trueResult, string falseResult)  

Beispiel:

| Beschreibung                                                        | Eingabe                                             | Ausgabe |
|--------------------------------------------------------------------|---------------------------------------------------|--------|
| Wenn wir im 7. Monat sind, dann "July" ausgeben, sonst "Unknown"  | ```#{ iif(DateTime.Now.Month==7, "July","Unknown")}#``` | July   |

### Definierte Methoden

| Beschreibung                           | Eingabe                                                                         |
|---------------------------------------|-------------------------------------------------------------------------------|
| Überprüft, ob die Tabelle auf der Zieldatenbank existiert. | ```bool ExistsTable(string tableName)``` |

### Definierte Eigenschaften

Folgende Ausdrücke sind definiert und können verwendet werden: 

| Beschreibung                           | Eingabe                                                                         |
|---------------------------------------|-------------------------------------------------------------------------------|
| Name der Extraktion | ```#{ Extraction.TableName }#``` |
| Anzahl der extrahierten Datensätze | ```#{ Extraction.RowsCount }#``` |
| Status der Extraktion (Running, FinishedNoErrors, FinishedErrors) | ```#{Extraction.RunState}#``` |
| Status der Extraktion als Zahl (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors | ```#(int)Extraction.RunState}#``` |
| Zeitstempel der Extraktion | ```#{Extraction.Timestamp}#``` |

Sehen Sie auch das [Beispiel](https://help.theobald-software.com/de/xtract-universal/xu-zielumgebungen/microsoft-sql-server/sql-server-custom-sql) für die Verwendung von definierten Ausdrücken mittels Custom-SQL in den Destinationseinstellungen.

### Unterstützte Datentypen

Die vollständige Liste der unterstützen [Datentypen](https://docs.microsoft.com/de-de/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) inklusive [Datum und Zeit](https://docs.microsoft.com/de-de/dotnet/standard/base-types/custom-date-and-time-format-strings) finden Sie in der Online-Hilfe von Microsoft.

### Unterstützte Schlüsselwörter 

Folgende Schlüsselwörter werden unterstützt: 
- true 
- false 
- null


