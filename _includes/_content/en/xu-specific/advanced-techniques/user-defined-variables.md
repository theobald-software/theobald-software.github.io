Variables can be set as user-defined (custom) runtime parameters of an extraction.
The following example shows how to use user-defined variables as filter values in a WHERE condition.

In the following steps, the SAP standard table T001W (Plants/Branches) is used. The basic setup of a table extraction is described in section [Defining a Table Extraction](../getting-started/define-a-table-extraction).

### Creating user-defined variables

1. Select the tab *WHERE Clause* and enter the user-defined variables *@PlantLow* and *@PlantHigh* as well as Open-SQL operators, e.g. `T001W~WERKS BETWEEN @PlantLow AND @PlantHigh`.
![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}
2. Click **[OK]** to confirm the input.
3. Click **[Run]**. The window 'Run Extraction' opens.
4. Switch to the tab *Custom* (1) of the runtime parameters. The variables are recognised by the @ sign.
5. Enter the values and confirm by pressing the enter key.
![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.png){:class="img-responsive"}
6. The values for the run-time parameters are taken from the extraction URL.
7. Click **[Run]** (2) to execute the extraction.

{: .box-note }
**Note** The overwriting of the variables with the real values is also documented in the log of the extraction.

![Extraction-User-Variables-Log](/img/content/Extraction-User-Variables-log.png){:class="img-responsive"}