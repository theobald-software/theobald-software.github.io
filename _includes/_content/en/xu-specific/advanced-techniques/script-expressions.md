A scripted expression has a C#.NET similar syntax and must start with #{ and end with #} .
Basic .NET data types and operations in the System namespace of the .NET Environment including string operations are supported. 

Let's look at the following examples. 

| Description                           | Input                                                                         | Output              |
|---------------------------------------|-------------------------------------------------------------------------------|---------------------|
| Current date and timestamp            |``` #{ DateTime.Now}#```                                                             | 23.07.2013 10:17:37 |
| Date 5 days ago                       |``` #{ DateTime.Now.AddDays(-5).ToString("d") }#```                                  | 18.07.2013          |
| Current date                          |``` #{ DateTime.Now.ToShortDateString() }#```                                        | 23.07.2013          |
| Current date in SAP format            |``` #{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | 20130723            |
| Current year concatenated with "0101" |``` #{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | 20130101            |
| Current year concatenated with "0101" |``` #{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | 20130101            |
| Current year concatenated with "0101" |``` #{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | 20130101            |

**IF statement** 

An if statement is supported and has the following syntax iif(bool condition, string trueResult, string falseResult)  

Let's look at the following example. 

| Description                                                        | Input                                             | Output |
|--------------------------------------------------------------------|---------------------------------------------------|--------|
| When we are in the 7th month, the output is "July", else "Unknown" | #{ iif(DateTime.Now.Month==7, "July","Unknown")}# | July   |

**Defined Expressions** 

**Defined functions**

bool ExistsTable(string tableName): check if the the table exists on the database destination. 

**Defined properties** 

The following expressions are defined and can be used: 
```
#{ Extraction.TableName }# : Name of the extraction
#{ Extraction.RowsCount }# : Count of the extracted rows
#{Extraction.RunState}#: Status of the extraction (Running, FinishedNoErrors, FinishedErrors)
#{(int)Extraction.RunState}#: Status of the extraction as number (2 = Running, 3 = FinishedNoErrors, 4 = FinishedErrors)
#{Extraction.Timestamp}#: Timestamp of the extraction 
```

As an example you can use the following Custom SQL statement in the Finalization phase to insert the information in the table [ExtractionStatistics]: 

```
INSERT INTO [ExtractionStatistics]
(
     [Timestamp],
     [TableName],
     [RowsCount]
)
VALUES
(
     '#{Extraction.Timestamp}#',
     '#{ Extraction.TableName }#',
     '#{ Extraction.RowsCount }#'
);
```


**Supported data types**

Following .NET datatypes are supported:<br>
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
Math and<br>
Convert<br>

**Supported key words** 

Following key words are supported: 
true, false and null.

You can find more information [about the .NET data types](http://msdn.microsoft.com/en-us/library/System%28v=vs.90%29.aspx) and [Date and Time format](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) in MSDN.


**Using Scripted Expressions**

Scripted expressions can be used both for the [where-condition](../table/where-clause) of a table and in the destination settings using [Custom SQL](../xu-destinations/microsoft-sql-server/sql-server-custom-sql).
