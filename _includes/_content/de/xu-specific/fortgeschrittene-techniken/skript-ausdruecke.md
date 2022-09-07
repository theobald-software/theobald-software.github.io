### Über Skript-Ausdrücke

Skript-Ausdrücke bieten eine Möglichkeit, dynamische Parameter zu Xtract Universal hinzuzufügen. 
Sie werden zur Laufzeit einer Extraktion aufgelöst.
Die Ausgabe eines Skript-Ausdrucks ist ein String. 
Dieser String kann als Eingabe für weitere .NET-String-Operationen verwendet werden.

Skript-Ausdrücke können in den folgenden Szenarien verwendet werden:
- als Auswahlparameter für [Table](../table/where-bedingung#skript-ausdrücke) und [DeltaQ](../datasource-parameter#skript-ausdrücke) Extraktionen.
- als dynamische Ordnerpfade in der [Amazon AWS S3](../destinationen/amazon_aws_s3#folder), [Azure Storage](../destinationen/azure-storage#folderdestinationen/azure-storage#folder) und [Hadoop](../destinationen/hadoop#hadoop-remote-folder) Destination.
- als Custom SQL-Anweisungen in [Datenbank-Destinationen](../destinationen/#datenbanken--data-warehouses).


### Syntax von Skript-Ausdrücken
Skript-Ausdrücke verwenden eine C#-Syntax. Sie werden mit einem Rautezeichen (#) eingeleitet und beendet. 
Die Formel beginnt mit und endet mit geschweiften Klammern ({}).

**Beispiel:** <br>
```#{ Extraction.TableName }# ```

{: .box-note }
**Hinweis:** Bei XU-spezifischen benutzerdefinierten Ausdrücken wird zwischen Groß- und Kleinschreibung unterschieden. 
Es muss die exakte Syntax wie auf dieser Seite dokumentiert verwendet werden.

#### IF-Anweisungen 

Eine IF-Anweisung (ternärer Operator) hat die folgende Syntax: ```iif([bool condition], [string trueResult], [string falseResult])```

**Beispiele:** 

| Eingabe                                                  | Ausgabe  | Beschreibung|
|:--------------------------------------------------------|:---------|:-------|
|```#{ iif(DateTime.Now.Month==7, "July","Unknown")}# ```| Juli     | Wenn wir uns im 7. Monat befinden, ist der Ausgang "Juli", alles andere ist "Unbekannt".|
|```#{Extraction.ExtractionName}##{ iif(string.IsNullOrEmpty(Extraction.Context), string.Empty, "/" + Extraction.Context)}#```|| *Extraction.Context*  liefert nur bei ODP-Extraktionen ein Ergebnis. Bei allen anderen Extraktionstypen ist das Ergebnis leer. Wenn der Extraktionsname 'SAP_1' und der Extraktionstyp 'Tabelle' ist, würde der resultierende Dateipfad ```SAP_1/[filename]``` lauten. Wenn der Extraktionsname 'SAP_2' und der Extraktionstyp 'ODP' ist und eine SAP DataSource (Extraktionskontext: SAPI) extrahiert wird, wäre der resultierende Dateipfad ```SAP_2/SAPI/[filename]```. 


### Skript-Ausdrücke auf Basis von .NET 
Die Skript-Ausdrücke von Xtract Universal unterstützen die folgenden .NET-Objekte, -Eigenschaften und -Methoden aus dem .NET-Systemnamensraum des aktuellen [.NET-Frameworks](https://help.theobald-software.com/de/xtract-universal/einfuehrung/systemvoraussetzungen#andere-anwendungen-und-frameworks):

*Object*, *Boolean*, *Char*, *String*, *SByte*, *Byte*, *Int16*, *UInt16*, *Int32*, *UInt32*, *Int64*, *UInt64*, *Single*, *Double*, *Decimal*, *DateTime*, *TimeSpan*, *Guid*, *Math*, *Convert*.

{: .box-note }
**Hinweis:** Das gebräuchlichste Anwendungsszenario ist die Verwendung der Methoden und Eigenschaften der .NET-Klassen *DateTime* und *String*. Weitere Informationen zu den unterstützten 
[.NET-Klassen und deren Eigenschaften und Methoden](https://docs.microsoft.com/en-us/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) einschließlich 
[DateTime](https://docs.microsoft.com/de-DE/dotnet/api/system.datetime?view=net-5.0) und [String](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.7.2) finden Sie in der Online-Dokumentation von Microsoft.

#### Unterstützte Schlüßelworte
Die folgenden Schlüsselworte werden unterstützt: *true*, *false*, *null*.

