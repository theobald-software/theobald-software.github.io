In script expressions, a formula is written in C#.Net-like syntax: the formula must begin and end with a hash symbol (#) and can be used as a dynamic WHERE-condition.

The following basic .NET objects are supported by default:
- Operations from the System Namespace
- Concatenations

Examples:

|   Input                         | Output                                                                         | Description              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now}#```                                                             | DD.MM.YYYY HH:MM:SS | Current date and timestamp |
|```#{ DateTime.Now.AddDays(-5).ToString("d") }#```                                  | DD.MM.YYYY | Date 5 days ago. If today's date is 10th, then 05th is output.         |
|```#{ DateTime.Now.ToShortDateString() }#```                                        | DD.MM.YYYY | Current date         |
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Current date in SAP format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Current year concatenated with "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Current year concatenated with "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Current year concatenated with "0101"           |


### Using Script Expressions

Script expressions can be used both for the [WHERE-condition](../table/where-clause) of a table and in the destination settings using [Custom SQL](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-custom-sql) (Xtract Universal example).

{: .box-note }
**Note:** Using a WHERE-condition the value must be entered in single quotation marks.<br>
*Syntax:*```[Field_name][Space][Operator][Space]'#[Script-Expression]#'```<br>
*Example:*```BUDAT >= '#{DateTime.Now.AddDays(-30).ToString("d")}#'```


### IF-statement 

An IF-statement is supported and has the following syntax: ```iif([bool condition], [string trueResult], [string falseResult])``` 

Example: 

| Input                                                   | Output   | Description|
|:--------------------------------------------------------|:---------|:-------|
|```#{ iif(DateTime.Now.Month==7, "July","Unknown")}# ```| July     | When we are in the 7th month, the output is "July", else "Unknown" |


### Defined functions

| Input                                                   | Description|
|:--------------------------------------------------------|:-------|
|``` bool ExistsTable(string tableName) ``` | Check if the the table exists on the database destination. |


### Defined properties

The following expressions are defined and can be used: 

| Input                                                   | Description|
|:--------------------------------------------------------|:-----------|
|```#{ Extraction.TableName }# ```|  Name of the extraction |
|```#{ Extraction.RowsCount }# ```| Count of the extracted rows |
|```#{Extraction.RunState}# ```|  Status of the extraction (Running, FinishedNoErrors, FinishedErrors) |
|```#{(int)Extraction.RunState}# ```|  Status of the extraction as number (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors) |
|```#{Extraction.Timestamp}# ```|  Timestamp of the extraction  |

See an [example](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-custom-sql) of the use of defined expressions in the destination Custom-SQL settings.
 

### Supported data types

For the complete list of supported [data types](https://docs.microsoft.com/de-de/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) including [date and time](https://docs.microsoft.com/de-de/dotnet/standard/base-types/custom-date-and-time-format-strings), see the Microsoft online help.


### Supported key words

Following key words are supported: 
- true
- false
- null




