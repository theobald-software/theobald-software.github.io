
In Skript-Ausdrücken wird eine Formel in C#.Net-ähnlicher Syntax geschrieben: die Formel muss mit einem Raute-Symbol (#) beginnen und enden und kann als eine dynamische WHERE-Bedingung verwendet werden.

Die folgenden grundlegenden .NET Objekte werden standardmäßig unterstützt:
- Operationen aus dem System-Namensraum
- Verkettungen

Beispiele:

|Eingabe|Ausgabe|Beschreibung|
|:---|:---|:---|
|```#{ DateTime.Now}#``` | DD.MM.YYYY HH:MM:SS | Jetziges Datum und Zeitstempel  |
| ```#{ DateTime.Now.AddDays(-5).ToString("d") }#```     							  | DD.MM.YYYY          | Datum vor 5 Tagen. Wenn heutiges Datum 10.01.2020, dann wird 05.01.2020 ausgegeben.|
| ```#{ DateTime.Now.ToShortDateString() }#```                                        | DD.MM.YYYY        | Jetziges Datum  |
| ```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd            | Jetziges Datum im SAP-Format |
| ```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101            | Jetziges Jahr mit "0101" verketten |
| ```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101            | Jetziges Jahr mit "0101" verketten |
| ```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101            | Jetziges Jahr mit "0101" verketten |



### Verwendung

Skript-Ausdrücke können sowohl für die [WHERE-Bedingung](../table/where-bedingung) einer Tabelle als auch in den Destination Settings mittels [Custom SQL](https://help.theobald-software.com/de/xtract-universal/xu-zielumgebungen/microsoft-sql-server/sql-server-custom-sql) (Xtract Universal Beispiel) verwendet werden. 

{: .box-note }
**Hinweis:** Die Werte bei der Verwendung einer WHERE-Bedingung sind stets in einfachen Anführungsstrichen anzugeben.<br>
*Syntax:*```[field_name][Leerzeichen][Operator][Leerzeichen]'#[Skript-Ausdruck]#'```<br>
*Beispiel:*```BUDAT >= '#{DateTime.Now.AddDays(-30).ToString("d")}#'```


### IF-Abfrage

Eine IF-Abfrage hat die folgende Syntax: ```iif([bool condition], [string trueResult], [string falseResult])```

Beispiel:

| Eingabe                                                | Ausgabe   |   Beschreibung |
|:---|:---|:---|
|```#{ iif(DateTime.Now.Month==7, "July","Unknown")}#``` | July   | Wenn wir im 7. Monat sind, dann "July" ausgeben, sonst "Unknown"


### Definierte Methoden

|    Eingabe                        | Beschreibung                                                                         |
|:--------------------------------------|:------------------------------------------------------------------------------|
| ```bool ExistsTable(string tableName)``` | Überprüft, ob die Tabelle auf der Zieldatenbank existiert.|


### Definierte Eigenschaften

Folgende Ausdrücke sind definiert und können verwendet werden: 

| Eingabe                           | Beschreibung                                                                         |
|:--------------------------------------|:------------------------------------------------------------------------------|
| ```#{ Extraction.TableName }#``` | Name der Extraktion |
| ```#{ Extraction.RowsCount }#``` | Anzahl der extrahierten Datensätze |
| ```#{Extraction.RunState}#``` | Status der Extraktion (Running, FinishedNoErrors, FinishedErrors) |
| ```#(int)Extraction.RunState}#``` | Status der Extraktion als Zahl (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors |
| ```#{Extraction.Timestamp}#``` | Zeitstempel der Extraktion |

Sehen Sie auch das [Beispiel](https://help.theobald-software.com/de/xtract-universal/xu-zielumgebungen/microsoft-sql-server/sql-server-custom-sql) für die Verwendung von definierten Ausdrücken mittels Custom-SQL in den Destinationseinstellungen.


### Unterstützte Datentypen

Die vollständige Liste der unterstützen [Datentypen](https://docs.microsoft.com/de-de/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) inklusive [Datum und Zeit](https://docs.microsoft.com/de-de/dotnet/standard/base-types/custom-date-and-time-format-strings) finden Sie in der Online-Hilfe von Microsoft.


### Unterstützte Schlüsselwörter 

Folgende Schlüsselwörter werden unterstützt: 
- true 
- false 
- null


