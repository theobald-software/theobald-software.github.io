Variables can be set as user-defined (custom) runtime parameters of an extraction.
The following example shows how to use user-defined variables as filter values in a WHERE condition.

In the following steps, the SAP standard table T001W (Plants/Branches) is used. The basic setup of a table extraction is described in section [Defining a Table Extraction](../getting-started/define-a-table-extraction).

### Creating user-defined variables

1. Select the tab *WHERE Clause* and enter the user-defined variables *@PlantLow* and *@PlantHigh* as well as Open-SQL operators, e.g. 'T001W~WERKS BETWEEN @PlantLow AND @PlantHigh'.
![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}
2. Click **[OK]** to confirm the input.
3. Click **[Run]**. The window 'Run Extraction' opens.
4. Switch to the tab *Custom* (1) of the runtime parameters. The variables are recognised by the @ sign.
5. Enter the values and confirm by pressing the enter key.
![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.png){:class="img-responsive"}
6. The values for the run-time parameters are taken from the extraction URL and the xu.exe command, e.g. `xu.exe -s todd.theobald.local -p 8065 -n Plants -o PlantLow= 1000 -o PlantHigh= 2000`.
7. Click **[Run]** (2) to execute the extraction.

The exchange of variables with real values is logged in the protocol. Click the **[Log]** button in the Designer to access the protocoll:

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
#### Related Links:
- [XU Custom Parameters in Power BI](../xu-destinations/Power-BI-Connector/pbi-xuparameters)
- [QlikSense Data Load Script Explanation](../xu-destinations/qliksense-qlikview/settings-in-qlik-sense#qliksense-data-load-script-explanation)
- [WHERE Clause](../table/where-clause)
- [Scheduling an extraction](./scheduling_extraction)
