
In Skript-Ausdrücken wird eine Formel in C# Syntax geschrieben:Die Formel muss mit einem Raute-Symbol (#) beginnen und enden und kann als eine dynamische WHERE-Bedingung verwendet werden.

Die folgenden grundlegenden .NET Objekte werden standardmäßig unterstützt:
- Operationen aus dem System-Namensraum
- Verkettungen

**Beispiele:** 

|Eingabe|Ausgabe|Beschreibung|
|:---|:---|:---|
|```#{ DateTime.Now}#``` | DD.MM.YYYY HH:MM:SS | Jetziges Datum und Zeitstempel  |
| ```#{ DateTime.Now.AddDays(-5).ToString("d") }#```     							  | DD.MM.YYYY          | Datum vor 5 Tagen. Wenn heutiges Datum 10.01.2020, dann wird 05.01.2020 ausgegeben.|
| ```#{ DateTime.Now.ToShortDateString() }#```                                        | DD.MM.YYYY        | Jetziges Datum  |
| ```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd            | Jetziges Datum im SAP-Format |
| ```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101            | Jetziges Jahr mit "0101" verketten |
| ```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101            | Jetziges Jahr mit "0101" verketten |
| ```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101            | Jetziges Jahr mit "0101" verketten |
|```#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}# ```                    | BIO/TMATERIAL | Entfernt einen führenden Schrägstrich, z.B. bei /BIO/TMATERIAL, damit kein leeres Verzeichnis angelegt wird.
|```#{Extraction.SapObjectName.Replace('/', '_')}#``` | _BIO_TMATERIAL | Entfernt alle Schrägstriche eines SAP Objekts, z.B. /BIO/TMATERIAL. Dadurch wird verhindert, dass die Schrägstriche innerhalb des Namens des SAP Objekts, nicht als Verzeichnistrenner interpretiert werden.         |


### Verwendung

Skript-Ausdrücke können an foldenen Stellen in Xtract Universal verwendet werden:
- Für die [WHERE-Bedingung](../table/where-bedingung) einer Tabelle.
- Als Selektionsparameter einer DeltaQ-Extraktion.
- In den Destination Settings der Datenbank-Destinationen mittels [Custom SQL](https://help.theobald-software.com/de/xtract-universal/xu-destinationen/microsoft-sql-server/sql-server-custom-sql) (Xtract Universal Beispiel). 
- Als Verzeichnispfad der Azure-Storage-Destination.

{: .box-note }
**Hinweis:** Die Werte bei der Verwendung einer WHERE-Bedingung sind stets in einfachen Anführungsstrichen anzugeben.<br>
*Syntax:*```[field_name][Leerzeichen][Operator][Leerzeichen]'#[Skript-Ausdruck]#'```<br>
*Beispiel:*```BUDAT >= '#{DateTime.Now.AddDays(-30).ToString("d")}#'```


### Definierte Eigenschaften

Folgende Ausdrücke sind definiert und können verwendet werden: 

#### Skript-Ausdrücke bei Datenbank-Destinationen:

| Eingabe                           | Beschreibung                                                                         |
|:--------------------------------------|:------------------------------------------------------------------------------|
| ```#{ Extraction.TableName }#``` | Name der Extraktion |
| ```#{ Extraction.RowsCount }#``` | Anzahl der extrahierten Datensätze |
| ```#{Extraction.RunState}#``` | Status der Extraktion (Running, FinishedNoErrors, FinishedErrors) |
| ```#(int)Extraction.RunState}#``` | Status der Extraktion als Zahl (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors |
| ```#{Extraction.Timestamp}#``` | Zeitstempel der Extraktion |

Sehen Sie sich dazu auch das [Beispiel](https://help.theobald-software.com/de/xtract-universal/xu-destinationen/microsoft-sql-server/sql-server-custom-sql) für die Verwendung von definierten Ausdrücken mittels Custom-SQL in den Destinationseinstellungen an.

#### Skript-Ausdrücke bei der Azure Storage-Destination:

| Eingabe                                                   | Beschreibung|
|:--------------------------------------------------------|:-----------|
|```#{Source.Name}# ```|  Name der SAP Quelle der Extraktion.|
|```#{Extraction.ExtractionName}# ```| Name der Extraktion. |
|```#{Extraction.Type}# ```|  Extraktionstyp, z.B. *Table*, *ODP*, *DeltaQ*, etc. |
|```#{Extraction.SapObjectName}# ```|  Name des SAP Objekts, das bei der Extraktion verwendet wird. |
|```#{Extraction.Context}# ```|  Liefert eine Rückgabe nur bei ODP-Extraktionen. Kontext einer ODP-Extraktion, z.B. *SAPI*, *ABAP_CDS*, etc. |
|```#{Extraction.Timestamp}# ```|  Zeitstempel der Extraktion  |


**Beispiele:** 

| Eingabe                                                   | Ausgabe   | Beschreibung|
|:--------------------------------------------------------|:---------|:-------|
|```#{Source.Name}#/#{Extraction.SapObjectName}#/#{Extraction.ExtractionName}#/#{Extraction.Timestamp}# ```| ```ECC/2LIS_02_ITM/MyDataSource1/2021-01-30_20-27-19.686/[filename]```   | Annahme: Die SAP Quelle lautet *ECC*, es wird die SAP DataSource *2LIS_02_ITM* extrahiert und der Name der Extraktion lautet *MyDataSource1*.

### IF-Abfrage

Eine IF-Abfrage hat die folgende Syntax: ```iif([bool condition], [string trueResult], [string falseResult])```

**Beispiele:** 

| Eingabe                                                | Ausgabe   |   Beschreibung |
|:---|:---|:---|
|```#{ iif(DateTime.Now.Month==7, "July","Unknown")}#``` | July   | Wenn wir im 7. Monat sind, dann wird "July" ausgeben, sonst "Unknown"
|```#{Extraction.ExtractionName}##{ iif(string.IsNullOrEmpty(Extraction.Context), string.Empty, "/" + Extraction.Context)}#```|| *Extraction.Context* liefert nur bei ODP-Extraktionen eine Rückgabe. Bei allen anderen Extraktionstypen ist die Rückgabe leer. Annahme: Der Name der Extraktion lautet 'SAP_1' und es handelt sich um eine Extraktion vom Typ 'Table'; der erzeugte Dateipfad lautet dann: ```SAP_1/[filename]```. Annahme: Der Name der Extraktion lautet 'SAP_2', es handelt sich um eine Extraktion vom Typ 'ODP' und eine DataSource (SAPI) wird extrahiert; der erzeugte Dateipfad lautet dann:```SAP_2/SAPI/[filename]```. 

### Definierte Methoden

|    Eingabe                        | Beschreibung                                                                         |
|:--------------------------------------|:------------------------------------------------------------------------------|
| ```bool ExistsTable(string tableName)``` | Überprüft, ob die Tabelle auf der Zieldatenbank existiert.|


### Unterstützte Datentypen

Die vollständige Liste der unterstützen [Datentypen](https://docs.microsoft.com/de-de/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) inklusive [Datum und Zeit](https://docs.microsoft.com/de-de/dotnet/standard/base-types/custom-date-and-time-format-strings) finden Sie in der Online-Dokumentation von Microsoft.


### Unterstützte Schlüsselwörter 

Folgende Schlüsselwörter werden unterstützt: 
- true 
- false 
- null


