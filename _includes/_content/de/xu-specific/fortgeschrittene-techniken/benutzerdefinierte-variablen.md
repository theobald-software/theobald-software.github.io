Das nachfolgende Beispiel zeigt die Verwendung von benutzerdefinierten Variablen als Filterwerte einer WHERE-Bedingung.

Diese können als benutzerdefinierte (Custom) Laufzeitparametern der Extraktion parametrisiert und somit dynamisiert werden.

In den nachfolgenden Schritten wird die SAP-Standardtabelle T001W (Plants/Branches) verwendet. Die grundlegende Einrichtung einer Tabellenextraktion ist in Abschnitt [Eine neue Extraktion anlegen](../erste-schritte/eine-neue-extraktion-anlegen) beschrieben.

### Erstellung von benutzerdefinierten Variablen

1. Auswahl des Tabs **[WHERE Clause]** und Eingabe der benutzerdefinierten Variablen *@PlantLow* und *@PlantHigh* sowie Open-SQL Operatoren, z.B. `T001W~WERKS BETWEEN @PlantLow AND @PlantHigh`.
![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}
2. Bestätigen der Eingabe mittels **[OK]**.
3. Öffnen des 'Run Extraction' Dialogs mittels **[Run]**.
4. Wechsel zum Tab **[Custom]** (1) der Laufzeitparameter. Anhand des @-Zeichens werden die Variablen erkannt.
5. Tragen Sie die Werte ein und bestätigen Sie über die Eingabetaste.
![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.png){:class="img-responsive"}
6. Die Werte für die Laufzeitparameter werden in der Extraktions-URL sowie des xu.exe commands übernommen, z.B. `xu.exe -s todd.theobald.local -p 8065 -n Plants  -o PlantLow= 1000 -o PlantHigh= 2000`
7. Ausführung der Extraktion durck Klicken auf **[Run]** (2).

Das Austauschen der Variablen mit den Echtwerten wird entsprechend im Protokoll wiedergegeben. Dazu klicken Sie auf den Button **[Log]** im Designer:

``` text
PT00H00M00.064S D LiveDataExtraction: Using Classic RFC SDK
PT00H00M00.065S D LiveDataExtraction: Connecting to SAP application server...
PT00H00M00.065S D LiveDataExtraction: Using plain authentication
PT00H00M00.405S D LiveDataExtraction: Connected to SAP
PT00H00M00.406S D LiveDataExtraction: Host: sap-erp-as05.example.com, System number: 00
PT00H00M00.406S I RunParameter: Parameter 'PlantLow' overriden (new value: '1000')
PT00H00M00.406S I RunParameter: Parameter 'PlantHigh' overriden (new value: '2000')
PT00H00M00.407S I RunParameter: Parameter 'quiet-push' overriden (new value: 'true')
PT00H00M00.422S I TheoReadTableExtractor: Starting extraction - using function module Z_THEO_READ_TABLE
PT00H00M00.426S I TheoReadTableExtractor: Extracting table T001W
PT00H00M00.436S D TheoReadTableExtractor: WHERE WERKS BETWEEN '1000' AND '2000'
PT00H00M00.436S D TheoReadTableExtractor: HAVING clause is empty
PT00H00M00.436S D TheoReadTableExtractor: Data will be extracted in dialog work process
PT00H00M00.437S D TheoReadTableExtractor: Fetching packages (50,000 rows per package)
PT00H00M00.503S D TheoReadTableExtractor: Z_THEO_READ_TABLE version 1.x
PT00H00M00.503S D TheoReadTableExtractor: Received package #1 (8 rows)
PT00H00M00.507S I LiveDataExtraction: Starting to write 8 rows to destination...
PT00H00M00.514S I LiveDataExtraction: Finished writing rows to destination
PT00H00M00.593S I TheoReadTableExtractor: Extraction finished - received 8 rows in total
PT00H00M00.593S D LiveDataExtraction: Writing results to destination completed
```

****
#### Weiterführende Links:
- [XU Custom Parameter in Power BI](../xu-destinationen/Power-BI-Connector/pbi-xu-parameter)
- [Erläuterung des QlikSense Datenlade-Skripts](../xu-destinationen/qlik/einstellungen_in_qlik_sense#erläuterung-des-qliksense-datenlade-skripts)
- [WHERE Bedingung](../table/where-bedingung)
- [Extraktion einplanen](./extraktion_einplanen)
