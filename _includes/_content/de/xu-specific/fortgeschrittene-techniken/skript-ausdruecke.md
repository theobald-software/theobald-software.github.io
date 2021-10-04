### Über Skript-Ausdrücke

Skript-Ausdrücke bieten eine Möglichkeit, dynamische Parameter zu Xtract Universal hinzuzufügen. 
Sie können statt eines fest hinterlegten Wertes verwendet werden und werden zur Laufzeit einer Extraktion herangezogen und aufgelöst.
Die Ausgabe eines Skript-Ausdrucks ist eine Zeichenkette. 
Dieser String kann als Eingabe für weitere .NET-String-Operationen verwendet werden (siehe unten).

Skript-Ausdrücke können in den folgenden Szenarien verwendet werden:
- [Skript-Ausdrücke als Auswahlparameter für Extraktionen](#skript-ausdrücke-als-auswahlparameter-für-extraktionen-verwenden)
- [Skript-Ausdrücke als dynamische Ordnerpfade](#skript-ausdrücke-als-dynamische-ordnerpfade-verwenden)
- [Skript-Ausdrücke in Datenbank-Destinationen](#skript-ausdrücke-in-datenbank-destinationen-verwenden)

### Syntax von Skript-Ausdrücken
Skript-Ausdrücke verwenden eine C#-Syntax. Sie werden mit einem Rautezeichen (#) eingeleitet und beendet. 
Die Formel beginnt mit und endet mit geschweiften Klammern ({}).
Beispiel: <br>
```#{ Extraction.TableName }# ```

{: .box-note }
**Hinweis:** Bei XU-spezifischen benutzerdefinierten Ausdrücken wird zwischen Groß- und Kleinschreibung unterschieden. Es muss die exakte Syntax wie auf dieser Seite dokumentiert verwendet werden.

### Skript-Ausdrücke auf Basis von .NET 
Die Skript-Ausdrücke von Xtract Universal unterstützen die folgenden .NET-Objekte, -Eigenschaften und -Methoden aus dem .NET-Systemnamensraum des aktuellen [.NET-Frameworks](https://help.theobald-software.com/de/xtract-universal/einfuehrung/systemvoraussetzungen#andere-anwendungen-und-frameworks):

*Object*,
*Boolean*,
*Char*,
*String*,
*SByte*,
*Byte*,
*Int16*,
*UInt16*,
*Int32*,
*UInt32*,
*Int64*,
*UInt64*,
*Single*,
*Double*,
*Decimal*,
*DateTime*,
*TimeSpan*,
*Guid*,
*Math*,
*Convert*

{: .box-note }
**Hinweis:** Das gebräuchlichste Anwendungsszenario ist die Verwendung der Methoden und Eigenschaften der .NET-Klassen *DateTime* und *String*. Weitere Informationen zu den unterstützten 
[.NET-Klassen und deren Eigenschaften und Methoden](https://docs.microsoft.com/en-us/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) einschließlich 
[DateTime](https://docs.microsoft.com/de-DE/dotnet/api/system.datetime?view=net-5.0) und [String](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.7.2) finden Sie in der Online-Dokumentation von Microsoft.

**Beispiele:**

|   Eingabe                         | Ausgabe                                                                         | Beschreibung              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Aktuelles Datum im SAP-Format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Aktuelles Datum verkettet mit "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Aktuelles Datum verkettet mit "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Aktuelles Datum verkettet mit "0101""           |
|```#{Extraction.SapObjectName.TrimStart("/".ToCharArray())}# ```                    | BIO/TMATERIAL | Entfernt einen führenden Schrägstrich, z.B. bei /BIO/TMATERIAL, damit kein leeres Verzeichnis angelegt wird.
|```#{Extraction.SapObjectName.Replace('/', '_')}#``` | _BIO_TMATERIAL | Entfernt alle Schrägstriche eines SAP Objekts, z.B. /BIO/TMATERIAL. Dadurch wird verhindert, dass die Schrägstriche innerhalb des Namens des SAP Objekts, nicht als Verzeichnistrenner interpretiert werden.         |

### Skript-Ausdrücke als Auswahlparameter für Extraktionen verwenden

Skript-Ausdrücke können als Auswahlparameter in Tabellen- oder DeltaQ-Extraktionen verwendet werden. 
Sie werden normalerweise verwendet, um ein dynamisches Datum auf der Basis des aktuellen Datums zu bestimmen. 
Bei Tabellenextraktionen werden sie als Teil der [WHERE Bedingung](../table/where-bedingung) verwendet.

Dieses Szenario unterstützt:
- Skript-Ausdrücke, die auf .NET basieren

{: .box-note }
**Hinweis:** Bei Verwendung einer WHERE-Bedingung muss der Wert in einfachen Anführungszeichen angegeben werden.<br>
*Syntax:* ```[Feldname][Leerzeichen][Operator][Leerzeichen]'#[Skript-Ausdruck]#'```<br>
*Beispiel:* ```BUDAT >= '#{DateTime.Now.AddDays(-30).ToString("d")}#'```

### Skript-Ausdrücke als dynamische Ordnerpfade verwenden

{: .box-note }
**Hinweis:** Dies wird derzeit nur für die Destinationen Azure Storage und Amazon AWS S3 unterstützt.

In diesem Szenario werden Skript-Ausdrücke zur Generierung eines dynamischen Ordnerpfads für Destinationen verwendet, die flachen Dateien (Flat Files) schreiben. 
Dadurch kann ein Ordnerpfad generiert werden, der sich aus den Eigenschaften einer Extraktion zusammensetzt, z.B. Extraktionsname, SAP-Quellobjekt.

Dieses Szenario unterstützt:
- Skript-Ausdrücke, die auf .NET basieren
- XU-spezifische, benutzerdefinierte Skript-Ausdrücke

Die folgenden XU-spezifischen benutzerdefinierten Skript-Ausdrücke werden unterstützt: 

| Eingabe                                                  | Beschreibung|
|:--------------------------------------------------------|:-----------|
|```#{Source.Name}# ```|  Name der SAP Quelle|
|```#{Extraction.ExtractionName}# ```| Name der Extraktion |
|```#{Extraction.Type}# ```|  Extraktionstyp wie *Table*, *ODP*, *DeltaQ*, etc. |
|```#{Extraction.SapObjectName}# ```|  Name des SAP Objekts, von dem die Extraktion Daten extrahiert|
|```#{Extraction.Context}# ```|  Beinhaltet nur Werte für ODP Extraktionen. Der Kontext des ODP Objekts, wie *SAPI*, *ABAP_CDS*, etc. |
|```#{Extraction.Timestamp}# ```|  Zeitstempel der Extraktion  |


**Beispiele:** 

| Eingabe                                                   | Ausgabe   | Beschreibung|
|:--------------------------------------------------------|:---------|:-------|
|```#{Source.Name}#/#{Extraction.SapObjectName}#/#{Extraction.ExtractionName}#/#{Extraction.Timestamp}# ```| ```ECC/2LIS_02_ITM/MyDataSource1/2021-01-30_20-27-19.686/[filename]```   | Wenn die SAP Quelle *ECC* heißt, das extrahiert Objekt die SAP Datenwuelle *2LIS_02_ITM* ist und der Extraktionsname *MyDataSource1* lautet, kann der generierte Dateipfad wie in der Spalte *Ausgabe* aussehen.

### Skript-Ausdrücke in Datenbank-Destinationen verwenden

In diesem Szenario werden Skript-Ausdrücke als Teil einer benutzerdefinierten SQL-Anweisung verwendet (siehe [Beispiel](https://help.theobald-software.com/de/xtract-universal/destinationen/microsoft-sql-server#custom-sql-1)).

Dieses Szenario unterstützt:
- Skript-Ausdrücke, die auf .NET basieren
- XU-spezifische, benutzerdefinierte Skript-Ausdrücke

Die folgenden XU-spezifischen benutzerdefinierten Skript-Ausdrücke werden unterstützt: 

| Eingabe                                                 | Beschreibung|
|:--------------------------------------------------------|:-----------|
|```#{Extraction.TableName }# ```|  Name der Datenbanktabelle, in die die extrahierten Daten geschrieben werden|
|```#{Extraction.RowsCount }# ```| Anzahl der extrahierten Zeilen |
|```#{Extraction.RunState}# ```|  Status der Extraktion (Running, FinishedNoErrors, FinishedErrors) |
|```#{(int)Extraction.RunState}# ```|  Status der Extraktion als Return-Code (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors) |
|```#{Extraction.Timestamp}# ```|  Zeitstempel der Extraktion  |

Die folgende XU-spezifische, benutzerdefinierte Funktion kann verwendet werden:

| Eingabe                                                  | Beschreibung|
|:--------------------------------------------------------|:-------|
|``` bool ExistsTable(string tableName) ``` | Prüft, ob die Tabelle auf der Datenbank-Destination existiert. |

### IF-Anweisung 

Eine IF-Anweisung (ternärer Operator) wird unterstützt und hat die folgende Syntax: ```iif([bool condition], [string trueResult], [string falseResult])```

**Beispiele:** 

| Eingabe                                                  | Ausgabe  | Beschreibung|
|:--------------------------------------------------------|:---------|:-------|
|```#{ iif(DateTime.Now.Month==7, "July","Unknown")}# ```| Juli     | Wenn wir uns im 7. Monat befinden, ist der Ausgang "Juli", alles andere ist "Unbekannt".|
|```#{Extraction.ExtractionName}##{ iif(string.IsNullOrEmpty(Extraction.Context), string.Empty, "/" + Extraction.Context)}#```|| *Extraction.Context*  liefert nur bei ODP-Extraktionen ein Ergebnis. Bei allen anderen Extraktionstypen ist das Ergebnis leer. Wenn der Extraktionsname 'SAP_1' und der Extraktionstyp 'Tabelle' ist, würde der resultierende Dateipfad ```SAP_1/[filename]``` lauten. Wenn der Extraktionsname 'SAP_2' und der Extraktionstyp 'ODP' ist und eine SAP DataSource (Extraktionskontext: SAPI) extrahiert wird, wäre der resultierende Dateipfad ```SAP_2/SAPI/[filename]```. 

### Unterstützte Schlüsselwörter

Die folgenden Schlüsselwörter werden unterstützt: 
- true
- false
- null